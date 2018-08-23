import { createVcomponent } from './virturn-dom'
import Component from './Component'
import {
    VTEXT,
    VELEMENT,
    VSTATELESS,
    VCOMPONENT
} from './utils'

export default function createElement(type, config, children) {
    let vtype = null
    if (!type) {
        vtype = VTEXT
    } else if (typeof type === 'string') {
        vtype = VELEMENT
    } else if (typeof type === 'function') {
        if (type.prototype.isReactComponent) {
            vtype = VCOMPONENT
        } else {
            vtype = VSTATELESS
        }
    } else {
        throw new Error(`React.createElement: unexpect type [ ${type} ]`)
    }

    let key = null,
        ref = null
    let finalProps = {}
    if (config != null) {
        for (let propKey in config) {
            if (!config.hasOwnProperty(propKey)) {
                continue
            }
            if (propKey === 'key') {
                key = '' + config[propKey]
            } else if (propKey === 'ref') {
                ref = config[propKey]
            } else {
                finalProps[propKey] = config[propKey]
            }
        }
    }
    let defaultProps = type.defaultProps
    if (defaultProps) {
        for (let propKey in defaultProps) {
            if (finalProps[propKey] === undefined) {
                finalProps[propKey] = defaultProps[propKey]
            }
        }
    }

    let finalChildren = children
    let arguLength = arguments.length
    if (arguLength > 3) {
        finalChildren = []
        for (let i = 2; i < arguLength; i++) {
            finalChildren.push(arguments[i])
        }
    }
    // if (finalChildren) {
        finalProps.children = finalChildren || []
    // }
    return createVcomponent({
        type,
        vtype,
        props: finalProps,
        key,
        ref
    })
}