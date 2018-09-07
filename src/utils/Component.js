import { renderComponent, compareTwoVnodes, clearPending } from './virturn-dom'
import * as _ from './utils'
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

class Updater {
    constructor(instance) {
        this.instance = instance
        this.pendingStates = []
        this.pendingCallbacks = []
        this.isPending = false
        this.nextProps = this.nextContext = null
        this.clearCallbacks = this.clearCallbacks.bind(this)
    }


    addState(nextState) {
        if (nextState) {
            this.pendingStates.push(nextState)
            if (!this.isPending) {
                this.emitUpdate()
            }
        }
    }

    replaceState(nextState) {
        let { pendingStates } = this
        pendingStates.pop()
        pendingStates.push([nextState])
    }

    emitUpdate(nextProps, nextContext) {
        this.nextProps = nextProps
        this.nextContext = nextContext

        nextProps || updateQueue.isPending
            ? updateQueue.add(this)
            : this.updateComponent()
    }
    getState() {
        //针对 replace 和 nextState 是回调函数的做了处理
        const { instance, pendingStates } = this
        let { state, props } = this
        if (pendingStates.length === 0) {
            return state
        }
        state = Object.assign({}, state)
        while (pendingStates.length > 0) {
            let nextState = pendingStates.shift()
            let isReplace = _.isArray(nextState)
            if (isReplace) {
                nextState = nextState[0]
            }
            if (_.isFunction(nextState)) {
                nextState = nextState.call(instance, state, props)
            }
            if (isReplace) {
                state = Object.assign({}, nextState)
            } else {
                state = Object.assign(state, nextState)
            }
        }
        return state
    }

    addCallback(nextCallback) {
        if (_.isFunction(nextCallback)) {
            this.pendingCallbacks.push(nextCallback)
        }
    }

    clearCallbacks() {
        let { pendingCallbacks, instance } = this
        if (pendingCallbacks.length > 0) {
            this.pendingCallbacks = []
            pendingCallbacks.forEach(callback => callback.call(instance))
        }
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
    console.log(nextState)
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

    forceUpdate(callback) {
        let { $updater: updater, $cache, props, context, state } = this
        if (!$cache.isMounted) {
            return
        }
        if (updater.isPending) {
            updater.addState(state)
            return
        }
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
        if (this.componentDidUpdate) {
            this.componentDidUpdate(props, state, context)
        }
        if (callback) {
            callback.call(this)
        }
        updater.isPending = false
        updater.emitUpdate()
    }

    setState(partialState, callback) {
        this.$updater.addState(partialState)
        this.$updater.addCallback(callback)
    }
}
export default Component