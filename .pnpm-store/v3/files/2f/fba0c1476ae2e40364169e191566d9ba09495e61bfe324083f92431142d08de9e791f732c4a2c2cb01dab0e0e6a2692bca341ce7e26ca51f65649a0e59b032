/**
 * Plugin to support MDX (import/exports: `export {x} from 'y'`; expressions:
 * `{1 + 1}`; and JSX: `<Video id={123} />`).
 *
 * @type {import('unified').Plugin<[Options?]|Array<void>, Root>}
 */
export default function remarkMdx(options?: void | Options | undefined): void | import("unified").Transformer<import("mdast").Root, import("mdast").Root>;
export type Root = import('mdast').Root;
export type MicromarkOptions = import('micromark-extension-mdxjs').Options;
export type ToMarkdownOptions = import('mdast-util-mdx').ToMarkdownOptions;
export type Options = MicromarkOptions & ToMarkdownOptions;
export type DoNotTouchAsThisImportItIncludesMdxInTree = typeof import("mdast-util-mdx");
