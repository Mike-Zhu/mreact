/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Mreact = __webpack_require__(/*! ./utils/mini-react */ "./src/utils/mini-react.js");
const { Component } = Mreact;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 1
      // setTimeout(() => {
      //   this.setState({
      //     first: 2
      //   })
      // }, 1000)
    };
  }

  render() {
    return Mreact.createElement(
      'div',
      null,
      this.state.first,
      Mreact.createElement(
        'span',
        null,
        Mreact.createElement(
          'h1',
          { style: { color: 'red' } },
          'Heading 1'
        ),
        Mreact.createElement(SmallHeader, null),
        Mreact.createElement(
          'h2',
          { style: { color: 'yellow' } },
          'Heading 2'
        ),
        Mreact.createElement(
          'div',
          null,
          Mreact.createElement(
            'h1',
            null,
            this.state.first
          ),
          Mreact.createElement(
            'h2',
            null,
            '2'
          ),
          Mreact.createElement(
            'h3',
            null,
            '3'
          )
        )
      ),
      Mreact.createElement(
        'h3',
        null,
        'Heading 3'
      )
    );
  }
}

class SmallHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aaa: 22
      // setTimeout(() => {
      //   this.setState({
      //     aaa: 333
      //   })
      // }, 3000)
    };
  }
  render() {
    return Mreact.createElement(
      'h5',
      null,
      this.state.aaa
    );
  }
}

Mreact.render(Mreact.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./src/utils/ChildRecinciler.js":
/*!**************************************!*\
  !*** ./src/utils/ChildRecinciler.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const traverseAllChildren = __webpack_require__(/*! ./traverseAllChildren */ "./src/utils/traverseAllChildren.js");
const Reconciler = __webpack_require__(/*! ./Reconciler */ "./src/utils/Reconciler.js");

function instantiateChild(childInstances, child, name) {
  // don't know wtf happened here, cannot resolve it at top level
  // hack it in
  const initiateComponent = __webpack_require__(/*! ./instantiateComponent */ "./src/utils/instantiateComponent.js");

  if (!childInstances[name]) {
    childInstances[name] = initiateComponent(child);
  }
}

function instantiateChildren(children) {
  let childInstances = {};

  traverseAllChildren(children, instantiateChild, childInstances);

  return childInstances;
}

function unmountChildren(renderedChildren) {
  if (!renderedChildren) return;

  Object.keys(renderedChildren).forEach(childKey => {
    Reconciler.unmountComponent(renderedChildren[childKey]);
  });
}

function updateChildren(prevChildren, // instance tree
nextChildren, // element tree
mountNodes, removedNodes) {

  // hack in the import function
  const instantiateComponent = __webpack_require__(/*! ./instantiateComponent */ "./src/utils/instantiateComponent.js");

  Object.keys(nextChildren).forEach(childKey => {
    const prevChildComponent = prevChildren[childKey];
    //此处对比的是element,没法对比component
    const prevElement = prevChildComponent && prevChildComponent._currentElement;
    const nextElement = nextChildren[childKey];
    // three scenarios:
    // 1: the prev element exists and is of the same type as the next element
    // 2: the prev element exists but not of the same type (type has changed)
    // 3: the prev element doesn't exist (insert a new element)
    if (prevElement && shouldUpdateComponent(prevElement, nextElement)) {
      //存在原始元素并更新 state
      Reconciler.receiveComponent(prevChildComponent, nextElement);
      nextChildren[childKey] = prevChildComponent;
    } else {
      if (prevChildComponent) {
        //存在原始元素，但是type变了，存储removenode，销毁原来的元素
        removedNodes[childKey] = prevChildComponent._domNode;
        Reconciler.unmountComponent(prevChildComponent);
      }
      //新增
      const nextComponent = instantiateComponent(nextElement);
      nextChildren[childKey] = nextComponent;
      // console.log(nextComponent)
      mountNodes.push(Reconciler.mountComponent(nextComponent));
    }
  });

  Object.keys(prevChildren).forEach(childKey => {
    if (!nextChildren.hasOwnProperty(childKey)) {
      const prevChildComponent = prevChildren[childKey];
      removedNodes[childKey] = prevChildComponent;
      Reconciler.unmountComponent(prevChildComponent);
    }
  });
}

function shouldUpdateComponent(prevElement, nextElement) {
  return prevElement.type === nextElement.type;
}
module.exports = {
  instantiateChildren,
  updateChildren,
  unmountChildren
};

/***/ }),

/***/ "./src/utils/Component.js":
/*!********************************!*\
  !*** ./src/utils/Component.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const instantiateComponent = __webpack_require__(/*! ./instantiateComponent */ "./src/utils/instantiateComponent.js");
const Reconciler = __webpack_require__(/*! ./Reconciler */ "./src/utils/Reconciler.js");

class Component {
    constructor(props) {
        this.props = props;
        this.currentElement = null;
        this._renderedComponent = null;
        this._renderedNode = null;
    }

    _construct(element) {
        this._currentElement = element;
    }

    mountComponent() {
        const renderedElement = this.render();
        const renderedComponent = instantiateComponent(renderedElement);
        this._renderedComponent = renderedComponent;

        const _renderedNode = Reconciler.mountComponent(renderedComponent);
        this._renderedNode = _renderedNode;
        return _renderedNode;
    }

    setState(partialState) {
        // debugger;
        this._pendingState = Object.assign({}, this.state, partialState);
        this.updateComponent(this._currentElement, this._currentElement);
    }

    updateComponent(preElement, nextElement) {
        // debugger;
        if (preElement !== nextElement) {}
        //表示是props变化，重组了Element

        //这里负责state变化那一部分
        //重新设置一些参数
        this._currentElement = nextElement;

        this.props = nextElement.props;
        this.state = this._pendingState || this.state;
        this._pendingState = null;

        const prevRenderedElement = this._renderedComponent._currentElement;
        const nextRenderedElement = this.render();

        if (shouldUpdateComponent(prevRenderedElement, nextRenderedElement)) {
            Reconciler.receiveComponent(this._renderedComponent, nextRenderedElement);
        } else {
            Reconciler.unmountComponent(this._renderedComponent);
            const nextRenderedComponent = instantiateComponent(nextRenderedElement);
            this._renderedNode = Reconciler.mountComponent(nextRenderedElement);

            DOM.replaceNode(this._renderedComponent._domNode, this._renderedNode);
        }
    }
}

function shouldUpdateComponent(prevElement, nextElement) {
    return prevElement.type === nextElement.type;
}
module.exports = Component;

/***/ }),

/***/ "./src/utils/DOM.js":
/*!**************************!*\
  !*** ./src/utils/DOM.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function empty(node) {
    [].slice.call(node.childNodes).forEach(child => {
        node.removeChild(child);
    });
}

function appendChildren(node, children) {
    if (Array.isArray(children)) {
        children.forEach(child => {
            node.appendChild(child);
        });
    } else {
        node.appendChild(children);
    }
}

function removeProperty(node, property) {
    node.removeAttributeNode(property);
}

function setProperty(node, property, value) {
    node.setAttribute(property, value);
}

function insertAfter(node, child, afterChild) {
    node.insertBefore(child, afterChild ? afterChild.nextSibling : node.firstChild);
}

function removeChild(node, child) {
    node.removeChild(child);
}

module.exports = {
    empty,
    appendChildren,
    removeProperty,
    setProperty,
    insertAfter,
    removeChild
};

/***/ }),

/***/ "./src/utils/DOMComponent.js":
/*!***********************************!*\
  !*** ./src/utils/DOMComponent.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MultiChild = __webpack_require__(/*! ./MultiChild */ "./src/utils/MultiChild.js");
const Dom = __webpack_require__(/*! ./DOM */ "./src/utils/DOM.js");
const el = __webpack_require__(/*! ./vdom/element */ "./src/utils/vdom/element.js");
const instantiateComponent = __webpack_require__(/*! ./instantiateComponent */ "./src/utils/instantiateComponent.js");
const Reconciler = __webpack_require__(/*! ./Reconciler */ "./src/utils/Reconciler.js");

class DOMComponent extends MultiChild {
    constructor(element) {
        super();
        this._currentElement = element;
        this._domNode = null;
    }
    unmountComponent() {
        this.unmountChildren();
    }
    _updateNodeProperties(oldProps, nextProps) {
        let styleUpdates = {};
        Object.keys(oldProps).forEach(propsName => {
            if (propsName === 'style') {
                Object.keys(oldProps[propsName]).forEach(styleName => {
                    styleUpdates[styleName] = '';
                });
            } else if (propsName === 'children') {
                //
            } else {
                Dom.removeProperty(this._domNode, propsName);
            }
        });
        Object.keys(nextProps).forEach(propsName => {
            if (propsName === 'style') {
                Object.keys(nextProps[propsName]).forEach(styleName => {
                    //需要处理style样式
                    styleUpdates[styleName] = nextProps[propsName][styleName];
                });
            } else if (propsName === 'children') {
                //
            } else {
                Dom.setProperty(this._domNode, propsName, nextProps[propsName]);
            }
        });
        if (Object.keys(styleUpdates).length > 0) {
            updateStyles(this._domNode, styleUpdates);
        }
    }
    _createInitialDOMChildren(props) {
        if (typeof props.children === 'number' || typeof props.children === 'string') {
            const textNode = document.createTextNode(props.children);
            this._domNode.appendChild(textNode);
        } else if (props.children) {
            const childrenNodes = this.mountChildren(props.children);
            Dom.appendChildren(this._domNode, childrenNodes);
        }
    }
    _updateDOMChildren(prevProps, nextProps) {
        const prevType = typeof prevProps.children;
        const nextType = typeof nextProps.children;

        if (nextType === 'undefined') return;

        if (nextType === 'string' || nextType === 'number') {
            this._domNode.textContent = nextProps.children;
        } else {
            this.updateChildren(nextProps.children);
        }
    }

    mountComponent() {
        const vdomTree = el;
        // create real dom nodes
        const node = this.getVdomTree(this._currentElement);
        this._domNode = node;
        return node;
        // this._updateNodeProperties({}, this._currentElement.props)
        // this._createInitialDOMChildren(this._currentElement.props)
    }
    getVdomTree(rootElement) {
        if (typeof rootElement.type === 'function') {
            const node = Reconciler.mountComponent(new rootElement.type(rootElement.props));
            console.log(node);
            return node;
        } else if (typeof rootElement === 'string' || typeof rootElement === 'number') {
            return rootElement;
        }
        const { type, props = {} } = rootElement;
        let children = props.children;
        if (typeof children === 'string' || typeof children === 'number') {
            children = [children];
        }
        return el(type, props, children.map(res => this.getVdomTree(res)));
    }
    updateComponent(prevElement, nextElement) {
        this._currentElement = nextElement;
        this._updateNodeProperties(prevElement.props, nextElement.props);
        this._updateDOMChildren(prevElement.props, nextElement.props);
    }
}

module.exports = DOMComponent;

function updateStyles(node, style) {
    Object.keys(style).forEach(styleName => {
        node.style[styleName] = style[styleName];
    });
}

/***/ }),

/***/ "./src/utils/Element.js":
/*!******************************!*\
  !*** ./src/utils/Element.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createElement(type, config, children) {
    const props = Object.assign({}, config);
    const childrenLength = [].slice.call(arguments).length - 2;
    if (childrenLength > 1) {
        props.children = [].slice.call(arguments, 2);
    } else if (childrenLength === 1) {
        props.children = children;
    }
    return {
        type,
        props
    };
}
module.exports = {
    createElement
};

/***/ }),

/***/ "./src/utils/Mount.js":
/*!****************************!*\
  !*** ./src/utils/Mount.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const instantiateComponent = __webpack_require__(/*! ./instantiateComponent */ "./src/utils/instantiateComponent.js");
const Reconciler = __webpack_require__(/*! ./Reconciler */ "./src/utils/Reconciler.js");
const DOM = __webpack_require__(/*! ./DOM */ "./src/utils/DOM.js");

function mount(element, node) {
    //element => component
    const component = instantiateComponent(element);
    //component => element
    const renderedNode = Reconciler.mountComponent(component);

    DOM.empty(node);
    DOM.appendChildren(node, renderedNode.render());
}

function render(element, node) {
    mount(element, node);
}

module.exports = {
    render
};

/***/ }),

/***/ "./src/utils/MultiChild.js":
/*!*********************************!*\
  !*** ./src/utils/MultiChild.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ChildReconciler = __webpack_require__(/*! ./ChildRecinciler */ "./src/utils/ChildRecinciler.js");
const Reconciler = __webpack_require__(/*! ./Reconciler */ "./src/utils/Reconciler.js");
const traverseAllChildren = __webpack_require__(/*! ./traverseAllChildren */ "./src/utils/traverseAllChildren.js");
const { OPERATIONS, UPDATE_TYPES } = __webpack_require__(/*! ./operations */ "./src/utils/operations.js");
const DOM = __webpack_require__(/*! ./DOM */ "./src/utils/DOM.js");
const assert = __webpack_require__(/*! ./assert */ "./src/utils/assert.js");

function flattenChildren(children) {
  const fattenedElement = {};
  traverseAllChildren(children, (context, child, name) => context[name] = child, fattenedElement);
  return fattenedElement;
}

// this is responsible for the real updates of the diffing tree
function processQueue(parentNode, updates) {
  updates.forEach(update => {
    switch (update.type) {
      case UPDATE_TYPES.INSERT:
        DOM.insertAfter(parentNode, update.content, update.afterNode);
        break;

      case UPDATE_TYPES.MOVE:
        // this automatically removes and inserts the new child
        DOM.insertAfter(parentNode, update.content, update.afterNode);
        break;

      case UPDATE_TYPES.REMOVE:
        DOM.removeChild(parentNode, update.fromNode);
        break;

      default:
        assert(false);
    }
  });
}

class MultiChild {
  constructor() {
    this._renderedChildren = null;
  }
  unmountChildren() {
    ChildReconciler.unmountChildren(this._renderedChildren);
  }

  mountChildren(children) {
    // children elements => children nodes
    const childrenComponents = ChildReconciler.instantiateChildren(children);
    // console.log(children)
    // debugger
    this._renderedChildren = childrenComponents;

    /*
    {
      '.0.0': {_currentElement, ...}
      '.0.1': {_currentElement, ...}
    }
    */

    const childrenNodes = Object.keys(childrenComponents).map(childKey => {
      const childComponent = childrenComponents[childKey];

      return Reconciler.mountComponent(childComponent);
    });

    return childrenNodes;
  }
  updateChildren(nextchildRen) {
    //老的 component树
    let prevRenderedChildren = this._renderedChildren;
    let nextRenderedChildren = flattenChildren(nextchildRen);

    let mountNodes = [];
    let removedNodes = {};

    // debugger
    ChildReconciler.updateChildren(prevRenderedChildren, nextRenderedChildren, mountNodes, removedNodes);
    // We'll compare the current set of children to the next set.
    // We need to determine what nodes are being moved around, which are being
    // inserted, and which are getting removed. Luckily, the removal list was
    // already determined by the ChildReconciler.

    // We'll generate a series of update operations here based on the
    // bookmarks that we've made just now
    let updates = [];
    let lastIndex = 0;
    let nextMountIndex = 0;
    let lastPlacedNode = null;

    Object.keys(nextRenderedChildren).forEach((childKey, nextIndex) => {
      let prevChild = prevRenderedChildren[childKey];
      let nextChild = nextRenderedChildren[childKey];

      if (prevChild === nextChild) {
        if (prevChild._mountIndex < lastIndex) {
          updates.push(OPERATIONS.move(nextChild, lastPlacedNode));
        }
        lastIndex = Math.max(prevChild._mountIndex, lastIndex);
        prevChild._mountIndex = nextIndex;
      } else {
        if (prevChild) {
          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
        }

        nextChild._mountIndex = nextIndex;
        updates.push(OPERATIONS.insert(mountNodes[nextMountIndex], lastPlacedNode));
        nextMountIndex++;
      }
      lastPlacedNode = nextChild._domNode;
    });

    Object.keys(removedNodes).forEach(childKey => {
      updates.push(OPERATIONS.remove(removedNodes[childKey]));
    });

    // do the actual updates
    processQueue(this._domNode, updates);

    // at this point, nextRenderedChildren has already become a component tree
    // rather than the original element tree
    this._renderedChildren = nextRenderedChildren;
  }
}

module.exports = MultiChild;

/***/ }),

/***/ "./src/utils/Reconciler.js":
/*!*********************************!*\
  !*** ./src/utils/Reconciler.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Reconciller

function mountComponent(component) {
    return component.mountComponent();
}

function receiveComponent(component, nextElement) {
    if (component._currentElement === nextElement) return;
    component.updateComponent(component._currentElement, nextElement);
}

function unmountComponent(component) {
    component.unmountComponent();
}

module.exports = {
    mountComponent,
    receiveComponent,
    unmountComponent
};

/***/ }),

/***/ "./src/utils/assert.js":
/*!*****************************!*\
  !*** ./src/utils/assert.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function assert(val) {
  if (!Boolean(val)) {
    throw new Error('assertion failure');
  }
}

module.exports = assert;

/***/ }),

/***/ "./src/utils/instantiateComponent.js":
/*!*******************************************!*\
  !*** ./src/utils/instantiateComponent.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const DOMComponent = __webpack_require__(/*! ./DOMComponent */ "./src/utils/DOMComponent.js");

function instantiateComponent(element) {
    let componentInstance;
    if (typeof element.type === 'function') {
        componentInstance = new element.type(element.props);
        componentInstance._construct(element);
    } else if (typeof element.type === 'string') {
        componentInstance = new DOMComponent(element);
    } else if (typeof element === 'string' || 'number') {
        componentInstance = new DOMComponent({
            type: 'span',
            props: { children: element }
        });
    }
    return componentInstance;
}

module.exports = instantiateComponent;

/***/ }),

/***/ "./src/utils/mini-react.js":
/*!*********************************!*\
  !*** ./src/utils/mini-react.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Element = __webpack_require__(/*! ./Element.js */ "./src/utils/Element.js");
const Component = __webpack_require__(/*! ./Component.js */ "./src/utils/Component.js");
const Mount = __webpack_require__(/*! ./Mount.js */ "./src/utils/Mount.js");

module.exports = {
    createElement: Element.createElement,
    Component: Component,
    render: Mount.render
};

/***/ }),

/***/ "./src/utils/operations.js":
/*!*********************************!*\
  !*** ./src/utils/operations.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const UPDATE_TYPES = {
    INSERT: 1,
    MOVE: 2,
    REMOVE: 3
};

const OPERATIONS = {
    insert(node, afterNode) {
        return {
            type: UPDATE_TYPES.INSERT,
            content: node,
            afterNode: afterNode
        };
    },
    move(component, afterNode) {
        return {
            type: UPDATE_TYPES.MOVE,
            fromIndex: component._mountIndex,
            afterNode: afterNode
        };
    },
    remove(node) {
        return {
            type: UPDATE_TYPES.REMOVE,
            fromNode: node
        };
    }
};

module.exports = {
    OPERATIONS,
    UPDATE_TYPES
};

/***/ }),

/***/ "./src/utils/traverseAllChildren.js":
/*!******************************************!*\
  !*** ./src/utils/traverseAllChildren.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const SEPARATOR = '.';
const SUBSEPARATOR = ':';

function getComponentKey(component, index) {
  // This is where we would use the key prop to generate a unique id that
  // persists across moves. However we're skipping that so we'll just use the
  // index.
  return index.toString(36);
}

function traverseAllChildren(children, callback, traverseContext) {
  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  // single child
  if (typeof children === 'string' || typeof children === 'number' || !Array.isArray(children)) {
    callback(traverseContext, children, nameSoFar + SEPARATOR + getComponentKey(children, 0));
    return 1;
  }

  let subtreeCount = 0;
  const namePrefix = !nameSoFar ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  children.forEach((child, i) => {
    subtreeCount += traverseAllChildrenImpl(child, namePrefix + getComponentKey(child, i), callback, traverseContext);
  });

  return subtreeCount;
}

module.exports = traverseAllChildren;

/***/ }),

/***/ "./src/utils/vdom/element.js":
/*!***********************************!*\
  !*** ./src/utils/vdom/element.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(/*! ./util */ "./src/utils/vdom/util.js");

function Element(tagName, props, children) {
    if (!(this instanceof Element)) {
        return new Element(tagName, props, children);
    }
    if (Array.isArray(props)) {
        children = props;
        props = {};
    }

    this.tagName = tagName;
    this.props = props || {};
    this.children = children || [];
    this.key = props ? props.key : void 666;

    var childNodesLength = 0;
    this.children.forEach((child, i) => {
        if (child instanceof Element) {
            childNodesLength += child.childNodesLength;
        } else {
            children[i] = '' + child;
        }
        childNodesLength++;
    });
    //下属子元素的数量，包含深层子元素的数量
    this.childNodesLength = childNodesLength;
}

Element.prototype.render = function () {
    var $el = document.createElement(this.tagName);
    var props = this.props;
    var children = this.children;
    delete props.children;
    for (var propsName in props) {
        var propsValue = props[propsName];
        $el.setAttribute(propsName, propsValue);
    }
    children.forEach(function (child) {
        var childEl = child instanceof Element ? child.render() : document.createTextNode(child);
        $el.appendChild(childEl);
    });
    return $el;
};

module.exports = Element;

/***/ }),

/***/ "./src/utils/vdom/util.js":
/*!********************************!*\
  !*** ./src/utils/vdom/util.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//替换掉原来的节点，例如把上面的div换成了section
//移动、删除、新增子节点，例如上面div的子节点，把p和ul顺序互换
//修改了节点的属性
//对于文本节点，文本内容可能会改变。例如修改上面的文本节点2内容为Virtual DOM 2。
const REPLACE = 0;
const REORDER = 1;
const PROPS = 2;
const TEXT = 3;

const MOVES_ADD = 1;
const MOVES_DELETE = 0;
const MOVES_REORDER = 2;

module.exports = {
    type(obj) {
        return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
    },

    isArray(list) {
        return this.type(list) === 'Array';
    },

    slice(arrayLike, index) {
        return Array.prototype.slice.call(arrayLike, index);
    },

    truthy(value) {
        return !!value;
    },

    isString(list) {
        return this.type(list) === 'String';
    },

    each(array, fn) {
        for (var i = 0, len = array.length; i < len; i++) {
            fn(array[i], i);
        }
    },

    toArray(listLike) {
        if (!listLike) {
            return [];
        }

        var list = [];

        for (var i = 0, len = listLike.length; i < len; i++) {
            list.push(listLike[i]);
        }

        return list;
    },

    setAttr(node, key, value) {
        switch (key) {
            case 'style':
                node.style.cssText = value;
                break;
            case 'value':
                var tagName = node.tagName || '';
                tagName = tagName.toLowerCase();
                if (tagName === 'input' || tagName === 'textarea') {
                    node.value = value;
                } else {
                    // if it is not a input or textarea, use `setAttribute` to set
                    node.setAttribute(key, value);
                }
                break;
            default:
                node.setAttribute(key, value);
                break;
        }
    },
    REPLACE,
    REORDER,
    PROPS,
    TEXT,
    MOVES_ADD,
    MOVES_DELETE,
    MOVES_REORDER
};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9DaGlsZFJlY2luY2lsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRE9NLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ET01Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL01vdW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9NdWx0aUNoaWxkLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9SZWNvbmNpbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hc3NlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luc3RhbnRpYXRlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9taW5pLXJlYWN0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9vcGVyYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90cmF2ZXJzZUFsbENoaWxkcmVuLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZG9tL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Zkb20vdXRpbC5qcyJdLCJuYW1lcyI6WyJNcmVhY3QiLCJyZXF1aXJlIiwiQ29tcG9uZW50IiwiQXBwIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZmlyc3QiLCJyZW5kZXIiLCJjb2xvciIsIlNtYWxsSGVhZGVyIiwiYWFhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRyYXZlcnNlQWxsQ2hpbGRyZW4iLCJSZWNvbmNpbGVyIiwiaW5zdGFudGlhdGVDaGlsZCIsImNoaWxkSW5zdGFuY2VzIiwiY2hpbGQiLCJuYW1lIiwiaW5pdGlhdGVDb21wb25lbnQiLCJpbnN0YW50aWF0ZUNoaWxkcmVuIiwiY2hpbGRyZW4iLCJ1bm1vdW50Q2hpbGRyZW4iLCJyZW5kZXJlZENoaWxkcmVuIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJjaGlsZEtleSIsInVubW91bnRDb21wb25lbnQiLCJ1cGRhdGVDaGlsZHJlbiIsInByZXZDaGlsZHJlbiIsIm5leHRDaGlsZHJlbiIsIm1vdW50Tm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJpbnN0YW50aWF0ZUNvbXBvbmVudCIsInByZXZDaGlsZENvbXBvbmVudCIsInByZXZFbGVtZW50IiwiX2N1cnJlbnRFbGVtZW50IiwibmV4dEVsZW1lbnQiLCJzaG91bGRVcGRhdGVDb21wb25lbnQiLCJyZWNlaXZlQ29tcG9uZW50IiwiX2RvbU5vZGUiLCJuZXh0Q29tcG9uZW50IiwicHVzaCIsIm1vdW50Q29tcG9uZW50IiwiaGFzT3duUHJvcGVydHkiLCJ0eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImN1cnJlbnRFbGVtZW50IiwiX3JlbmRlcmVkQ29tcG9uZW50IiwiX3JlbmRlcmVkTm9kZSIsIl9jb25zdHJ1Y3QiLCJlbGVtZW50IiwicmVuZGVyZWRFbGVtZW50IiwicmVuZGVyZWRDb21wb25lbnQiLCJzZXRTdGF0ZSIsInBhcnRpYWxTdGF0ZSIsIl9wZW5kaW5nU3RhdGUiLCJhc3NpZ24iLCJ1cGRhdGVDb21wb25lbnQiLCJwcmVFbGVtZW50IiwicHJldlJlbmRlcmVkRWxlbWVudCIsIm5leHRSZW5kZXJlZEVsZW1lbnQiLCJuZXh0UmVuZGVyZWRDb21wb25lbnQiLCJET00iLCJyZXBsYWNlTm9kZSIsImVtcHR5Iiwibm9kZSIsInNsaWNlIiwiY2FsbCIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVQcm9wZXJ0eSIsInByb3BlcnR5IiwicmVtb3ZlQXR0cmlidXRlTm9kZSIsInNldFByb3BlcnR5IiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRBZnRlciIsImFmdGVyQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImZpcnN0Q2hpbGQiLCJNdWx0aUNoaWxkIiwiRG9tIiwiZWwiLCJET01Db21wb25lbnQiLCJfdXBkYXRlTm9kZVByb3BlcnRpZXMiLCJvbGRQcm9wcyIsIm5leHRQcm9wcyIsInN0eWxlVXBkYXRlcyIsInByb3BzTmFtZSIsInN0eWxlTmFtZSIsImxlbmd0aCIsInVwZGF0ZVN0eWxlcyIsIl9jcmVhdGVJbml0aWFsRE9NQ2hpbGRyZW4iLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwiY2hpbGRyZW5Ob2RlcyIsIm1vdW50Q2hpbGRyZW4iLCJfdXBkYXRlRE9NQ2hpbGRyZW4iLCJwcmV2UHJvcHMiLCJwcmV2VHlwZSIsIm5leHRUeXBlIiwidGV4dENvbnRlbnQiLCJ2ZG9tVHJlZSIsImdldFZkb21UcmVlIiwicm9vdEVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicmVzIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiY29uZmlnIiwiY2hpbGRyZW5MZW5ndGgiLCJhcmd1bWVudHMiLCJtb3VudCIsImNvbXBvbmVudCIsInJlbmRlcmVkTm9kZSIsIkNoaWxkUmVjb25jaWxlciIsIk9QRVJBVElPTlMiLCJVUERBVEVfVFlQRVMiLCJhc3NlcnQiLCJmbGF0dGVuQ2hpbGRyZW4iLCJmYXR0ZW5lZEVsZW1lbnQiLCJjb250ZXh0IiwicHJvY2Vzc1F1ZXVlIiwicGFyZW50Tm9kZSIsInVwZGF0ZXMiLCJ1cGRhdGUiLCJJTlNFUlQiLCJjb250ZW50IiwiYWZ0ZXJOb2RlIiwiTU9WRSIsIlJFTU9WRSIsImZyb21Ob2RlIiwiX3JlbmRlcmVkQ2hpbGRyZW4iLCJjaGlsZHJlbkNvbXBvbmVudHMiLCJjaGlsZENvbXBvbmVudCIsIm5leHRjaGlsZFJlbiIsInByZXZSZW5kZXJlZENoaWxkcmVuIiwibmV4dFJlbmRlcmVkQ2hpbGRyZW4iLCJsYXN0SW5kZXgiLCJuZXh0TW91bnRJbmRleCIsImxhc3RQbGFjZWROb2RlIiwibmV4dEluZGV4IiwicHJldkNoaWxkIiwibmV4dENoaWxkIiwiX21vdW50SW5kZXgiLCJtb3ZlIiwiTWF0aCIsIm1heCIsImluc2VydCIsInJlbW92ZSIsInZhbCIsIkJvb2xlYW4iLCJFcnJvciIsImNvbXBvbmVudEluc3RhbmNlIiwiRWxlbWVudCIsIk1vdW50IiwiZnJvbUluZGV4IiwiU0VQQVJBVE9SIiwiU1VCU0VQQVJBVE9SIiwiZ2V0Q29tcG9uZW50S2V5IiwiaW5kZXgiLCJ0b1N0cmluZyIsImNhbGxiYWNrIiwidHJhdmVyc2VDb250ZXh0IiwidHJhdmVyc2VBbGxDaGlsZHJlbkltcGwiLCJuYW1lU29GYXIiLCJzdWJ0cmVlQ291bnQiLCJuYW1lUHJlZml4IiwiaSIsIl8iLCJ0YWdOYW1lIiwia2V5IiwiY2hpbGROb2Rlc0xlbmd0aCIsInByb3RvdHlwZSIsIiRlbCIsInByb3BzVmFsdWUiLCJjaGlsZEVsIiwiUkVQTEFDRSIsIlJFT1JERVIiLCJQUk9QUyIsIlRFWFQiLCJNT1ZFU19BREQiLCJNT1ZFU19ERUxFVEUiLCJNT1ZFU19SRU9SREVSIiwib2JqIiwicmVwbGFjZSIsImxpc3QiLCJhcnJheUxpa2UiLCJ0cnV0aHkiLCJpc1N0cmluZyIsImVhY2giLCJhcnJheSIsImZuIiwibGVuIiwidG9BcnJheSIsImxpc3RMaWtlIiwic2V0QXR0ciIsImNzc1RleHQiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7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QyxnQkFwRWE7QUFxRWJDO0FBckVhLENBQWpCLEMiLCJmaWxlIjoiM2UyNWNiYzI3MTkyNTgyOTRmODMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBNcmVhY3QgPSByZXF1aXJlKCcuL3V0aWxzL21pbmktcmVhY3QnKVxyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gTXJlYWN0XHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZmlyc3Q6IDFcclxuICAgIH1cclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHtcclxuICAgIC8vICAgICBmaXJzdDogMlxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gfSwgMTAwMClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuZmlyc3R9XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19ID5IZWFkaW5nIDE8L2gxPlxyXG4gICAgICAgICAgPFNtYWxsSGVhZGVyIC8+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICd5ZWxsb3cnIH19ID5IZWFkaW5nIDI8L2gyPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLmZpcnN0fTwvaDE+XHJcbiAgICAgICAgICAgIDxoMj4yPC9oMj5cclxuICAgICAgICAgICAgPGgzPjM8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxoMz5IZWFkaW5nIDM8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFNtYWxsSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhYWE6IDIyXHJcbiAgICB9XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAvLyAgICAgYWFhOiAzMzNcclxuICAgIC8vICAgfSlcclxuICAgIC8vIH0sIDMwMDApXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxoNT57dGhpcy5zdGF0ZS5hYWF9PC9oNT5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbk1yZWFjdC5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkiLCJjb25zdCB0cmF2ZXJzZUFsbENoaWxkcmVuID0gcmVxdWlyZSgnLi90cmF2ZXJzZUFsbENoaWxkcmVuJylcclxuY29uc3QgUmVjb25jaWxlciA9IHJlcXVpcmUoJy4vUmVjb25jaWxlcicpXHJcblxyXG5cclxuZnVuY3Rpb24gaW5zdGFudGlhdGVDaGlsZChjaGlsZEluc3RhbmNlcywgY2hpbGQsIG5hbWUpIHtcclxuICAvLyBkb24ndCBrbm93IHd0ZiBoYXBwZW5lZCBoZXJlLCBjYW5ub3QgcmVzb2x2ZSBpdCBhdCB0b3AgbGV2ZWxcclxuICAvLyBoYWNrIGl0IGluXHJcbiAgY29uc3QgaW5pdGlhdGVDb21wb25lbnQgPSByZXF1aXJlKCcuL2luc3RhbnRpYXRlQ29tcG9uZW50JylcclxuXHJcbiAgaWYgKCFjaGlsZEluc3RhbmNlc1tuYW1lXSkge1xyXG4gICAgY2hpbGRJbnN0YW5jZXNbbmFtZV0gPSBpbml0aWF0ZUNvbXBvbmVudChjaGlsZClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc3RhbnRpYXRlQ2hpbGRyZW4oY2hpbGRyZW4pIHtcclxuICBsZXQgY2hpbGRJbnN0YW5jZXMgPSB7fVxyXG5cclxuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBpbnN0YW50aWF0ZUNoaWxkLCBjaGlsZEluc3RhbmNlcylcclxuXHJcbiAgcmV0dXJuIGNoaWxkSW5zdGFuY2VzXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB1bm1vdW50Q2hpbGRyZW4ocmVuZGVyZWRDaGlsZHJlbikge1xyXG4gIGlmICghcmVuZGVyZWRDaGlsZHJlbikgcmV0dXJuXHJcblxyXG4gIE9iamVjdC5rZXlzKHJlbmRlcmVkQ2hpbGRyZW4pLmZvckVhY2goY2hpbGRLZXkgPT4ge1xyXG4gICAgUmVjb25jaWxlci51bm1vdW50Q29tcG9uZW50KHJlbmRlcmVkQ2hpbGRyZW5bY2hpbGRLZXldKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuKFxyXG4gIHByZXZDaGlsZHJlbiwgLy8gaW5zdGFuY2UgdHJlZVxyXG4gIG5leHRDaGlsZHJlbiwgLy8gZWxlbWVudCB0cmVlXHJcbiAgbW91bnROb2RlcyxcclxuICByZW1vdmVkTm9kZXNcclxuKSB7XHJcblxyXG4gIC8vIGhhY2sgaW4gdGhlIGltcG9ydCBmdW5jdGlvblxyXG4gIGNvbnN0IGluc3RhbnRpYXRlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9pbnN0YW50aWF0ZUNvbXBvbmVudCcpXHJcblxyXG4gIE9iamVjdC5rZXlzKG5leHRDaGlsZHJlbikuZm9yRWFjaChjaGlsZEtleSA9PiB7XHJcbiAgICBjb25zdCBwcmV2Q2hpbGRDb21wb25lbnQgPSBwcmV2Q2hpbGRyZW5bY2hpbGRLZXldXHJcbiAgICAvL+atpOWkhOWvueavlOeahOaYr2VsZW1lbnQs5rKh5rOV5a+55q+UY29tcG9uZW50XHJcbiAgICBjb25zdCBwcmV2RWxlbWVudCA9IHByZXZDaGlsZENvbXBvbmVudCAmJiBwcmV2Q2hpbGRDb21wb25lbnQuX2N1cnJlbnRFbGVtZW50XHJcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IG5leHRDaGlsZHJlbltjaGlsZEtleV1cclxuICAgIC8vIHRocmVlIHNjZW5hcmlvczpcclxuICAgIC8vIDE6IHRoZSBwcmV2IGVsZW1lbnQgZXhpc3RzIGFuZCBpcyBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBuZXh0IGVsZW1lbnRcclxuICAgIC8vIDI6IHRoZSBwcmV2IGVsZW1lbnQgZXhpc3RzIGJ1dCBub3Qgb2YgdGhlIHNhbWUgdHlwZSAodHlwZSBoYXMgY2hhbmdlZClcclxuICAgIC8vIDM6IHRoZSBwcmV2IGVsZW1lbnQgZG9lc24ndCBleGlzdCAoaW5zZXJ0IGEgbmV3IGVsZW1lbnQpXHJcbiAgICBpZiAocHJldkVsZW1lbnQgJiYgc2hvdWxkVXBkYXRlQ29tcG9uZW50KHByZXZFbGVtZW50LCBuZXh0RWxlbWVudCkpIHtcclxuICAgICAgLy/lrZjlnKjljp/lp4vlhYPntKDlubbmm7TmlrAgc3RhdGVcclxuICAgICAgUmVjb25jaWxlci5yZWNlaXZlQ29tcG9uZW50KHByZXZDaGlsZENvbXBvbmVudCwgbmV4dEVsZW1lbnQpXHJcbiAgICAgIG5leHRDaGlsZHJlbltjaGlsZEtleV0gPSBwcmV2Q2hpbGRDb21wb25lbnRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChwcmV2Q2hpbGRDb21wb25lbnQpIHtcclxuICAgICAgICAvL+WtmOWcqOWOn+Wni+WFg+e0oO+8jOS9huaYr3R5cGXlj5jkuobvvIzlrZjlgqhyZW1vdmVub2Rl77yM6ZSA5q+B5Y6f5p2l55qE5YWD57SgXHJcbiAgICAgICAgcmVtb3ZlZE5vZGVzW2NoaWxkS2V5XSA9IHByZXZDaGlsZENvbXBvbmVudC5fZG9tTm9kZVxyXG4gICAgICAgIFJlY29uY2lsZXIudW5tb3VudENvbXBvbmVudChwcmV2Q2hpbGRDb21wb25lbnQpXHJcbiAgICAgIH1cclxuICAgICAgLy/mlrDlop5cclxuICAgICAgY29uc3QgbmV4dENvbXBvbmVudCA9IGluc3RhbnRpYXRlQ29tcG9uZW50KG5leHRFbGVtZW50KVxyXG4gICAgICBuZXh0Q2hpbGRyZW5bY2hpbGRLZXldID0gbmV4dENvbXBvbmVudFxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhuZXh0Q29tcG9uZW50KVxyXG4gICAgICBtb3VudE5vZGVzLnB1c2goUmVjb25jaWxlci5tb3VudENvbXBvbmVudChuZXh0Q29tcG9uZW50KSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBPYmplY3Qua2V5cyhwcmV2Q2hpbGRyZW4pLmZvckVhY2goY2hpbGRLZXkgPT4ge1xyXG4gICAgaWYgKCFuZXh0Q2hpbGRyZW4uaGFzT3duUHJvcGVydHkoY2hpbGRLZXkpKSB7XHJcbiAgICAgIGNvbnN0IHByZXZDaGlsZENvbXBvbmVudCA9IHByZXZDaGlsZHJlbltjaGlsZEtleV1cclxuICAgICAgcmVtb3ZlZE5vZGVzW2NoaWxkS2V5XSA9IHByZXZDaGlsZENvbXBvbmVudFxyXG4gICAgICBSZWNvbmNpbGVyLnVubW91bnRDb21wb25lbnQocHJldkNoaWxkQ29tcG9uZW50KVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG91bGRVcGRhdGVDb21wb25lbnQocHJldkVsZW1lbnQsIG5leHRFbGVtZW50KSB7XHJcbiAgcmV0dXJuIHByZXZFbGVtZW50LnR5cGUgPT09IG5leHRFbGVtZW50LnR5cGVcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBpbnN0YW50aWF0ZUNoaWxkcmVuLFxyXG4gIHVwZGF0ZUNoaWxkcmVuLFxyXG4gIHVubW91bnRDaGlsZHJlblxyXG59IiwiY29uc3QgaW5zdGFudGlhdGVDb21wb25lbnQgPSByZXF1aXJlKCcuL2luc3RhbnRpYXRlQ29tcG9uZW50JylcclxuY29uc3QgUmVjb25jaWxlciA9IHJlcXVpcmUoJy4vUmVjb25jaWxlcicpXHJcblxyXG5jbGFzcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHNcclxuICAgICAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gbnVsbFxyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkQ29tcG9uZW50ID0gbnVsbFxyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkTm9kZSA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBfY29uc3RydWN0KGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50RWxlbWVudCA9IGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBtb3VudENvbXBvbmVudCgpIHtcclxuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSB0aGlzLnJlbmRlcigpXHJcbiAgICAgICAgY29uc3QgcmVuZGVyZWRDb21wb25lbnQgPSBpbnN0YW50aWF0ZUNvbXBvbmVudChyZW5kZXJlZEVsZW1lbnQpXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRDb21wb25lbnQgPSByZW5kZXJlZENvbXBvbmVudFxyXG5cclxuICAgICAgICBjb25zdCBfcmVuZGVyZWROb2RlID0gUmVjb25jaWxlci5tb3VudENvbXBvbmVudChyZW5kZXJlZENvbXBvbmVudClcclxuICAgICAgICB0aGlzLl9yZW5kZXJlZE5vZGUgPSBfcmVuZGVyZWROb2RlXHJcbiAgICAgICAgcmV0dXJuIF9yZW5kZXJlZE5vZGVcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZShwYXJ0aWFsU3RhdGUpIHtcclxuICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICB0aGlzLl9wZW5kaW5nU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBwYXJ0aWFsU3RhdGUpXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQodGhpcy5fY3VycmVudEVsZW1lbnQsIHRoaXMuX2N1cnJlbnRFbGVtZW50KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbXBvbmVudChwcmVFbGVtZW50LCBuZXh0RWxlbWVudCkge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgIGlmIChwcmVFbGVtZW50ICE9PSBuZXh0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAvL+ihqOekuuaYr3Byb3Bz5Y+Y5YyW77yM6YeN57uE5LqGRWxlbWVudFxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+i/memHjOi0n+i0o3N0YXRl5Y+Y5YyW6YKj5LiA6YOo5YiGXHJcbiAgICAgICAgLy/ph43mlrDorr7nva7kuIDkupvlj4LmlbBcclxuICAgICAgICB0aGlzLl9jdXJyZW50RWxlbWVudCA9IG5leHRFbGVtZW50XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMgPSBuZXh0RWxlbWVudC5wcm9wc1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9wZW5kaW5nU3RhdGUgfHwgdGhpcy5zdGF0ZVxyXG4gICAgICAgIHRoaXMuX3BlbmRpbmdTdGF0ZSA9IG51bGxcclxuXHJcbiAgICAgICAgY29uc3QgcHJldlJlbmRlcmVkRWxlbWVudCA9IHRoaXMuX3JlbmRlcmVkQ29tcG9uZW50Ll9jdXJyZW50RWxlbWVudFxyXG4gICAgICAgIGNvbnN0IG5leHRSZW5kZXJlZEVsZW1lbnQgPSB0aGlzLnJlbmRlcigpXHJcblxyXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGVDb21wb25lbnQocHJldlJlbmRlcmVkRWxlbWVudCwgbmV4dFJlbmRlcmVkRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgUmVjb25jaWxlci5yZWNlaXZlQ29tcG9uZW50KHRoaXMuX3JlbmRlcmVkQ29tcG9uZW50LCBuZXh0UmVuZGVyZWRFbGVtZW50KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFJlY29uY2lsZXIudW5tb3VudENvbXBvbmVudCh0aGlzLl9yZW5kZXJlZENvbXBvbmVudClcclxuICAgICAgICAgICAgY29uc3QgbmV4dFJlbmRlcmVkQ29tcG9uZW50ID0gaW5zdGFudGlhdGVDb21wb25lbnQobmV4dFJlbmRlcmVkRWxlbWVudClcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWROb2RlID0gUmVjb25jaWxlci5tb3VudENvbXBvbmVudChuZXh0UmVuZGVyZWRFbGVtZW50KVxyXG5cclxuICAgICAgICAgICAgRE9NLnJlcGxhY2VOb2RlKHRoaXMuX3JlbmRlcmVkQ29tcG9uZW50Ll9kb21Ob2RlLCB0aGlzLl9yZW5kZXJlZE5vZGUpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlQ29tcG9uZW50KHByZXZFbGVtZW50LCBuZXh0RWxlbWVudCkge1xyXG4gICAgcmV0dXJuIHByZXZFbGVtZW50LnR5cGUgPT09IG5leHRFbGVtZW50LnR5cGVcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudCIsImZ1bmN0aW9uIGVtcHR5KG5vZGUpIHtcclxuICAgIFtdLnNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKG5vZGUsIGNoaWxkcmVuKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkcmVuKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQcm9wZXJ0eShub2RlLCBwcm9wZXJ0eSkge1xyXG4gICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGVOb2RlKHByb3BlcnR5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgIG5vZGUuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobm9kZSwgY2hpbGQsIGFmdGVyQ2hpbGQpIHtcclxuICAgIG5vZGUuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgIGNoaWxkLFxyXG4gICAgICAgIGFmdGVyQ2hpbGQgPyBhZnRlckNoaWxkLm5leHRTaWJsaW5nIDogbm9kZS5maXJzdENoaWxkXHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNoaWxkKG5vZGUsIGNoaWxkKSB7XHJcbiAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBlbXB0eSxcclxuICAgIGFwcGVuZENoaWxkcmVuLFxyXG4gICAgcmVtb3ZlUHJvcGVydHksXHJcbiAgICBzZXRQcm9wZXJ0eSxcclxuICAgIGluc2VydEFmdGVyLFxyXG4gICAgcmVtb3ZlQ2hpbGRcclxufSIsImNvbnN0IE11bHRpQ2hpbGQgPSByZXF1aXJlKCcuL011bHRpQ2hpbGQnKVxyXG5jb25zdCBEb20gPSByZXF1aXJlKCcuL0RPTScpXHJcbmNvbnN0IGVsID0gcmVxdWlyZSgnLi92ZG9tL2VsZW1lbnQnKVxyXG5jb25zdCBpbnN0YW50aWF0ZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vaW5zdGFudGlhdGVDb21wb25lbnQnKVxyXG5jb25zdCBSZWNvbmNpbGVyID0gcmVxdWlyZSgnLi9SZWNvbmNpbGVyJylcclxuXHJcbmNsYXNzIERPTUNvbXBvbmVudCBleHRlbmRzIE11bHRpQ2hpbGQge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLl9jdXJyZW50RWxlbWVudCA9IGVsZW1lbnRcclxuICAgICAgICB0aGlzLl9kb21Ob2RlID0gbnVsbFxyXG4gICAgfVxyXG4gICAgdW5tb3VudENvbXBvbmVudCgpIHtcclxuICAgICAgICB0aGlzLnVubW91bnRDaGlsZHJlbigpXHJcbiAgICB9XHJcbiAgICBfdXBkYXRlTm9kZVByb3BlcnRpZXMob2xkUHJvcHMsIG5leHRQcm9wcykge1xyXG4gICAgICAgIGxldCBzdHlsZVVwZGF0ZXMgPSB7fVxyXG4gICAgICAgIE9iamVjdC5rZXlzKG9sZFByb3BzKS5mb3JFYWNoKHByb3BzTmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wc05hbWUgPT09ICdzdHlsZScpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sZFByb3BzW3Byb3BzTmFtZV0pLmZvckVhY2goc3R5bGVOYW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVVwZGF0ZXNbc3R5bGVOYW1lXSA9ICcnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BzTmFtZSA9PT0gJ2NoaWxkcmVuJykge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIERvbS5yZW1vdmVQcm9wZXJ0eSh0aGlzLl9kb21Ob2RlLCBwcm9wc05hbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIE9iamVjdC5rZXlzKG5leHRQcm9wcykuZm9yRWFjaChwcm9wc05hbWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvcHNOYW1lID09PSAnc3R5bGUnKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhuZXh0UHJvcHNbcHJvcHNOYW1lXSkuZm9yRWFjaChzdHlsZU5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6ZyA6KaB5aSE55CGc3R5bGXmoLflvI9cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVVwZGF0ZXNbc3R5bGVOYW1lXSA9IG5leHRQcm9wc1twcm9wc05hbWVdW3N0eWxlTmFtZV1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcHNOYW1lID09PSAnY2hpbGRyZW4nKSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRG9tLnNldFByb3BlcnR5KHRoaXMuX2RvbU5vZGUsIHByb3BzTmFtZSwgbmV4dFByb3BzW3Byb3BzTmFtZV0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzdHlsZVVwZGF0ZXMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdXBkYXRlU3R5bGVzKHRoaXMuX2RvbU5vZGUsIHN0eWxlVXBkYXRlcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlSW5pdGlhbERPTUNoaWxkcmVuKHByb3BzKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0eXBlb2YgcHJvcHMuY2hpbGRyZW4gPT09ICdudW1iZXInIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiBwcm9wcy5jaGlsZHJlbiA9PT0gJ3N0cmluZydcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcm9wcy5jaGlsZHJlbilcclxuICAgICAgICAgICAgdGhpcy5fZG9tTm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSlcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuTm9kZXMgPSB0aGlzLm1vdW50Q2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIERvbS5hcHBlbmRDaGlsZHJlbih0aGlzLl9kb21Ob2RlLCBjaGlsZHJlbk5vZGVzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF91cGRhdGVET01DaGlsZHJlbihwcmV2UHJvcHMsIG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHByZXZUeXBlID0gdHlwZW9mIHByZXZQcm9wcy5jaGlsZHJlblxyXG4gICAgICAgIGNvbnN0IG5leHRUeXBlID0gdHlwZW9mIG5leHRQcm9wcy5jaGlsZHJlblxyXG5cclxuICAgICAgICBpZiAobmV4dFR5cGUgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChuZXh0VHlwZSA9PT0gJ3N0cmluZycgfHwgbmV4dFR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RvbU5vZGUudGV4dENvbnRlbnQgPSBuZXh0UHJvcHMuY2hpbGRyZW5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91bnRDb21wb25lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgdmRvbVRyZWUgPSBlbFxyXG4gICAgICAgIC8vIGNyZWF0ZSByZWFsIGRvbSBub2Rlc1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldFZkb21UcmVlKHRoaXMuX2N1cnJlbnRFbGVtZW50KVxyXG4gICAgICAgIHRoaXMuX2RvbU5vZGUgPSBub2RlXHJcbiAgICAgICAgcmV0dXJuIG5vZGVcclxuICAgICAgICAvLyB0aGlzLl91cGRhdGVOb2RlUHJvcGVydGllcyh7fSwgdGhpcy5fY3VycmVudEVsZW1lbnQucHJvcHMpXHJcbiAgICAgICAgLy8gdGhpcy5fY3JlYXRlSW5pdGlhbERPTUNoaWxkcmVuKHRoaXMuX2N1cnJlbnRFbGVtZW50LnByb3BzKVxyXG4gICAgfVxyXG4gICAgZ2V0VmRvbVRyZWUocm9vdEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHJvb3RFbGVtZW50LnR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IFJlY29uY2lsZXIubW91bnRDb21wb25lbnQobmV3IHJvb3RFbGVtZW50LnR5cGUocm9vdEVsZW1lbnQucHJvcHMpKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlKVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZVxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJvb3RFbGVtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygcm9vdEVsZW1lbnQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByb290RWxlbWVudFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IHR5cGUsIHByb3BzID0ge30gfSA9IHJvb3RFbGVtZW50XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW5cclxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGRyZW4gPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuID0gW2NoaWxkcmVuXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWwodHlwZSwgcHJvcHMsIGNoaWxkcmVuLm1hcChyZXMgPT4gdGhpcy5nZXRWZG9tVHJlZShyZXMpKSlcclxuICAgIH1cclxuICAgIHVwZGF0ZUNvbXBvbmVudChwcmV2RWxlbWVudCwgbmV4dEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50RWxlbWVudCA9IG5leHRFbGVtZW50XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTm9kZVByb3BlcnRpZXMocHJldkVsZW1lbnQucHJvcHMsIG5leHRFbGVtZW50LnByb3BzKVxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZURPTUNoaWxkcmVuKHByZXZFbGVtZW50LnByb3BzLCBuZXh0RWxlbWVudC5wcm9wcylcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBET01Db21wb25lbnRcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlcyhub2RlLCBzdHlsZSkge1xyXG4gICAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goc3R5bGVOYW1lID0+IHtcclxuICAgICAgICBub2RlLnN0eWxlW3N0eWxlTmFtZV0gPSBzdHlsZVtzdHlsZU5hbWVdXHJcbiAgICB9KVxyXG59IiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZylcclxuICAgIGNvbnN0IGNoaWxkcmVuTGVuZ3RoID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLmxlbmd0aCAtIDJcclxuICAgIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcclxuICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKVxyXG4gICAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW5cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBwcm9wc1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgY3JlYXRlRWxlbWVudFxyXG59IiwiY29uc3QgaW5zdGFudGlhdGVDb21wb25lbnQgPSByZXF1aXJlKCcuL2luc3RhbnRpYXRlQ29tcG9uZW50JylcclxuY29uc3QgUmVjb25jaWxlciA9IHJlcXVpcmUoJy4vUmVjb25jaWxlcicpXHJcbmNvbnN0IERPTSA9IHJlcXVpcmUoJy4vRE9NJylcclxuXHJcblxyXG5mdW5jdGlvbiBtb3VudChlbGVtZW50LCBub2RlKSB7XHJcbiAgICAvL2VsZW1lbnQgPT4gY29tcG9uZW50XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSBpbnN0YW50aWF0ZUNvbXBvbmVudChlbGVtZW50KVxyXG4gICAgLy9jb21wb25lbnQgPT4gZWxlbWVudFxyXG4gICAgY29uc3QgcmVuZGVyZWROb2RlID0gUmVjb25jaWxlci5tb3VudENvbXBvbmVudChjb21wb25lbnQpXHJcblxyXG4gICAgRE9NLmVtcHR5KG5vZGUpXHJcbiAgICBET00uYXBwZW5kQ2hpbGRyZW4obm9kZSwgcmVuZGVyZWROb2RlLnJlbmRlcigpKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoZWxlbWVudCwgbm9kZSkge1xyXG4gICAgbW91bnQoZWxlbWVudCwgbm9kZSlcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICByZW5kZXJcclxufSIsImNvbnN0IENoaWxkUmVjb25jaWxlciA9IHJlcXVpcmUoJy4vQ2hpbGRSZWNpbmNpbGVyJylcclxuY29uc3QgUmVjb25jaWxlciA9IHJlcXVpcmUoJy4vUmVjb25jaWxlcicpXHJcbmNvbnN0IHRyYXZlcnNlQWxsQ2hpbGRyZW4gPSByZXF1aXJlKCcuL3RyYXZlcnNlQWxsQ2hpbGRyZW4nKVxyXG5jb25zdCB7IE9QRVJBVElPTlMsIFVQREFURV9UWVBFUyB9ID0gcmVxdWlyZSgnLi9vcGVyYXRpb25zJylcclxuY29uc3QgRE9NID0gcmVxdWlyZSgnLi9ET00nKVxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCcuL2Fzc2VydCcpXHJcblxyXG5mdW5jdGlvbiBmbGF0dGVuQ2hpbGRyZW4oY2hpbGRyZW4pIHtcclxuICBjb25zdCBmYXR0ZW5lZEVsZW1lbnQgPSB7fVxyXG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oXHJcbiAgICBjaGlsZHJlbixcclxuICAgIChjb250ZXh0LCBjaGlsZCwgbmFtZSkgPT4gY29udGV4dFtuYW1lXSA9IGNoaWxkLFxyXG4gICAgZmF0dGVuZWRFbGVtZW50XHJcbiAgKVxyXG4gIHJldHVybiBmYXR0ZW5lZEVsZW1lbnRcclxufVxyXG5cclxuXHJcbi8vIHRoaXMgaXMgcmVzcG9uc2libGUgZm9yIHRoZSByZWFsIHVwZGF0ZXMgb2YgdGhlIGRpZmZpbmcgdHJlZVxyXG5mdW5jdGlvbiBwcm9jZXNzUXVldWUocGFyZW50Tm9kZSwgdXBkYXRlcykge1xyXG4gIHVwZGF0ZXMuZm9yRWFjaCh1cGRhdGUgPT4ge1xyXG4gICAgc3dpdGNoICh1cGRhdGUudHlwZSkge1xyXG4gICAgICBjYXNlIFVQREFURV9UWVBFUy5JTlNFUlQ6XHJcbiAgICAgICAgRE9NLmluc2VydEFmdGVyKHBhcmVudE5vZGUsIHVwZGF0ZS5jb250ZW50LCB1cGRhdGUuYWZ0ZXJOb2RlKVxyXG4gICAgICAgIGJyZWFrXHJcblxyXG4gICAgICBjYXNlIFVQREFURV9UWVBFUy5NT1ZFOlxyXG4gICAgICAgIC8vIHRoaXMgYXV0b21hdGljYWxseSByZW1vdmVzIGFuZCBpbnNlcnRzIHRoZSBuZXcgY2hpbGRcclxuICAgICAgICBET00uaW5zZXJ0QWZ0ZXIoXHJcbiAgICAgICAgICBwYXJlbnROb2RlLFxyXG4gICAgICAgICAgdXBkYXRlLmNvbnRlbnQsXHJcbiAgICAgICAgICB1cGRhdGUuYWZ0ZXJOb2RlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGJyZWFrXHJcblxyXG4gICAgICBjYXNlIFVQREFURV9UWVBFUy5SRU1PVkU6XHJcbiAgICAgICAgRE9NLnJlbW92ZUNoaWxkKHBhcmVudE5vZGUsIHVwZGF0ZS5mcm9tTm9kZSlcclxuICAgICAgICBicmVha1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBhc3NlcnQoZmFsc2UpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmNsYXNzIE11bHRpQ2hpbGQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fcmVuZGVyZWRDaGlsZHJlbiA9IG51bGxcclxuICB9XHJcbiAgdW5tb3VudENoaWxkcmVuKCkge1xyXG4gICAgQ2hpbGRSZWNvbmNpbGVyLnVubW91bnRDaGlsZHJlbih0aGlzLl9yZW5kZXJlZENoaWxkcmVuKVxyXG4gIH1cclxuXHJcbiAgbW91bnRDaGlsZHJlbihjaGlsZHJlbikge1xyXG4gICAgLy8gY2hpbGRyZW4gZWxlbWVudHMgPT4gY2hpbGRyZW4gbm9kZXNcclxuICAgIGNvbnN0IGNoaWxkcmVuQ29tcG9uZW50cyA9IENoaWxkUmVjb25jaWxlci5pbnN0YW50aWF0ZUNoaWxkcmVuKGNoaWxkcmVuKVxyXG4gICAgLy8gY29uc29sZS5sb2coY2hpbGRyZW4pXHJcbiAgICAvLyBkZWJ1Z2dlclxyXG4gICAgdGhpcy5fcmVuZGVyZWRDaGlsZHJlbiA9IGNoaWxkcmVuQ29tcG9uZW50c1xyXG5cclxuICAgIC8qXHJcbiAgICB7XHJcbiAgICAgICcuMC4wJzoge19jdXJyZW50RWxlbWVudCwgLi4ufVxyXG4gICAgICAnLjAuMSc6IHtfY3VycmVudEVsZW1lbnQsIC4uLn1cclxuICAgIH1cclxuICAgICovXHJcblxyXG4gICAgY29uc3QgY2hpbGRyZW5Ob2RlcyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuQ29tcG9uZW50cykubWFwKChjaGlsZEtleSkgPT4ge1xyXG4gICAgICBjb25zdCBjaGlsZENvbXBvbmVudCA9IGNoaWxkcmVuQ29tcG9uZW50c1tjaGlsZEtleV1cclxuXHJcbiAgICAgIHJldHVybiBSZWNvbmNpbGVyLm1vdW50Q29tcG9uZW50KGNoaWxkQ29tcG9uZW50KVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gY2hpbGRyZW5Ob2Rlc1xyXG4gIH1cclxuICB1cGRhdGVDaGlsZHJlbihuZXh0Y2hpbGRSZW4pIHtcclxuICAgIC8v6ICB55qEIGNvbXBvbmVudOagkVxyXG4gICAgbGV0IHByZXZSZW5kZXJlZENoaWxkcmVuID0gdGhpcy5fcmVuZGVyZWRDaGlsZHJlblxyXG4gICAgbGV0IG5leHRSZW5kZXJlZENoaWxkcmVuID0gZmxhdHRlbkNoaWxkcmVuKG5leHRjaGlsZFJlbilcclxuXHJcbiAgICBsZXQgbW91bnROb2RlcyA9IFtdXHJcbiAgICBsZXQgcmVtb3ZlZE5vZGVzID0ge31cclxuXHJcbiAgICAvLyBkZWJ1Z2dlclxyXG4gICAgQ2hpbGRSZWNvbmNpbGVyLnVwZGF0ZUNoaWxkcmVuKFxyXG4gICAgICBwcmV2UmVuZGVyZWRDaGlsZHJlbixcclxuICAgICAgbmV4dFJlbmRlcmVkQ2hpbGRyZW4sXHJcbiAgICAgIG1vdW50Tm9kZXMsXHJcbiAgICAgIHJlbW92ZWROb2RlcyxcclxuICAgIClcclxuICAgIC8vIFdlJ2xsIGNvbXBhcmUgdGhlIGN1cnJlbnQgc2V0IG9mIGNoaWxkcmVuIHRvIHRoZSBuZXh0IHNldC5cclxuICAgIC8vIFdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoYXQgbm9kZXMgYXJlIGJlaW5nIG1vdmVkIGFyb3VuZCwgd2hpY2ggYXJlIGJlaW5nXHJcbiAgICAvLyBpbnNlcnRlZCwgYW5kIHdoaWNoIGFyZSBnZXR0aW5nIHJlbW92ZWQuIEx1Y2tpbHksIHRoZSByZW1vdmFsIGxpc3Qgd2FzXHJcbiAgICAvLyBhbHJlYWR5IGRldGVybWluZWQgYnkgdGhlIENoaWxkUmVjb25jaWxlci5cclxuXHJcbiAgICAvLyBXZSdsbCBnZW5lcmF0ZSBhIHNlcmllcyBvZiB1cGRhdGUgb3BlcmF0aW9ucyBoZXJlIGJhc2VkIG9uIHRoZVxyXG4gICAgLy8gYm9va21hcmtzIHRoYXQgd2UndmUgbWFkZSBqdXN0IG5vd1xyXG4gICAgbGV0IHVwZGF0ZXMgPSBbXVxyXG4gICAgbGV0IGxhc3RJbmRleCA9IDBcclxuICAgIGxldCBuZXh0TW91bnRJbmRleCA9IDBcclxuICAgIGxldCBsYXN0UGxhY2VkTm9kZSA9IG51bGxcclxuXHJcbiAgICBPYmplY3Qua2V5cyhuZXh0UmVuZGVyZWRDaGlsZHJlbikuZm9yRWFjaCgoY2hpbGRLZXksIG5leHRJbmRleCkgPT4ge1xyXG4gICAgICBsZXQgcHJldkNoaWxkID0gcHJldlJlbmRlcmVkQ2hpbGRyZW5bY2hpbGRLZXldXHJcbiAgICAgIGxldCBuZXh0Q2hpbGQgPSBuZXh0UmVuZGVyZWRDaGlsZHJlbltjaGlsZEtleV1cclxuXHJcbiAgICAgIGlmIChwcmV2Q2hpbGQgPT09IG5leHRDaGlsZCkge1xyXG4gICAgICAgIGlmIChwcmV2Q2hpbGQuX21vdW50SW5kZXggPCBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgIHVwZGF0ZXMucHVzaChPUEVSQVRJT05TLm1vdmUobmV4dENoaWxkLCBsYXN0UGxhY2VkTm9kZSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3RJbmRleCA9IE1hdGgubWF4KHByZXZDaGlsZC5fbW91bnRJbmRleCwgbGFzdEluZGV4KVxyXG4gICAgICAgIHByZXZDaGlsZC5fbW91bnRJbmRleCA9IG5leHRJbmRleFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChwcmV2Q2hpbGQpIHtcclxuICAgICAgICAgIGxhc3RJbmRleCA9IE1hdGgubWF4KHByZXZDaGlsZC5fbW91bnRJbmRleCwgbGFzdEluZGV4KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV4dENoaWxkLl9tb3VudEluZGV4ID0gbmV4dEluZGV4XHJcbiAgICAgICAgdXBkYXRlcy5wdXNoKE9QRVJBVElPTlMuaW5zZXJ0KFxyXG4gICAgICAgICAgbW91bnROb2Rlc1tuZXh0TW91bnRJbmRleF0sXHJcbiAgICAgICAgICBsYXN0UGxhY2VkTm9kZVxyXG4gICAgICAgICkpXHJcbiAgICAgICAgbmV4dE1vdW50SW5kZXgrK1xyXG4gICAgICB9XHJcbiAgICAgIGxhc3RQbGFjZWROb2RlID0gbmV4dENoaWxkLl9kb21Ob2RlXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBPYmplY3Qua2V5cyhyZW1vdmVkTm9kZXMpLmZvckVhY2goKGNoaWxkS2V5KSA9PiB7XHJcbiAgICAgIHVwZGF0ZXMucHVzaChcclxuICAgICAgICBPUEVSQVRJT05TLnJlbW92ZShyZW1vdmVkTm9kZXNbY2hpbGRLZXldKVxyXG4gICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGRvIHRoZSBhY3R1YWwgdXBkYXRlc1xyXG4gICAgcHJvY2Vzc1F1ZXVlKHRoaXMuX2RvbU5vZGUsIHVwZGF0ZXMpXHJcblxyXG4gICAgLy8gYXQgdGhpcyBwb2ludCwgbmV4dFJlbmRlcmVkQ2hpbGRyZW4gaGFzIGFscmVhZHkgYmVjb21lIGEgY29tcG9uZW50IHRyZWVcclxuICAgIC8vIHJhdGhlciB0aGFuIHRoZSBvcmlnaW5hbCBlbGVtZW50IHRyZWVcclxuICAgIHRoaXMuX3JlbmRlcmVkQ2hpbGRyZW4gPSBuZXh0UmVuZGVyZWRDaGlsZHJlblxyXG5cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTXVsdGlDaGlsZCIsIi8vIFJlY29uY2lsbGVyXHJcblxyXG5mdW5jdGlvbiBtb3VudENvbXBvbmVudChjb21wb25lbnQpIHtcclxuICAgIHJldHVybiBjb21wb25lbnQubW91bnRDb21wb25lbnQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWNlaXZlQ29tcG9uZW50KGNvbXBvbmVudCwgbmV4dEVsZW1lbnQpIHtcclxuICAgIGlmIChjb21wb25lbnQuX2N1cnJlbnRFbGVtZW50ID09PSBuZXh0RWxlbWVudCkgcmV0dXJuXHJcbiAgICBjb21wb25lbnQudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudC5fY3VycmVudEVsZW1lbnQsIG5leHRFbGVtZW50KVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bm1vdW50Q29tcG9uZW50KGNvbXBvbmVudCkge1xyXG4gICAgY29tcG9uZW50LnVubW91bnRDb21wb25lbnQoKVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIG1vdW50Q29tcG9uZW50LFxyXG4gICAgcmVjZWl2ZUNvbXBvbmVudCxcclxuICAgIHVubW91bnRDb21wb25lbnRcclxufSIsImZ1bmN0aW9uIGFzc2VydCh2YWwpIHtcclxuICAgIGlmICghQm9vbGVhbih2YWwpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYXNzZXJ0aW9uIGZhaWx1cmUnKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBtb2R1bGUuZXhwb3J0cyA9IGFzc2VydCIsImNvbnN0IERPTUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vRE9NQ29tcG9uZW50JylcclxuXHJcbmZ1bmN0aW9uIGluc3RhbnRpYXRlQ29tcG9uZW50KGVsZW1lbnQpIHtcclxuICAgIGxldCBjb21wb25lbnRJbnN0YW5jZVxyXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBjb21wb25lbnRJbnN0YW5jZSA9IG5ldyBlbGVtZW50LnR5cGUoZWxlbWVudC5wcm9wcylcclxuICAgICAgICBjb21wb25lbnRJbnN0YW5jZS5fY29uc3RydWN0KGVsZW1lbnQpXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2UgPSBuZXcgRE9NQ29tcG9uZW50KGVsZW1lbnQpXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyB8fCAnbnVtYmVyJykge1xyXG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlID0gbmV3IERPTUNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzcGFuJyxcclxuICAgICAgICAgICAgcHJvcHM6IHsgY2hpbGRyZW46IGVsZW1lbnQgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tcG9uZW50SW5zdGFuY2VcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnN0YW50aWF0ZUNvbXBvbmVudCIsImNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL0VsZW1lbnQuanMnKVxyXG5jb25zdCBDb21wb25lbnQgPSByZXF1aXJlKCcuL0NvbXBvbmVudC5qcycpXHJcbmNvbnN0IE1vdW50ID0gcmVxdWlyZSgnLi9Nb3VudC5qcycpXHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgY3JlYXRlRWxlbWVudDpFbGVtZW50LmNyZWF0ZUVsZW1lbnQsXHJcbiAgICBDb21wb25lbnQ6Q29tcG9uZW50LFxyXG4gICAgcmVuZGVyOk1vdW50LnJlbmRlclxyXG59IiwiY29uc3QgVVBEQVRFX1RZUEVTID0ge1xyXG4gICAgSU5TRVJUOiAxLFxyXG4gICAgTU9WRTogMixcclxuICAgIFJFTU9WRTogM1xyXG59XHJcblxyXG5jb25zdCBPUEVSQVRJT05TID0ge1xyXG4gICAgaW5zZXJ0KG5vZGUsIGFmdGVyTm9kZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQREFURV9UWVBFUy5JTlNFUlQsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG5vZGUsXHJcbiAgICAgICAgICAgIGFmdGVyTm9kZTogYWZ0ZXJOb2RlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdmUoY29tcG9uZW50LCBhZnRlck5vZGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBVUERBVEVfVFlQRVMuTU9WRSxcclxuICAgICAgICAgICAgZnJvbUluZGV4OiBjb21wb25lbnQuX21vdW50SW5kZXgsXHJcbiAgICAgICAgICAgIGFmdGVyTm9kZTogYWZ0ZXJOb2RlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogVVBEQVRFX1RZUEVTLlJFTU9WRSxcclxuICAgICAgICAgICAgZnJvbU5vZGU6IG5vZGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgT1BFUkFUSU9OUyxcclxuICAgIFVQREFURV9UWVBFU1xyXG59IiwiY29uc3QgU0VQQVJBVE9SID0gJy4nXHJcbmNvbnN0IFNVQlNFUEFSQVRPUiA9ICc6J1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcclxuICAvLyBUaGlzIGlzIHdoZXJlIHdlIHdvdWxkIHVzZSB0aGUga2V5IHByb3AgdG8gZ2VuZXJhdGUgYSB1bmlxdWUgaWQgdGhhdFxyXG4gIC8vIHBlcnNpc3RzIGFjcm9zcyBtb3Zlcy4gSG93ZXZlciB3ZSdyZSBza2lwcGluZyB0aGF0IHNvIHdlJ2xsIGp1c3QgdXNlIHRoZVxyXG4gIC8vIGluZGV4LlxyXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNilcclxufVxyXG5cclxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xyXG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKFxyXG4gIGNoaWxkcmVuLFxyXG4gIG5hbWVTb0ZhcixcclxuICBjYWxsYmFjayxcclxuICB0cmF2ZXJzZUNvbnRleHRcclxuKSB7XHJcbiAgLy8gc2luZ2xlIGNoaWxkXHJcbiAgaWYgKFxyXG4gICAgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyB8fFxyXG4gICAgdHlwZW9mIGNoaWxkcmVuID09PSAnbnVtYmVyJyB8fFxyXG4gICAgIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXHJcbiAgKSB7XHJcbiAgICBjYWxsYmFjayhcclxuICAgICAgdHJhdmVyc2VDb250ZXh0LFxyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgbmFtZVNvRmFyICsgU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkcmVuLCAwKVxyXG4gICAgKVxyXG4gICAgcmV0dXJuIDFcclxuICB9XHJcblxyXG4gIGxldCBzdWJ0cmVlQ291bnQgPSAwXHJcbiAgY29uc3QgbmFtZVByZWZpeCA9ICFuYW1lU29GYXIgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1JcclxuXHJcbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcclxuICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChcclxuICAgICAgY2hpbGQsXHJcbiAgICAgIG5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpLFxyXG4gICAgICBjYWxsYmFjayxcclxuICAgICAgdHJhdmVyc2VDb250ZXh0XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHN1YnRyZWVDb3VudFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRyYXZlcnNlQWxsQ2hpbGRyZW5cclxuIiwiY29uc3QgXyA9IHJlcXVpcmUoJy4vdXRpbCcpXHJcblxyXG5mdW5jdGlvbiBFbGVtZW50KHRhZ05hbWUsIHByb3BzLCBjaGlsZHJlbikge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50KHRhZ05hbWUsIHByb3BzLCBjaGlsZHJlbilcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkge1xyXG4gICAgICAgIGNoaWxkcmVuID0gcHJvcHNcclxuICAgICAgICBwcm9wcyA9IHt9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50YWdOYW1lID0gdGFnTmFtZVxyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9XHJcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW4gfHwgW11cclxuICAgIHRoaXMua2V5ID0gcHJvcHNcclxuICAgICAgICA/IHByb3BzLmtleVxyXG4gICAgICAgIDogdm9pZCA2NjZcclxuXHJcbiAgICB2YXIgY2hpbGROb2Rlc0xlbmd0aCA9IDBcclxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcclxuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggKz0gY2hpbGQuY2hpbGROb2Rlc0xlbmd0aFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuW2ldID0gJycgKyBjaGlsZFxyXG4gICAgICAgIH1cclxuICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoKytcclxuICAgIH0pXHJcbiAgICAvL+S4i+WxnuWtkOWFg+e0oOeahOaVsOmHj++8jOWMheWQq+a3seWxguWtkOWFg+e0oOeahOaVsOmHj1xyXG4gICAgdGhpcy5jaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlc0xlbmd0aFxyXG59XHJcblxyXG5FbGVtZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgJGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZ05hbWUpXHJcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzXHJcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuXHJcbiAgICBkZWxldGUgcHJvcHMuY2hpbGRyZW5cclxuICAgIGZvciAodmFyIHByb3BzTmFtZSBpbiBwcm9wcykge1xyXG4gICAgICAgIHZhciBwcm9wc1ZhbHVlID0gcHJvcHNbcHJvcHNOYW1lXVxyXG4gICAgICAgICRlbC5zZXRBdHRyaWJ1dGUocHJvcHNOYW1lLCBwcm9wc1ZhbHVlKVxyXG4gICAgfVxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICB2YXIgY2hpbGRFbCA9IGNoaWxkIGluc3RhbmNlb2YgRWxlbWVudFxyXG4gICAgICAgICAgICA/IGNoaWxkLnJlbmRlcigpXHJcbiAgICAgICAgICAgIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpXHJcbiAgICAgICAgJGVsLmFwcGVuZENoaWxkKGNoaWxkRWwpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiAkZWxcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50IiwiLy/mm7/mjaLmjonljp/mnaXnmoToioLngrnvvIzkvovlpoLmiorkuIrpnaLnmoRkaXbmjaLmiJDkuoZzZWN0aW9uXHJcbi8v56e75Yqo44CB5Yig6Zmk44CB5paw5aKe5a2Q6IqC54K577yM5L6L5aaC5LiK6Z2iZGl255qE5a2Q6IqC54K577yM5oqKcOWSjHVs6aG65bqP5LqS5o2iXHJcbi8v5L+u5pS55LqG6IqC54K555qE5bGe5oCnXHJcbi8v5a+55LqO5paH5pys6IqC54K577yM5paH5pys5YaF5a655Y+v6IO95Lya5pS55Y+Y44CC5L6L5aaC5L+u5pS55LiK6Z2i55qE5paH5pys6IqC54K5MuWGheWuueS4ulZpcnR1YWwgRE9NIDLjgIJcclxuY29uc3QgUkVQTEFDRSA9IDBcclxuY29uc3QgUkVPUkRFUiA9IDFcclxuY29uc3QgUFJPUFMgPSAyXHJcbmNvbnN0IFRFWFQgPSAzXHJcblxyXG5jb25zdCBNT1ZFU19BREQgPSAxXHJcbmNvbnN0IE1PVkVTX0RFTEVURSA9IDBcclxuY29uc3QgTU9WRVNfUkVPUkRFUiA9IDJcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgdHlwZShvYmopIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikucmVwbGFjZSgvXFxbb2JqZWN0XFxzfFxcXS9nLCAnJylcclxuICAgIH0sXHJcblxyXG4gICAgaXNBcnJheShsaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZShsaXN0KSA9PT0gJ0FycmF5J1xyXG4gICAgfSxcclxuXHJcbiAgICBzbGljZShhcnJheUxpa2UsIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5TGlrZSwgaW5kZXgpXHJcbiAgICB9LFxyXG5cclxuICAgIHRydXRoeSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhIXZhbHVlXHJcbiAgICB9LFxyXG5cclxuICAgIGlzU3RyaW5nKGxpc3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlKGxpc3QpID09PSAnU3RyaW5nJ1xyXG4gICAgfSxcclxuXHJcbiAgICBlYWNoKGFycmF5LCBmbikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBmbihhcnJheVtpXSwgaSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRvQXJyYXkobGlzdExpa2UpIHtcclxuICAgICAgICBpZiAoIWxpc3RMaWtlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxpc3QgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGlzdExpa2UubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGxpc3RMaWtlW2ldKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3RcclxuICAgIH0sXHJcblxyXG4gICAgc2V0QXR0cihub2RlLCBrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxyXG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ3ZhbHVlJzpcclxuICAgICAgICAgICAgICAgIHZhciB0YWdOYW1lID0gbm9kZS50YWdOYW1lIHx8ICcnXHJcbiAgICAgICAgICAgICAgICB0YWdOYW1lID0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZSA9PT0gJ2lucHV0JyB8fCB0YWdOYW1lID09PSAndGV4dGFyZWEnXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnZhbHVlID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgbm90IGEgaW5wdXQgb3IgdGV4dGFyZWEsIHVzZSBgc2V0QXR0cmlidXRlYCB0byBzZXRcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBSRVBMQUNFLFxyXG4gICAgUkVPUkRFUixcclxuICAgIFBST1BTLFxyXG4gICAgVEVYVCxcclxuICAgIE1PVkVTX0FERCxcclxuICAgIE1PVkVTX0RFTEVURSxcclxuICAgIE1PVkVTX1JFT1JERVIsXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=