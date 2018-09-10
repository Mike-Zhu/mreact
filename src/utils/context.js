export function getContextByTypes(parentContext, contextTypes) {
    let context = {}
    if (!parentContext || !contextTypes) {
        return context
    }
    for (let key in contextTypes) {
        if (parentContext.hasOwnProperty(key)) {
            context[key] = parentContext[key]
        }
    }
    return context
}

export function getChildContext(component, parentContext) {
    if (component.getChildContext) {
        let childConetext = component.getChildContext()
        parentContext = Object.assign({}, parentContext, childConetext)
    }
    return parentContext
}