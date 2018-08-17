import * as DOM from './DOM'
import { getUid, prospDiffType } from './utils'

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
    if (Array.isArray(children)) {
        children.forEach(childVnode => {
            DOM.appendChildren(node, initVnode(childVnode))
        })
    } else {
        DOM.appendChildren(node, initText(children))
    }
    return node
}

export function initComponent(oldComponent) {
    const { type: Component, props } = oldComponent
    const component = new Component(props)
    const { $cache: cache } = component
    const vnode = renderComponent(component)
    const node = initVnode(vnode)
    vnode.uid = getUid()
    cache.vnode = vnode
    cache.node = node
    cache.isMounted = true
    return node
}

export function renderComponent(component) {
    return component.render()
}

export function destroyVnode(oldVnode, node) {

}

export function compareTwoVnodes(oldVnode, newVnode, node) {
    let newNode = node
    console.log(newVnode)
    if (!newVnode) {
        //如果新节点是空，销毁node并且移移除
        destroyVnode(oldVnode, node)
        node.parentNode.removeChild(node)
    } else if (oldVnode.type !== newVnode.type || oldVnode.key !== newVnode.key) {
        //type或者key不同，完全重构
        destroyVnode(oldVnode, node)
        newNode = initVnode(newVnode)
        node.parentNode.replaceChild(newNode, node)
    } else {
        //非上述情况则更新
        newNode = updateVnode(oldVnode, newVnode, node)
    }
    return newNode
}

export function updateVnode(oldVnode, newVnode, node) {
    const { type } = oldVnode
    console.log(type)
    if (!type) {
        return node
    }
    if (typeof type === 'function') {
        return updateVcomponent(oldVnode, newVnode, node)
    }

    if (typeof type === 'string') {
        return updateElement(oldVnode, newVnode, node)
    }
}

export function updateVcomponent(oldVnode, newVnode, node) {

}

export function updateElement(oldVnode, newVnode, node) {
    let diffProps = getDiffProps(oldVnode.props, newVnode.props)
    console.log(node,diffProps)
    diffProps && setProps(node, diffProps)
}

export function getDiffProps(props, newProps) {
    let changeProps = {},
        count = 0,
        ignoreList = ['children', 'key']
    for (let name in props) {
        if (newProps[name] !== props[name] && ignoreList.indexOf(name) < 0) {
            changeProps[name] = newProps[name]
            count++
        }
    }
    for (let name in newProps) {
        if (!props.hasOwnProperty(name) && ignoreList.indexOf(name) < 0) {
            changeProps[name] = newProps[name]
            count++
        }
    }
    return count > 0 && changeProps
}

export function setProps(node, props) {
    let ignoreList = ['children', 'key']
    for (let name in props) {
        if (ignoreList.find(res => res === name)) {
            continue
        } else if (name === 'style') {
            let styleObject = props[name]
            for (let sKey in styleObject) {
                node.style[sKey] = styleObject[sKey]
            }
            continue
        }
        node.setAttribute(name, props[name])
    }
}