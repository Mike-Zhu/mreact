import * as DOM from './DOM'
import { getUid } from './utils'
import { diffList } from './list-diff'
import {
    VTEXT,
    VELEMENT,
    VSTATELESS,
    VCOMPONENT,
    getChildrenFromVcomponent,
    MOVES_ADD,
    MOVES_DELETE,
    MOVES_REORDER,
    isString
} from './utils'

export function createVcomponent({ vtype, type, props, key, ref }) {
    let vcomponent = {
        type,
        props,
        vtype,
        key,
        ref
    }
    if (vtype === VCOMPONENT) {
        vcomponent.uid = getUid()
    }
    return vcomponent
}

export function initVnode(vcomponent) {
    let { vtype } = vcomponent,
        node = null
    if (!vtype) { // init text
        node = initText(vcomponent)
    } else if (vtype === VELEMENT) {
        node = initElement(vcomponent)
    } else if (vtype === VCOMPONENT) {
        node = initComponent(vcomponent)
    } else if (vtype === VSTATELESS) {
        node = initStateless(vcomponent)
    }
    return node
}

export function initText(text) {
    return document.createTextNode(text)
}

export function initElement(vcomponent) {
    const { type, props } = vcomponent
    let vchildren = getChildrenFromVcomponent(vcomponent)
    let node = document.createElement(type)
    setProps(node, props)
    vchildren.forEach(childVnode => {
        DOM.appendChildren(node, initVnode(childVnode))
    })

    return node
}

export function initComponent(vcomponent) {
    const { type: Component, props, uid } = vcomponent
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

export function initStateless(vcomponent) {
    const { uid } = vcomponent
    const vnode = getStateless(vcomponent)
    const node = initVnode(vnode)
    node.cache = node.cache || {}
    node.cache[uid] = vnode
    return node
}

export function getStateless(vcomponent) {
    const { type: factory, props, uid } = vcomponent
    let vnode = factory(props)
    if (vnode && vnode.render) {
        vnode = vnode.render()
    }
    return vnode
}

export function renderComponent(component) {
    return component.render()
}

export function destroyVnode(vcomponent, node) {
    const { vtype } = vcomponent
    if (vtype === VELEMENT) {

    } else if (vtype === VCOMPONENT) {

    }
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
    const { vtype, type } = oldVnode
    if (!type) {
        if (oldVnode !== newVnode) {
            node.data = newVnode
        }
        return node
    }

    if (vtype === VCOMPONENT) {
        return updateVcomponent(oldVnode, newVnode, node)
    }
    if (vtype === VSTATELESS) {
        return updateStateless(oldVnode, newVnode, node)
    }

    if (vtype === VELEMENT) {
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

export function updateStateless(vcomponent, newVcomponent, node) {
    let uid = vcomponent.uid
    let vnode = node.cache[uid]
    delete node.cache[uid]
    let newVnode = getStateless(newVcomponent)
    let newNode = compareTwoVnodes(vnode, newVnode, node)
    newNode.cache = newNode.cache || {}
    newNode.cache[uid] = newVnode
    return newVnode
}

export function updateElement(oldVnode, newVnode, node) {
    let diffProps = getDiffProps(oldVnode.props, newVnode.props)
    diffProps && setProps(node, diffProps)
    updateChildren(oldVnode, newVnode, node)
    return node
}

export function updateChildren(oldVnode, newVnode, node) {
    let { diff, newChildren, children } = diffList(oldVnode, newVnode)
    let childNodes = node.childNodes
    let j = 0
    for (let i = 0; i < children.length; i++) {
        if (newChildren !== 'listNull') {//listNull说明需要删掉，会在patch里删除
            compareTwoVnodes(children[i], newChildren[i], childNodes[i - j])
            if (newChildren[i] === null) {
                //如果newChildren[i] 是null，说明不带key并且已经被删除了，nodes需要向前瞬移一位
                j++
            }

        }
    }
    patchChildren(node, diff)
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

export function patchChildren(node, diff) {
    let childNodes = node.childNodes
    if (diff.length > 0) {
        diff.forEach(function (singleDiff) {
            switch (singleDiff.type) {
                //delete
                case MOVES_DELETE:
                    node.removeChild(childNodes[singleDiff.index])
                    break
                //add
                case MOVES_ADD:
                    var newNode = isString(singleDiff.item) ? singleDiff.item : initVnode(singleDiff.item)
                    if (childNodes.length > singleDiff.index) {
                        node.insertBefore(newNode, childNodes[singleDiff.index])
                    } else {
                        node.appendChild(newNode)
                    }
                    break
                //move
                case MOVES_REORDER:
                    node.insertBefore(childNodes[singleDiff.oldIndex], childNodes[singleDiff.newIndex])
                    break
            }
        })
    }
}