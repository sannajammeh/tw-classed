import type { Plugin } from 'rollup';

import fs from 'fs';
import { extname, resolve, dirname, join } from 'path';
import { createFilter, type FilterPattern } from '@rollup/pluginutils';
import {
  type Options as SwcOptions,
  type JscTarget,
  type JsMinifyOptions,
  transform as swcTransform,
  minify as swcMinify
} from '@swc/core';
import deepmerge from 'deepmerge';

import { getOptions } from './options';

export type PluginOptions = {
  include?: FilterPattern
  exclude?: FilterPattern
  /**
   * Use given tsconfig file instead
   * Disable it by setting to `false`
   */
  tsconfig?: string | false
} & Pick<SwcOptions, Exclude<keyof SwcOptions, 'filename' & 'include' & 'exclude'>>;

const INCLUDE_REGEXP = /\.[mc]?[jt]sx?$/;
const EXCLUDE_REGEXP = /node_modules/;

const ACCEPTED_EXTENSIONS = ['.ts', '.tsx', '.mjs', '.js', '.cjs', '.jsx'];

const fileExists = (path: string) => {
  return fs.promises.access(path, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

const resolveFile = async (resolved: string, index = false) => {
  const fileWithoutExt = resolved.replace(INCLUDE_REGEXP, '');

  for (const ext of ACCEPTED_EXTENSIONS) {
    const file = index ? join(resolved, `index${ext}`) : `${fileWithoutExt}${ext}`;
    // We only check one file at a time, and we can return early
    // eslint-disable-next-line no-await-in-loop
    if (await fileExists(file)) return file;
  }
  return null;
};

function swc(options: PluginOptions = {}): Plugin {
  const filter = createFilter(
    options.include || INCLUDE_REGEXP,
    options.exclude || EXCLUDE_REGEXP
  );

  return {
    name: 'swc',

    async resolveId(importee, importer) {
      // ignore IDs with null character, these belong to other plugins
      if (importee.startsWith('\0')) {
        return null;
      }

      if (importer && importee[0] === '.') {
        const resolved = resolve(
          importer ? dirname(importer) : process.cwd(),
          importee
        );

        let file = await resolveFile(resolved);
        if (file) return file;
        if (!file && await fileExists(resolved) && (await fs.promises.stat(resolved)).isDirectory()) {
          file = await resolveFile(resolved, true);
          if (file) return file;
        }
      }
    },

    async transform(code: string, id: string) {
      if (!filter(id)) {
        return null;
      }

      const ext = extname(id);

      if (!ACCEPTED_EXTENSIONS.includes(ext)) return null;

      const isTypeScript = ext === '.ts' || ext === '.tsx';
      const isTsx = ext === '.tsx';
      const isJsx = ext === '.jsx';

      const tsconfigOptions
        = options.tsconfig === false
          ? {}
          : getOptions(dirname(id), options.tsconfig);

      // TODO: SWC is about to add "preserve" jsx
      // https://github.com/swc-project/swc/pull/5661
      // Respect "preserve" after swc adds the support
      const useReact17NewTransform = tsconfigOptions.jsx === 'react-jsx' || tsconfigOptions.jsx === 'react-jsxdev';

      const swcOptionsFromTsConfig: SwcOptions = {
        jsc: {
          externalHelpers: tsconfigOptions.importHelpers,
          parser: {
            syntax: isTypeScript ? 'typescript' : 'ecmascript',
            tsx: isTypeScript ? isTsx : undefined,
            jsx: !isTypeScript ? isJsx : undefined,
            decorators: tsconfigOptions.experimentalDecorators
          },
          transform: {
            decoratorMetadata: tsconfigOptions.emitDecoratorMetadata,
            react: {
              runtime: useReact17NewTransform
                ? 'automatic'
                : 'classic',
              importSource: tsconfigOptions.jsxImportSource,
              pragma: tsconfigOptions.jsxFactory,
              pragmaFrag: tsconfigOptions.jsxFragmentFactory,
              development: tsconfigOptions.jsx === 'react-jsxdev' ? true : undefined
            }
          },
          target: tsconfigOptions.target?.toLowerCase() as JscTarget | undefined,
          baseUrl: tsconfigOptions.baseUrl,
          paths: tsconfigOptions.paths
        }
      };

      const swcOption = deepmerge.all<SwcOptions>([
        swcOptionsFromTsConfig,
        options,
        {
          jsc: {
            minify: undefined // Disable minify on transform, do it on renderChunk
          },
          filename: id,
          include: undefined, // Rollup's filter is not compatible with swc
          exclude: undefined,
          tsconfig: undefined, // swc has no tsconfig option
          minify: false // Disable minify on transform, do it on renderChunk
        }
      ]);

      /**
       * swc cannot transform module ids with "\0", which is the identifier of rollup virtual module
       *
       * FIXME: This is a temporary workaround, remove when swc fixes it (DO NOT FORGET TO BUMP PEER DEPS VERSION AS WELL!)
       *
       * @see https://rollupjs.org/guide/en/#conventions
       * @see https://github.com/rollup/plugins/blob/02fb349d315f0ffc55970fba5de20e23f8ead881/packages/commonjs/src/helpers.js#L15
       * @see https://github.com/SukkaW/rollup-plugin-swc/pull/1
       * @see https://github.com/swc-project/swc/issues/2853
       */
      const { code: transformedCode, ...rest } = await swcTransform(
        code,
        swcOption
      );

      return {
        ...rest,
        code: transformedCode
      };
    },

    renderChunk(code: string) {
      if (options.minify || options.jsc?.minify?.mangle || options.jsc?.minify?.compress) {
        return swcMinify(code, options.jsc?.minify);
      }

      return null;
    }
  };
}

function minify(options: JsMinifyOptions = {}): Plugin {
  return {
    name: 'swc-minify',

    renderChunk(code: string) {
      return swcMinify(code, options);
    }
  };
}

function defineRollupSwcOption(option: PluginOptions) {
  return option;
}

function defineRollupSwcMinifyOption(option: JsMinifyOptions) {
  return option;
}

export default swc;
export { swc, defineRollupSwcOption, minify, defineRollupSwcMinifyOption };
