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
      },
      ullist: [{
        key: "a",
        value: "a++"
      }, {
        key: "b",
        value: "b++"
      }, {
        key: "c",
        value: "c++"
      }, {
        key: "d",
        value: "d++"
      }]
    };
    let first = 1;
    setTimeout(() => {
      this.setState({
        first: ++first,
        ullist: [{
          key: "g",
          value: "g++"
        }, {
          key: "d",
          value: "d++bianhua"
        }, {
          key: "e",
          value: "e++"
        }, {
          key: "a",
          value: "a++"
        }, {
          key: "c",
          value: "a++本来是c"
        }, {
          key: "f",
          value: "f++"
        }]
      });
    }, 2000);
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
      null,
      this.state.first,
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
        "span",
        null,
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
          "ul",
          null,
          this.state.ullist.map(res => _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
            "li",
            { key: res.key },
            res.value
          ))
        ),
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
          "h1",
          { style: this.state.color },
          "Heading 1"
        ),
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(SmallHeader, null),
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Allow, { ppp: this.state.first }),
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
          "h2",
          null,
          "Heading 2 ",
          this.state.first
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

function Allow({ ppp }) {
  return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
    "div",
    null,
    ppp,
    " + !!!!"
  );
}

class SmallHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aaa: 1
    };
    let aaa = 1;
    setTimeout(() => {
      this.setState({
        aaa: ++aaa
      });
    }, 300);
  }
  compomentDidMount() {}
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
    emitUpdate() {
        this.updateComponent();
    }
    getState() {
        const { instance } = this;
        let _pendingState = instance.state;
        while (this.pendingStates.length > 0) {
            let partialState = this.pendingStates.shift();
            _pendingState = Object.assign({}, instance.state, partialState);
        }
        return _pendingState;
    }

    updateComponent() {
        let { instance } = this;
        instance.forceUpdate();
    }
}

class Component {
    constructor(props) {
        this.$updater = new Updater(this);
        this.$cache = {
            isMounted: false
        };
        this.props = props;
    }

    isReactComponent() {
        return ReactComponentSymbol;
    }

    forceUpdate() {
        let { $updater, $cache, props, context } = this;
        this.state = $updater.getState();
        let state = this.state;
        let { vnode, node } = $cache;
        let newVnode = Object(_virturn_dom__WEBPACK_IMPORTED_MODULE_0__["renderComponent"])(this);
        return Object(_virturn_dom__WEBPACK_IMPORTED_MODULE_0__["compareTwoVnodes"])(vnode, newVnode, node);
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
/* harmony import */ var _virturn_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virturn-dom */ "./src/utils/virturn-dom.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component */ "./src/utils/Component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");




function createElement(type, config, children) {
    let vtype = null;
    if (!type) {
        vtype = _utils__WEBPACK_IMPORTED_MODULE_2__["VTEXT"];
    } else if (typeof type === 'string') {
        vtype = _utils__WEBPACK_IMPORTED_MODULE_2__["VELEMENT"];
    } else if (typeof type === 'function') {
        if (type.prototype.isReactComponent) {
            vtype = _utils__WEBPACK_IMPORTED_MODULE_2__["VCOMPONENT"];
        } else {
            vtype = _utils__WEBPACK_IMPORTED_MODULE_2__["VSTATELESS"];
        }
    } else {
        throw new Error(`React.createElement: unexpect type [ ${type} ]`);
    }

    let key = null,
        ref = null;
    let finalProps = {};
    if (config != null) {
        for (let propKey in config) {
            if (!config.hasOwnProperty(propKey)) {
                continue;
            }
            if (propKey === 'key') {
                key = '' + config[propKey];
            } else if (propKey === 'ref') {
                ref = config[propKey];
            } else {
                finalProps[propKey] = config[propKey];
            }
        }
    }
    let defaultProps = type.defaultProps;
    if (defaultProps) {
        for (let propKey in defaultProps) {
            if (finalProps[propKey] === undefined) {
                finalProps[propKey] = defaultProps[propKey];
            }
        }
    }

    let finalChildren = children;
    let arguLength = arguments.length;
    if (arguLength > 3) {
        finalChildren = [];
        for (let i = 2; i < arguLength; i++) {
            finalChildren.push(arguments[i]);
        }
    }
    if (finalChildren) {
        finalProps.children = finalChildren;
    }
    return Object(_virturn_dom__WEBPACK_IMPORTED_MODULE_0__["createVcomponent"])({
        type,
        vtype,
        props: finalProps,
        key,
        ref
    });
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

/***/ "./src/utils/list-diff.js":
/*!********************************!*\
  !*** ./src/utils/list-diff.js ***!
  \********************************/
/*! exports provided: diffList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffList", function() { return diffList; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");


function diffList(oldVnode, newVnode) {
    let oldList = oldVnode.props.children,
        newList = newVnode.props.children;

    oldList = Array.isArray(oldList) && oldList ? oldList : [oldList];
    newList = Array.isArray(newList) && newList ? newList : [newList];
    const oldMap = makeKeyIndexAndFree(oldList),
          newMap = makeKeyIndexAndFree(newList);

    const newKeyList = newMap.keyIndex,
          oldKeyList = oldMap.keyIndex;

    const newFreeList = newMap.free;
    let diffList = [],
        children = [];

    oldList.forEach(item => {
        const itemKey = getItemKey(item);
        if (itemKey) {
            const newIndex = newKeyList.indexOf(itemKey);
            children.push(newIndex >= 0 ? newList[newIndex] : 'listNull');
        } else {
            children.push(newFreeList.shift() || null);
        }
    });

    let i = 0,
        j = 0,
        k = 0;
    //不变
    const oldSortList = oldKeyList.map(res => newKeyList.indexOf(res) >= 0 ? newKeyList.indexOf(res) : null);

    while (i < oldSortList.length) {
        if (oldSortList[i] === null) {
            diffList.push({
                index: i - j,
                type: _utils__WEBPACK_IMPORTED_MODULE_0__["MOVES_DELETE"] //删除
            });
            //j 用于模仿删除的操作
            // 因为真实的节点删除后，i需要向前移动一位
            j++;
        }
        i++;
    }
    //删除后的oldSortList
    let filterList = oldSortList.filter(res => res !== null);
    while (k < newKeyList.length) {
        let oldIndex = filterList.indexOf(k);
        if (oldIndex >= 0) {
            if (k !== oldIndex) {
                let insert = filterList.splice(oldIndex, 1)[0];
                filterList.splice(k, 0, insert);
                diffList.push({
                    newIndex: k,
                    oldIndex: oldIndex,
                    type: _utils__WEBPACK_IMPORTED_MODULE_0__["MOVES_REORDER"] //换位置
                });
            }
        } else {
            filterList.splice(k, 0, k);
            diffList.push({
                index: k,
                item: newList[k],
                type: _utils__WEBPACK_IMPORTED_MODULE_0__["MOVES_ADD"] //新增
            });
        }
        k++;
    }

    while (newFreeList.length > 0) {
        diffList.push({
            index: children.length,
            item: newFreeList.shift(),
            type: _utils__WEBPACK_IMPORTED_MODULE_0__["MOVES_ADD"] //新增
        });
    }

    return {
        diff: diffList,
        newChildren: children,
        children: oldList
    };
}

function makeKeyIndexAndFree(list) {
    let keyIndex = [],
        free = [];
    if (!Array.isArray(list)) {
        return {
            keyIndex,
            free
        };
    }

    list.forEach(item => {
        let itemKey = getItemKey(item);
        if (itemKey) {
            keyIndex.push(itemKey);
        } else {
            free.push(item);
        }
    });
    return {
        keyIndex,
        free
    };
}
function getItemKey(item) {
    return item.key;
}

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: getUid, VTEXT, VELEMENT, VSTATELESS, VCOMPONENT, MOVES_ADD, MOVES_DELETE, MOVES_REORDER, isString, type, getChildrenFromVcomponent, flatEach, collectChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUid", function() { return getUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTEXT", function() { return VTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VELEMENT", function() { return VELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VSTATELESS", function() { return VSTATELESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCOMPONENT", function() { return VCOMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVES_ADD", function() { return MOVES_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVES_DELETE", function() { return MOVES_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVES_REORDER", function() { return MOVES_REORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildrenFromVcomponent", function() { return getChildrenFromVcomponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatEach", function() { return flatEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectChild", function() { return collectChild; });
let uid = 0;

function getUid() {
    return ++uid;
}

const VTEXT = 1;
const VELEMENT = 2;
const VSTATELESS = 3;
const VCOMPONENT = 4;

const MOVES_ADD = 'add';
const MOVES_DELETE = 'delete';
const MOVES_REORDER = 'reorder';

function isString(item) {
    return type(item) === 'String';
}

function type(obj) {
    return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
}

function getChildrenFromVcomponent(vcomponent) {
    let { children } = vcomponent.props;
    let vchildren = [];
    if (Array.isArray(children)) {
        flatEach(children, collectChild, vchildren);
    } else {
        collectChild(children, vchildren);
    }
    return vchildren;
}

function flatEach(list, iteratee, a) {
    let len = list.length;
    let i = -1;

    while (len--) {
        let item = list[++i];
        if (Array.isArray(item)) {
            flatEach(item, iteratee, a);
        } else {
            iteratee(item, a);
        }
    }
}

function collectChild(child, children) {
    if (child != null && typeof child !== 'boolean') {
        if (!child.vtype) {
            // convert immutablejs data
            if (child.toJS) {
                child = child.toJS();
                if (Array.isArray(child)) {
                    flatEach(child, collectChild, children);
                } else {
                    collectChild(child, children);
                }
                return;
            }
            child = '' + child;
        }
        children[children.length] = child;
    }
}

/***/ }),

/***/ "./src/utils/virturn-dom.js":
/*!**********************************!*\
  !*** ./src/utils/virturn-dom.js ***!
  \**********************************/
/*! exports provided: createVcomponent, initVnode, initText, initElement, initComponent, initStateless, getStateless, renderComponent, destroyVnode, compareTwoVnodes, updateVnode, updateVcomponent, updateStateless, updateElement, updateChildren, getDiffProps, setProps, patchChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVcomponent", function() { return createVcomponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initVnode", function() { return initVnode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initText", function() { return initText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initElement", function() { return initElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initComponent", function() { return initComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStateless", function() { return initStateless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateless", function() { return getStateless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyVnode", function() { return destroyVnode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTwoVnodes", function() { return compareTwoVnodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateVnode", function() { return updateVnode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateVcomponent", function() { return updateVcomponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStateless", function() { return updateStateless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateElement", function() { return updateElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateChildren", function() { return updateChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiffProps", function() { return getDiffProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProps", function() { return setProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchChildren", function() { return patchChildren; });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/utils/DOM.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");
/* harmony import */ var _list_diff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-diff */ "./src/utils/list-diff.js");





function createVcomponent({ vtype, type, props, key, ref }) {
    let vcomponent = {
        type,
        props,
        vtype,
        key,
        ref
    };
    if (vtype === _utils__WEBPACK_IMPORTED_MODULE_1__["VCOMPONENT"]) {
        vcomponent.uid = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getUid"])();
    }
    return vcomponent;
}

function initVnode(vcomponent) {
    let { vtype } = vcomponent,
        node = null;
    if (!vtype) {
        // init text
        node = initText(vcomponent);
    } else if (vtype === _utils__WEBPACK_IMPORTED_MODULE_1__["VELEMENT"]) {
        node = initElement(vcomponent);
    } else if (vtype === _utils__WEBPACK_IMPORTED_MODULE_1__["VCOMPONENT"]) {
        node = initComponent(vcomponent);
    } else if (vtype === _utils__WEBPACK_IMPORTED_MODULE_1__["VSTATELESS"]) {
        node = initStateless(vcomponent);
    }
    return node;
}

function initText(text) {
    return document.createTextNode(text);
}

function initElement(vcomponent) {
    const { type, props } = vcomponent;
    let vchildren = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getChildrenFromVcomponent"])(vcomponent);
    let node = document.createElement(type);
    setProps(node, props);
    vchildren.forEach(childVnode => {
        _DOM__WEBPACK_IMPORTED_MODULE_0__["appendChildren"](node, initVnode(childVnode));
    });

    return node;
}

function initComponent(vcomponent) {
    const { type: Component, props, uid } = vcomponent;
    const component = new Component(props);
    const { $cache: cache } = component;
    const vnode = renderComponent(component);
    const node = initVnode(vnode);
    node.cache = node.cache || {};
    node.cache[uid] = component;
    cache.vnode = vnode;
    cache.node = node;
    cache.isMounted = true;
    return node;
}

function initStateless(vcomponent) {
    const { uid } = vcomponent;
    const vnode = getStateless(vcomponent);
    const node = initVnode(vnode);
    node.cache = node.cache || {};
    node.cache[uid] = vnode;
    return node;
}

function getStateless(vcomponent) {
    const { type: factory, props, uid } = vcomponent;
    let vnode = factory(props);
    if (vnode && vnode.render) {
        vnode = vnode.render();
    }
    return vnode;
}

function renderComponent(component) {
    return component.render();
}

function destroyVnode(vcomponent, node) {
    const { vtype } = vcomponent;
    if (vtype === _utils__WEBPACK_IMPORTED_MODULE_1__["VELEMENT"]) {} else if (vtype === _utils__WEBPACK_IMPORTED_MODULE_1__["VCOMPONENT"]) {}
}

function compareTwoVnodes(oldVnode, newVnode, node) {
    let newNode = node;
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
    const { vtype, type } = oldVnode;
    if (!type) {
        if (oldVnode !== newVnode) {
            node.data = newVnode;
        }
        return node;
    }

    if (vtype === _utils__WEBPACK_IMPORTED_MODULE_1__["VCOMPONENT"]) {
        return updateVcomponent(oldVnode, newVnode, node);
    }
    if (vtype === _utils__WEBPACK_IMPORTED_MODULE_1__["VSTATELESS"]) {
        return updateStateless(oldVnode, newVnode, node);
    }

    if (vtype === _utils__WEBPACK_IMPORTED_MODULE_1__["VELEMENT"]) {
        return updateElement(oldVnode, newVnode, node);
    }
}

function updateVcomponent(vcomponent, newVcomponent, node) {
    let uid = vcomponent.uid;
    let component = node.cache[uid];
    let { $updater: updater, $cache: cache } = component;
    node.cache[newVcomponent.uid] = component;
    component.forceUpdate();
    return cache.node;
}

function updateStateless(vcomponent, newVcomponent, node) {
    let uid = vcomponent.uid;
    let vnode = node.cache[uid];
    delete node.cache[uid];
    let newVnode = getStateless(newVcomponent);
    let newNode = compareTwoVnodes(vnode, newVnode, node);
    newNode.cache = newNode.cache || {};
    newNode.cache[uid] = newVnode;
    return newVnode;
}

function updateElement(oldVnode, newVnode, node) {
    let diffProps = getDiffProps(oldVnode.props, newVnode.props);
    diffProps && setProps(node, diffProps);
    updateChildren(oldVnode, newVnode, node);
    return node;
}

function updateChildren(oldVnode, newVnode, node) {
    let { diff, newChildren, children } = Object(_list_diff__WEBPACK_IMPORTED_MODULE_2__["diffList"])(oldVnode, newVnode);
    let childNodes = node.childNodes;
    let j = 0;
    for (let i = 0; i < children.length; i++) {
        if (newChildren !== 'listNull') {
            //listNull说明需要删掉，会在patch里删除
            compareTwoVnodes(children[i], newChildren[i], childNodes[i - j]);
            if (newChildren[i] === null) {
                //如果newChildren[i] 是null，说明不带key并且已经被删除了，nodes需要向前瞬移一位
                j++;
            }
        }
    }
    patchChildren(node, diff);
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

function patchChildren(node, diff) {
    let childNodes = node.childNodes;
    if (diff.length > 0) {
        diff.forEach(function (singleDiff) {
            switch (singleDiff.type) {
                //delete
                case _utils__WEBPACK_IMPORTED_MODULE_1__["MOVES_DELETE"]:
                    node.removeChild(childNodes[singleDiff.index]);
                    break;
                //add
                case _utils__WEBPACK_IMPORTED_MODULE_1__["MOVES_ADD"]:
                    var newNode = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(singleDiff.item) ? singleDiff.item : initVnode(singleDiff.item);
                    if (childNodes.length > singleDiff.index) {
                        node.insertBefore(newNode, childNodes[singleDiff.index]);
                    } else {
                        node.appendChild(newNode);
                    }
                    break;
                //move
                case _utils__WEBPACK_IMPORTED_MODULE_1__["MOVES_REORDER"]:
                    node.insertBefore(childNodes[singleDiff.oldIndex], childNodes[singleDiff.newIndex]);
                    break;
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0RPTS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvTW91bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9saXN0LWRpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92aXJ0dXJuLWRvbS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJBcHAiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJmaXJzdCIsImNvbG9yIiwidWxsaXN0Iiwia2V5IiwidmFsdWUiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJtYXAiLCJyZXMiLCJBbGxvdyIsInBwcCIsIlNtYWxsSGVhZGVyIiwiYWFhIiwiY29tcG9tZW50RGlkTW91bnQiLCJNcmVhY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RDb21wb25lbnRTeW1ib2wiLCJVcGRhdGVyIiwiaW5zdGFuY2UiLCJwZW5kaW5nU3RhdGVzIiwiYWRkU3RhdGUiLCJuZXh0U3RhdGUiLCJwdXNoIiwiZW1pdFVwZGF0ZSIsInVwZGF0ZUNvbXBvbmVudCIsImdldFN0YXRlIiwiX3BlbmRpbmdTdGF0ZSIsImxlbmd0aCIsInBhcnRpYWxTdGF0ZSIsInNoaWZ0IiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yY2VVcGRhdGUiLCIkdXBkYXRlciIsIiRjYWNoZSIsImlzTW91bnRlZCIsImlzUmVhY3RDb21wb25lbnQiLCJjb250ZXh0Iiwidm5vZGUiLCJub2RlIiwibmV3Vm5vZGUiLCJyZW5kZXJDb21wb25lbnQiLCJjb21wYXJlVHdvVm5vZGVzIiwibW91bnRDb21wb25lbnQiLCJfY3VycmVudFZub2RlIiwiX1Zub2RlIiwiZ2V0Vm5vZGUiLCJfX2luc3RhbnNlUmVhY3RDb21wb25lbnQiLCJzaG91bGRVcGRhdGVDb21wb25lbnQiLCJwcmV2RWxlbWVudCIsIm5leHRFbGVtZW50IiwidHlwZSIsImVtcHR5Iiwic2xpY2UiLCJjYWxsIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZCIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGRyZW4iLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwicmVtb3ZlUHJvcGVydHkiLCJwcm9wZXJ0eSIsInJlbW92ZUF0dHJpYnV0ZU5vZGUiLCJzZXRQcm9wZXJ0eSIsInNldEF0dHJpYnV0ZSIsImluc2VydEFmdGVyIiwiYWZ0ZXJDaGlsZCIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJjb25maWciLCJ2dHlwZSIsInByb3RvdHlwZSIsIkVycm9yIiwicmVmIiwiZmluYWxQcm9wcyIsInByb3BLZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsImZpbmFsQ2hpbGRyZW4iLCJhcmd1TGVuZ3RoIiwiYXJndW1lbnRzIiwiaSIsImNyZWF0ZVZjb21wb25lbnQiLCJtb3VudCIsImVsZW1lbnQiLCJyZW5kZXJlZE5vZGUiLCJpbml0Vm5vZGUiLCJET00iLCJkaWZmTGlzdCIsIm9sZFZub2RlIiwib2xkTGlzdCIsIm5ld0xpc3QiLCJvbGRNYXAiLCJtYWtlS2V5SW5kZXhBbmRGcmVlIiwibmV3TWFwIiwibmV3S2V5TGlzdCIsImtleUluZGV4Iiwib2xkS2V5TGlzdCIsIm5ld0ZyZWVMaXN0IiwiZnJlZSIsIml0ZW0iLCJpdGVtS2V5IiwiZ2V0SXRlbUtleSIsIm5ld0luZGV4IiwiaW5kZXhPZiIsImoiLCJrIiwib2xkU29ydExpc3QiLCJpbmRleCIsImZpbHRlckxpc3QiLCJmaWx0ZXIiLCJvbGRJbmRleCIsImluc2VydCIsInNwbGljZSIsImRpZmYiLCJuZXdDaGlsZHJlbiIsImxpc3QiLCJ1aWQiLCJnZXRVaWQiLCJWVEVYVCIsIlZFTEVNRU5UIiwiVlNUQVRFTEVTUyIsIlZDT01QT05FTlQiLCJNT1ZFU19BREQiLCJNT1ZFU19ERUxFVEUiLCJNT1ZFU19SRU9SREVSIiwiaXNTdHJpbmciLCJvYmoiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJnZXRDaGlsZHJlbkZyb21WY29tcG9uZW50IiwidmNvbXBvbmVudCIsInZjaGlsZHJlbiIsImZsYXRFYWNoIiwiY29sbGVjdENoaWxkIiwiaXRlcmF0ZWUiLCJhIiwibGVuIiwidG9KUyIsImluaXRUZXh0IiwiaW5pdEVsZW1lbnQiLCJpbml0Q29tcG9uZW50IiwiaW5pdFN0YXRlbGVzcyIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInNldFByb3BzIiwiY2hpbGRWbm9kZSIsImNvbXBvbmVudCIsImNhY2hlIiwiZ2V0U3RhdGVsZXNzIiwiZmFjdG9yeSIsImRlc3Ryb3lWbm9kZSIsIm5ld05vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwidXBkYXRlVm5vZGUiLCJkYXRhIiwidXBkYXRlVmNvbXBvbmVudCIsInVwZGF0ZVN0YXRlbGVzcyIsInVwZGF0ZUVsZW1lbnQiLCJuZXdWY29tcG9uZW50IiwidXBkYXRlciIsImRpZmZQcm9wcyIsImdldERpZmZQcm9wcyIsInVwZGF0ZUNoaWxkcmVuIiwicGF0Y2hDaGlsZHJlbiIsIm5ld1Byb3BzIiwiY2hhbmdlUHJvcHMiLCJjb3VudCIsImlnbm9yZUxpc3QiLCJuYW1lIiwiZmluZCIsInN0eWxlT2JqZWN0Iiwic0tleSIsInN0eWxlIiwic2luZ2xlRGlmZiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFLd0IsV0FBTCxDQUFpQmlHLE9BQWpCO0FBQ0g7QUFDRDtBQUNKO0FBQ0EscUJBQUssb0RBQUw7QUFDSXpILHlCQUFLaUMsWUFBTCxDQUFrQmpCLFdBQVdnSSxXQUFXaEUsUUFBdEIsQ0FBbEIsRUFBbURoRSxXQUFXZ0ksV0FBV3hFLFFBQXRCLENBQW5EO0FBQ0E7QUFqQlI7QUFtQkgsU0FwQkQ7QUFxQkg7QUFDSixDIiwiZmlsZSI6IjVhNzAwMjVhOWI0YzRmNjZiNzg0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IE1yZWFjdCBmcm9tICcuL3V0aWxzJ1xuY29uc3QgeyBDb21wb25lbnQgfSA9IE1yZWFjdFxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlyc3Q6IDEsXG4gICAgICBjb2xvcjoge1xuICAgICAgICBjb2xvcjogXCJyZWRcIlxuICAgICAgfSxcbiAgICAgIHVsbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImFcIixcbiAgICAgICAgICB2YWx1ZTogXCJhKytcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImJcIixcbiAgICAgICAgICB2YWx1ZTogXCJiKytcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImNcIixcbiAgICAgICAgICB2YWx1ZTogXCJjKytcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImRcIixcbiAgICAgICAgICB2YWx1ZTogXCJkKytcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICAgIGxldCBmaXJzdCA9IDFcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaXJzdDogKytmaXJzdCxcbiAgICAgICAgdWxsaXN0OiBbe1xuICAgICAgICAgIGtleTogXCJnXCIsXG4gICAgICAgICAgdmFsdWU6IFwiZysrXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJkXCIsXG4gICAgICAgICAgdmFsdWU6IFwiZCsrYmlhbmh1YVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiZVwiLFxuICAgICAgICAgIHZhbHVlOiBcImUrK1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiYVwiLFxuICAgICAgICAgIHZhbHVlOiBcImErK1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiY1wiLFxuICAgICAgICAgIHZhbHVlOiBcImErK+acrOadpeaYr2NcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImZcIixcbiAgICAgICAgICB2YWx1ZTogXCJmKytcIlxuICAgICAgICB9XVxuICAgICAgfSlcbiAgICB9LCAyMDAwKVxuICB9XG4gIC8vIGNvbXBvbWVudERpZE1vdW50KCkge1xuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICAgIGZpcnN0OiAyXG4gIC8vICAgICB9KVxuICAvLyAgIH0sIDEwMDApXG4gIC8vIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmZpcnN0fVxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS51bGxpc3QubWFwKHJlcyA9PlxuICAgICAgICAgICAgICA8bGkga2V5PXtyZXMua2V5fT57cmVzLnZhbHVlfTwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGgxIHN0eWxlPXt0aGlzLnN0YXRlLmNvbG9yfSA+SGVhZGluZyAxPC9oMT5cbiAgICAgICAgICA8U21hbGxIZWFkZXIgLz5cbiAgICAgICAgICA8QWxsb3cgcHBwPXt0aGlzLnN0YXRlLmZpcnN0fSAvPlxuICAgICAgICAgIDxoMiA+SGVhZGluZyAyIHt0aGlzLnN0YXRlLmZpcnN0fTwvaDI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5maXJzdH08L2gxPlxuICAgICAgICAgICAgPGgyPjI8L2gyPlxuICAgICAgICAgICAgPGgzPjM8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoMz5IZWFkaW5nIDM8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIEFsbG93KHsgcHBwIH0pIHtcbiAgcmV0dXJuIDxkaXY+e3BwcH0gKyAhISEhPC9kaXY+XG59XG5cbmNsYXNzIFNtYWxsSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWFhOiAxXG4gICAgfVxuICAgIGxldCBhYWEgPSAxXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWFhOiArK2FhYVxuICAgICAgfSlcbiAgICB9LCAzMDApXG4gIH1cbiAgY29tcG9tZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoNT57dGhpcy5zdGF0ZS5hYWF9PC9oNT5cbiAgICApXG4gIH1cbn1cblxuTXJlYWN0LnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKSIsImltcG9ydCB7IHJlbmRlckNvbXBvbmVudCwgY29tcGFyZVR3b1Zub2RlcyB9IGZyb20gJy4vdmlydHVybi1kb20nXG5cbmNvbnN0IFJlYWN0Q29tcG9uZW50U3ltYm9sID0ge31cblxuY2xhc3MgVXBkYXRlciB7XG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgICAgIHRoaXMucGVuZGluZ1N0YXRlcyA9IFtdXG4gICAgfVxuXG4gICAgYWRkU3RhdGUobmV4dFN0YXRlKSB7XG4gICAgICAgIHRoaXMucGVuZGluZ1N0YXRlcy5wdXNoKG5leHRTdGF0ZSlcbiAgICB9XG4gICAgZW1pdFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQoKVxuICAgIH1cbiAgICBnZXRTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyBpbnN0YW5jZSB9ID0gdGhpc1xuICAgICAgICBsZXQgX3BlbmRpbmdTdGF0ZSA9IGluc3RhbmNlLnN0YXRlXG4gICAgICAgIHdoaWxlICh0aGlzLnBlbmRpbmdTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHBhcnRpYWxTdGF0ZSA9IHRoaXMucGVuZGluZ1N0YXRlcy5zaGlmdCgpXG4gICAgICAgICAgICBfcGVuZGluZ1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2Uuc3RhdGUsIHBhcnRpYWxTdGF0ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3BlbmRpbmdTdGF0ZVxuICAgIH1cblxuICAgIHVwZGF0ZUNvbXBvbmVudCgpIHtcbiAgICAgICAgbGV0IHsgaW5zdGFuY2UgfSA9IHRoaXNcbiAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKVxuICAgIH1cbn1cblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLiR1cGRhdGVyID0gbmV3IFVwZGF0ZXIodGhpcylcbiAgICAgICAgdGhpcy4kY2FjaGUgPSB7XG4gICAgICAgICAgICBpc01vdW50ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzXG4gICAgfVxuXG4gICAgaXNSZWFjdENvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0Q29tcG9uZW50U3ltYm9sXG4gICAgfVxuXG4gICAgZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGxldCB7ICR1cGRhdGVyLCAkY2FjaGUsIHByb3BzLCBjb250ZXh0IH0gPSB0aGlzXG4gICAgICAgIHRoaXMuc3RhdGUgPSAkdXBkYXRlci5nZXRTdGF0ZSgpXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVcbiAgICAgICAgbGV0IHsgdm5vZGUsIG5vZGUgfSA9ICRjYWNoZVxuICAgICAgICBsZXQgbmV3Vm5vZGUgPSByZW5kZXJDb21wb25lbnQodGhpcylcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVUd29Wbm9kZXModm5vZGUsIG5ld1Zub2RlLCBub2RlKVxuICAgIH1cblxuICAgIG1vdW50Q29tcG9uZW50KCkge1xuICAgICAgICBpZiAodGhpcy5fY3VycmVudFZub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX1Zub2RlXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgX1Zub2RlID0gdGhpcy5nZXRWbm9kZSgpXG4gICAgICAgIF9Wbm9kZS5fX2luc3RhbnNlUmVhY3RDb21wb25lbnQgPSB0aGlzXG4gICAgICAgIHRoaXMuX2N1cnJlbnRWbm9kZSA9IF9Wbm9kZVxuICAgICAgICByZXR1cm4gX1Zub2RlXG4gICAgfVxuICAgIHNldFN0YXRlKHBhcnRpYWxTdGF0ZSkge1xuICAgICAgICB0aGlzLiR1cGRhdGVyLmFkZFN0YXRlKHBhcnRpYWxTdGF0ZSlcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRVcGRhdGVDb21wb25lbnQocHJldkVsZW1lbnQsIG5leHRFbGVtZW50KSB7XG4gICAgcmV0dXJuIHByZXZFbGVtZW50LnR5cGUgPT09IG5leHRFbGVtZW50LnR5cGVcbn1cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudCIsImV4cG9ydCBmdW5jdGlvbiBlbXB0eShub2RlKSB7XG4gICAgW10uc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4obm9kZSwgY2hpbGRyZW4pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKVxuICAgICAgICB9KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGRyZW4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIG5vZGUuYXBwZW5kKGNoaWxkcmVuKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvcGVydHkobm9kZSwgcHJvcGVydHkpIHtcbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZU5vZGUocHJvcGVydHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9wZXJ0eShub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdmFsdWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRBZnRlcihub2RlLCBjaGlsZCwgYWZ0ZXJDaGlsZCkge1xuICAgIG5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgYWZ0ZXJDaGlsZCA/IGFmdGVyQ2hpbGQubmV4dFNpYmxpbmcgOiBub2RlLmZpcnN0Q2hpbGRcbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGlsZChub2RlLCBjaGlsZCkge1xuICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpXG59IiwiaW1wb3J0IHsgY3JlYXRlVmNvbXBvbmVudCB9IGZyb20gJy4vdmlydHVybi1kb20nXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50J1xuaW1wb3J0IHtcbiAgICBWVEVYVCxcbiAgICBWRUxFTUVOVCxcbiAgICBWU1RBVEVMRVNTLFxuICAgIFZDT01QT05FTlRcbn0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICAgbGV0IHZ0eXBlID0gbnVsbFxuICAgIGlmICghdHlwZSkge1xuICAgICAgICB2dHlwZSA9IFZURVhUXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdnR5cGUgPSBWRUxFTUVOVFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHZ0eXBlID0gVkNPTVBPTkVOVFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdnR5cGUgPSBWU1RBVEVMRVNTXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlYWN0LmNyZWF0ZUVsZW1lbnQ6IHVuZXhwZWN0IHR5cGUgWyAke3R5cGV9IF1gKVxuICAgIH1cblxuICAgIGxldCBrZXkgPSBudWxsLFxuICAgICAgICByZWYgPSBudWxsXG4gICAgbGV0IGZpbmFsUHJvcHMgPSB7fVxuICAgIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBwcm9wS2V5IGluIGNvbmZpZykge1xuICAgICAgICAgICAgaWYgKCFjb25maWcuaGFzT3duUHJvcGVydHkocHJvcEtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BLZXkgPT09ICdrZXknKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gJycgKyBjb25maWdbcHJvcEtleV1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcEtleSA9PT0gJ3JlZicpIHtcbiAgICAgICAgICAgICAgICByZWYgPSBjb25maWdbcHJvcEtleV1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmluYWxQcm9wc1twcm9wS2V5XSA9IGNvbmZpZ1twcm9wS2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wc1xuICAgIGlmIChkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvcEtleSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChmaW5hbFByb3BzW3Byb3BLZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmaW5hbFByb3BzW3Byb3BLZXldID0gZGVmYXVsdFByb3BzW3Byb3BLZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZmluYWxDaGlsZHJlbiA9IGNoaWxkcmVuXG4gICAgbGV0IGFyZ3VMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgaWYgKGFyZ3VMZW5ndGggPiAzKSB7XG4gICAgICAgIGZpbmFsQ2hpbGRyZW4gPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IGFyZ3VMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZmluYWxDaGlsZHJlbi5wdXNoKGFyZ3VtZW50c1tpXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmluYWxDaGlsZHJlbikge1xuICAgICAgICBmaW5hbFByb3BzLmNoaWxkcmVuID0gZmluYWxDaGlsZHJlblxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlVmNvbXBvbmVudCh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZ0eXBlLFxuICAgICAgICBwcm9wczogZmluYWxQcm9wcyxcbiAgICAgICAga2V5LFxuICAgICAgICByZWZcbiAgICB9KVxufSIsImltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTSdcbmltcG9ydCB7IGluaXRWbm9kZSB9IGZyb20gJy4vdmlydHVybi1kb20nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vdW50KGVsZW1lbnQsIG5vZGUpIHtcbiAgICAvL2VsZW1lbnQgPT4gY29tcG9uZW50XG4gICAgY29uc3QgcmVuZGVyZWROb2RlID0gaW5pdFZub2RlKGVsZW1lbnQpXG4gICAgRE9NLmVtcHR5KG5vZGUpXG4gICAgRE9NLmFwcGVuZENoaWxkcmVuKG5vZGUsIHJlbmRlcmVkTm9kZSlcbn1cbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vRWxlbWVudC5qcydcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQuanMnXG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vTW91bnQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50LCByZW5kZXIgfSIsImltcG9ydCB7XG4gICAgTU9WRVNfQURELFxuICAgIE1PVkVTX0RFTEVURSxcbiAgICBNT1ZFU19SRU9SREVSLFxufSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkxpc3Qob2xkVm5vZGUsIG5ld1Zub2RlKSB7XG4gICAgbGV0IG9sZExpc3QgPSBvbGRWbm9kZS5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgbmV3TGlzdCA9IG5ld1Zub2RlLnByb3BzLmNoaWxkcmVuXG5cbiAgICBvbGRMaXN0ID0gQXJyYXkuaXNBcnJheShvbGRMaXN0KSAmJiBvbGRMaXN0ID8gb2xkTGlzdCA6IFtvbGRMaXN0XVxuICAgIG5ld0xpc3QgPSBBcnJheS5pc0FycmF5KG5ld0xpc3QpICYmIG5ld0xpc3QgPyBuZXdMaXN0IDogW25ld0xpc3RdXG4gICAgY29uc3Qgb2xkTWFwID0gbWFrZUtleUluZGV4QW5kRnJlZShvbGRMaXN0KSxcbiAgICAgICAgbmV3TWFwID0gbWFrZUtleUluZGV4QW5kRnJlZShuZXdMaXN0KVxuXG4gICAgY29uc3QgbmV3S2V5TGlzdCA9IG5ld01hcC5rZXlJbmRleCxcbiAgICAgICAgb2xkS2V5TGlzdCA9IG9sZE1hcC5rZXlJbmRleFxuXG4gICAgY29uc3QgbmV3RnJlZUxpc3QgPSBuZXdNYXAuZnJlZVxuICAgIGxldCBkaWZmTGlzdCA9IFtdLFxuICAgICAgICBjaGlsZHJlbiA9IFtdXG5cbiAgICBvbGRMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1LZXkgPSBnZXRJdGVtS2V5KGl0ZW0pXG4gICAgICAgIGlmIChpdGVtS2V5KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IG5ld0tleUxpc3QuaW5kZXhPZihpdGVtS2V5KVxuICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgICAgID8gbmV3TGlzdFtuZXdJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgOiAnbGlzdE51bGwnXG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKG5ld0ZyZWVMaXN0LnNoaWZ0KCkgfHwgbnVsbClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgaSA9IDAsIGogPSAwLCBrID0gMFxuICAgIC8v5LiN5Y+YXG4gICAgY29uc3Qgb2xkU29ydExpc3QgPSBvbGRLZXlMaXN0Lm1hcChcbiAgICAgICAgcmVzID0+IG5ld0tleUxpc3QuaW5kZXhPZihyZXMpID49IDBcbiAgICAgICAgICAgID8gbmV3S2V5TGlzdC5pbmRleE9mKHJlcylcbiAgICAgICAgICAgIDogbnVsbFxuICAgIClcblxuICAgIHdoaWxlIChpIDwgb2xkU29ydExpc3QubGVuZ3RoKSB7XG4gICAgICAgIGlmIChvbGRTb3J0TGlzdFtpXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGlmZkxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGkgLSBqLFxuICAgICAgICAgICAgICAgIHR5cGU6IE1PVkVTX0RFTEVURS8v5Yig6ZmkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9qIOeUqOS6juaooeS7v+WIoOmZpOeahOaTjeS9nFxuICAgICAgICAgICAgLy8g5Zug5Li655yf5a6e55qE6IqC54K55Yig6Zmk5ZCO77yMaemcgOimgeWQkeWJjeenu+WKqOS4gOS9jVxuICAgICAgICAgICAgaisrXG4gICAgICAgIH1cbiAgICAgICAgaSsrXG4gICAgfVxuICAgIC8v5Yig6Zmk5ZCO55qEb2xkU29ydExpc3RcbiAgICBsZXQgZmlsdGVyTGlzdCA9IG9sZFNvcnRMaXN0LmZpbHRlcihyZXMgPT4gcmVzICE9PSBudWxsKVxuICAgIHdoaWxlIChrIDwgbmV3S2V5TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgbGV0IG9sZEluZGV4ID0gZmlsdGVyTGlzdC5pbmRleE9mKGspXG4gICAgICAgIGlmIChvbGRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBpZiAoayAhPT0gb2xkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5zZXJ0ID0gZmlsdGVyTGlzdC5zcGxpY2Uob2xkSW5kZXgsIDEpWzBdXG4gICAgICAgICAgICAgICAgZmlsdGVyTGlzdC5zcGxpY2UoaywgMCwgaW5zZXJ0KVxuICAgICAgICAgICAgICAgIGRpZmZMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuZXdJbmRleDogayxcbiAgICAgICAgICAgICAgICAgICAgb2xkSW5kZXg6IG9sZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBNT1ZFU19SRU9SREVSIC8v5o2i5L2N572uXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbHRlckxpc3Quc3BsaWNlKGssIDAsIGspXG4gICAgICAgICAgICBkaWZmTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogayxcbiAgICAgICAgICAgICAgICBpdGVtOiBuZXdMaXN0W2tdLFxuICAgICAgICAgICAgICAgIHR5cGU6IE1PVkVTX0FERCAvL+aWsOWinlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBrKytcbiAgICB9XG5cbiAgICB3aGlsZSAobmV3RnJlZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICBkaWZmTGlzdC5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgICAgICBpdGVtOiBuZXdGcmVlTGlzdC5zaGlmdCgpLFxuICAgICAgICAgICAgdHlwZTogTU9WRVNfQUREIC8v5paw5aKeXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlmZjogZGlmZkxpc3QsXG4gICAgICAgIG5ld0NoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgICAgY2hpbGRyZW46IG9sZExpc3RcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gbWFrZUtleUluZGV4QW5kRnJlZShsaXN0KSB7XG4gICAgbGV0IGtleUluZGV4ID0gW10sXG4gICAgICAgIGZyZWUgPSBbXVxuICAgIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5SW5kZXgsXG4gICAgICAgICAgICBmcmVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGxldCBpdGVtS2V5ID0gZ2V0SXRlbUtleShpdGVtKVxuICAgICAgICBpZiAoaXRlbUtleSkge1xuICAgICAgICAgICAga2V5SW5kZXgucHVzaChpdGVtS2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJlZS5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAgIGtleUluZGV4LFxuICAgICAgICBmcmVlXG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0SXRlbUtleShpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0ua2V5XG59IiwibGV0IHVpZCA9IDBcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVpZCgpIHtcbiAgICByZXR1cm4gKyt1aWRcbn1cblxuZXhwb3J0IGNvbnN0IFZURVhUID0gMVxuZXhwb3J0IGNvbnN0IFZFTEVNRU5UID0gMlxuZXhwb3J0IGNvbnN0IFZTVEFURUxFU1MgPSAzXG5leHBvcnQgY29uc3QgVkNPTVBPTkVOVCA9IDRcblxuZXhwb3J0IGNvbnN0IE1PVkVTX0FERCA9ICdhZGQnXG5leHBvcnQgY29uc3QgTU9WRVNfREVMRVRFID0gJ2RlbGV0ZSdcbmV4cG9ydCBjb25zdCBNT1ZFU19SRU9SREVSID0gJ3Jlb3JkZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhpdGVtKSB7XG4gICAgcmV0dXJuIHR5cGUoaXRlbSkgPT09ICdTdHJpbmcnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5yZXBsYWNlKC9cXFtvYmplY3RcXHN8XFxdL2csICcnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hpbGRyZW5Gcm9tVmNvbXBvbmVudCh2Y29tcG9uZW50KSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHZjb21wb25lbnQucHJvcHNcbiAgICBsZXQgdmNoaWxkcmVuID0gW11cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgZmxhdEVhY2goY2hpbGRyZW4sIGNvbGxlY3RDaGlsZCwgdmNoaWxkcmVuKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxlY3RDaGlsZChjaGlsZHJlbiwgdmNoaWxkcmVuKVxuICAgIH1cbiAgICByZXR1cm4gdmNoaWxkcmVuXG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdEVhY2gobGlzdCwgaXRlcmF0ZWUsIGEpIHtcbiAgICBsZXQgbGVuID0gbGlzdC5sZW5ndGhcbiAgICBsZXQgaSA9IC0xXG5cbiAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBsaXN0WysraV1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgIGZsYXRFYWNoKGl0ZW0sIGl0ZXJhdGVlLCBhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlcmF0ZWUoaXRlbSwgYSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RDaGlsZChjaGlsZCwgY2hpbGRyZW4pIHtcbiAgICBpZiAoY2hpbGQgIT0gbnVsbCAmJiB0eXBlb2YgY2hpbGQgIT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoIWNoaWxkLnZ0eXBlKSB7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IGltbXV0YWJsZWpzIGRhdGFcbiAgICAgICAgICAgIGlmIChjaGlsZC50b0pTKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC50b0pTKClcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhdEVhY2goY2hpbGQsIGNvbGxlY3RDaGlsZCwgY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdENoaWxkKGNoaWxkLCBjaGlsZHJlbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZCA9ICcnICsgY2hpbGRcbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGhdID0gY2hpbGRcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJ1xuaW1wb3J0IHsgZ2V0VWlkIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IGRpZmZMaXN0IH0gZnJvbSAnLi9saXN0LWRpZmYnXG5pbXBvcnQge1xuICAgIFZURVhULFxuICAgIFZFTEVNRU5ULFxuICAgIFZTVEFURUxFU1MsXG4gICAgVkNPTVBPTkVOVCxcbiAgICBnZXRDaGlsZHJlbkZyb21WY29tcG9uZW50LFxuICAgIE1PVkVTX0FERCxcbiAgICBNT1ZFU19ERUxFVEUsXG4gICAgTU9WRVNfUkVPUkRFUixcbiAgICBpc1N0cmluZ1xufSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmNvbXBvbmVudCh7IHZ0eXBlLCB0eXBlLCBwcm9wcywga2V5LCByZWYgfSkge1xuICAgIGxldCB2Y29tcG9uZW50ID0ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBwcm9wcyxcbiAgICAgICAgdnR5cGUsXG4gICAgICAgIGtleSxcbiAgICAgICAgcmVmXG4gICAgfVxuICAgIGlmICh2dHlwZSA9PT0gVkNPTVBPTkVOVCkge1xuICAgICAgICB2Y29tcG9uZW50LnVpZCA9IGdldFVpZCgpXG4gICAgfVxuICAgIHJldHVybiB2Y29tcG9uZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Vm5vZGUodmNvbXBvbmVudCkge1xuICAgIGxldCB7IHZ0eXBlIH0gPSB2Y29tcG9uZW50LFxuICAgICAgICBub2RlID0gbnVsbFxuICAgIGlmICghdnR5cGUpIHsgLy8gaW5pdCB0ZXh0XG4gICAgICAgIG5vZGUgPSBpbml0VGV4dCh2Y29tcG9uZW50KVxuICAgIH0gZWxzZSBpZiAodnR5cGUgPT09IFZFTEVNRU5UKSB7XG4gICAgICAgIG5vZGUgPSBpbml0RWxlbWVudCh2Y29tcG9uZW50KVxuICAgIH0gZWxzZSBpZiAodnR5cGUgPT09IFZDT01QT05FTlQpIHtcbiAgICAgICAgbm9kZSA9IGluaXRDb21wb25lbnQodmNvbXBvbmVudClcbiAgICB9IGVsc2UgaWYgKHZ0eXBlID09PSBWU1RBVEVMRVNTKSB7XG4gICAgICAgIG5vZGUgPSBpbml0U3RhdGVsZXNzKHZjb21wb25lbnQpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VGV4dCh0ZXh0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RWxlbWVudCh2Y29tcG9uZW50KSB7XG4gICAgY29uc3QgeyB0eXBlLCBwcm9wcyB9ID0gdmNvbXBvbmVudFxuICAgIGxldCB2Y2hpbGRyZW4gPSBnZXRDaGlsZHJlbkZyb21WY29tcG9uZW50KHZjb21wb25lbnQpXG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgc2V0UHJvcHMobm9kZSwgcHJvcHMpXG4gICAgdmNoaWxkcmVuLmZvckVhY2goY2hpbGRWbm9kZSA9PiB7XG4gICAgICAgIERPTS5hcHBlbmRDaGlsZHJlbihub2RlLCBpbml0Vm5vZGUoY2hpbGRWbm9kZSkpXG4gICAgfSlcblxuICAgIHJldHVybiBub2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29tcG9uZW50KHZjb21wb25lbnQpIHtcbiAgICBjb25zdCB7IHR5cGU6IENvbXBvbmVudCwgcHJvcHMsIHVpZCB9ID0gdmNvbXBvbmVudFxuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQocHJvcHMpXG4gICAgY29uc3QgeyAkY2FjaGU6IGNhY2hlIH0gPSBjb21wb25lbnRcbiAgICBjb25zdCB2bm9kZSA9IHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpXG4gICAgY29uc3Qgbm9kZSA9IGluaXRWbm9kZSh2bm9kZSlcbiAgICBub2RlLmNhY2hlID0gbm9kZS5jYWNoZSB8fCB7fVxuICAgIG5vZGUuY2FjaGVbdWlkXSA9IGNvbXBvbmVudFxuICAgIGNhY2hlLnZub2RlID0gdm5vZGVcbiAgICBjYWNoZS5ub2RlID0gbm9kZVxuICAgIGNhY2hlLmlzTW91bnRlZCA9IHRydWVcbiAgICByZXR1cm4gbm9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0YXRlbGVzcyh2Y29tcG9uZW50KSB7XG4gICAgY29uc3QgeyB1aWQgfSA9IHZjb21wb25lbnRcbiAgICBjb25zdCB2bm9kZSA9IGdldFN0YXRlbGVzcyh2Y29tcG9uZW50KVxuICAgIGNvbnN0IG5vZGUgPSBpbml0Vm5vZGUodm5vZGUpXG4gICAgbm9kZS5jYWNoZSA9IG5vZGUuY2FjaGUgfHwge31cbiAgICBub2RlLmNhY2hlW3VpZF0gPSB2bm9kZVxuICAgIHJldHVybiBub2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZWxlc3ModmNvbXBvbmVudCkge1xuICAgIGNvbnN0IHsgdHlwZTogZmFjdG9yeSwgcHJvcHMsIHVpZCB9ID0gdmNvbXBvbmVudFxuICAgIGxldCB2bm9kZSA9IGZhY3RvcnkocHJvcHMpXG4gICAgaWYgKHZub2RlICYmIHZub2RlLnJlbmRlcikge1xuICAgICAgICB2bm9kZSA9IHZub2RlLnJlbmRlcigpXG4gICAgfVxuICAgIHJldHVybiB2bm9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiBjb21wb25lbnQucmVuZGVyKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lWbm9kZSh2Y29tcG9uZW50LCBub2RlKSB7XG4gICAgY29uc3QgeyB2dHlwZSB9ID0gdmNvbXBvbmVudFxuICAgIGlmICh2dHlwZSA9PT0gVkVMRU1FTlQpIHtcblxuICAgIH0gZWxzZSBpZiAodnR5cGUgPT09IFZDT01QT05FTlQpIHtcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVUd29Wbm9kZXMob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKSB7XG4gICAgbGV0IG5ld05vZGUgPSBub2RlXG4gICAgaWYgKCFuZXdWbm9kZSkge1xuICAgICAgICAvL+WmguaenOaWsOiKgueCueaYr+epuu+8jOmUgOavgW5vZGXlubbkuJTnp7vnp7vpmaRcbiAgICAgICAgZGVzdHJveVZub2RlKG9sZFZub2RlLCBub2RlKVxuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSlcbiAgICB9IGVsc2UgaWYgKG9sZFZub2RlLnR5cGUgIT09IG5ld1Zub2RlLnR5cGUgfHwgb2xkVm5vZGUua2V5ICE9PSBuZXdWbm9kZS5rZXkpIHtcbiAgICAgICAgLy90eXBl5oiW6ICFa2V55LiN5ZCM77yM5a6M5YWo6YeN5p6EXG4gICAgICAgIGRlc3Ryb3lWbm9kZShvbGRWbm9kZSwgbm9kZSlcbiAgICAgICAgbmV3Tm9kZSA9IGluaXRWbm9kZShuZXdWbm9kZSlcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBub2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8v6Z2e5LiK6L+w5oOF5Ya15YiZ5pu05pawXG4gICAgICAgIG5ld05vZGUgPSB1cGRhdGVWbm9kZShvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpXG4gICAgfVxuICAgIHJldHVybiBuZXdOb2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWbm9kZShvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpIHtcbiAgICBjb25zdCB7IHZ0eXBlLCB0eXBlIH0gPSBvbGRWbm9kZVxuICAgIGlmICghdHlwZSkge1xuICAgICAgICBpZiAob2xkVm5vZGUgIT09IG5ld1Zub2RlKSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBuZXdWbm9kZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlXG4gICAgfVxuXG4gICAgaWYgKHZ0eXBlID09PSBWQ09NUE9ORU5UKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGVWY29tcG9uZW50KG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSlcbiAgICB9XG4gICAgaWYgKHZ0eXBlID09PSBWU1RBVEVMRVNTKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGVTdGF0ZWxlc3Mob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKVxuICAgIH1cblxuICAgIGlmICh2dHlwZSA9PT0gVkVMRU1FTlQpIHtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUVsZW1lbnQob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZjb21wb25lbnQodmNvbXBvbmVudCwgbmV3VmNvbXBvbmVudCwgbm9kZSkge1xuICAgIGxldCB1aWQgPSB2Y29tcG9uZW50LnVpZFxuICAgIGxldCBjb21wb25lbnQgPSBub2RlLmNhY2hlW3VpZF1cbiAgICBsZXQgeyAkdXBkYXRlcjogdXBkYXRlciwgJGNhY2hlOiBjYWNoZSB9ID0gY29tcG9uZW50XG4gICAgbm9kZS5jYWNoZVtuZXdWY29tcG9uZW50LnVpZF0gPSBjb21wb25lbnRcbiAgICBjb21wb25lbnQuZm9yY2VVcGRhdGUoKVxuICAgIHJldHVybiBjYWNoZS5ub2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdGF0ZWxlc3ModmNvbXBvbmVudCwgbmV3VmNvbXBvbmVudCwgbm9kZSkge1xuICAgIGxldCB1aWQgPSB2Y29tcG9uZW50LnVpZFxuICAgIGxldCB2bm9kZSA9IG5vZGUuY2FjaGVbdWlkXVxuICAgIGRlbGV0ZSBub2RlLmNhY2hlW3VpZF1cbiAgICBsZXQgbmV3Vm5vZGUgPSBnZXRTdGF0ZWxlc3MobmV3VmNvbXBvbmVudClcbiAgICBsZXQgbmV3Tm9kZSA9IGNvbXBhcmVUd29Wbm9kZXModm5vZGUsIG5ld1Zub2RlLCBub2RlKVxuICAgIG5ld05vZGUuY2FjaGUgPSBuZXdOb2RlLmNhY2hlIHx8IHt9XG4gICAgbmV3Tm9kZS5jYWNoZVt1aWRdID0gbmV3Vm5vZGVcbiAgICByZXR1cm4gbmV3Vm5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKSB7XG4gICAgbGV0IGRpZmZQcm9wcyA9IGdldERpZmZQcm9wcyhvbGRWbm9kZS5wcm9wcywgbmV3Vm5vZGUucHJvcHMpXG4gICAgZGlmZlByb3BzICYmIHNldFByb3BzKG5vZGUsIGRpZmZQcm9wcylcbiAgICB1cGRhdGVDaGlsZHJlbihvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpXG4gICAgcmV0dXJuIG5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSkge1xuICAgIGxldCB7IGRpZmYsIG5ld0NoaWxkcmVuLCBjaGlsZHJlbiB9ID0gZGlmZkxpc3Qob2xkVm5vZGUsIG5ld1Zub2RlKVxuICAgIGxldCBjaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzXG4gICAgbGV0IGogPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobmV3Q2hpbGRyZW4gIT09ICdsaXN0TnVsbCcpIHsvL2xpc3ROdWxs6K+05piO6ZyA6KaB5Yig5o6J77yM5Lya5ZyocGF0Y2jph4zliKDpmaRcbiAgICAgICAgICAgIGNvbXBhcmVUd29Wbm9kZXMoY2hpbGRyZW5baV0sIG5ld0NoaWxkcmVuW2ldLCBjaGlsZE5vZGVzW2kgLSBqXSlcbiAgICAgICAgICAgIGlmIChuZXdDaGlsZHJlbltpXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8v5aaC5p6cbmV3Q2hpbGRyZW5baV0g5pivbnVsbO+8jOivtOaYjuS4jeW4pmtleeW5tuS4lOW3sue7j+iiq+WIoOmZpOS6hu+8jG5vZGVz6ZyA6KaB5ZCR5YmN556s56e75LiA5L2NXG4gICAgICAgICAgICAgICAgaisrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXRjaENoaWxkcmVuKG5vZGUsIGRpZmYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaWZmUHJvcHMocHJvcHMsIG5ld1Byb3BzKSB7XG4gICAgbGV0IGNoYW5nZVByb3BzID0ge30sXG4gICAgICAgIGNvdW50ID0gMCxcbiAgICAgICAgaWdub3JlTGlzdCA9IFsnY2hpbGRyZW4nLCAna2V5J11cbiAgICBmb3IgKGxldCBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgIGlmIChuZXdQcm9wc1tuYW1lXSAhPT0gcHJvcHNbbmFtZV0gJiYgaWdub3JlTGlzdC5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgICAgICAgY2hhbmdlUHJvcHNbbmFtZV0gPSBuZXdQcm9wc1tuYW1lXVxuICAgICAgICAgICAgY291bnQrK1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IG5hbWUgaW4gbmV3UHJvcHMpIHtcbiAgICAgICAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBpZ25vcmVMaXN0LmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgICAgICBjaGFuZ2VQcm9wc1tuYW1lXSA9IG5ld1Byb3BzW25hbWVdXG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50ID4gMCAmJiBjaGFuZ2VQcm9wc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcHMobm9kZSwgcHJvcHMpIHtcbiAgICBsZXQgaWdub3JlTGlzdCA9IFsnY2hpbGRyZW4nLCAna2V5J11cbiAgICBmb3IgKGxldCBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgIGlmIChpZ25vcmVMaXN0LmZpbmQocmVzID0+IHJlcyA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgbGV0IHN0eWxlT2JqZWN0ID0gcHJvcHNbbmFtZV1cbiAgICAgICAgICAgIGZvciAobGV0IHNLZXkgaW4gc3R5bGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW3NLZXldID0gc3R5bGVPYmplY3Rbc0tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgcHJvcHNbbmFtZV0pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hDaGlsZHJlbihub2RlLCBkaWZmKSB7XG4gICAgbGV0IGNoaWxkTm9kZXMgPSBub2RlLmNoaWxkTm9kZXNcbiAgICBpZiAoZGlmZi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRpZmYuZm9yRWFjaChmdW5jdGlvbiAoc2luZ2xlRGlmZikge1xuICAgICAgICAgICAgc3dpdGNoIChzaW5nbGVEaWZmLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAvL2RlbGV0ZVxuICAgICAgICAgICAgICAgIGNhc2UgTU9WRVNfREVMRVRFOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbc2luZ2xlRGlmZi5pbmRleF0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgLy9hZGRcbiAgICAgICAgICAgICAgICBjYXNlIE1PVkVTX0FERDpcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBpc1N0cmluZyhzaW5nbGVEaWZmLml0ZW0pID8gc2luZ2xlRGlmZi5pdGVtIDogaW5pdFZub2RlKHNpbmdsZURpZmYuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID4gc2luZ2xlRGlmZi5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgY2hpbGROb2Rlc1tzaW5nbGVEaWZmLmluZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIC8vbW92ZVxuICAgICAgICAgICAgICAgIGNhc2UgTU9WRVNfUkVPUkRFUjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUoY2hpbGROb2Rlc1tzaW5nbGVEaWZmLm9sZEluZGV4XSwgY2hpbGROb2Rlc1tzaW5nbGVEaWZmLm5ld0luZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==