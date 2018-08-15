import _, {
    REPLACE,
    REORDER,
    PROPS,
    TEXT,
    MOVES_ADD,
    MOVES_DELETE,
    MOVES_REORDER
} from './util'
export default patch

function patch(node, patches) {
    var positionCache = {
        index: 0
    }
    walkNode(node, patches, positionCache)
}
function walkNode(node, patches, positionCache) {
    var patch = patches[positionCache.index]
    var len = node.childNodes ? node.childNodes.length : 0
    for (var i = 0; i < len; i++) {
        var child = node.childNodes[i]
        positionCache.index++
        walkNode(child, patches, positionCache)
    }
    patch && setPatch(node, patch)
}

function setPatch(node, patch) {
    patch.forEach(function (singlePatch) {
        switch (singlePatch.type) {
            case REPLACE:
                var newNode = _.isString(singlePatch.node) ? singlePatch.node : singlePatch.node.render()
                node.parentNode.replaceChild(newNode, node)
                break
            case REORDER:
                var childNodes = node.childNodes
                singlePatch.moves.forEach(function (singleMove) {
                    switch (singleMove.type) {
                        //delete
                        case MOVES_DELETE:
                            node.removeChild(childNodes[singleMove.index])
                            break
                        //add
                        case MOVES_ADD:
                            var newNode = _.isString(singleMove.item) ? singleMove.item : singleMove.item.render()
                            if (childNodes.length > singleMove.index) {
                                node.insertBefore(newNode, childNodes[singleMove.index])
                            } else {
                                node.appendChild(newNode)
                            }
                            break
                        //move
                        case MOVES_REORDER:
                            node.insertBefore(childNodes[singleMove.oldIndex], childNodes[singleMove.newIndex])
                            break
                    }
                })
                break
            case PROPS:
                for (var key in singlePatch.propPatches) {
                    isValid(singlePatch.propPatches[key])
                        ? node.removeAttribute(key)
                        : node.setAttribute(key, singlePatch.propPatches[key])
                }
                break
            case TEXT:
                node.parentNode.innerHTML = singlePatch.content
                break
            default:
                console.error('error patch type')
        }

    })
}

function isValid(data) {
    return data === undefined
        || data === null
        || data === ""
}