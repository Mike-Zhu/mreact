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
            inputValue: '',
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
    }

    componentDidMount() {
        this.setState({
            first: 2
        });
        this.setState({
            first: ++this.state.first,
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
            // let aaa = 1
        };
    }
    compomentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         aaa: ++aaa
        //     })
        // }, 300)
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
var _this = undefined;



const ReactComponentSymbol = {};

let updateQueue = {
    isPending: false,
    updaters: [],
    add: updater => {
        _this.updaters.push(updater);
    }
};

class Updater {
    constructor(instance) {
        this.instance = instance;
        this.pendingStates = [];
        this.isPending = false;
    }

    addState(nextState) {
        this.pendingStates.push(nextState);
        this.emitUpdate();
    }
    emitUpdate() {
        !this.isPending ? this.updateComponent() : "";
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
        console.log(this);
        this.state = $updater.getState();
        let { vnode, node } = $cache;
        let newVnode = Object(_virturn_dom__WEBPACK_IMPORTED_MODULE_0__["renderComponent"])(this);
        $cache.vnode = newVnode;
        return Object(_virturn_dom__WEBPACK_IMPORTED_MODULE_0__["compareTwoVnodes"])(vnode, newVnode, node);
    }

    setState(partialState) {
        this.$updater.addState(partialState);
    }
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
    const { $cache: cache, $updater: updater } = component;
    const vnode = renderComponent(component);
    const node = initVnode(vnode);
    node.cache = node.cache || {};
    node.cache[uid] = component;
    cache.vnode = vnode;
    cache.node = node;
    cache.isMounted = true;
    updater.isPending = true;
    if (component.componentDidMount) {
        component.componentDidMount();
    }
    updater.isPending = false;
    updater.emitUpdate();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC90ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL01vdW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ldmVudC1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9saXN0LWRpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92aXJ0dXJuLWRvbS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJBcHAiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwidGVzdENoYW5nZSIsImV2ZW50Iiwic3RyIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImlucHV0VmFsdWUiLCJzdGF0ZSIsImZpcnN0IiwiY29sb3IiLCJ1bGxpc3QiLCJrZXkiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnMiLCJyZW5kZXIiLCJtYXAiLCJyZXMiLCJBbGxvdyIsInBwcCIsIlNtYWxsSGVhZGVyIiwiYWFhIiwiY29tcG9tZW50RGlkTW91bnQiLCJNcmVhY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RDb21wb25lbnRTeW1ib2wiLCJ1cGRhdGVRdWV1ZSIsImlzUGVuZGluZyIsInVwZGF0ZXJzIiwiYWRkIiwidXBkYXRlciIsInB1c2giLCJVcGRhdGVyIiwiaW5zdGFuY2UiLCJwZW5kaW5nU3RhdGVzIiwiYWRkU3RhdGUiLCJuZXh0U3RhdGUiLCJlbWl0VXBkYXRlIiwidXBkYXRlQ29tcG9uZW50IiwiZ2V0U3RhdGUiLCJfcGVuZGluZ1N0YXRlIiwibGVuZ3RoIiwicGFydGlhbFN0YXRlIiwic2hpZnQiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JjZVVwZGF0ZSIsIiR1cGRhdGVyIiwiJGNhY2hlIiwiaXNNb3VudGVkIiwiaXNSZWFjdENvbXBvbmVudCIsImNvbnRleHQiLCJ2bm9kZSIsIm5vZGUiLCJuZXdWbm9kZSIsInJlbmRlckNvbXBvbmVudCIsImNvbXBhcmVUd29Wbm9kZXMiLCJlbXB0eSIsInNsaWNlIiwiY2FsbCIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGQiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkcmVuIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmRDaGlsZCIsImFwcGVuZCIsInJlbW92ZVByb3BlcnR5IiwicHJvcGVydHkiLCJyZW1vdmVBdHRyaWJ1dGVOb2RlIiwic2V0UHJvcGVydHkiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRBZnRlciIsImFmdGVyQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImZpcnN0Q2hpbGQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImNvbmZpZyIsInZ0eXBlIiwicHJvdG90eXBlIiwiRXJyb3IiLCJyZWYiLCJmaW5hbFByb3BzIiwicHJvcEtleSIsImhhc093blByb3BlcnR5IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwiZmluYWxDaGlsZHJlbiIsImFyZ3VMZW5ndGgiLCJhcmd1bWVudHMiLCJpIiwiY3JlYXRlVmNvbXBvbmVudCIsIm1vdW50IiwiZWxlbWVudCIsInJlbmRlcmVkTm9kZSIsImluaXRWbm9kZSIsIkRPTSIsImV2ZW50TGlzdCIsInVuYnViYmxlRXZlbnRzIiwib25tb3VzZW1vdmUiLCJvbnRvdWNobW92ZSIsIm9ubW91c2VsZWF2ZSIsIm9ubW91c2VlbnRlciIsIm9ubG9hZCIsIm9udW5sb2FkIiwib25zY3JvbGwiLCJvbmZvY3VzIiwib25ibHVyIiwib25yb3dleGl0Iiwib25iZWZvcmV1bmxvYWQiLCJvbnN0b3AiLCJvbmRyYWdkcm9wIiwib25kcmFnZW50ZXIiLCJvbmRyYWdleGl0Iiwib25kcmFnZ2VzdHVyZSIsIm9uZHJhZ292ZXIiLCJvbmNvbnRleHRtZW51Iiwib25lcnJvciIsIm9uYWJvcnQiLCJvbmNhbnBsYXkiLCJvbmNhbnBsYXl0aHJvdWdoIiwib25kdXJhdGlvbmNoYW5nZSIsIm9uZW1wdGllZCIsIm9uZW5kZWQiLCJvbmxvYWRlZGRhdGEiLCJvbmxvYWRlZG1ldGFkYXRhIiwib25sb2Fkc3RhcnQiLCJvbmVuY3J5cHRlZCIsIm9ucGF1c2UiLCJvbnBsYXkiLCJvbnBsYXlpbmciLCJvbnByb2dyZXNzIiwib25yYXRlY2hhbmdlIiwib25zZWVraW5nIiwib25zZWVrZWQiLCJvbnN0YWxsZWQiLCJvbnN1c3BlbmQiLCJvbnRpbWV1cGRhdGUiLCJvbnZvbHVtZWNoYW5nZSIsIm9ud2FpdGluZyIsImdldEV2ZW50TmFtZSIsInRvTG93ZXJDYXNlIiwiZXZlbnRUeXBlcyIsImFkZEV2ZW50IiwiZXZlbnROYW1lIiwiZXZlbnRDb250ZW50IiwiZXZlbnRUeXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1YnN0ciIsImRpc3BhdGNoRXZlbnQiLCJpc1N1cHBvcnRDaGFuZ2UiLCJsaXN0ZW5lciIsInBhcmVudE5vZGUiLCJ0YWdOYW1lIiwiZGlmZkxpc3QiLCJvbGRWbm9kZSIsIm9sZExpc3QiLCJuZXdMaXN0Iiwib2xkTWFwIiwibWFrZUtleUluZGV4QW5kRnJlZSIsIm5ld01hcCIsIm5ld0tleUxpc3QiLCJrZXlJbmRleCIsIm9sZEtleUxpc3QiLCJuZXdGcmVlTGlzdCIsImZyZWUiLCJpdGVtIiwiaXRlbUtleSIsImdldEl0ZW1LZXkiLCJuZXdJbmRleCIsImluZGV4T2YiLCJqIiwiayIsIm9sZFNvcnRMaXN0IiwiaW5kZXgiLCJmaWx0ZXJMaXN0IiwiZmlsdGVyIiwib2xkSW5kZXgiLCJpbnNlcnQiLCJzcGxpY2UiLCJkaWZmIiwibmV3Q2hpbGRyZW4iLCJsaXN0IiwidWlkIiwiZ2V0VWlkIiwiVlRFWFQiLCJWRUxFTUVOVCIsIlZTVEFURUxFU1MiLCJWQ09NUE9ORU5UIiwiTU9WRVNfQUREIiwiTU9WRVNfREVMRVRFIiwiTU9WRVNfUkVPUkRFUiIsImlzU3RyaW5nIiwib2JqIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZ2V0Q2hpbGRyZW5Gcm9tVmNvbXBvbmVudCIsInZjb21wb25lbnQiLCJ2Y2hpbGRyZW4iLCJmbGF0RWFjaCIsImNvbGxlY3RDaGlsZCIsIml0ZXJhdGVlIiwiYSIsImxlbiIsInRvSlMiLCJpbml0VGV4dCIsImluaXRFbGVtZW50IiwiaW5pdENvbXBvbmVudCIsImluaXRTdGF0ZWxlc3MiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJzZXRQcm9wcyIsImNoaWxkVm5vZGUiLCJjb21wb25lbnQiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjYWNoZSIsImdldFN0YXRlbGVzcyIsImZhY3RvcnkiLCJkZXN0cm95Vm5vZGUiLCJuZXdOb2RlIiwicmVwbGFjZUNoaWxkIiwidXBkYXRlVm5vZGUiLCJkYXRhIiwidXBkYXRlVmNvbXBvbmVudCIsInVwZGF0ZVN0YXRlbGVzcyIsInVwZGF0ZUVsZW1lbnQiLCJuZXdWY29tcG9uZW50IiwiZGlmZlByb3BzIiwiZ2V0RGlmZlByb3BzIiwidXBkYXRlQ2hpbGRyZW4iLCJwYXRjaENoaWxkcmVuIiwibmV3UHJvcHMiLCJjaGFuZ2VQcm9wcyIsImNvdW50IiwiaWdub3JlTGlzdCIsIm5hbWUiLCJmaW5kIiwic3R5bGVPYmplY3QiLCJzS2V5Iiwic3R5bGUiLCJzaW5nbGVEaWZmIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QUtoSixNQUFMLEdBQWMsQ0FBZCxJQUFtQmdKLEtBQUs1SCxPQUFMLENBQWEsVUFBVXdMLFVBQVYsRUFBc0I7QUFDbEQsZ0JBQVFBLFdBQVdwSyxJQUFuQjtBQUNJO0FBQ0EsaUJBQUssbURBQUw7QUFDSTVCLHFCQUFLVSxXQUFMLENBQWlCSCxXQUFXeUwsV0FBV2xFLEtBQXRCLENBQWpCO0FBQ0E7QUFDSjtBQUNBLGlCQUFLLGdEQUFMO0FBQ0ksb0JBQUk2QyxVQUFVLHVEQUFBM0IsQ0FBU2dELFdBQVcxRSxJQUFwQixJQUE0QjBFLFdBQVcxRSxJQUF2QyxHQUE4Q3ZFLFVBQVVpSixXQUFXMUUsSUFBckIsQ0FBNUQ7QUFDQSxvQkFBSS9HLFdBQVduQixNQUFYLEdBQW9CNE0sV0FBV2xFLEtBQW5DLEVBQTBDO0FBQ3RDOUgseUJBQUt3QixZQUFMLENBQWtCbUosT0FBbEIsRUFBMkJwSyxXQUFXeUwsV0FBV2xFLEtBQXRCLENBQTNCO0FBQ0gsaUJBRkQsTUFFTztBQUNIOUgseUJBQUtlLFdBQUwsQ0FBaUI0SixPQUFqQjtBQUNIO0FBQ0Q7QUFDSjtBQUNBLGlCQUFLLG9EQUFMO0FBQ0kzSyxxQkFBS3dCLFlBQUwsQ0FBa0JqQixXQUFXeUwsV0FBVy9ELFFBQXRCLENBQWxCLEVBQW1EMUgsV0FBV3lMLFdBQVd2RSxRQUF0QixDQUFuRDtBQUNBO0FBakJSO0FBbUJILEtBcEJrQixDQUFuQjtBQXFCSCxDIiwiZmlsZSI6ImViZDIzZTA0MzczNWMxNDM5MDBhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IE1yZWFjdCBmcm9tICcuLi91dGlscydcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IE1yZWFjdFxyXG5pbXBvcnQgU21hbGxIZWFkZXIgZnJvbSAnLi90ZXN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZmlyc3Q6IDEsXHJcbiAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdWxsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImFcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJhKytcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImIrK1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiYysrXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJkKytcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmaXJzdCA9IDFcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZmlyc3Q6IDJcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmaXJzdDogKyt0aGlzLnN0YXRlLmZpcnN0LFxyXG4gICAgICAgICAgICB1bGxpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiZ1wiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiZysrXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcImRcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImQrK2JpYW5odWFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiZSsrXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcImFcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImErK1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJjXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJhKyvmnKzmnaXmmK9jXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcImZcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcImYrK1wiXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcclxuICAgICAgICBjb25zb2xlLmxvZygxKVxyXG4gICAgfVxyXG4gICAgY29ucyhldmVudCwga2V5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RhcmdldCcpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzLmtleSA9PiBcIiwga2V5KVxyXG4gICAgfVxyXG4gICAgdGVzdENoYW5nZSA9IChldmVudCwgc3RyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maXJzdH1cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudWxsaXN0Lm1hcChyZXMgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Jlcy5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gdGhpcy5jb25zKGV2ZW50LCByZXMua2V5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57cmVzLnZhbHVlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMudGVzdENoYW5nZShldmVudCwgJ3N0cicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17dGhpcy5zdGF0ZS5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hbGVydH1cclxuICAgICAgICAgICAgICAgICAgICA+SGVhZGluZyAxPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPFNtYWxsSGVhZGVyIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxBbGxvdyBwcHA9e3RoaXMuc3RhdGUuZmlyc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyID5IZWFkaW5nIDIge3RoaXMuc3RhdGUuZmlyc3R9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUuZmlyc3R9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjI8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+MzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDM+SGVhZGluZyAzPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBBbGxvdyh7IHBwcCB9KSB7XHJcbiAgICByZXR1cm4gPGRpdj57cHBwfSArIOi/meaYr+e6r+WHveaVsDwvZGl2PlxyXG59IiwiaW1wb3J0IE1yZWFjdCBmcm9tICcuLi91dGlscydcclxuY29uc3QgeyBDb21wb25lbnQgfSA9IE1yZWFjdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hbGxIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhYWE6IDFcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IGFhYSA9IDFcclxuICAgIH1cclxuICAgIGNvbXBvbWVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgICAgIGFhYTogKythYWFcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9LCAzMDApXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGg1Pnt0aGlzLnN0YXRlLmFhYX0gKysrIOi/meaYr+WGhemDqGNvbXBvbmVudDwvaDU+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBNcmVhY3QgZnJvbSAnLi91dGlscydcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudC9hcHAnXHJcblxyXG5NcmVhY3QucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpIiwiaW1wb3J0IHsgcmVuZGVyQ29tcG9uZW50LCBjb21wYXJlVHdvVm5vZGVzIH0gZnJvbSAnLi92aXJ0dXJuLWRvbSdcclxuXHJcbmNvbnN0IFJlYWN0Q29tcG9uZW50U3ltYm9sID0ge31cclxuXHJcbmV4cG9ydCBsZXQgdXBkYXRlUXVldWUgPSB7XHJcbiAgICBpc1BlbmRpbmc6IGZhbHNlLFxyXG4gICAgdXBkYXRlcnM6IFtdLFxyXG4gICAgYWRkOiAodXBkYXRlcikgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlcnMucHVzaCh1cGRhdGVyKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBVcGRhdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXHJcbiAgICAgICAgdGhpcy5wZW5kaW5nU3RhdGVzID0gW11cclxuICAgICAgICB0aGlzLmlzUGVuZGluZyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3RhdGUobmV4dFN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nU3RhdGVzLnB1c2gobmV4dFN0YXRlKVxyXG4gICAgICAgIHRoaXMuZW1pdFVwZGF0ZSgpXHJcbiAgICB9XHJcbiAgICBlbWl0VXBkYXRlKCkge1xyXG4gICAgICAgICF0aGlzLmlzUGVuZGluZyA/XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KCkgOiBcIlwiXHJcbiAgICB9XHJcbiAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCB7IGluc3RhbmNlIH0gPSB0aGlzXHJcbiAgICAgICAgbGV0IF9wZW5kaW5nU3RhdGUgPSBpbnN0YW5jZS5zdGF0ZVxyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlbmRpbmdTdGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcGFydGlhbFN0YXRlID0gdGhpcy5wZW5kaW5nU3RhdGVzLnNoaWZ0KClcclxuICAgICAgICAgICAgX3BlbmRpbmdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluc3RhbmNlLnN0YXRlLCBwYXJ0aWFsU3RhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfcGVuZGluZ1N0YXRlXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29tcG9uZW50KCkge1xyXG4gICAgICAgIGxldCB7IGluc3RhbmNlIH0gPSB0aGlzXHJcbiAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLiR1cGRhdGVyID0gbmV3IFVwZGF0ZXIodGhpcylcclxuICAgICAgICB0aGlzLiRjYWNoZSA9IHtcclxuICAgICAgICAgICAgaXNNb3VudGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHNcclxuICAgIH1cclxuXHJcbiAgICBpc1JlYWN0Q29tcG9uZW50KCkge1xyXG4gICAgICAgIHJldHVybiBSZWFjdENvbXBvbmVudFN5bWJvbFxyXG4gICAgfVxyXG5cclxuICAgIGZvcmNlVXBkYXRlKCkge1xyXG4gICAgICAgIGxldCB7ICR1cGRhdGVyLCAkY2FjaGUsIHByb3BzLCBjb250ZXh0IH0gPSB0aGlzXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcclxuICAgICAgICB0aGlzLnN0YXRlID0gJHVwZGF0ZXIuZ2V0U3RhdGUoKVxyXG4gICAgICAgIGxldCB7IHZub2RlLCBub2RlIH0gPSAkY2FjaGVcclxuICAgICAgICBsZXQgbmV3Vm5vZGUgPSByZW5kZXJDb21wb25lbnQodGhpcylcclxuICAgICAgICAkY2FjaGUudm5vZGUgPSBuZXdWbm9kZVxyXG4gICAgICAgIHJldHVybiBjb21wYXJlVHdvVm5vZGVzKHZub2RlLCBuZXdWbm9kZSwgbm9kZSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZShwYXJ0aWFsU3RhdGUpIHtcclxuICAgICAgICB0aGlzLiR1cGRhdGVyLmFkZFN0YXRlKHBhcnRpYWxTdGF0ZSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQiLCJleHBvcnQgZnVuY3Rpb24gZW1wdHkobm9kZSkge1xyXG4gICAgW10uc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKG5vZGUsIGNoaWxkcmVuKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBub2RlLmFwcGVuZChjaGlsZHJlbilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZHJlbilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BlcnR5KG5vZGUsIHByb3BlcnR5KSB7XHJcbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZU5vZGUocHJvcGVydHkpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9wZXJ0eShub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgIG5vZGUuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKG5vZGUsIGNoaWxkLCBhZnRlckNoaWxkKSB7XHJcbiAgICBub2RlLmluc2VydEJlZm9yZShcclxuICAgICAgICBjaGlsZCxcclxuICAgICAgICBhZnRlckNoaWxkID8gYWZ0ZXJDaGlsZC5uZXh0U2libGluZyA6IG5vZGUuZmlyc3RDaGlsZFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGQpIHtcclxuICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpXHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVWY29tcG9uZW50IH0gZnJvbSAnLi92aXJ0dXJuLWRvbSdcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCdcclxuaW1wb3J0IHtcclxuICAgIFZURVhULFxyXG4gICAgVkVMRU1FTlQsXHJcbiAgICBWU1RBVEVMRVNTLFxyXG4gICAgVkNPTVBPTkVOVFxyXG59IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcclxuICAgIGxldCB2dHlwZSA9IG51bGxcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgIHZ0eXBlID0gVlRFWFRcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdnR5cGUgPSBWRUxFTUVOVFxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGlmICh0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHZ0eXBlID0gVkNPTVBPTkVOVFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZ0eXBlID0gVlNUQVRFTEVTU1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWFjdC5jcmVhdGVFbGVtZW50OiB1bmV4cGVjdCB0eXBlIFsgJHt0eXBlfSBdYClcclxuICAgIH1cclxuXHJcbiAgICBsZXQga2V5ID0gbnVsbCxcclxuICAgICAgICByZWYgPSBudWxsXHJcbiAgICBsZXQgZmluYWxQcm9wcyA9IHt9XHJcbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcclxuICAgICAgICBmb3IgKGxldCBwcm9wS2V5IGluIGNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvcEtleSA9PT0gJ2tleScpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9ICcnICsgY29uZmlnW3Byb3BLZXldXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcEtleSA9PT0gJ3JlZicpIHtcclxuICAgICAgICAgICAgICAgIHJlZiA9IGNvbmZpZ1twcm9wS2V5XVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmluYWxQcm9wc1twcm9wS2V5XSA9IGNvbmZpZ1twcm9wS2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzXHJcbiAgICBpZiAoZGVmYXVsdFByb3BzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcHJvcEtleSBpbiBkZWZhdWx0UHJvcHMpIHtcclxuICAgICAgICAgICAgaWYgKGZpbmFsUHJvcHNbcHJvcEtleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZmluYWxQcm9wc1twcm9wS2V5XSA9IGRlZmF1bHRQcm9wc1twcm9wS2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaW5hbENoaWxkcmVuID0gY2hpbGRyZW5cclxuICAgIGxldCBhcmd1TGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgaWYgKGFyZ3VMZW5ndGggPiAzKSB7XHJcbiAgICAgICAgZmluYWxDaGlsZHJlbiA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBhcmd1TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmluYWxDaGlsZHJlbi5wdXNoKGFyZ3VtZW50c1tpXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoZmluYWxDaGlsZHJlbikge1xyXG4gICAgICAgIGZpbmFsUHJvcHMuY2hpbGRyZW4gPSBmaW5hbENoaWxkcmVuIHx8IFtdXHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gY3JlYXRlVmNvbXBvbmVudCh7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB2dHlwZSxcclxuICAgICAgICBwcm9wczogZmluYWxQcm9wcyxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgcmVmXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJ1xyXG5pbXBvcnQgeyBpbml0Vm5vZGUgfSBmcm9tICcuL3ZpcnR1cm4tZG9tJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW91bnQoZWxlbWVudCwgbm9kZSkge1xyXG4gICAgLy9lbGVtZW50ID0+IGNvbXBvbmVudFxyXG4gICAgY29uc3QgcmVuZGVyZWROb2RlID0gaW5pdFZub2RlKGVsZW1lbnQpXHJcbiAgICBET00uZW1wdHkobm9kZSlcclxuICAgIERPTS5hcHBlbmRDaGlsZHJlbihub2RlLCByZW5kZXJlZE5vZGUpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGV2ZW50TGlzdCA9IFtcclxuICAgICdvbkNsaWNrJyxcclxuICAgICdvbkNoYW5nZScsXHJcbl1cclxuLy8gZXZlbnQgY29uZmlnXHJcbmV4cG9ydCBjb25zdCB1bmJ1YmJsZUV2ZW50cyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogc2hvdWxkIG5vdCBiaW5kIG1vdXNlbW92ZSBpbiBkb2N1bWVudCBzY29wZVxyXG4gICAgICogZXZlbiB0aG91Z2ggbW91c2Vtb3ZlIGV2ZW50IGNhbiBidWJibGVcclxuICAgICAqL1xyXG4gICAgb25tb3VzZW1vdmU6IDEsXHJcbiAgICBvbnRvdWNobW92ZTogMSxcclxuICAgIG9ubW91c2VsZWF2ZTogMSxcclxuICAgIG9ubW91c2VlbnRlcjogMSxcclxuICAgIG9ubG9hZDogMSxcclxuICAgIG9udW5sb2FkOiAxLFxyXG4gICAgb25zY3JvbGw6IDEsXHJcbiAgICBvbmZvY3VzOiAxLFxyXG4gICAgb25ibHVyOiAxLFxyXG4gICAgb25yb3dleGl0OiAxLFxyXG4gICAgb25iZWZvcmV1bmxvYWQ6IDEsXHJcbiAgICBvbnN0b3A6IDEsXHJcbiAgICBvbmRyYWdkcm9wOiAxLFxyXG4gICAgb25kcmFnZW50ZXI6IDEsXHJcbiAgICBvbmRyYWdleGl0OiAxLFxyXG4gICAgb25kcmFnZ2VzdHVyZTogMSxcclxuICAgIG9uZHJhZ292ZXI6IDEsXHJcbiAgICBvbmNvbnRleHRtZW51OiAxLFxyXG4gICAgb25lcnJvcjogMSxcclxuXHJcbiAgICAvLyBtZWRpYSBldmVudFxyXG4gICAgb25hYm9ydDogMSxcclxuICAgIG9uY2FucGxheTogMSxcclxuICAgIG9uY2FucGxheXRocm91Z2g6IDEsXHJcbiAgICBvbmR1cmF0aW9uY2hhbmdlOiAxLFxyXG4gICAgb25lbXB0aWVkOiAxLFxyXG4gICAgb25lbmRlZDogMSxcclxuICAgIG9ubG9hZGVkZGF0YTogMSxcclxuICAgIG9ubG9hZGVkbWV0YWRhdGE6IDEsXHJcbiAgICBvbmxvYWRzdGFydDogMSxcclxuICAgIG9uZW5jcnlwdGVkOiAxLFxyXG4gICAgb25wYXVzZTogMSxcclxuICAgIG9ucGxheTogMSxcclxuICAgIG9ucGxheWluZzogMSxcclxuICAgIG9ucHJvZ3Jlc3M6IDEsXHJcbiAgICBvbnJhdGVjaGFuZ2U6IDEsXHJcbiAgICBvbnNlZWtpbmc6IDEsXHJcbiAgICBvbnNlZWtlZDogMSxcclxuICAgIG9uc3RhbGxlZDogMSxcclxuICAgIG9uc3VzcGVuZDogMSxcclxuICAgIG9udGltZXVwZGF0ZTogMSxcclxuICAgIG9udm9sdW1lY2hhbmdlOiAxLFxyXG4gICAgb253YWl0aW5nOiAxLFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFdmVudE5hbWUoa2V5KSB7XHJcbiAgICBpZiAoa2V5ID09PSAnb25Eb3VibGVDbGljaycpIHtcclxuICAgICAgICBrZXkgPSAnb25kYmxjbGljaydcclxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnb25Ub3VjaFRhcCcpIHtcclxuICAgICAgICBrZXkgPSAnb25jbGljaydcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ga2V5LnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuY29uc3QgZXZlbnRUeXBlcyA9IHt9XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudChub2RlLCBldmVudE5hbWUsIGV2ZW50Q29udGVudCkge1xyXG4gICAgLy8gY29uc3QgdGFnTmFtZSA9IG5vZGUudGFnTmFtZVxyXG4gICAgLy8gY29uc29sZS5sb2codGFnTmFtZSlcclxuICAgIGV2ZW50TmFtZSA9IGdldEV2ZW50TmFtZShldmVudE5hbWUpXHJcbiAgICBsZXQgZXZlbnRUeXBlID0gbm9kZS5ldmVudFR5cGUgfHwgKG5vZGUuZXZlbnRUeXBlID0ge30pXHJcbiAgICBldmVudFR5cGVbZXZlbnROYW1lXSA9IGV2ZW50Q29udGVudFxyXG4gICAgaWYgKHVuYnViYmxlRXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50TmFtZSkpIHtcclxuICAgICAgICAvL+S4jeWPr+WGkuazoeeahFxyXG4gICAgfSBlbHNlIGlmICghZXZlbnRUeXBlc1tldmVudE5hbWVdKSB7XHJcbiAgICAgICAgLy/lj6/lhpLms6HnmoTvvIzlj6rpnIDopoHnu5HlrprkuIDmrKFcclxuICAgICAgICBldmVudFR5cGVzW2V2ZW50TmFtZV0gPSB0cnVlXHJcbiAgICAgICAgLy/ljrvmjonliY3pnaLnmoRvblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLnN1YnN0cigyKSwgZGlzcGF0Y2hFdmVudCwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50TmFtZSA9PT0gJ29uY2hhbmdlJyAmJiBpc1N1cHBvcnRDaGFuZ2Uobm9kZSkpIHtcclxuICAgICAgICBhZGRFdmVudChub2RlLCAnb25pbnB1dCcsIGV2ZW50Q29udGVudClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChldmVudCkge1xyXG4gICAgbGV0IHsgdHlwZSwgdGFyZ2V0IH0gPSBldmVudFxyXG4gICAgbGV0IGV2ZW50TmFtZSA9ICdvbicgKyB0eXBlXHJcbiAgICB3aGlsZSAodGFyZ2V0KSB7XHJcbiAgICAgICAgbGV0IGV2ZW50VHlwZSA9IHRhcmdldC5ldmVudFR5cGUgfHwgKHRhcmdldC5ldmVudFR5cGUgPSB7fSlcclxuICAgICAgICBsZXQgbGlzdGVuZXIgPSBldmVudFR5cGVbZXZlbnROYW1lXVxyXG4gICAgICAgIGlmICghbGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGVcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdGVuZXIuY2FsbCh0YXJnZXQsIGV2ZW50KVxyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3VwcG9ydENoYW5nZSh0YXJnZXQpIHtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSB0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ2lucHV0JyB8fCB0YWdOYW1lID09PSAnc2VsZWN0JyB8fCB0YWdOYW1lID09PSAndGV4dGFyZWEnXHJcbn0iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL0VsZW1lbnQuanMnXHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQuanMnXHJcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9Nb3VudC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50LCByZW5kZXIgfVxyXG4iLCJpbXBvcnQge1xyXG4gICAgTU9WRVNfQURELFxyXG4gICAgTU9WRVNfREVMRVRFLFxyXG4gICAgTU9WRVNfUkVPUkRFUixcclxufSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZMaXN0KG9sZFZub2RlLCBuZXdWbm9kZSkge1xyXG4gICAgbGV0IG9sZExpc3QgPSBvbGRWbm9kZS5wcm9wcy5jaGlsZHJlbixcclxuICAgICAgICBuZXdMaXN0ID0gbmV3Vm5vZGUucHJvcHMuY2hpbGRyZW5cclxuICAgIG9sZExpc3QgPSBBcnJheS5pc0FycmF5KG9sZExpc3QpICYmIG9sZExpc3QgPyBvbGRMaXN0IDogW29sZExpc3RdXHJcbiAgICBuZXdMaXN0ID0gQXJyYXkuaXNBcnJheShuZXdMaXN0KSAmJiBuZXdMaXN0ID8gbmV3TGlzdCA6IFtuZXdMaXN0XVxyXG4gICAgY29uc3Qgb2xkTWFwID0gbWFrZUtleUluZGV4QW5kRnJlZShvbGRMaXN0KSxcclxuICAgICAgICBuZXdNYXAgPSBtYWtlS2V5SW5kZXhBbmRGcmVlKG5ld0xpc3QpXHJcblxyXG4gICAgY29uc3QgbmV3S2V5TGlzdCA9IG5ld01hcC5rZXlJbmRleCxcclxuICAgICAgICBvbGRLZXlMaXN0ID0gb2xkTWFwLmtleUluZGV4XHJcblxyXG4gICAgY29uc3QgbmV3RnJlZUxpc3QgPSBuZXdNYXAuZnJlZVxyXG4gICAgbGV0IGRpZmZMaXN0ID0gW10sXHJcbiAgICAgICAgY2hpbGRyZW4gPSBbXVxyXG5cclxuICAgIG9sZExpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtS2V5ID0gZ2V0SXRlbUtleShpdGVtKVxyXG4gICAgICAgIGlmIChpdGVtS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gbmV3S2V5TGlzdC5pbmRleE9mKGl0ZW1LZXkpXHJcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goXHJcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA+PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBuZXdMaXN0W25ld0luZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgIDogJ2xpc3ROdWxsJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChuZXdGcmVlTGlzdC5zaGlmdCgpIHx8IG51bGwpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgaSA9IDAsIGogPSAwLCBrID0gMFxyXG4gICAgLy/kuI3lj5hcclxuICAgIGNvbnN0IG9sZFNvcnRMaXN0ID0gb2xkS2V5TGlzdC5tYXAoXHJcbiAgICAgICAgcmVzID0+IG5ld0tleUxpc3QuaW5kZXhPZihyZXMpID49IDBcclxuICAgICAgICAgICAgPyBuZXdLZXlMaXN0LmluZGV4T2YocmVzKVxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgIClcclxuXHJcbiAgICB3aGlsZSAoaSA8IG9sZFNvcnRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIGlmIChvbGRTb3J0TGlzdFtpXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkaWZmTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpIC0gaixcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1PVkVTX0RFTEVURS8v5Yig6ZmkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vaiDnlKjkuo7mqKHku7/liKDpmaTnmoTmk43kvZxcclxuICAgICAgICAgICAgLy8g5Zug5Li655yf5a6e55qE6IqC54K55Yig6Zmk5ZCO77yMaemcgOimgeWQkeWJjeenu+WKqOS4gOS9jVxyXG4gICAgICAgICAgICBqKytcclxuICAgICAgICB9XHJcbiAgICAgICAgaSsrXHJcbiAgICB9XHJcbiAgICAvL+WIoOmZpOWQjueahG9sZFNvcnRMaXN0XHJcbiAgICBsZXQgZmlsdGVyTGlzdCA9IG9sZFNvcnRMaXN0LmZpbHRlcihyZXMgPT4gcmVzICE9PSBudWxsKVxyXG4gICAgd2hpbGUgKGsgPCBuZXdLZXlMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBvbGRJbmRleCA9IGZpbHRlckxpc3QuaW5kZXhPZihrKVxyXG4gICAgICAgIGlmIChvbGRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChrICE9PSBvbGRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluc2VydCA9IGZpbHRlckxpc3Quc3BsaWNlKG9sZEluZGV4LCAxKVswXVxyXG4gICAgICAgICAgICAgICAgZmlsdGVyTGlzdC5zcGxpY2UoaywgMCwgaW5zZXJ0KVxyXG4gICAgICAgICAgICAgICAgZGlmZkxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kZXg6IGssXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkSW5kZXg6IG9sZEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1PVkVTX1JFT1JERVIgLy/mjaLkvY3nva5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaWx0ZXJMaXN0LnNwbGljZShrLCAwLCBrKVxyXG4gICAgICAgICAgICBkaWZmTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBrLFxyXG4gICAgICAgICAgICAgICAgaXRlbTogbmV3TGlzdFtrXSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1PVkVTX0FERCAvL+aWsOWinlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBrKytcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAobmV3RnJlZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGRpZmZMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICBpbmRleDogY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgICAgICAgICBpdGVtOiBuZXdGcmVlTGlzdC5zaGlmdCgpLFxyXG4gICAgICAgICAgICB0eXBlOiBNT1ZFU19BREQgLy/mlrDlop5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlmZjogZGlmZkxpc3QsXHJcbiAgICAgICAgbmV3Q2hpbGRyZW46IGNoaWxkcmVuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBvbGRMaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWtlS2V5SW5kZXhBbmRGcmVlKGxpc3QpIHtcclxuICAgIGxldCBrZXlJbmRleCA9IFtdLFxyXG4gICAgICAgIGZyZWUgPSBbXVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAga2V5SW5kZXgsXHJcbiAgICAgICAgICAgIGZyZWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGxldCBpdGVtS2V5ID0gZ2V0SXRlbUtleShpdGVtKVxyXG4gICAgICAgIGlmIChpdGVtS2V5KSB7XHJcbiAgICAgICAgICAgIGtleUluZGV4LnB1c2goaXRlbUtleSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmcmVlLnB1c2goaXRlbSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBrZXlJbmRleCxcclxuICAgICAgICBmcmVlXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0SXRlbUtleShpdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbS5rZXlcclxufSIsImxldCB1aWQgPSAwXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VWlkKCkge1xyXG4gICAgcmV0dXJuICsrdWlkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBWVEVYVCA9IDFcclxuZXhwb3J0IGNvbnN0IFZFTEVNRU5UID0gMlxyXG5leHBvcnQgY29uc3QgVlNUQVRFTEVTUyA9IDNcclxuZXhwb3J0IGNvbnN0IFZDT01QT05FTlQgPSA0XHJcblxyXG5leHBvcnQgY29uc3QgTU9WRVNfQUREID0gJ2FkZCdcclxuZXhwb3J0IGNvbnN0IE1PVkVTX0RFTEVURSA9ICdkZWxldGUnXHJcbmV4cG9ydCBjb25zdCBNT1ZFU19SRU9SREVSID0gJ3Jlb3JkZXInXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoaXRlbSkge1xyXG4gICAgcmV0dXJuIHR5cGUoaXRlbSkgPT09ICdTdHJpbmcnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0eXBlKG9iaikge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnJlcGxhY2UoL1xcW29iamVjdFxcc3xcXF0vZywgJycpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZHJlbkZyb21WY29tcG9uZW50KHZjb21wb25lbnQpIHtcclxuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB2Y29tcG9uZW50LnByb3BzXHJcbiAgICBsZXQgdmNoaWxkcmVuID0gW11cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG4gICAgICAgIGZsYXRFYWNoKGNoaWxkcmVuLCBjb2xsZWN0Q2hpbGQsIHZjaGlsZHJlbilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sbGVjdENoaWxkKGNoaWxkcmVuLCB2Y2hpbGRyZW4pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmNoaWxkcmVuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXRFYWNoKGxpc3QsIGl0ZXJhdGVlLCBhKSB7XHJcbiAgICBsZXQgbGVuID0gbGlzdC5sZW5ndGhcclxuICAgIGxldCBpID0gLTFcclxuXHJcbiAgICB3aGlsZSAobGVuLS0pIHtcclxuICAgICAgICBsZXQgaXRlbSA9IGxpc3RbKytpXVxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGZsYXRFYWNoKGl0ZW0sIGl0ZXJhdGVlLCBhKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVlKGl0ZW0sIGEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdENoaWxkKGNoaWxkLCBjaGlsZHJlbikge1xyXG4gICAgaWYgKGNoaWxkICE9IG51bGwgJiYgdHlwZW9mIGNoaWxkICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICBpZiAoIWNoaWxkLnZ0eXBlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgaW1tdXRhYmxlanMgZGF0YVxyXG4gICAgICAgICAgICBpZiAoY2hpbGQudG9KUykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC50b0pTKClcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYXRFYWNoKGNoaWxkLCBjb2xsZWN0Q2hpbGQsIGNoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0Q2hpbGQoY2hpbGQsIGNoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGQgPSAnJyArIGNoaWxkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aF0gPSBjaGlsZFxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vRE9NJ1xyXG5pbXBvcnQgeyBnZXRVaWQgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgeyBkaWZmTGlzdCB9IGZyb20gJy4vbGlzdC1kaWZmJ1xyXG5pbXBvcnQge1xyXG4gICAgVlRFWFQsXHJcbiAgICBWRUxFTUVOVCxcclxuICAgIFZTVEFURUxFU1MsXHJcbiAgICBWQ09NUE9ORU5ULFxyXG4gICAgZ2V0Q2hpbGRyZW5Gcm9tVmNvbXBvbmVudCxcclxuICAgIE1PVkVTX0FERCxcclxuICAgIE1PVkVTX0RFTEVURSxcclxuICAgIE1PVkVTX1JFT1JERVIsXHJcbiAgICBpc1N0cmluZ1xyXG59IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCB7IGV2ZW50TGlzdCwgYWRkRXZlbnQgfSBmcm9tICcuL2V2ZW50LXN5c3RlbSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWY29tcG9uZW50KHsgdnR5cGUsIHR5cGUsIHByb3BzLCBrZXksIHJlZiB9KSB7XHJcbiAgICBsZXQgdmNvbXBvbmVudCA9IHtcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHByb3BzLFxyXG4gICAgICAgIHZ0eXBlLFxyXG4gICAgICAgIGtleSxcclxuICAgICAgICByZWZcclxuICAgIH1cclxuICAgIGlmICh2dHlwZSA9PT0gVkNPTVBPTkVOVCkge1xyXG4gICAgICAgIHZjb21wb25lbnQudWlkID0gZ2V0VWlkKClcclxuICAgIH1cclxuICAgIHJldHVybiB2Y29tcG9uZW50XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Vm5vZGUodmNvbXBvbmVudCkge1xyXG4gICAgbGV0IHsgdnR5cGUgfSA9IHZjb21wb25lbnQsXHJcbiAgICAgICAgbm9kZSA9IG51bGxcclxuICAgIGlmICghdnR5cGUpIHsgLy8gaW5pdCB0ZXh0XHJcbiAgICAgICAgbm9kZSA9IGluaXRUZXh0KHZjb21wb25lbnQpXHJcbiAgICB9IGVsc2UgaWYgKHZ0eXBlID09PSBWRUxFTUVOVCkge1xyXG4gICAgICAgIG5vZGUgPSBpbml0RWxlbWVudCh2Y29tcG9uZW50KVxyXG4gICAgfSBlbHNlIGlmICh2dHlwZSA9PT0gVkNPTVBPTkVOVCkge1xyXG4gICAgICAgIG5vZGUgPSBpbml0Q29tcG9uZW50KHZjb21wb25lbnQpXHJcbiAgICB9IGVsc2UgaWYgKHZ0eXBlID09PSBWU1RBVEVMRVNTKSB7XHJcbiAgICAgICAgbm9kZSA9IGluaXRTdGF0ZWxlc3ModmNvbXBvbmVudClcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0VGV4dCh0ZXh0KSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRFbGVtZW50KHZjb21wb25lbnQpIHtcclxuICAgIGNvbnN0IHsgdHlwZSwgcHJvcHMgfSA9IHZjb21wb25lbnRcclxuICAgIGxldCB2Y2hpbGRyZW4gPSBnZXRDaGlsZHJlbkZyb21WY29tcG9uZW50KHZjb21wb25lbnQpXHJcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcclxuICAgIHNldFByb3BzKG5vZGUsIHByb3BzKVxyXG4gICAgdmNoaWxkcmVuLmZvckVhY2goY2hpbGRWbm9kZSA9PiB7XHJcbiAgICAgICAgRE9NLmFwcGVuZENoaWxkcmVuKG5vZGUsIGluaXRWbm9kZShjaGlsZFZub2RlKSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIG5vZGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb21wb25lbnQodmNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgeyB0eXBlOiBDb21wb25lbnQsIHByb3BzLCB1aWQgfSA9IHZjb21wb25lbnRcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQocHJvcHMpXHJcbiAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCkge1xyXG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQoKVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyAkY2FjaGU6IGNhY2hlLCAkdXBkYXRlcjogdXBkYXRlciB9ID0gY29tcG9uZW50XHJcbiAgICBjb25zdCB2bm9kZSA9IHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpXHJcbiAgICBjb25zdCBub2RlID0gaW5pdFZub2RlKHZub2RlKVxyXG4gICAgbm9kZS5jYWNoZSA9IG5vZGUuY2FjaGUgfHwge31cclxuICAgIG5vZGUuY2FjaGVbdWlkXSA9IGNvbXBvbmVudFxyXG4gICAgY2FjaGUudm5vZGUgPSB2bm9kZVxyXG4gICAgY2FjaGUubm9kZSA9IG5vZGVcclxuICAgIGNhY2hlLmlzTW91bnRlZCA9IHRydWVcclxuICAgIHVwZGF0ZXIuaXNQZW5kaW5nID0gdHJ1ZVxyXG4gICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRNb3VudCkge1xyXG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRNb3VudCgpXHJcbiAgICB9XHJcbiAgICB1cGRhdGVyLmlzUGVuZGluZyA9IGZhbHNlXHJcbiAgICB1cGRhdGVyLmVtaXRVcGRhdGUoKVxyXG5cclxuICAgIHJldHVybiBub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RhdGVsZXNzKHZjb21wb25lbnQpIHtcclxuICAgIGNvbnN0IHsgdWlkIH0gPSB2Y29tcG9uZW50XHJcbiAgICBjb25zdCB2bm9kZSA9IGdldFN0YXRlbGVzcyh2Y29tcG9uZW50KVxyXG4gICAgY29uc3Qgbm9kZSA9IGluaXRWbm9kZSh2bm9kZSlcclxuICAgIG5vZGUuY2FjaGUgPSBub2RlLmNhY2hlIHx8IHt9XHJcbiAgICBub2RlLmNhY2hlW3VpZF0gPSB2bm9kZVxyXG4gICAgcmV0dXJuIG5vZGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlbGVzcyh2Y29tcG9uZW50KSB7XHJcbiAgICBjb25zdCB7IHR5cGU6IGZhY3RvcnksIHByb3BzIH0gPSB2Y29tcG9uZW50XHJcbiAgICBsZXQgdm5vZGUgPSBmYWN0b3J5KHByb3BzKVxyXG4gICAgaWYgKHZub2RlICYmIHZub2RlLnJlbmRlcikge1xyXG4gICAgICAgIHZub2RlID0gdm5vZGUucmVuZGVyKClcclxuICAgIH1cclxuICAgIHJldHVybiB2bm9kZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudC5yZW5kZXIoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveVZub2RlKHZjb21wb25lbnQsIG5vZGUpIHtcclxuICAgIGNvbnN0IHsgdnR5cGUgfSA9IHZjb21wb25lbnRcclxuICAgIGlmICh2dHlwZSA9PT0gVkVMRU1FTlQpIHtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHZ0eXBlID09PSBWQ09NUE9ORU5UKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVR3b1Zub2RlcyhvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpIHtcclxuICAgIGxldCBuZXdOb2RlID0gbm9kZVxyXG4gICAgaWYgKCFuZXdWbm9kZSkge1xyXG4gICAgICAgIC8v5aaC5p6c5paw6IqC54K55piv56m677yM6ZSA5q+Bbm9kZeW5tuS4lOenu+enu+mZpFxyXG4gICAgICAgIGRlc3Ryb3lWbm9kZShvbGRWbm9kZSwgbm9kZSlcclxuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSlcclxuICAgIH0gZWxzZSBpZiAob2xkVm5vZGUudHlwZSAhPT0gbmV3Vm5vZGUudHlwZSB8fCBvbGRWbm9kZS5rZXkgIT09IG5ld1Zub2RlLmtleSkge1xyXG4gICAgICAgIC8vdHlwZeaIluiAhWtleeS4jeWQjO+8jOWujOWFqOmHjeaehFxyXG4gICAgICAgIGRlc3Ryb3lWbm9kZShvbGRWbm9kZSwgbm9kZSlcclxuICAgICAgICBuZXdOb2RlID0gaW5pdFZub2RlKG5ld1Zub2RlKVxyXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbm9kZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy/pnZ7kuIrov7Dmg4XlhrXliJnmm7TmlrBcclxuICAgICAgICBuZXdOb2RlID0gdXBkYXRlVm5vZGUob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld05vZGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZub2RlKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSkge1xyXG4gICAgY29uc3QgeyB2dHlwZSwgdHlwZSB9ID0gb2xkVm5vZGVcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgIGlmIChvbGRWbm9kZSAhPT0gbmV3Vm5vZGUpIHtcclxuICAgICAgICAgICAgbm9kZS5kYXRhID0gbmV3Vm5vZGVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGVcclxuICAgIH1cclxuXHJcbiAgICBpZiAodnR5cGUgPT09IFZDT01QT05FTlQpIHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlVmNvbXBvbmVudChvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpXHJcbiAgICB9XHJcbiAgICBpZiAodnR5cGUgPT09IFZTVEFURUxFU1MpIHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlU3RhdGVsZXNzKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAodnR5cGUgPT09IFZFTEVNRU5UKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUVsZW1lbnQob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVmNvbXBvbmVudCh2Y29tcG9uZW50LCBuZXdWY29tcG9uZW50LCBub2RlKSB7XHJcbiAgICBsZXQgdWlkID0gdmNvbXBvbmVudC51aWRcclxuICAgIGxldCBjb21wb25lbnQgPSBub2RlLmNhY2hlW3VpZF1cclxuICAgIGxldCB7ICR1cGRhdGVyOiB1cGRhdGVyLCAkY2FjaGU6IGNhY2hlIH0gPSBjb21wb25lbnRcclxuICAgIG5vZGUuY2FjaGVbbmV3VmNvbXBvbmVudC51aWRdID0gY29tcG9uZW50XHJcbiAgICBjb21wb25lbnQuZm9yY2VVcGRhdGUoKVxyXG4gICAgcmV0dXJuIGNhY2hlLm5vZGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlbGVzcyh2Y29tcG9uZW50LCBuZXdWY29tcG9uZW50LCBub2RlKSB7XHJcbiAgICBsZXQgdWlkID0gdmNvbXBvbmVudC51aWRcclxuICAgIGxldCB2bm9kZSA9IG5vZGUuY2FjaGVbdWlkXVxyXG4gICAgZGVsZXRlIG5vZGUuY2FjaGVbdWlkXVxyXG4gICAgbGV0IG5ld1Zub2RlID0gZ2V0U3RhdGVsZXNzKG5ld1Zjb21wb25lbnQpXHJcbiAgICBsZXQgbmV3Tm9kZSA9IGNvbXBhcmVUd29Wbm9kZXModm5vZGUsIG5ld1Zub2RlLCBub2RlKVxyXG4gICAgbmV3Tm9kZS5jYWNoZSA9IG5ld05vZGUuY2FjaGUgfHwge31cclxuICAgIG5ld05vZGUuY2FjaGVbdWlkXSA9IG5ld1Zub2RlXHJcbiAgICByZXR1cm4gbmV3Vm5vZGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKSB7XHJcbiAgICBsZXQgZGlmZlByb3BzID0gZ2V0RGlmZlByb3BzKG9sZFZub2RlLnByb3BzLCBuZXdWbm9kZS5wcm9wcylcclxuICAgIGRpZmZQcm9wcyAmJiBzZXRQcm9wcyhub2RlLCBkaWZmUHJvcHMpXHJcbiAgICB1cGRhdGVDaGlsZHJlbihvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpXHJcbiAgICByZXR1cm4gbm9kZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2hpbGRyZW4ob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKSB7XHJcbiAgICBsZXQgeyBkaWZmLCBuZXdDaGlsZHJlbiwgY2hpbGRyZW4gfSA9IGRpZmZMaXN0KG9sZFZub2RlLCBuZXdWbm9kZSlcclxuICAgIGxldCBjaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzXHJcbiAgICBsZXQgaiA9IDBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobmV3Q2hpbGRyZW4gIT09ICdsaXN0TnVsbCcpIHsvL2xpc3ROdWxs6K+05piO6ZyA6KaB5Yig5o6J77yM5Lya5ZyocGF0Y2jph4zliKDpmaRcclxuICAgICAgICAgICAgY29tcGFyZVR3b1Zub2RlcyhjaGlsZHJlbltpXSwgbmV3Q2hpbGRyZW5baV0sIGNoaWxkTm9kZXNbaSAtIGpdKVxyXG4gICAgICAgICAgICBpZiAobmV3Q2hpbGRyZW5baV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6cbmV3Q2hpbGRyZW5baV0g5pivbnVsbO+8jOivtOaYjuS4jeW4pmtleeW5tuS4lOW3sue7j+iiq+WIoOmZpOS6hu+8jG5vZGVz6ZyA6KaB5ZCR5YmN556s56e75LiA5L2NXHJcbiAgICAgICAgICAgICAgICBqKytcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwYXRjaENoaWxkcmVuKG5vZGUsIGRpZmYpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREaWZmUHJvcHMocHJvcHMsIG5ld1Byb3BzKSB7XHJcbiAgICBsZXQgY2hhbmdlUHJvcHMgPSB7fSxcclxuICAgICAgICBjb3VudCA9IDAsXHJcbiAgICAgICAgaWdub3JlTGlzdCA9IFsnY2hpbGRyZW4nLCAna2V5J11cclxuICAgIGZvciAobGV0IG5hbWUgaW4gcHJvcHMpIHtcclxuICAgICAgICBpZiAobmV3UHJvcHNbbmFtZV0gIT09IHByb3BzW25hbWVdICYmIGlnbm9yZUxpc3QuaW5kZXhPZihuYW1lKSA8IDApIHtcclxuICAgICAgICAgICAgY2hhbmdlUHJvcHNbbmFtZV0gPSBuZXdQcm9wc1tuYW1lXVxyXG4gICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBuZXdQcm9wcykge1xyXG4gICAgICAgIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgaWdub3JlTGlzdC5pbmRleE9mKG5hbWUpIDwgMCkge1xyXG4gICAgICAgICAgICBjaGFuZ2VQcm9wc1tuYW1lXSA9IG5ld1Byb3BzW25hbWVdXHJcbiAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnQgPiAwICYmIGNoYW5nZVByb3BzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9wcyhub2RlLCBwcm9wcykge1xyXG4gICAgbGV0IGlnbm9yZUxpc3QgPSBbJ2NoaWxkcmVuJywgJ2tleSddXHJcbiAgICBmb3IgKGxldCBuYW1lIGluIHByb3BzKSB7XHJcbiAgICAgICAgaWYgKGlnbm9yZUxpc3QuZmluZChyZXMgPT4gcmVzID09PSBuYW1lKSkge1xyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGVPYmplY3QgPSBwcm9wc1tuYW1lXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBzS2V5IGluIHN0eWxlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW3NLZXldID0gc3R5bGVPYmplY3Rbc0tleV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRMaXN0LmluZGV4T2YobmFtZSkgPj0gMCkge1xyXG4gICAgICAgICAgICBhZGRFdmVudChub2RlLCBuYW1lLCBwcm9wc1tuYW1lXSlcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wc1tuYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHByb3BzW25hbWVdKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hDaGlsZHJlbihub2RlLCBkaWZmKSB7XHJcbiAgICBsZXQgY2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2Rlc1xyXG4gICAgZGlmZi5sZW5ndGggPiAwICYmIGRpZmYuZm9yRWFjaChmdW5jdGlvbiAoc2luZ2xlRGlmZikge1xyXG4gICAgICAgIHN3aXRjaCAoc2luZ2xlRGlmZi50eXBlKSB7XHJcbiAgICAgICAgICAgIC8vZGVsZXRlXHJcbiAgICAgICAgICAgIGNhc2UgTU9WRVNfREVMRVRFOlxyXG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW3NpbmdsZURpZmYuaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgLy9hZGRcclxuICAgICAgICAgICAgY2FzZSBNT1ZFU19BREQ6XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IGlzU3RyaW5nKHNpbmdsZURpZmYuaXRlbSkgPyBzaW5nbGVEaWZmLml0ZW0gOiBpbml0Vm5vZGUoc2luZ2xlRGlmZi5pdGVtKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID4gc2luZ2xlRGlmZi5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIGNoaWxkTm9kZXNbc2luZ2xlRGlmZi5pbmRleF0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIC8vbW92ZVxyXG4gICAgICAgICAgICBjYXNlIE1PVkVTX1JFT1JERVI6XHJcbiAgICAgICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShjaGlsZE5vZGVzW3NpbmdsZURpZmYub2xkSW5kZXhdLCBjaGlsZE5vZGVzW3NpbmdsZURpZmYubmV3SW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==