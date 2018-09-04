import { renderComponent, compareTwoVnodes, clearPending } from './virturn-dom'

const ReactComponentSymbol = {}

export let updateQueue = {
    isPending: false,
    updaters: [],
    add: function (updater) {
        if (this.updaters.indexOf(updater) < 0) {
            this.updaters.push(updater)
        }
    },
    batchUpdate: function () {
        if (this.isPending) {
            return
        }
        this.isPending = true
        let updater
        while (updater = this.updaters.shift()) {
            updater.updateComponent()
        }
        this.isPending = false
    }
}
let i = 0, j = 0
class Updater {
    constructor(instance) {
        this.instance = instance
        this.pendingStates = []
        this.isPending = false
    }

    addState(nextState) {
        this.pendingStates.push(nextState)
        console.log(nextState)
        this.emitUpdate()
    }
    emitUpdate() {
        updateQueue.isPending
            ? updateQueue.add(this)
            : this.updateComponent()
    }
    getState() {
        const { instance } = this
        let _pendingState = instance.state
        while (this.pendingStates.length > 0) {
            let partialState = this.pendingStates.shift()
            _pendingState = Object.assign({}, instance.state, partialState)
        }
        return _pendingState
    }

    updateComponent() {
        //这里做节流
        //emitUpdate的次数可能多余实际需要的
        let { instance, pendingStates, nextProps, nextContext } = this
        if (nextProps || pendingStates.length > 0) {
            nextProps = nextProps || instance.props
            nextContext = nextContext || instance.context
            this.nextProps = this.nextContext = null
            shouldUpdate(instance, nextProps, this.getState(), nextContext, this.clearCallbacks)
        }
    }
}

function shouldUpdate(component, nextProps, nextState, nextContext, callback) {
    let shouldComponentUpdate = true
    if (component.shouldComponentUpdate) {
        shouldComponentUpdate = component.shouldComponentUpdate(nextProps, state, nextContext)
    }
    if (!shouldComponentUpdate) {
        component.props = nextProps
        component.context = nextContext || {}
        component.state = nextState
        return
    }
    let cache = component.$cache
    cache.props = nextProps
    cache.state = nextState
    cache.context = nextContext || {}
    component.forceUpdate(callback)
}

class Component {
    constructor(props) {
        this.$updater = new Updater(this)
        this.$cache = {
            isMounted: false
        }
        this.props = props
    }

    isReactComponent() {
        return ReactComponentSymbol
    }

    forceUpdate() {
        let { $updater: updater, $cache, props, context, state } = this
        if (!$cache.isMounted) {
            return
        }
        if (updater.isPending) {
            updater.addState(state)
            return
        }
        debugger
        updater.isPending = true
        let { vnode, node } = $cache
        let nextState = $cache.state || state
        let nextProps = $cache.props || props
        let nextContext = $cache.context || context
        $cache.props = $cache.state = $cache.context = null

        this.state = nextState
        this.props = nextProps
        this.context = nextContext

        let newVnode = renderComponent(this)
        $cache.vnode = newVnode
        compareTwoVnodes(vnode, newVnode, node)
        clearPending()
        updater.isPending = false
        updater.emitUpdate()
    }

    setState(partialState) {
        this.$updater.addState(partialState)
    }
}
export default Component