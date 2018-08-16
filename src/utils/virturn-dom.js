export function initVnode(vnode) {
    let { type } = vnode,
        node = null
    switch (typeof type) {
        case undefined:
            node = initText(vnode)
            break
        case 'string':
            node = initElement(vnode)
            break
        case 'function':
            node = initComponent(vnode)
            break
    }
    return node
}

export function initText(text) {
    return document.createTextNode(text)
}

export function initElement(vnode) {

}

export function initComponent(vnode) {

}