const MultiChild = require('./MultiChild')
const Dom = require('./DOM')

class DOMComponent extends MultiChild {
    constructor(element) {
        super()
        this._currentElement = element
        this._domNode = null
    }
    _updateNodeProperties(oldProps, nextProps) {
        let styleUpdates = {}
        Object.keys(oldProps).forEach(propsName => {
            if (propsName === 'style') {
                Object.keys(oldProps[propsName]).forEach(styleName => {
                    styleUpdates[styleName] = ''
                })
            } else if (propsName === 'children') {
                //
            } else {
                Dom.removeProperty(this._domNode, propsName)
            }
        })
        Object.keys(nextProps).forEach(propsName => {
            if (propsName === 'style') {
                Object.keys(nextProps[propsName]).forEach(styleName => {
                    //需要处理style样式
                    styleUpdates[styleName] = nextProps[propsName][styleName]
                })
            } else if (propsName === 'children') {
                //
            } else {
                Dom.setProperty(this._domNode, propsName, nextProps[propsName])
            }
        })
        if (Object.keys(styleUpdates).length > 0) {
            updateStyles(this._domNode, styleUpdates)
        }
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
    _updateDOMChildren(prevProps, nextProps) {
        const prevType = typeof prevProps.children
        const nextType = typeof nextProps.children

        if (nextType === 'undefined') return;

        if (nextType === 'string' && nextProps === 'number') {
            this._domNode.textContent = nextProps.children
        } else {
            this.updateChildren(nextProps.children)
        }
    }
    updateChildren(nextchildRen) {

    }
    mountComponent() {
        // create real dom nodes
        const node = document.createElement(this._currentElement.type)
        this._domNode = node

        this._updateNodeProperties({}, this._currentElement.props)
        this._createInitialDOMChildren(this._currentElement.props)

        return node
    }
    updateComponent(prevElement, nextElement) {
        this._currentElement = nextElement
        this._updateNodeProperties(prevElement.props, nextElement.props)
        this._updateDOMChildren(prevElement.props, nextElement.props)
    }
}

module.exports = DOMComponent

function updateStyles(node, style) {
    Object.keys(style).forEach(styleName => {
        node.style[styleName] = style[styleName]
        console.log(node.style, style[styleName])
    })
}