<div align="center">
  <img src="https://pic.skk.moe/file/sukkaw/gh/rollup-plugin-swc.png" width="550px">
</div>
<h1 align="center">rollup-plugin-swc</h1>

[SWC](https://swc.rs/) is an extensible Rust-based platform for the next generation of fast developer tools. This plugin is designed to replace `rollup-plugin-typescript2`, `@rollup/plugin-typescript`, `@rollup/plugin-babel` and `rollup-plugin-terser` for you.

## Comparison

|                                                | [sukkaw/rollup-plugin-swc](https://github.com/SukkaW/rollup-plugin-swc) | [mentaljam/rollup-plugin-swc](https://github.com/mentaljam/rollup-plugin-swc) | [nicholasxjy/rollup-plugin-swc2](https://github.com/nicholasxjy/rollup-plugin-swc2) |
| ---------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `minify` your bundle in one pass[^1]           | Yes                                                                     | No                                                                            | No                                                                                  |
| Standalone `swcMinify` plugin                  | Yes                                                                     | No                                                                            | No                                                                                  |
| Config Intellisense[^2]                        | Yes                                                                     | No                                                                            | No                                                                                  |
| Reads your `tsconfig.json` and `jsconfig.json` | Yes[^3]                                                                 | No                                                                            | No                                                                                  |
| ESM export                                     | Full                                                                    | Partial[^4]                                                                   | No                                                                                  |
| TypeScrit declarations                         | Yes                                                                     | Yes                                                                           | Yes                                                                                 |
| Has testing                                    | Yes                                                                     | No                                                                            | No                                                                                  |

[^1]: If minify is called in Rollup's `transform` phase, every individual module processed will result in a minify call. However, if minify is called in Rollup's `renderChunk` phase, the minify will only be called once in one whole pass before Rollup generates bundle, results in a faster build.
[^2]: Autocompletion and type checking in your IDE
[^3]: `extends` is not supported.
[^4]: `mentaljam/rollup-plugin-swc` has both `main` and `module` fields in `package.json`, but has no `exports` field.

## Install

```bash
$ npm i @swc/core rollup-plugin-swc3
# If you prefer yarn
# yarn add @swc/core rollup-plugin-swc3
# If you prefer pnpm
# pnpm add @swc/core rollup-plugin-swc3
```

## Usage

```js
// rollup.config.js
import { swc } from 'rollup-plugin-swc3';

export default {
  input: 'xxxx',
  output: {},
  plugins: [
    swc({
      // All options are optional
      include: /\.[mc]?[jt]sx?$/, // default
      exclude: /node_modules/, // default
      tsconfig: 'tsconfig.json', // default
      // tsconfig: false, // You can also prevent `rollup-plugin-swc` from reading tsconfig.json, see below
      // And add your swc configuration here!
      // "filename" will be ignored since it is handled by rollup
      jsc: {}
    }),
  ];
}
```

If you want autocompletion in your IDE or type check:

```js
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';

export default {
  input: 'xxxx',
  output: {},
  plugins: [
    swc(defineRollupSwcOption({
      // ... There goes the plugin's configuration
    })),
  ];
}

// or
/** @type {import('rollup-plugin-swc3').PluginOptions} */
const swcPluginConfig = {}
```

- `include` and `exclude` can be `String | RegExp | Array<String | RegExp>`, when supplied it will override default values.
- `rollup-plugin-swc` will read your `tsconfig.json` or [`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig) for default values if your doesn't provide corresponding swc options:
  - The configuration your passed to `rollup-plugin-swc` will always have the highest priority (higher than `tsconfig.json`/`jsconfig.json`).
  - `rollup-plugin-swc` will find the nearest `tsconfig.json`/`jsconfig.json` from the file that is currently being transpiled (just like `tsc`).
    - With `tsconfig` option, you can also provide a custom filename (E.g. `tsconfig.rollup.json`, `jsconfig.compile.json`) for `rollup-plugin-swc` to find and resolve.
    - You can also provide a full path (E.g. `/path/to/your/tsconfig.json`) to `tsconfig` option, and `rollup-plugin-swc` will only use the provided path as a single source of truth.
  - You can stop `rollup-plugin-swc` from reading `tsconfig.json`/`jsconfig.json` by setting `tsconfig` option to `false`.
  - `jsconfig.json` will be ignored if `tsconfig.json` and `jsconfig.json` both exist.
  - The `extends` of `tsconfig.json`/`jsconfig.json` is ~~not supported~~ now supported.
  - `target` will be passed to swc's `jsc.target`.
  - `jsxImportSource`, `jsxFactory`, and `jsxFragmentFactory` will be passed to swc's `jsc.transform.react.importSource`, `jsc.transform.react.pragma` and `jsc.transform.react.pragmaFrag`.
  - When `jsx` is either `react-jsx` or `react-jsxdev`, swc's `jsc.transform.react.runtime` will be `automatic`, otherwise it will be `classic`.
    - Note that `jsx: preserve` will be ignored and swc will always transpile your jsx into javascript code.
    - When `jsx` is `react-jsxdev`, swc's `jsc.transform.react.development` will also be enabled.
  - `baseUrl` and `paths` will be passed to swc's `jsc.baseUrl` and `jsx.paths` directly. They won't affect how rollup resolve your imports. If you have encounted any issue during bundling, please use other plugins to resolve your imports' aliases (e.g., add [rollup-plugin-typescript-paths](https://www.npmjs.com/package/rollup-plugin-typescript-paths) or [rollup-plugin-tsconfig-paths](https://www.npmjs.com/package/rollup-plugin-tsconfig-paths) before `@rollup/plugin-node-resolve`).
  - `importHelpers` will be passed to swc's `jsc.externalHelpers`, so you will have to have `@swc/helpers` avaliable in your project when enabled.
  - `experimentalDecorators` and `emitDecoratorMetadata` will be passed to swc's `jsc.parser.decorators` and `jsc.transform.decoratorMetadata`.
  - `esModuleInterop` will always be ignored, as swc requires `module.type` to exist when `module.noInterop` is given.

### Standalone Minify Plugin

If you only want to use `swc` to minify your bundle:

```js
import { minify } from 'rollup-plugin-swc3'

export default {
  plugins: [
    minify({
      // swc's minify option here
      // mangle: {}
      // compress: {}
    }),
  ],
}
```

If you want autocompletion in your IDE or type check:

```js
import { minify, defineRollupSwcMinifyOption } from 'rollup-plugin-swc3'

export default {
  plugins: [
    minify(
      defineRollupSwcMinifyOption({
        // swc's minify option here
        // mangle: {}
        // compress: {}
      })
    ),
  ],
}

// or
/** @type {import('@swc/core').JsMinifyOptions} */
const swcMinifyConfig = {}
```

### Write your Rollup config in TypeScript

You can write your Rollup config file in `rollup.config.ts`, and use the following command:

```sh
rollup --config rollup.config.ts --configPlugin swc3
```

### TypeScript Declaration File

There are serveral ways to generate declaration file:

- Use `tsc` with `emitDeclarationOnly`, the slowest way but you get type checking, it doesn't bundle the `.d.ts` files.
- Use `rollup-plugin-dts` which generates and bundle `.d.ts`, also does type checking. It is used by this plugin as well.

### Use with Non-react JSX

You can either configure it in your `tsconfig.json` or in your `rollup.config.js`.

```js
// Vue JSX
import vueJsx from 'rollup-plugin-vue-jsx-compat'
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';

export default {
  input: 'xxxx',
  output: {},
  plugins: [
    vueJsx(),
    swc(defineRollupSwcOption({
      jsc: {
        transform: {
          react: {
              pragma: 'vueJsxCompat'
          }
        }
      }
    })),
  ];
}
```

```js
// Preact
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';

export default {
  input: 'xxxx',
  output: {},
  plugins: [
    vueJsx(),
    swc(defineRollupSwcOption({
      jsc: {
        transform:{
          react: {
          pragma: 'h',
          pragmaFrag: 'Fragment'
          // To use preact/jsx-runtime:
          // importSource: 'preact',
          // runtime: 'automatic'
          }
        }
      }
    })),
  ];
}
```

---

**rollup-plugin-swc** © [Sukka](https://github.com/SukkaW), Released under the [MIT](./LICENSE) License.<br>
Inspired by [egoist](https://github.com/egoist)'s [rollup-plugin-esbuild](https://github.com/egoist/rollup-plugin-esbuild).<br>
Authored and maintained by Sukka with help from contributors ([list](https://github.com/SukkaW/rollup-plugin-swc/graphs/contributors)).

> [Personal Website](https://skk.moe) · [Blog](https://blog.skk.moe) · GitHub [@SukkaW](https://github.com/SukkaW) · Telegram Channel [@SukkaChannel](https://t.me/SukkaChannel) · Twitter [@isukkaw](https://twitter.com/isukkaw) · Keybase [@sukka](https://keybase.io/sukka)
