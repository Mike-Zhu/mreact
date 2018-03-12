const ChildReconciler = require('./ChildRecinciler')
const Reconciler = require('./Reconciler')
const traverseAllChildren = require('./traverseAllChildren')


function flattenChildren(children) {
  const fattenedElement = {}
  traverseAllChildren(
    children,
    (context, child, name) => context[name] = child,
    fattenedElement
  )
  return fattenedElement
}

class MultiChild {
  constructor() {
    this._renderedChildren = null
  }
  unmountChildren(){
    
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
  }
}

module.exports = MultiChild