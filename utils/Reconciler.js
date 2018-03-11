// Reconciller

function mountComponent(component) {
    console.log('多泰 mount', component)
    return component.mountComponent()
}

function receiveComponent(component, nextElement) {
    if (component._currentElement === nextElement) return
    component.updateComponent(component._currentElement, nextElement)
}
module.exports = {
    mountComponent,
    receiveComponent
}