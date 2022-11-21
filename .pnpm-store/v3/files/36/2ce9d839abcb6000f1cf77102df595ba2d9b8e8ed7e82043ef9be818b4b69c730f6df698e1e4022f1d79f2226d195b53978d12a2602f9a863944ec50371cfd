/**
 * A tiny plugin that unravels `<p><h1>x</h1></p>` but also
 * `<p><Component /></p>` (so it has no knowledge of “HTML”).
 * It also marks JSX as being explicitly JSX, so when a user passes a `h1`
 * component, it is used for `# heading` but not for `<h1>heading</h1>`.
 *
 * @type {import('unified').Plugin<Array<void>, Root>}
 */
export function remarkMarkAndUnravel(): void | import("unified").Transformer<import("mdast").Root, import("mdast").Root>;
export type Root = import('mdast').Root;
export type Content = import('mdast').Content;
export type Node = Root | Content;
export type Parent = Extract<Node, import('unist').Parent>;
export type DoNotTouchAsThisImportItIncludesMdxInTree = typeof import("remark-mdx");
