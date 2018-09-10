import * as DOM from './DOM'
import { initVnode, clearPending } from './virturn-dom'
import { updateQueue } from './Component'

export default function mount(element, node, callback, parentContext) {
    if (!element.vtype) {
        throw new Error(`cannot render ${element} to container`)
    }
    if (!DOM.isValidContainer(node)) {
        throw new Error(`container ${node} is not a DOM element`)
    }
    //render本身作为一次大的batchPengding
    //所以在整个mount阶段
    //element => component
    const renderedNode = initVnode(element, parentContext)
    DOM.empty(node)
    DOM.appendChildren(node, renderedNode)
    updateQueue.isPending = true
    clearPending()
    //这里应该是触发所有的component()
    updateQueue.isPending = false
    updateQueue.batchUpdate()
    callback.call(element)
}
