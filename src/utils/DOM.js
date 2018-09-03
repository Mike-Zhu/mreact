import {
    ELEMENT_NODE_TYPE,
    DOC_NODE_TYPE,
    DOCUMENT_FRAGMENT_NODE_TYPE
} from './utils'

export function empty(node) {
    [].slice.call(node.childNodes).forEach(child => {
        node.removeChild(child)
    });
}

export function appendChildren(node, children) {
    if (Array.isArray(children)) {
        children.forEach(child => {
            node.appendChild(child)
        })
    } else if (typeof children === 'string' || typeof children === 'number') {
        node.append(children)
    } else {
        node.appendChild(children)
    }
}

export function removeProperty(node, property) {
    node.removeAttributeNode(property)
}


export function isValidContainer(node) {
    return !!(node && (
        node.nodeType === ELEMENT_NODE_TYPE ||
        node.nodeType === DOC_NODE_TYPE ||
        node.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE
    ))
}