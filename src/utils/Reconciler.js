// Reconciller

export function mountComponent(component) {
    return component.mountComponent()
}

export function receiveComponent(component, nextElement) {
    if (component._currentElement === nextElement) return
    component.updateComponent(component._currentElement, nextElement)
}

export function unmountComponent(component) {
    component.unmountComponent()
}
