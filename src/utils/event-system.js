export const eventList = [
    'onClick',
    'onChange',
]
// event config
export const unbubbleEvents = {
    /**
     * should not bind mousemove in document scope
     * even though mousemove event can bubble
     */
    onmousemove: 1,
    ontouchmove: 1,
    onmouseleave: 1,
    onmouseenter: 1,
    onload: 1,
    onunload: 1,
    onscroll: 1,
    onfocus: 1,
    onblur: 1,
    onrowexit: 1,
    onbeforeunload: 1,
    onstop: 1,
    ondragdrop: 1,
    ondragenter: 1,
    ondragexit: 1,
    ondraggesture: 1,
    ondragover: 1,
    oncontextmenu: 1,
    onerror: 1,

    // media event
    onabort: 1,
    oncanplay: 1,
    oncanplaythrough: 1,
    ondurationchange: 1,
    onemptied: 1,
    onended: 1,
    onloadeddata: 1,
    onloadedmetadata: 1,
    onloadstart: 1,
    onencrypted: 1,
    onpause: 1,
    onplay: 1,
    onplaying: 1,
    onprogress: 1,
    onratechange: 1,
    onseeking: 1,
    onseeked: 1,
    onstalled: 1,
    onsuspend: 1,
    ontimeupdate: 1,
    onvolumechange: 1,
    onwaiting: 1,
}

function getEventName(key) {
    if (key === 'onDoubleClick') {
        key = 'ondblclick'
    } else if (key === 'onTouchTap') {
        key = 'onclick'
    }

    return key.toLowerCase()
}

const eventTypes = {}
export function addEvent(node, eventName, eventContent) {
    // const tagName = node.tagName
    // console.log(tagName)
    eventName = getEventName(eventName)
    let eventType = node.eventType || (node.eventType = {})
    eventType[eventName] = eventContent
    if (unbubbleEvents.hasOwnProperty(eventName)) {
        //不可冒泡的
    } else if (!eventTypes[eventName]) {
        //可冒泡的，只需要绑定一次
        eventTypes[eventName] = true
        //去掉前面的on
        document.addEventListener(eventName.substr(2), dispatchEvent, false)
    }

    if (eventName === 'onchange' && isSupportChange(node)) {
        addEvent(node, 'oninput', eventContent)
    }
}

function dispatchEvent(event) {
    let { type, target } = event
    let eventName = 'on' + type
    while (target) {
        let eventType = target.eventType || (target.eventType = {})
        let listener = eventType[eventName]
        if (!listener) {
            target = target.parentNode
            continue
        }
        listener.call(target, event)
        target = target.parentNode
    }
}

function isSupportChange(target) {
    const tagName = target.tagName.toLowerCase()
    return tagName === 'input' || tagName === 'select' || tagName === 'textarea'
}