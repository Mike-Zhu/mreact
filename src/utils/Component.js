import instantiateComponent from './instantiateComponent'
import * as Reconciler from './Reconciler'
import diff from './vdom/diff'
import patch from './vdom/patch'

class Component {
    constructor(props) {
        this.props = props
        this._currentElement = null
        this._currentVnode = null
        this._currentNode = null
    }

    _construct(element) {
        this._currentElement = element
    }

    mountComponent() {
        console.log(this)
        if(this._currentVnode){
            return _Vnode
        }
        const _Vnode = this.getVnode()
        _Vnode.__instanseReactComponent = this
        this._currentVnode = _Vnode
        if(this.compomentDidMount){
            this.compomentDidMount()
        }
        return _Vnode
    }

    getVnode() {
        const renderedElement = this.render()
        const _vComponent = instantiateComponent(renderedElement)
        const _Vnode = Reconciler.mountComponent(_vComponent)
        return _Vnode
    }

    setState(partialState) {
        // debugger;
        this._pendingState = Object.assign({}, this.state, partialState)
        this.updateComponent(this._currentElement, this._currentElement)
    }

    updateComponent(preElement, nextElement) {
        if (preElement !== nextElement) {
            //表示是props变化，重组了Element
        }
        // //这里负责state变化那一部分
        // //重新设置一些参数
        this._currentElement = nextElement
        
        this.props = nextElement.props
        this.state = this._pendingState || this.state
        this._pendingState = null

        const _currentVnode = this._currentVnode
        const _nextVnode = this.getVnode()
        this._currentVnode = _nextVnode
        if (shouldUpdateComponent(_currentVnode, _nextVnode)) {
            const diffList = diff(_currentVnode, _nextVnode)
            const _currentNode = this._currentNode
            patch(_currentNode, diffList)
        } else {

        }
    }
}

function shouldUpdateComponent(prevElement, nextElement) {
    return prevElement.type === nextElement.type
}
export default Component