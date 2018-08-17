import instantiateComponent from './instantiateComponent'
import * as Reconciler from './Reconciler'
import diff from './vdom/diff'
import patch from './vdom/patch'

const ReactComponentSymbol = {}

class Updater {
    constructor(instance) {
        this.instance = instance
        this.pendingStates = []
    }

    addState(nextState) {
        this.pendingStates.push(nextState)
    }

    getState() {
        const { instance } = this
        let _pendingState = {}
        while (this.pendingStates.length > 0) {
            let partialState = this.pendingStates.shift()
            _pendingState = Object.assign({}, instance.state, partialState)
        }
        return _pendingState
    }
}
class Component {
    constructor(props) {
        this.$updater = new Updater(this)
        this.props = props
        this._currentElement = null
        this._currentVnode = null
        this._currentNode = null
    }

    static isReactComponent = ReactComponentSymbol

    _construct(element) {
        this._currentElement = element
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
        this._pendingState = Object.assign({}, this.state, partialState)
        this.updateComponent(this._currentElement, this._currentElement)
    }

    updateComponent(preElement, nextElement) {

    }
}

function shouldUpdateComponent(prevElement, nextElement) {
    return prevElement.type === nextElement.type
}
export default Component