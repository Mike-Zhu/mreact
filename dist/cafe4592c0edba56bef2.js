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
    diff.length > 0 && diff.forEach(function (singleDiff) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0RPTS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvTW91bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9saXN0LWRpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92aXJ0dXJuLWRvbS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJBcHAiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJmaXJzdCIsImNvbG9yIiwidWxsaXN0Iiwia2V5IiwidmFsdWUiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJtYXAiLCJyZXMiLCJBbGxvdyIsInBwcCIsIlNtYWxsSGVhZGVyIiwiYWFhIiwiY29tcG9tZW50RGlkTW91bnQiLCJNcmVhY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RDb21wb25lbnRTeW1ib2wiLCJVcGRhdGVyIiwiaW5zdGFuY2UiLCJwZW5kaW5nU3RhdGVzIiwiYWRkU3RhdGUiLCJuZXh0U3RhdGUiLCJwdXNoIiwiZW1pdFVwZGF0ZSIsInVwZGF0ZUNvbXBvbmVudCIsImdldFN0YXRlIiwiX3BlbmRpbmdTdGF0ZSIsImxlbmd0aCIsInBhcnRpYWxTdGF0ZSIsInNoaWZ0IiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yY2VVcGRhdGUiLCIkdXBkYXRlciIsIiRjYWNoZSIsImlzTW91bnRlZCIsImlzUmVhY3RDb21wb25lbnQiLCJjb250ZXh0Iiwidm5vZGUiLCJub2RlIiwibmV3Vm5vZGUiLCJyZW5kZXJDb21wb25lbnQiLCJjb21wYXJlVHdvVm5vZGVzIiwibW91bnRDb21wb25lbnQiLCJfY3VycmVudFZub2RlIiwiX1Zub2RlIiwiZ2V0Vm5vZGUiLCJfX2luc3RhbnNlUmVhY3RDb21wb25lbnQiLCJzaG91bGRVcGRhdGVDb21wb25lbnQiLCJwcmV2RWxlbWVudCIsIm5leHRFbGVtZW50IiwidHlwZSIsImVtcHR5Iiwic2xpY2UiLCJjYWxsIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZCIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGRyZW4iLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwicmVtb3ZlUHJvcGVydHkiLCJwcm9wZXJ0eSIsInJlbW92ZUF0dHJpYnV0ZU5vZGUiLCJzZXRQcm9wZXJ0eSIsInNldEF0dHJpYnV0ZSIsImluc2VydEFmdGVyIiwiYWZ0ZXJDaGlsZCIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJjb25maWciLCJ2dHlwZSIsInByb3RvdHlwZSIsIkVycm9yIiwicmVmIiwiZmluYWxQcm9wcyIsInByb3BLZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsImZpbmFsQ2hpbGRyZW4iLCJhcmd1TGVuZ3RoIiwiYXJndW1lbnRzIiwiaSIsImNyZWF0ZVZjb21wb25lbnQiLCJtb3VudCIsImVsZW1lbnQiLCJyZW5kZXJlZE5vZGUiLCJpbml0Vm5vZGUiLCJET00iLCJkaWZmTGlzdCIsIm9sZFZub2RlIiwib2xkTGlzdCIsIm5ld0xpc3QiLCJvbGRNYXAiLCJtYWtlS2V5SW5kZXhBbmRGcmVlIiwibmV3TWFwIiwibmV3S2V5TGlzdCIsImtleUluZGV4Iiwib2xkS2V5TGlzdCIsIm5ld0ZyZWVMaXN0IiwiZnJlZSIsIml0ZW0iLCJpdGVtS2V5IiwiZ2V0SXRlbUtleSIsIm5ld0luZGV4IiwiaW5kZXhPZiIsImoiLCJrIiwib2xkU29ydExpc3QiLCJpbmRleCIsImZpbHRlckxpc3QiLCJmaWx0ZXIiLCJvbGRJbmRleCIsImluc2VydCIsInNwbGljZSIsImRpZmYiLCJuZXdDaGlsZHJlbiIsImxpc3QiLCJ1aWQiLCJnZXRVaWQiLCJWVEVYVCIsIlZFTEVNRU5UIiwiVlNUQVRFTEVTUyIsIlZDT01QT05FTlQiLCJNT1ZFU19BREQiLCJNT1ZFU19ERUxFVEUiLCJNT1ZFU19SRU9SREVSIiwiaXNTdHJpbmciLCJvYmoiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJnZXRDaGlsZHJlbkZyb21WY29tcG9uZW50IiwidmNvbXBvbmVudCIsInZjaGlsZHJlbiIsImZsYXRFYWNoIiwiY29sbGVjdENoaWxkIiwiaXRlcmF0ZWUiLCJhIiwibGVuIiwidG9KUyIsImluaXRUZXh0IiwiaW5pdEVsZW1lbnQiLCJpbml0Q29tcG9uZW50IiwiaW5pdFN0YXRlbGVzcyIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInNldFByb3BzIiwiY2hpbGRWbm9kZSIsImNvbXBvbmVudCIsImNhY2hlIiwiZ2V0U3RhdGVsZXNzIiwiZmFjdG9yeSIsImRlc3Ryb3lWbm9kZSIsIm5ld05vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwidXBkYXRlVm5vZGUiLCJkYXRhIiwidXBkYXRlVmNvbXBvbmVudCIsInVwZGF0ZVN0YXRlbGVzcyIsInVwZGF0ZUVsZW1lbnQiLCJuZXdWY29tcG9uZW50IiwidXBkYXRlciIsImRpZmZQcm9wcyIsImdldERpZmZQcm9wcyIsInVwZGF0ZUNoaWxkcmVuIiwicGF0Y2hDaGlsZHJlbiIsIm5ld1Byb3BzIiwiY2hhbmdlUHJvcHMiLCJjb3VudCIsImlnbm9yZUxpc3QiLCJuYW1lIiwiZmluZCIsInN0eWxlT2JqZWN0Iiwic0tleSIsInN0eWxlIiwic2luZ2xlRGlmZiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFpQmlHLE9BQWpCO0FBQ0g7QUFDRDtBQUNKO0FBQ0EsaUJBQUssb0RBQUw7QUFDSXpILHFCQUFLaUMsWUFBTCxDQUFrQmpCLFdBQVdnSSxXQUFXaEUsUUFBdEIsQ0FBbEIsRUFBbURoRSxXQUFXZ0ksV0FBV3hFLFFBQXRCLENBQW5EO0FBQ0E7QUFqQlI7QUFtQkgsS0FwQmtCLENBQW5CO0FBcUJILEMiLCJmaWxlIjoiY2FmZTQ1OTJjMGVkYmE1NmJlZjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgTXJlYWN0IGZyb20gJy4vdXRpbHMnXHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBNcmVhY3RcclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBmaXJzdDogMSxcclxuICAgICAgY29sb3I6IHtcclxuICAgICAgICBjb2xvcjogXCJyZWRcIlxyXG4gICAgICB9LFxyXG4gICAgICB1bGxpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXk6IFwiYVwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiYSsrXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGtleTogXCJiXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCJiKytcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAga2V5OiBcImNcIixcclxuICAgICAgICAgIHZhbHVlOiBcImMrK1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXk6IFwiZFwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiZCsrXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICAgIGxldCBmaXJzdCA9IDFcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBmaXJzdDogKytmaXJzdCxcclxuICAgICAgICB1bGxpc3Q6IFt7XHJcbiAgICAgICAgICBrZXk6IFwiZ1wiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiZysrXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGtleTogXCJkXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCJkKytiaWFuaHVhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGtleTogXCJlXCIsXHJcbiAgICAgICAgICB2YWx1ZTogXCJlKytcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAga2V5OiBcImFcIixcclxuICAgICAgICAgIHZhbHVlOiBcImErK1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXk6IFwiY1wiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiYSsr5pys5p2l5pivY1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXk6IFwiZlwiLFxyXG4gICAgICAgICAgdmFsdWU6IFwiZisrXCJcclxuICAgICAgICB9XVxyXG4gICAgICB9KVxyXG4gICAgfSwgMjAwMClcclxuICB9XHJcbiAgLy8gY29tcG9tZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgZmlyc3Q6IDJcclxuICAvLyAgICAgfSlcclxuICAvLyAgIH0sIDEwMDApXHJcbiAgLy8gfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmZpcnN0fVxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS51bGxpc3QubWFwKHJlcyA9PlxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Jlcy5rZXl9PntyZXMudmFsdWV9PC9saT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3RoaXMuc3RhdGUuY29sb3J9ID5IZWFkaW5nIDE8L2gxPlxyXG4gICAgICAgICAgPFNtYWxsSGVhZGVyIC8+XHJcbiAgICAgICAgICA8QWxsb3cgcHBwPXt0aGlzLnN0YXRlLmZpcnN0fSAvPlxyXG4gICAgICAgICAgPGgyID5IZWFkaW5nIDIge3RoaXMuc3RhdGUuZmlyc3R9PC9oMj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5maXJzdH08L2gxPlxyXG4gICAgICAgICAgICA8aDI+MjwvaDI+XHJcbiAgICAgICAgICAgIDxoMz4zPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8aDM+SGVhZGluZyAzPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBBbGxvdyh7IHBwcCB9KSB7XHJcbiAgcmV0dXJuIDxkaXY+e3BwcH0gKyAhISEhPC9kaXY+XHJcbn1cclxuXHJcbmNsYXNzIFNtYWxsSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhYWE6IDFcclxuICAgIH1cclxuICAgIGxldCBhYWEgPSAxXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYWFhOiArK2FhYVxyXG4gICAgICB9KVxyXG4gICAgfSwgMzAwKVxyXG4gIH1cclxuICBjb21wb21lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxoNT57dGhpcy5zdGF0ZS5hYWF9PC9oNT5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbk1yZWFjdC5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkiLCJpbXBvcnQgeyByZW5kZXJDb21wb25lbnQsIGNvbXBhcmVUd29Wbm9kZXMgfSBmcm9tICcuL3ZpcnR1cm4tZG9tJ1xyXG5cclxuY29uc3QgUmVhY3RDb21wb25lbnRTeW1ib2wgPSB7fVxyXG5cclxuY2xhc3MgVXBkYXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZSkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZVxyXG4gICAgICAgIHRoaXMucGVuZGluZ1N0YXRlcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3RhdGUobmV4dFN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nU3RhdGVzLnB1c2gobmV4dFN0YXRlKVxyXG4gICAgfVxyXG4gICAgZW1pdFVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudCgpXHJcbiAgICB9XHJcbiAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCB7IGluc3RhbmNlIH0gPSB0aGlzXHJcbiAgICAgICAgbGV0IF9wZW5kaW5nU3RhdGUgPSBpbnN0YW5jZS5zdGF0ZVxyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlbmRpbmdTdGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcGFydGlhbFN0YXRlID0gdGhpcy5wZW5kaW5nU3RhdGVzLnNoaWZ0KClcclxuICAgICAgICAgICAgX3BlbmRpbmdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluc3RhbmNlLnN0YXRlLCBwYXJ0aWFsU3RhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfcGVuZGluZ1N0YXRlXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29tcG9uZW50KCkge1xyXG4gICAgICAgIGxldCB7IGluc3RhbmNlIH0gPSB0aGlzXHJcbiAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLiR1cGRhdGVyID0gbmV3IFVwZGF0ZXIodGhpcylcclxuICAgICAgICB0aGlzLiRjYWNoZSA9IHtcclxuICAgICAgICAgICAgaXNNb3VudGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHNcclxuICAgIH1cclxuXHJcbiAgICBpc1JlYWN0Q29tcG9uZW50KCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdENvbXBvbmVudFN5bWJvbFxyXG4gICAgfVxyXG5cclxuICAgIGZvcmNlVXBkYXRlKCkge1xyXG4gICAgICAgIGxldCB7ICR1cGRhdGVyLCAkY2FjaGUsIHByb3BzLCBjb250ZXh0IH0gPSB0aGlzXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICR1cGRhdGVyLmdldFN0YXRlKClcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgbGV0IHsgdm5vZGUsIG5vZGUgfSA9ICRjYWNoZVxyXG4gICAgICAgIGxldCBuZXdWbm9kZSA9IHJlbmRlckNvbXBvbmVudCh0aGlzKVxyXG4gICAgICAgIHJldHVybiBjb21wYXJlVHdvVm5vZGVzKHZub2RlLCBuZXdWbm9kZSwgbm9kZSlcclxuICAgIH1cclxuXHJcbiAgICBtb3VudENvbXBvbmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFZub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfVm5vZGVcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgX1Zub2RlID0gdGhpcy5nZXRWbm9kZSgpXHJcbiAgICAgICAgX1Zub2RlLl9faW5zdGFuc2VSZWFjdENvbXBvbmVudCA9IHRoaXNcclxuICAgICAgICB0aGlzLl9jdXJyZW50Vm5vZGUgPSBfVm5vZGVcclxuICAgICAgICByZXR1cm4gX1Zub2RlXHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZShwYXJ0aWFsU3RhdGUpIHtcclxuICAgICAgICB0aGlzLiR1cGRhdGVyLmFkZFN0YXRlKHBhcnRpYWxTdGF0ZSlcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlQ29tcG9uZW50KHByZXZFbGVtZW50LCBuZXh0RWxlbWVudCkge1xyXG4gICAgcmV0dXJuIHByZXZFbGVtZW50LnR5cGUgPT09IG5leHRFbGVtZW50LnR5cGVcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQiLCJleHBvcnQgZnVuY3Rpb24gZW1wdHkobm9kZSkge1xyXG4gICAgW10uc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKG5vZGUsIGNoaWxkcmVuKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBub2RlLmFwcGVuZChjaGlsZHJlbilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZHJlbilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BlcnR5KG5vZGUsIHByb3BlcnR5KSB7XHJcbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZU5vZGUocHJvcGVydHkpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9wZXJ0eShub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgIG5vZGUuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKG5vZGUsIGNoaWxkLCBhZnRlckNoaWxkKSB7XHJcbiAgICBub2RlLmluc2VydEJlZm9yZShcclxuICAgICAgICBjaGlsZCxcclxuICAgICAgICBhZnRlckNoaWxkID8gYWZ0ZXJDaGlsZC5uZXh0U2libGluZyA6IG5vZGUuZmlyc3RDaGlsZFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGQpIHtcclxuICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVWY29tcG9uZW50IH0gZnJvbSAnLi92aXJ0dXJuLWRvbSdcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCdcclxuaW1wb3J0IHtcclxuICAgIFZURVhULFxyXG4gICAgVkVMRU1FTlQsXHJcbiAgICBWU1RBVEVMRVNTLFxyXG4gICAgVkNPTVBPTkVOVFxyXG59IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcclxuICAgIGxldCB2dHlwZSA9IG51bGxcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgIHZ0eXBlID0gVlRFWFRcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdnR5cGUgPSBWRUxFTUVOVFxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGlmICh0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHZ0eXBlID0gVkNPTVBPTkVOVFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZ0eXBlID0gVlNUQVRFTEVTU1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWFjdC5jcmVhdGVFbGVtZW50OiB1bmV4cGVjdCB0eXBlIFsgJHt0eXBlfSBdYClcclxuICAgIH1cclxuXHJcbiAgICBsZXQga2V5ID0gbnVsbCxcclxuICAgICAgICByZWYgPSBudWxsXHJcbiAgICBsZXQgZmluYWxQcm9wcyA9IHt9XHJcbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcclxuICAgICAgICBmb3IgKGxldCBwcm9wS2V5IGluIGNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvcEtleSA9PT0gJ2tleScpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9ICcnICsgY29uZmlnW3Byb3BLZXldXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcEtleSA9PT0gJ3JlZicpIHtcclxuICAgICAgICAgICAgICAgIHJlZiA9IGNvbmZpZ1twcm9wS2V5XVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmluYWxQcm9wc1twcm9wS2V5XSA9IGNvbmZpZ1twcm9wS2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzXHJcbiAgICBpZiAoZGVmYXVsdFByb3BzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcHJvcEtleSBpbiBkZWZhdWx0UHJvcHMpIHtcclxuICAgICAgICAgICAgaWYgKGZpbmFsUHJvcHNbcHJvcEtleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZmluYWxQcm9wc1twcm9wS2V5XSA9IGRlZmF1bHRQcm9wc1twcm9wS2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaW5hbENoaWxkcmVuID0gY2hpbGRyZW5cclxuICAgIGxldCBhcmd1TGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgaWYgKGFyZ3VMZW5ndGggPiAzKSB7XHJcbiAgICAgICAgZmluYWxDaGlsZHJlbiA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBhcmd1TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmluYWxDaGlsZHJlbi5wdXNoKGFyZ3VtZW50c1tpXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZmluYWxDaGlsZHJlbikge1xyXG4gICAgICAgIGZpbmFsUHJvcHMuY2hpbGRyZW4gPSBmaW5hbENoaWxkcmVuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3JlYXRlVmNvbXBvbmVudCh7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB2dHlwZSxcclxuICAgICAgICBwcm9wczogZmluYWxQcm9wcyxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgcmVmXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJ1xyXG5pbXBvcnQgeyBpbml0Vm5vZGUgfSBmcm9tICcuL3ZpcnR1cm4tZG9tJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW91bnQoZWxlbWVudCwgbm9kZSkge1xyXG4gICAgLy9lbGVtZW50ID0+IGNvbXBvbmVudFxyXG4gICAgY29uc3QgcmVuZGVyZWROb2RlID0gaW5pdFZub2RlKGVsZW1lbnQpXHJcbiAgICBET00uZW1wdHkobm9kZSlcclxuICAgIERPTS5hcHBlbmRDaGlsZHJlbihub2RlLCByZW5kZXJlZE5vZGUpXHJcbn1cclxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9FbGVtZW50LmpzJ1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50LmpzJ1xyXG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vTW91bnQuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IGNyZWF0ZUVsZW1lbnQsIENvbXBvbmVudCwgcmVuZGVyIH0iLCJpbXBvcnQge1xyXG4gICAgTU9WRVNfQURELFxyXG4gICAgTU9WRVNfREVMRVRFLFxyXG4gICAgTU9WRVNfUkVPUkRFUixcclxufSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZMaXN0KG9sZFZub2RlLCBuZXdWbm9kZSkge1xyXG4gICAgbGV0IG9sZExpc3QgPSBvbGRWbm9kZS5wcm9wcy5jaGlsZHJlbixcclxuICAgICAgICBuZXdMaXN0ID0gbmV3Vm5vZGUucHJvcHMuY2hpbGRyZW5cclxuXHJcbiAgICBvbGRMaXN0ID0gQXJyYXkuaXNBcnJheShvbGRMaXN0KSAmJiBvbGRMaXN0ID8gb2xkTGlzdCA6IFtvbGRMaXN0XVxyXG4gICAgbmV3TGlzdCA9IEFycmF5LmlzQXJyYXkobmV3TGlzdCkgJiYgbmV3TGlzdCA/IG5ld0xpc3QgOiBbbmV3TGlzdF1cclxuICAgIGNvbnN0IG9sZE1hcCA9IG1ha2VLZXlJbmRleEFuZEZyZWUob2xkTGlzdCksXHJcbiAgICAgICAgbmV3TWFwID0gbWFrZUtleUluZGV4QW5kRnJlZShuZXdMaXN0KVxyXG5cclxuICAgIGNvbnN0IG5ld0tleUxpc3QgPSBuZXdNYXAua2V5SW5kZXgsXHJcbiAgICAgICAgb2xkS2V5TGlzdCA9IG9sZE1hcC5rZXlJbmRleFxyXG5cclxuICAgIGNvbnN0IG5ld0ZyZWVMaXN0ID0gbmV3TWFwLmZyZWVcclxuICAgIGxldCBkaWZmTGlzdCA9IFtdLFxyXG4gICAgICAgIGNoaWxkcmVuID0gW11cclxuXHJcbiAgICBvbGRMaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbUtleSA9IGdldEl0ZW1LZXkoaXRlbSlcclxuICAgICAgICBpZiAoaXRlbUtleSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IG5ld0tleUxpc3QuaW5kZXhPZihpdGVtS2V5KVxyXG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPj0gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gbmV3TGlzdFtuZXdJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICA6ICdsaXN0TnVsbCdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2gobmV3RnJlZUxpc3Quc2hpZnQoKSB8fCBudWxsKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGkgPSAwLCBqID0gMCwgayA9IDBcclxuICAgIC8v5LiN5Y+YXHJcbiAgICBjb25zdCBvbGRTb3J0TGlzdCA9IG9sZEtleUxpc3QubWFwKFxyXG4gICAgICAgIHJlcyA9PiBuZXdLZXlMaXN0LmluZGV4T2YocmVzKSA+PSAwXHJcbiAgICAgICAgICAgID8gbmV3S2V5TGlzdC5pbmRleE9mKHJlcylcclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICApXHJcblxyXG4gICAgd2hpbGUgKGkgPCBvbGRTb3J0TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICBpZiAob2xkU29ydExpc3RbaV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgZGlmZkxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogaSAtIGosXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNT1ZFU19ERUxFVEUvL+WIoOmZpFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL2og55So5LqO5qih5Lu/5Yig6Zmk55qE5pON5L2cXHJcbiAgICAgICAgICAgIC8vIOWboOS4uuecn+WunueahOiKgueCueWIoOmZpOWQju+8jGnpnIDopoHlkJHliY3np7vliqjkuIDkvY1cclxuICAgICAgICAgICAgaisrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkrK1xyXG4gICAgfVxyXG4gICAgLy/liKDpmaTlkI7nmoRvbGRTb3J0TGlzdFxyXG4gICAgbGV0IGZpbHRlckxpc3QgPSBvbGRTb3J0TGlzdC5maWx0ZXIocmVzID0+IHJlcyAhPT0gbnVsbClcclxuICAgIHdoaWxlIChrIDwgbmV3S2V5TGlzdC5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgb2xkSW5kZXggPSBmaWx0ZXJMaXN0LmluZGV4T2YoaylcclxuICAgICAgICBpZiAob2xkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAoayAhPT0gb2xkSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbnNlcnQgPSBmaWx0ZXJMaXN0LnNwbGljZShvbGRJbmRleCwgMSlbMF1cclxuICAgICAgICAgICAgICAgIGZpbHRlckxpc3Quc3BsaWNlKGssIDAsIGluc2VydClcclxuICAgICAgICAgICAgICAgIGRpZmZMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4OiBrLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZEluZGV4OiBvbGRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBNT1ZFU19SRU9SREVSIC8v5o2i5L2N572uXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlsdGVyTGlzdC5zcGxpY2UoaywgMCwgaylcclxuICAgICAgICAgICAgZGlmZkxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogayxcclxuICAgICAgICAgICAgICAgIGl0ZW06IG5ld0xpc3Rba10sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNT1ZFU19BREQgLy/mlrDlop5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaysrXHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKG5ld0ZyZWVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBkaWZmTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgaW5kZXg6IGNoaWxkcmVuLmxlbmd0aCxcclxuICAgICAgICAgICAgaXRlbTogbmV3RnJlZUxpc3Quc2hpZnQoKSxcclxuICAgICAgICAgICAgdHlwZTogTU9WRVNfQUREIC8v5paw5aKeXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpZmY6IGRpZmZMaXN0LFxyXG4gICAgICAgIG5ld0NoaWxkcmVuOiBjaGlsZHJlbixcclxuICAgICAgICBjaGlsZHJlbjogb2xkTGlzdFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFrZUtleUluZGV4QW5kRnJlZShsaXN0KSB7XHJcbiAgICBsZXQga2V5SW5kZXggPSBbXSxcclxuICAgICAgICBmcmVlID0gW11cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtleUluZGV4LFxyXG4gICAgICAgICAgICBmcmVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBsZXQgaXRlbUtleSA9IGdldEl0ZW1LZXkoaXRlbSlcclxuICAgICAgICBpZiAoaXRlbUtleSkge1xyXG4gICAgICAgICAgICBrZXlJbmRleC5wdXNoKGl0ZW1LZXkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZnJlZS5wdXNoKGl0ZW0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5SW5kZXgsXHJcbiAgICAgICAgZnJlZVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldEl0ZW1LZXkoaXRlbSkge1xyXG4gICAgcmV0dXJuIGl0ZW0ua2V5XHJcbn0iLCJsZXQgdWlkID0gMFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVpZCgpIHtcclxuICAgIHJldHVybiArK3VpZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVlRFWFQgPSAxXHJcbmV4cG9ydCBjb25zdCBWRUxFTUVOVCA9IDJcclxuZXhwb3J0IGNvbnN0IFZTVEFURUxFU1MgPSAzXHJcbmV4cG9ydCBjb25zdCBWQ09NUE9ORU5UID0gNFxyXG5cclxuZXhwb3J0IGNvbnN0IE1PVkVTX0FERCA9ICdhZGQnXHJcbmV4cG9ydCBjb25zdCBNT1ZFU19ERUxFVEUgPSAnZGVsZXRlJ1xyXG5leHBvcnQgY29uc3QgTU9WRVNfUkVPUkRFUiA9ICdyZW9yZGVyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKGl0ZW0pIHtcclxuICAgIHJldHVybiB0eXBlKGl0ZW0pID09PSAnU3RyaW5nJ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHlwZShvYmopIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5yZXBsYWNlKC9cXFtvYmplY3RcXHN8XFxdL2csICcnKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hpbGRyZW5Gcm9tVmNvbXBvbmVudCh2Y29tcG9uZW50KSB7XHJcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdmNvbXBvbmVudC5wcm9wc1xyXG4gICAgbGV0IHZjaGlsZHJlbiA9IFtdXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgICBmbGF0RWFjaChjaGlsZHJlbiwgY29sbGVjdENoaWxkLCB2Y2hpbGRyZW4pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbGxlY3RDaGlsZChjaGlsZHJlbiwgdmNoaWxkcmVuKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZjaGlsZHJlblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGF0RWFjaChsaXN0LCBpdGVyYXRlZSwgYSkge1xyXG4gICAgbGV0IGxlbiA9IGxpc3QubGVuZ3RoXHJcbiAgICBsZXQgaSA9IC0xXHJcblxyXG4gICAgd2hpbGUgKGxlbi0tKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBsaXN0WysraV1cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xyXG4gICAgICAgICAgICBmbGF0RWFjaChpdGVtLCBpdGVyYXRlZSwgYSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVyYXRlZShpdGVtLCBhKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RDaGlsZChjaGlsZCwgY2hpbGRyZW4pIHtcclxuICAgIGlmIChjaGlsZCAhPSBudWxsICYmIHR5cGVvZiBjaGlsZCAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgaWYgKCFjaGlsZC52dHlwZSkge1xyXG4gICAgICAgICAgICAvLyBjb252ZXJ0IGltbXV0YWJsZWpzIGRhdGFcclxuICAgICAgICAgICAgaWYgKGNoaWxkLnRvSlMpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkID0gY2hpbGQudG9KUygpXHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGF0RWFjaChjaGlsZCwgY29sbGVjdENoaWxkLCBjaGlsZHJlbilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdENoaWxkKGNoaWxkLCBjaGlsZHJlbilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoaWxkID0gJycgKyBjaGlsZFxyXG4gICAgICAgIH1cclxuICAgICAgICBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGhdID0gY2hpbGRcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIERPTSBmcm9tICcuL0RPTSdcclxuaW1wb3J0IHsgZ2V0VWlkIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IHsgZGlmZkxpc3QgfSBmcm9tICcuL2xpc3QtZGlmZidcclxuaW1wb3J0IHtcclxuICAgIFZURVhULFxyXG4gICAgVkVMRU1FTlQsXHJcbiAgICBWU1RBVEVMRVNTLFxyXG4gICAgVkNPTVBPTkVOVCxcclxuICAgIGdldENoaWxkcmVuRnJvbVZjb21wb25lbnQsXHJcbiAgICBNT1ZFU19BREQsXHJcbiAgICBNT1ZFU19ERUxFVEUsXHJcbiAgICBNT1ZFU19SRU9SREVSLFxyXG4gICAgaXNTdHJpbmdcclxufSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZjb21wb25lbnQoeyB2dHlwZSwgdHlwZSwgcHJvcHMsIGtleSwgcmVmIH0pIHtcclxuICAgIGxldCB2Y29tcG9uZW50ID0ge1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgcHJvcHMsXHJcbiAgICAgICAgdnR5cGUsXHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIHJlZlxyXG4gICAgfVxyXG4gICAgaWYgKHZ0eXBlID09PSBWQ09NUE9ORU5UKSB7XHJcbiAgICAgICAgdmNvbXBvbmVudC51aWQgPSBnZXRVaWQoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZjb21wb25lbnRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRWbm9kZSh2Y29tcG9uZW50KSB7XHJcbiAgICBsZXQgeyB2dHlwZSB9ID0gdmNvbXBvbmVudCxcclxuICAgICAgICBub2RlID0gbnVsbFxyXG4gICAgaWYgKCF2dHlwZSkgeyAvLyBpbml0IHRleHRcclxuICAgICAgICBub2RlID0gaW5pdFRleHQodmNvbXBvbmVudClcclxuICAgIH0gZWxzZSBpZiAodnR5cGUgPT09IFZFTEVNRU5UKSB7XHJcbiAgICAgICAgbm9kZSA9IGluaXRFbGVtZW50KHZjb21wb25lbnQpXHJcbiAgICB9IGVsc2UgaWYgKHZ0eXBlID09PSBWQ09NUE9ORU5UKSB7XHJcbiAgICAgICAgbm9kZSA9IGluaXRDb21wb25lbnQodmNvbXBvbmVudClcclxuICAgIH0gZWxzZSBpZiAodnR5cGUgPT09IFZTVEFURUxFU1MpIHtcclxuICAgICAgICBub2RlID0gaW5pdFN0YXRlbGVzcyh2Y29tcG9uZW50KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUZXh0KHRleHQpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEVsZW1lbnQodmNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgeyB0eXBlLCBwcm9wcyB9ID0gdmNvbXBvbmVudFxyXG4gICAgbGV0IHZjaGlsZHJlbiA9IGdldENoaWxkcmVuRnJvbVZjb21wb25lbnQodmNvbXBvbmVudClcclxuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxyXG4gICAgc2V0UHJvcHMobm9kZSwgcHJvcHMpXHJcbiAgICB2Y2hpbGRyZW4uZm9yRWFjaChjaGlsZFZub2RlID0+IHtcclxuICAgICAgICBET00uYXBwZW5kQ2hpbGRyZW4obm9kZSwgaW5pdFZub2RlKGNoaWxkVm5vZGUpKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gbm9kZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbXBvbmVudCh2Y29tcG9uZW50KSB7XHJcbiAgICBjb25zdCB7IHR5cGU6IENvbXBvbmVudCwgcHJvcHMsIHVpZCB9ID0gdmNvbXBvbmVudFxyXG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudChwcm9wcylcclxuICAgIGNvbnN0IHsgJGNhY2hlOiBjYWNoZSB9ID0gY29tcG9uZW50XHJcbiAgICBjb25zdCB2bm9kZSA9IHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpXHJcbiAgICBjb25zdCBub2RlID0gaW5pdFZub2RlKHZub2RlKVxyXG4gICAgbm9kZS5jYWNoZSA9IG5vZGUuY2FjaGUgfHwge31cclxuICAgIG5vZGUuY2FjaGVbdWlkXSA9IGNvbXBvbmVudFxyXG4gICAgY2FjaGUudm5vZGUgPSB2bm9kZVxyXG4gICAgY2FjaGUubm9kZSA9IG5vZGVcclxuICAgIGNhY2hlLmlzTW91bnRlZCA9IHRydWVcclxuICAgIHJldHVybiBub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RhdGVsZXNzKHZjb21wb25lbnQpIHtcclxuICAgIGNvbnN0IHsgdWlkIH0gPSB2Y29tcG9uZW50XHJcbiAgICBjb25zdCB2bm9kZSA9IGdldFN0YXRlbGVzcyh2Y29tcG9uZW50KVxyXG4gICAgY29uc3Qgbm9kZSA9IGluaXRWbm9kZSh2bm9kZSlcclxuICAgIG5vZGUuY2FjaGUgPSBub2RlLmNhY2hlIHx8IHt9XHJcbiAgICBub2RlLmNhY2hlW3VpZF0gPSB2bm9kZVxyXG4gICAgcmV0dXJuIG5vZGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlbGVzcyh2Y29tcG9uZW50KSB7XHJcbiAgICBjb25zdCB7IHR5cGU6IGZhY3RvcnksIHByb3BzLCB1aWQgfSA9IHZjb21wb25lbnRcclxuICAgIGxldCB2bm9kZSA9IGZhY3RvcnkocHJvcHMpXHJcbiAgICBpZiAodm5vZGUgJiYgdm5vZGUucmVuZGVyKSB7XHJcbiAgICAgICAgdm5vZGUgPSB2bm9kZS5yZW5kZXIoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gY29tcG9uZW50LnJlbmRlcigpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95Vm5vZGUodmNvbXBvbmVudCwgbm9kZSkge1xyXG4gICAgY29uc3QgeyB2dHlwZSB9ID0gdmNvbXBvbmVudFxyXG4gICAgaWYgKHZ0eXBlID09PSBWRUxFTUVOVCkge1xyXG5cclxuICAgIH0gZWxzZSBpZiAodnR5cGUgPT09IFZDT01QT05FTlQpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVHdvVm5vZGVzKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSkge1xyXG4gICAgbGV0IG5ld05vZGUgPSBub2RlXHJcbiAgICBpZiAoIW5ld1Zub2RlKSB7XHJcbiAgICAgICAgLy/lpoLmnpzmlrDoioLngrnmmK/nqbrvvIzplIDmr4Fub2Rl5bm25LiU56e756e76ZmkXHJcbiAgICAgICAgZGVzdHJveVZub2RlKG9sZFZub2RlLCBub2RlKVxyXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKVxyXG4gICAgfSBlbHNlIGlmIChvbGRWbm9kZS50eXBlICE9PSBuZXdWbm9kZS50eXBlIHx8IG9sZFZub2RlLmtleSAhPT0gbmV3Vm5vZGUua2V5KSB7XHJcbiAgICAgICAgLy90eXBl5oiW6ICFa2V55LiN5ZCM77yM5a6M5YWo6YeN5p6EXHJcbiAgICAgICAgZGVzdHJveVZub2RlKG9sZFZub2RlLCBub2RlKVxyXG4gICAgICAgIG5ld05vZGUgPSBpbml0Vm5vZGUobmV3Vm5vZGUpXHJcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBub2RlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL+mdnuS4iui/sOaDheWGteWImeabtOaWsFxyXG4gICAgICAgIG5ld05vZGUgPSB1cGRhdGVWbm9kZShvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3Tm9kZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVm5vZGUob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKSB7XHJcbiAgICBjb25zdCB7IHZ0eXBlLCB0eXBlIH0gPSBvbGRWbm9kZVxyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgICAgaWYgKG9sZFZub2RlICE9PSBuZXdWbm9kZSkge1xyXG4gICAgICAgICAgICBub2RlLmRhdGEgPSBuZXdWbm9kZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9kZVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh2dHlwZSA9PT0gVkNPTVBPTkVOVCkge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVWY29tcG9uZW50KG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSlcclxuICAgIH1cclxuICAgIGlmICh2dHlwZSA9PT0gVlNUQVRFTEVTUykge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVTdGF0ZWxlc3Mob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh2dHlwZSA9PT0gVkVMRU1FTlQpIHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlRWxlbWVudChvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWY29tcG9uZW50KHZjb21wb25lbnQsIG5ld1Zjb21wb25lbnQsIG5vZGUpIHtcclxuICAgIGxldCB1aWQgPSB2Y29tcG9uZW50LnVpZFxyXG4gICAgbGV0IGNvbXBvbmVudCA9IG5vZGUuY2FjaGVbdWlkXVxyXG4gICAgbGV0IHsgJHVwZGF0ZXI6IHVwZGF0ZXIsICRjYWNoZTogY2FjaGUgfSA9IGNvbXBvbmVudFxyXG4gICAgbm9kZS5jYWNoZVtuZXdWY29tcG9uZW50LnVpZF0gPSBjb21wb25lbnRcclxuICAgIGNvbXBvbmVudC5mb3JjZVVwZGF0ZSgpXHJcbiAgICByZXR1cm4gY2FjaGUubm9kZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RhdGVsZXNzKHZjb21wb25lbnQsIG5ld1Zjb21wb25lbnQsIG5vZGUpIHtcclxuICAgIGxldCB1aWQgPSB2Y29tcG9uZW50LnVpZFxyXG4gICAgbGV0IHZub2RlID0gbm9kZS5jYWNoZVt1aWRdXHJcbiAgICBkZWxldGUgbm9kZS5jYWNoZVt1aWRdXHJcbiAgICBsZXQgbmV3Vm5vZGUgPSBnZXRTdGF0ZWxlc3MobmV3VmNvbXBvbmVudClcclxuICAgIGxldCBuZXdOb2RlID0gY29tcGFyZVR3b1Zub2Rlcyh2bm9kZSwgbmV3Vm5vZGUsIG5vZGUpXHJcbiAgICBuZXdOb2RlLmNhY2hlID0gbmV3Tm9kZS5jYWNoZSB8fCB7fVxyXG4gICAgbmV3Tm9kZS5jYWNoZVt1aWRdID0gbmV3Vm5vZGVcclxuICAgIHJldHVybiBuZXdWbm9kZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRWxlbWVudChvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpIHtcclxuICAgIGxldCBkaWZmUHJvcHMgPSBnZXREaWZmUHJvcHMob2xkVm5vZGUucHJvcHMsIG5ld1Zub2RlLnByb3BzKVxyXG4gICAgZGlmZlByb3BzICYmIHNldFByb3BzKG5vZGUsIGRpZmZQcm9wcylcclxuICAgIHVwZGF0ZUNoaWxkcmVuKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSlcclxuICAgIHJldHVybiBub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbihvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpIHtcclxuICAgIGxldCB7IGRpZmYsIG5ld0NoaWxkcmVuLCBjaGlsZHJlbiB9ID0gZGlmZkxpc3Qob2xkVm5vZGUsIG5ld1Zub2RlKVxyXG4gICAgbGV0IGNoaWxkTm9kZXMgPSBub2RlLmNoaWxkTm9kZXNcclxuICAgIGxldCBqID0gMFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChuZXdDaGlsZHJlbiAhPT0gJ2xpc3ROdWxsJykgey8vbGlzdE51bGzor7TmmI7pnIDopoHliKDmjonvvIzkvJrlnKhwYXRjaOmHjOWIoOmZpFxyXG4gICAgICAgICAgICBjb21wYXJlVHdvVm5vZGVzKGNoaWxkcmVuW2ldLCBuZXdDaGlsZHJlbltpXSwgY2hpbGROb2Rlc1tpIC0gal0pXHJcbiAgICAgICAgICAgIGlmIChuZXdDaGlsZHJlbltpXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpxuZXdDaGlsZHJlbltpXSDmmK9udWxs77yM6K+05piO5LiN5bima2V55bm25LiU5bey57uP6KKr5Yig6Zmk5LqG77yMbm9kZXPpnIDopoHlkJHliY3nnqznp7vkuIDkvY1cclxuICAgICAgICAgICAgICAgIGorK1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBhdGNoQ2hpbGRyZW4obm9kZSwgZGlmZilcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERpZmZQcm9wcyhwcm9wcywgbmV3UHJvcHMpIHtcclxuICAgIGxldCBjaGFuZ2VQcm9wcyA9IHt9LFxyXG4gICAgICAgIGNvdW50ID0gMCxcclxuICAgICAgICBpZ25vcmVMaXN0ID0gWydjaGlsZHJlbicsICdrZXknXVxyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBwcm9wcykge1xyXG4gICAgICAgIGlmIChuZXdQcm9wc1tuYW1lXSAhPT0gcHJvcHNbbmFtZV0gJiYgaWdub3JlTGlzdC5pbmRleE9mKG5hbWUpIDwgMCkge1xyXG4gICAgICAgICAgICBjaGFuZ2VQcm9wc1tuYW1lXSA9IG5ld1Byb3BzW25hbWVdXHJcbiAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIG5ld1Byb3BzKSB7XHJcbiAgICAgICAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBpZ25vcmVMaXN0LmluZGV4T2YobmFtZSkgPCAwKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZVByb3BzW25hbWVdID0gbmV3UHJvcHNbbmFtZV1cclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudCA+IDAgJiYgY2hhbmdlUHJvcHNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb3BzKG5vZGUsIHByb3BzKSB7XHJcbiAgICBsZXQgaWdub3JlTGlzdCA9IFsnY2hpbGRyZW4nLCAna2V5J11cclxuICAgIGZvciAobGV0IG5hbWUgaW4gcHJvcHMpIHtcclxuICAgICAgICBpZiAoaWdub3JlTGlzdC5maW5kKHJlcyA9PiByZXMgPT09IG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnc3R5bGUnKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZU9iamVjdCA9IHByb3BzW25hbWVdXHJcbiAgICAgICAgICAgIGZvciAobGV0IHNLZXkgaW4gc3R5bGVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbc0tleV0gPSBzdHlsZU9iamVjdFtzS2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHByb3BzW25hbWVdKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hDaGlsZHJlbihub2RlLCBkaWZmKSB7XHJcbiAgICBsZXQgY2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2Rlc1xyXG4gICAgZGlmZi5sZW5ndGggPiAwICYmIGRpZmYuZm9yRWFjaChmdW5jdGlvbiAoc2luZ2xlRGlmZikge1xyXG4gICAgICAgIHN3aXRjaCAoc2luZ2xlRGlmZi50eXBlKSB7XHJcbiAgICAgICAgICAgIC8vZGVsZXRlXHJcbiAgICAgICAgICAgIGNhc2UgTU9WRVNfREVMRVRFOlxyXG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW3NpbmdsZURpZmYuaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgLy9hZGRcclxuICAgICAgICAgICAgY2FzZSBNT1ZFU19BREQ6XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IGlzU3RyaW5nKHNpbmdsZURpZmYuaXRlbSkgPyBzaW5nbGVEaWZmLml0ZW0gOiBpbml0Vm5vZGUoc2luZ2xlRGlmZi5pdGVtKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID4gc2luZ2xlRGlmZi5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIGNoaWxkTm9kZXNbc2luZ2xlRGlmZi5pbmRleF0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIC8vbW92ZVxyXG4gICAgICAgICAgICBjYXNlIE1PVkVTX1JFT1JERVI6XHJcbiAgICAgICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShjaGlsZE5vZGVzW3NpbmdsZURpZmYub2xkSW5kZXhdLCBjaGlsZE5vZGVzW3NpbmdsZURpZmYubmV3SW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==