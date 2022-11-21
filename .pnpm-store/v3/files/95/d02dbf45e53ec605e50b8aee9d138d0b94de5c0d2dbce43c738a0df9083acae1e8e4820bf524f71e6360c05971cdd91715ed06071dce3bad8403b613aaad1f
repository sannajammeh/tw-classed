/**
 * A plugin that adds an esast compiler: a small wrapper around `astring` to add
 * support for serializing JSX.
 *
 * @type {import('unified').Plugin<[RecmaStringifyOptions]|[], Program, string>}
 */
export function recmaStringify(options?: RecmaStringifyOptions | undefined): void;
export type Program = import('estree-jsx').Program;
export type SourceMapGenerator = typeof import('source-map').SourceMapGenerator;
export type RecmaStringifyOptions = {
    /**
     * Generate a source map by passing a `SourceMapGenerator` from `source-map`
     * in.
     */
    SourceMapGenerator?: typeof import("source-map").SourceMapGenerator | undefined;
};
