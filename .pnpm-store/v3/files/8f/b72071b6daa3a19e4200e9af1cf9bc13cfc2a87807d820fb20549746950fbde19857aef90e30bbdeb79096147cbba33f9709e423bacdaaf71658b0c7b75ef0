import { existsSync, promises } from 'fs';
import _url from 'url';
import { takeCoverage } from 'v8';
import path from 'path';
import { configDefaults } from 'vitest/config';
import createReport from 'c8/lib/report.js';
import { checkCoverages } from 'c8/lib/commands/check-coverage.js';

function normalizeWindowsPath(input = "") {
  if (!input.includes("\\")) {
    return input;
  }
  return input.replace(/\\/g, "/");
}

const _UNC_REGEX = /^[/][/]/;
const _UNC_DRIVE_REGEX = /^[/][/]([.]{1,2}[/])?([a-zA-Z]):[/]/;
const _IS_ABSOLUTE_RE = /^\/|^\\|^[a-zA-Z]:[/\\]/;
const sep = "/";
const delimiter = ":";
const normalize = function(path2) {
  if (path2.length === 0) {
    return ".";
  }
  path2 = normalizeWindowsPath(path2);
  const isUNCPath = path2.match(_UNC_REGEX);
  const hasUNCDrive = isUNCPath && path2.match(_UNC_DRIVE_REGEX);
  const isPathAbsolute = isAbsolute(path2);
  const trailingSeparator = path2[path2.length - 1] === "/";
  path2 = normalizeString(path2, !isPathAbsolute);
  if (path2.length === 0) {
    if (isPathAbsolute) {
      return "/";
    }
    return trailingSeparator ? "./" : ".";
  }
  if (trailingSeparator) {
    path2 += "/";
  }
  if (isUNCPath) {
    if (hasUNCDrive) {
      return `//./${path2}`;
    }
    return `//${path2}`;
  }
  return isPathAbsolute && !isAbsolute(path2) ? `/${path2}` : path2;
};
const join = function(...args) {
  if (args.length === 0) {
    return ".";
  }
  let joined;
  for (let i = 0; i < args.length; ++i) {
    const arg = args[i];
    if (arg.length > 0) {
      if (joined === void 0) {
        joined = arg;
      } else {
        joined += `/${arg}`;
      }
    }
  }
  if (joined === void 0) {
    return ".";
  }
  return normalize(joined);
};
const resolve = function(...args) {
  args = args.map((arg) => normalizeWindowsPath(arg));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    const path2 = i >= 0 ? args[i] : process.cwd();
    if (path2.length === 0) {
      continue;
    }
    resolvedPath = `${path2}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path2);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path2, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let i = 0; i <= path2.length; ++i) {
    if (i < path2.length) {
      char = path2[i];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === i - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path2.slice(lastSlash + 1, i)}`;
        } else {
          res = path2.slice(lastSlash + 1, i);
        }
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const toNamespacedPath = function(p) {
  return normalizeWindowsPath(p);
};
const extname = function(p) {
  return path.posix.extname(normalizeWindowsPath(p));
};
const relative = function(from, to) {
  return path.posix.relative(normalizeWindowsPath(from), normalizeWindowsPath(to));
};
const dirname = function(p) {
  return path.posix.dirname(normalizeWindowsPath(p));
};
const format = function(p) {
  return normalizeWindowsPath(path.posix.format(p));
};
const basename = function(p, ext) {
  return path.posix.basename(normalizeWindowsPath(p), ext);
};
const parse = function(p) {
  return path.posix.parse(normalizeWindowsPath(p));
};

const _path = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sep: sep,
  delimiter: delimiter,
  normalize: normalize,
  join: join,
  resolve: resolve,
  normalizeString: normalizeString,
  isAbsolute: isAbsolute,
  toNamespacedPath: toNamespacedPath,
  extname: extname,
  relative: relative,
  dirname: dirname,
  format: format,
  basename: basename,
  parse: parse
});

({
  ..._path
});

class C8CoverageProvider {
  constructor() {
    this.name = "c8";
  }
  initialize(ctx) {
    this.ctx = ctx;
    this.options = resolveC8Options(ctx.config.coverage, ctx.config.root);
  }
  resolveOptions() {
    return this.options;
  }
  onBeforeFilesRun() {
    var _a;
    (_a = process.env).NODE_V8_COVERAGE || (_a.NODE_V8_COVERAGE = this.options.tempDirectory);
  }
  async clean(clean = true) {
    if (clean && existsSync(this.options.reportsDirectory))
      await promises.rm(this.options.reportsDirectory, { recursive: true, force: true });
    if (!existsSync(this.options.tempDirectory))
      await promises.mkdir(this.options.tempDirectory, { recursive: true });
  }
  onAfterSuiteRun() {
    takeCoverage();
  }
  async reportCoverage() {
    takeCoverage();
    const report = createReport(this.ctx.config.coverage);
    const sourceMapMeta = {};
    await Promise.all(Array.from(this.ctx.vitenode.fetchCache.entries()).filter((i) => !i[0].includes("/node_modules/")).map(async ([file, { result }]) => {
      const map = result.map;
      if (!map)
        return;
      const url = _url.pathToFileURL(file.split("?")[0]).href;
      let code;
      try {
        code = (await promises.readFile(file)).toString();
      } catch {
      }
      const sources = [url];
      sourceMapMeta[url] = {
        source: result.code,
        map: {
          sourcesContent: code ? [code] : void 0,
          ...map,
          sources
        }
      };
    }));
    const offset = 224;
    report._getSourceMap = (coverage) => {
      const path = _url.pathToFileURL(coverage.url.split("?")[0]).href;
      const data = sourceMapMeta[path];
      if (!data)
        return {};
      return {
        sourceMap: {
          sourcemap: data.map
        },
        source: Array(offset).fill(".").join("") + data.source
      };
    };
    await report.run();
    await checkCoverages(this.options, report);
    if (existsSync(this.options.tempDirectory))
      await promises.rm(this.options.tempDirectory, { recursive: true, force: true });
  }
}
function resolveC8Options(options, root) {
  const resolved = {
    ...configDefaults.coverage,
    ...options
  };
  if (options["100"]) {
    resolved.lines = 100;
    resolved.functions = 100;
    resolved.branches = 100;
    resolved.statements = 100;
  }
  resolved.reporter = resolved.reporter || [];
  resolved.reporter = Array.isArray(resolved.reporter) ? resolved.reporter : [resolved.reporter];
  resolved.reportsDirectory = resolve(root, resolved.reportsDirectory);
  resolved.tempDirectory = process.env.NODE_V8_COVERAGE || resolve(resolved.reportsDirectory, "tmp");
  return resolved;
}

export { C8CoverageProvider };
