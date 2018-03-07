const instantiateComponent = require('./instantiateComponent')
const Reconciler = require('./Reconciler')
const DOM = require('./DOM')


function mount(element, node) {
    console.log(element)
    //element => component
    const component = instantiateComponent(element)
    console.log('mount 根元素')
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