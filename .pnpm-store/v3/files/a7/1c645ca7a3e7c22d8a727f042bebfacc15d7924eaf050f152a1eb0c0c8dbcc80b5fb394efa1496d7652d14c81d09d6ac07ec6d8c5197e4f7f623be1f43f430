"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rehypeMdxTitle = void 0;
const estree_util_is_identifier_name_1 = require("estree-util-is-identifier-name");
const toString = require("hast-util-to-string");
const visit = require("unist-util-visit");
/**
 * A rehype plugin to expose the MDX page title as string.
 *
 * @param options - Optional options to configure the output.
 * @returns A unified transformer.
 */
const rehypeMdxTitle = ({ name = 'title' } = {}) => {
    if (!estree_util_is_identifier_name_1.name(name)) {
        throw new Error(`The name should be a valid identifier name, got: ${JSON.stringify(name)}`);
    }
    return (ast) => {
        visit(ast, { type: 'element', tagName: 'h1' }, (node) => {
            const value = toString(node);
            ast.children.unshift({
                type: 'mdxjsEsm',
                data: {
                    estree: {
                        type: 'Program',
                        sourceType: 'module',
                        body: [
                            {
                                type: 'ExportNamedDeclaration',
                                source: null,
                                specifiers: [],
                                declaration: {
                                    type: 'VariableDeclaration',
                                    kind: 'const',
                                    declarations: [
                                        {
                                            type: 'VariableDeclarator',
                                            id: { type: 'Identifier', name },
                                            init: {
                                                type: 'Literal',
                                                value,
                                                raw: JSON.stringify(value),
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            });
            return visit.EXIT;
        });
    };
};
exports.rehypeMdxTitle = rehypeMdxTitle;
