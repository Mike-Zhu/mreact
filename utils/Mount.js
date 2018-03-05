const instantiateComponent = require('./instantiateComponent')
const Reconciler = require('./Reconciler')
const DOM = require('./DOM')


function mount(element, node) {
    //element => component
    const component = instantiateComponent(element)
    //component => element
    const renderedNode = Reconciler.mountComponent(component)

    DOM.empty(node)
    DOM.appendChildren(node, renderedNode)
}

function render(element, node) {
    mount(element, node)
}

module.exports = {
    render
}