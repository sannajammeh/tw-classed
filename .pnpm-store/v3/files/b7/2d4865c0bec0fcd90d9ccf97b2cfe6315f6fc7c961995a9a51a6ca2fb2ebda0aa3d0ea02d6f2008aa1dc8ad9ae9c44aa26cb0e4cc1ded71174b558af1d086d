import { performance } from 'perf_hooks';
import { s as someTasksAreOnly, i as interpretTaskModes, t as takeCoverageInsideWorker, p as pLimit } from './chunk-integrations-coverage.befed097.js';
import { r as resetRunOnceCounter, i as index, v as vi, s as setCurrentTest } from './chunk-runtime-test-state.3cbc4575.js';
import { g as getWorkerState, R as RealDate, t as toArray, k as relativePath, h as isRunningInBenchmark, p as partitionSuiteChildren, l as shuffle, o as hasTests, q as hasFailed, u as createDefer, e as getFullName } from './chunk-typecheck-constants.4891f22f.js';
import { f as clearCollectorContext, h as defaultSuite, j as setHooks, k as getHooks, l as collectorContext, m as getBenchOptions, n as getFn, o as setState, G as GLOBAL_EXPECT, p as getState } from './chunk-runtime-chain.a0b441dc.js';
import { r as rpc } from './chunk-runtime-rpc.1e7530d3.js';
import { p as processError } from './chunk-runtime-error.6287172c.js';
import require$$0 from 'source-map';
import path from 'path';
import { e as environments } from './chunk-env-node.67948209.js';
import { i as isNode, a as isBrowser } from './chunk-utils-env.03f840f2.js';
import { b as safeClearTimeout, s as safeSetTimeout } from './chunk-utils-timers.06f993db.js';

var sourceMapSupport = {exports: {}};

/* eslint-disable node/no-deprecated-api */

var toString = Object.prototype.toString;

var isModern = (
  typeof Buffer !== 'undefined' &&
  typeof Buffer.alloc === 'function' &&
  typeof Buffer.allocUnsafe === 'function' &&
  typeof Buffer.from === 'function'
);

function isArrayBuffer (input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer'
}

function fromArrayBuffer (obj, byteOffset, length) {
  byteOffset >>>= 0;

  var maxLength = obj.byteLength - byteOffset;

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds")
  }

  if (length === undefined) {
    length = maxLength;
  } else {
    length >>>= 0;

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds")
    }
  }

  return isModern
    ? Buffer.from(obj.slice(byteOffset, byteOffset + length))
    : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)))
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  return isModern
    ? Buffer.from(string, encoding)
    : new Buffer(string, encoding)
}

function bufferFrom (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return isModern
    ? Buffer.from(value)
    : new Buffer(value)
}

var bufferFrom_1 = bufferFrom;

(function (module, exports) {
	var SourceMapConsumer = require$$0.SourceMapConsumer;
	var path$1 = path;

	var fs;
	try {
	  fs = require('fs');
	  if (!fs.existsSync || !fs.readFileSync) {
	    // fs doesn't have all methods we need
	    fs = null;
	  }
	} catch (err) {
	  /* nop */
	}

	var bufferFrom = bufferFrom_1;

	/**
	 * Requires a module which is protected against bundler minification.
	 *
	 * @param {NodeModule} mod
	 * @param {string} request
	 */
	function dynamicRequire(mod, request) {
	  return mod.require(request);
	}

	// Only install once if called multiple times
	var errorFormatterInstalled = false;
	var uncaughtShimInstalled = false;

	// If true, the caches are reset before a stack trace formatting operation
	var emptyCacheBetweenOperations = false;

	// Supports {browser, node, auto}
	var environment = "auto";

	// Maps a file path to a string containing the file contents
	var fileContentsCache = {};

	// Maps a file path to a source map for that file
	var sourceMapCache = {};

	// Regex for detecting source maps
	var reSourceMap = /^data:application\/json[^,]+base64,/;

	// Priority list of retrieve handlers
	var retrieveFileHandlers = [];
	var retrieveMapHandlers = [];

	function isInBrowser() {
	  if (environment === "browser")
	    return true;
	  if (environment === "node")
	    return false;
	  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
	}

	function hasGlobalProcessEventEmitter() {
	  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
	}

	function globalProcessVersion() {
	  if ((typeof process === 'object') && (process !== null)) {
	    return process.version;
	  } else {
	    return '';
	  }
	}

	function globalProcessStderr() {
	  if ((typeof process === 'object') && (process !== null)) {
	    return process.stderr;
	  }
	}

	function globalProcessExit(code) {
	  if ((typeof process === 'object') && (process !== null) && (typeof process.exit === 'function')) {
	    return process.exit(code);
	  }
	}

	function handlerExec(list) {
	  return function(arg) {
	    for (var i = 0; i < list.length; i++) {
	      var ret = list[i](arg);
	      if (ret) {
	        return ret;
	      }
	    }
	    return null;
	  };
	}

	var retrieveFile = handlerExec(retrieveFileHandlers);

	retrieveFileHandlers.push(function(path) {
	  // Trim the path to make sure there is no extra whitespace.
	  path = path.trim();
	  if (/^file:/.test(path)) {
	    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
	    path = path.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
	      return drive ?
	        '' : // file:///C:/dir/file -> C:/dir/file
	        '/'; // file:///root-dir/file -> /root-dir/file
	    });
	  }
	  if (path in fileContentsCache) {
	    return fileContentsCache[path];
	  }

	  var contents = '';
	  try {
	    if (!fs) {
	      // Use SJAX if we are in the browser
	      var xhr = new XMLHttpRequest();
	      console.trace('zdes');
	      xhr.open('GET', path, /** async */ false);
	      xhr.send(null);
	      if (xhr.readyState === 4 && xhr.status === 200) {
	        contents = xhr.responseText;
	      }
	    } else if (fs.existsSync(path)) {
	      // Otherwise, use the filesystem
	      contents = fs.readFileSync(path, 'utf8');
	    }
	  } catch (er) {
	    /* ignore any errors */
	  }

	  return fileContentsCache[path] = contents;
	});

	// Support URLs relative to a directory, but be careful about a protocol prefix
	// in case we are in the browser (i.e. directories may start with "http://" or "file:///")
	function supportRelativeURL(file, url) {
	  if (!file) return url;
	  var dir = path$1.dirname(file);
	  var match = /^\w+:\/\/[^\/]*/.exec(dir);
	  var protocol = match ? match[0] : '';
	  var startPath = dir.slice(protocol.length);
	  if (protocol && /^\/\w\:/.test(startPath)) {
	    // handle file:///C:/ paths
	    protocol += '/';
	    return protocol + path$1.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
	  }
	  return protocol + path$1.resolve(dir.slice(protocol.length), url);
	}

	function retrieveSourceMapURL(source) {
	  var fileData;

	  if (isInBrowser()) {
	     try {
	       var xhr = new XMLHttpRequest();
	       xhr.open('GET', source, false);
	       xhr.send(null);
	       fileData = xhr.readyState === 4 ? xhr.responseText : null;

	       // Support providing a sourceMappingURL via the SourceMap header
	       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
	                             xhr.getResponseHeader("X-SourceMap");
	       if (sourceMapHeader) {
	         return sourceMapHeader;
	       }
	     } catch (e) {
	     }
	  }

	  // Get the URL of the source map
	  fileData = retrieveFile(source);
	  var re = /(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg;
	  // Keep executing the search to find the *last* sourceMappingURL to avoid
	  // picking up sourceMappingURLs from comments, strings, etc.
	  var lastMatch, match;
	  while (match = re.exec(fileData)) lastMatch = match;
	  if (!lastMatch) return null;
	  return lastMatch[1];
	}
	// Can be overridden by the retrieveSourceMap option to install. Takes a
	// generated source filename; returns a {map, optional url} object, or null if
	// there is no source map.  The map field may be either a string or the parsed
	// JSON object (ie, it must be a valid argument to the SourceMapConsumer
	// constructor).
	var retrieveSourceMap = handlerExec(retrieveMapHandlers);
	retrieveMapHandlers.push(function(source) {
	  var sourceMappingURL = retrieveSourceMapURL(source);
	  if (!sourceMappingURL) return null;

	  // Read the contents of the source map
	  var sourceMapData;
	  if (reSourceMap.test(sourceMappingURL)) {
	    // Support source map URL as a data url
	    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
	    sourceMapData = bufferFrom(rawData, "base64").toString();
	    sourceMappingURL = source;
	  } else {
	    // Support source map URLs relative to the source URL
	    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
	    sourceMapData = retrieveFile(sourceMappingURL);
	  }

	  if (!sourceMapData) {
	    return null;
	  }

	  return {
	    url: sourceMappingURL,
	    map: sourceMapData
	  };
	});

	function mapSourcePosition(position) {
	  var sourceMap = sourceMapCache[position.source];
	  if (!sourceMap) {
	    // Call the (overrideable) retrieveSourceMap function to get the source map.
	    var urlAndMap = retrieveSourceMap(position.source);
	    if (urlAndMap) {
	      sourceMap = sourceMapCache[position.source] = {
	        url: urlAndMap.url,
	        map: new SourceMapConsumer(urlAndMap.map)
	      };

	      // Load all sources stored inline with the source map into the file cache
	      // to pretend like they are already loaded. They may not exist on disk.
	      if (sourceMap.map.sourcesContent) {
	        sourceMap.map.sources.forEach(function(source, i) {
	          var contents = sourceMap.map.sourcesContent[i];
	          if (contents) {
	            var url = supportRelativeURL(sourceMap.url, source);
	            fileContentsCache[url] = contents;
	          }
	        });
	      }
	    } else {
	      sourceMap = sourceMapCache[position.source] = {
	        url: null,
	        map: null
	      };
	    }
	  }

	  // Resolve the source URL relative to the URL of the source map
	  if (sourceMap && sourceMap.map && typeof sourceMap.map.originalPositionFor === 'function') {
	    var originalPosition = sourceMap.map.originalPositionFor(position);

	    // Only return the original position if a matching line was found. If no
	    // matching line is found then we return position instead, which will cause
	    // the stack trace to print the path and line for the compiled file. It is
	    // better to give a precise location in the compiled file than a vague
	    // location in the original file.
	    if (originalPosition.source !== null) {
	      originalPosition.source = supportRelativeURL(
	        sourceMap.url, originalPosition.source);
	      return originalPosition;
	    }
	  }

	  return position;
	}

	// Parses code generated by FormatEvalOrigin(), a function inside V8:
	// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
	function mapEvalOrigin(origin) {
	  // Most eval() calls are in this format
	  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
	  if (match) {
	    var position = mapSourcePosition({
	      source: match[2],
	      line: +match[3],
	      column: match[4] - 1
	    });
	    return 'eval at ' + match[1] + ' (' + position.source + ':' +
	      position.line + ':' + (position.column + 1) + ')';
	  }

	  // Parse nested eval() calls using recursion
	  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
	  if (match) {
	    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
	  }

	  // Make sure we still return useful information if we didn't find anything
	  return origin;
	}

	// This is copied almost verbatim from the V8 source code at
	// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
	// implementation of wrapCallSite() used to just forward to the actual source
	// code of CallSite.prototype.toString but unfortunately a new release of V8
	// did something to the prototype chain and broke the shim. The only fix I
	// could find was copy/paste.
	function CallSiteToString() {
	  var fileName;
	  var fileLocation = "";
	  if (this.isNative()) {
	    fileLocation = "native";
	  } else {
	    fileName = this.getScriptNameOrSourceURL();
	    if (!fileName && this.isEval()) {
	      fileLocation = this.getEvalOrigin();
	      fileLocation += ", ";  // Expecting source position to follow.
	    }

	    if (fileName) {
	      fileLocation += fileName;
	    } else {
	      // Source code does not originate from a file and is not native, but we
	      // can still get the source position inside the source string, e.g. in
	      // an eval string.
	      fileLocation += "<anonymous>";
	    }
	    var lineNumber = this.getLineNumber();
	    if (lineNumber != null) {
	      fileLocation += ":" + lineNumber;
	      var columnNumber = this.getColumnNumber();
	      if (columnNumber) {
	        fileLocation += ":" + columnNumber;
	      }
	    }
	  }

	  var line = "";
	  var functionName = this.getFunctionName();
	  var addSuffix = true;
	  var isConstructor = this.isConstructor();
	  var isMethodCall = !(this.isToplevel() || isConstructor);
	  if (isMethodCall) {
	    var typeName = this.getTypeName();
	    // Fixes shim to be backward compatable with Node v0 to v4
	    if (typeName === "[object Object]") {
	      typeName = "null";
	    }
	    var methodName = this.getMethodName();
	    if (functionName) {
	      if (typeName && functionName.indexOf(typeName) != 0) {
	        line += typeName + ".";
	      }
	      line += functionName;
	      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
	        line += " [as " + methodName + "]";
	      }
	    } else {
	      line += typeName + "." + (methodName || "<anonymous>");
	    }
	  } else if (isConstructor) {
	    line += "new " + (functionName || "<anonymous>");
	  } else if (functionName) {
	    line += functionName;
	  } else {
	    line += fileLocation;
	    addSuffix = false;
	  }
	  if (addSuffix) {
	    line += " (" + fileLocation + ")";
	  }
	  return line;
	}

	function cloneCallSite(frame) {
	  var object = {};
	  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
	    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
	  });
	  object.toString = CallSiteToString;
	  return object;
	}

	function wrapCallSite(frame, state) {
	  // provides interface backward compatibility
	  if (state === undefined) {
	    state = { nextPosition: null, curPosition: null };
	  }
	  if(frame.isNative()) {
	    state.curPosition = null;
	    return frame;
	  }

	  // Most call sites will return the source file from getFileName(), but code
	  // passed to eval() ending in "//# sourceURL=..." will return the source file
	  // from getScriptNameOrSourceURL() instead
	  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
	  if (source) {
	    var line = frame.getLineNumber();
	    var column = frame.getColumnNumber() - 1;

	    // Fix position in Node where some (internal) code is prepended.
	    // See https://github.com/evanw/node-source-map-support/issues/36
	    // Header removed in node at ^10.16 || >=11.11.0
	    // v11 is not an LTS candidate, we can just test the one version with it.
	    // Test node versions for: 10.16-19, 10.20+, 12-19, 20-99, 100+, or 11.11
	    var noHeader = /^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;
	    var headerLength = noHeader.test(globalProcessVersion()) ? 0 : 62;
	    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
	      column -= headerLength;
	    }

	    var position = mapSourcePosition({
	      source: source,
	      line: line,
	      column: column
	    });
	    state.curPosition = position;
	    frame = cloneCallSite(frame);
	    var originalFunctionName = frame.getFunctionName;
	    frame.getFunctionName = function() {
	      if (state.nextPosition == null) {
	        return originalFunctionName();
	      }
	      return state.nextPosition.name || originalFunctionName();
	    };
	    frame.getFileName = function() { return position.source; };
	    frame.getLineNumber = function() { return position.line; };
	    frame.getColumnNumber = function() { return position.column + 1; };
	    frame.getScriptNameOrSourceURL = function() { return position.source; };
	    return frame;
	  }

	  // Code called using eval() needs special handling
	  var origin = frame.isEval() && frame.getEvalOrigin();
	  if (origin) {
	    origin = mapEvalOrigin(origin);
	    frame = cloneCallSite(frame);
	    frame.getEvalOrigin = function() { return origin; };
	    return frame;
	  }

	  // If we get here then we were unable to change the source position
	  return frame;
	}

	// This function is part of the V8 stack trace API, for more info see:
	// https://v8.dev/docs/stack-trace-api
	function prepareStackTrace(error, stack) {
	  if (emptyCacheBetweenOperations) {
	    fileContentsCache = {};
	    sourceMapCache = {};
	  }

	  var name = error.name || 'Error';
	  var message = error.message || '';
	  var errorString = name + ": " + message;

	  var state = { nextPosition: null, curPosition: null };
	  var processedStack = [];
	  for (var i = stack.length - 1; i >= 0; i--) {
	    processedStack.push('\n    at ' + wrapCallSite(stack[i], state));
	    state.nextPosition = state.curPosition;
	  }
	  state.curPosition = state.nextPosition = null;
	  return errorString + processedStack.reverse().join('');
	}

	// Generate position and snippet of original source with pointer
	function getErrorSource(error) {
	  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
	  if (match) {
	    var source = match[1];
	    var line = +match[2];
	    var column = +match[3];

	    // Support the inline sourceContents inside the source map
	    var contents = fileContentsCache[source];

	    // Support files on disk
	    if (!contents && fs && fs.existsSync(source)) {
	      try {
	        contents = fs.readFileSync(source, 'utf8');
	      } catch (er) {
	        contents = '';
	      }
	    }

	    // Format the line from the original source code like node does
	    if (contents) {
	      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
	      if (code) {
	        return source + ':' + line + '\n' + code + '\n' +
	          new Array(column).join(' ') + '^';
	      }
	    }
	  }
	  return null;
	}

	function printErrorAndExit (error) {
	  var source = getErrorSource(error);

	  // Ensure error is printed synchronously and not truncated
	  var stderr = globalProcessStderr();
	  if (stderr && stderr._handle && stderr._handle.setBlocking) {
	    stderr._handle.setBlocking(true);
	  }

	  if (source) {
	    console.error();
	    console.error(source);
	  }

	  console.error(error.stack);
	  globalProcessExit(1);
	}

	function shimEmitUncaughtException () {
	  var origEmit = process.emit;

	  process.emit = function (type) {
	    if (type === 'uncaughtException') {
	      var hasStack = (arguments[1] && arguments[1].stack);
	      var hasListeners = (this.listeners(type).length > 0);

	      if (hasStack && !hasListeners) {
	        return printErrorAndExit(arguments[1]);
	      }
	    }

	    return origEmit.apply(this, arguments);
	  };
	}

	var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
	var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);

	exports.wrapCallSite = wrapCallSite;
	exports.getErrorSource = getErrorSource;
	exports.mapSourcePosition = mapSourcePosition;
	exports.retrieveSourceMap = retrieveSourceMap;

	exports.install = function(options) {
	  options = options || {};

	  if (options.environment) {
	    environment = options.environment;
	    if (["node", "browser", "auto"].indexOf(environment) === -1) {
	      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
	    }
	  }

	  // Allow sources to be found by methods other than reading the files
	  // directly from disk.
	  if (options.retrieveFile) {
	    if (options.overrideRetrieveFile) {
	      retrieveFileHandlers.length = 0;
	    }

	    retrieveFileHandlers.unshift(options.retrieveFile);
	  }

	  // Allow source maps to be found by methods other than reading the files
	  // directly from disk.
	  if (options.retrieveSourceMap) {
	    if (options.overrideRetrieveSourceMap) {
	      retrieveMapHandlers.length = 0;
	    }

	    retrieveMapHandlers.unshift(options.retrieveSourceMap);
	  }

	  // Support runtime transpilers that include inline source maps
	  if (options.hookRequire && !isInBrowser()) {
	    // Use dynamicRequire to avoid including in browser bundles
	    var Module = dynamicRequire(module, 'module');
	    var $compile = Module.prototype._compile;

	    if (!$compile.__sourceMapSupport) {
	      Module.prototype._compile = function(content, filename) {
	        fileContentsCache[filename] = content;
	        sourceMapCache[filename] = undefined;
	        return $compile.call(this, content, filename);
	      };

	      Module.prototype._compile.__sourceMapSupport = true;
	    }
	  }

	  // Configure options
	  if (!emptyCacheBetweenOperations) {
	    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
	      options.emptyCacheBetweenOperations : false;
	  }

	  // Install the error reformatter
	  if (!errorFormatterInstalled) {
	    errorFormatterInstalled = true;
	    Error.prepareStackTrace = prepareStackTrace;
	  }

	  if (!uncaughtShimInstalled) {
	    var installHandler = 'handleUncaughtExceptions' in options ?
	      options.handleUncaughtExceptions : true;

	    // Do not override 'uncaughtException' with our own handler in Node.js
	    // Worker threads. Workers pass the error to the main thread as an event,
	    // rather than printing something to stderr and exiting.
	    try {
	      // We need to use `dynamicRequire` because `require` on it's own will be optimized by WebPack/Browserify.
	      var worker_threads = dynamicRequire(module, 'worker_threads');
	      if (worker_threads.isMainThread === false) {
	        installHandler = false;
	      }
	    } catch(e) {}

	    // Provide the option to not install the uncaught exception handler. This is
	    // to support other uncaught exception handlers (in test frameworks, for
	    // example). If this handler is not installed and there are no other uncaught
	    // exception handlers, uncaught exceptions will be caught by node's built-in
	    // exception handler and the process will still be terminated. However, the
	    // generated JavaScript code will be shown above the stack trace instead of
	    // the original source code.
	    if (installHandler && hasGlobalProcessEventEmitter()) {
	      uncaughtShimInstalled = true;
	      shimEmitUncaughtException();
	    }
	  }
	};

	exports.resetRetrieveHandlers = function() {
	  retrieveFileHandlers.length = 0;
	  retrieveMapHandlers.length = 0;

	  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
	  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);

	  retrieveSourceMap = handlerExec(retrieveMapHandlers);
	  retrieveFile = handlerExec(retrieveFileHandlers);
	};
} (sourceMapSupport, sourceMapSupport.exports));

function installSourcemapsSupport(options) {
  sourceMapSupport.exports.install({
    environment: "node",
    handleUncaughtExceptions: false,
    retrieveSourceMap(source) {
      const map = options.getSourceMap(source);
      if (map) {
        return {
          url: source,
          map
        };
      }
      return null;
    }
  });
}

let globalSetup = false;
async function setupGlobalEnv(config) {
  resetRunOnceCounter();
  Object.defineProperty(globalThis, "__vitest_index__", {
    value: index,
    enumerable: false
  });
  setupDefines(config.defines);
  if (globalSetup)
    return;
  globalSetup = true;
  if (isNode) {
    const state = getWorkerState();
    installSourcemapsSupport({
      getSourceMap: (source) => state.moduleCache.getSourceMap(source)
    });
    await setupConsoleLogSpy();
  }
  if (config.globals)
    (await import('./chunk-integrations-globals.06c8d418.js')).registerApiGlobally();
}
function setupDefines(defines) {
  for (const key in defines)
    globalThis[key] = defines[key];
}
async function setupConsoleLogSpy() {
  const stdoutBuffer = /* @__PURE__ */ new Map();
  const stderrBuffer = /* @__PURE__ */ new Map();
  const timers = /* @__PURE__ */ new Map();
  const unknownTestId = "__vitest__unknown_test__";
  const { Writable } = await import('stream');
  const { Console } = await import('console');
  function schedule(taskId) {
    const timer = timers.get(taskId);
    const { stdoutTime, stderrTime } = timer;
    safeClearTimeout(timer.timer);
    timer.timer = safeSetTimeout(() => {
      if (stderrTime < stdoutTime) {
        sendStderr(taskId);
        sendStdout(taskId);
      } else {
        sendStdout(taskId);
        sendStderr(taskId);
      }
    });
  }
  function sendStdout(taskId) {
    const buffer = stdoutBuffer.get(taskId);
    if (!buffer)
      return;
    const content = buffer.map((i) => String(i)).join("");
    if (!content.trim())
      return;
    const timer = timers.get(taskId);
    rpc().onUserConsoleLog({
      type: "stdout",
      content,
      taskId,
      time: timer.stdoutTime || RealDate.now(),
      size: buffer.length
    });
    stdoutBuffer.set(taskId, []);
    timer.stdoutTime = 0;
  }
  function sendStderr(taskId) {
    const buffer = stderrBuffer.get(taskId);
    if (!buffer)
      return;
    const content = buffer.map((i) => String(i)).join("");
    if (!content.trim())
      return;
    const timer = timers.get(taskId);
    rpc().onUserConsoleLog({
      type: "stderr",
      content,
      taskId,
      time: timer.stderrTime || RealDate.now(),
      size: buffer.length
    });
    stderrBuffer.set(taskId, []);
    timer.stderrTime = 0;
  }
  const stdout = new Writable({
    write(data, encoding, callback) {
      var _a, _b;
      const id = ((_b = (_a = getWorkerState()) == null ? void 0 : _a.current) == null ? void 0 : _b.id) ?? unknownTestId;
      let timer = timers.get(id);
      if (timer) {
        timer.stdoutTime = timer.stdoutTime || RealDate.now();
      } else {
        timer = { stdoutTime: RealDate.now(), stderrTime: RealDate.now(), timer: 0 };
        timers.set(id, timer);
      }
      let buffer = stdoutBuffer.get(id);
      if (!buffer) {
        buffer = [];
        stdoutBuffer.set(id, buffer);
      }
      buffer.push(data);
      schedule(id);
      callback();
    }
  });
  const stderr = new Writable({
    write(data, encoding, callback) {
      var _a, _b;
      const id = ((_b = (_a = getWorkerState()) == null ? void 0 : _a.current) == null ? void 0 : _b.id) ?? unknownTestId;
      let timer = timers.get(id);
      if (timer) {
        timer.stderrTime = timer.stderrTime || RealDate.now();
      } else {
        timer = { stderrTime: RealDate.now(), stdoutTime: RealDate.now(), timer: 0 };
        timers.set(id, timer);
      }
      let buffer = stderrBuffer.get(id);
      if (!buffer) {
        buffer = [];
        stderrBuffer.set(id, buffer);
      }
      buffer.push(data);
      schedule(id);
      callback();
    }
  });
  globalThis.console = new Console({
    stdout,
    stderr,
    colorMode: true,
    groupIndentation: 2
  });
}
async function loadEnvironment(name) {
  const pkg = await import(`vitest-environment-${name}`);
  if (!pkg || !pkg.default || typeof pkg.default !== "object" || typeof pkg.default.setup !== "function") {
    throw new Error(
      `Environment "${name}" is not a valid environment. Package "vitest-environment-${name}" should have default export with "setup" method.`
    );
  }
  return pkg.default;
}
async function withEnv(name, options, fn) {
  const config = environments[name] || await loadEnvironment(name);
  const env = await config.setup(globalThis, options);
  try {
    await fn();
  } finally {
    await env.teardown(globalThis);
  }
}
async function runSetupFiles(config) {
  const files = toArray(config.setupFiles);
  await Promise.all(
    files.map(async (fsPath) => {
      getWorkerState().moduleCache.delete(fsPath);
      await import(fsPath);
    })
  );
}

const now$1 = Date.now;
function hash(str) {
  let hash2 = 0;
  if (str.length === 0)
    return `${hash2}`;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash2 = (hash2 << 5) - hash2 + char;
    hash2 = hash2 & hash2;
  }
  return `${hash2}`;
}
async function collectTests(paths, config) {
  const files = [];
  const browserHashMap = getWorkerState().browserHashMap;
  async function importFromBrowser(filepath) {
    const match = filepath.match(/^(\w:\/)/);
    const hash2 = browserHashMap.get(filepath);
    if (match)
      return await import(`/@fs/${filepath.slice(match[1].length)}?v=${hash2}`);
    else
      return await import(`${filepath}?v=${hash2}`);
  }
  for (const filepath of paths) {
    const path = relativePath(config.root, filepath);
    const file = {
      id: hash(path),
      name: path,
      type: "suite",
      mode: "run",
      filepath,
      tasks: []
    };
    clearCollectorContext();
    try {
      const setupStart = now$1();
      await runSetupFiles(config);
      const collectStart = now$1();
      file.setupDuration = collectStart - setupStart;
      if (config.browser && isBrowser)
        await importFromBrowser(filepath);
      else
        await import(filepath);
      const defaultTasks = await defaultSuite.collect(file);
      setHooks(file, getHooks(defaultTasks));
      for (const c of [...defaultTasks.tasks, ...collectorContext.tasks]) {
        if (c.type === "test") {
          file.tasks.push(c);
        } else if (c.type === "benchmark") {
          file.tasks.push(c);
        } else if (c.type === "suite") {
          file.tasks.push(c);
        } else if (c.type === "collector") {
          const suite = await c.collect(file);
          if (suite.name || suite.tasks.length)
            file.tasks.push(suite);
        }
      }
      file.collectDuration = now$1() - collectStart;
    } catch (e) {
      file.result = {
        state: "fail",
        error: processError(e)
      };
      if (config.browser)
        console.error(e);
    }
    calculateHash(file);
    const hasOnlyTasks = someTasksAreOnly(file);
    interpretTaskModes(file, config.testNamePattern, hasOnlyTasks, false, config.allowOnly);
    files.push(file);
  }
  return files;
}
function calculateHash(parent) {
  parent.tasks.forEach((t, idx) => {
    t.id = `${parent.id}_${idx}`;
    if (t.type === "suite")
      calculateHash(t);
  });
}

async function importTinybench() {
  if (!globalThis.EventTarget)
    await import('./vendor-index.534e612c.js').then(function (n) { return n.i; });
  return await import('tinybench');
}
const now = Date.now;
function updateSuiteHookState(suite, name, state) {
  var _a;
  if (!suite.result)
    suite.result = { state: "run" };
  if (!((_a = suite.result) == null ? void 0 : _a.hooks))
    suite.result.hooks = {};
  const suiteHooks = suite.result.hooks;
  if (suiteHooks) {
    suiteHooks[name] = state;
    updateTask(suite);
  }
}
function getSuiteHooks(suite, name, sequence) {
  const hooks = getHooks(suite)[name];
  if (sequence === "stack" && (name === "afterAll" || name === "afterEach"))
    return hooks.slice().reverse();
  return hooks;
}
async function callSuiteHook(suite, currentTask, name, args) {
  const callbacks = [];
  if (name === "beforeEach" && suite.suite) {
    callbacks.push(
      ...await callSuiteHook(suite.suite, currentTask, name, args)
    );
  }
  updateSuiteHookState(currentTask, name, "run");
  const state = getWorkerState();
  const sequence = state.config.sequence.hooks;
  const hooks = getSuiteHooks(suite, name, sequence);
  if (sequence === "parallel") {
    callbacks.push(...await Promise.all(hooks.map((fn) => fn(...args))));
  } else {
    for (const hook of hooks)
      callbacks.push(await hook(...args));
  }
  updateSuiteHookState(currentTask, name, "pass");
  if (name === "afterEach" && suite.suite) {
    callbacks.push(
      ...await callSuiteHook(suite.suite, currentTask, name, args)
    );
  }
  return callbacks;
}
const packs = /* @__PURE__ */ new Map();
let updateTimer;
let previousUpdate;
function updateTask(task) {
  packs.set(task.id, task.result);
  safeClearTimeout(updateTimer);
  updateTimer = safeSetTimeout(() => {
    previousUpdate = sendTasksUpdate();
  }, 10);
}
async function sendTasksUpdate() {
  safeClearTimeout(updateTimer);
  await previousUpdate;
  if (packs.size) {
    const p = rpc().onTaskUpdate(Array.from(packs));
    packs.clear();
    return p;
  }
}
const callCleanupHooks = async (cleanups) => {
  await Promise.all(cleanups.map(async (fn) => {
    if (typeof fn !== "function")
      return;
    await fn();
  }));
};
async function runTest(test) {
  var _a, _b, _c;
  if (test.mode !== "run") {
    const { getSnapshotClient } = await import('./chunk-runtime-chain.a0b441dc.js').then(function (n) { return n.r; });
    getSnapshotClient().skipTestSnapshots(test);
    return;
  }
  if (((_a = test.result) == null ? void 0 : _a.state) === "fail") {
    updateTask(test);
    return;
  }
  const start = now();
  test.result = {
    state: "run",
    startTime: start
  };
  updateTask(test);
  clearModuleMocks();
  setCurrentTest(test);
  if (isNode) {
    const { getSnapshotClient } = await import('./chunk-runtime-chain.a0b441dc.js').then(function (n) { return n.r; });
    await getSnapshotClient().setTest(test);
  }
  const workerState = getWorkerState();
  workerState.current = test;
  const retry = test.retry || 1;
  for (let retryCount = 0; retryCount < retry; retryCount++) {
    let beforeEachCleanups = [];
    try {
      setState({
        assertionCalls: 0,
        isExpectingAssertions: false,
        isExpectingAssertionsError: null,
        expectedAssertionsNumber: null,
        expectedAssertionsNumberErrorGen: null,
        testPath: (_b = test.suite.file) == null ? void 0 : _b.filepath,
        currentTestName: getFullName(test)
      }, globalThis[GLOBAL_EXPECT]);
      beforeEachCleanups = await callSuiteHook(test.suite, test, "beforeEach", [test.context, test.suite]);
      test.result.retryCount = retryCount;
      await getFn(test)();
      const {
        assertionCalls,
        expectedAssertionsNumber,
        expectedAssertionsNumberErrorGen,
        isExpectingAssertions,
        isExpectingAssertionsError
      } = test.context._local ? test.context.expect.getState() : getState(globalThis[GLOBAL_EXPECT]);
      if (expectedAssertionsNumber !== null && assertionCalls !== expectedAssertionsNumber)
        throw expectedAssertionsNumberErrorGen();
      if (isExpectingAssertions === true && assertionCalls === 0)
        throw isExpectingAssertionsError;
      test.result.state = "pass";
    } catch (e) {
      test.result.state = "fail";
      test.result.error = processError(e);
    }
    try {
      await callSuiteHook(test.suite, test, "afterEach", [test.context, test.suite]);
      await callCleanupHooks(beforeEachCleanups);
    } catch (e) {
      test.result.state = "fail";
      test.result.error = processError(e);
    }
    if (test.result.state === "pass")
      break;
    updateTask(test);
  }
  if (test.result.state === "fail")
    await Promise.all(((_c = test.onFailed) == null ? void 0 : _c.map((fn) => fn(test.result))) || []);
  if (test.fails) {
    if (test.result.state === "pass") {
      test.result.state = "fail";
      test.result.error = processError(new Error("Expect test to fail"));
    } else {
      test.result.state = "pass";
      test.result.error = void 0;
    }
  }
  if (isBrowser && test.result.error)
    console.error(test.result.error.message, test.result.error.stackStr);
  setCurrentTest(void 0);
  if (isNode) {
    const { getSnapshotClient } = await import('./chunk-runtime-chain.a0b441dc.js').then(function (n) { return n.r; });
    getSnapshotClient().clearTest();
  }
  test.result.duration = now() - start;
  if (workerState.config.logHeapUsage && isNode)
    test.result.heap = process.memoryUsage().heapUsed;
  workerState.current = void 0;
  updateTask(test);
}
function markTasksAsSkipped(suite) {
  suite.tasks.forEach((t) => {
    t.mode = "skip";
    t.result = { ...t.result, state: "skip" };
    updateTask(t);
    if (t.type === "suite")
      markTasksAsSkipped(t);
  });
}
async function runSuite(suite) {
  var _a;
  if (((_a = suite.result) == null ? void 0 : _a.state) === "fail") {
    markTasksAsSkipped(suite);
    updateTask(suite);
    return;
  }
  const start = now();
  suite.result = {
    state: "run",
    startTime: start
  };
  updateTask(suite);
  const workerState = getWorkerState();
  if (suite.mode === "skip") {
    suite.result.state = "skip";
  } else if (suite.mode === "todo") {
    suite.result.state = "todo";
  } else {
    try {
      const beforeAllCleanups = await callSuiteHook(suite, suite, "beforeAll", [suite]);
      if (isRunningInBenchmark()) {
        await runBenchmarkSuite(suite);
      } else {
        for (let tasksGroup of partitionSuiteChildren(suite)) {
          if (tasksGroup[0].concurrent === true) {
            const mutex = pLimit(workerState.config.maxConcurrency);
            await Promise.all(tasksGroup.map((c) => mutex(() => runSuiteChild(c))));
          } else {
            const { sequence } = workerState.config;
            if (sequence.shuffle || suite.shuffle) {
              const suites = tasksGroup.filter((group) => group.type === "suite");
              const tests = tasksGroup.filter((group) => group.type === "test");
              const groups = shuffle([suites, tests], sequence.seed);
              tasksGroup = groups.flatMap((group) => shuffle(group, sequence.seed));
            }
            for (const c of tasksGroup)
              await runSuiteChild(c);
          }
        }
      }
      await callSuiteHook(suite, suite, "afterAll", [suite]);
      await callCleanupHooks(beforeAllCleanups);
    } catch (e) {
      suite.result.state = "fail";
      suite.result.error = processError(e);
    }
  }
  suite.result.duration = now() - start;
  if (workerState.config.logHeapUsage && isNode)
    suite.result.heap = process.memoryUsage().heapUsed;
  if (suite.mode === "run") {
    if (!hasTests(suite)) {
      suite.result.state = "fail";
      if (!suite.result.error)
        suite.result.error = new Error(`No test found in suite ${suite.name}`);
    } else if (hasFailed(suite)) {
      suite.result.state = "fail";
    } else {
      suite.result.state = "pass";
    }
  }
  updateTask(suite);
}
function createBenchmarkResult(name) {
  return {
    name,
    rank: 0,
    rme: 0,
    samples: []
  };
}
async function runBenchmarkSuite(suite) {
  const { Task, Bench } = await importTinybench();
  const start = performance.now();
  const benchmarkGroup = [];
  const benchmarkSuiteGroup = [];
  for (const task of suite.tasks) {
    if (task.mode !== "run")
      continue;
    if (task.type === "benchmark")
      benchmarkGroup.push(task);
    else if (task.type === "suite")
      benchmarkSuiteGroup.push(task);
  }
  if (benchmarkSuiteGroup.length)
    await Promise.all(benchmarkSuiteGroup.map((subSuite) => runBenchmarkSuite(subSuite)));
  if (benchmarkGroup.length) {
    const defer = createDefer();
    const benchmarkMap = {};
    suite.result = {
      state: "run",
      startTime: start,
      benchmark: createBenchmarkResult(suite.name)
    };
    updateTask(suite);
    benchmarkGroup.forEach((benchmark, idx) => {
      const options = getBenchOptions(benchmark);
      const benchmarkInstance = new Bench(options);
      const benchmarkFn = getFn(benchmark);
      benchmark.result = {
        state: "run",
        startTime: start,
        benchmark: createBenchmarkResult(benchmark.name)
      };
      const id = idx.toString();
      benchmarkMap[id] = benchmark;
      const task = new Task(benchmarkInstance, id, benchmarkFn);
      benchmark.task = task;
      updateTask(benchmark);
    });
    benchmarkGroup.forEach((benchmark) => {
      benchmark.task.addEventListener("complete", (e) => {
        const task = e.task;
        const _benchmark = benchmarkMap[task.name || ""];
        if (_benchmark) {
          const taskRes = task.result;
          const result = _benchmark.result.benchmark;
          Object.assign(result, taskRes);
          updateTask(_benchmark);
        }
      });
      benchmark.task.addEventListener("error", (e) => {
        const task = e.task;
        const _benchmark = benchmarkMap[task.name || ""];
        defer.reject(_benchmark ? task.result.error : e);
      });
    });
    Promise.all(benchmarkGroup.map(async (benchmark) => {
      await benchmark.task.warmup();
      return await new Promise((resolve) => safeSetTimeout(async () => {
        resolve(await benchmark.task.run());
      }));
    })).then((tasks) => {
      suite.result.duration = performance.now() - start;
      suite.result.state = "pass";
      tasks.sort((a, b) => a.result.mean - b.result.mean).forEach((cycle, idx) => {
        const benchmark = benchmarkMap[cycle.name || ""];
        benchmark.result.state = "pass";
        if (benchmark) {
          const result = benchmark.result.benchmark;
          result.rank = Number(idx) + 1;
          updateTask(benchmark);
        }
      });
      updateTask(suite);
      defer.resolve(null);
    });
    await defer;
  }
}
async function runSuiteChild(c) {
  if (c.type === "test")
    return runTest(c);
  else if (c.type === "suite")
    return runSuite(c);
}
async function runSuites(suites) {
  for (const suite of suites)
    await runSuite(suite);
}
async function runFiles(files, config) {
  var _a;
  for (const file of files) {
    if (!file.tasks.length && !config.passWithNoTests) {
      if (!((_a = file.result) == null ? void 0 : _a.error)) {
        file.result = {
          state: "fail",
          error: new Error(`No test suite found in file ${file.filepath}`)
        };
      }
    }
    await runSuite(file);
  }
}
async function startTestsBrowser(paths, config) {
  if (isNode) {
    rpc().onPathsCollected(paths);
  } else {
    const files = await collectTests(paths, config);
    await rpc().onCollected(files);
    await runSuites(files);
    await sendTasksUpdate();
  }
}
async function startTestsNode(paths, config) {
  const files = await collectTests(paths, config);
  rpc().onCollected(files);
  const { getSnapshotClient } = await import('./chunk-runtime-chain.a0b441dc.js').then(function (n) { return n.r; });
  getSnapshotClient().clear();
  await runFiles(files, config);
  const coverage = await takeCoverageInsideWorker(config.coverage);
  rpc().onAfterSuiteRun({ coverage });
  await getSnapshotClient().saveCurrent();
  await sendTasksUpdate();
}
async function startTests(paths, config) {
  if (config.browser)
    return startTestsBrowser(paths, config);
  else
    return startTestsNode(paths, config);
}
function clearModuleMocks() {
  const { clearMocks, mockReset, restoreMocks } = getWorkerState().config;
  if (restoreMocks)
    vi.restoreAllMocks();
  else if (mockReset)
    vi.resetAllMocks();
  else if (clearMocks)
    vi.clearAllMocks();
}

export { setupGlobalEnv as a, startTests as s, withEnv as w };
