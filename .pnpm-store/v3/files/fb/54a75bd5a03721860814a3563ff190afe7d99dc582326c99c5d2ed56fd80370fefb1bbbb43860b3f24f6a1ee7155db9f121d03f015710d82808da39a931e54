"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/plugin.ts
var import_graceful_fs3 = __toESM(require("graceful-fs"));
var import_node_util = require("util");

// src/utils.ts
var import_node_path2 = __toESM(require("path"));
var import_title = __toESM(require("title"));

// src/constants.ts
var import_node_path = __toESM(require("path"));
var MARKDOWN_EXTENSION_REGEX = /\.mdx?$/;
var IS_PRODUCTION = process.env.NODE_ENV === "production";
var LOCALE_REGEX = /\.([a-z]{2}(-[A-Z]{2})?)$/;
var DEFAULT_LOCALE = "en-US";
var META_FILENAME = "_meta.json";
var CWD = process.cwd();
var MARKDOWN_EXTENSIONS = ["md", "mdx"];
var PUBLIC_DIR = import_node_path.default.join(CWD, "public");
var CACHE_DIR = import_node_path.default.join(CWD, ".next", "cache");
var ASSET_DIR = import_node_path.default.join(CWD, ".next", "static", "chunks");

// src/utils.ts
function parseFileName(filePath) {
  var _a;
  const { name, ext } = import_node_path2.default.parse(filePath);
  const locale = ((_a = name.match(LOCALE_REGEX)) == null ? void 0 : _a[1]) || "";
  return {
    name: locale ? name.replace(LOCALE_REGEX, "") : name,
    locale,
    ext
  };
}
var parseJsonFile = (content, path5) => {
  try {
    return JSON.parse(content);
  } catch (err) {
    console.error(
      `[nextra] Error parsing ${path5}, make sure it's a valid JSON`,
      err
    );
    return {};
  }
};
function truthy(value) {
  return !!value;
}
function sortPages(pages, locale) {
  return pages.filter((item) => item.kind === "Folder" || item.locale === locale).map((item) => {
    var _a, _b;
    return {
      name: item.name,
      date: "frontMatter" in item && ((_a = item.frontMatter) == null ? void 0 : _a.date),
      title: "frontMatter" in item && ((_b = item.frontMatter) == null ? void 0 : _b.title) || (0, import_title.default)(item.name.replace(/[-_]/g, " "))
    };
  }).sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (a.date) {
      return -1;
    }
    if (b.date) {
      return 1;
    }
    return a.title.localeCompare(b.title, locale, { numeric: true });
  }).map((item) => [item.name, item.title]);
}

// src/plugin.ts
var import_node_path4 = __toESM(require("path"));
var import_slash = __toESM(require("slash"));
var import_gray_matter = __toESM(require("gray-matter"));
var import_find_pages_dir = require("next/dist/lib/find-pages-dir.js");

// src/content-dump.ts
var import_node_path3 = __toESM(require("path"));
var import_graceful_fs2 = __toESM(require("graceful-fs"));

// src/file-system.ts
var import_graceful_fs = __toESM(require("graceful-fs"));
var existsSync = (filePath) => {
  try {
    import_graceful_fs.default.statSync(filePath);
    return true;
  } catch (e) {
    return false;
  }
};

// src/content-dump.ts
if (!existsSync(ASSET_DIR)) {
  import_graceful_fs2.default.mkdirSync(ASSET_DIR, { recursive: true });
}
var cacheDirExist = existsSync(CACHE_DIR);
if (!cacheDirExist) {
  import_graceful_fs2.default.mkdirSync(CACHE_DIR, { recursive: true });
}
function restoreCache() {
  if (!cacheDirExist) {
    return;
  }
  if (!existsSync(ASSET_DIR)) {
    import_graceful_fs2.default.mkdirSync(ASSET_DIR, { recursive: true });
  }
  const files = import_graceful_fs2.default.readdirSync(CACHE_DIR);
  for (const file of files) {
    if (file.startsWith("nextra-data-")) {
      import_graceful_fs2.default.copyFileSync(import_node_path3.default.join(CACHE_DIR, file), import_node_path3.default.join(ASSET_DIR, file));
    }
  }
}

// src/plugin.ts
var readdir = (0, import_node_util.promisify)(import_graceful_fs3.default.readdir);
var readFile = (0, import_node_util.promisify)(import_graceful_fs3.default.readFile);
var collectMdx = (filePath, route = "") => __async(void 0, null, function* () {
  const { name, locale } = parseFileName(filePath);
  const content = yield readFile(filePath, "utf8");
  const { data } = (0, import_gray_matter.default)(content);
  return __spreadValues(__spreadValues({
    kind: "MdxPage",
    name,
    route
  }, locale && { locale }), Object.keys(data).length && { frontMatter: data });
});
function collectFiles(_0) {
  return __async(this, arguments, function* (dir, route = "/", fileMap = /* @__PURE__ */ Object.create(null)) {
    const files = yield readdir(dir, { withFileTypes: true });
    const promises = files.map((f) => __async(this, null, function* () {
      const filePath = import_node_path4.default.join(dir, f.name);
      const isDirectory = f.isDirectory();
      const { name, locale, ext } = isDirectory ? { name: import_node_path4.default.basename(filePath), locale: "", ext: "" } : parseFileName(filePath);
      const fileRoute = (0, import_slash.default)(import_node_path4.default.join(route, name.replace(/^index$/, "")));
      if (isDirectory) {
        if (fileRoute === "/api")
          return;
        const { items: items2 } = yield collectFiles(filePath, fileRoute, fileMap);
        if (!items2.length)
          return;
        return {
          kind: "Folder",
          name: f.name,
          route: fileRoute,
          children: items2
        };
      }
      if (MARKDOWN_EXTENSION_REGEX.test(ext)) {
        const fp = filePath;
        fileMap[fp] = yield collectMdx(fp, fileRoute);
        return fileMap[fp];
      }
      const fileName = name + ext;
      if (fileName === META_FILENAME) {
        const fp = filePath;
        const content = yield readFile(fp, "utf8");
        fileMap[fp] = __spreadProps(__spreadValues({
          kind: "Meta"
        }, locale && { locale }), {
          data: parseJsonFile(content, fp)
        });
        return fileMap[fp];
      }
      if (fileName === "meta.json") {
        console.warn(
          '[nextra] "meta.json" was renamed to "_meta.json". Rename the following file:',
          import_node_path4.default.relative(CWD, filePath)
        );
      }
    }));
    const items = (yield Promise.all(promises)).filter(truthy);
    const mdxPages = items.filter(
      (item) => item.kind === "MdxPage" || item.kind === "Folder"
    );
    const locales = mdxPages.filter((item) => item.kind === "MdxPage").map((item) => item.locale);
    for (const locale of locales) {
      const metaIndex = items.findIndex(
        (item) => item.kind === "Meta" && item.locale === locale
      );
      const defaultMeta = sortPages(mdxPages, locale);
      const metaFilename = locale ? META_FILENAME.replace(".", `.${locale}.`) : META_FILENAME;
      const metaPath = import_node_path4.default.join(dir, metaFilename);
      if (metaIndex === -1) {
        fileMap[metaPath] = __spreadProps(__spreadValues({
          kind: "Meta"
        }, locale && { locale }), {
          data: Object.fromEntries(defaultMeta)
        });
        items.push(fileMap[metaPath]);
      } else {
        const _a = items[metaIndex], { data } = _a, metaFile = __objRest(_a, ["data"]);
        fileMap[metaPath] = __spreadProps(__spreadValues({}, metaFile), {
          data: __spreadValues(__spreadValues({}, data), Object.fromEntries(defaultMeta.filter(([key]) => !(key in data))))
        });
        items[metaIndex] = fileMap[metaPath];
      }
    }
    return { items, fileMap };
  });
}
var PageMapCache = class {
  constructor() {
    this.cache = {
      items: [],
      fileMap: /* @__PURE__ */ Object.create(null)
    };
  }
  set(data) {
    this.cache.items = data.items;
    this.cache.fileMap = data.fileMap;
  }
  clear() {
    this.cache = null;
  }
  get() {
    return this.cache;
  }
};
var pageMapCache = new PageMapCache();
var NextraPlugin = class {
  constructor(config) {
    this.config = config;
  }
  apply(compiler) {
    compiler.hooks.beforeCompile.tapAsync(
      "NextraPlugin",
      (_, callback) => __async(this, null, function* () {
        var _a;
        if ((_a = this.config) == null ? void 0 : _a.unstable_flexsearch) {
          restoreCache();
        }
        const PAGES_DIR = (0, import_find_pages_dir.findPagesDir)(CWD).pages;
        const result = yield collectFiles(PAGES_DIR);
        pageMapCache.set(result);
        callback();
      })
    );
  }
};

// src/index.js
var DEFAULT_EXTENSIONS = ["js", "jsx", "ts", "tsx"];
var nextra = (...config) => function withNextra(nextConfig = {}) {
  var _a;
  const nextraConfig = typeof config[0] === "string" ? {
    theme: config[0],
    themeConfig: config[1]
  } : config[0];
  const nextraPlugin = new NextraPlugin(nextraConfig);
  if ((_a = nextConfig.i18n) == null ? void 0 : _a.locales) {
    console.log(
      "[nextra] You have Next.js i18n enabled, read here https://nextjs.org/docs/advanced-features/i18n-routing for the docs."
    );
  }
  return __spreadProps(__spreadValues({}, nextConfig), {
    pageExtensions: [
      ...nextConfig.pageExtensions || DEFAULT_EXTENSIONS,
      ...MARKDOWN_EXTENSIONS
    ],
    webpack(config2, options) {
      var _a2, _b, _c;
      config2.plugins || (config2.plugins = []);
      config2.plugins.push(nextraPlugin);
      const nextraLoaderOptions = __spreadProps(__spreadValues({}, nextraConfig), {
        locales: ((_a2 = nextConfig.i18n) == null ? void 0 : _a2.locales) || [DEFAULT_LOCALE],
        defaultLocale: ((_b = nextConfig.i18n) == null ? void 0 : _b.defaultLocale) || DEFAULT_LOCALE,
        pageMapCache,
        newNextLinkBehavior: (_c = nextConfig.experimental) == null ? void 0 : _c.newNextLinkBehavior
      });
      config2.module.rules.push(
        {
          test: MARKDOWN_EXTENSION_REGEX,
          issuer: (request) => !!request,
          use: [
            options.defaultLoaders.babel,
            {
              loader: "nextra/loader",
              options: nextraLoaderOptions
            }
          ]
        },
        {
          test: MARKDOWN_EXTENSION_REGEX,
          issuer: (request) => !request,
          use: [
            options.defaultLoaders.babel,
            {
              loader: "nextra/loader",
              options: __spreadProps(__spreadValues({}, nextraLoaderOptions), {
                pageImport: true
              })
            }
          ]
        }
      );
      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config2, options);
      }
      return config2;
    }
  });
};
module.exports = nextra;
