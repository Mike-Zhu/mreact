import DOMComponent from './DOMComponent'

export default function instantiateComponent(element) {
    let componentInstance
    if (typeof element.type === 'function') {
        componentInstance = new element.type(element.props)
        componentInstance._construct(element)
    } else if (typeof element.type === 'string') {
        componentInstance = new DOMComponent(element)
    } else if (typeof element === 'string' || 'number') {
        componentInstance = new DOMComponent({
            type: 'span',
            props: { children: element }
        })
    }
    return componentInstance
}
