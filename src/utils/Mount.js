import * as DOM from './DOM'
import { initVnode } from './virturn-dom'

export default function mount(element, node) {
    //element => component
    const renderedNode = initVnode(element)
    DOM.empty(node)
    DOM.appendChildren(node, renderedNode)
}
