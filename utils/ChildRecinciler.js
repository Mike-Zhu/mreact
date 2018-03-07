const traverseAllChildren = require('./traverseAllChildren')



function instantiateChildren(children) {
  let childInstances = {}

  traverseAllChildren(children, childInstances)

  return childInstances
}

module.exports = {
  instantiateChildren,
}