/**
 * A plugin to build JSX into function calls.
 * `estree-util-build-jsx` does all the work for us!
 *
 * @type {import('unified').Plugin<[RecmaJsxBuildOptions]|[], Program>}
 */
export function recmaJsxBuild(options?: RecmaJsxBuildOptions | undefined): void | import("unified").Transformer<import("estree").Program, import("estree").Program>;
export type Program = import('estree-jsx').Program;
export type RecmaJsxBuildOptions = {
    /**
     * Whether to keep the import of the automatic runtime or get it from
     * `arguments[0]` instead.
     */
    outputFormat?: "program" | "function-body" | undefined;
};
