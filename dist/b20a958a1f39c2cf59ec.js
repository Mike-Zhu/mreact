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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC90ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL01vdW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ldmVudC1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9saXN0LWRpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92aXJ0dXJuLWRvbS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJBcHAiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwidGVzdENoYW5nZSIsImV2ZW50Iiwic3RyIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImlucHV0VmFsdWUiLCJzdGF0ZSIsImZpcnN0IiwiY29sb3IiLCJ1bGxpc3QiLCJrZXkiLCJzZXRUaW1lb3V0IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zIiwicmVuZGVyIiwibWFwIiwicmVzIiwiQWxsb3ciLCJwcHAiLCJTbWFsbEhlYWRlciIsImFhYSIsImNvbXBvbWVudERpZE1vdW50IiwiTXJlYWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0Q29tcG9uZW50U3ltYm9sIiwidXBkYXRlUXVldWUiLCJpc1BlbmRpbmciLCJVcGRhdGVyIiwiaW5zdGFuY2UiLCJwZW5kaW5nU3RhdGVzIiwiYWRkU3RhdGUiLCJuZXh0U3RhdGUiLCJwdXNoIiwiZW1pdFVwZGF0ZSIsInVwZGF0ZUNvbXBvbmVudCIsImdldFN0YXRlIiwiX3BlbmRpbmdTdGF0ZSIsImxlbmd0aCIsInBhcnRpYWxTdGF0ZSIsInNoaWZ0IiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yY2VVcGRhdGUiLCIkdXBkYXRlciIsIiRjYWNoZSIsImlzTW91bnRlZCIsImlzUmVhY3RDb21wb25lbnQiLCJjb250ZXh0Iiwidm5vZGUiLCJub2RlIiwibmV3Vm5vZGUiLCJyZW5kZXJDb21wb25lbnQiLCJjb21wYXJlVHdvVm5vZGVzIiwibW91bnRDb21wb25lbnQiLCJfY3VycmVudFZub2RlIiwiX1Zub2RlIiwiZ2V0Vm5vZGUiLCJfX2luc3RhbnNlUmVhY3RDb21wb25lbnQiLCJzaG91bGRVcGRhdGVDb21wb25lbnQiLCJwcmV2RWxlbWVudCIsIm5leHRFbGVtZW50IiwidHlwZSIsImVtcHR5Iiwic2xpY2UiLCJjYWxsIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZCIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGRyZW4iLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwicmVtb3ZlUHJvcGVydHkiLCJwcm9wZXJ0eSIsInJlbW92ZUF0dHJpYnV0ZU5vZGUiLCJzZXRQcm9wZXJ0eSIsInNldEF0dHJpYnV0ZSIsImluc2VydEFmdGVyIiwiYWZ0ZXJDaGlsZCIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJjb25maWciLCJ2dHlwZSIsInByb3RvdHlwZSIsIkVycm9yIiwicmVmIiwiZmluYWxQcm9wcyIsInByb3BLZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsImZpbmFsQ2hpbGRyZW4iLCJhcmd1TGVuZ3RoIiwiYXJndW1lbnRzIiwiaSIsImNyZWF0ZVZjb21wb25lbnQiLCJtb3VudCIsImVsZW1lbnQiLCJyZW5kZXJlZE5vZGUiLCJpbml0Vm5vZGUiLCJET00iLCJldmVudExpc3QiLCJ1bmJ1YmJsZUV2ZW50cyIsIm9ubW91c2Vtb3ZlIiwib250b3VjaG1vdmUiLCJvbm1vdXNlbGVhdmUiLCJvbm1vdXNlZW50ZXIiLCJvbmxvYWQiLCJvbnVubG9hZCIsIm9uc2Nyb2xsIiwib25mb2N1cyIsIm9uYmx1ciIsIm9ucm93ZXhpdCIsIm9uYmVmb3JldW5sb2FkIiwib25zdG9wIiwib25kcmFnZHJvcCIsIm9uZHJhZ2VudGVyIiwib25kcmFnZXhpdCIsIm9uZHJhZ2dlc3R1cmUiLCJvbmRyYWdvdmVyIiwib25jb250ZXh0bWVudSIsIm9uZXJyb3IiLCJvbmFib3J0Iiwib25jYW5wbGF5Iiwib25jYW5wbGF5dGhyb3VnaCIsIm9uZHVyYXRpb25jaGFuZ2UiLCJvbmVtcHRpZWQiLCJvbmVuZGVkIiwib25sb2FkZWRkYXRhIiwib25sb2FkZWRtZXRhZGF0YSIsIm9ubG9hZHN0YXJ0Iiwib25lbmNyeXB0ZWQiLCJvbnBhdXNlIiwib25wbGF5Iiwib25wbGF5aW5nIiwib25wcm9ncmVzcyIsIm9ucmF0ZWNoYW5nZSIsIm9uc2Vla2luZyIsIm9uc2Vla2VkIiwib25zdGFsbGVkIiwib25zdXNwZW5kIiwib250aW1ldXBkYXRlIiwib252b2x1bWVjaGFuZ2UiLCJvbndhaXRpbmciLCJnZXRFdmVudE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImV2ZW50VHlwZXMiLCJhZGRFdmVudCIsImV2ZW50TmFtZSIsImV2ZW50Q29udGVudCIsImV2ZW50VHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJzdHIiLCJkaXNwYXRjaEV2ZW50IiwiaXNTdXBwb3J0Q2hhbmdlIiwibGlzdGVuZXIiLCJwYXJlbnROb2RlIiwidGFnTmFtZSIsImRpZmZMaXN0Iiwib2xkVm5vZGUiLCJvbGRMaXN0IiwibmV3TGlzdCIsIm9sZE1hcCIsIm1ha2VLZXlJbmRleEFuZEZyZWUiLCJuZXdNYXAiLCJuZXdLZXlMaXN0Iiwia2V5SW5kZXgiLCJvbGRLZXlMaXN0IiwibmV3RnJlZUxpc3QiLCJmcmVlIiwiaXRlbSIsIml0ZW1LZXkiLCJnZXRJdGVtS2V5IiwibmV3SW5kZXgiLCJpbmRleE9mIiwiaiIsImsiLCJvbGRTb3J0TGlzdCIsImluZGV4IiwiZmlsdGVyTGlzdCIsImZpbHRlciIsIm9sZEluZGV4IiwiaW5zZXJ0Iiwic3BsaWNlIiwiZGlmZiIsIm5ld0NoaWxkcmVuIiwibGlzdCIsInVpZCIsImdldFVpZCIsIlZURVhUIiwiVkVMRU1FTlQiLCJWU1RBVEVMRVNTIiwiVkNPTVBPTkVOVCIsIk1PVkVTX0FERCIsIk1PVkVTX0RFTEVURSIsIk1PVkVTX1JFT1JERVIiLCJpc1N0cmluZyIsIm9iaiIsInRvU3RyaW5nIiwicmVwbGFjZSIsImdldENoaWxkcmVuRnJvbVZjb21wb25lbnQiLCJ2Y29tcG9uZW50IiwidmNoaWxkcmVuIiwiZmxhdEVhY2giLCJjb2xsZWN0Q2hpbGQiLCJpdGVyYXRlZSIsImEiLCJsZW4iLCJ0b0pTIiwiaW5pdFRleHQiLCJpbml0RWxlbWVudCIsImluaXRDb21wb25lbnQiLCJpbml0U3RhdGVsZXNzIiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwic2V0UHJvcHMiLCJjaGlsZFZub2RlIiwiY29tcG9uZW50IiwiY29tcG9uZW50V2lsbE1vdW50IiwiY2FjaGUiLCJnZXRTdGF0ZWxlc3MiLCJmYWN0b3J5IiwiZGVzdHJveVZub2RlIiwibmV3Tm9kZSIsInJlcGxhY2VDaGlsZCIsInVwZGF0ZVZub2RlIiwiZGF0YSIsInVwZGF0ZVZjb21wb25lbnQiLCJ1cGRhdGVTdGF0ZWxlc3MiLCJ1cGRhdGVFbGVtZW50IiwibmV3VmNvbXBvbmVudCIsInVwZGF0ZXIiLCJkaWZmUHJvcHMiLCJnZXREaWZmUHJvcHMiLCJ1cGRhdGVDaGlsZHJlbiIsInBhdGNoQ2hpbGRyZW4iLCJuZXdQcm9wcyIsImNoYW5nZVByb3BzIiwiY291bnQiLCJpZ25vcmVMaXN0IiwibmFtZSIsImZpbmQiLCJzdHlsZU9iamVjdCIsInNLZXkiLCJzdHls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bkQ7QUFDQTtBQWpCUjtBQW1CSCxLQXBCa0IsQ0FBbkI7QUFxQkgsQyIsImZpbGUiOiJiMjBhOTU4YTFmMzljMmNmNTllYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBNcmVhY3QgZnJvbSAnLi4vdXRpbHMnXHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBNcmVhY3RcclxuaW1wb3J0IFNtYWxsSGVhZGVyIGZyb20gJy4vdGVzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZpcnN0OiAxLFxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlOjAsXHJcbiAgICAgICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImErK1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiYisrXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImNcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJjKytcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImQrK1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpcnN0ID0gMVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGZpcnN0OiArK2ZpcnN0LFxyXG4gICAgICAgICAgICAgICAgdWxsaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiZysrXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJkKytiaWFuaHVhXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImVcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJlKytcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImErK1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiYSsr5pys5p2l5pivY1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiZisrXCJcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBmaXJzdDogMlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcclxuICAgICAgICBjb25zb2xlLmxvZygxKVxyXG4gICAgfVxyXG4gICAgY29ucyhldmVudCwga2V5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RhcmdldCcpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzLmtleSA9PiBcIiwga2V5KVxyXG4gICAgfVxyXG4gICAgdGVzdENoYW5nZSA9IChldmVudCwgc3RyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maXJzdH1cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudWxsaXN0Lm1hcChyZXMgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Jlcy5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gdGhpcy5jb25zKGV2ZW50LCByZXMua2V5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57cmVzLnZhbHVlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMudGVzdENoYW5nZShldmVudCwgJ3N0cicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17dGhpcy5zdGF0ZS5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hbGVydH1cclxuICAgICAgICAgICAgICAgICAgICA+SGVhZGluZyAxPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8U21hbGxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QWxsb3cgcHBwPXt0aGlzLnN0YXRlLmZpcnN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiA+SGVhZGluZyAyIHt0aGlzLnN0YXRlLmZpcnN0fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLmZpcnN0fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4yPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGgzPkhlYWRpbmcgMzwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQWxsb3coeyBwcHAgfSkge1xyXG4gICAgcmV0dXJuIDxkaXY+e3BwcH0gKyDov5nmmK/nuq/lh73mlbA8L2Rpdj5cclxufSIsImltcG9ydCBNcmVhY3QgZnJvbSAnLi4vdXRpbHMnXHJcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBNcmVhY3RcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYWxsSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWFhOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhYWEgPSAxXHJcblxyXG4gICAgfVxyXG4gICAgY29tcG9tZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWFhOiArK2FhYVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDMwMClcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aDU+e3RoaXMuc3RhdGUuYWFhfSArKysg6L+Z5piv5YaF6YOoY29tcG9uZW50PC9oNT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IE1yZWFjdCBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50L2FwcCdcclxuXHJcbk1yZWFjdC5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkiLCJpbXBvcnQgeyByZW5kZXJDb21wb25lbnQsIGNvbXBhcmVUd29Wbm9kZXMgfSBmcm9tICcuL3ZpcnR1cm4tZG9tJ1xyXG5cclxuY29uc3QgUmVhY3RDb21wb25lbnRTeW1ib2wgPSB7fVxyXG5cclxuZXhwb3J0IGxldCB1cGRhdGVRdWV1ZSA9IHtcclxuICAgIGlzUGVuZGluZzpmYWxzZSxcclxufVxyXG5jbGFzcyBVcGRhdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXHJcbiAgICAgICAgdGhpcy5wZW5kaW5nU3RhdGVzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBhZGRTdGF0ZShuZXh0U3RhdGUpIHtcclxuICAgICAgICB0aGlzLnBlbmRpbmdTdGF0ZXMucHVzaChuZXh0U3RhdGUpXHJcbiAgICB9XHJcbiAgICBlbWl0VXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KClcclxuICAgIH1cclxuICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaW5zdGFuY2UgfSA9IHRoaXNcclxuICAgICAgICBsZXQgX3BlbmRpbmdTdGF0ZSA9IGluc3RhbmNlLnN0YXRlXHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGVuZGluZ1N0YXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJ0aWFsU3RhdGUgPSB0aGlzLnBlbmRpbmdTdGF0ZXMuc2hpZnQoKVxyXG4gICAgICAgICAgICBfcGVuZGluZ1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2Uuc3RhdGUsIHBhcnRpYWxTdGF0ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9wZW5kaW5nU3RhdGVcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb21wb25lbnQoKSB7XHJcbiAgICAgICAgbGV0IHsgaW5zdGFuY2UgfSA9IHRoaXNcclxuICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMuJHVwZGF0ZXIgPSBuZXcgVXBkYXRlcih0aGlzKVxyXG4gICAgICAgIHRoaXMuJGNhY2hlID0ge1xyXG4gICAgICAgICAgICBpc01vdW50ZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wc1xyXG4gICAgfVxyXG5cclxuICAgIGlzUmVhY3RDb21wb25lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0Q29tcG9uZW50U3ltYm9sXHJcbiAgICB9XHJcblxyXG4gICAgZm9yY2VVcGRhdGUoKSB7XHJcbiAgICAgICAgbGV0IHsgJHVwZGF0ZXIsICRjYWNoZSwgcHJvcHMsIGNvbnRleHQgfSA9IHRoaXNcclxuICAgICAgICB0aGlzLnN0YXRlID0gJHVwZGF0ZXIuZ2V0U3RhdGUoKVxyXG4gICAgICAgIGxldCB7IHZub2RlLCBub2RlIH0gPSAkY2FjaGVcclxuICAgICAgICBsZXQgbmV3Vm5vZGUgPSByZW5kZXJDb21wb25lbnQodGhpcylcclxuICAgICAgICAkY2FjaGUudm5vZGUgPSBuZXdWbm9kZVxyXG4gICAgICAgIHJldHVybiBjb21wYXJlVHdvVm5vZGVzKHZub2RlLCBuZXdWbm9kZSwgbm9kZSlcclxuICAgIH1cclxuXHJcbiAgICBtb3VudENvbXBvbmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFZub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfVm5vZGVcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgX1Zub2RlID0gdGhpcy5nZXRWbm9kZSgpXHJcbiAgICAgICAgX1Zub2RlLl9faW5zdGFuc2VSZWFjdENvbXBvbmVudCA9IHRoaXNcclxuICAgICAgICB0aGlzLl9jdXJyZW50Vm5vZGUgPSBfVm5vZGVcclxuICAgICAgICByZXR1cm4gX1Zub2RlXHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZShwYXJ0aWFsU3RhdGUpIHtcclxuICAgICAgICB0aGlzLiR1cGRhdGVyLmFkZFN0YXRlKHBhcnRpYWxTdGF0ZSlcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlQ29tcG9uZW50KHByZXZFbGVtZW50LCBuZXh0RWxlbWVudCkge1xyXG4gICAgcmV0dXJuIHByZXZFbGVtZW50LnR5cGUgPT09IG5leHRFbGVtZW50LnR5cGVcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQiLCJleHBvcnQgZnVuY3Rpb24gZW1wdHkobm9kZSkge1xyXG4gICAgW10uc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKG5vZGUsIGNoaWxkcmVuKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBub2RlLmFwcGVuZChjaGlsZHJlbilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZHJlbilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BlcnR5KG5vZGUsIHByb3BlcnR5KSB7XHJcbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZU5vZGUocHJvcGVydHkpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9wZXJ0eShub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgIG5vZGUuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKG5vZGUsIGNoaWxkLCBhZnRlckNoaWxkKSB7XHJcbiAgICBub2RlLmluc2VydEJlZm9yZShcclxuICAgICAgICBjaGlsZCxcclxuICAgICAgICBhZnRlckNoaWxkID8gYWZ0ZXJDaGlsZC5uZXh0U2libGluZyA6IG5vZGUuZmlyc3RDaGlsZFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGQpIHtcclxuICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVWY29tcG9uZW50IH0gZnJvbSAnLi92aXJ0dXJuLWRvbSdcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCdcclxuaW1wb3J0IHtcclxuICAgIFZURVhULFxyXG4gICAgVkVMRU1FTlQsXHJcbiAgICBWU1RBVEVMRVNTLFxyXG4gICAgVkNPTVBPTkVOVFxyXG59IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcclxuICAgIGxldCB2dHlwZSA9IG51bGxcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgIHZ0eXBlID0gVlRFWFRcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdnR5cGUgPSBWRUxFTUVOVFxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGlmICh0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHZ0eXBlID0gVkNPTVBPTkVOVFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZ0eXBlID0gVlNUQVRFTEVTU1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWFjdC5jcmVhdGVFbGVtZW50OiB1bmV4cGVjdCB0eXBlIFsgJHt0eXBlfSBdYClcclxuICAgIH1cclxuXHJcbiAgICBsZXQga2V5ID0gbnVsbCxcclxuICAgICAgICByZWYgPSBudWxsXHJcbiAgICBsZXQgZmluYWxQcm9wcyA9IHt9XHJcbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcclxuICAgICAgICBmb3IgKGxldCBwcm9wS2V5IGluIGNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvcEtleSA9PT0gJ2tleScpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9ICcnICsgY29uZmlnW3Byb3BLZXldXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcEtleSA9PT0gJ3JlZicpIHtcclxuICAgICAgICAgICAgICAgIHJlZiA9IGNvbmZpZ1twcm9wS2V5XVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmluYWxQcm9wc1twcm9wS2V5XSA9IGNvbmZpZ1twcm9wS2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzXHJcbiAgICBpZiAoZGVmYXVsdFByb3BzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcHJvcEtleSBpbiBkZWZhdWx0UHJvcHMpIHtcclxuICAgICAgICAgICAgaWYgKGZpbmFsUHJvcHNbcHJvcEtleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZmluYWxQcm9wc1twcm9wS2V5XSA9IGRlZmF1bHRQcm9wc1twcm9wS2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaW5hbENoaWxkcmVuID0gY2hpbGRyZW5cclxuICAgIGxldCBhcmd1TGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgaWYgKGFyZ3VMZW5ndGggPiAzKSB7XHJcbiAgICAgICAgZmluYWxDaGlsZHJlbiA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBhcmd1TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmluYWxDaGlsZHJlbi5wdXNoKGFyZ3VtZW50c1tpXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoZmluYWxDaGlsZHJlbikge1xyXG4gICAgICAgIGZpbmFsUHJvcHMuY2hpbGRyZW4gPSBmaW5hbENoaWxkcmVuIHx8IFtdXHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gY3JlYXRlVmNvbXBvbmVudCh7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB2dHlwZSxcclxuICAgICAgICBwcm9wczogZmluYWxQcm9wcyxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgcmVmXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJ1xyXG5pbXBvcnQgeyBpbml0Vm5vZGUgfSBmcm9tICcuL3ZpcnR1cm4tZG9tJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW91bnQoZWxlbWVudCwgbm9kZSkge1xyXG4gICAgLy9lbGVtZW50ID0+IGNvbXBvbmVudFxyXG4gICAgY29uc3QgcmVuZGVyZWROb2RlID0gaW5pdFZub2RlKGVsZW1lbnQpXHJcbiAgICBET00uZW1wdHkobm9kZSlcclxuICAgIERPTS5hcHBlbmRDaGlsZHJlbihub2RlLCByZW5kZXJlZE5vZGUpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGV2ZW50TGlzdCA9IFtcclxuICAgICdvbkNsaWNrJyxcclxuICAgICdvbkNoYW5nZScsXHJcbl1cclxuLy8gZXZlbnQgY29uZmlnXHJcbmV4cG9ydCBjb25zdCB1bmJ1YmJsZUV2ZW50cyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogc2hvdWxkIG5vdCBiaW5kIG1vdXNlbW92ZSBpbiBkb2N1bWVudCBzY29wZVxyXG4gICAgICogZXZlbiB0aG91Z2ggbW91c2Vtb3ZlIGV2ZW50IGNhbiBidWJibGVcclxuICAgICAqL1xyXG4gICAgb25tb3VzZW1vdmU6IDEsXHJcbiAgICBvbnRvdWNobW92ZTogMSxcclxuICAgIG9ubW91c2VsZWF2ZTogMSxcclxuICAgIG9ubW91c2VlbnRlcjogMSxcclxuICAgIG9ubG9hZDogMSxcclxuICAgIG9udW5sb2FkOiAxLFxyXG4gICAgb25zY3JvbGw6IDEsXHJcbiAgICBvbmZvY3VzOiAxLFxyXG4gICAgb25ibHVyOiAxLFxyXG4gICAgb25yb3dleGl0OiAxLFxyXG4gICAgb25iZWZvcmV1bmxvYWQ6IDEsXHJcbiAgICBvbnN0b3A6IDEsXHJcbiAgICBvbmRyYWdkcm9wOiAxLFxyXG4gICAgb25kcmFnZW50ZXI6IDEsXHJcbiAgICBvbmRyYWdleGl0OiAxLFxyXG4gICAgb25kcmFnZ2VzdHVyZTogMSxcclxuICAgIG9uZHJhZ292ZXI6IDEsXHJcbiAgICBvbmNvbnRleHRtZW51OiAxLFxyXG4gICAgb25lcnJvcjogMSxcclxuXHJcbiAgICAvLyBtZWRpYSBldmVudFxyXG4gICAgb25hYm9ydDogMSxcclxuICAgIG9uY2FucGxheTogMSxcclxuICAgIG9uY2FucGxheXRocm91Z2g6IDEsXHJcbiAgICBvbmR1cmF0aW9uY2hhbmdlOiAxLFxyXG4gICAgb25lbXB0aWVkOiAxLFxyXG4gICAgb25lbmRlZDogMSxcclxuICAgIG9ubG9hZGVkZGF0YTogMSxcclxuICAgIG9ubG9hZGVkbWV0YWRhdGE6IDEsXHJcbiAgICBvbmxvYWRzdGFydDogMSxcclxuICAgIG9uZW5jcnlwdGVkOiAxLFxyXG4gICAgb25wYXVzZTogMSxcclxuICAgIG9ucGxheTogMSxcclxuICAgIG9ucGxheWluZzogMSxcclxuICAgIG9ucHJvZ3Jlc3M6IDEsXHJcbiAgICBvbnJhdGVjaGFuZ2U6IDEsXHJcbiAgICBvbnNlZWtpbmc6IDEsXHJcbiAgICBvbnNlZWtlZDogMSxcclxuICAgIG9uc3RhbGxlZDogMSxcclxuICAgIG9uc3VzcGVuZDogMSxcclxuICAgIG9udGltZXVwZGF0ZTogMSxcclxuICAgIG9udm9sdW1lY2hhbmdlOiAxLFxyXG4gICAgb253YWl0aW5nOiAxLFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFdmVudE5hbWUoa2V5KSB7XHJcbiAgICBpZiAoa2V5ID09PSAnb25Eb3VibGVDbGljaycpIHtcclxuICAgICAgICBrZXkgPSAnb25kYmxjbGljaydcclxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnb25Ub3VjaFRhcCcpIHtcclxuICAgICAgICBrZXkgPSAnb25jbGljaydcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ga2V5LnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuY29uc3QgZXZlbnRUeXBlcyA9IHt9XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudChub2RlLCBldmVudE5hbWUsIGV2ZW50Q29udGVudCkge1xyXG4gICAgLy8gY29uc3QgdGFnTmFtZSA9IG5vZGUudGFnTmFtZVxyXG4gICAgLy8gY29uc29sZS5sb2codGFnTmFtZSlcclxuICAgIGV2ZW50TmFtZSA9IGdldEV2ZW50TmFtZShldmVudE5hbWUpXHJcbiAgICBsZXQgZXZlbnRUeXBlID0gbm9kZS5ldmVudFR5cGUgfHwgKG5vZGUuZXZlbnRUeXBlID0ge30pXHJcbiAgICBldmVudFR5cGVbZXZlbnROYW1lXSA9IGV2ZW50Q29udGVudFxyXG4gICAgaWYgKHVuYnViYmxlRXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50TmFtZSkpIHtcclxuICAgICAgICAvL+S4jeWPr+WGkuazoeeahFxyXG4gICAgfSBlbHNlIGlmICghZXZlbnRUeXBlc1tldmVudE5hbWVdKSB7XHJcbiAgICAgICAgLy/lj6/lhpLms6HnmoTvvIzlj6rpnIDopoHnu5HlrprkuIDmrKFcclxuICAgICAgICBldmVudFR5cGVzW2V2ZW50TmFtZV0gPSB0cnVlXHJcbiAgICAgICAgLy/ljrvmjonliY3pnaLnmoRvblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLnN1YnN0cigyKSwgZGlzcGF0Y2hFdmVudCwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50TmFtZSA9PT0gJ29uY2hhbmdlJyAmJiBpc1N1cHBvcnRDaGFuZ2Uobm9kZSkpIHtcclxuICAgICAgICBhZGRFdmVudChub2RlLCAnb25pbnB1dCcsIGV2ZW50Q29udGVudClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChldmVudCkge1xyXG4gICAgbGV0IHsgdHlwZSwgdGFyZ2V0IH0gPSBldmVudFxyXG4gICAgbGV0IGV2ZW50TmFtZSA9ICdvbicgKyB0eXBlXHJcbiAgICB3aGlsZSAodGFyZ2V0KSB7XHJcbiAgICAgICAgbGV0IGV2ZW50VHlwZSA9IHRhcmdldC5ldmVudFR5cGUgfHwgKHRhcmdldC5ldmVudFR5cGUgPSB7fSlcclxuICAgICAgICBsZXQgbGlzdGVuZXIgPSBldmVudFR5cGVbZXZlbnROYW1lXVxyXG4gICAgICAgIGlmICghbGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGVcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdGVuZXIuY2FsbCh0YXJnZXQsIGV2ZW50KVxyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3VwcG9ydENoYW5nZSh0YXJnZXQpIHtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSB0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ2lucHV0JyB8fCB0YWdOYW1lID09PSAnc2VsZWN0JyB8fCB0YWdOYW1lID09PSAndGV4dGFyZWEnXHJcbn0iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL0VsZW1lbnQuanMnXHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQuanMnXHJcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9Nb3VudC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50LCByZW5kZXIgfVxyXG4iLCJpbXBvcnQge1xyXG4gICAgTU9WRVNfQURELFxyXG4gICAgTU9WRVNfREVMRVRFLFxyXG4gICAgTU9WRVNfUkVPUkRFUixcclxufSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZMaXN0KG9sZFZub2RlLCBuZXdWbm9kZSkge1xyXG4gICAgbGV0IG9sZExpc3QgPSBvbGRWbm9kZS5wcm9wcy5jaGlsZHJlbixcclxuICAgICAgICBuZXdMaXN0ID0gbmV3Vm5vZGUucHJvcHMuY2hpbGRyZW5cclxuICAgIG9sZExpc3QgPSBBcnJheS5pc0FycmF5KG9sZExpc3QpICYmIG9sZExpc3QgPyBvbGRMaXN0IDogW29sZExpc3RdXHJcbiAgICBuZXdMaXN0ID0gQXJyYXkuaXNBcnJheShuZXdMaXN0KSAmJiBuZXdMaXN0ID8gbmV3TGlzdCA6IFtuZXdMaXN0XVxyXG4gICAgY29uc3Qgb2xkTWFwID0gbWFrZUtleUluZGV4QW5kRnJlZShvbGRMaXN0KSxcclxuICAgICAgICBuZXdNYXAgPSBtYWtlS2V5SW5kZXhBbmRGcmVlKG5ld0xpc3QpXHJcblxyXG4gICAgY29uc3QgbmV3S2V5TGlzdCA9IG5ld01hcC5rZXlJbmRleCxcclxuICAgICAgICBvbGRLZXlMaXN0ID0gb2xkTWFwLmtleUluZGV4XHJcblxyXG4gICAgY29uc3QgbmV3RnJlZUxpc3QgPSBuZXdNYXAuZnJlZVxyXG4gICAgbGV0IGRpZmZMaXN0ID0gW10sXHJcbiAgICAgICAgY2hpbGRyZW4gPSBbXVxyXG5cclxuICAgIG9sZExpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtS2V5ID0gZ2V0SXRlbUtleShpdGVtKVxyXG4gICAgICAgIGlmIChpdGVtS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gbmV3S2V5TGlzdC5pbmRleE9mKGl0ZW1LZXkpXHJcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goXHJcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA+PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBuZXdMaXN0W25ld0luZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgIDogJ2xpc3ROdWxsJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChuZXdGcmVlTGlzdC5zaGlmdCgpIHx8IG51bGwpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgaSA9IDAsIGogPSAwLCBrID0gMFxyXG4gICAgLy/kuI3lj5hcclxuICAgIGNvbnN0IG9sZFNvcnRMaXN0ID0gb2xkS2V5TGlzdC5tYXAoXHJcbiAgICAgICAgcmVzID0+IG5ld0tleUxpc3QuaW5kZXhPZihyZXMpID49IDBcclxuICAgICAgICAgICAgPyBuZXdLZXlMaXN0LmluZGV4T2YocmVzKVxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgIClcclxuXHJcbiAgICB3aGlsZSAoaSA8IG9sZFNvcnRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChvbGRTb3J0TGlzdFtpXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkaWZmTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpIC0gaixcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1PVkVTX0RFTEVURS8v5Yig6ZmkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vaiDnlKjkuo7mqKHku7/liKDpmaTnmoTmk43kvZxcclxuICAgICAgICAgICAgLy8g5Zug5Li655yf5a6e55qE6IqC54K55Yig6Zmk5ZCO77yMaemcgOimgeWQkeWJjeenu+WKqOS4gOS9jVxyXG4gICAgICAgICAgICBqKytcclxuICAgICAgICB9XHJcbiAgICAgICAgaSsrXHJcbiAgICB9XHJcbiAgICAvL+WIoOmZpOWQjueahG9sZFNvcnRMaXN0XHJcbiAgICBsZXQgZmlsdGVyTGlzdCA9IG9sZFNvcnRMaXN0LmZpbHRlcihyZXMgPT4gcmVzICE9PSBudWxsKVxyXG4gICAgd2hpbGUgKGsgPCBuZXdLZXlMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBvbGRJbmRleCA9IGZpbHRlckxpc3QuaW5kZXhPZihrKVxyXG4gICAgICAgIGlmIChvbGRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChrICE9PSBvbGRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluc2VydCA9IGZpbHRlckxpc3Quc3BsaWNlKG9sZEluZGV4LCAxKVswXVxyXG4gICAgICAgICAgICAgICAgZmlsdGVyTGlzdC5zcGxpY2UoaywgMCwgaW5zZXJ0KVxyXG4gICAgICAgICAgICAgICAgZGlmZkxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXg6IGssXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkSW5kZXg6IG9sZEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1PVkVTX1JFT1JERVIgLy/mjaLkvY3nva5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaWx0ZXJMaXN0LnNwbGljZShrLCAwLCBrKVxyXG4gICAgICAgICAgICBkaWZmTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBrLFxyXG4gICAgICAgICAgICAgICAgaXRlbTogbmV3TGlzdFtrXSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1PVkVTX0FERCAvL+aWsOWinlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBrKytcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAobmV3RnJlZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGRpZmZMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBpbmRleDogY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgICAgICAgICBpdGVtOiBuZXdGcmVlTGlzdC5zaGlmdCgpLFxyXG4gICAgICAgICAgICB0eXBlOiBNT1ZFU19BREQgLy/mlrDlop5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlmZjogZGlmZkxpc3QsXHJcbiAgICAgICAgbmV3Q2hpbGRyZW46IGNoaWxkcmVuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBvbGRMaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWtlS2V5SW5kZXhBbmRGcmVlKGxpc3QpIHtcclxuICAgIGxldCBrZXlJbmRleCA9IFtdLFxyXG4gICAgICAgIGZyZWUgPSBbXVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAga2V5SW5kZXgsXHJcbiAgICAgICAgICAgIGZyZWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGxldCBpdGVtS2V5ID0gZ2V0SXRlbUtleShpdGVtKVxyXG4gICAgICAgIGlmIChpdGVtS2V5KSB7XHJcbiAgICAgICAgICAgIGtleUluZGV4LnB1c2goaXRlbUtleSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmcmVlLnB1c2goaXRlbSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBrZXlJbmRleCxcclxuICAgICAgICBmcmVlXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0SXRlbUtleShpdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbS5rZXlcclxufSIsImxldCB1aWQgPSAwXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VWlkKCkge1xyXG4gICAgcmV0dXJuICsrdWlkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBWVEVYVCA9IDFcclxuZXhwb3J0IGNvbnN0IFZFTEVNRU5UID0gMlxyXG5leHBvcnQgY29uc3QgVlNUQVRFTEVTUyA9IDNcclxuZXhwb3J0IGNvbnN0IFZDT01QT05FTlQgPSA0XHJcblxyXG5leHBvcnQgY29uc3QgTU9WRVNfQUREID0gJ2FkZCdcclxuZXhwb3J0IGNvbnN0IE1PVkVTX0RFTEVURSA9ICdkZWxldGUnXHJcbmV4cG9ydCBjb25zdCBNT1ZFU19SRU9SREVSID0gJ3Jlb3JkZXInXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoaXRlbSkge1xyXG4gICAgcmV0dXJuIHR5cGUoaXRlbSkgPT09ICdTdHJpbmcnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0eXBlKG9iaikge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnJlcGxhY2UoL1xcW29iamVjdFxcc3xcXF0vZywgJycpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZHJlbkZyb21WY29tcG9uZW50KHZjb21wb25lbnQpIHtcclxuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB2Y29tcG9uZW50LnByb3BzXHJcbiAgICBsZXQgdmNoaWxkcmVuID0gW11cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG4gICAgICAgIGZsYXRFYWNoKGNoaWxkcmVuLCBjb2xsZWN0Q2hpbGQsIHZjaGlsZHJlbilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sbGVjdENoaWxkKGNoaWxkcmVuLCB2Y2hpbGRyZW4pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmNoaWxkcmVuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXRFYWNoKGxpc3QsIGl0ZXJhdGVlLCBhKSB7XHJcbiAgICBsZXQgbGVuID0gbGlzdC5sZW5ndGhcclxuICAgIGxldCBpID0gLTFcclxuXHJcbiAgICB3aGlsZSAobGVuLS0pIHtcclxuICAgICAgICBsZXQgaXRlbSA9IGxpc3RbKytpXVxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGZsYXRFYWNoKGl0ZW0sIGl0ZXJhdGVlLCBhKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVlKGl0ZW0sIGEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdENoaWxkKGNoaWxkLCBjaGlsZHJlbikge1xyXG4gICAgaWYgKGNoaWxkICE9IG51bGwgJiYgdHlwZW9mIGNoaWxkICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICBpZiAoIWNoaWxkLnZ0eXBlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgaW1tdXRhYmxlanMgZGF0YVxyXG4gICAgICAgICAgICBpZiAoY2hpbGQudG9KUykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC50b0pTKClcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYXRFYWNoKGNoaWxkLCBjb2xsZWN0Q2hpbGQsIGNoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0Q2hpbGQoY2hpbGQsIGNoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGQgPSAnJyArIGNoaWxkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aF0gPSBjaGlsZFxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJ1xyXG5pbXBvcnQgeyBnZXRVaWQgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgeyBkaWZmTGlzdCB9IGZyb20gJy4vbGlzdC1kaWZmJ1xyXG5pbXBvcnQge1xyXG4gICAgVlRFWFQsXHJcbiAgICBWRUxFTUVOVCxcclxuICAgIFZTVEFURUxFU1MsXHJcbiAgICBWQ09NUE9ORU5ULFxyXG4gICAgZ2V0Q2hpbGRyZW5Gcm9tVmNvbXBvbmVudCxcclxuICAgIE1PVkVTX0FERCxcclxuICAgIE1PVkVTX0RFTEVURSxcclxuICAgIE1PVkVTX1JFT1JERVIsXHJcbiAgICBpc1N0cmluZ1xyXG59IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCB7IGV2ZW50TGlzdCwgYWRkRXZlbnQgfSBmcm9tICcuL2V2ZW50LXN5c3RlbSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWY29tcG9uZW50KHsgdnR5cGUsIHR5cGUsIHByb3BzLCBrZXksIHJlZiB9KSB7XHJcbiAgICBsZXQgdmNvbXBvbmVudCA9IHtcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHByb3BzLFxyXG4gICAgICAgIHZ0eXBlLFxyXG4gICAgICAgIGtleSxcclxuICAgICAgICByZWZcclxuICAgIH1cclxuICAgIGlmICh2dHlwZSA9PT0gVkNPTVBPTkVOVCkge1xyXG4gICAgICAgIHZjb21wb25lbnQudWlkID0gZ2V0VWlkKClcclxuICAgIH1cclxuICAgIHJldHVybiB2Y29tcG9uZW50XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Vm5vZGUodmNvbXBvbmVudCkge1xyXG4gICAgbGV0IHsgdnR5cGUgfSA9IHZjb21wb25lbnQsXHJcbiAgICAgICAgbm9kZSA9IG51bGxcclxuICAgIGlmICghdnR5cGUpIHsgLy8gaW5pdCB0ZXh0XHJcbiAgICAgICAgbm9kZSA9IGluaXRUZXh0KHZjb21wb25lbnQpXHJcbiAgICB9IGVsc2UgaWYgKHZ0eXBlID09PSBWRUxFTUVOVCkge1xyXG4gICAgICAgIG5vZGUgPSBpbml0RWxlbWVudCh2Y29tcG9uZW50KVxyXG4gICAgfSBlbHNlIGlmICh2dHlwZSA9PT0gVkNPTVBPTkVOVCkge1xyXG4gICAgICAgIG5vZGUgPSBpbml0Q29tcG9uZW50KHZjb21wb25lbnQpXHJcbiAgICB9IGVsc2UgaWYgKHZ0eXBlID09PSBWU1RBVEVMRVNTKSB7XHJcbiAgICAgICAgbm9kZSA9IGluaXRTdGF0ZWxlc3ModmNvbXBvbmVudClcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0VGV4dCh0ZXh0KSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRFbGVtZW50KHZjb21wb25lbnQpIHtcclxuICAgIGNvbnN0IHsgdHlwZSwgcHJvcHMgfSA9IHZjb21wb25lbnRcclxuICAgIGxldCB2Y2hpbGRyZW4gPSBnZXRDaGlsZHJlbkZyb21WY29tcG9uZW50KHZjb21wb25lbnQpXHJcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcclxuICAgIHNldFByb3BzKG5vZGUsIHByb3BzKVxyXG4gICAgdmNoaWxkcmVuLmZvckVhY2goY2hpbGRWbm9kZSA9PiB7XHJcbiAgICAgICAgRE9NLmFwcGVuZENoaWxkcmVuKG5vZGUsIGluaXRWbm9kZShjaGlsZFZub2RlKSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIG5vZGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb21wb25lbnQodmNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgeyB0eXBlOiBDb21wb25lbnQsIHByb3BzLCB1aWQgfSA9IHZjb21wb25lbnRcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQocHJvcHMpXHJcbiAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCkge1xyXG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQoKVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyAkY2FjaGU6IGNhY2hlIH0gPSBjb21wb25lbnRcclxuICAgIGNvbnN0IHZub2RlID0gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudClcclxuICAgIGNvbnN0IG5vZGUgPSBpbml0Vm5vZGUodm5vZGUpXHJcbiAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50KSB7XHJcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50KClcclxuICAgIH1cclxuICAgIG5vZGUuY2FjaGUgPSBub2RlLmNhY2hlIHx8IHt9XHJcbiAgICBub2RlLmNhY2hlW3VpZF0gPSBjb21wb25lbnRcclxuICAgIGNhY2hlLnZub2RlID0gdm5vZGVcclxuICAgIGNhY2hlLm5vZGUgPSBub2RlXHJcbiAgICBjYWNoZS5pc01vdW50ZWQgPSB0cnVlXHJcbiAgICByZXR1cm4gbm9kZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0YXRlbGVzcyh2Y29tcG9uZW50KSB7XHJcbiAgICBjb25zdCB7IHVpZCB9ID0gdmNvbXBvbmVudFxyXG4gICAgY29uc3Qgdm5vZGUgPSBnZXRTdGF0ZWxlc3ModmNvbXBvbmVudClcclxuICAgIGNvbnN0IG5vZGUgPSBpbml0Vm5vZGUodm5vZGUpXHJcbiAgICBub2RlLmNhY2hlID0gbm9kZS5jYWNoZSB8fCB7fVxyXG4gICAgbm9kZS5jYWNoZVt1aWRdID0gdm5vZGVcclxuICAgIHJldHVybiBub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZWxlc3ModmNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgeyB0eXBlOiBmYWN0b3J5LCBwcm9wcyB9ID0gdmNvbXBvbmVudFxyXG4gICAgbGV0IHZub2RlID0gZmFjdG9yeShwcm9wcylcclxuICAgIGlmICh2bm9kZSAmJiB2bm9kZS5yZW5kZXIpIHtcclxuICAgICAgICB2bm9kZSA9IHZub2RlLnJlbmRlcigpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdm5vZGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcclxuICAgIHJldHVybiBjb21wb25lbnQucmVuZGVyKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lWbm9kZSh2Y29tcG9uZW50LCBub2RlKSB7XHJcbiAgICBjb25zdCB7IHZ0eXBlIH0gPSB2Y29tcG9uZW50XHJcbiAgICBpZiAodnR5cGUgPT09IFZFTEVNRU5UKSB7XHJcblxyXG4gICAgfSBlbHNlIGlmICh2dHlwZSA9PT0gVkNPTVBPTkVOVCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVUd29Wbm9kZXMob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKSB7XHJcbiAgICBsZXQgbmV3Tm9kZSA9IG5vZGVcclxuICAgIGlmICghbmV3Vm5vZGUpIHtcclxuICAgICAgICAvL+WmguaenOaWsOiKgueCueaYr+epuu+8jOmUgOavgW5vZGXlubbkuJTnp7vnp7vpmaRcclxuICAgICAgICBkZXN0cm95Vm5vZGUob2xkVm5vZGUsIG5vZGUpXHJcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpXHJcbiAgICB9IGVsc2UgaWYgKG9sZFZub2RlLnR5cGUgIT09IG5ld1Zub2RlLnR5cGUgfHwgb2xkVm5vZGUua2V5ICE9PSBuZXdWbm9kZS5rZXkpIHtcclxuICAgICAgICAvL3R5cGXmiJbogIVrZXnkuI3lkIzvvIzlrozlhajph43mnoRcclxuICAgICAgICBkZXN0cm95Vm5vZGUob2xkVm5vZGUsIG5vZGUpXHJcbiAgICAgICAgbmV3Tm9kZSA9IGluaXRWbm9kZShuZXdWbm9kZSlcclxuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIG5vZGUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8v6Z2e5LiK6L+w5oOF5Ya15YiZ5pu05pawXHJcbiAgICAgICAgbmV3Tm9kZSA9IHVwZGF0ZVZub2RlKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSlcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdOb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWbm9kZShvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpIHtcclxuICAgIGNvbnN0IHsgdnR5cGUsIHR5cGUgfSA9IG9sZFZub2RlXHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgICBpZiAob2xkVm5vZGUgIT09IG5ld1Zub2RlKSB7XHJcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IG5ld1Zub2RlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub2RlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZ0eXBlID09PSBWQ09NUE9ORU5UKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZVZjb21wb25lbnQob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKVxyXG4gICAgfVxyXG4gICAgaWYgKHZ0eXBlID09PSBWU1RBVEVMRVNTKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZVN0YXRlbGVzcyhvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZ0eXBlID09PSBWRUxFTUVOVCkge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVFbGVtZW50KG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZjb21wb25lbnQodmNvbXBvbmVudCwgbmV3VmNvbXBvbmVudCwgbm9kZSkge1xyXG4gICAgbGV0IHVpZCA9IHZjb21wb25lbnQudWlkXHJcbiAgICBsZXQgY29tcG9uZW50ID0gbm9kZS5jYWNoZVt1aWRdXHJcbiAgICBsZXQgeyAkdXBkYXRlcjogdXBkYXRlciwgJGNhY2hlOiBjYWNoZSB9ID0gY29tcG9uZW50XHJcbiAgICBub2RlLmNhY2hlW25ld1Zjb21wb25lbnQudWlkXSA9IGNvbXBvbmVudFxyXG4gICAgY29tcG9uZW50LmZvcmNlVXBkYXRlKClcclxuICAgIHJldHVybiBjYWNoZS5ub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdGF0ZWxlc3ModmNvbXBvbmVudCwgbmV3VmNvbXBvbmVudCwgbm9kZSkge1xyXG4gICAgbGV0IHVpZCA9IHZjb21wb25lbnQudWlkXHJcbiAgICBsZXQgdm5vZGUgPSBub2RlLmNhY2hlW3VpZF1cclxuICAgIGRlbGV0ZSBub2RlLmNhY2hlW3VpZF1cclxuICAgIGxldCBuZXdWbm9kZSA9IGdldFN0YXRlbGVzcyhuZXdWY29tcG9uZW50KVxyXG4gICAgbGV0IG5ld05vZGUgPSBjb21wYXJlVHdvVm5vZGVzKHZub2RlLCBuZXdWbm9kZSwgbm9kZSlcclxuICAgIG5ld05vZGUuY2FjaGUgPSBuZXdOb2RlLmNhY2hlIHx8IHt9XHJcbiAgICBuZXdOb2RlLmNhY2hlW3VpZF0gPSBuZXdWbm9kZVxyXG4gICAgcmV0dXJuIG5ld1Zub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFbGVtZW50KG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSkge1xyXG4gICAgbGV0IGRpZmZQcm9wcyA9IGdldERpZmZQcm9wcyhvbGRWbm9kZS5wcm9wcywgbmV3Vm5vZGUucHJvcHMpXHJcbiAgICBkaWZmUHJvcHMgJiYgc2V0UHJvcHMobm9kZSwgZGlmZlByb3BzKVxyXG4gICAgdXBkYXRlQ2hpbGRyZW4ob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKVxyXG4gICAgcmV0dXJuIG5vZGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSkge1xyXG4gICAgbGV0IHsgZGlmZiwgbmV3Q2hpbGRyZW4sIGNoaWxkcmVuIH0gPSBkaWZmTGlzdChvbGRWbm9kZSwgbmV3Vm5vZGUpXHJcbiAgICBsZXQgY2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2Rlc1xyXG4gICAgbGV0IGogPSAwXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG5ld0NoaWxkcmVuICE9PSAnbGlzdE51bGwnKSB7Ly9saXN0TnVsbOivtOaYjumcgOimgeWIoOaOie+8jOS8muWcqHBhdGNo6YeM5Yig6ZmkXHJcbiAgICAgICAgICAgIGNvbXBhcmVUd29Wbm9kZXMoY2hpbGRyZW5baV0sIG5ld0NoaWxkcmVuW2ldLCBjaGlsZE5vZGVzW2kgLSBqXSlcclxuICAgICAgICAgICAgaWYgKG5ld0NoaWxkcmVuW2ldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenG5ld0NoaWxkcmVuW2ldIOaYr251bGzvvIzor7TmmI7kuI3luKZrZXnlubbkuJTlt7Lnu4/ooqvliKDpmaTkuobvvIxub2Rlc+mcgOimgeWQkeWJjeeerOenu+S4gOS9jVxyXG4gICAgICAgICAgICAgICAgaisrXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGF0Y2hDaGlsZHJlbihub2RlLCBkaWZmKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlmZlByb3BzKHByb3BzLCBuZXdQcm9wcykge1xyXG4gICAgbGV0IGNoYW5nZVByb3BzID0ge30sXHJcbiAgICAgICAgY291bnQgPSAwLFxyXG4gICAgICAgIGlnbm9yZUxpc3QgPSBbJ2NoaWxkcmVuJywgJ2tleSddXHJcbiAgICBmb3IgKGxldCBuYW1lIGluIHByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5ld1Byb3BzW25hbWVdICE9PSBwcm9wc1tuYW1lXSAmJiBpZ25vcmVMaXN0LmluZGV4T2YobmFtZSkgPCAwKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZVByb3BzW25hbWVdID0gbmV3UHJvcHNbbmFtZV1cclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IG5hbWUgaW4gbmV3UHJvcHMpIHtcclxuICAgICAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlnbm9yZUxpc3QuaW5kZXhPZihuYW1lKSA8IDApIHtcclxuICAgICAgICAgICAgY2hhbmdlUHJvcHNbbmFtZV0gPSBuZXdQcm9wc1tuYW1lXVxyXG4gICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ID4gMCAmJiBjaGFuZ2VQcm9wc1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcHMobm9kZSwgcHJvcHMpIHtcclxuICAgIGxldCBpZ25vcmVMaXN0ID0gWydjaGlsZHJlbicsICdrZXknXVxyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBwcm9wcykge1xyXG4gICAgICAgIGlmIChpZ25vcmVMaXN0LmZpbmQocmVzID0+IHJlcyA9PT0gbmFtZSkpIHtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdzdHlsZScpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlT2JqZWN0ID0gcHJvcHNbbmFtZV1cclxuICAgICAgICAgICAgZm9yIChsZXQgc0tleSBpbiBzdHlsZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtzS2V5XSA9IHN0eWxlT2JqZWN0W3NLZXldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TGlzdC5pbmRleE9mKG5hbWUpID49IDApIHtcclxuICAgICAgICAgICAgYWRkRXZlbnQobm9kZSwgbmFtZSwgcHJvcHNbbmFtZV0pXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcHNbbmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBwcm9wc1tuYW1lXSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoQ2hpbGRyZW4obm9kZSwgZGlmZikge1xyXG4gICAgbGV0IGNoaWxkTm9kZXMgPSBub2RlLmNoaWxkTm9kZXNcclxuICAgIGRpZmYubGVuZ3RoID4gMCAmJiBkaWZmLmZvckVhY2goZnVuY3Rpb24gKHNpbmdsZURpZmYpIHtcclxuICAgICAgICBzd2l0Y2ggKHNpbmdsZURpZmYudHlwZSkge1xyXG4gICAgICAgICAgICAvL2RlbGV0ZVxyXG4gICAgICAgICAgICBjYXNlIE1PVkVTX0RFTEVURTpcclxuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tzaW5nbGVEaWZmLmluZGV4XSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIC8vYWRkXHJcbiAgICAgICAgICAgIGNhc2UgTU9WRVNfQUREOlxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBpc1N0cmluZyhzaW5nbGVEaWZmLml0ZW0pID8gc2luZ2xlRGlmZi5pdGVtIDogaW5pdFZub2RlKHNpbmdsZURpZmYuaXRlbSlcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCA+IHNpbmdsZURpZmYuaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBjaGlsZE5vZGVzW3NpbmdsZURpZmYuaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKG5ld05vZGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAvL21vdmVcclxuICAgICAgICAgICAgY2FzZSBNT1ZFU19SRU9SREVSOlxyXG4gICAgICAgICAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUoY2hpbGROb2Rlc1tzaW5nbGVEaWZmLm9sZEluZGV4XSwgY2hpbGROb2Rlc1tzaW5nbGVEaWZmLm5ld0luZGV4XSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=