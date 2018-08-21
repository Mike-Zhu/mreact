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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");

const { Component } = _utils__WEBPACK_IMPORTED_MODULE_0__["default"];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 1,
      color: {
        color: "red"
      }
    };

    setTimeout(() => {
      this.setState({
        first: 2,
        color: {
          color: "yellow"
        }
      });
    }, 1000);
  }
  // compomentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       first: 2
  //     })
  //   }, 1000)
  // }

  render() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "div",
      { style: this.state.color },
      this.state.first,
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
        "span",
        null,
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
          "h1",
          null,
          "Heading 1"
        ),
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(SmallHeader, null),
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
          "h2",
          { style: { color: 'yellow' } },
          "Heading 2"
        ),
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
          "div",
          null,
          _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
            "h1",
            null,
            this.state.first
          ),
          _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
            "h2",
            null,
            "2"
          ),
          _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
            "h3",
            null,
            "3"
          )
        )
      ),
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
        "h3",
        null,
        "Heading 3"
      )
    );
  }
}

class SmallHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aaa: 22
    };
  }
  // compomentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       aaa: 333
  //     })
  //   }, 3000)
  // }
  render() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "h5",
      null,
      this.state.aaa
    );
  }
}

_utils__WEBPACK_IMPORTED_MODULE_0__["default"].render(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./src/utils/Component.js":
/*!********************************!*\
  !*** ./src/utils/Component.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virturn_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virturn-dom */ "./src/utils/virturn-dom.js");


const ReactComponentSymbol = {};

class Updater {
    constructor(instance) {
        this.instance = instance;
        this.pendingStates = [];
    }

    addState(nextState) {
        this.pendingStates.push(nextState);
    }

    getState() {
        const { instance } = this;
        let _pendingState = {};
        while (this.pendingStates.length > 0) {
            let partialState = this.pendingStates.shift();
            _pendingState = Object.assign({}, instance.state, partialState);
        }
        return _pendingState;
    }

    updateComponent() {}
}

class Component {
    constructor(props) {
        this.$updater = new Updater(this);
        this.$cache = {
            isMounted: false
        };
        this.props = props;
    }

    forceUpdate() {
        let { $updater, $cache, props, context } = this;
        this.state = $updater.getState();
        let state = this.state;
        let { vnode, node } = $cache;
        let newVnode = Object(_virturn_dom__WEBPACK_IMPORTED_MODULE_0__["renderComponent"])(this);
        Object(_virturn_dom__WEBPACK_IMPORTED_MODULE_0__["compareTwoVnodes"])(vnode, newVnode, node);
    }

    mountComponent() {
        if (this._currentVnode) {
            return _Vnode;
        }
        const _Vnode = this.getVnode();
        _Vnode.__instanseReactComponent = this;
        this._currentVnode = _Vnode;
        return _Vnode;
    }
    setState(partialState) {
        this.$updater.addState(partialState);
        this.forceUpdate();
    }
}

Component.isReactComponent = ReactComponentSymbol;
function shouldUpdateComponent(prevElement, nextElement) {
    return prevElement.type === nextElement.type;
}
/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/utils/DOM.js":
/*!**************************!*\
  !*** ./src/utils/DOM.js ***!
  \**************************/
/*! exports provided: empty, appendChildren, removeProperty, setProperty, insertAfter, removeChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChildren", function() { return appendChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProperty", function() { return removeProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return setProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return removeChild; });
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
    } else if (typeof children === 'string' || typeof children === 'number') {
        node.append(children);
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

/***/ }),

/***/ "./src/utils/Element.js":
/*!******************************!*\
  !*** ./src/utils/Element.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createElement; });
function createElement(type, config, children) {
    const props = Object.assign({}, config);
    const childrenLength = [].slice.call(arguments).length - 2;
    if (childrenLength > 1) {
        props.children = [].slice.call(arguments, 2);
    } else if (childrenLength === 1 && children !== undefined) {
        props.children = children;
    }
    return {
        type,
        props
    };
}

/***/ }),

/***/ "./src/utils/Mount.js":
/*!****************************!*\
  !*** ./src/utils/Mount.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mount; });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/utils/DOM.js");
/* harmony import */ var _virturn_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virturn-dom */ "./src/utils/virturn-dom.js");



function mount(element, node) {
    //element => component
    const renderedNode = Object(_virturn_dom__WEBPACK_IMPORTED_MODULE_1__["initVnode"])(element);
    _DOM__WEBPACK_IMPORTED_MODULE_0__["empty"](node);
    _DOM__WEBPACK_IMPORTED_MODULE_0__["appendChildren"](node, renderedNode);
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element.js */ "./src/utils/Element.js");
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.js */ "./src/utils/Component.js");
/* harmony import */ var _Mount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mount.js */ "./src/utils/Mount.js");




/* harmony default export */ __webpack_exports__["default"] = ({ createElement: _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"], Component: _Component_js__WEBPACK_IMPORTED_MODULE_1__["default"], render: _Mount_js__WEBPACK_IMPORTED_MODULE_2__["default"] });

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: getUid, prospDiffType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUid", function() { return getUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prospDiffType", function() { return prospDiffType; });
let uid = 0;

function getUid() {
    return ++uid;
}

const prospDiffType = {
    "delete": 0,
    "add": 1
};

/***/ }),

/***/ "./src/utils/virturn-dom.js":
/*!**********************************!*\
  !*** ./src/utils/virturn-dom.js ***!
  \**********************************/
/*! exports provided: initVnode, initText, initElement, initComponent, renderComponent, destroyVnode, compareTwoVnodes, updateVnode, updateVcomponent, updateElement, getDiffProps, setProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initVnode", function() { return initVnode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initText", function() { return initText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initElement", function() { return initElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initComponent", function() { return initComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyVnode", function() { return destroyVnode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTwoVnodes", function() { return compareTwoVnodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateVnode", function() { return updateVnode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateVcomponent", function() { return updateVcomponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateElement", function() { return updateElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiffProps", function() { return getDiffProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProps", function() { return setProps; });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/utils/DOM.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");



function initVnode(vnode) {
    let { type } = vnode,
        node = null;
    if (!type) {
        node = initText(vnode);
    } else if (typeof type === 'string') {
        node = initElement(vnode);
    } else if (typeof type === 'function') {
        node = initComponent(vnode);
    }
    return node;
}

function initText(text) {
    return document.createTextNode(text);
}

function initElement(vnode) {
    const { type, props } = vnode;
    const { children } = props;
    let node = document.createElement(type);
    setProps(node, props);
    if (Array.isArray(children)) {
        children.forEach(childVnode => {
            _DOM__WEBPACK_IMPORTED_MODULE_0__["appendChildren"](node, initVnode(childVnode));
        });
    } else {
        _DOM__WEBPACK_IMPORTED_MODULE_0__["appendChildren"](node, initText(children));
    }
    return node;
}

function initComponent(oldComponent) {
    const { type: Component, props } = oldComponent;
    const component = new Component(props);
    const { $cache: cache } = component;
    const vnode = renderComponent(component);
    const node = initVnode(vnode);
    vnode.uid = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getUid"])();
    cache.vnode = vnode;
    cache.node = node;
    cache.isMounted = true;
    return node;
}

function renderComponent(component) {
    return component.render();
}

function destroyVnode(oldVnode, node) {}

function compareTwoVnodes(oldVnode, newVnode, node) {
    let newNode = node;
    console.log(newVnode);
    if (!newVnode) {
        //如果新节点是空，销毁node并且移移除
        destroyVnode(oldVnode, node);
        node.parentNode.removeChild(node);
    } else if (oldVnode.type !== newVnode.type || oldVnode.key !== newVnode.key) {
        //type或者key不同，完全重构
        destroyVnode(oldVnode, node);
        newNode = initVnode(newVnode);
        node.parentNode.replaceChild(newNode, node);
    } else {
        //非上述情况则更新
        newNode = updateVnode(oldVnode, newVnode, node);
    }
    return newNode;
}

function updateVnode(oldVnode, newVnode, node) {
    const { type } = oldVnode;
    console.log(type);
    if (!type) {
        return node;
    }
    if (typeof type === 'function') {
        return updateVcomponent(oldVnode, newVnode, node);
    }

    if (typeof type === 'string') {
        return updateElement(oldVnode, newVnode, node);
    }
}

function updateVcomponent(oldVnode, newVnode, node) {}

function updateElement(oldVnode, newVnode, node) {
    let diffProps = getDiffProps(oldVnode.props, newVnode.props);
    diffProps && setProps(node, diffProps);
    updateChildren(oldVnode, newVnode);
}

function getDiffProps(props, newProps) {
    let changeProps = {},
        count = 0,
        ignoreList = ['children', 'key'];
    for (let name in props) {
        if (newProps[name] !== props[name] && ignoreList.indexOf(name) < 0) {
            changeProps[name] = newProps[name];
            count++;
        }
    }
    for (let name in newProps) {
        if (!props.hasOwnProperty(name) && ignoreList.indexOf(name) < 0) {
            changeProps[name] = newProps[name];
            count++;
        }
    }
    return count > 0 && changeProps;
}

function setProps(node, props) {
    let ignoreList = ['children', 'key'];
    for (let name in props) {
        if (ignoreList.find(res => res === name)) {
            continue;
        } else if (name === 'style') {
            let styleObject = props[name];
            for (let sKey in styleObject) {
                node.style[sKey] = styleObject[sKey];
            }
            continue;
        }
        node.setAttribute(name, props[name]);
    }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0RPTS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvTW91bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdmlydHVybi1kb20uanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiQXBwIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZmlyc3QiLCJjb2xvciIsInNldFRpbWVvdXQiLCJzZXRTdGF0ZSIsInJlbmRlciIsIlNtYWxsSGVhZGVyIiwiYWFhIiwiTXJlYWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0Q29tcG9uZW50U3ltYm9sIiwiVXBkYXRlciIsImluc3RhbmNlIiwicGVuZGluZ1N0YXRlcyIsImFkZFN0YXRlIiwibmV4dFN0YXRlIiwicHVzaCIsImdldFN0YXRlIiwiX3BlbmRpbmdTdGF0ZSIsImxlbmd0aCIsInBhcnRpYWxTdGF0ZSIsInNoaWZ0IiwiT2JqZWN0IiwiYXNzaWduIiwidXBkYXRlQ29tcG9uZW50IiwiJHVwZGF0ZXIiLCIkY2FjaGUiLCJpc01vdW50ZWQiLCJmb3JjZVVwZGF0ZSIsImNvbnRleHQiLCJ2bm9kZSIsIm5vZGUiLCJuZXdWbm9kZSIsInJlbmRlckNvbXBvbmVudCIsImNvbXBhcmVUd29Wbm9kZXMiLCJtb3VudENvbXBvbmVudCIsIl9jdXJyZW50Vm5vZGUiLCJfVm5vZGUiLCJnZXRWbm9kZSIsIl9faW5zdGFuc2VSZWFjdENvbXBvbmVudCIsImlzUmVhY3RDb21wb25lbnQiLCJzaG91bGRVcGRhdGVDb21wb25lbnQiLCJwcmV2RWxlbWVudCIsIm5leHRFbGVtZW50IiwidHlwZSIsImVtcHR5Iiwic2xpY2UiLCJjYWxsIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZCIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGRyZW4iLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwicmVtb3ZlUHJvcGVydHkiLCJwcm9wZXJ0eSIsInJlbW92ZUF0dHJpYnV0ZU5vZGUiLCJzZXRQcm9wZXJ0eSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0QWZ0ZXIiLCJhZnRlckNoaWxkIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJmaXJzdENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImNvbmZpZyIsImNoaWxkcmVuTGVuZ3RoIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwibW91bnQiLCJlbGVtZW50IiwicmVuZGVyZWROb2RlIiwiaW5pdFZub2RlIiwiRE9NIiwidWlkIiwiZ2V0VWlkIiwicHJvc3BEaWZmVHlwZSIsImluaXRUZXh0IiwiaW5pdEVsZW1lbnQiLCJpbml0Q29tcG9uZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwic2V0UHJvcHMiLCJjaGlsZFZub2RlIiwib2xkQ29tcG9uZW50IiwiY29tcG9uZW50IiwiY2FjaGUiLCJkZXN0cm95Vm5vZGUiLCJvbGRWbm9kZSIsIm5ld05vZGUiLCJjb25zb2xlIiwibG9nIiwicGFyZW50Tm9kZSIsImtleSIsInJlcGxhY2VDaGlsZCIsInVwZGF0ZVZub2RlIiwidXBkYXRlVmNvbXBvbmVudCIsInVwZGF0ZUVsZW1lbnQiLCJkaWZmUHJvcHMiLCJnZXREaWZmUHJvcHMiLCJ1cGRhdGVDaGlsZHJlbiIsIm5ld1Byb3BzIiwiY2hhbmdlUHJvcHMiLCJjb3VudCIsImlnbm9yZUxpc3QiLCJuYW1lIiwiaW5kZXhPZiIsImhhc093blByb3BlcnR5IiwiZmluZCIsInJlcyIsInN0eWxl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LElBQWxCLEVBQXdCakMsS0FBeEIsRUFBK0I7QUFDbEMsUUFBSStHLGFBQWEsQ0FBQyxVQUFELEVBQWEsS0FBYixDQUFqQjtBQUNBLFNBQUssSUFBSUMsSUFBVCxJQUFpQmhILEtBQWpCLEVBQXdCO0FBQ3BCLFlBQUkrRyxXQUFXSSxJQUFYLENBQWdCQyxPQUFPQSxRQUFRSixJQUEvQixDQUFKLEVBQTBDO0FBQ3RDO0FBQ0gsU0FGRCxNQUVPLElBQUlBLFNBQVMsT0FBYixFQUFzQjtBQUN6QixnQkFBSUssY0FBY3JILE1BQU1nSCxJQUFOLENBQWxCO0FBQ0EsaUJBQUssSUFBSU0sSUFBVCxJQUFpQkQsV0FBakIsRUFBOEI7QUFDMUJwRixxQkFBS3NGLEtBQUwsQ0FBV0QsSUFBWCxJQUFtQkQsWUFBWUMsSUFBWixDQUFuQjtBQUNIO0FBQ0Q7QUFDSDtBQUNEckYsYUFBS2dDLFlBQUwsQ0FBa0IrQyxJQUFsQixFQUF3QmhILE1BQU1nSCxJQUFOLENBQXhCO0FBQ0g7QUFDSixDIiwiZmlsZSI6IjVlNTBlODdmNTJjODVmMGYyYmFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IE1yZWFjdCBmcm9tICcuL3V0aWxzJ1xyXG5jb25zdCB7IENvbXBvbmVudCB9ID0gTXJlYWN0XHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZmlyc3Q6IDEsXHJcbiAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgY29sb3I6IFwicmVkXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBmaXJzdDogMixcclxuICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgY29sb3I6IFwieWVsbG93XCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LCAxMDAwKVxyXG4gIH1cclxuICAvLyBjb21wb21lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICBmaXJzdDogMlxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfSwgMTAwMClcclxuICAvLyB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3RoaXMuc3RhdGUuY29sb3J9PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmZpcnN0fVxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGgxICA+SGVhZGluZyAxPC9oMT5cclxuICAgICAgICAgIDxTbWFsbEhlYWRlciAvPlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAneWVsbG93JyB9fSA+SGVhZGluZyAyPC9oMj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5maXJzdH08L2gxPlxyXG4gICAgICAgICAgICA8aDI+MjwvaDI+XHJcbiAgICAgICAgICAgIDxoMz4zPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8aDM+SGVhZGluZyAzPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBTbWFsbEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWFhOiAyMlxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBjb21wb21lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICBhYWE6IDMzM1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfSwgMzAwMClcclxuICAvLyB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGg1Pnt0aGlzLnN0YXRlLmFhYX08L2g1PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuTXJlYWN0LnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKSIsImltcG9ydCB7IHJlbmRlckNvbXBvbmVudCwgY29tcGFyZVR3b1Zub2RlcyB9IGZyb20gJy4vdmlydHVybi1kb20nXHJcblxyXG5jb25zdCBSZWFjdENvbXBvbmVudFN5bWJvbCA9IHt9XHJcblxyXG5jbGFzcyBVcGRhdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXHJcbiAgICAgICAgdGhpcy5wZW5kaW5nU3RhdGVzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBhZGRTdGF0ZShuZXh0U3RhdGUpIHtcclxuICAgICAgICB0aGlzLnBlbmRpbmdTdGF0ZXMucHVzaChuZXh0U3RhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpbnN0YW5jZSB9ID0gdGhpc1xyXG4gICAgICAgIGxldCBfcGVuZGluZ1N0YXRlID0ge31cclxuICAgICAgICB3aGlsZSAodGhpcy5wZW5kaW5nU3RhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHBhcnRpYWxTdGF0ZSA9IHRoaXMucGVuZGluZ1N0YXRlcy5zaGlmdCgpXHJcbiAgICAgICAgICAgIF9wZW5kaW5nU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpbnN0YW5jZS5zdGF0ZSwgcGFydGlhbFN0YXRlKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3BlbmRpbmdTdGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbXBvbmVudCgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMuJHVwZGF0ZXIgPSBuZXcgVXBkYXRlcih0aGlzKVxyXG4gICAgICAgIHRoaXMuJGNhY2hlID0ge1xyXG4gICAgICAgICAgICBpc01vdW50ZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wc1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1JlYWN0Q29tcG9uZW50ID0gUmVhY3RDb21wb25lbnRTeW1ib2xcclxuXHJcbiAgICBmb3JjZVVwZGF0ZSgpIHtcclxuICAgICAgICBsZXQgeyAkdXBkYXRlciwgJGNhY2hlLCBwcm9wcywgY29udGV4dCB9ID0gdGhpc1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAkdXBkYXRlci5nZXRTdGF0ZSgpXHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGxldCB7IHZub2RlLCBub2RlIH0gPSAkY2FjaGVcclxuICAgICAgICBsZXQgbmV3Vm5vZGUgPSByZW5kZXJDb21wb25lbnQodGhpcylcclxuICAgICAgICBjb21wYXJlVHdvVm5vZGVzKHZub2RlLCBuZXdWbm9kZSwgbm9kZSlcclxuICAgIH1cclxuXHJcbiAgICBtb3VudENvbXBvbmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFZub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfVm5vZGVcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgX1Zub2RlID0gdGhpcy5nZXRWbm9kZSgpXHJcbiAgICAgICAgX1Zub2RlLl9faW5zdGFuc2VSZWFjdENvbXBvbmVudCA9IHRoaXNcclxuICAgICAgICB0aGlzLl9jdXJyZW50Vm5vZGUgPSBfVm5vZGVcclxuICAgICAgICByZXR1cm4gX1Zub2RlXHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZShwYXJ0aWFsU3RhdGUpIHtcclxuICAgICAgICB0aGlzLiR1cGRhdGVyLmFkZFN0YXRlKHBhcnRpYWxTdGF0ZSlcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlQ29tcG9uZW50KHByZXZFbGVtZW50LCBuZXh0RWxlbWVudCkge1xyXG4gICAgcmV0dXJuIHByZXZFbGVtZW50LnR5cGUgPT09IG5leHRFbGVtZW50LnR5cGVcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQiLCJleHBvcnQgZnVuY3Rpb24gZW1wdHkobm9kZSkge1xyXG4gICAgW10uc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKG5vZGUsIGNoaWxkcmVuKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBub2RlLmFwcGVuZChjaGlsZHJlbilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZHJlbilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BlcnR5KG5vZGUsIHByb3BlcnR5KSB7XHJcbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZU5vZGUocHJvcGVydHkpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9wZXJ0eShub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgIG5vZGUuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKG5vZGUsIGNoaWxkLCBhZnRlckNoaWxkKSB7XHJcbiAgICBub2RlLmluc2VydEJlZm9yZShcclxuICAgICAgICBjaGlsZCxcclxuICAgICAgICBhZnRlckNoaWxkID8gYWZ0ZXJDaGlsZC5uZXh0U2libGluZyA6IG5vZGUuZmlyc3RDaGlsZFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGQpIHtcclxuICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcclxuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKVxyXG4gICAgY29uc3QgY2hpbGRyZW5MZW5ndGggPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykubGVuZ3RoIC0gMlxyXG4gICAgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHByb3BzLmNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpXHJcbiAgICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxICYmIGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgcHJvcHNcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTSdcclxuaW1wb3J0IHsgaW5pdFZub2RlIH0gZnJvbSAnLi92aXJ0dXJuLWRvbSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vdW50KGVsZW1lbnQsIG5vZGUpIHtcclxuICAgIC8vZWxlbWVudCA9PiBjb21wb25lbnRcclxuICAgIGNvbnN0IHJlbmRlcmVkTm9kZSA9IGluaXRWbm9kZShlbGVtZW50KVxyXG4gICAgRE9NLmVtcHR5KG5vZGUpXHJcbiAgICBET00uYXBwZW5kQ2hpbGRyZW4obm9kZSwgcmVuZGVyZWROb2RlKVxyXG59XHJcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vRWxlbWVudC5qcydcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudC5qcydcclxuaW1wb3J0IHJlbmRlciBmcm9tICcuL01vdW50LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQsIHJlbmRlciB9IiwibGV0IHVpZCA9IDBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVaWQoKSB7XHJcbiAgICByZXR1cm4gKyt1aWRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9zcERpZmZUeXBlID0ge1xyXG4gICAgXCJkZWxldGVcIjogMCxcclxuICAgIFwiYWRkXCI6IDFcclxufSIsImltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTSdcclxuaW1wb3J0IHsgZ2V0VWlkLCBwcm9zcERpZmZUeXBlIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Vm5vZGUodm5vZGUpIHtcclxuICAgIGxldCB7IHR5cGUgfSA9IHZub2RlLFxyXG4gICAgICAgIG5vZGUgPSBudWxsXHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgICBub2RlID0gaW5pdFRleHQodm5vZGUpXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIG5vZGUgPSBpbml0RWxlbWVudCh2bm9kZSlcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBub2RlID0gaW5pdENvbXBvbmVudCh2bm9kZSlcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0VGV4dCh0ZXh0KSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRFbGVtZW50KHZub2RlKSB7XHJcbiAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSB2bm9kZVxyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHNcclxuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxyXG4gICAgc2V0UHJvcHMobm9kZSwgcHJvcHMpXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkVm5vZGUgPT4ge1xyXG4gICAgICAgICAgICBET00uYXBwZW5kQ2hpbGRyZW4obm9kZSwgaW5pdFZub2RlKGNoaWxkVm5vZGUpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIERPTS5hcHBlbmRDaGlsZHJlbihub2RlLCBpbml0VGV4dChjaGlsZHJlbikpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbXBvbmVudChvbGRDb21wb25lbnQpIHtcclxuICAgIGNvbnN0IHsgdHlwZTogQ29tcG9uZW50LCBwcm9wcyB9ID0gb2xkQ29tcG9uZW50XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHByb3BzKVxyXG4gICAgY29uc3QgeyAkY2FjaGU6IGNhY2hlIH0gPSBjb21wb25lbnRcclxuICAgIGNvbnN0IHZub2RlID0gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudClcclxuICAgIGNvbnN0IG5vZGUgPSBpbml0Vm5vZGUodm5vZGUpXHJcbiAgICB2bm9kZS51aWQgPSBnZXRVaWQoKVxyXG4gICAgY2FjaGUudm5vZGUgPSB2bm9kZVxyXG4gICAgY2FjaGUubm9kZSA9IG5vZGVcclxuICAgIGNhY2hlLmlzTW91bnRlZCA9IHRydWVcclxuICAgIHJldHVybiBub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gY29tcG9uZW50LnJlbmRlcigpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95Vm5vZGUob2xkVm5vZGUsIG5vZGUpIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVHdvVm5vZGVzKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSkge1xyXG4gICAgbGV0IG5ld05vZGUgPSBub2RlXHJcbiAgICBjb25zb2xlLmxvZyhuZXdWbm9kZSlcclxuICAgIGlmICghbmV3Vm5vZGUpIHtcclxuICAgICAgICAvL+WmguaenOaWsOiKgueCueaYr+epuu+8jOmUgOavgW5vZGXlubbkuJTnp7vnp7vpmaRcclxuICAgICAgICBkZXN0cm95Vm5vZGUob2xkVm5vZGUsIG5vZGUpXHJcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpXHJcbiAgICB9IGVsc2UgaWYgKG9sZFZub2RlLnR5cGUgIT09IG5ld1Zub2RlLnR5cGUgfHwgb2xkVm5vZGUua2V5ICE9PSBuZXdWbm9kZS5rZXkpIHtcclxuICAgICAgICAvL3R5cGXmiJbogIVrZXnkuI3lkIzvvIzlrozlhajph43mnoRcclxuICAgICAgICBkZXN0cm95Vm5vZGUob2xkVm5vZGUsIG5vZGUpXHJcbiAgICAgICAgbmV3Tm9kZSA9IGluaXRWbm9kZShuZXdWbm9kZSlcclxuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIG5vZGUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8v6Z2e5LiK6L+w5oOF5Ya15YiZ5pu05pawXHJcbiAgICAgICAgbmV3Tm9kZSA9IHVwZGF0ZVZub2RlKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSlcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdOb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWbm9kZShvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpIHtcclxuICAgIGNvbnN0IHsgdHlwZSB9ID0gb2xkVm5vZGVcclxuICAgIGNvbnNvbGUubG9nKHR5cGUpXHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZVZjb21wb25lbnQob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlRWxlbWVudChvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWY29tcG9uZW50KG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSkge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKSB7XHJcbiAgICBsZXQgZGlmZlByb3BzID0gZ2V0RGlmZlByb3BzKG9sZFZub2RlLnByb3BzLCBuZXdWbm9kZS5wcm9wcylcclxuICAgIGRpZmZQcm9wcyAmJiBzZXRQcm9wcyhub2RlLCBkaWZmUHJvcHMpXHJcbiAgICB1cGRhdGVDaGlsZHJlbihvbGRWbm9kZSwgbmV3Vm5vZGUpXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlmZlByb3BzKHByb3BzLCBuZXdQcm9wcykge1xyXG4gICAgbGV0IGNoYW5nZVByb3BzID0ge30sXHJcbiAgICAgICAgY291bnQgPSAwLFxyXG4gICAgICAgIGlnbm9yZUxpc3QgPSBbJ2NoaWxkcmVuJywgJ2tleSddXHJcbiAgICBmb3IgKGxldCBuYW1lIGluIHByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5ld1Byb3BzW25hbWVdICE9PSBwcm9wc1tuYW1lXSAmJiBpZ25vcmVMaXN0LmluZGV4T2YobmFtZSkgPCAwKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZVByb3BzW25hbWVdID0gbmV3UHJvcHNbbmFtZV1cclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IG5hbWUgaW4gbmV3UHJvcHMpIHtcclxuICAgICAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlnbm9yZUxpc3QuaW5kZXhPZihuYW1lKSA8IDApIHtcclxuICAgICAgICAgICAgY2hhbmdlUHJvcHNbbmFtZV0gPSBuZXdQcm9wc1tuYW1lXVxyXG4gICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ID4gMCAmJiBjaGFuZ2VQcm9wc1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcHMobm9kZSwgcHJvcHMpIHtcclxuICAgIGxldCBpZ25vcmVMaXN0ID0gWydjaGlsZHJlbicsICdrZXknXVxyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBwcm9wcykge1xyXG4gICAgICAgIGlmIChpZ25vcmVMaXN0LmZpbmQocmVzID0+IHJlcyA9PT0gbmFtZSkpIHtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdzdHlsZScpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlT2JqZWN0ID0gcHJvcHNbbmFtZV1cclxuICAgICAgICAgICAgZm9yIChsZXQgc0tleSBpbiBzdHlsZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtzS2V5XSA9IHN0eWxlT2JqZWN0W3NLZXldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgcHJvcHNbbmFtZV0pXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9