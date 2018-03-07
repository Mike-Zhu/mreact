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

function setProperty(node,property,value){
    node.setAttribute(property,value)
}
module.exports = {
    empty,
    appendChildren,
    removeProperty,
    setProperty
}