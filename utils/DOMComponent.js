const MultiChild = require('./MultiChild')
const Dom = require('./DOM')

class DOMComponent extends MultiChild {
    constructor(element) {
        super()
        this._currentElement = element
        this._domNode = null
    }
    _updateNodeProperties() {

    }
    _createInitialDOMChildren(props) {
        if (
            typeof props.children === 'number' ||
            typeof props.children === 'string'
        ) {
            const textNode = document.createTextNode(props.children)
            this._domNode.appendChild(textNode)
        } else if (props.children) {
            const childrenNodes = this.mountChildren(props.children)
            Dom.appendChildren(this._domNode, childrenNodes)
        }
    }
    mountComponent() {
        // create real dom nodes
        const node = document.createElement(this._currentElement.type)
        this._domNode = node

        this._updateNodeProperties({}, this._currentElement.props)
        this._createInitialDOMChildren(this._currentElement.props)

        return node
    }
}

module.exports = DOMComponent