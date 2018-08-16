import _ from './util'

export default function Element(tagName, props, children) {
    if (!(this instanceof Element)) {
        return new Element(tagName, props, children)
    }
    if (Array.isArray(props)) {
        children = props
        props = {}
    }

    this.tagName = tagName
    this.props = props || {}
    this.children = children || []
    this.key = props
        ? props.key
        : void 666

    var childNodesLength = 0
    this.children.forEach((child, i) => {
        if (child instanceof Element) {
            childNodesLength += child.childNodesLength
        } else {
            children[i] = '' + child
        }
        childNodesLength++
    })
    //下属子元素的数量，包含深层子元素的数量
    this.childNodesLength = childNodesLength
}

Element.prototype.render = function () {
    var $el = this.tagName === 'fragment'
        ? document.createDocumentFragment()
        : document.createElement(this.tagName)
    var props = this.props
    var children = this.children
    for (var propsName in props) {
        var propsValue = props[propsName]
        if (propsName === "style") {
            let styleObject = propsValue
            for (var styleKey in propsValue) {
                $el.style[styleKey] = propsValue[styleKey]
            }
            continue
        }
        $el.setAttribute(propsName, propsValue)
    }
    children.forEach(function (child) {
        var childEl = child instanceof Element
            ? child.render()
            : document.createTextNode(child)
        $el.appendChild(childEl)
    });
    if (this.__instanseReactComponent) {
        this.__instanseReactComponent._currentNode = $el
    }
    return $el
}
