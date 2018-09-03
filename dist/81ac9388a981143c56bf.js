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
            this.setState({
                first: this.state.first + 1
            });
            this.setState({
                first: this.state.first + 2
            });
            this.setState({
                first: this.state.first + 3
            });
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
        // this.setState({
        //     first: 2
        // })
        // this.setState({
        //     first: ++this.state.first,
        //     ullist: [{
        //         key: "g",
        //         value: "g++"
        //     },
        //     {
        //         key: "d",
        //         value: "d++bianhua"
        //     },
        //     {
        //         key: "e",
        //         value: "e++"
        //     },
        //     {
        //         key: "a",
        //         value: "a++"
        //     },
        //     {
        //         key: "c",
        //         value: "a++本来是c"
        //     },
        //     {
        //         key: "f",
        //         value: "f++"
        //     }]
        // })

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


const ReactComponentSymbol = {};

let updateQueue = {
    isPending: false,
    updaters: [],
    add: function (updater) {
        if (this.updaters.indexOf(updater) < 0) {
            this.updaters.push(updater);
        }
    },
    batchUpdate: function () {
        if (this.isPending) {
            return;
        }
        this.isPending = true;
        let updater;
        while (updater = this.updaters.shift()) {
            updater.updateComponent();
        }
        this.isPending = false;
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
        console.log(nextState);
        this.emitUpdate();
    }
    emitUpdate() {
        updateQueue.isPending ? updateQueue.add(this) : this.updateComponent();
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
        console.log($updater.isPending);
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
/*! exports provided: empty, appendChildren, removeProperty, isValidContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChildren", function() { return appendChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProperty", function() { return removeProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidContainer", function() { return isValidContainer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");


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

function isValidContainer(node) {
    return !!(node && (node.nodeType === _utils__WEBPACK_IMPORTED_MODULE_0__["ELEMENT_NODE_TYPE"] || node.nodeType === _utils__WEBPACK_IMPORTED_MODULE_0__["DOC_NODE_TYPE"] || node.nodeType === _utils__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT_FRAGMENT_NODE_TYPE"]));
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
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component */ "./src/utils/Component.js");




function mount(element, node) {
    if (!element.vtype) {
        throw new Error(`cannot render ${element} to container`);
    }
    if (!_DOM__WEBPACK_IMPORTED_MODULE_0__["isValidContainer"](node)) {
        throw new Error(`container ${node} is not a DOM element`);
    }
    //element => component
    const renderedNode = Object(_virturn_dom__WEBPACK_IMPORTED_MODULE_1__["initVnode"])(element);
    _DOM__WEBPACK_IMPORTED_MODULE_0__["empty"](node);
    _DOM__WEBPACK_IMPORTED_MODULE_0__["appendChildren"](node, renderedNode);
    //render本身作为一次大的batchPengding
    //所以在整个mount阶段
    _Component__WEBPACK_IMPORTED_MODULE_2__["updateQueue"].isPending = true;
    //这里应该是触发所有的component()
    _Component__WEBPACK_IMPORTED_MODULE_2__["updateQueue"].isPending = false;
    _Component__WEBPACK_IMPORTED_MODULE_2__["updateQueue"].batchUpdate();
}

/***/ }),

/***/ "./src/utils/event-system.js":
/*!***********************************!*\
  !*** ./src/utils/event-system.js ***!
  \***********************************/
/*! exports provided: unbubbleEvents, addEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbubbleEvents", function() { return unbubbleEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/utils/Component.js");

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
    _Component__WEBPACK_IMPORTED_MODULE_0__["updateQueue"].isPending = true;
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
    _Component__WEBPACK_IMPORTED_MODULE_0__["updateQueue"].isPending = false;
    _Component__WEBPACK_IMPORTED_MODULE_0__["updateQueue"].batchUpdate();
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
/*! exports provided: getUid, VTEXT, VELEMENT, VSTATELESS, VCOMPONENT, MOVES_ADD, MOVES_DELETE, MOVES_REORDER, ELEMENT_NODE_TYPE, DOC_NODE_TYPE, DOCUMENT_FRAGMENT_NODE_TYPE, isString, type, getChildrenFromVcomponent, flatEach, collectChild */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_NODE_TYPE", function() { return ELEMENT_NODE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOC_NODE_TYPE", function() { return DOC_NODE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_FRAGMENT_NODE_TYPE", function() { return DOCUMENT_FRAGMENT_NODE_TYPE; });
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

const ELEMENT_NODE_TYPE = 1;
const DOC_NODE_TYPE = 9;
const DOCUMENT_FRAGMENT_NODE_TYPE = 11;

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
    if (component.componentDidMount) {
        component.componentDidMount();
    }
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
    console.log(1);
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
        } else if (name.startsWith('on') >= 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC90ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL01vdW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ldmVudC1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9saXN0LWRpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92aXJ0dXJuLWRvbS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJBcHAiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiYWxlcnQiLCJzZXRTdGF0ZSIsImZpcnN0Iiwic3RhdGUiLCJ0ZXN0Q2hhbmdlIiwiZXZlbnQiLCJzdHIiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dFZhbHVlIiwiY29sb3IiLCJ1bGxpc3QiLCJrZXkiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnMiLCJyZW5kZXIiLCJtYXAiLCJyZXMiLCJBbGxvdyIsInBwcCIsIlNtYWxsSGVhZGVyIiwiYWFhIiwiY29tcG9tZW50RGlkTW91bnQiLCJNcmVhY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RDb21wb25lbnRTeW1ib2wiLCJ1cGRhdGVRdWV1ZSIsImlzUGVuZGluZyIsInVwZGF0ZXJzIiwiYWRkIiwidXBkYXRlciIsImluZGV4T2YiLCJwdXNoIiwiYmF0Y2hVcGRhdGUiLCJzaGlmdCIsInVwZGF0ZUNvbXBvbmVudCIsIlVwZGF0ZXIiLCJpbnN0YW5jZSIsInBlbmRpbmdTdGF0ZXMiLCJhZGRTdGF0ZSIsIm5leHRTdGF0ZSIsImVtaXRVcGRhdGUiLCJnZXRTdGF0ZSIsIl9wZW5kaW5nU3RhdGUiLCJsZW5ndGgiLCJwYXJ0aWFsU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JjZVVwZGF0ZSIsIiR1cGRhdGVyIiwiJGNhY2hlIiwiaXNNb3VudGVkIiwiaXNSZWFjdENvbXBvbmVudCIsImNvbnRleHQiLCJ2bm9kZSIsIm5vZGUiLCJuZXdWbm9kZSIsInJlbmRlckNvbXBvbmVudCIsImNvbXBhcmVUd29Wbm9kZXMiLCJlbXB0eSIsInNsaWNlIiwiY2FsbCIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGQiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkcmVuIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmRDaGlsZCIsImFwcGVuZCIsInJlbW92ZVByb3BlcnR5IiwicHJvcGVydHkiLCJyZW1vdmVBdHRyaWJ1dGVOb2RlIiwiaXNWYWxpZENvbnRhaW5lciIsIm5vZGVUeXBlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJjb25maWciLCJ2dHlwZSIsInByb3RvdHlwZSIsIkVycm9yIiwicmVmIiwiZmluYWxQcm9wcyIsInByb3BLZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsImZpbmFsQ2hpbGRyZW4iLCJhcmd1TGVuZ3RoIiwiYXJndW1lbnRzIiwiaSIsImNyZWF0ZVZjb21wb25lbnQiLCJtb3VudCIsImVsZW1lbnQiLCJyZW5kZXJlZE5vZGUiLCJpbml0Vm5vZGUiLCJET00iLCJ1bmJ1YmJsZUV2ZW50cyIsIm9ubW91c2Vtb3ZlIiwib250b3VjaG1vdmUiLCJvbm1vdXNlbGVhdmUiLCJvbm1vdXNlZW50ZXIiLCJvbmxvYWQiLCJvbnVubG9hZCIsIm9uc2Nyb2xsIiwib25mb2N1cyIsIm9uYmx1ciIsIm9ucm93ZXhpdCIsIm9uYmVmb3JldW5sb2FkIiwib25zdG9wIiwib25kcmFnZHJvcCIsIm9uZHJhZ2VudGVyIiwib25kcmFnZXhpdCIsIm9uZHJhZ2dlc3R1cmUiLCJvbmRyYWdvdmVyIiwib25jb250ZXh0bWVudSIsIm9uZXJyb3IiLCJvbmFib3J0Iiwib25jYW5wbGF5Iiwib25jYW5wbGF5dGhyb3VnaCIsIm9uZHVyYXRpb25jaGFuZ2UiLCJvbmVtcHRpZWQiLCJvbmVuZGVkIiwib25sb2FkZWRkYXRhIiwib25sb2FkZWRtZXRhZGF0YSIsIm9ubG9hZHN0YXJ0Iiwib25lbmNyeXB0ZWQiLCJvbnBhdXNlIiwib25wbGF5Iiwib25wbGF5aW5nIiwib25wcm9ncmVzcyIsIm9ucmF0ZWNoYW5nZSIsIm9uc2Vla2luZyIsIm9uc2Vla2VkIiwib25zdGFsbGVkIiwib25zdXNwZW5kIiwib250aW1ldXBkYXRlIiwib252b2x1bWVjaGFuZ2UiLCJvbndhaXRpbmciLCJnZXRFdmVudE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImV2ZW50VHlwZXMiLCJhZGRFdmVudCIsImV2ZW50TmFtZSIsImV2ZW50Q29udGVudCIsImV2ZW50VHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJzdHIiLCJkaXNwYXRjaEV2ZW50IiwiaXNTdXBwb3J0Q2hhbmdlIiwibGlzdGVuZXIiLCJwYXJlbnROb2RlIiwidGFnTmFtZSIsImRpZmZMaXN0Iiwib2xkVm5vZGUiLCJvbGRMaXN0IiwibmV3TGlzdCIsIm9sZE1hcCIsIm1ha2VLZXlJbmRleEFuZEZyZWUiLCJuZXdNYXAiLCJuZXdLZXlMaXN0Iiwia2V5SW5kZXgiLCJvbGRLZXlMaXN0IiwibmV3RnJlZUxpc3QiLCJmcmVlIiwiaXRlbSIsIml0ZW1LZXkiLCJnZXRJdGVtS2V5IiwibmV3SW5kZXgiLCJqIiwiayIsIm9sZFNvcnRMaXN0IiwiaW5kZXgiLCJmaWx0ZXJMaXN0IiwiZmlsdGVyIiwib2xkSW5kZXgiLCJpbnNlcnQiLCJzcGxpY2UiLCJkaWZmIiwibmV3Q2hpbGRyZW4iLCJsaXN0IiwidWlkIiwiZ2V0VWlkIiwiVlRFWFQiLCJWRUxFTUVOVCIsIlZTVEFURUxFU1MiLCJWQ09NUE9ORU5UIiwiTU9WRVNfQUREIiwiTU9WRVNfREVMRVRFIiwiTU9WRVNfUkVPUkRFUiIsIkVMRU1FTlRfTk9ERV9UWVBFIiwiRE9DX05PREVfVFlQRSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREVfVFlQRSIsImlzU3RyaW5nIiwib2JqIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZ2V0Q2hpbGRyZW5Gcm9tVmNvbXBvbmVudCIsInZjb21wb25lbnQiLCJ2Y2hpbGRyZW4iLCJmbGF0RWFjaCIsImNvbGxlY3RDaGlsZCIsIml0ZXJhdGVlIiwiYSIsImxlbiIsInRvSlMiLCJpbml0VGV4dCIsImluaXRFbGVtZW50IiwiaW5pdENvbXBvbmVudCIsImluaXRTdGF0ZWxlc3MiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJzZXRQcm9wcyIsImNoaWxkVm5vZGUiLCJjb21wb25lbnQiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjYWNoZSIsImdldFN0YXRlbGVzcyIsImZhY3RvcnkiLCJkZXN0cm95Vm5vZGUiLCJuZXdOb2RlIiwicmVwbGFjZUNoaWxkIiwidXBkYXRlVm5vZGUiLCJkYXRhIiwidXBkYXRlVmNvbXBvbmVudCIsInVwZGF0ZVN0YXRlbGVzcyIsInVwZGF0ZUVsZW1lbnQiLCJuZXdWY29tcG9uZW50IiwiZGlmZlByb3BzIiwiZ2V0RGlmZlByb3BzIiwidXBkYXRlQ2hpbGRyZW4iLCJwYXRjaENoaWxkcmVuIiwibmV3UHJvcHMiLCJjaGFuZ2VQcm9wcyIsImNvdW50IiwiaWdub3JlTGlzdCIsIm5hbWUiLCJmaW5kIiwic3R5bGVPYmplY3QiLCJzS2V5Iiwic3R5bGUiLCJzdGFydHNXaXRoIiwic2V0QXR0cmlidXRlIiwic2luZ2xlRGlmZiIsImluc2VydEJlZm9yZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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TUFBWCxHQUFvQnlNLFdBQVd2RSxLQUFuQyxFQUEwQztBQUN0Q3ZILHlCQUFLK0wsWUFBTCxDQUFrQnhCLE9BQWxCLEVBQTJCaEssV0FBV3VMLFdBQVd2RSxLQUF0QixDQUEzQjtBQUNILGlCQUZELE1BRU87QUFDSHZILHlCQUFLZSxXQUFMLENBQWlCd0osT0FBakI7QUFDSDtBQUNEO0FBQ0o7QUFDQSxpQkFBSyxvREFBTDtBQUNJdksscUJBQUsrTCxZQUFMLENBQWtCeEwsV0FBV3VMLFdBQVdwRSxRQUF0QixDQUFsQixFQUFtRG5ILFdBQVd1TCxXQUFXM0UsUUFBdEIsQ0FBbkQ7QUFDQTtBQWpCUjtBQW1CSCxLQXBCa0IsQ0FBbkI7QUFxQkgsQyIsImZpbGUiOiI4MWFjOTM4OGE5ODExNDNjNTZiZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBNcmVhY3QgZnJvbSAnLi4vdXRpbHMnXG5jb25zdCB7IENvbXBvbmVudCB9ID0gTXJlYWN0XG5pbXBvcnQgU21hbGxIZWFkZXIgZnJvbSAnLi90ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZmlyc3Q6IDEsXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bGxpc3Q6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImErK1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJiXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImIrK1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImMrK1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImQrK1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIGxldCBmaXJzdCA9IDFcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vICAgICBmaXJzdDogMlxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLy8gICAgIGZpcnN0OiArK3RoaXMuc3RhdGUuZmlyc3QsXG4gICAgICAgIC8vICAgICB1bGxpc3Q6IFt7XG4gICAgICAgIC8vICAgICAgICAga2V5OiBcImdcIixcbiAgICAgICAgLy8gICAgICAgICB2YWx1ZTogXCJnKytcIlxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBrZXk6IFwiZFwiLFxuICAgICAgICAvLyAgICAgICAgIHZhbHVlOiBcImQrK2JpYW5odWFcIlxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBrZXk6IFwiZVwiLFxuICAgICAgICAvLyAgICAgICAgIHZhbHVlOiBcImUrK1wiXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGtleTogXCJhXCIsXG4gICAgICAgIC8vICAgICAgICAgdmFsdWU6IFwiYSsrXCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAga2V5OiBcImNcIixcbiAgICAgICAgLy8gICAgICAgICB2YWx1ZTogXCJhKyvmnKzmnaXmmK9jXCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAga2V5OiBcImZcIixcbiAgICAgICAgLy8gICAgICAgICB2YWx1ZTogXCJmKytcIlxuICAgICAgICAvLyAgICAgfV1cbiAgICAgICAgLy8gfSlcblxuICAgIH1cblxuICAgIGFsZXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpcnN0OnRoaXMuc3RhdGUuZmlyc3QgKyAxXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlyc3Q6dGhpcy5zdGF0ZS5maXJzdCArIDJcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaXJzdDp0aGlzLnN0YXRlLmZpcnN0ICsgM1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zKGV2ZW50LCBrZXkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RhcmdldCcpXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXMua2V5ID0+IFwiLCBrZXkpXG4gICAgfVxuICAgIHRlc3RDaGFuZ2UgPSAoZXZlbnQsIHN0cikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmlyc3R9XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnVsbGlzdC5tYXAocmVzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cmVzLmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gdGhpcy5jb25zKGV2ZW50LCByZXMua2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3Jlcy52YWx1ZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy50ZXN0Q2hhbmdlKGV2ZW50LCAnc3RyJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3RoaXMuc3RhdGUuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFsZXJ0fVxuICAgICAgICAgICAgICAgICAgICA+SGVhZGluZyAxPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxTbWFsbEhlYWRlciAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPEFsbG93IHBwcD17dGhpcy5zdGF0ZS5maXJzdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyID5IZWFkaW5nIDIge3RoaXMuc3RhdGUuZmlyc3R9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5maXJzdH08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjI8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgzPkhlYWRpbmcgMzwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gQWxsb3coeyBwcHAgfSkge1xuICAgIHJldHVybiA8ZGl2PntwcHB9ICsg6L+Z5piv57qv5Ye95pWwPC9kaXY+XG59IiwiaW1wb3J0IE1yZWFjdCBmcm9tICcuLi91dGlscydcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBNcmVhY3RcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hbGxIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWFhOiAxXG4gICAgICAgIH1cbiAgICAgICAgLy8gbGV0IGFhYSA9IDFcbiAgICB9XG4gICAgY29tcG9tZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgYWFhOiArK2FhYVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfSwgMzAwKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aDU+e3RoaXMuc3RhdGUuYWFhfSArKysg6L+Z5piv5YaF6YOoY29tcG9uZW50PC9oNT5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBNcmVhY3QgZnJvbSAnLi91dGlscydcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnQvYXBwJ1xuXG5NcmVhY3QucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpIiwiaW1wb3J0IHsgcmVuZGVyQ29tcG9uZW50LCBjb21wYXJlVHdvVm5vZGVzIH0gZnJvbSAnLi92aXJ0dXJuLWRvbSdcblxuY29uc3QgUmVhY3RDb21wb25lbnRTeW1ib2wgPSB7fVxuXG5leHBvcnQgbGV0IHVwZGF0ZVF1ZXVlID0ge1xuICAgIGlzUGVuZGluZzogZmFsc2UsXG4gICAgdXBkYXRlcnM6IFtdLFxuICAgIGFkZDogZnVuY3Rpb24gKHVwZGF0ZXIpe1xuICAgICAgICBpZiAodGhpcy51cGRhdGVycy5pbmRleE9mKHVwZGF0ZXIpIDwgMCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVycy5wdXNoKHVwZGF0ZXIpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJhdGNoVXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUGVuZGluZykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1BlbmRpbmcgPSB0cnVlXG4gICAgICAgIGxldCB1cGRhdGVyXG4gICAgICAgIHdoaWxlICh1cGRhdGVyID0gdGhpcy51cGRhdGVycy5zaGlmdCgpKSB7XG4gICAgICAgICAgICB1cGRhdGVyLnVwZGF0ZUNvbXBvbmVudCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1BlbmRpbmcgPSBmYWxzZVxuICAgIH1cbn1cblxuY2xhc3MgVXBkYXRlciB7XG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgICAgIHRoaXMucGVuZGluZ1N0YXRlcyA9IFtdXG4gICAgICAgIHRoaXMuaXNQZW5kaW5nID0gZmFsc2VcbiAgICB9XG5cbiAgICBhZGRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nU3RhdGVzLnB1c2gobmV4dFN0YXRlKVxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0U3RhdGUpXG4gICAgICAgIHRoaXMuZW1pdFVwZGF0ZSgpXG4gICAgfVxuICAgIGVtaXRVcGRhdGUoKSB7XG4gICAgICAgIHVwZGF0ZVF1ZXVlLmlzUGVuZGluZ1xuICAgICAgICAgICAgPyB1cGRhdGVRdWV1ZS5hZGQodGhpcylcbiAgICAgICAgICAgIDogdGhpcy51cGRhdGVDb21wb25lbnQoKVxuICAgIH1cbiAgICBnZXRTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyBpbnN0YW5jZSB9ID0gdGhpc1xuICAgICAgICBsZXQgX3BlbmRpbmdTdGF0ZSA9IGluc3RhbmNlLnN0YXRlXG4gICAgICAgIHdoaWxlICh0aGlzLnBlbmRpbmdTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHBhcnRpYWxTdGF0ZSA9IHRoaXMucGVuZGluZ1N0YXRlcy5zaGlmdCgpXG4gICAgICAgICAgICBfcGVuZGluZ1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2Uuc3RhdGUsIHBhcnRpYWxTdGF0ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3BlbmRpbmdTdGF0ZVxuICAgIH1cblxuICAgIHVwZGF0ZUNvbXBvbmVudCgpIHtcbiAgICAgICAgbGV0IHsgaW5zdGFuY2UgfSA9IHRoaXNcbiAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKVxuICAgIH1cbn1cblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLiR1cGRhdGVyID0gbmV3IFVwZGF0ZXIodGhpcylcbiAgICAgICAgdGhpcy4kY2FjaGUgPSB7XG4gICAgICAgICAgICBpc01vdW50ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzXG4gICAgfVxuXG4gICAgaXNSZWFjdENvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0Q29tcG9uZW50U3ltYm9sXG4gICAgfVxuXG4gICAgZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGxldCB7ICR1cGRhdGVyLCAkY2FjaGUsIHByb3BzLCBjb250ZXh0IH0gPSB0aGlzXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICAgIGNvbnNvbGUubG9nKCR1cGRhdGVyLmlzUGVuZGluZylcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICR1cGRhdGVyLmdldFN0YXRlKClcbiAgICAgICAgbGV0IHsgdm5vZGUsIG5vZGUgfSA9ICRjYWNoZVxuICAgICAgICBsZXQgbmV3Vm5vZGUgPSByZW5kZXJDb21wb25lbnQodGhpcylcbiAgICAgICAgJGNhY2hlLnZub2RlID0gbmV3Vm5vZGVcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVUd29Wbm9kZXModm5vZGUsIG5ld1Zub2RlLCBub2RlKVxuICAgIH1cblxuICAgIHNldFN0YXRlKHBhcnRpYWxTdGF0ZSkge1xuICAgICAgICB0aGlzLiR1cGRhdGVyLmFkZFN0YXRlKHBhcnRpYWxTdGF0ZSlcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQiLCJpbXBvcnQge1xuICAgIEVMRU1FTlRfTk9ERV9UWVBFLFxuICAgIERPQ19OT0RFX1RZUEUsXG4gICAgRE9DVU1FTlRfRlJBR01FTlRfTk9ERV9UWVBFXG59IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eShub2RlKSB7XG4gICAgW10uc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4obm9kZSwgY2hpbGRyZW4pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKVxuICAgICAgICB9KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGRyZW4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIG5vZGUuYXBwZW5kKGNoaWxkcmVuKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvcGVydHkobm9kZSwgcHJvcGVydHkpIHtcbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZU5vZGUocHJvcGVydHkpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRDb250YWluZXIobm9kZSkge1xuICAgIHJldHVybiAhIShub2RlICYmIChcbiAgICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFX1RZUEUgfHxcbiAgICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gRE9DX05PREVfVFlQRSB8fFxuICAgICAgICBub2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFX1RZUEVcbiAgICApKVxufSIsImltcG9ydCB7IGNyZWF0ZVZjb21wb25lbnQgfSBmcm9tICcuL3ZpcnR1cm4tZG9tJ1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCdcbmltcG9ydCB7XG4gICAgVlRFWFQsXG4gICAgVkVMRU1FTlQsXG4gICAgVlNUQVRFTEVTUyxcbiAgICBWQ09NUE9ORU5UXG59IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICAgIGxldCB2dHlwZSA9IG51bGxcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgdnR5cGUgPSBWVEVYVFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZ0eXBlID0gVkVMRU1FTlRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgICAgICAgICB2dHlwZSA9IFZDT01QT05FTlRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZ0eXBlID0gVlNUQVRFTEVTU1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWFjdC5jcmVhdGVFbGVtZW50OiB1bmV4cGVjdCB0eXBlIFsgJHt0eXBlfSBdYClcbiAgICB9XG5cbiAgICBsZXQga2V5ID0gbnVsbCxcbiAgICAgICAgcmVmID0gbnVsbFxuICAgIGxldCBmaW5hbFByb3BzID0ge31cbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvcEtleSBpbiBjb25maWcpIHtcbiAgICAgICAgICAgIGlmICghY29uZmlnLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wS2V5ID09PSAna2V5Jykge1xuICAgICAgICAgICAgICAgIGtleSA9ICcnICsgY29uZmlnW3Byb3BLZXldXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BLZXkgPT09ICdyZWYnKSB7XG4gICAgICAgICAgICAgICAgcmVmID0gY29uZmlnW3Byb3BLZXldXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbmFsUHJvcHNbcHJvcEtleV0gPSBjb25maWdbcHJvcEtleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHNcbiAgICBpZiAoZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IHByb3BLZXkgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICBpZiAoZmluYWxQcm9wc1twcm9wS2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZmluYWxQcm9wc1twcm9wS2V5XSA9IGRlZmF1bHRQcm9wc1twcm9wS2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGZpbmFsQ2hpbGRyZW4gPSBjaGlsZHJlblxuICAgIGxldCBhcmd1TGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIGlmIChhcmd1TGVuZ3RoID4gMykge1xuICAgICAgICBmaW5hbENoaWxkcmVuID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBhcmd1TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZpbmFsQ2hpbGRyZW4ucHVzaChhcmd1bWVudHNbaV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgKGZpbmFsQ2hpbGRyZW4pIHtcbiAgICAgICAgZmluYWxQcm9wcy5jaGlsZHJlbiA9IGZpbmFsQ2hpbGRyZW4gfHwgW11cbiAgICAvLyB9XG4gICAgcmV0dXJuIGNyZWF0ZVZjb21wb25lbnQoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2dHlwZSxcbiAgICAgICAgcHJvcHM6IGZpbmFsUHJvcHMsXG4gICAgICAgIGtleSxcbiAgICAgICAgcmVmXG4gICAgfSlcbn0iLCJpbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET00nXG5pbXBvcnQgeyBpbml0Vm5vZGUgfSBmcm9tICcuL3ZpcnR1cm4tZG9tJ1xuaW1wb3J0IHsgdXBkYXRlUXVldWUgfSBmcm9tICcuL0NvbXBvbmVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW91bnQoZWxlbWVudCwgbm9kZSkge1xuICAgIGlmICghZWxlbWVudC52dHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGNhbm5vdCByZW5kZXIgJHtlbGVtZW50fSB0byBjb250YWluZXJgKVxuICAgIH1cbiAgICBpZiAoIURPTS5pc1ZhbGlkQ29udGFpbmVyKG5vZGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgY29udGFpbmVyICR7bm9kZX0gaXMgbm90IGEgRE9NIGVsZW1lbnRgKVxuICAgIH1cbiAgICAvL2VsZW1lbnQgPT4gY29tcG9uZW50XG4gICAgY29uc3QgcmVuZGVyZWROb2RlID0gaW5pdFZub2RlKGVsZW1lbnQpXG4gICAgRE9NLmVtcHR5KG5vZGUpXG4gICAgRE9NLmFwcGVuZENoaWxkcmVuKG5vZGUsIHJlbmRlcmVkTm9kZSlcbiAgICAvL3JlbmRlcuacrOi6q+S9nOS4uuS4gOasoeWkp+eahGJhdGNoUGVuZ2RpbmdcbiAgICAvL+aJgOS7peWcqOaVtOS4qm1vdW506Zi25q61XG4gICAgdXBkYXRlUXVldWUuaXNQZW5kaW5nID0gdHJ1ZVxuICAgIC8v6L+Z6YeM5bqU6K+l5piv6Kem5Y+R5omA5pyJ55qEY29tcG9uZW50KClcbiAgICB1cGRhdGVRdWV1ZS5pc1BlbmRpbmcgPSBmYWxzZVxuICAgIHVwZGF0ZVF1ZXVlLmJhdGNoVXBkYXRlKClcbn1cbiIsImltcG9ydCB7IHVwZGF0ZVF1ZXVlIH0gZnJvbSAnLi9Db21wb25lbnQnXG4vLyBldmVudCBjb25maWdcbmV4cG9ydCBjb25zdCB1bmJ1YmJsZUV2ZW50cyA9IHtcbiAgICAvKipcbiAgICAgKiBzaG91bGQgbm90IGJpbmQgbW91c2Vtb3ZlIGluIGRvY3VtZW50IHNjb3BlXG4gICAgICogZXZlbiB0aG91Z2ggbW91c2Vtb3ZlIGV2ZW50IGNhbiBidWJibGVcbiAgICAgKi9cbiAgICBvbm1vdXNlbW92ZTogMSxcbiAgICBvbnRvdWNobW92ZTogMSxcbiAgICBvbm1vdXNlbGVhdmU6IDEsXG4gICAgb25tb3VzZWVudGVyOiAxLFxuICAgIG9ubG9hZDogMSxcbiAgICBvbnVubG9hZDogMSxcbiAgICBvbnNjcm9sbDogMSxcbiAgICBvbmZvY3VzOiAxLFxuICAgIG9uYmx1cjogMSxcbiAgICBvbnJvd2V4aXQ6IDEsXG4gICAgb25iZWZvcmV1bmxvYWQ6IDEsXG4gICAgb25zdG9wOiAxLFxuICAgIG9uZHJhZ2Ryb3A6IDEsXG4gICAgb25kcmFnZW50ZXI6IDEsXG4gICAgb25kcmFnZXhpdDogMSxcbiAgICBvbmRyYWdnZXN0dXJlOiAxLFxuICAgIG9uZHJhZ292ZXI6IDEsXG4gICAgb25jb250ZXh0bWVudTogMSxcbiAgICBvbmVycm9yOiAxLFxuXG4gICAgLy8gbWVkaWEgZXZlbnRcbiAgICBvbmFib3J0OiAxLFxuICAgIG9uY2FucGxheTogMSxcbiAgICBvbmNhbnBsYXl0aHJvdWdoOiAxLFxuICAgIG9uZHVyYXRpb25jaGFuZ2U6IDEsXG4gICAgb25lbXB0aWVkOiAxLFxuICAgIG9uZW5kZWQ6IDEsXG4gICAgb25sb2FkZWRkYXRhOiAxLFxuICAgIG9ubG9hZGVkbWV0YWRhdGE6IDEsXG4gICAgb25sb2Fkc3RhcnQ6IDEsXG4gICAgb25lbmNyeXB0ZWQ6IDEsXG4gICAgb25wYXVzZTogMSxcbiAgICBvbnBsYXk6IDEsXG4gICAgb25wbGF5aW5nOiAxLFxuICAgIG9ucHJvZ3Jlc3M6IDEsXG4gICAgb25yYXRlY2hhbmdlOiAxLFxuICAgIG9uc2Vla2luZzogMSxcbiAgICBvbnNlZWtlZDogMSxcbiAgICBvbnN0YWxsZWQ6IDEsXG4gICAgb25zdXNwZW5kOiAxLFxuICAgIG9udGltZXVwZGF0ZTogMSxcbiAgICBvbnZvbHVtZWNoYW5nZTogMSxcbiAgICBvbndhaXRpbmc6IDEsXG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50TmFtZShrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnb25Eb3VibGVDbGljaycpIHtcbiAgICAgICAga2V5ID0gJ29uZGJsY2xpY2snXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdvblRvdWNoVGFwJykge1xuICAgICAgICBrZXkgPSAnb25jbGljaydcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5LnRvTG93ZXJDYXNlKClcbn1cblxuY29uc3QgZXZlbnRUeXBlcyA9IHt9XG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnQobm9kZSwgZXZlbnROYW1lLCBldmVudENvbnRlbnQpIHtcbiAgICAvLyBjb25zdCB0YWdOYW1lID0gbm9kZS50YWdOYW1lXG4gICAgLy8gY29uc29sZS5sb2codGFnTmFtZSlcbiAgICBldmVudE5hbWUgPSBnZXRFdmVudE5hbWUoZXZlbnROYW1lKVxuICAgIGxldCBldmVudFR5cGUgPSBub2RlLmV2ZW50VHlwZSB8fCAobm9kZS5ldmVudFR5cGUgPSB7fSlcbiAgICBldmVudFR5cGVbZXZlbnROYW1lXSA9IGV2ZW50Q29udGVudFxuICAgIGlmICh1bmJ1YmJsZUV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpKSB7XG4gICAgICAgIC8v5LiN5Y+v5YaS5rOh55qEXG4gICAgfSBlbHNlIGlmICghZXZlbnRUeXBlc1tldmVudE5hbWVdKSB7XG4gICAgICAgIC8v5Y+v5YaS5rOh55qE77yM5Y+q6ZyA6KaB57uR5a6a5LiA5qyhXG4gICAgICAgIGV2ZW50VHlwZXNbZXZlbnROYW1lXSA9IHRydWVcbiAgICAgICAgLy/ljrvmjonliY3pnaLnmoRvblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZS5zdWJzdHIoMiksIGRpc3BhdGNoRXZlbnQsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmIChldmVudE5hbWUgPT09ICdvbmNoYW5nZScgJiYgaXNTdXBwb3J0Q2hhbmdlKG5vZGUpKSB7XG4gICAgICAgIGFkZEV2ZW50KG5vZGUsICdvbmlucHV0JywgZXZlbnRDb250ZW50KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChldmVudCkge1xuICAgIGxldCB7IHR5cGUsIHRhcmdldCB9ID0gZXZlbnRcbiAgICBsZXQgZXZlbnROYW1lID0gJ29uJyArIHR5cGVcbiAgICB1cGRhdGVRdWV1ZS5pc1BlbmRpbmcgPSB0cnVlXG4gICAgd2hpbGUgKHRhcmdldCkge1xuICAgICAgICBsZXQgZXZlbnRUeXBlID0gdGFyZ2V0LmV2ZW50VHlwZSB8fCAodGFyZ2V0LmV2ZW50VHlwZSA9IHt9KVxuICAgICAgICBsZXQgbGlzdGVuZXIgPSBldmVudFR5cGVbZXZlbnROYW1lXVxuICAgICAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lci5jYWxsKHRhcmdldCwgZXZlbnQpXG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlXG4gICAgfVxuICAgIHVwZGF0ZVF1ZXVlLmlzUGVuZGluZyA9IGZhbHNlXG4gICAgdXBkYXRlUXVldWUuYmF0Y2hVcGRhdGUoKVxufVxuXG5mdW5jdGlvbiBpc1N1cHBvcnRDaGFuZ2UodGFyZ2V0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ2lucHV0JyB8fCB0YWdOYW1lID09PSAnc2VsZWN0JyB8fCB0YWdOYW1lID09PSAndGV4dGFyZWEnXG59IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9FbGVtZW50LmpzJ1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudC5qcydcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9Nb3VudC5qcydcblxuZXhwb3J0IGRlZmF1bHQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQsIHJlbmRlciB9XG4iLCJpbXBvcnQge1xuICAgIE1PVkVTX0FERCxcbiAgICBNT1ZFU19ERUxFVEUsXG4gICAgTU9WRVNfUkVPUkRFUixcbn0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZMaXN0KG9sZFZub2RlLCBuZXdWbm9kZSkge1xuICAgIGxldCBvbGRMaXN0ID0gb2xkVm5vZGUucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIG5ld0xpc3QgPSBuZXdWbm9kZS5wcm9wcy5jaGlsZHJlblxuICAgIG9sZExpc3QgPSBBcnJheS5pc0FycmF5KG9sZExpc3QpICYmIG9sZExpc3QgPyBvbGRMaXN0IDogW29sZExpc3RdXG4gICAgbmV3TGlzdCA9IEFycmF5LmlzQXJyYXkobmV3TGlzdCkgJiYgbmV3TGlzdCA/IG5ld0xpc3QgOiBbbmV3TGlzdF1cbiAgICBjb25zdCBvbGRNYXAgPSBtYWtlS2V5SW5kZXhBbmRGcmVlKG9sZExpc3QpLFxuICAgICAgICBuZXdNYXAgPSBtYWtlS2V5SW5kZXhBbmRGcmVlKG5ld0xpc3QpXG5cbiAgICBjb25zdCBuZXdLZXlMaXN0ID0gbmV3TWFwLmtleUluZGV4LFxuICAgICAgICBvbGRLZXlMaXN0ID0gb2xkTWFwLmtleUluZGV4XG5cbiAgICBjb25zdCBuZXdGcmVlTGlzdCA9IG5ld01hcC5mcmVlXG4gICAgbGV0IGRpZmZMaXN0ID0gW10sXG4gICAgICAgIGNoaWxkcmVuID0gW11cblxuICAgIG9sZExpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUtleSA9IGdldEl0ZW1LZXkoaXRlbSlcbiAgICAgICAgaWYgKGl0ZW1LZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gbmV3S2V5TGlzdC5pbmRleE9mKGl0ZW1LZXkpXG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKFxuICAgICAgICAgICAgICAgIG5ld0luZGV4ID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyBuZXdMaXN0W25ld0luZGV4XVxuICAgICAgICAgICAgICAgICAgICA6ICdsaXN0TnVsbCdcbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2gobmV3RnJlZUxpc3Quc2hpZnQoKSB8fCBudWxsKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCBpID0gMCwgaiA9IDAsIGsgPSAwXG4gICAgLy/kuI3lj5hcbiAgICBjb25zdCBvbGRTb3J0TGlzdCA9IG9sZEtleUxpc3QubWFwKFxuICAgICAgICByZXMgPT4gbmV3S2V5TGlzdC5pbmRleE9mKHJlcykgPj0gMFxuICAgICAgICAgICAgPyBuZXdLZXlMaXN0LmluZGV4T2YocmVzKVxuICAgICAgICAgICAgOiBudWxsXG4gICAgKVxuXG4gICAgd2hpbGUgKGkgPCBvbGRTb3J0TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKG9sZFNvcnRMaXN0W2ldID09PSBudWxsKSB7XG4gICAgICAgICAgICBkaWZmTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmRleDogaSAtIGosXG4gICAgICAgICAgICAgICAgdHlwZTogTU9WRVNfREVMRVRFLy/liKDpmaRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2og55So5LqO5qih5Lu/5Yig6Zmk55qE5pON5L2cXG4gICAgICAgICAgICAvLyDlm6DkuLrnnJ/lrp7nmoToioLngrnliKDpmaTlkI7vvIxp6ZyA6KaB5ZCR5YmN56e75Yqo5LiA5L2NXG4gICAgICAgICAgICBqKytcbiAgICAgICAgfVxuICAgICAgICBpKytcbiAgICB9XG4gICAgLy/liKDpmaTlkI7nmoRvbGRTb3J0TGlzdFxuICAgIGxldCBmaWx0ZXJMaXN0ID0gb2xkU29ydExpc3QuZmlsdGVyKHJlcyA9PiByZXMgIT09IG51bGwpXG4gICAgd2hpbGUgKGsgPCBuZXdLZXlMaXN0Lmxlbmd0aCkge1xuICAgICAgICBsZXQgb2xkSW5kZXggPSBmaWx0ZXJMaXN0LmluZGV4T2YoaylcbiAgICAgICAgaWYgKG9sZEluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGlmIChrICE9PSBvbGRJbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBpbnNlcnQgPSBmaWx0ZXJMaXN0LnNwbGljZShvbGRJbmRleCwgMSlbMF1cbiAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0LnNwbGljZShrLCAwLCBpbnNlcnQpXG4gICAgICAgICAgICAgICAgZGlmZkxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4OiBrLFxuICAgICAgICAgICAgICAgICAgICBvbGRJbmRleDogb2xkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1PVkVTX1JFT1JERVIgLy/mjaLkvY3nva5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVyTGlzdC5zcGxpY2UoaywgMCwgaylcbiAgICAgICAgICAgIGRpZmZMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGluZGV4OiBrLFxuICAgICAgICAgICAgICAgIGl0ZW06IG5ld0xpc3Rba10sXG4gICAgICAgICAgICAgICAgdHlwZTogTU9WRVNfQUREIC8v5paw5aKeXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGsrK1xuICAgIH1cblxuICAgIHdoaWxlIChuZXdGcmVlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRpZmZMaXN0LnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICAgIGl0ZW06IG5ld0ZyZWVMaXN0LnNoaWZ0KCksXG4gICAgICAgICAgICB0eXBlOiBNT1ZFU19BREQgLy/mlrDlop5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaWZmOiBkaWZmTGlzdCxcbiAgICAgICAgbmV3Q2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgICBjaGlsZHJlbjogb2xkTGlzdFxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBtYWtlS2V5SW5kZXhBbmRGcmVlKGxpc3QpIHtcbiAgICBsZXQga2V5SW5kZXggPSBbXSxcbiAgICAgICAgZnJlZSA9IFtdXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXlJbmRleCxcbiAgICAgICAgICAgIGZyZWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IGl0ZW1LZXkgPSBnZXRJdGVtS2V5KGl0ZW0pXG4gICAgICAgIGlmIChpdGVtS2V5KSB7XG4gICAgICAgICAgICBrZXlJbmRleC5wdXNoKGl0ZW1LZXkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcmVlLnB1c2goaXRlbSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5SW5kZXgsXG4gICAgICAgIGZyZWVcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRJdGVtS2V5KGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5rZXlcbn0iLCJsZXQgdWlkID0gMFxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VWlkKCkge1xuICAgIHJldHVybiArK3VpZFxufVxuXG5leHBvcnQgY29uc3QgVlRFWFQgPSAxXG5leHBvcnQgY29uc3QgVkVMRU1FTlQgPSAyXG5leHBvcnQgY29uc3QgVlNUQVRFTEVTUyA9IDNcbmV4cG9ydCBjb25zdCBWQ09NUE9ORU5UID0gNFxuXG5leHBvcnQgY29uc3QgTU9WRVNfQUREID0gJ2FkZCdcbmV4cG9ydCBjb25zdCBNT1ZFU19ERUxFVEUgPSAnZGVsZXRlJ1xuZXhwb3J0IGNvbnN0IE1PVkVTX1JFT1JERVIgPSAncmVvcmRlcidcblxuZXhwb3J0IGNvbnN0IEVMRU1FTlRfTk9ERV9UWVBFID0gMVxuZXhwb3J0IGNvbnN0IERPQ19OT0RFX1RZUEUgPSA5XG5leHBvcnQgY29uc3QgRE9DVU1FTlRfRlJBR01FTlRfTk9ERV9UWVBFID0gMTFcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKGl0ZW0pIHtcbiAgICByZXR1cm4gdHlwZShpdGVtKSA9PT0gJ1N0cmluZydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGUob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopLnJlcGxhY2UoL1xcW29iamVjdFxcc3xcXF0vZywgJycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZHJlbkZyb21WY29tcG9uZW50KHZjb21wb25lbnQpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdmNvbXBvbmVudC5wcm9wc1xuICAgIGxldCB2Y2hpbGRyZW4gPSBbXVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICBmbGF0RWFjaChjaGlsZHJlbiwgY29sbGVjdENoaWxkLCB2Y2hpbGRyZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGVjdENoaWxkKGNoaWxkcmVuLCB2Y2hpbGRyZW4pXG4gICAgfVxuICAgIHJldHVybiB2Y2hpbGRyZW5cblxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0RWFjaChsaXN0LCBpdGVyYXRlZSwgYSkge1xuICAgIGxldCBsZW4gPSBsaXN0Lmxlbmd0aFxuICAgIGxldCBpID0gLTFcblxuICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICBsZXQgaXRlbSA9IGxpc3RbKytpXVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgZmxhdEVhY2goaXRlbSwgaXRlcmF0ZWUsIGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVyYXRlZShpdGVtLCBhKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdENoaWxkKGNoaWxkLCBjaGlsZHJlbikge1xuICAgIGlmIChjaGlsZCAhPSBudWxsICYmIHR5cGVvZiBjaGlsZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmICghY2hpbGQudnR5cGUpIHtcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgaW1tdXRhYmxlanMgZGF0YVxuICAgICAgICAgICAgaWYgKGNoaWxkLnRvSlMpIHtcbiAgICAgICAgICAgICAgICBjaGlsZCA9IGNoaWxkLnRvSlMoKVxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBmbGF0RWFjaChjaGlsZCwgY29sbGVjdENoaWxkLCBjaGlsZHJlbilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0Q2hpbGQoY2hpbGQsIGNoaWxkcmVuKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkID0gJycgKyBjaGlsZFxuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aF0gPSBjaGlsZFxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET00nXG5pbXBvcnQgeyBnZXRVaWQgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgZGlmZkxpc3QgfSBmcm9tICcuL2xpc3QtZGlmZidcbmltcG9ydCB7XG4gICAgVlRFWFQsXG4gICAgVkVMRU1FTlQsXG4gICAgVlNUQVRFTEVTUyxcbiAgICBWQ09NUE9ORU5ULFxuICAgIGdldENoaWxkcmVuRnJvbVZjb21wb25lbnQsXG4gICAgTU9WRVNfQURELFxuICAgIE1PVkVTX0RFTEVURSxcbiAgICBNT1ZFU19SRU9SREVSLFxuICAgIGlzU3RyaW5nXG59IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgeyBldmVudExpc3QsIGFkZEV2ZW50IH0gZnJvbSAnLi9ldmVudC1zeXN0ZW0nXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWY29tcG9uZW50KHsgdnR5cGUsIHR5cGUsIHByb3BzLCBrZXksIHJlZiB9KSB7XG4gICAgbGV0IHZjb21wb25lbnQgPSB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIHByb3BzLFxuICAgICAgICB2dHlwZSxcbiAgICAgICAga2V5LFxuICAgICAgICByZWZcbiAgICB9XG4gICAgaWYgKHZ0eXBlID09PSBWQ09NUE9ORU5UKSB7XG4gICAgICAgIHZjb21wb25lbnQudWlkID0gZ2V0VWlkKClcbiAgICB9XG4gICAgcmV0dXJuIHZjb21wb25lbnRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRWbm9kZSh2Y29tcG9uZW50KSB7XG4gICAgbGV0IHsgdnR5cGUgfSA9IHZjb21wb25lbnQsXG4gICAgICAgIG5vZGUgPSBudWxsXG4gICAgaWYgKCF2dHlwZSkgeyAvLyBpbml0IHRleHRcbiAgICAgICAgbm9kZSA9IGluaXRUZXh0KHZjb21wb25lbnQpXG4gICAgfSBlbHNlIGlmICh2dHlwZSA9PT0gVkVMRU1FTlQpIHtcbiAgICAgICAgbm9kZSA9IGluaXRFbGVtZW50KHZjb21wb25lbnQpXG4gICAgfSBlbHNlIGlmICh2dHlwZSA9PT0gVkNPTVBPTkVOVCkge1xuICAgICAgICBub2RlID0gaW5pdENvbXBvbmVudCh2Y29tcG9uZW50KVxuICAgIH0gZWxzZSBpZiAodnR5cGUgPT09IFZTVEFURUxFU1MpIHtcbiAgICAgICAgbm9kZSA9IGluaXRTdGF0ZWxlc3ModmNvbXBvbmVudClcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUZXh0KHRleHQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRFbGVtZW50KHZjb21wb25lbnQpIHtcbiAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSB2Y29tcG9uZW50XG4gICAgbGV0IHZjaGlsZHJlbiA9IGdldENoaWxkcmVuRnJvbVZjb21wb25lbnQodmNvbXBvbmVudClcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgICBzZXRQcm9wcyhub2RlLCBwcm9wcylcbiAgICB2Y2hpbGRyZW4uZm9yRWFjaChjaGlsZFZub2RlID0+IHtcbiAgICAgICAgRE9NLmFwcGVuZENoaWxkcmVuKG5vZGUsIGluaXRWbm9kZShjaGlsZFZub2RlKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb21wb25lbnQodmNvbXBvbmVudCkge1xuICAgIGNvbnN0IHsgdHlwZTogQ29tcG9uZW50LCBwcm9wcywgdWlkIH0gPSB2Y29tcG9uZW50XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudChwcm9wcylcbiAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCkge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KClcbiAgICB9XG4gICAgY29uc3QgeyAkY2FjaGU6IGNhY2hlLCAkdXBkYXRlcjogdXBkYXRlciB9ID0gY29tcG9uZW50XG4gICAgY29uc3Qgdm5vZGUgPSByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KVxuICAgIGNvbnN0IG5vZGUgPSBpbml0Vm5vZGUodm5vZGUpXG4gICAgbm9kZS5jYWNoZSA9IG5vZGUuY2FjaGUgfHwge31cbiAgICBub2RlLmNhY2hlW3VpZF0gPSBjb21wb25lbnRcbiAgICBjYWNoZS52bm9kZSA9IHZub2RlXG4gICAgY2FjaGUubm9kZSA9IG5vZGVcbiAgICBjYWNoZS5pc01vdW50ZWQgPSB0cnVlXG4gICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRNb3VudCkge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQoKVxuICAgIH1cbiAgICByZXR1cm4gbm9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0YXRlbGVzcyh2Y29tcG9uZW50KSB7XG4gICAgY29uc3QgeyB1aWQgfSA9IHZjb21wb25lbnRcbiAgICBjb25zdCB2bm9kZSA9IGdldFN0YXRlbGVzcyh2Y29tcG9uZW50KVxuICAgIGNvbnN0IG5vZGUgPSBpbml0Vm5vZGUodm5vZGUpXG4gICAgbm9kZS5jYWNoZSA9IG5vZGUuY2FjaGUgfHwge31cbiAgICBub2RlLmNhY2hlW3VpZF0gPSB2bm9kZVxuICAgIHJldHVybiBub2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZWxlc3ModmNvbXBvbmVudCkge1xuICAgIGNvbnN0IHsgdHlwZTogZmFjdG9yeSwgcHJvcHMgfSA9IHZjb21wb25lbnRcbiAgICBsZXQgdm5vZGUgPSBmYWN0b3J5KHByb3BzKVxuICAgIGlmICh2bm9kZSAmJiB2bm9kZS5yZW5kZXIpIHtcbiAgICAgICAgdm5vZGUgPSB2bm9kZS5yZW5kZXIoKVxuICAgIH1cbiAgICByZXR1cm4gdm5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gY29tcG9uZW50LnJlbmRlcigpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95Vm5vZGUodmNvbXBvbmVudCwgbm9kZSkge1xuICAgIGNvbnN0IHsgdnR5cGUgfSA9IHZjb21wb25lbnRcbiAgICBpZiAodnR5cGUgPT09IFZFTEVNRU5UKSB7XG5cbiAgICB9IGVsc2UgaWYgKHZ0eXBlID09PSBWQ09NUE9ORU5UKSB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVHdvVm5vZGVzKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSkge1xuICAgIGxldCBuZXdOb2RlID0gbm9kZVxuICAgIGlmICghbmV3Vm5vZGUpIHtcbiAgICAgICAgLy/lpoLmnpzmlrDoioLngrnmmK/nqbrvvIzplIDmr4Fub2Rl5bm25LiU56e756e76ZmkXG4gICAgICAgIGRlc3Ryb3lWbm9kZShvbGRWbm9kZSwgbm9kZSlcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpXG4gICAgfSBlbHNlIGlmIChvbGRWbm9kZS50eXBlICE9PSBuZXdWbm9kZS50eXBlIHx8IG9sZFZub2RlLmtleSAhPT0gbmV3Vm5vZGUua2V5KSB7XG4gICAgICAgIC8vdHlwZeaIluiAhWtleeS4jeWQjO+8jOWujOWFqOmHjeaehFxuICAgICAgICBkZXN0cm95Vm5vZGUob2xkVm5vZGUsIG5vZGUpXG4gICAgICAgIG5ld05vZGUgPSBpbml0Vm5vZGUobmV3Vm5vZGUpXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbm9kZSlcbiAgICB9IGVsc2Uge1xuICAgICAgICAvL+mdnuS4iui/sOaDheWGteWImeabtOaWsFxuICAgICAgICBuZXdOb2RlID0gdXBkYXRlVm5vZGUob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKVxuICAgIH1cbiAgICByZXR1cm4gbmV3Tm9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVm5vZGUob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKSB7XG4gICAgY29uc3QgeyB2dHlwZSwgdHlwZSB9ID0gb2xkVm5vZGVcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgaWYgKG9sZFZub2RlICE9PSBuZXdWbm9kZSkge1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gbmV3Vm5vZGVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZVxuICAgIH1cblxuICAgIGlmICh2dHlwZSA9PT0gVkNPTVBPTkVOVCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlVmNvbXBvbmVudChvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpXG4gICAgfVxuICAgIGlmICh2dHlwZSA9PT0gVlNUQVRFTEVTUykge1xuICAgICAgICByZXR1cm4gdXBkYXRlU3RhdGVsZXNzKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSlcbiAgICB9XG5cbiAgICBpZiAodnR5cGUgPT09IFZFTEVNRU5UKSB7XG4gICAgICAgIHJldHVybiB1cGRhdGVFbGVtZW50KG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWY29tcG9uZW50KHZjb21wb25lbnQsIG5ld1Zjb21wb25lbnQsIG5vZGUpIHtcbiAgICBsZXQgdWlkID0gdmNvbXBvbmVudC51aWRcbiAgICBsZXQgY29tcG9uZW50ID0gbm9kZS5jYWNoZVt1aWRdXG4gICAgbGV0IHsgJHVwZGF0ZXI6IHVwZGF0ZXIsICRjYWNoZTogY2FjaGUgfSA9IGNvbXBvbmVudFxuICAgIG5vZGUuY2FjaGVbbmV3VmNvbXBvbmVudC51aWRdID0gY29tcG9uZW50XG4gICAgY29uc29sZS5sb2coMSlcbiAgICBjb21wb25lbnQuZm9yY2VVcGRhdGUoKVxuICAgIHJldHVybiBjYWNoZS5ub2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdGF0ZWxlc3ModmNvbXBvbmVudCwgbmV3VmNvbXBvbmVudCwgbm9kZSkge1xuICAgIGxldCB1aWQgPSB2Y29tcG9uZW50LnVpZFxuICAgIGxldCB2bm9kZSA9IG5vZGUuY2FjaGVbdWlkXVxuICAgIGRlbGV0ZSBub2RlLmNhY2hlW3VpZF1cbiAgICBsZXQgbmV3Vm5vZGUgPSBnZXRTdGF0ZWxlc3MobmV3VmNvbXBvbmVudClcbiAgICBsZXQgbmV3Tm9kZSA9IGNvbXBhcmVUd29Wbm9kZXModm5vZGUsIG5ld1Zub2RlLCBub2RlKVxuICAgIG5ld05vZGUuY2FjaGUgPSBuZXdOb2RlLmNhY2hlIHx8IHt9XG4gICAgbmV3Tm9kZS5jYWNoZVt1aWRdID0gbmV3Vm5vZGVcbiAgICByZXR1cm4gbmV3Vm5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQob2xkVm5vZGUsIG5ld1Zub2RlLCBub2RlKSB7XG4gICAgbGV0IGRpZmZQcm9wcyA9IGdldERpZmZQcm9wcyhvbGRWbm9kZS5wcm9wcywgbmV3Vm5vZGUucHJvcHMpXG4gICAgZGlmZlByb3BzICYmIHNldFByb3BzKG5vZGUsIGRpZmZQcm9wcylcbiAgICB1cGRhdGVDaGlsZHJlbihvbGRWbm9kZSwgbmV3Vm5vZGUsIG5vZGUpXG4gICAgcmV0dXJuIG5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuKG9sZFZub2RlLCBuZXdWbm9kZSwgbm9kZSkge1xuICAgIGxldCB7IGRpZmYsIG5ld0NoaWxkcmVuLCBjaGlsZHJlbiB9ID0gZGlmZkxpc3Qob2xkVm5vZGUsIG5ld1Zub2RlKVxuICAgIGxldCBjaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzXG4gICAgbGV0IGogPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobmV3Q2hpbGRyZW4gIT09ICdsaXN0TnVsbCcpIHsvL2xpc3ROdWxs6K+05piO6ZyA6KaB5Yig5o6J77yM5Lya5ZyocGF0Y2jph4zliKDpmaRcbiAgICAgICAgICAgIGNvbXBhcmVUd29Wbm9kZXMoY2hpbGRyZW5baV0sIG5ld0NoaWxkcmVuW2ldLCBjaGlsZE5vZGVzW2kgLSBqXSlcbiAgICAgICAgICAgIGlmIChuZXdDaGlsZHJlbltpXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8v5aaC5p6cbmV3Q2hpbGRyZW5baV0g5pivbnVsbO+8jOivtOaYjuS4jeW4pmtleeW5tuS4lOW3sue7j+iiq+WIoOmZpOS6hu+8jG5vZGVz6ZyA6KaB5ZCR5YmN556s56e75LiA5L2NXG4gICAgICAgICAgICAgICAgaisrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXRjaENoaWxkcmVuKG5vZGUsIGRpZmYpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaWZmUHJvcHMocHJvcHMsIG5ld1Byb3BzKSB7XG4gICAgbGV0IGNoYW5nZVByb3BzID0ge30sXG4gICAgICAgIGNvdW50ID0gMCxcbiAgICAgICAgaWdub3JlTGlzdCA9IFsnY2hpbGRyZW4nLCAna2V5J11cbiAgICBmb3IgKGxldCBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgIGlmIChuZXdQcm9wc1tuYW1lXSAhPT0gcHJvcHNbbmFtZV0gJiYgaWdub3JlTGlzdC5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgICAgICAgY2hhbmdlUHJvcHNbbmFtZV0gPSBuZXdQcm9wc1tuYW1lXVxuICAgICAgICAgICAgY291bnQrK1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IG5hbWUgaW4gbmV3UHJvcHMpIHtcbiAgICAgICAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBpZ25vcmVMaXN0LmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgICAgICBjaGFuZ2VQcm9wc1tuYW1lXSA9IG5ld1Byb3BzW25hbWVdXG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50ID4gMCAmJiBjaGFuZ2VQcm9wc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcHMobm9kZSwgcHJvcHMpIHtcbiAgICBsZXQgaWdub3JlTGlzdCA9IFsnY2hpbGRyZW4nLCAna2V5J11cbiAgICBmb3IgKGxldCBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgIGlmIChpZ25vcmVMaXN0LmZpbmQocmVzID0+IHJlcyA9PT0gbmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgbGV0IHN0eWxlT2JqZWN0ID0gcHJvcHNbbmFtZV1cbiAgICAgICAgICAgIGZvciAobGV0IHNLZXkgaW4gc3R5bGVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlW3NLZXldID0gc3R5bGVPYmplY3Rbc0tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZS5zdGFydHNXaXRoKCdvbicpID49IDApIHtcbiAgICAgICAgICAgIGFkZEV2ZW50KG5vZGUsIG5hbWUsIHByb3BzW25hbWVdKVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcHNbbmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCBwcm9wc1tuYW1lXSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaENoaWxkcmVuKG5vZGUsIGRpZmYpIHtcbiAgICBsZXQgY2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2Rlc1xuICAgIGRpZmYubGVuZ3RoID4gMCAmJiBkaWZmLmZvckVhY2goZnVuY3Rpb24gKHNpbmdsZURpZmYpIHtcbiAgICAgICAgc3dpdGNoIChzaW5nbGVEaWZmLnR5cGUpIHtcbiAgICAgICAgICAgIC8vZGVsZXRlXG4gICAgICAgICAgICBjYXNlIE1PVkVTX0RFTEVURTpcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbc2luZ2xlRGlmZi5pbmRleF0pXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIC8vYWRkXG4gICAgICAgICAgICBjYXNlIE1PVkVTX0FERDpcbiAgICAgICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IGlzU3RyaW5nKHNpbmdsZURpZmYuaXRlbSkgPyBzaW5nbGVEaWZmLml0ZW0gOiBpbml0Vm5vZGUoc2luZ2xlRGlmZi5pdGVtKVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCA+IHNpbmdsZURpZmYuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgY2hpbGROb2Rlc1tzaW5nbGVEaWZmLmluZGV4XSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKG5ld05vZGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAvL21vdmVcbiAgICAgICAgICAgIGNhc2UgTU9WRVNfUkVPUkRFUjpcbiAgICAgICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShjaGlsZE5vZGVzW3NpbmdsZURpZmYub2xkSW5kZXhdLCBjaGlsZE5vZGVzW3NpbmdsZURpZmYubmV3SW5kZXhdKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=