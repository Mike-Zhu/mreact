import { renderComponent, compareTwoVnodes } from './virturn-dom'

const ReactComponentSymbol = {}

export let updateQueue = {
    isPending:false,
}
class Updater {
    constructor(instance) {
        this.instance = instance
        this.pendingStates = []
    }

    addState(nextState) {
        this.pendingStates.push(nextState)
    }
    emitUpdate() {
        this.updateComponent()
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
        this.state = $updater.getState()
        let { vnode, node } = $cache
        let newVnode = renderComponent(this)
        $cache.vnode = newVnode
        return compareTwoVnodes(vnode, newVnode, node)
    }

    mountComponent() {
        if (this._currentVnode) {
            return _Vnode
        }
        const _Vnode = this.getVnode()
        _Vnode.__instanseReactComponent = this
        this._currentVnode = _Vnode
        return _Vnode
    }
    setState(partialState) {
        this.$updater.addState(partialState)
        this.forceUpdate()
    }
}

function shouldUpdateComponent(prevElement, nextElement) {
    return prevElement.type === nextElement.type
}
export default Component