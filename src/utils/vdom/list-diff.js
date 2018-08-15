import {
    MOVES_ADD,
    MOVES_DELETE,
    MOVES_REORDER
} from './util'

export default function diff(oldList, newList, key) {
    const oldMap = makeKeyIndexAndFree(oldList, key),
        newMap = makeKeyIndexAndFree(newList, key),
        children = [],
        newKeyList = newMap.keyIndex,
        oldKeyList = oldMap.keyIndex,
        diffList = []

    let newFreeList = newMap.free

    oldList.forEach(item => {
        let itemKey = getItemKey(item, key)
        if (itemKey) {
            var newIndex = newKeyList.indexOf(itemKey)
            children.push(
                newIndex >= 0
                    ? newList[newIndex]
                    : null
            )
        } else {
            children.push(newFreeList.shift() || null)
        }
    })

    //不变
    const oldSortList = oldKeyList.map(res => newKeyList.indexOf(res) >= 0 ? newKeyList.indexOf(res) : null)
    let i = 0,
        j = 0
    while (i < oldSortList.length) {
        if (oldSortList[i] === null) {
            diffList.push({
                index: i - j,
                type: MOVES_DELETE//删除
            })
            j++
        }
        i++
    }
    let filterList = oldSortList.filter(res => res !== null)
    let k = 0
    while (k < newKeyList.length) {
        let oldIndex = filterList.indexOf(k)
        if (oldIndex >= 0) {
            if (k !== oldIndex) {
                let insert = filterList.splice(oldIndex, 1)[0]
                filterList.splice(k, 0, insert)
                diffList.push({
                    newIndex: k,
                    oldIndex: oldIndex,
                    type: MOVES_REORDER //换位置
                })
            }
        } else {
            filterList.splice(k, 0, k)
            diffList.push({
                index: k,
                item: newList[k],
                type: MOVES_ADD //新增
            })
        }
        k++
    }
    while (newFreeList.length > 0) {
        diffList.push({
            index: children.length,
            item: newFreeList.shift(),
            type: MOVES_ADD //新增
        })
    }
    return {
        children: children,
        moves: diffList
    }
}

function makeKeyIndexAndFree(list, key) {
    let keyIndex = [],
        free = []
    if (!Array.isArray(list)) {
        return {
            keyIndex,
            free
        }
    }
    list.forEach((item) => {
        let itemKey = getItemKey(item, key)
        if (itemKey) {
            keyIndex.push(itemKey)
        } else {
            free.push(item)
        }
    })
    return {
        keyIndex,
        free
    }
}

function getItemKey(item, key) {
    let props = item.props || {}
    return isFunction(key) ? key(props) : props[key || 'key']
}

function isFunction(data) {
    return toString.call(data) === "[object Function]"
}