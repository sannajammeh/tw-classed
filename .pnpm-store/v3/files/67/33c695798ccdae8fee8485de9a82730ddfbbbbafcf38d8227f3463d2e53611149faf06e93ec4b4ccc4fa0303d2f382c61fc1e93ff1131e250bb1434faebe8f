// src/constants.ts
import path from "path";
var MARKDOWN_EXTENSION_REGEX = /\.mdx?$/;
var IS_PRODUCTION = process.env.NODE_ENV === "production";
var LOCALE_REGEX = /\.([a-z]{2}(-[A-Z]{2})?)$/;
var DEFAULT_LOCALE = "en-US";
var OFFICIAL_THEMES = [
  "nextra-theme-docs",
  "nextra-theme-blog"
];
var META_FILENAME = "_meta.json";
var CWD = process.cwd();
var PUBLIC_DIR = path.join(CWD, "public");
var CACHE_DIR = path.join(CWD, ".next", "cache");
var ASSET_DIR = path.join(CWD, ".next", "static", "chunks");
var EXTERNAL_URL_REGEX = /^https?:\/\//;

// src/utils.ts
import path2 from "path";
import title from "title";
function parseFileName(filePath) {
  var _a;
  const { name, ext } = path2.parse(filePath);
  const locale = ((_a = name.match(LOCALE_REGEX)) == null ? void 0 : _a[1]) || "";
  return {
    name: locale ? name.replace(LOCALE_REGEX, "") : name,
    locale,
    ext
  };
}
var parseJsonFile = (content, path3) => {
  try {
    return JSON.parse(content);
  } catch (err) {
    console.error(
      `[nextra] Error parsing ${path3}, make sure it's a valid JSON`,
      err
    );
    return {};
  }
};
function truthy(value) {
  return !!value;
}
function normalizeMeta(meta) {
  return typeof meta === "string" ? { title: meta } : meta;
}
function sortPages(pages, locale) {
  return pages.filter((item) => item.kind === "Folder" || item.locale === locale).map((item) => {
    var _a, _b;
    return {
      name: item.name,
      date: "frontMatter" in item && ((_a = item.frontMatter) == null ? void 0 : _a.date),
      title: "frontMatter" in item && ((_b = item.frontMatter) == null ? void 0 : _b.title) || title(item.name.replace(/[-_]/g, " "))
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

export {
  MARKDOWN_EXTENSION_REGEX,
  IS_PRODUCTION,
  DEFAULT_LOCALE,
  OFFICIAL_THEMES,
  META_FILENAME,
  CWD,
  PUBLIC_DIR,
  CACHE_DIR,
  ASSET_DIR,
  EXTERNAL_URL_REGEX,
  parseFileName,
  parseJsonFile,
  truthy,
  normalizeMeta,
  sortPages
};
