import { createRequire } from 'module';
import { pathToFileURL, fileURLToPath } from 'url';
import vm from 'vm';
import { b as resolve, d as dirname, g as isAbsolute, l as extname } from './chunk-utils-env.03f840f2.js';
import { s as slash, n as normalizeRequestId, b as toFilePath, c as isPrimitive, i as isNodeBuiltin, d as normalizeModuleId, m as mergeSlashes } from './chunk-vite-node-utils.8f0b4a12.js';
import createDebug from 'debug';

const debugExecute = createDebug("vite-node:client:execute");
const debugNative = createDebug("vite-node:client:native");
const DEFAULT_REQUEST_STUBS = {
  "/@vite/client": {
    injectQuery: (id) => id,
    createHotContext() {
      return {
        accept: () => {
        },
        prune: () => {
        },
        dispose: () => {
        },
        decline: () => {
        },
        invalidate: () => {
        },
        on: () => {
        }
      };
    },
    updateStyle(id, css) {
      if (typeof document === "undefined")
        return;
      const element = document.getElementById(id);
      if (element)
        element.remove();
      const head = document.querySelector("head");
      const style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.id = id;
      style.innerHTML = css;
      head == null ? void 0 : head.appendChild(style);
    }
  }
};
class ModuleCacheMap extends Map {
  normalizePath(fsPath) {
    return normalizeModuleId(fsPath);
  }
  update(fsPath, mod) {
    fsPath = this.normalizePath(fsPath);
    if (!super.has(fsPath))
      super.set(fsPath, mod);
    else
      Object.assign(super.get(fsPath), mod);
    return this;
  }
  set(fsPath, mod) {
    fsPath = this.normalizePath(fsPath);
    return super.set(fsPath, mod);
  }
  get(fsPath) {
    fsPath = this.normalizePath(fsPath);
    if (!super.has(fsPath))
      super.set(fsPath, {});
    return super.get(fsPath);
  }
  delete(fsPath) {
    fsPath = this.normalizePath(fsPath);
    return super.delete(fsPath);
  }
  invalidateDepTree(ids, invalidated = /* @__PURE__ */ new Set()) {
    for (const _id of ids) {
      const id = this.normalizePath(_id);
      if (invalidated.has(id))
        continue;
      invalidated.add(id);
      const mod = super.get(id);
      if (mod == null ? void 0 : mod.importers)
        this.invalidateDepTree(mod.importers, invalidated);
      super.delete(id);
    }
    return invalidated;
  }
  invalidateSubDepTree(ids, invalidated = /* @__PURE__ */ new Set()) {
    for (const _id of ids) {
      const id = this.normalizePath(_id);
      if (invalidated.has(id))
        continue;
      invalidated.add(id);
      const subIds = Array.from(super.entries()).filter(([, mod]) => {
        var _a;
        return (_a = mod.importers) == null ? void 0 : _a.has(id);
      }).map(([key]) => key);
      subIds.length && this.invalidateSubDepTree(subIds, invalidated);
      super.delete(id);
    }
    return invalidated;
  }
  getSourceMap(id) {
    var _a, _b;
    const fsPath = this.normalizePath(id);
    const cache = this.get(fsPath);
    if (cache.map)
      return cache.map;
    const mapString = (_b = (_a = cache == null ? void 0 : cache.code) == null ? void 0 : _a.match(/\/\/# sourceMappingURL=data:application\/json;charset=utf-8;base64,(.+)/)) == null ? void 0 : _b[1];
    if (mapString) {
      const map = JSON.parse(Buffer.from(mapString, "base64").toString("utf-8"));
      cache.map = map;
      return map;
    }
    return null;
  }
}
class ViteNodeRunner {
  constructor(options) {
    this.options = options;
    this.root = options.root ?? process.cwd();
    this.moduleCache = options.moduleCache ?? new ModuleCacheMap();
    this.debug = options.debug ?? (typeof process !== "undefined" ? !!process.env.VITE_NODE_DEBUG_RUNNER : false);
  }
  async executeFile(file) {
    return await this.cachedRequest(`/@fs/${slash(resolve(file))}`, []);
  }
  async executeId(id) {
    return await this.cachedRequest(id, []);
  }
  getSourceMap(id) {
    return this.moduleCache.getSourceMap(id);
  }
  async cachedRequest(rawId, callstack) {
    const id = normalizeRequestId(rawId, this.options.base);
    const fsPath = toFilePath(id, this.root);
    const mod = this.moduleCache.get(fsPath);
    const importee = callstack[callstack.length - 1];
    if (!mod.importers)
      mod.importers = /* @__PURE__ */ new Set();
    if (importee)
      mod.importers.add(importee);
    if (callstack.includes(fsPath) && mod.exports)
      return mod.exports;
    if (mod.promise)
      return mod.promise;
    const promise = this.directRequest(id, fsPath, callstack);
    Object.assign(mod, { promise });
    return await promise;
  }
  async directRequest(id, fsPath, _callstack) {
    const callstack = [..._callstack, fsPath];
    const mod = this.moduleCache.get(fsPath);
    const request = async (dep) => {
      var _a;
      const depFsPath = toFilePath(normalizeRequestId(dep, this.options.base), this.root);
      const getStack = () => {
        return `stack:
${[...callstack, depFsPath].reverse().map((p) => `- ${p}`).join("\n")}`;
      };
      let debugTimer;
      if (this.debug)
        debugTimer = setTimeout(() => console.warn(() => `module ${depFsPath} takes over 2s to load.
${getStack()}`), 2e3);
      try {
        if (callstack.includes(depFsPath)) {
          const depExports = (_a = this.moduleCache.get(depFsPath)) == null ? void 0 : _a.exports;
          if (depExports)
            return depExports;
          throw new Error(`[vite-node] Failed to resolve circular dependency, ${getStack()}`);
        }
        return await this.cachedRequest(dep, callstack);
      } finally {
        if (debugTimer)
          clearTimeout(debugTimer);
      }
    };
    Object.defineProperty(request, "callstack", { get: () => callstack });
    const resolveId = async (dep, callstackPosition = 1) => {
      if (this.options.resolveId && this.shouldResolveId(dep)) {
        let importer = callstack[callstack.length - callstackPosition];
        if (importer && importer.startsWith("mock:"))
          importer = importer.slice(5);
        const { id: id2 } = await this.options.resolveId(dep, importer) || {};
        dep = id2 && isAbsolute(id2) ? mergeSlashes(`/@fs/${id2}`) : id2 || dep;
      }
      return dep;
    };
    id = await resolveId(id, 2);
    const requestStubs = this.options.requestStubs || DEFAULT_REQUEST_STUBS;
    if (id in requestStubs)
      return requestStubs[id];
    let { code: transformed, externalize } = await this.options.fetchModule(id);
    if (externalize) {
      debugNative(externalize);
      const exports2 = await this.interopedImport(externalize);
      mod.exports = exports2;
      return exports2;
    }
    if (transformed == null)
      throw new Error(`[vite-node] Failed to load ${id}`);
    const url = pathToFileURL(fsPath).href;
    const meta = { url };
    const exports = /* @__PURE__ */ Object.create(null);
    Object.defineProperty(exports, Symbol.toStringTag, {
      value: "Module",
      enumerable: false,
      configurable: false
    });
    const cjsExports = new Proxy(exports, {
      get(_, p, receiver) {
        return Reflect.get(exports, p, receiver);
      },
      set(_, p, value) {
        if (!Reflect.has(exports, "default"))
          exports.default = {};
        if (isPrimitive(exports.default)) {
          defineExport(exports, p, () => void 0);
          return true;
        }
        exports.default[p] = value;
        if (p !== "default")
          defineExport(exports, p, () => value);
        return true;
      }
    });
    Object.assign(mod, { code: transformed, exports });
    const __filename = fileURLToPath(url);
    const moduleProxy = {
      set exports(value) {
        exportAll(cjsExports, value);
        exports.default = value;
      },
      get exports() {
        return cjsExports;
      }
    };
    let hotContext;
    if (this.options.createHotContext) {
      Object.defineProperty(meta, "hot", {
        enumerable: true,
        get: () => {
          var _a, _b;
          hotContext || (hotContext = (_b = (_a = this.options).createHotContext) == null ? void 0 : _b.call(_a, this, `/@fs/${fsPath}`));
          return hotContext;
        }
      });
    }
    const context = this.prepareContext({
      __vite_ssr_import__: request,
      __vite_ssr_dynamic_import__: request,
      __vite_ssr_exports__: exports,
      __vite_ssr_exportAll__: (obj) => exportAll(exports, obj),
      __vite_ssr_import_meta__: meta,
      __vitest_resolve_id__: resolveId,
      require: createRequire(url),
      exports: cjsExports,
      module: moduleProxy,
      __filename,
      __dirname: dirname(__filename)
    });
    debugExecute(__filename);
    if (transformed[0] === "#")
      transformed = transformed.replace(/^\#\!.*/, (s) => " ".repeat(s.length));
    const codeDefinition = `'use strict';async (${Object.keys(context).join(",")})=>{{`;
    const code = `${codeDefinition}${transformed}
}}`;
    const fn = vm.runInThisContext(code, {
      filename: fsPath,
      lineOffset: 0,
      columnOffset: -codeDefinition.length
    });
    await fn(...Object.values(context));
    return exports;
  }
  prepareContext(context) {
    return context;
  }
  shouldResolveId(dep) {
    if (isNodeBuiltin(dep) || dep in (this.options.requestStubs || DEFAULT_REQUEST_STUBS) || dep.startsWith("/@vite"))
      return false;
    return !isAbsolute(dep) || !extname(dep);
  }
  shouldInterop(path, mod) {
    if (this.options.interopDefault === false)
      return false;
    return !path.endsWith(".mjs") && "default" in mod;
  }
  async interopedImport(path) {
    const mod = await import(path);
    if (this.shouldInterop(path, mod)) {
      const tryDefault = this.hasNestedDefault(mod);
      return new Proxy(mod, {
        get: proxyMethod("get", tryDefault),
        set: proxyMethod("set", tryDefault),
        has: proxyMethod("has", tryDefault),
        deleteProperty: proxyMethod("deleteProperty", tryDefault)
      });
    }
    return mod;
  }
  hasNestedDefault(target) {
    return "__esModule" in target && target.__esModule && "default" in target.default;
  }
}
function proxyMethod(name, tryDefault) {
  return function(target, key, ...args) {
    const result = Reflect[name](target, key, ...args);
    if (isPrimitive(target.default))
      return result;
    if (tryDefault && key === "default" || typeof result === "undefined")
      return Reflect[name](target.default, key, ...args);
    return result;
  };
}
function defineExport(exports, key, value) {
  Object.defineProperty(exports, key, {
    enumerable: true,
    configurable: true,
    get: value
  });
}
function exportAll(exports, sourceModule) {
  if (exports === sourceModule)
    return;
  if (typeof sourceModule !== "object" || Array.isArray(sourceModule) || !sourceModule)
    return;
  for (const key in sourceModule) {
    if (key !== "default") {
      try {
        defineExport(exports, key, () => sourceModule[key]);
      } catch (_err) {
      }
    }
  }
}

const DEFAULT_TIMEOUT = 6e4;
function createBirpc(functions, options) {
  const {
    post,
    on,
    eventNames = [],
    serialize = (i) => i,
    deserialize = (i) => i,
    timeout = DEFAULT_TIMEOUT
  } = options;
  const rpcPromiseMap = /* @__PURE__ */ new Map();
  const rpc = new Proxy({}, {
    get(_, method) {
      const sendEvent = (...args) => {
        post(serialize({ m: method, a: args, t: "q" }));
      };
      if (eventNames.includes(method)) {
        sendEvent.asEvent = sendEvent;
        return sendEvent;
      }
      const sendCall = (...args) => {
        return new Promise((resolve, reject) => {
          const id = nanoid();
          rpcPromiseMap.set(id, { resolve, reject });
          post(serialize({ m: method, a: args, i: id, t: "q" }));
          if (timeout >= 0) {
            setTimeout(() => {
              reject(new Error(`[birpc] timeout on calling "${method}"`));
              rpcPromiseMap.delete(id);
            }, timeout);
          }
        });
      };
      sendCall.asEvent = sendEvent;
      return sendCall;
    }
  });
  on(async (data, ...extra) => {
    const msg = deserialize(data);
    if (msg.t === "q") {
      const { m: method, a: args } = msg;
      let result, error;
      try {
        result = await functions[method].apply(rpc, args);
      } catch (e) {
        error = e;
      }
      if (msg.i)
        post(serialize({ t: "s", i: msg.i, r: result, e: error }), ...extra);
    } else {
      const { i: ack, r: result, e: error } = msg;
      const promise = rpcPromiseMap.get(ack);
      if (error)
        promise?.reject(error);
      else
        promise?.resolve(result);
      rpcPromiseMap.delete(ack);
    }
  });
  return rpc;
}
const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
function nanoid(size = 21) {
  let id = "";
  let i = size;
  while (i--)
    id += urlAlphabet[Math.random() * 64 | 0];
  return id;
}

export { ModuleCacheMap as M, ViteNodeRunner as V, createBirpc as c };
