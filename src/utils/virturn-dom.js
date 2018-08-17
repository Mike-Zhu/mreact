import * as DOM from './DOM'

export function initVnode(vnode) {
    let { type } = vnode,
        node = null
    if (!type) {
        node = initText(vnode)
    } else if (typeof type === 'string') {
        node = initElement(vnode)
    } else if (typeof type === 'function') {
        node = initComponent(vnode)
    }
    return node
}

export function initText(text) {
    return document.createTextNode(text)
}

export function initElement(vnode) {
    const { type, props } = vnode
    const { children } = props
    let node = document.createElement(type)
    setProps(node, props)
    children.forEach(childVnode => {
        DOM.appendChildren(node, initVnode(childVnode))
    });
    return node
}

export function initComponent(oldComponent) {
    const { type: Component, props } = oldComponent
    const component = new Component(props)
    const vnode = renderComponent(component)
    const node = initVnode(vnode)
    return node
}

export function renderComponent(component) {
    return component.render()
}

export function setProps(node, props) {
    let ignoreList = ['children']
    for(let name in props){
        if(ignoreList.find(res => res === name)){
            continue
        }else if(name === 'style'){
            let styleObject = props[name]
            for(let sKey in styleObject){
                node.style[sKey] = styleObject[sKey]
            }
            continue
        }
        node.setAttribute(name,props[name])
    }
}