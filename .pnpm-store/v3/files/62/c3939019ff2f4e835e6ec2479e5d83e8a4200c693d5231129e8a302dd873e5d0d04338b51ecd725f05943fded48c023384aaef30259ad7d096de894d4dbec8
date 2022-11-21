/**
 * A plugin that rewrites JSX in functions to accept components as
 * `props.components` (when the function is called `_createMdxContent`), or from
 * a provider (if there is one).
 * It also makes sure that any undefined components are defined: either from
 * received components or as a function that throws an error.
 *
 * @type {import('unified').Plugin<[RecmaJsxRewriteOptions]|[], Program>}
 */
export function recmaJsxRewrite(options?: RecmaJsxRewriteOptions | undefined): void | import("unified").Transformer<import("estree").Program, import("estree").Program>;
export type Node = import('estree-jsx').Node;
export type Expression = import('estree-jsx').Expression;
export type ESFunction = import('estree-jsx').Function;
export type ImportSpecifier = import('estree-jsx').ImportSpecifier;
export type JSXElement = import('estree-jsx').JSXElement;
export type JSXIdentifier = import('estree-jsx').JSXIdentifier;
export type JSXNamespacedName = import('estree-jsx').JSXNamespacedName;
export type ModuleDeclaration = import('estree-jsx').ModuleDeclaration;
export type Program = import('estree-jsx').Program;
export type Property = import('estree-jsx').Property;
export type Statement = import('estree-jsx').Statement;
export type VariableDeclarator = import('estree-jsx').VariableDeclarator;
export type ObjectPattern = import('estree-jsx').ObjectPattern;
export type Identifier = import('estree-jsx').Identifier;
export type WalkHandler = import('estree-walker').SyncHandler;
export type Scope = import('periscopic').Scope & {
    node: Node;
};
export type RecmaJsxRewriteOptions = {
    /**
     * Whether to use an import statement or `arguments[0]` to get the provider.
     */
    outputFormat?: "program" | "function-body" | undefined;
    /**
     * Place to import a provider from.
     */
    providerImportSource?: string | undefined;
    /**
     * Whether to add extra information to error messages in generated code (can
     * also be passed in Node.js by setting `NODE_ENV=development`).
     */
    development?: boolean | undefined;
};
export type StackEntry = {
    objects: Array<string>;
    components: Array<string>;
    tags: Array<string>;
    references: Record<string, {
        node: JSXElement;
        component: boolean;
    }>;
    idToInvalidComponentName: Map<string | number, string>;
    node: ESFunction;
};
