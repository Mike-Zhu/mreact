import * as DOM from './DOM'
import { getUid } from './utils'
import { diffList, patchChildren } from './list-diff'

export function createVcomponent({ type, props }) {
    let vComponent = {
        type,
        props
    }
    if (typeof type === 'function') {
        vComponent.uid = getUid()
    }
    return vComponent
}
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

export function initComponent(vComponent) {
    const { type: Component, props, uid } = vComponent
    const component = new Component(props)
    const { $cache: cache } = component
    const vnode = renderComponent(component)
    const node = initVnode(vnode)
    node.cache = node.cache || {}
    node.cache[uid] = component
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
    if (!type) {
        if(oldVnode !== newVnode){
            node.data = newVnode
        }
        return node
    }
    if (typeof type === 'function') {
        return updateVcomponent(oldVnode, newVnode, node)
    }

    if (typeof type === 'string') {
        return updateElement(oldVnode, newVnode, node)
    }
}

export function updateVcomponent(vcomponent, newVcomponent, node) {
    let uid = vcomponent.uid
    let component = node.cache[uid]
    let { $updater: updater, $cache: cache } = component
    node.cache[newVcomponent.uid] = component
    component.forceUpdate()
    return cache.node
}

export function updateElement(oldVnode, newVnode, node) {
    let diffProps = getDiffProps(oldVnode.props, newVnode.props)
    diffProps && setProps(node, diffProps)
    updateChildren(oldVnode, newVnode, node)
}

export function updateChildren(oldVnode, newVnode, node) {
    let { diff, newChildren,children } = diffList(oldVnode, newVnode)
    patchChildren(node, diff)
    let childNodes = node.childNodes
    for (let i = 0; i < children.length; i++) {
        compareTwoVnodes(children[i], newChildren[i], childNodes[i])
    }
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