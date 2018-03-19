const ChildReconciler = require('./ChildRecinciler')
const Reconciler = require('./Reconciler')
const traverseAllChildren = require('./traverseAllChildren')
const OPERATIONS = require('./operations')
const DOM = require('./DOM')
const assert = require('./assert')

function flattenChildren(children) {
  const fattenedElement = {}
  traverseAllChildren(
    children,
    (context, child, name) => context[name] = child,
    fattenedElement
  )
  return fattenedElement
}


// this is responsible for the real updates of the diffing tree
function processQueue(parentNode, updates) {
  updates.forEach(update => {
    switch (update.type) {
      case UPDATE_TYPES.INSERT:
        DOM.insertAfter(parentNode, update.content, update.afterNode)
        break

      case UPDATE_TYPES.MOVE:
        // this automatically removes and inserts the new child
        DOM.insertAfter(
          parentNode,
          update.content,
          update.afterNode
        )
        break

      case UPDATE_TYPES.REMOVE:
        DOM.removeChild(parentNode, update.fromNode)
        break

      default:
        assert(false)
    }
  })
}


class MultiChild {
  constructor() {
    this._renderedChildren = null
  }
  unmountChildren() {
    ChildReconciler.unmountChildren(this._renderedChildren)
  }

  mountChildren(children) {
    // children elements => children nodes
    const childrenComponents = ChildReconciler.instantiateChildren(children)
    this._renderedChildren = childrenComponents

    /*
    {
      '.0.0': {_currentElement, ...}
      '.0.1': {_currentElement, ...}
    }
    */

    const childrenNodes = Object.keys(childrenComponents).map((childKey) => {
      const childComponent = childrenComponents[childKey]

      console.log(childComponent)
      return Reconciler.mountComponent(childComponent)
    })

    return childrenNodes
  }
  updateChildren(nextchildRen) {
    //老的 component树
    let prevRenderedChildren = this._renderedChildren
    let nextRenderedChildren = flattenChildren(nextchildRen)

    let mountNodes = []
    let removedNodes = {}

    ChildReconciler.updateChildren(
      prevRenderedChildren,
      nextRenderedChildren,
      mountNodes,
      removedNodes,
    )
    // We'll compare the current set of children to the next set.
    // We need to determine what nodes are being moved around, which are being
    // inserted, and which are getting removed. Luckily, the removal list was
    // already determined by the ChildReconciler.

    // We'll generate a series of update operations here based on the
    // bookmarks that we've made just now
    let updates = []
    let lastIndex = 0
    let nextMountIndex = 0
    let lastPlacedNode = null

    Object.keys(nextRenderedChildren).forEach((childKey, nextIndex) => {
      let prevChild = prevRenderedChildren[childKey]
      let nextChild = nextRenderedChildren[childKey]

      if (prevChild === nextChild) {
        if (prevChild._mountIndex < lastIndex) {
          updates.push(OPERATIONS.move(nextChild, lastPlacedNode))
        }
        lastIndex = Math.max(prevChild._mountIndex, lastIndex)
        prevChild._mountIndex = nextIndex
      }
      else {
        if (prevChild) {
          lastIndex = Math.max(prevChild._mountIndex, lastIndex)
        }

        nextChild._mountIndex = nextIndex
        updates.push(OPERATIONS.insert(
          mountNodes[nextMountIndex],
          lastPlacedNode
        ))
        nextMountIndex++
      }
      lastPlacedNode = nextChild._domNode
    })


    Object.keys(removedNodes).forEach((childKey) => {
      updates.push(
        OPERATIONS.remove(removedNodes[childKey])
      )
    })


    // do the actual updates
    processQueue(this._domNode, updates)

    // at this point, nextRenderedChildren has already become a component tree
    // rather than the original element tree
    this._renderedChildren = nextRenderedChildren

  }
}

module.exports = MultiChild