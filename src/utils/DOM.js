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

export function setProperty(node, property, value) {
    node.setAttribute(property, value)
}

export function insertAfter(node, child, afterChild) {
    node.insertBefore(
        child,
        afterChild ? afterChild.nextSibling : node.firstChild
    )
}

export function removeChild(node, child) {
    node.removeChild(child)
}