const SEPARATOR = '.'
const SUBSEPARATOR = ':'

function instantiateChild(childInstances, child, name) {
  // don't know wtf happened here, cannot resolve it at top level
  // hack it in
  const initiateComponent = require('./instantiateComponent')

  if (!childInstances[name]) {
    childInstances[name] = initiateComponent(child)
  }
}

function getComponentKey(component, index) {
  // This is where we would use the key prop to generate a unique id that
  // persists across moves. However we're skipping that so we'll just use the
  // index.
  return index.toString(36)
}

function traverseAllChildren(children, traverseContext/*要返回的node本身*/) {
  return traverseAllChildrenImpl(children, '', instantiateChild, traverseContext)
}

function traverseAllChildrenImpl(
  children,
  nameSoFar,
  instantiateChild,
  traverseContext
) {
  // single child
  if (!Array.isArray(children)) {
    instantiateChild(
      traverseContext,
      children,
      nameSoFar + SEPARATOR + getComponentKey(children, 0)
    )
    return 1
  }

  let subtreeCount = 0
  const namePrefix = !nameSoFar ? SEPARATOR : nameSoFar + SUBSEPARATOR

  children.forEach((child, i) => {
    subtreeCount += traverseAllChildrenImpl(
      child,
      namePrefix + getComponentKey(child, i),
      instantiateChild,
      traverseContext
    )
  })

  return subtreeCount
}

module.exports = traverseAllChildren