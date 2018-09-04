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

/***/ "./src/component/app.js":
/*!******************************!*\
  !*** ./src/component/app.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test */ "./src/component/test.js");

const { Component } = _utils__WEBPACK_IMPORTED_MODULE_0__["default"];


class App extends Component {
    constructor(props) {
        super(props);

        this.alert = () => {
            console.log(this);
            console.log(1);
        };

        this.testChange = (event, str) => {
            console.log(event.target.value);
            this.setState({
                inputValue: event.target.value
            });
        };

        this.state = {
            first: 1,
            inputValue: 0,
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

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                first: 2
            });
        }, 1000);
    }

    cons(event, key) {
        console.log('target');
        console.log(event.target);
        console.log("res.key => ", key);
    }

    render() {
        return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
            'div',
            null,
            this.state.first,
            _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
                'span',
                null,
                _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
                    'ul',
                    null,
                    this.state.ullist.map(res => _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
                        'li',
                        { key: res.key,
                            onClick: event => this.cons(event, res.key)
                        },
                        res.value
                    ))
                ),
                _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('input', {
                    onChange: event => this.testChange(event, 'str'),
                    value: this.state.inputValue }),
                _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
                    'h1',
                    { style: this.state.color,
                        onClick: this.alert
                    },
                    'Heading 1'
                ),
                _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_test__WEBPACK_IMPORTED_MODULE_1__["default"], null),
                _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Allow, { ppp: this.state.first }),
                _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
                    'h2',
                    null,
                    'Heading 2 ',
                    this.state.first
                ),
                _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
                    'div',
                    null,
                    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
                        'h1',
                        null,
                        this.state.first
                    ),
                    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
                        'h2',
                        null,
                        '2'
                    ),
                    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
                        'h3',
                        null,
                        '3'
                    )
                )
            ),
            _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
                'h3',
                null,
                'Heading 3'
            )
        );
    }
}

function Allow({ ppp }) {
    return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
        'div',
        null,
        ppp,
        ' + \u8FD9\u662F\u7EAF\u51FD\u6570'
    );
}

/***/ }),

/***/ "./src/component/test.js":
/*!*******************************!*\
  !*** ./src/component/test.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmallHeader; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

const { Component } = _utils__WEBPACK_IMPORTED_MODULE_0__["default"];

class SmallHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aaa: 1
        };
        let aaa = 1;
    }
    compomentDidMount() {
        setTimeout(() => {
            this.setState({
                aaa: ++aaa
            });
        }, 300);
    }
    render() {
        return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
            'h5',
            null,
            this.state.aaa,
            ' +++ \u8FD9\u662F\u5185\u90E8component'
        );
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony import */ var _component_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/app */ "./src/component/app.js");



_utils__WEBPACK_IMPORTED_MODULE_0__["default"].render(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_component_app__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('root'));

/***/ }),

/***/ "./src/utils/Component.js":
/*!********************************!*\
  !*** ./src/utils/Component.js ***!
  \********************************/
/*! exports provided: updateQueue, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQueue", function() { return updateQueue; });
/* harmony import */ var _virturn_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virturn-dom */ "./src/utils/virturn-dom.js");


const ReactComponentSymbol = {};

let updateQueue = {
    isPending: false
};
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
        let { vnode, node } = $cache;
        let newVnode = Object(_virturn_dom__WEBPACK_IMPORTED_MODULE_0__["renderComponent"])(this);
        $cache.vnode = newVnode;
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
    // if (finalChildren) {
    finalProps.children = finalChildren || [];
    // }
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

/***/ "./src/utils/event-system.js":
/*!***********************************!*\
  !*** ./src/utils/event-system.js ***!
  \***********************************/
/*! exports provided: eventList, unbubbleEvents, addEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventList", function() { return eventList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbubbleEvents", function() { return unbubbleEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
const eventList = ['onClick', 'onChange'];
// event config
const unbubbleEvents = {
    /**
     * should not bind mousemove in document scope
     * even though mousemove event can bubble
     */
    onmousemove: 1,
    ontouchmove: 1,
    onmouseleave: 1,
    onmouseenter: 1,
    onload: 1,
    onunload: 1,
    onscroll: 1,
    onfocus: 1,
    onblur: 1,
    onrowexit: 1,
    onbeforeunload: 1,
    onstop: 1,
    ondragdrop: 1,
    ondragenter: 1,
    ondragexit: 1,
    ondraggesture: 1,
    ondragover: 1,
    oncontextmenu: 1,
    onerror: 1,

    // media event
    onabort: 1,
    oncanplay: 1,
    oncanplaythrough: 1,
    ondurationchange: 1,
    onemptied: 1,
    onended: 1,
    onloadeddata: 1,
    onloadedmetadata: 1,
    onloadstart: 1,
    onencrypted: 1,
    onpause: 1,
    onplay: 1,
    onplaying: 1,
    onprogress: 1,
    onratechange: 1,
    onseeking: 1,
    onseeked: 1,
    onstalled: 1,
    onsuspend: 1,
    ontimeupdate: 1,
    onvolumechange: 1,
    onwaiting: 1
};

function getEventName(key) {
    if (key === 'onDoubleClick') {
        key = 'ondblclick';
    } else if (key === 'onTouchTap') {
        key = 'onclick';
    }

    return key.toLowerCase();
}

const eventTypes = {};
function addEvent(node, eventName, eventContent) {
    // const tagName = node.tagName
    // console.log(tagName)
    eventName = getEventName(eventName);
    let eventType = node.eventType || (node.eventType = {});
    eventType[eventName] = eventContent;
    if (unbubbleEvents.hasOwnProperty(eventName)) {
        //不可冒泡的
    } else if (!eventTypes[eventName]) {
        //可冒泡的，只需要绑定一次
        eventTypes[eventName] = true;
        //去掉前面的on
        document.addEventListener(eventName.substr(2), dispatchEvent, false);
    }

    if (eventName === 'onchange' && isSupportChange(node)) {
        addEvent(node, 'oninput', eventContent);
    }
}

function dispatchEvent(event) {
    let { type, target } = event;
    let eventName = 'on' + type;
    while (target) {
        let eventType = target.eventType || (target.eventType = {});
        let listener = eventType[eventName];
        if (!listener) {
            target = target.parentNode;
            continue;
        }
        listener.call(target, event);
        target = target.parentNode;
    }
}

function isSupportChange(target) {
    const tagName = target.tagName.toLowerCase();
    return tagName === 'input' || tagName === 'select' || tagName === 'textarea';
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
/* harmony import */ var _event_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-system */ "./src/utils/event-system.js");






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
    if (component.componentWillMount) {
        component.componentWillMount();
    }
    const { $cache: cache } = component;
    const vnode = renderComponent(component);
    const node = initVnode(vnode);
    if (component.componentDidMount) {
        component.componentDidMount();
    }
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
    const { type: factory, props } = vcomponent;
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
        } else if (_event_system__WEBPACK_IMPORTED_MODULE_3__["eventList"].indexOf(name) >= 0) {
            Object(_event_system__WEBPACK_IMPORTED_MODULE_3__["addEvent"])(node, name, props[name]);
            continue;
        } else if (typeof props[name] === "function") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC90ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL01vdW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ldmVudC1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9saXN0LWRpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92aXJ0dXJuLWRvbS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJBcHAiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwidGVzdENoYW5nZSIsImV2ZW50Iiwic3RyIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImlucHV0VmFsdWUiLCJzdGF0ZSIsImZpcnN0IiwiY29sb3IiLCJ1bGxpc3QiLCJrZXkiLCJzZXRUaW1lb3V0IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zIiwicmVuZGVyIiwibWFwIiwicmVzIiwiQWxsb3ciLCJwcHAiLCJTbWFsbEhlYWRlciIsImFhYSIsImNvbXBvbWVudERpZE1vdW50IiwiTXJlYWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0Q29tcG9uZW50U3ltYm9sIiwidXBkYXRlUXVldWUiLCJpc1BlbmRpbmciLCJVcGRhdGVyIiwiaW5zdGFuY2UiLCJwZW5kaW5nU3RhdGVzIiwiYWRkU3RhdGUiLCJuZXh0U3RhdGUiLCJwdXNoIiwiZW1pdFVwZGF0ZSIsInVwZGF0ZUNvbXBvbmVudCIsImdldFN0YXRlIiwiX3BlbmRpbmdTdGF0ZSIsImxlbmd0aCIsInBhcnRpYWxTdGF0ZSIsInNoaWZ0IiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yY2VVcGRhdGUiLCIkdXBkYXRlciIsIiRjYWNoZSIsImlzTW91bnRlZCIsImlzUmVhY3RDb21wb25lbnQiLCJjb250ZXh0Iiwidm5vZGUiLCJub2RlIiwibmV3Vm5vZGUiLCJyZW5kZXJDb21wb25lbnQiLCJjb21wYXJlVHdvVm5vZGVzIiwibW91bnRDb21wb25lbnQiLCJfY3VycmVudFZub2RlIiwiX1Zub2RlIiwiZ2V0Vm5vZGUiLCJfX2luc3RhbnNlUmVhY3RDb21wb25lbnQiLCJzaG91bGRVcGRhdGVDb21wb25lbnQiLCJwcmV2RWxlbWVudCIsIm5leHRFbGVtZW50IiwidHlwZSIsImVtcHR5Iiwic2xpY2UiLCJjYWxsIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZCIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGRyZW4iLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwicmVtb3ZlUHJvcGVydHkiLCJwcm9wZXJ0eSIsInJlbW92ZUF0dHJpYnV0ZU5vZGUiLCJzZXRQcm9wZXJ0eSIsInNldEF0dHJpYnV0ZSIsImluc2VydEFmdGVyIiwiYWZ0ZXJDaGlsZCIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJjb25maWciLCJ2dHlwZSIsInByb3RvdHlwZSIsIkVycm9yIiwicmVmIiwiZmluYWxQcm9wcyIsInByb3BLZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsImZpbmFsQ2hpbGRyZW4iLCJhcmd1TGVuZ3RoIiwiYXJndW1lbnRzIiwiaSIsImNyZWF0ZVZjb21wb25lbnQiLCJtb3VudCIsImVsZW1lbnQiLCJyZW5kZXJlZE5vZGUiLCJpbml0Vm5vZGUiLCJET00iLCJldmVudExpc3QiLCJ1bmJ1YmJsZUV2ZW50cyIsIm9ubW91c2Vtb3ZlIiwib250b3VjaG1vdmUiLCJvbm1vdXNlbGVhdmUiLCJvbm1vdXNlZW50ZXIiLCJvbmxvYWQiLCJvbnVubG9hZCIsIm9uc2Nyb2xsIiwib25mb2N1cyIsIm9uYmx1ciIsIm9ucm93ZXhpdCIsIm9uYmVmb3JldW5sb2FkIiwib25zdG9wIiwib25kcmFnZHJvcCIsIm9uZHJhZ2VudGVyIiwib25kcmFnZXhpdCIsIm9uZHJhZ2dlc3R1cmUiLCJvbmRyYWdvdmVyIiwib25jb250ZXh0bWVudSIsIm9uZXJyb3IiLCJvbmFib3J0Iiwib25jYW5wbGF5Iiwib25jYW5wbGF5dGhyb3VnaCIsIm9uZHVyYXRpb25jaGFuZ2UiLCJvbmVtcHRpZWQiLCJvbmVuZGVkIiwib25sb2FkZWRkYXRhIiwib25sb2FkZWRtZXRhZGF0YSIsIm9ubG9hZHN0YXJ0Iiwib25lbmNyeXB0ZWQiLCJvbnBhdXNlIiwib25wbGF5Iiwib25wbGF5aW5nIiwib25wcm9ncmVzcyIsIm9ucmF0ZWNoYW5nZSIsIm9uc2Vla2luZyIsIm9uc2Vla2VkIiwib25zdGFsbGVkIiwib25zdXNwZW5kIiwib250aW1ldXBkYXRlIiwib252b2x1bWVjaGFuZ2UiLCJvbndhaXRpbmciLCJnZXRFdmVudE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImV2ZW50VHlwZXMiLCJhZGRFdmVudCIsImV2ZW50TmFtZSIsImV2ZW50Q29udGVudCIsImV2ZW50VHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJzdHIiLCJkaXNwYXRjaEV2ZW50IiwiaXNTdXBwb3J0Q2hhbmdlIiwibGlzdGVuZXIiLCJwYXJlbnROb2RlIiwidGFnTmFtZSIsImRpZmZMaXN0Iiwib2xkVm5vZGUiLCJvbGRMaXN0IiwibmV3TGlzdCIsIm9sZE1hcCIsIm1ha2VLZXlJbmRleEFuZEZyZWUiLCJuZXdNYXAiLCJuZXdLZXlMaXN0Iiwia2V5SW5kZXgiLCJvbGRLZXlMaXN0IiwibmV3RnJlZUxpc3QiLCJmcmVlIiwiaXRlbSIsIml0ZW1LZXkiLCJnZXRJdGVtS2V5IiwibmV3SW5kZXgiLCJpbmRleE9mIiwiaiIsImsiLCJvbGRTb3J0TGlzdCIsImluZGV4IiwiZmlsdGVyTGlzdCIsImZpbHRlciIsIm9sZEluZGV4IiwiaW5zZXJ0Iiwic3BsaWNlIiwiZGlmZiIsIm5ld0NoaWxkcmVuIiwibGlzdCIsInVpZCIsImdldFVpZCIsIlZURVhUIiwiVkVMRU1FTlQiLCJWU1RBVEVMRVNTIiwiVkNPTVBPTkVOVCIsIk1PVkVTX0FERCIsIk1PVkVTX0RFTEVURSIsIk1PVkVTX1JFT1JERVIiLCJpc1N0cmluZyIsIm9iaiIsInRvU3RyaW5nIiwicmVwbGFjZSIsImdldENoaWxkcmVuRnJvbVZjb21wb25lbnQiLCJ2Y29tcG9uZW50IiwidmNoaWxkcmVuIiwiZmxhdEVhY2giLCJjb2xsZWN0Q2hpbGQiLCJpdGVyYXRlZSIsImEiLCJsZW4iLCJ0b0pTIiwiaW5pdFRleHQiLCJpbml0RWxlbWVudCIsImluaXRDb21wb25lbnQiLCJpbml0U3RhdGVsZXNzIiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwic2V0UHJvcHMiLCJjaGlsZFZub2RlIiwiY29tcG9uZW50IiwiY29tcG9uZW50V2lsbE1vdW50IiwiY2FjaGUiLCJnZXRTdGF0ZWxlc3MiLCJmYWN0b3J5IiwiZGVzdHJveVZub2RlIiwibmV3Tm9kZSIsInJlcGxhY2VDaGlsZCIsInVwZGF0ZVZub2RlIiwiZGF0YSIsInVwZGF0ZVZjb21wb25lbnQiLCJ1cGRhdGVTdGF0ZWxlc3MiLCJ1cGRhdGVFbGVtZW50IiwibmV3VmNvbXBvbmVudCIsInVwZGF0ZXIiLCJkaWZmUHJvcHMiLCJnZXREaWZmUHJvcHMiLCJ1cGRhdGVDaGlsZHJlbiIsInBhdGNoQ2hpbGRyZW4iLCJuZXdQcm9wcyIsImNoYW5nZVByb3BzIiwiY291bnQiLCJpZ25vcmVMaXN0IiwibmFtZSIsImZpbmQiLCJzdHlsZU9iamVjdCIsInNLZXkiLCJzdHls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bkQ7QUFDQTtBQWpCUjtBQW1CSCxLQXBCa0IsQ0FBbkI7QUFxQkgsQyIsImZpbGUiOiI1MTRkNDUyYjMxZWVkZGNjZGVjYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBNcmVhY3QgZnJvbSAnLi4vdXRpbHMnXG5jb25zdCB7IENvbXBvbmVudCB9ID0gTXJlYWN0XG5pbXBvcnQgU21hbGxIZWFkZXIgZnJvbSAnLi90ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZmlyc3Q6IDEsXG4gICAgICAgICAgICBpbnB1dFZhbHVlOjAsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdWxsaXN0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJhKytcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYlwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJiKytcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJjKytcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJkKytcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZmlyc3QgPSAxXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZmlyc3Q6ICsrZmlyc3QsXG4gICAgICAgICAgICAgICAgdWxsaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZ1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJnKytcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJkKytiaWFuaHVhXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImVcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiZSsrXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiYSsrXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImNcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiYSsr5pys5p2l5pivY1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJmXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImYrK1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDIwMDApXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZmlyc3Q6IDJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgYWxlcnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICAgIGNvbnNvbGUubG9nKDEpXG4gICAgfVxuICAgIGNvbnMoZXZlbnQsIGtleSkge1xuICAgICAgICBjb25zb2xlLmxvZygndGFyZ2V0JylcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxuICAgICAgICBjb25zb2xlLmxvZyhcInJlcy5rZXkgPT4gXCIsIGtleSlcbiAgICB9XG4gICAgdGVzdENoYW5nZSA9IChldmVudCwgc3RyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maXJzdH1cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudWxsaXN0Lm1hcChyZXMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtyZXMua2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB0aGlzLmNvbnMoZXZlbnQsIHJlcy5rZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57cmVzLnZhbHVlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnRlc3RDaGFuZ2UoZXZlbnQsICdzdHInKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17dGhpcy5zdGF0ZS5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWxlcnR9XG4gICAgICAgICAgICAgICAgICAgID5IZWFkaW5nIDE8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8U21hbGxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEFsbG93IHBwcD17dGhpcy5zdGF0ZS5maXJzdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyID5IZWFkaW5nIDIge3RoaXMuc3RhdGUuZmlyc3R9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5maXJzdH08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjI8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzPkhlYWRpbmcgMzwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gQWxsb3coeyBwcHAgfSkge1xuICAgIHJldHVybiA8ZGl2PntwcHB9ICsg6L+Z5piv57qv5Ye95pWwPC9kaXY+XG59IiwiaW1wb3J0IE1yZWFjdCBmcm9tICcuLi91dGlscydcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBNcmVhY3RcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hbGxIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWFhOiAxXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFhYSA9IDFcblxuICAgIH1cbiAgICBjb21wb21lbnREaWRNb3VudCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhYWE6ICsrYWFhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAzMDApXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoNT57dGhpcy5zdGF0ZS5hYWF9ICsrKyDov5nmmK/lhoXpg6hjb21wb25lbnQ8L2g1PlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IE1yZWFjdCBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudC9hcHAnXG5cbk1yZWFjdC5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkiLCJpbXBvcnQgeyByZW5kZXJDb21wb25lbnQsIGNvbXBhcmVUd29Wbm9kZXMgfSBmcm9tICcuL3ZpcnR1cm4tZG9tJ1xuXG5jb25zdCBSZWFjdENvbXBvbmVudFN5bWJvbCA9IHt9XG5cbmV4cG9ydCBsZXQgdXBkYXRlUXVldWUgPSB7XG4gICAgaXNQZW5kaW5nOmZhbHNlLFxufVxuY2xhc3MgVXBkYXRlciB7XG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgICAgIHRoaXMucGVuZGluZ1N0YXRlcyA9IFtdXG4gICAgfVxuXG4gICAgYWRkU3RhdGUobmV4dFN0YXRlKSB7XG4gICAgICAgIHRoaXMucGVuZGluZ1N0YXRlcy5wdXNoKG5leHRTdGF0ZSlcbiAgICB9XG4gICAgZW1pdFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQoKVxuICAgIH1cbiAgICBnZXRTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyBpbnN0YW5jZSB9ID0gdGhpc1xuICAgICAgICBsZXQgX3BlbmRpbmdTdGF0ZSA9IGluc3RhbmNlLnN0YXRlXG4gICAgICAgIHdoaWxlICh0aGlzLnBlbmRpbmdTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHBhcnRpYWxTdGF0ZSA9IHRoaXMucGVuZGluZ1N0YXRlcy5zaGlmdCgpXG4gICAgICAgICAgICBfcGVuZGluZ1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2Uuc3RhdGUsIHBhcnRpYWxTdGF0ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3BlbmRpbmdTdGF0ZVxuICAgIH1cblxuICAgIHVwZGF0ZUNvbXBvbmVudCgpIHtcbiAgICAgICAgbGV0IHsgaW5zdGFuY2UgfSA9IHRoaXNcbiAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKVxuICAgIH1cbn1cblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLiR1cGRhdGVyID0gbmV3IFVwZGF0ZXIodGhpcylcbiAgICAgICAgdGhpcy4kY2FjaGUgPSB7XG4gICAgICAgICAgICBpc01vdW50ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzXG4gICAgfVxuXG4gICAgaXNSZWFjdENvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0Q29tcG9uZW50U3ltYm9sXG4gICAgfVxuXG4gICAgZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGxldCB7ICR1cGRhdGVyLCAkY2FjaGUsIHByb3BzLCBjb250ZXh0IH0gPSB0aGlzXG4gICAgICAgIHRoaXMuc3RhdGUgPSAkdXBkYXRlci5nZXRTdGF0ZSgpXG4gICAgICAgIGxldCB7IHZub2RlLCBub2RlIH0gPSAkY2FjaGVcbiAgICAgICAgbGV0IG5ld1Zub2RlID0gcmVuZGVyQ29tcG9uZW50KHRoaXMpXG4gICAgICAgICRjYWNoZS52bm9kZSA9IG5ld1Zub2RlXG4gICAgICAgIHJldHVybiBjb21wYXJlVHdvVm5vZGVzKHZub2RlLCBuZXdWbm9kZSwgbm9kZSlcbiAgICB9XG5cbiAgICBtb3VudENvbXBvbmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRWbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9Wbm9kZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IF9Wbm9kZSA9IHRoaXMuZ2V0Vm5vZGUoKVxuICAgICAgICBfVm5vZGUuX19pbnN0YW5zZVJlYWN0Q29tcG9uZW50ID0gdGhpc1xuICAgICAgICB0aGlzLl9jdXJyZW50Vm5vZGUgPSBfVm5vZGVcbiAgICAgICAgcmV0dXJuIF9Wbm9kZVxuICAgIH1cbiAgICBzZXRTdGF0ZShwYXJ0aWFsU3RhdGUpIHtcbiAgICAgICAgdGhpcy4kdXBkYXRlci5hZGRTdGF0ZShwYXJ0aWFsU3RhdGUpXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlQ29tcG9uZW50KHByZXZFbGVtZW50LCBuZXh0RWxlbWVudCkge1xuICAgIHJldHVybiBwcmV2RWxlbWVudC50eXBlID09PSBuZXh0RWxlbWVudC50eXBlXG59XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQiLCJleHBvcnQgZnVuY3Rpb24gZW1wdHkobm9kZSkge1xuICAgIFtdLnNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZClcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKG5vZGUsIGNoaWxkcmVuKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkcmVuID09PSAnbnVtYmVyJykge1xuICAgICAgICBub2RlLmFwcGVuZChjaGlsZHJlbilcbiAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkcmVuKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BlcnR5KG5vZGUsIHByb3BlcnR5KSB7XG4gICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGVOb2RlKHByb3BlcnR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHZhbHVlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobm9kZSwgY2hpbGQsIGFmdGVyQ2hpbGQpIHtcbiAgICBub2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgY2hpbGQsXG4gICAgICAgIGFmdGVyQ2hpbGQgPyBhZnRlckNoaWxkLm5leHRTaWJsaW5nIDogbm9kZS5maXJzdENoaWxkXG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGQpIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKVxufSIsImltcG9ydCB7IGNyZWF0ZVZjb21wb25lbnQgfSBmcm9tICcuL3ZpcnR1cm4tZG9tJ1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCdcbmltcG9ydCB7XG4gICAgVlRFWFQsXG4gICAgVkVMRU1FTlQsXG4gICAgVlNUQVRFTEVTUyxcbiAgICBWQ09NUE9ORU5UXG59IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICAgIGxldCB2dHlwZSA9IG51bGxcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgdnR5cGUgPSBWVEVYVFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZ0eXBlID0gVkVMRU1FTlRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgICAgICAgICB2dHlwZSA9IFZDT01QT05FTlRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZ0eXBlID0gVlNUQVRFTEVTU1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWFjdC5jcmVhdGVFbGVtZW50OiB1bmV4cGVjdCB0eXBlIFsgJHt0eXBlfSBdYClcbiAgICB9XG5cbiAgICBsZXQga2V5ID0gbnVsbCxcbiAgICAgICAgcmVmID0gbnVsbFxuICAgIGxldCBmaW5hbFByb3BzID0ge31cbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvcEtleSBpbiBjb25maWcpIHtcbiAgICAgICAgICAgIGlmICghY29uZmlnLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wS2V5ID09PSAna2V5Jykge1xuICAgICAgICAgICAgICAgIGtleSA9ICcnICsgY29uZmlnW3Byb3BLZXldXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BLZXkgPT09ICdyZWYnKSB7XG4gICAgICAgICAgICAgICAgcmVmID0gY29uZmlnW3Byb3BLZXldXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbmFsUHJvcHNbcHJvcEtleV0gPSBjb25maWdbcHJvcEtleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHNcbiAgICBpZiAoZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IHByb3BLZXkgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICBpZiAoZmluYWxQcm9wc1twcm9wS2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZmluYWxQcm9wc1twcm9wS2V5XSA9IGRlZmF1bHRQcm9wc1twcm9wS2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGZpbmFsQ2hpbGRyZW4gPSBjaGlsZHJlblxuICAgIGxldCBhcmd1TGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIGlmIChhcmd1TGVuZ3RoID4gMykge1xuICAgICAgICBmaW5hbENoaWxkcmVuID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBhcmd1TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZpbmFsQ2hpbGRyZW4ucHVzaChhcmd1bWVudHNbaV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgKGZpbmFsQ2hpbGRyZW4pIHtcbiAgICAgICAgZmluYWxQcm9wcy5jaGlsZHJlbiA9IGZpbmFsQ2hpbGRyZW4gfHwgW11cbiAgICAvLyB9XG4gICAgcmV0dXJuIGNyZWF0ZVZjb21wb25lbnQoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2dHlwZSxcbiAgICAgICAgcHJvcHM6IGZpbmFsUHJvcHMsXG4gICAgICAgIGtleSxcbiAgICAgICAgcmVmXG4gICAgfSlcbn0iLCJpbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET00nXG5pbXBvcnQgeyBpbml0Vm5vZGUgfSBmcm9tICcuL3ZpcnR1cm4tZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb3VudChlbGVtZW50LCBub2RlKSB7XG4gICAgLy9lbGVtZW50ID0+IGNvbXBvbmVudFxuICAgIGNvbnN0IHJlbmRlcmVkTm9kZSA9IGluaXRWbm9kZShlbGVtZW50KVxuICAgIERPTS5lbXB0eShub2RlKVxuICAgIERPTS5hcHBlbmRDaGlsZHJlbihub2RlLCByZW5kZXJlZE5vZGUpXG59XG4iLCJleHBvcnQgY29uc3QgZXZlbnRMaXN0ID0gW1xuICAgICdvbkNsaWNrJyxcbiAgICAnb25DaGFuZ2UnLFxuXVxuLy8gZXZlbnQgY29uZmlnXG5leHBvcnQgY29uc3QgdW5idWJibGVFdmVudHMgPSB7XG4gICAgLyoqXG4gICAgICogc2hvdWxkIG5vdCBiaW5kIG1vdXNlbW92ZSBpbiBkb2N1bWVudCBzY29wZVxuICAgICAqIGV2ZW4gdGhvdWdoIG1vdXNlbW92ZSBldmVudCBjYW4gYnViYmxlXG4gICAgICovXG4gICAgb25tb3VzZW1vdmU6IDEsXG4gICAgb250b3VjaG1vdmU6IDEsXG4gICAgb25tb3VzZWxlYXZlOiAxLFxuICAgIG9ubW91c2VlbnRlcjogMSxcbiAgICBvbmxvYWQ6IDEsXG4gICAgb251bmxvYWQ6IDEsXG4gICAgb25zY3JvbGw6IDEsXG4gICAgb25mb2N1czogMSxcbiAgICBvbmJsdXI6IDEsXG4gICAgb25yb3dleGl0OiAxLFxuICAgIG9uYmVmb3JldW5sb2FkOiAxLFxuICAgIG9uc3RvcDogMSxcbiAgICBvbmRyYWdkcm9wOiAxLFxuICAgIG9uZHJhZ2VudGVyOiAxLFxuICAgIG9uZHJhZ2V4aXQ6IDEsXG4gICAgb25kcmFnZ2VzdHVyZTogMSxcbiAgICBvbmRyYWdvdmVyOiAxLFxuICAgIG9uY29udGV4dG1lbnU6IDEsXG4gICAgb25lcnJvcjogMSxcblxuICAgIC8vIG1lZGlhIGV2ZW50XG4gICAgb25hYm9ydDogMSxcbiAgICBvbmNhbnBsYXk6IDEsXG4gICAgb25jYW5wbGF5dGhyb3VnaDogMSxcbiAgICBvbmR1cmF0aW9uY2hhbmdlOiAxLFxuICAgIG9uZW1wdGllZDogMSxcbiAgICBvbmVuZGVkOiAxLFxuICAgIG9ubG9hZGVkZGF0YTogMSxcbiAgICBvbmxvYWRlZG1ldGFkYXRhOiAxLFxuICAgIG9ubG9hZHN0YXJ0OiAxLFxuICAgIG9uZW5jcnlwdGVkOiAxLFxuICAgIG9ucGF1c2U6IDEsXG4gICAgb25wbGF5OiAxLFxuICAgIG9ucGxheWluZzogMSxcbiAgICBvbnByb2dyZXNzOiAxLFxuICAgIG9ucmF0ZWNoYW5nZTogMSxcbiAgICBvbnNlZWtpbmc6IDEsXG4gICAgb25zZWVrZWQ6IDEsXG4gICAgb25zdGFsbGVkOiAxLFxuICAgIG9uc3VzcGVuZDogMSxcbiAgICBvbnRpbWV1cGRhdGU6IDEsXG4gICAgb252b2x1bWVjaGFuZ2U6IDEsXG4gICAgb253YWl0aW5nOiAxLFxufVxuXG5mdW5jdGlvbiBnZXRFdmVudE5hbWUoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ29uRG91YmxlQ2xpY2snKSB7XG4gICAgICAgIGtleSA9ICdvbmRibGNsaWNrJ1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnb25Ub3VjaFRhcCcpIHtcbiAgICAgICAga2V5ID0gJ29uY2xpY2snXG4gICAgfVxuXG4gICAgcmV0dXJuIGtleS50b0xvd2VyQ2FzZSgpXG59XG5cbmNvbnN0IGV2ZW50VHlwZXMgPSB7fVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50KG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRDb250ZW50KSB7XG4gICAgLy8gY29uc3QgdGFnTmFtZSA9IG5vZGUudGFnTmFtZVxuICAgIC8vIGNvbnNvbGUubG9nKHRhZ05hbWUpXG4gICAgZXZlbnROYW1lID0gZ2V0RXZlbnROYW1lKGV2ZW50TmFtZSlcbiAgICBsZXQgZXZlbnRUeXBlID0gbm9kZS5ldmVudFR5cGUgfHwgKG5vZGUuZXZlbnRUeXBlID0ge30pXG4gICAgZXZlbnRUeXBlW2V2ZW50TmFtZV0gPSBldmVudENvbnRlbnRcbiAgICBpZiAodW5idWJibGVFdmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSkge1xuICAgICAgICAvL+S4jeWPr+WGkuazoeeahFxuICAgIH0gZWxzZSBpZiAoIWV2ZW50VHlwZXNbZXZlbnROYW1lXSkge1xuICAgICAgICAvL+WPr+WGkuazoeeahO+8jOWPqumcgOimgee7keWumuS4gOasoVxuICAgICAgICBldmVudFR5cGVzW2V2ZW50TmFtZV0gPSB0cnVlXG4gICAgICAgIC8v5Y675o6J5YmN6Z2i55qEb25cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUuc3Vic3RyKDIpLCBkaXNwYXRjaEV2ZW50LCBmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAoZXZlbnROYW1lID09PSAnb25jaGFuZ2UnICYmIGlzU3VwcG9ydENoYW5nZShub2RlKSkge1xuICAgICAgICBhZGRFdmVudChub2RlLCAnb25pbnB1dCcsIGV2ZW50Q29udGVudClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZXZlbnQpIHtcbiAgICBsZXQgeyB0eXBlLCB0YXJnZXQgfSA9IGV2ZW50XG4gICAgbGV0IGV2ZW50TmFtZSA9ICdvbicgKyB0eXBlXG4gICAgd2hpbGUgKHRhcmdldCkge1xuICAgICAgICBsZXQgZXZlbnRUeXBlID0gdGFyZ2V0LmV2ZW50VHlwZSB8fCAodGFyZ2V0LmV2ZW50VHlwZSA9IHt9KVxuICAgICAgICBsZXQgbGlzdGVuZXIgPSBldmVudFR5cGVbZXZlbnROYW1lXVxuICAgICAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lci5jYWxsKHRhcmdldCwgZXZlbnQpXG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1N1cHBvcnRDaGFuZ2UodGFyZ2V0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ2lucHV0JyB8fCB0YWdOYW1lID09PSAnc2VsZWN0JyB8fCB0YWdOYW1lID09PSAndGV4dGFyZWEnXG59IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9FbGVtZW50LmpzJ1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudC5qcydcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9Nb3VudC5qcydcblxuZXhwb3J0IGRlZmF1bHQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQsIHJlbmRlciB9XG4iLCJpbXBvcnQge1xuICAgIE1PVkVTX0FERCxcbiAgICBNT1ZFU19ERUxFVEUsXG4gICAgTU9WRVNfUkVPUkRFUixcbn0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZMaXN0KG9sZFZub2RlLCBuZXdWbm9kZSkge1xuICAgIGxldCBvbGRMaXN0ID0gb2xkVm5vZGUucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIG5ld0xpc3QgPSBuZXdWbm9kZS5wcm9wcy5jaGlsZHJlblxuICAgIG9sZExpc3QgPSBBcnJheS5pc0FycmF5KG9sZExpc3QpICYmIG9sZExpc3QgPyBvbGRMaXN0IDogW29sZExpc3RdXG4gICAgbmV3TGlzdCA9IEFycmF5LmlzQXJyYXkobmV3TGlzdCkgJiYgbmV3TGlzdCA/IG5ld0xpc3QgOiBbbmV3TGlzdF1cbiAgICBjb25zdCBvbGRNYXAgPSBtYWtlS2V5SW5kZXhBbmRGcmVlKG9sZExpc3QpLFxuICAgICAgICBuZXdNYXAgPSBtYWtlS2V5SW5kZXhBbmRGcmVlKG5ld0xpc3QpXG5cbiAgICBjb25zdCBuZXdLZXlMaXN0ID0gbmV3TWFwLmtleUluZGV4LFxuICAgICAgICBvbGRLZXlMaXN0ID0gb2xkTWFwLmtleUluZGV4XG5cbiAgICBjb25zdCBuZXdGcmVlTGlzdCA9IG5ld01hcC5mcmVlXG4gICAgbGV0IGRpZmZMaXN0ID0gW10sXG4gICAgICAgIGNoaWxkcmVuID0gW11cblxuICAgIG9sZExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUtleSA9IGdldEl0ZW1LZXkoaXRlbSlcbiAgICAgICAgaWYgKGl0ZW1LZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gbmV3S2V5TGlzdC5pbmRleE9mKGl0ZW1LZXkpXG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKFxuICAgICAgICAgICAgICAgIG5ld0luZGV4ID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyBuZXdMaXN0W25ld0luZGV4XVxuICAgICAgICAgICAgICAgICAgICA6ICdsaXN0TnVsbCdcbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2gobmV3RnJlZUxpc3Quc2hpZnQoKSB8fCBudWxsKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCBpID0gMCwgaiA9IDAsIGsgPSAwXG4gICAgLy/kuI3lj5hcbiAgICBjb25zdCBvbGRTb3J0TGlzdCA9IG9sZEtleUxpc3QubWFwKFxuICAgICAgICByZXMgPT4gbmV3S2V5TGlzdC5pbmRleE9mKHJlcykgPj0gMFxuICAgICAgICAgICAgPyBuZXdLZXlMaXN0LmluZGV4T2YocmVzKVxuICAgICAgICAgICAgOiBudWxsXG4gICAgKVxuXG4gICAgd2hpbGUgKGkgPCBvbGRTb3J0TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKG9sZFNvcnRMaXN0W2ldID09PSBudWxsKSB7XG4gICAgICAgICAgICBkaWZmTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogaSAtIGosXG4gICAgICAgICAgICAgICAgdHlwZTogTU9WRVNfREVMRVRFLy/liKDpmaRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2og55So5LqO5qih5Lu/5Yig6Zmk55qE5pON5L2cXG4gICAgICAgICAgICAvLyDlm6DkuLrnnJ/lrp7nmoToioLngrnliKDpmaTlkI7vvIxp6ZyA6KaB5ZCR5YmN56e75Yqo5LiA5L2NXG4gICAgICAgICAgICBqKytcbiAgICAgICAgfVxuICAgICAgICBpKytcbiAgICB9XG4gICAgLy/liKDpmaTlkI7nmoRvbGRTb3J0TGlzdFxuICAgIGxldCBmaWx0ZXJMaXN0ID0gb2xkU29ydExpc3QuZmlsdGVyKHJlcyA9PiByZXMgIT09IG51bGwpXG4gICAgd2hpbGUgKGsgPCBuZXdLZXlMaXN0Lmxlbmd0aCkge1xuICAgICAgICBsZXQgb2xkSW5kZXggPSBmaWx0ZXJMaXN0LmluZGV4T2YoaylcbiAgICAgICAgaWYgKG9sZEluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGlmIChrICE9PSBvbGRJbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBpbnNlcnQgPSBmaWx0ZXJMaXN0LnNwbGljZShvbGRJbmRleCwgMSlbMF1cbiAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0LnNwbGljZShrLCAwLCBpbnNlcnQpXG4gICAgICAgICAgICAgICAgZGlmZkxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4OiBrLFxuICAgICAgICAgICAgICAgICAgICBvbGRJbmRleDogb2xkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1PVkVTX1JFT1JERVIgLy/mjaLkvY3nva5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVyTGlzdC5zcGxpY2UoaywgMCwgaylcbiAgICAgICAgICAgIGRpZmZMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiBrLFxuICAgICAgICAgICAgICAgIGl0ZW06IG5ld0xpc3Rba10sXG4gICAgICAgICAgICAgICAgdHlwZTogTU9WRVNfQUREIC8v5paw5aKeXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGsrK1xuICAgIH1cblxuICAgIHdoaWxlIChuZXdGcmVlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRpZmZMaXN0LnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICAgIGl0ZW06IG5ld0ZyZWVMaXN0LnNoaWZ0KCksXG4gICAgICAgICAgICB0eXBlOiBNT1ZFU19BREQgLy/mlrDlop5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaWZmOiBkaWZmTGlzdCxcbiAgICAgICAgbmV3Q2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgICBjaGlsZHJlbjogb2xkTGlzdFxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBtYWtlS2V5SW5kZXhBbmRGcmVlKGxpc3QpIHtcbiAgICBsZXQga2V5SW5kZXggPSBbXSxcbiAgICAgICAgZnJlZSA9IFtdXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXlJbmRleCxcbiAgICAgICAgICAgIGZyZWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IGl0ZW1LZXkgPSBnZXRJdGVtS2V5KGl0ZW0pXG4gICAgICAgIGlmIChpdGVtS2V5KSB7XG4gICAgICAgICAgICBrZXlJbmRleC5wdXNoKGl0ZW1LZXkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcmVlLnB1c2goaXRlbSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5SW5kZXgsXG4gICAgICAgIGZyZWVcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRJdGVtS2V5KGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5rZXlcbn0iLCJsZXQgdWlkID0gMFxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VWlkKCkge1xuICAgIHJldHVybiArK3VpZFxufVxuXG5leHBvcnQgY29uc3QgVlRFWFQgPSAxXG5leHBvcnQgY29uc3QgVkVMRU1FTlQgPSAyXG5leHBvcnQgY29uc3QgVlNUQVRFTEVTUyA9IDNcbmV4cG9ydCBjb25zdCBWQ09NUE9ORU5UID0gNFxuXG5leHBvcnQgY29uc3QgTU9WRVNfQUREID0gJ2FkZCdcbmV4cG9ydCBjb25zdCBNT1ZFU19ERUxFVEUgPSAnZGVsZXRlJ1xuZXhwb3J0IGNvbnN0IE1PVkVTX1JFT1JERVIgPSAncmVvcmRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKGl0ZW0pIHtcbiAgICByZXR1cm4gdHlwZShpdGVtKSA9PT0gJ1N0cmluZydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGUob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnJlcGxhY2UoL1xcW29iamVjdFxcc3xcXF0vZywgJycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZHJlbkZyb21WY29tcG9uZW50KHZjb21wb25lbnQpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdmNvbXBvbmVudC5wcm9wc1xuICAgIGxldCB2Y2hpbGRyZW4gPSBbXVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICBmbGF0RWFjaChjaGlsZHJlbiwgY29sbGVjdENoaWxkLCB2Y2hpbGRyZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGVjdENoaWxkKGNoaWxkcmVuLCB2Y2hpbGRyZW4pXG4gICAgfVxuICAgIHJldHVybiB2Y2hpbGRyZW5cblxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0RWFjaChsaXN0LCBpdGVyYXRlZSwgYSkge1xuICAgIGxldCBsZW4gPSBsaXN0Lmxlbmd0aFxuICAgIGxldCBpID0gLTFcblxuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICBsZXQgaXRlbSA9IGxpc3RbKytpXVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgZmxhdEVhY2goaXRlbSwgaXRlcmF0ZWUsIGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVyYXRlZShpdGVtLCBhKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdENoaWxkKGNoaWxkLCBjaGlsZHJlbikge1xuICAgIGlmIChjaGlsZCAhPSBudWxsICYmIHR5cGVvZiBjaGlsZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmICghY2hpbGQudnR5cGUpIHtcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgaW1tdXRhYmxlanMgZGF0YVxuICAgICAgICAgICAgaWYgKGNoaWxkLnRvSlMpIHtcbiAgICAgICAgICAgICAgICBjaGlsZCA9IGNoaWxkLnRvSlMoKVxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBmbGF0RWFjaChjaGlsZCwgY29sbGVjdENoaWxkLCBjaGlsZHJlbilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0Q2hpbGQoY2hpbGQsIGNoaWxkcmVuKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkID0gJycgKyBjaGlsZFxuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aF0gPSBjaGlsZFxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET00nXG5pbXBvcnQgeyBnZXRVaWQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgZGlmZkxpc3QgfSBmcm9tICcuL2xpc3QtZGlmZidcbmltcG9ydCB7XG4gICAgVlRFWFQsXG4gICAgVkVMRU1FTlQsXG4gICAgVlNUQVRFTEVTUyxcbiAgICBWQ09NUE9ORU5ULFxuICAgIGdldENoaWxkcmVuRnJvbVZjb21wb25lbnQsXG4gICAgTU9WRVNfQURELFxuICAgIE1PVkVTX0RFTEVURSxcbiAgICBNT1ZFU19SRU9SREVSLFxuICAgIGlzU3RyaW5nXG59IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgeyBldmVudExpc3QsIGFkZEV2ZW50IH0gZnJvbSAnLi9ldmVudC1zeXN0ZW0nXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWY29tcG9uZW50KHsgdnR5cGUsIHR5cGUsIHByb3BzLCBrZXksIHJlZiB9KSB7XG4gICAgbGV0IHZjb21wb25lbnQgPSB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHByb3BzLFxuICAgICAgICB2dHlwZSxcbiAgICAgICAga2V5LFxuICAgICAgICByZWZcbiAgICB9XG4gICAgaWYgKHZ0eXBlID09PSBWQ09NUE9ORU5UKSB7XG4gICAgICAgIHZjb21wb25lbnQudWlkID0gZ2V0VWlkKClcbiAgICB9XG4gICAgcmV0dXJuIHZjb21wb25lbnRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRWbm9kZSh2Y29tcG9uZW50KSB7XG4gICAgbGV0IHsgdnR5cGUgfSA9IHZjb21wb25lbnQsXG4gICAgICAgIG5vZGUgPSBudWxsXG4gICAgaWYgKCF2dHlwZSkgeyAvLyBpbml0IHRleHRcbiAgICAgICAgbm9kZSA9IGluaXRUZXh0KHZjb21wb25lbnQpXG4gICAgfSBlbHNlIGlmICh2dHlwZSA9PT0gVkVMRU1FTlQpIHtcbiAgICAgICAgbm9kZSA9IGluaXRFbGVtZW50KHZjb21wb25lbnQpXG4gICAgfSBlbHNlIGlmICh2dHlwZSA9PT0gVkNPTVBPTkVOVCkge1xuICAgICAgICBub2RlID0gaW5pdENvbXBvbmVudCh2Y29tcG9uZW50KVxuICAgIH0gZWxzZSBpZiAodnR5cGUgPT09IFZTVEFURUxFU1MpIHtcbiAgICAgICAgbm9kZSA9IGluaXRTdGF0ZWxlc3ModmNvbXBvbmVudClcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUZXh0KHRleHQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRFbGVtZW50KHZjb21wb25lbnQpIHtcbiAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSB2Y29tcG9uZW50XG4gICAgbGV0IHZjaGlsZHJlbiA9IGdldENoaWxkcmVuRnJvbVZjb21wb25lbnQodmNvbXBvbmVudClcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgICBzZXRQcm9wcyhub2RlLCBwcm9wcylcbiAgICB2Y2hpbGRyZW4uZm9yRWFjaChjaGlsZFZub2RlID0+IHtcbiAgICAgICAgRE9NLmFwcGVuZENoaWxkcmVuKG5vZGUsIGluaXRWbm9kZShjaGlsZFZub2RlKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb21wb25lbnQodmNvbXBvbmVudCkge1xuICAgIGNvbnN0IHsgdHlwZTogQ29tcG9uZW50LCBwcm9wcywgdWlkIH0gPSB2Y29tcG9uZW50XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudChwcm9wcylcbiAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCkge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KClcbiAgICB9XG4gICAgY29uc3QgeyAkY2FjaGU6IGNhY2hlIH0gPSBjb21wb25lbnRcbiAgICBjb25zdCB2bm9kZSA9IHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpXG4gICAgY29uc3Qgbm9kZSA9IGluaXRWbm9kZSh2bm9kZSlcbiAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRNb3VudCgpXG4gICAgfVxuICAgIG5vZGUuY2FjaGUgPSBub2RlLmNhY2hlIHx8IHt9XG4gICAgbm9kZS5jYWNoZVt1aWRdID0gY29tcG9uZW50XG4gICAgY2FjaGUudm5vZGUgPSB2bm9kZVxuICAgIGNhY2hlLm5vZGUgPSBub2RlXG4gICAgY2FjaGUuaXNNb3VudGVkID0gdHJ1ZVxuICAgIHJldHVybiBub2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RhdGVsZXNzKHZjb21wb25lbnQpIHtcbiAgICBjb25zdCB7IHVpZCB9ID0gdmNvbXBvbmVudFxuICAgIGNvbnN0IHZub2RlID0gZ2V0U3RhdGVsZXNzKHZjb21wb25lbnQpXG4gICAgY29uc3Qgbm9kZSA9IGluaXRWbm9kZSh2bm9kZSlcbiAgICBub2RlLmNhY2hlID0gbm9kZS5jYWNoZSB8fCB7fVxuICAgIG5vZGUuY2FjaGVbdWlkXSA9IHZub2RlXG4gICAgcmV0dXJuIG5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlbGVzcyh2Y29tcG9uZW50KSB7XG4gICAgY29uc3QgeyB0eXBlOiBmYWN0b3J5LCBwcm9wcyB9ID0gdmNvbXBvbmVudFxuICAgIGxldCB2bm9kZSA9IGZhY3RvcnkocHJvcHMpXG4gICAgaWYgKHZub2RlICYmIHZub2RlLnJlbmRlcikge1xuICAgICAgICB2bm9kZSA9IHZub2RlLnJlbmRlcigpXG4gICAgfVxuICAgIHJldHVybiB2bm9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiBjb21wb25lbnQucmVuZGVyKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lWbm9kZSh2Y29tcG9uZW50LCBub2RlKSB7XG4gICAgY29uc3QgeyB2dHlwZSB9ID0gdmNvbXBvbmVudFxuICAgIGlmICh2dHlwZSA9PT0gVkVMRU1FTlQpIHtcblxuICAgIH0gZWxzZSBpZiAodnR5cGUgPT09IFZDT01QT05FTlQpIHtcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVUd29Wbm9kZXMob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKSB7XG4gICAgbGV0IG5ld05vZGUgPSBub2RlXG4gICAgaWYgKCFuZXdWbm9kZSkge1xuICAgICAgICAvL+WmguaenOaWsOiKgueCueaYr+epuu+8jOmUgOavgW5vZGXlubbkuJTnp7vnp7vpmaRcbiAgICAgICAgZGVzdHJveVZub2RlKG9sZFZub2RlLCBub2RlKVxuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSlcbiAgICB9IGVsc2UgaWYgKG9sZFZub2RlLnR5cGUgIT09IG5ld1Zub2RlLnR5cGUgfHwgb2xkVm5vZGUua2V5ICE9PSBuZXdWbm9kZS5rZXkpIHtcbiAgICAgICAgLy90eXBl5oiW6ICFa2V55LiN5ZCM77yM5a6M5YWo6YeN5p6EXG4gICAgICAgIGRlc3Ryb3lWbm9kZShvbGRWbm9kZSwgbm9kZSlcbiAgICAgICAgbmV3Tm9kZSA9IGluaXRWbm9kZShuZXdWbm9kZSlcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBub2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8v6Z2e5LiK6L+w5oOF5Ya15YiZ5pu05pawXG4gICAgICAgIG5ld05vZGUgPSB1cGRhdGVWbm9kZShvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpXG4gICAgfVxuICAgIHJldHVybiBuZXdOb2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWbm9kZShvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpIHtcbiAgICBjb25zdCB7IHZ0eXBlLCB0eXBlIH0gPSBvbGRWbm9kZVxuICAgIGlmICghdHlwZSkge1xuICAgICAgICBpZiAob2xkVm5vZGUgIT09IG5ld1Zub2RlKSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBuZXdWbm9kZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlXG4gICAgfVxuXG4gICAgaWYgKHZ0eXBlID09PSBWQ09NUE9ORU5UKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGVWY29tcG9uZW50KG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSlcbiAgICB9XG4gICAgaWYgKHZ0eXBlID09PSBWU1RBVEVMRVNTKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGVTdGF0ZWxlc3Mob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKVxuICAgIH1cblxuICAgIGlmICh2dHlwZSA9PT0gVkVMRU1FTlQpIHtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUVsZW1lbnQob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZjb21wb25lbnQodmNvbXBvbmVudCwgbmV3VmNvbXBvbmVudCwgbm9kZSkge1xuICAgIGxldCB1aWQgPSB2Y29tcG9uZW50LnVpZFxuICAgIGxldCBjb21wb25lbnQgPSBub2RlLmNhY2hlW3VpZF1cbiAgICBsZXQgeyAkdXBkYXRlcjogdXBkYXRlciwgJGNhY2hlOiBjYWNoZSB9ID0gY29tcG9uZW50XG4gICAgbm9kZS5jYWNoZVtuZXdWY29tcG9uZW50LnVpZF0gPSBjb21wb25lbnRcbiAgICBjb21wb25lbnQuZm9yY2VVcGRhdGUoKVxuICAgIHJldHVybiBjYWNoZS5ub2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdGF0ZWxlc3ModmNvbXBvbmVudCwgbmV3VmNvbXBvbmVudCwgbm9kZSkge1xuICAgIGxldCB1aWQgPSB2Y29tcG9uZW50LnVpZFxuICAgIGxldCB2bm9kZSA9IG5vZGUuY2FjaGVbdWlkXVxuICAgIGRlbGV0ZSBub2RlLmNhY2hlW3VpZF1cbiAgICBsZXQgbmV3Vm5vZGUgPSBnZXRTdGF0ZWxlc3MobmV3VmNvbXBvbmVudClcbiAgICBsZXQgbmV3Tm9kZSA9IGNvbXBhcmVUd29Wbm9kZXModm5vZGUsIG5ld1Zub2RlLCBub2RlKVxuICAgIG5ld05vZGUuY2FjaGUgPSBuZXdOb2RlLmNhY2hlIHx8IHt9XG4gICAgbmV3Tm9kZS5jYWNoZVt1aWRdID0gbmV3Vm5vZGVcbiAgICByZXR1cm4gbmV3Vm5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKSB7XG4gICAgbGV0IGRpZmZQcm9wcyA9IGdldERpZmZQcm9wcyhvbGRWbm9kZS5wcm9wcywgbmV3Vm5vZGUucHJvcHMpXG4gICAgZGlmZlByb3BzICYmIHNldFByb3BzKG5vZGUsIGRpZmZQcm9wcylcbiAgICB1cGRhdGVDaGlsZHJlbihvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpXG4gICAgcmV0dXJuIG5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSkge1xuICAgIGxldCB7IGRpZmYsIG5ld0NoaWxkcmVuLCBjaGlsZHJlbiB9ID0gZGlmZkxpc3Qob2xkVm5vZGUsIG5ld1Zub2RlKVxuICAgIGxldCBjaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzXG4gICAgbGV0IGogPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobmV3Q2hpbGRyZW4gIT09ICdsaXN0TnVsbCcpIHsvL2xpc3ROdWxs6K+05piO6ZyA6KaB5Yig5o6J77yM5Lya5ZyocGF0Y2jph4zliKDpmaRcbiAgICAgICAgICAgIGNvbXBhcmVUd29Wbm9kZXMoY2hpbGRyZW5baV0sIG5ld0NoaWxkcmVuW2ldLCBjaGlsZE5vZGVzW2kgLSBqXSlcbiAgICAgICAgICAgIGlmIChuZXdDaGlsZHJlbltpXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8v5aaC5p6cbmV3Q2hpbGRyZW5baV0g5pivbnVsbO+8jOivtOaYjuS4jeW4pmtleeW5tuS4lOW3sue7j+iiq+WIoOmZpOS6hu+8jG5vZGVz6ZyA6KaB5ZCR5YmN556s56e75LiA5L2NXG4gICAgICAgICAgICAgICAgaisrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXRjaENoaWxkcmVuKG5vZGUsIGRpZmYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaWZmUHJvcHMocHJvcHMsIG5ld1Byb3BzKSB7XG4gICAgbGV0IGNoYW5nZVByb3BzID0ge30sXG4gICAgICAgIGNvdW50ID0gMCxcbiAgICAgICAgaWdub3JlTGlzdCA9IFsnY2hpbGRyZW4nLCAna2V5J11cbiAgICBmb3IgKGxldCBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgIGlmIChuZXdQcm9wc1tuYW1lXSAhPT0gcHJvcHNbbmFtZV0gJiYgaWdub3JlTGlzdC5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgICAgICAgY2hhbmdlUHJvcHNbbmFtZV0gPSBuZXdQcm9wc1tuYW1lXVxuICAgICAgICAgICAgY291bnQrK1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IG5hbWUgaW4gbmV3UHJvcHMpIHtcbiAgICAgICAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBpZ25vcmVMaXN0LmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgICAgICBjaGFuZ2VQcm9wc1tuYW1lXSA9IG5ld1Byb3BzW25hbWVdXG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50ID4gMCAmJiBjaGFuZ2VQcm9wc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcHMobm9kZSwgcHJvcHMpIHtcbiAgICBsZXQgaWdub3JlTGlzdCA9IFsnY2hpbGRyZW4nLCAna2V5J11cbiAgICBmb3IgKGxldCBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgIGlmIChpZ25vcmVMaXN0LmZpbmQocmVzID0+IHJlcyA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgbGV0IHN0eWxlT2JqZWN0ID0gcHJvcHNbbmFtZV1cbiAgICAgICAgICAgIGZvciAobGV0IHNLZXkgaW4gc3R5bGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW3NLZXldID0gc3R5bGVPYmplY3Rbc0tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRMaXN0LmluZGV4T2YobmFtZSkgPj0gMCkge1xuICAgICAgICAgICAgYWRkRXZlbnQobm9kZSwgbmFtZSwgcHJvcHNbbmFtZV0pXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wc1tuYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHByb3BzW25hbWVdKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoQ2hpbGRyZW4obm9kZSwgZGlmZikge1xuICAgIGxldCBjaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzXG4gICAgZGlmZi5sZW5ndGggPiAwICYmIGRpZmYuZm9yRWFjaChmdW5jdGlvbiAoc2luZ2xlRGlmZikge1xuICAgICAgICBzd2l0Y2ggKHNpbmdsZURpZmYudHlwZSkge1xuICAgICAgICAgICAgLy9kZWxldGVcbiAgICAgICAgICAgIGNhc2UgTU9WRVNfREVMRVRFOlxuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tzaW5nbGVEaWZmLmluZGV4XSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgLy9hZGRcbiAgICAgICAgICAgIGNhc2UgTU9WRVNfQUREOlxuICAgICAgICAgICAgICAgIHZhciBuZXdOb2RlID0gaXNTdHJpbmcoc2luZ2xlRGlmZi5pdGVtKSA/IHNpbmdsZURpZmYuaXRlbSA6IGluaXRWbm9kZShzaW5nbGVEaWZmLml0ZW0pXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID4gc2luZ2xlRGlmZi5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBjaGlsZE5vZGVzW3NpbmdsZURpZmYuaW5kZXhdKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIC8vbW92ZVxuICAgICAgICAgICAgY2FzZSBNT1ZFU19SRU9SREVSOlxuICAgICAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZXNbc2luZ2xlRGlmZi5vbGRJbmRleF0sIGNoaWxkTm9kZXNbc2luZ2xlRGlmZi5uZXdJbmRleF0pXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==