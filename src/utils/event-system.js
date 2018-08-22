export const eventList = [
    'onClick',
    'onChange',
]

const nameList = [
    'onclick',
    'onchange'
]
export function setEvent(node, eventName, eventContent) {
    const tagName = node.tagName
    console.log(tagName)
    const index = eventList.indexOf(eventName)
    if (index >= 0) {
        const eventType = nameList[index]
        let eventStore = node.eventStore || (node.eventStore = {})
        eventStore[eventType] = eventContent
        document.addEventListener('click', dispatchEvent, false)
    }
}

function dispatchEvent(event) {
    console.log(event.target.eventStore)
}