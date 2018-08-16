export default {
    type(obj) {
        return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '')
    },

    isArray(list) {
        return this.type(list) === 'Array'
    },

    slice(arrayLike, index) {
        return Array.prototype.slice.call(arrayLike, index)
    },

    truthy(value) {
        return !!value
    },

    isString(list) {
        return this.type(list) === 'String'
    },

    each(array, fn) {
        for (var i = 0, len = array.length; i < len; i++) {
            fn(array[i], i)
        }
    },

    toArray(listLike) {
        if (!listLike) {
            return []
        }

        var list = []

        for (var i = 0, len = listLike.length; i < len; i++) {
            list.push(listLike[i])
        }

        return list
    },

    setAttr(node, key, value) {
        switch (key) {
            case 'style':
                node.style.cssText = value
                break
            case 'value':
                var tagName = node.tagName || ''
                tagName = tagName.toLowerCase()
                if (
                    tagName === 'input' || tagName === 'textarea'
                ) {
                    node.value = value
                } else {
                    // if it is not a input or textarea, use `setAttribute` to set
                    node.setAttribute(key, value)
                }
                break
            default:
                node.setAttribute(key, value)
                break
        }
    }
}

//替换掉原来的节点，例如把上面的div换成了section
//移动、删除、新增子节点，例如上面div的子节点，把p和ul顺序互换
//修改了节点的属性
//对于文本节点，文本内容可能会改变。例如修改上面的文本节点2内容为Virtual DOM 2。
export const REPLACE = 0
export const REORDER = 1
export const PROPS = 2
export const TEXT = 3

export const MOVES_ADD = 1
export const MOVES_DELETE = 0
export const MOVES_REORDER = 2