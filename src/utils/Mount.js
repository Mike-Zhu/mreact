import * as DOM from './DOM'
import { initVnode } from './virturn-dom'

export default function mount(element, node) {
    //element => component
    const renderedNode = initVnode(element)
    DOM.empty(node)
    console.log(renderedNode)
    DOM.appendChildren(node, renderedNode)
}
