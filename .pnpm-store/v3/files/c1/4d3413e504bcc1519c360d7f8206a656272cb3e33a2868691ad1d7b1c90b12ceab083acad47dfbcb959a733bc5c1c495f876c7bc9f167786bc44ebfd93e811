"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueToEstree = void 0;
const isPlainObject = require("is-plain-obj");
/**
 * Convert a value to an ESTree node
 *
 * @param value - The value to convert
 * @param options - Additional options to configure the output.
 * @returns The ESTree node.
 */
function valueToEstree(value, options = {}) {
    if (value === undefined) {
        return { type: 'Identifier', name: 'undefined' };
    }
    if (value == null) {
        return { type: 'Literal', value: null, raw: 'null' };
    }
    if (value === Number.POSITIVE_INFINITY) {
        return { type: 'Identifier', name: 'Infinity' };
    }
    if (Number.isNaN(value)) {
        return { type: 'Identifier', name: 'NaN' };
    }
    if (typeof value === 'boolean') {
        return { type: 'Literal', value, raw: String(value) };
    }
    if (typeof value === 'bigint') {
        return value >= 0
            ? { type: 'Literal', value, raw: `${value}n`, bigint: String(value) }
            : {
                type: 'UnaryExpression',
                operator: '-',
                prefix: true,
                argument: valueToEstree(-value, options),
            };
    }
    if (typeof value === 'number') {
        return value >= 0
            ? { type: 'Literal', value, raw: String(value) }
            : {
                type: 'UnaryExpression',
                operator: '-',
                prefix: true,
                argument: valueToEstree(-value, options),
            };
    }
    if (typeof value === 'string') {
        return { type: 'Literal', value, raw: JSON.stringify(value) };
    }
    if (typeof value === 'symbol') {
        if (value.description && value === Symbol.for(value.description)) {
            return {
                type: 'CallExpression',
                optional: false,
                callee: {
                    type: 'MemberExpression',
                    computed: false,
                    optional: false,
                    object: { type: 'Identifier', name: 'Symbol' },
                    property: { type: 'Identifier', name: 'for' },
                },
                arguments: [valueToEstree(value.description, options)],
            };
        }
        throw new TypeError(`Only global symbols are supported, got: ${String(value)}`);
    }
    if (Array.isArray(value)) {
        const elements = [];
        for (let i = 0; i < value.length; i += 1) {
            elements.push(i in value ? valueToEstree(value[i], options) : null);
        }
        return { type: 'ArrayExpression', elements };
    }
    if (value instanceof RegExp) {
        return {
            type: 'Literal',
            value,
            raw: String(value),
            regex: { pattern: value.source, flags: value.flags },
        };
    }
    if (value instanceof Date) {
        return {
            type: 'NewExpression',
            callee: { type: 'Identifier', name: 'Date' },
            arguments: [valueToEstree(value.getTime(), options)],
        };
    }
    if (value instanceof Map) {
        return {
            type: 'NewExpression',
            callee: { type: 'Identifier', name: 'Map' },
            arguments: [valueToEstree([...value.entries()], options)],
        };
    }
    if (typeof Buffer !== 'undefined' && Buffer.isBuffer(value)) {
        return {
            type: 'CallExpression',
            optional: false,
            callee: {
                type: 'MemberExpression',
                computed: false,
                optional: false,
                object: { type: 'Identifier', name: 'Buffer' },
                property: { type: 'Identifier', name: 'from' },
            },
            arguments: [valueToEstree([...value.values()])],
        };
    }
    if (value instanceof BigInt64Array ||
        value instanceof BigUint64Array ||
        value instanceof Float32Array ||
        value instanceof Float64Array ||
        value instanceof Int8Array ||
        value instanceof Int16Array ||
        value instanceof Int32Array ||
        value instanceof Set ||
        value instanceof Uint8Array ||
        value instanceof Uint8ClampedArray ||
        value instanceof Uint16Array ||
        value instanceof Uint32Array) {
        return {
            type: 'NewExpression',
            callee: { type: 'Identifier', name: value.constructor.name },
            arguments: [valueToEstree([...value], options)],
        };
    }
    if (value instanceof URL || value instanceof URLSearchParams) {
        return {
            type: 'NewExpression',
            callee: { type: 'Identifier', name: value.constructor.name },
            arguments: [valueToEstree(String(value), options)],
        };
    }
    if (options.instanceAsObject || isPlainObject(value)) {
        return {
            type: 'ObjectExpression',
            // @ts-expect-error: looks like an object.
            properties: Object.entries(value).map(([name, val]) => ({
                type: 'Property',
                method: false,
                shorthand: false,
                computed: false,
                kind: 'init',
                key: valueToEstree(name, options),
                value: valueToEstree(val, options),
            })),
        };
    }
    throw new TypeError(`Unsupported value: ${String(value)}`);
}
exports.valueToEstree = valueToEstree;
