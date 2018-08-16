import el from './vdom/element'
import * as Reconciler from './Reconciler'

export default class DOMComponent {
    constructor(element) {
        this._currentElement = element
        this._domNode = null
    }
    unmountComponent() {
        this.unmountChildren()
    }

    mountComponent() {
        return this.getVdomTree(this._currentElement)
    }

    getVdomTree(rootElement) {
        if (typeof rootElement.type === 'function') {
            const instantiateCompo = new rootElement.type(rootElement.props)
            instantiateCompo._construct(rootElement)
            const _reactVnode = Reconciler.mountComponent(instantiateCompo)
            return _reactVnode
        } else if (typeof rootElement === 'string' || typeof rootElement === 'number') {
            return el('span', {}, [rootElement])
        }
        const { type, props = {} } = rootElement
        let children = props.children
        rootElement.children = children
        delete props.children
        if (typeof children === 'string' || typeof children === 'number') {
            children = [children]
        }
        return el(type, props, children.map(res => this.getVdomTree(res)))
    }
    
}