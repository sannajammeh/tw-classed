import { Plugin } from 'rollup';
import { FilterPattern } from '@rollup/pluginutils';
import { Options, JsMinifyOptions } from '@swc/core';

declare type PluginOptions = {
    include?: FilterPattern;
    exclude?: FilterPattern;
    /**
     * Use given tsconfig file instead
     * Disable it by setting to `false`
     */
    tsconfig?: string | false;
} & Pick<Options, Exclude<keyof Options, 'filename' & 'include' & 'exclude'>>;
declare function swc(options?: PluginOptions): Plugin;
declare function minify(options?: JsMinifyOptions): Plugin;
declare function defineRollupSwcOption(option: PluginOptions): PluginOptions;
declare function defineRollupSwcMinifyOption(option: JsMinifyOptions): JsMinifyOptions;

export { PluginOptions, swc as default, defineRollupSwcMinifyOption, defineRollupSwcOption, minify, swc };
