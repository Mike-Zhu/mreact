const instantiateComponent = require('./instantiateComponent')
const Reconciler = require('./Reconciler')

class Component{
    constructor(props){
        this.props = props
        this.currentElement = null
        this._renderedComponent = null
        this._renderedNode = null
        console.log(this)
    }

    _construct(element){
        this.currentElement = element
    }

    mountComponent(){
        const renderedElement = this.render()
        console.log('mount',renderedElement)
        const renderedComponent = instantiateComponent(renderedElement)
        this._renderedComponent = renderedComponent

        const _renderedNode = Reconciler.mountComponent(renderedComponent)
        this._renderedNode = _renderedNode
        return _renderedNode
    }
}
module.exports = Component