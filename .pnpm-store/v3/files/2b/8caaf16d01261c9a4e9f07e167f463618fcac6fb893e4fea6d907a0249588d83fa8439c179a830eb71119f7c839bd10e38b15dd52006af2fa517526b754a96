import {
  compileMdx,
  existsSync
} from "./chunk-B7A7DWZ4.mjs";
import {
  ASSET_DIR,
  CACHE_DIR,
  CWD,
  DEFAULT_LOCALE,
  IS_PRODUCTION,
  MARKDOWN_EXTENSION_REGEX,
  META_FILENAME,
  OFFICIAL_THEMES,
  normalizeMeta,
  parseFileName,
  parseJsonFile,
  sortPages,
  truthy
} from "./chunk-NIIBOJPU.mjs";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-HIDP27A7.mjs";

// src/loader.ts
import path4 from "path";
import grayMatter2 from "gray-matter";
import slash2 from "slash";
import { findPagesDir as findPagesDir2 } from "next/dist/lib/find-pages-dir.js";

// src/content-dump.ts
import path from "path";
import fs from "graceful-fs";
var asset = /* @__PURE__ */ Object.create(null);
var cached = /* @__PURE__ */ new Map();
if (!existsSync(ASSET_DIR)) {
  fs.mkdirSync(ASSET_DIR, { recursive: true });
}
var cacheDirExist = existsSync(CACHE_DIR);
if (!cacheDirExist) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}
function initFromCache(filename) {
  if (!cached.has(filename)) {
    try {
      const content = fs.readFileSync(path.join(ASSET_DIR, filename), "utf8");
      cached.set(filename, true);
      return JSON.parse(content);
    } catch (e) {
      cached.set(filename, false);
    }
  }
  return {};
}
function addPage({
  locale,
  route,
  title,
  structurizedData
}) {
  const dataFilename = `nextra-data-${locale}.json`;
  asset[locale] || (asset[locale] = initFromCache(dataFilename));
  asset[locale][route] = {
    title,
    data: structurizedData
  };
  const content = JSON.stringify(asset[locale]);
  fs.writeFileSync(path.join(ASSET_DIR, dataFilename), content);
  fs.writeFileSync(path.join(CACHE_DIR, dataFilename), content);
}

// src/page-map.ts
import path2 from "path";

// src/filter-route-locale.ts
function filterRouteLocale(pageMap, locale, defaultLocale) {
  const isDefaultLocale = !locale || locale === defaultLocale;
  const filteredPageMap = [];
  const fallbackPages = /* @__PURE__ */ Object.create(null);
  for (let page of pageMap) {
    if (page.kind === "Folder") {
      filteredPageMap.push(__spreadProps(__spreadValues({}, page), {
        children: filterRouteLocale(page.children, locale, defaultLocale)
      }));
      continue;
    }
    const localDoesMatch = !page.locale && isDefaultLocale || page.locale === locale;
    const name = page.kind === "Meta" ? META_FILENAME : page.name;
    if (localDoesMatch) {
      fallbackPages[name] = null;
      filteredPageMap.push(page);
    } else if (fallbackPages[name] !== null && (!page.locale || page.locale === defaultLocale)) {
      fallbackPages[name] = page;
    }
  }
  return [...filteredPageMap, ...Object.values(fallbackPages).filter(truthy)];
}

// src/page-map.ts
function getPageMap({
  filePath,
  pageMap,
  fileMap,
  defaultLocale
}) {
  const { locale } = parseFileName(filePath);
  const pageItem = fileMap[filePath];
  const metaFilename = locale ? META_FILENAME.replace(".", `.${locale}.`) : META_FILENAME;
  const metaDir = path2.dirname(filePath);
  const metaPath = path2.join(metaDir, metaFilename);
  const pageMeta = fileMap[metaPath].data[pageItem.name];
  return {
    pageMap: locale ? filterRouteLocale(pageMap, locale, defaultLocale) : pageMap,
    title: normalizeMeta(pageMeta).title,
    route: pageItem.route
  };
}

// src/plugin.ts
import fs2 from "graceful-fs";
import { promisify } from "util";
import path3 from "path";
import slash from "slash";
import grayMatter from "gray-matter";
import { findPagesDir } from "next/dist/lib/find-pages-dir.js";
var readdir = promisify(fs2.readdir);
var readFile = promisify(fs2.readFile);
var collectMdx = (filePath, route = "") => __async(void 0, null, function* () {
  const { name, locale } = parseFileName(filePath);
  const content = yield readFile(filePath, "utf8");
  const { data } = grayMatter(content);
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
      const filePath = path3.join(dir, f.name);
      const isDirectory = f.isDirectory();
      const { name, locale, ext } = isDirectory ? { name: path3.basename(filePath), locale: "", ext: "" } : parseFileName(filePath);
      const fileRoute = slash(path3.join(route, name.replace(/^index$/, "")));
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
          path3.relative(CWD, filePath)
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
      const metaPath = path3.join(dir, metaFilename);
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

// src/loader.ts
var PAGES_DIR = findPagesDir2(CWD).pages;
var indexContentEmitted = /* @__PURE__ */ new Set();
var IS_WEB_CONTAINER = !!process.versions.webcontainer;
var initGitRepo = (() => __async(void 0, null, function* () {
  if (!IS_WEB_CONTAINER) {
    const { Repository } = yield import("@napi-rs/simple-git");
    try {
      const repository = Repository.discover(CWD);
      if (repository.isShallow()) {
        if (process.env.VERCEL) {
          console.warn(
            "[nextra] The repository is shallow cloned, so the latest modified time will not be presented. Set the VERCEL_DEEP_CLONE=true environment variable to enable deep cloning."
          );
        } else if (process.env.GITHUB_ACTION) {
          console.warn(
            "[nextra] The repository is shallow cloned, so the latest modified time will not be presented. See https://github.com/actions/checkout#fetch-all-history-for-all-tags-and-branches to fetch all the history."
          );
        } else {
          console.warn(
            "[nextra] The repository is shallow cloned, so the latest modified time will not be presented."
          );
        }
      }
      const gitRoot = path4.join(repository.path(), "..");
      return { repository, gitRoot };
    } catch (e) {
      console.warn("[nextra] Init git repository failed", e);
    }
  }
  return {};
}))();
function loader(context, source) {
  return __async(this, null, function* () {
    const {
      pageImport,
      theme,
      themeConfig,
      defaultLocale,
      unstable_defaultShowCopyCode,
      unstable_flexsearch,
      unstable_staticImage,
      unstable_readingTime,
      mdxOptions,
      pageMapCache: pageMapCache2,
      newNextLinkBehavior
    } = context.getOptions();
    context.cacheable(true);
    if (!theme) {
      throw new Error("No Nextra theme found!");
    }
    const mdxPath = context.resourcePath;
    if (mdxPath.includes("/pages/api/")) {
      console.warn(
        `[nextra] Ignoring ${mdxPath} because it is located in the "pages/api" folder.`
      );
      return "";
    }
    const { items, fileMap } = IS_PRODUCTION ? pageMapCache2.get() : yield collectFiles(PAGES_DIR);
    if (!fileMap[mdxPath]) {
      fileMap[mdxPath] = yield collectMdx(mdxPath);
      context.addMissingDependency(mdxPath);
    }
    const { locale } = parseFileName(mdxPath);
    for (const [filePath, file] of Object.entries(fileMap)) {
      if (file.kind === "Meta" && (!locale || file.locale === locale)) {
        context.addDependency(filePath);
      }
    }
    context.addContextDependency(PAGES_DIR);
    const { data: frontMatter, content } = grayMatter2(source);
    const { result, headings, structurizedData, hasJsxInH1, readingTime } = yield compileMdx(
      content,
      {
        mdxOptions: __spreadProps(__spreadValues({}, mdxOptions), {
          jsx: true,
          outputFormat: "program"
        }),
        unstable_readingTime,
        unstable_defaultShowCopyCode,
        unstable_staticImage,
        unstable_flexsearch
      },
      mdxPath
    );
    const cssImport = OFFICIAL_THEMES.includes(theme) ? `import '${theme}/style.css'` : "";
    if (!pageImport) {
      return `
${cssImport}
${result}
export default MDXContent`.trimStart();
    }
    const { route, title, pageMap } = getPageMap({
      filePath: mdxPath,
      fileMap,
      defaultLocale,
      pageMap: items
    });
    const skipFlexsearchIndexing = IS_PRODUCTION && indexContentEmitted.has(mdxPath);
    if (unstable_flexsearch && !skipFlexsearchIndexing) {
      if (frontMatter.searchable !== false) {
        addPage({
          locale: locale || DEFAULT_LOCALE,
          route,
          title,
          structurizedData
        });
      }
      indexContentEmitted.add(mdxPath);
    }
    let timestamp;
    const { repository, gitRoot } = yield initGitRepo;
    if (repository && gitRoot) {
      try {
        timestamp = yield repository.getFileLatestModifiedDateAsync(
          path4.relative(gitRoot, mdxPath)
        );
      } catch (e) {
      }
    }
    const layout = theme.startsWith(".") || theme.startsWith("/") ? path4.resolve(theme) : theme;
    const themeConfigImport = themeConfig ? `import __nextra_themeConfig__ from '${slash2(path4.resolve(themeConfig))}'` : "";
    const pageOpts = {
      filePath: slash2(path4.relative(CWD, mdxPath)),
      route,
      frontMatter,
      pageMap,
      headings,
      hasJsxInH1,
      timestamp,
      unstable_flexsearch,
      newNextLinkBehavior,
      readingTime
    };
    const pageNextRoute = "/" + slash2(path4.relative(PAGES_DIR, mdxPath)).replace(MARKDOWN_EXTENSION_REGEX, "").replace(/\/index$/, "").replace(/^index$/, "");
    return `
import { SSGContext as __nextra_SSGContext__ } from 'nextra/ssg'
${themeConfigImport}
${cssImport}

const __nextra_pageOpts__ = ${JSON.stringify(pageOpts)}

globalThis.__nextra_internal__ = {
  pageMap: __nextra_pageOpts__.pageMap,
  route: __nextra_pageOpts__.route
}

${result}

__nextra_pageOpts__.title =
  ${JSON.stringify(frontMatter.title)} ||
  (typeof __nextra_title__ === 'string' && __nextra_title__) ||
  ${JSON.stringify(title)}

const Content = props => (
  <__nextra_SSGContext__.Provider value={props}>
    <MDXContent />
  </__nextra_SSGContext__.Provider>
)

globalThis.__nextra_pageContext__ ||= Object.create(null)

// Make sure the same component is always returned so Next.js will render the
// stable layout. We then put the actual content into a global store and use
// the route to identify it.
globalThis.__nextra_pageContext__[${JSON.stringify(pageNextRoute)}] = {
  Content,
  pageOpts: __nextra_pageOpts__,
  themeConfig: ${themeConfigImport ? "__nextra_themeConfig__" : "null"}
}

export { default } from '${layout}'`.trimStart();
  });
}
function syncLoader(source, callback) {
  loader(this, source).then((result) => callback(null, result)).catch((err) => callback(err));
}
export {
  syncLoader as default
};
