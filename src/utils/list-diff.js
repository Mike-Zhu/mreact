import {
    MOVES_ADD,
    MOVES_DELETE,
    MOVES_REORDER,
} from './utils'

export function diffList(oldVnode, newVnode) {
    let oldList = oldVnode.props.children,
        newList = newVnode.props.children

    oldList = Array.isArray(oldList) && oldList ? oldList : [oldList]
    newList = Array.isArray(newList) && newList ? newList : [newList]
    const oldMap = makeKeyIndexAndFree(oldList),
        newMap = makeKeyIndexAndFree(newList)

    const newKeyList = newMap.keyIndex,
        oldKeyList = oldMap.keyIndex

    const newFreeList = newMap.free
    let diffList = [],
        children = []

    oldList.forEach(item => {
        const itemKey = getItemKey(item)
        if (itemKey) {
            const newIndex = newKeyList.indexOf(itemKey)
            children.push(
                newIndex >= 0
                    ? newList[newIndex]
                    : 'listNull'
            )
        } else {
            children.push(newFreeList.shift() || null)
        }
    })

    let i = 0, j = 0, k = 0
    //不变
    const oldSortList = oldKeyList.map(
        res => newKeyList.indexOf(res) >= 0
            ? newKeyList.indexOf(res)
            : null
    )

    while (i < oldSortList.length) {
        if (oldSortList[i] === null) {
            diffList.push({
                index: i - j,
                type: MOVES_DELETE//删除
            })
            //j 用于模仿删除的操作
            // 因为真实的节点删除后，i需要向前移动一位
            j++
        }
        i++
    }
    //删除后的oldSortList
    let filterList = oldSortList.filter(res => res !== null)
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
        diff: diffList,
        newChildren: children,
        children: oldList
    }
}


function makeKeyIndexAndFree(list) {
    let keyIndex = [],
        free = []
    if (!Array.isArray(list)) {
        return {
            keyIndex,
            free
        }
    }

    list.forEach(item => {
        let itemKey = getItemKey(item)
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
function getItemKey(item) {
    return item.key
}