import { V as ViteNodeRunner } from './chunk-vite-node-client.85cc7113.js';
import { normalizePath } from 'vite';
import { g as getWorkerState, H as mergeSlashes, s as slash, w as getType, I as getAllMockableProperties } from './chunk-typecheck-constants.4891f22f.js';
import { existsSync, readdirSync } from 'fs';
import { n as normalizeRequestId, p as pathFromRoot, i as isNodeBuiltin, b as toFilePath } from './chunk-vite-node-utils.8f0b4a12.js';
import { d as dirname, j as join, c as basename, l as extname, b as resolve, e as distDir } from './chunk-utils-env.03f840f2.js';

class RefTracker {
  constructor() {
    this.idMap = /* @__PURE__ */ new Map();
    this.mockedValueMap = /* @__PURE__ */ new Map();
  }
  getId(value) {
    return this.idMap.get(value);
  }
  getMockedValue(id) {
    return this.mockedValueMap.get(id);
  }
  track(originalValue, mockedValue) {
    const newId = this.idMap.size;
    this.idMap.set(originalValue, newId);
    this.mockedValueMap.set(newId, mockedValue);
    return newId;
  }
}
function isSpecialProp(prop, parentType) {
  return parentType.includes("Function") && typeof prop === "string" && ["arguments", "callee", "caller", "length", "name"].includes(prop);
}
const _VitestMocker = class {
  constructor(options, moduleCache, request) {
    this.options = options;
    this.moduleCache = moduleCache;
    this.request = request;
  }
  get root() {
    return this.options.root;
  }
  get base() {
    return this.options.base;
  }
  get mockMap() {
    return this.options.mockMap;
  }
  getSuiteFilepath() {
    return getWorkerState().filepath || "global";
  }
  getMocks() {
    const suite = this.getSuiteFilepath();
    const suiteMocks = this.mockMap.get(suite);
    const globalMocks = this.mockMap.get("global");
    return {
      ...globalMocks,
      ...suiteMocks
    };
  }
  async resolvePath(id, importer) {
    const path = await this.options.resolveId(id, importer);
    const external = path == null || path.id.includes("/node_modules/") ? id : null;
    return {
      path: normalizeRequestId((path == null ? void 0 : path.id) || id),
      external
    };
  }
  async resolveMocks() {
    await Promise.all(_VitestMocker.pendingIds.map(async (mock) => {
      const { path, external } = await this.resolvePath(mock.id, mock.importer);
      if (mock.type === "unmock")
        this.unmockPath(path);
      if (mock.type === "mock")
        this.mockPath(path, external, mock.factory);
    }));
    _VitestMocker.pendingIds = [];
  }
  async callFunctionMock(dep, mock) {
    var _a;
    const cached = (_a = this.moduleCache.get(dep)) == null ? void 0 : _a.exports;
    if (cached)
      return cached;
    let exports;
    try {
      exports = await mock();
    } catch (err) {
      const vitestError = new Error(
        "[vitest] There was an error, when mocking a module. If you are using vi.mock, make sure you are not using top level variables inside, since this call is hoisted. Read more: https://vitest.dev/api/#vi-mock"
      );
      vitestError.cause = err;
      throw vitestError;
    }
    if (exports === null || typeof exports !== "object")
      throw new Error('[vitest] vi.mock(path: string, factory?: () => unknown) is not returning an object. Did you mean to return an object with a "default" key?');
    this.moduleCache.set(dep, { exports });
    const filepath = dep.slice("mock:".length);
    const exportHandler = {
      get(target, prop) {
        const val = target[prop];
        if (prop === "then") {
          if (target instanceof Promise)
            return target.then.bind(target);
        } else if (!(prop in target)) {
          throw new Error(`[vitest] No "${prop}" export is defined on the "${filepath}"`);
        }
        return val;
      }
    };
    return new Proxy(exports, exportHandler);
  }
  getMockPath(dep) {
    return `mock:${dep}`;
  }
  getDependencyMock(id) {
    return this.getMocks()[id];
  }
  normalizePath(path) {
    return pathFromRoot(this.root, normalizeRequestId(path, this.base));
  }
  getFsPath(path, external) {
    if (external)
      return mergeSlashes(`/@fs/${path}`);
    return normalizeRequestId(path, this.base);
  }
  resolveMockPath(mockPath, external) {
    const path = normalizeRequestId(external || mockPath);
    if (external || isNodeBuiltin(mockPath) || !existsSync(mockPath)) {
      const mockDirname = dirname(path);
      const mockFolder = join(this.root, "__mocks__", mockDirname);
      if (!existsSync(mockFolder))
        return null;
      const files = readdirSync(mockFolder);
      const baseOriginal = basename(path);
      for (const file of files) {
        const baseFile = basename(file, extname(file));
        if (baseFile === baseOriginal)
          return resolve(mockFolder, file);
      }
      return null;
    }
    const dir = dirname(path);
    const baseId = basename(path);
    const fullPath = resolve(dir, "__mocks__", baseId);
    return existsSync(fullPath) ? fullPath : null;
  }
  mockObject(object) {
    if (!_VitestMocker.spyModule) {
      throw new Error(
        "Error: Spy module is not defined. This is likely an internal bug in Vitest. Please report it to https://github.com/vitest-dev/vitest/issues"
      );
    }
    const spyModule = _VitestMocker.spyModule;
    const finalizers = new Array();
    const refs = new RefTracker();
    const define = (container, key, value) => {
      try {
        container[key] = value;
        return true;
      } catch {
        return false;
      }
    };
    const mockPropertiesOf = (container, newContainer) => {
      const containerType = getType(container);
      const isModule = containerType === "Module" || !!container.__esModule;
      for (const { key: property, descriptor } of getAllMockableProperties(container)) {
        if (!isModule && descriptor.get) {
          try {
            Object.defineProperty(newContainer, property, descriptor);
          } catch (error) {
          }
          continue;
        }
        if (isSpecialProp(property, containerType))
          continue;
        const value = container[property];
        const refId = refs.getId(value);
        if (refId !== void 0) {
          finalizers.push(() => define(newContainer, property, refs.getMockedValue(refId)));
          continue;
        }
        const type = getType(value);
        if (Array.isArray(value)) {
          define(newContainer, property, []);
          continue;
        }
        const isFunction = type.includes("Function") && typeof value === "function";
        if ((!isFunction || value.__isMockFunction) && type !== "Object" && type !== "Module") {
          define(newContainer, property, value);
          continue;
        }
        if (!define(newContainer, property, isFunction ? value : {}))
          continue;
        if (isFunction) {
          spyModule.spyOn(newContainer, property).mockImplementation(() => void 0);
          Object.defineProperty(newContainer[property], "length", { value: 0 });
        }
        refs.track(value, newContainer[property]);
        mockPropertiesOf(value, newContainer[property]);
      }
    };
    const mockedObject = {};
    mockPropertiesOf(object, mockedObject);
    for (const finalizer of finalizers)
      finalizer();
    return mockedObject;
  }
  unmockPath(path) {
    const suitefile = this.getSuiteFilepath();
    const id = this.normalizePath(path);
    const mock = this.mockMap.get(suitefile);
    if (mock == null ? void 0 : mock[id])
      delete mock[id];
    const mockId = this.getMockPath(id);
    if (this.moduleCache.get(mockId))
      this.moduleCache.delete(mockId);
  }
  mockPath(path, external, factory) {
    const suitefile = this.getSuiteFilepath();
    const id = this.normalizePath(path);
    const mocks = this.mockMap.get(suitefile) || {};
    mocks[id] = factory || this.resolveMockPath(path, external);
    this.mockMap.set(suitefile, mocks);
  }
  async importActual(id, importer) {
    const { path, external } = await this.resolvePath(id, importer);
    const fsPath = this.getFsPath(path, external);
    const result = await this.request(fsPath);
    return result;
  }
  async importMock(id, importer) {
    const { path, external } = await this.resolvePath(id, importer);
    const fsPath = this.getFsPath(path, external);
    const normalizedId = this.normalizePath(fsPath);
    let mock = this.getDependencyMock(normalizedId);
    if (mock === void 0)
      mock = this.resolveMockPath(fsPath, external);
    if (mock === null) {
      await this.ensureSpy();
      const mod = await this.request(fsPath);
      return this.mockObject(mod);
    }
    if (typeof mock === "function")
      return this.callFunctionMock(fsPath, mock);
    return this.requestWithMock(mock);
  }
  async ensureSpy() {
    if (_VitestMocker.spyModule)
      return;
    _VitestMocker.spyModule = await this.request(`/@fs/${slash(resolve(distDir, "spy.js"))}`);
  }
  async requestWithMock(dep) {
    var _a;
    await Promise.all([
      this.ensureSpy(),
      this.resolveMocks()
    ]);
    const id = this.normalizePath(dep);
    const mock = this.getDependencyMock(id);
    const callstack = this.request.callstack;
    const mockPath = this.getMockPath(id);
    if (mock === null) {
      const cache = this.moduleCache.get(mockPath);
      if (cache == null ? void 0 : cache.exports)
        return cache.exports;
      const cacheKey = toFilePath(dep, this.root);
      const mod = ((_a = this.moduleCache.get(cacheKey)) == null ? void 0 : _a.exports) || await this.request(dep);
      const exports = this.mockObject(mod);
      this.moduleCache.set(mockPath, { exports });
      return exports;
    }
    if (typeof mock === "function" && !callstack.includes(mockPath)) {
      callstack.push(mockPath);
      const result = await this.callFunctionMock(mockPath, mock);
      const indexMock = callstack.indexOf(mockPath);
      callstack.splice(indexMock, 1);
      return result;
    }
    if (typeof mock === "string" && !callstack.includes(mock))
      dep = mock;
    return this.request(dep);
  }
  queueMock(id, importer, factory) {
    _VitestMocker.pendingIds.push({ type: "mock", id, importer, factory });
  }
  queueUnmock(id, importer) {
    _VitestMocker.pendingIds.push({ type: "unmock", id, importer });
  }
};
let VitestMocker = _VitestMocker;
VitestMocker.pendingIds = [];

async function executeInViteNode(options) {
  const runner = new VitestRunner(options);
  await runner.executeId("/@vite/env");
  const result = [];
  for (const file of options.files)
    result.push(await runner.executeFile(file));
  return result;
}
class VitestRunner extends ViteNodeRunner {
  constructor(options) {
    super(options);
    this.options = options;
  }
  prepareContext(context) {
    const request = context.__vite_ssr_import__;
    const resolveId = context.__vitest_resolve_id__;
    const mocker = new VitestMocker(this.options, this.moduleCache, request);
    const workerState = getWorkerState();
    if (workerState.filepath && normalizePath(workerState.filepath) === normalizePath(context.__filename)) {
      Object.defineProperty(context.__vite_ssr_import_meta__, "vitest", { get: () => globalThis.__vitest_index__ });
    }
    return Object.assign(context, {
      __vite_ssr_import__: async (dep) => mocker.requestWithMock(await resolveId(dep)),
      __vite_ssr_dynamic_import__: async (dep) => mocker.requestWithMock(await resolveId(dep)),
      __vitest_mocker__: mocker
    });
  }
}

export { VitestRunner as V, executeInViteNode as e };
