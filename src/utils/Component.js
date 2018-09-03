import { renderComponent, compareTwoVnodes } from './virturn-dom'

const ReactComponentSymbol = {}

export let updateQueue = {
    isPending: false,
    updaters: [],
    add: function (updater){
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
        let { instance } = this
        instance.forceUpdate()
    }
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
        let { $updater, $cache, props, context } = this
        console.log(this)
        console.log($updater.isPending)
        this.state = $updater.getState()
        let { vnode, node } = $cache
        let newVnode = renderComponent(this)
        $cache.vnode = newVnode
        return compareTwoVnodes(vnode, newVnode, node)
    }

    setState(partialState) {
        this.$updater.addState(partialState)
    }
}
export default Component