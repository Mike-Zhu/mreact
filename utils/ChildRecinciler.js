const traverseAllChildren = require('./traverseAllChildren')
const Reconciler = require('./Reconciler')


function instantiateChild(childInstances, child, name) {
  // don't know wtf happened here, cannot resolve it at top level
  // hack it in
  const initiateComponent = require('./instantiateComponent')

  if (!childInstances[name]) {
    childInstances[name] = initiateComponent(child)
  }
}

function instantiateChildren(children) {
  let childInstances = {}

  traverseAllChildren(children, instantiateChild, childInstances)

  console.log(childInstances)
  return childInstances
}

function updateChildren(
  prevChildren, // instance tree
  nextChildren, // element tree
  mountNodes,
  removedNodes
) {
  Object.keys(nextChildren).forEach(childKey => {
    const prevChildComponent = prevChildren[childKey]
    //此处对比的是element,没法对比component
    const prevElement = prevChildComponent && prevChildComponent._currentElement
    const nextElement = nextChildren[childKey]
    // three scenarios:
    // 1: the prev element exists and is of the same type as the next element
    // 2: the prev element exists but not of the same type (type has changed)
    // 3: the prev element doesn't exist (insert a new element)
    if (prevElement && shouldUpdateComponent(prevElement, nextElement)) {
      //存在原始元素并更新 state
      Reconciler.receiveComponent(prevChildComponent, nextElement)
      nextChildren[childKey] = prevChildComponent
    } else {
      if (prevElement) {
        //存在原始元素，但是type变了，存储removenode，销毁原来的元素
        removedNodes[childKey] = prevChildComponent._domNode
        Reconciler.unmountComponent(prevChildComponent)
      }
      //新增
      const nextComponent = instantiateChild(nextElement)
      nextChildren[childKey] = nextComponent
      mountNodes.push(Reconciler.mountComponent(nextComponent))
    }
  })

  Object.keys(prevChildren).forEach(childKey => {
    if(!nextChildren.hasOwnProperty(childKey)){
      const prevChildComponent = prevChildren[childKey]
      removedNodes = prevChildComponent
      Reconciler.unmountComponent(prevChildComponent)
    }
  })
  
}

function shouldUpdateComponent(prevElement, nextElement) {
  return prevElement.type === nextElement.type
}
module.exports = {
  instantiateChildren,
  updateChildren
}