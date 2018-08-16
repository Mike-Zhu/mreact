import instantiateComponent from './instantiateComponent'
import * as Reconciler from './Reconciler'
import * as DOM from './DOM'


function mount(element, node) {
    //element => component
    const component = instantiateComponent(element)
    //component => element
    const renderedNode = Reconciler.mountComponent(component)
    DOM.empty(node)
    DOM.appendChildren(node, renderedNode.render())
}

export default function render(element, node) {
    mount(element, node)
}