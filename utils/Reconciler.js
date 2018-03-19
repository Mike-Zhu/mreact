// Reconciller

function mountComponent(component) {
    console.log(component)
    return component.mountComponent()
}

function receiveComponent(component, nextElement) {
    if (component._currentElement === nextElement) return
    component.updateComponent(component._currentElement, nextElement)
}

function unmountComponent(component) {
    component.unmountComponent()
}

module.exports = {
    mountComponent,
    receiveComponent,
    unmountComponent
}