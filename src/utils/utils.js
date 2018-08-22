let uid = 0

export function getUid() {
    return ++uid
}

export const VTEXT = 1
export const VELEMENT = 2
export const VSTATELESS = 3
export const VCOMPONENT = 4


export function getChildrenFromVcomponent(vcomponent) {
    let { children } = vcomponent.props
    let vchildren = []
    if (Array.isArray(children)) {
        flatEach(children, collectChild, vchildren)
    } else {
        collectChild(children, vchildren)
    }
    return vchildren


}

export function flatEach(list, iteratee, a) {
    let len = list.length
    let i = -1

    while (len--) {
        let item = list[++i]
        if (Array.isArray(item)) {
            flatEach(item, iteratee, a)
        } else {
            iteratee(item, a)
        }
    }
}

export function collectChild(child, children) {
    if (child != null && typeof child !== 'boolean') {
        if (!child.vtype) {
            // convert immutablejs data
            if (child.toJS) {
                child = child.toJS()
                if (Array.isArray(child)) {
                    flatEach(child, collectChild, children)
                } else {
                    collectChild(child, children)
                }
                return
            }
            child = '' + child
        }
        children[children.length] = child
    }
}