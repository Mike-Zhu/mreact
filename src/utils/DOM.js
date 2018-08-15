function empty(node) {
    [].slice.call(node.childNodes).forEach(child => {
        node.removeChild(child)
    });
}

function appendChildren(node, children) {
    if (Array.isArray(children)) {
        children.forEach(child => {
            node.appendChild(child)
        })
    } else {
        node.appendChild(children)
    }
}

function removeProperty(node, property) {
    node.removeAttributeNode(property)
}

function setProperty(node, property, value) {
    node.setAttribute(property, value)
}

function insertAfter(node, child, afterChild) {
    node.insertBefore(
        child,
        afterChild ? afterChild.nextSibling : node.firstChild
    )
}

function removeChild(node, child) {
    node.removeChild(child)
}


module.exports = {
    empty,
    appendChildren,
    removeProperty,
    setProperty,
    insertAfter,
    removeChild
}