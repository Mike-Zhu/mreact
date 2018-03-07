// Reconciller

function mountComponent(component) {
    console.log('多泰 mount',component)
    return component.mountComponent()
}

module.exports = {
    mountComponent
}