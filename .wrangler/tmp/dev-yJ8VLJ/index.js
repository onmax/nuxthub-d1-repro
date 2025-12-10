var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn2 = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn2, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e4) => e4.name !== markName) : this._entries.filter((e4) => e4.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e4) => e4.name !== measureName) : this._entries.filter((e4) => e4.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e4) => e4.entryType !== "resource" || e4.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e4) => e4.name === name && (!type || e4.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e4) => e4.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn2) {
        return fn2;
      }
      runInAsyncScope(fn2, thisArg, ...args) {
        return fn2.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/.pnpm/@cloudflare+unenv-preset@2.7.13_unenv@2.0.0-rc.24_workerd@1.20251202.0/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/.pnpm/@cloudflare+unenv-preset@2.7.13_unenv@2.0.0-rc.24_workerd@1.20251202.0/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/.pnpm/@cloudflare+unenv-preset@2.7.13_unenv@2.0.0-rc.24_workerd@1.20251202.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/.pnpm/@cloudflare+unenv-preset@2.7.13_unenv@2.0.0-rc.24_workerd@1.20251202.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/.pnpm/wrangler@4.53.0_@cloudflare+workers-types@4.20251210.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/.pnpm/wrangler@4.53.0_@cloudflare+workers-types@4.20251210.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x4, y4, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/.pnpm/@cloudflare+unenv-preset@2.7.13_unenv@2.0.0-rc.24_workerd@1.20251202.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, isWorkerdProcessV2, unenvProcess, exit, features, platform, env, hrtime3, nextTick, _channel, _disconnect, _events, _eventsCount, _handleQueue, _maxListeners, _pendingMessage, _send, assert2, disconnect, mainModule, _debugEnd, _debugProcess, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _linkedBinding, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, dlopen, domain, emit, emitWarning, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, initgroups, kill, listenerCount, listeners, loadEnvFile, memoryUsage, moduleLoadList, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "node_modules/.pnpm/@cloudflare+unenv-preset@2.7.13_unenv@2.0.0-rc.24_workerd@1.20251202.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    isWorkerdProcessV2 = globalThis.Cloudflare.compatibilityFlags.enable_nodejs_process_v2;
    unenvProcess = new Process({
      env: globalProcess.env,
      // `hrtime` is only available from workerd process v2
      hrtime: isWorkerdProcessV2 ? workerdProcess.hrtime : hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      env: (
        // Always implemented by workerd
        env
      ),
      hrtime: (
        // Only implemented in workerd v2
        hrtime3
      ),
      nextTick: (
        // Always implemented by workerd
        nextTick
      )
    } = unenvProcess);
    ({
      _channel,
      _disconnect,
      _events,
      _eventsCount,
      _handleQueue,
      _maxListeners,
      _pendingMessage,
      _send,
      assert: assert2,
      disconnect,
      mainModule
    } = unenvProcess);
    ({
      _debugEnd: (
        // @ts-expect-error `_debugEnd` is missing typings
        _debugEnd
      ),
      _debugProcess: (
        // @ts-expect-error `_debugProcess` is missing typings
        _debugProcess
      ),
      _exiting: (
        // @ts-expect-error `_exiting` is missing typings
        _exiting
      ),
      _fatalException: (
        // @ts-expect-error `_fatalException` is missing typings
        _fatalException
      ),
      _getActiveHandles: (
        // @ts-expect-error `_getActiveHandles` is missing typings
        _getActiveHandles
      ),
      _getActiveRequests: (
        // @ts-expect-error `_getActiveRequests` is missing typings
        _getActiveRequests
      ),
      _kill: (
        // @ts-expect-error `_kill` is missing typings
        _kill
      ),
      _linkedBinding: (
        // @ts-expect-error `_linkedBinding` is missing typings
        _linkedBinding
      ),
      _preload_modules: (
        // @ts-expect-error `_preload_modules` is missing typings
        _preload_modules
      ),
      _rawDebug: (
        // @ts-expect-error `_rawDebug` is missing typings
        _rawDebug
      ),
      _startProfilerIdleNotifier: (
        // @ts-expect-error `_startProfilerIdleNotifier` is missing typings
        _startProfilerIdleNotifier
      ),
      _stopProfilerIdleNotifier: (
        // @ts-expect-error `_stopProfilerIdleNotifier` is missing typings
        _stopProfilerIdleNotifier
      ),
      _tickCallback: (
        // @ts-expect-error `_tickCallback` is missing typings
        _tickCallback
      ),
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      availableMemory,
      binding: (
        // @ts-expect-error `binding` is missing typings
        binding
      ),
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      domain: (
        // @ts-expect-error `domain` is missing typings
        domain
      ),
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      initgroups: (
        // @ts-expect-error `initgroups` is missing typings
        initgroups
      ),
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      moduleLoadList: (
        // @ts-expect-error `moduleLoadList` is missing typings
        moduleLoadList
      ),
      off,
      on,
      once,
      openStdin: (
        // @ts-expect-error `openStdin` is missing typings
        openStdin
      ),
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit: (
        // @ts-expect-error `reallyExit` is missing typings
        reallyExit
      ),
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = isWorkerdProcessV2 ? workerdProcess : unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/.pnpm/wrangler@4.53.0_@cloudflare+workers-types@4.20251210.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/.pnpm/wrangler@4.53.0_@cloudflare+workers-types@4.20251210.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/.pnpm/wrangler@4.53.0_@cloudflare+workers-types@4.20251210.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/.pnpm/wrangler@4.53.0_@cloudflare+workers-types@4.20251210.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// .output/server/chunks/_/shared.esm-bundler.mjs
function makeMap(e4) {
  const t5 = /* @__PURE__ */ Object.create(null);
  for (const a6 of e4.split(",")) t5[a6] = 1;
  return (e5) => e5 in t5;
}
function generateCodeFrame(e4, t5 = 0, a6 = e4.length) {
  if ((t5 = Math.max(0, Math.min(t5, e4.length))) > (a6 = Math.max(0, Math.min(a6, e4.length)))) return "";
  let n2 = e4.split(/(\r?\n)/);
  const r4 = n2.filter((e5, t6) => t6 % 2 == 1);
  n2 = n2.filter((e5, t6) => t6 % 2 == 0);
  let i4 = 0;
  const o4 = [];
  for (let e5 = 0; e5 < n2.length; e5++) if (i4 += n2[e5].length + (r4[e5] && r4[e5].length || 0), i4 >= t5) {
    for (let s4 = e5 - 2; s4 <= e5 + 2 || a6 > i4; s4++) {
      if (s4 < 0 || s4 >= n2.length) continue;
      const l3 = s4 + 1;
      o4.push(`${l3}${" ".repeat(Math.max(3 - String(l3).length, 0))}|  ${n2[s4]}`);
      const c4 = n2[s4].length, p3 = r4[s4] && r4[s4].length || 0;
      if (s4 === e5) {
        const e6 = t5 - (i4 - (c4 + p3)), n3 = Math.max(1, a6 > i4 ? c4 - e6 : a6 - t5);
        o4.push("   |  " + " ".repeat(e6) + "^".repeat(n3));
      } else if (s4 > e5) {
        if (a6 > i4) {
          const e6 = Math.max(Math.min(a6 - i4, c4), 1);
          o4.push("   |  " + "^".repeat(e6));
        }
        i4 += c4 + p3;
      }
    }
    break;
  }
  return o4.join("\n");
}
function normalizeStyle(e4) {
  if (i(e4)) {
    const t5 = {};
    for (let a6 = 0; a6 < e4.length; a6++) {
      const n2 = e4[a6], r4 = isString(n2) ? parseStringStyle(n2) : normalizeStyle(n2);
      if (r4) for (const e5 in r4) t5[e5] = r4[e5];
    }
    return t5;
  }
  if (isString(e4) || isObject(e4)) return e4;
}
function parseStringStyle(e4) {
  const t5 = {};
  return e4.replace(N, "").split(A).forEach((e5) => {
    if (e5) {
      const a6 = e5.split(T);
      a6.length > 1 && (t5[a6[0].trim()] = a6[1].trim());
    }
  }), t5;
}
function stringifyStyle(e4) {
  if (!e4) return "";
  if (isString(e4)) return e4;
  let t5 = "";
  for (const a6 in e4) {
    const n2 = e4[a6];
    if (isString(n2) || "number" == typeof n2) {
      t5 += `${a6.startsWith("--") ? a6 : d(a6)}:${n2};`;
    }
  }
  return t5;
}
function normalizeClass(e4) {
  let t5 = "";
  if (isString(e4)) t5 = e4;
  else if (i(e4)) for (let a6 = 0; a6 < e4.length; a6++) {
    const n2 = normalizeClass(e4[a6]);
    n2 && (t5 += n2 + " ");
  }
  else if (isObject(e4)) for (const a6 in e4) e4[a6] && (t5 += a6 + " ");
  return t5.trim();
}
function normalizeProps(e4) {
  if (!e4) return null;
  let { class: t5, style: a6 } = e4;
  return t5 && !isString(t5) && (e4.class = normalizeClass(t5)), a6 && (e4.style = normalizeStyle(a6)), e4;
}
function includeBooleanAttr(e4) {
  return !!e4 || "" === e4;
}
function isSSRSafeAttrName(e4) {
  if (L.hasOwnProperty(e4)) return L[e4];
  const t5 = _.test(e4);
  return t5 && console.error(`unsafe attribute name: ${e4}`), L[e4] = !t5;
}
function isRenderableAttrValue(e4) {
  if (null == e4) return false;
  const t5 = typeof e4;
  return "string" === t5 || "number" === t5 || "boolean" === t5;
}
function escapeHtml(e4) {
  const t5 = "" + e4, a6 = z.exec(t5);
  if (!a6) return t5;
  let n2, r4, i4 = "", o4 = 0;
  for (r4 = a6.index; r4 < t5.length; r4++) {
    switch (t5.charCodeAt(r4)) {
      case 34:
        n2 = "&quot;";
        break;
      case 38:
        n2 = "&amp;";
        break;
      case 39:
        n2 = "&#39;";
        break;
      case 60:
        n2 = "&lt;";
        break;
      case 62:
        n2 = "&gt;";
        break;
      default:
        continue;
    }
    o4 !== r4 && (i4 += t5.slice(o4, r4)), o4 = r4 + 1, i4 += n2;
  }
  return o4 !== r4 ? i4 + t5.slice(o4, r4) : i4;
}
function escapeHtmlComment(e4) {
  return e4.replace(I, "");
}
function looseEqual(e4, t5) {
  if (e4 === t5) return true;
  let a6 = isDate(e4), n2 = isDate(t5);
  if (a6 || n2) return !(!a6 || !n2) && e4.getTime() === t5.getTime();
  if (a6 = isSymbol(e4), n2 = isSymbol(t5), a6 || n2) return e4 === t5;
  if (a6 = i(e4), n2 = i(t5), a6 || n2) return !(!a6 || !n2) && (function(e5, t6) {
    if (e5.length !== t6.length) return false;
    let a7 = true;
    for (let n3 = 0; a7 && n3 < e5.length; n3++) a7 = looseEqual(e5[n3], t6[n3]);
    return a7;
  })(e4, t5);
  if (a6 = isObject(e4), n2 = isObject(t5), a6 || n2) {
    if (!a6 || !n2) return false;
    if (Object.keys(e4).length !== Object.keys(t5).length) return false;
    for (const a7 in e4) {
      const n3 = e4.hasOwnProperty(a7), r4 = t5.hasOwnProperty(a7);
      if (n3 && !r4 || !n3 && r4 || !looseEqual(e4[a7], t5[a7])) return false;
    }
  }
  return String(e4) === String(t5);
}
function looseIndexOf(e4, t5) {
  return e4.findIndex((e5) => looseEqual(e5, t5));
}
function normalizeCssVarValue(e4) {
  return null == e4 ? "initial" : "string" == typeof e4 ? "" === e4 ? " " : e4 : String(e4);
}
var t, a, NOOP, NO, isOn, isModelListener, n, remove, r, hasOwn, i, isMap, isSet, isDate, isRegExp, isFunction, isString, isSymbol, isObject, isPromise, o, toTypeString, toRawType, isPlainObject, isIntegerKey, s, l, cacheStringFunction, c, p, m, d, f, u, hasChanged, invokeArrayFns, def, looseToNumber, toNumber, g, getGlobalThis, h, y, b, E, S, A, T, N, k, O, M, C, x, v, R, _, L, P, w, D, F, z, I, U, isRef, toDisplayString, replacer, stringifySymbol, j;
var init_shared_esm_bundler = __esm({
  ".output/server/chunks/_/shared.esm-bundler.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    __name(makeMap, "makeMap");
    t = {};
    a = [];
    NOOP = /* @__PURE__ */ __name(() => {
    }, "NOOP");
    NO = /* @__PURE__ */ __name(() => false, "NO");
    isOn = /* @__PURE__ */ __name((e4) => 111 === e4.charCodeAt(0) && 110 === e4.charCodeAt(1) && (e4.charCodeAt(2) > 122 || e4.charCodeAt(2) < 97), "isOn");
    isModelListener = /* @__PURE__ */ __name((e4) => e4.startsWith("onUpdate:"), "isModelListener");
    n = Object.assign;
    remove = /* @__PURE__ */ __name((e4, t5) => {
      const a6 = e4.indexOf(t5);
      a6 > -1 && e4.splice(a6, 1);
    }, "remove");
    r = Object.prototype.hasOwnProperty;
    hasOwn = /* @__PURE__ */ __name((e4, t5) => r.call(e4, t5), "hasOwn");
    i = Array.isArray;
    isMap = /* @__PURE__ */ __name((e4) => "[object Map]" === toTypeString(e4), "isMap");
    isSet = /* @__PURE__ */ __name((e4) => "[object Set]" === toTypeString(e4), "isSet");
    isDate = /* @__PURE__ */ __name((e4) => "[object Date]" === toTypeString(e4), "isDate");
    isRegExp = /* @__PURE__ */ __name((e4) => "[object RegExp]" === toTypeString(e4), "isRegExp");
    isFunction = /* @__PURE__ */ __name((e4) => "function" == typeof e4, "isFunction");
    isString = /* @__PURE__ */ __name((e4) => "string" == typeof e4, "isString");
    isSymbol = /* @__PURE__ */ __name((e4) => "symbol" == typeof e4, "isSymbol");
    isObject = /* @__PURE__ */ __name((e4) => null !== e4 && "object" == typeof e4, "isObject");
    isPromise = /* @__PURE__ */ __name((e4) => (isObject(e4) || isFunction(e4)) && isFunction(e4.then) && isFunction(e4.catch), "isPromise");
    o = Object.prototype.toString;
    toTypeString = /* @__PURE__ */ __name((e4) => o.call(e4), "toTypeString");
    toRawType = /* @__PURE__ */ __name((e4) => toTypeString(e4).slice(8, -1), "toRawType");
    isPlainObject = /* @__PURE__ */ __name((e4) => "[object Object]" === toTypeString(e4), "isPlainObject");
    isIntegerKey = /* @__PURE__ */ __name((e4) => isString(e4) && "NaN" !== e4 && "-" !== e4[0] && "" + parseInt(e4, 10) === e4, "isIntegerKey");
    s = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
    l = makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
    cacheStringFunction = /* @__PURE__ */ __name((e4) => {
      const t5 = /* @__PURE__ */ Object.create(null);
      return (a6) => t5[a6] || (t5[a6] = e4(a6));
    }, "cacheStringFunction");
    c = /-\w/g;
    p = cacheStringFunction((e4) => e4.replace(c, (e5) => e5.slice(1).toUpperCase()));
    m = /\B([A-Z])/g;
    d = cacheStringFunction((e4) => e4.replace(m, "-$1").toLowerCase());
    f = cacheStringFunction((e4) => e4.charAt(0).toUpperCase() + e4.slice(1));
    u = cacheStringFunction((e4) => e4 ? `on${f(e4)}` : "");
    hasChanged = /* @__PURE__ */ __name((e4, t5) => !Object.is(e4, t5), "hasChanged");
    invokeArrayFns = /* @__PURE__ */ __name((e4, ...t5) => {
      for (let a6 = 0; a6 < e4.length; a6++) e4[a6](...t5);
    }, "invokeArrayFns");
    def = /* @__PURE__ */ __name((e4, t5, a6, n2 = false) => {
      Object.defineProperty(e4, t5, { configurable: true, enumerable: false, writable: n2, value: a6 });
    }, "def");
    looseToNumber = /* @__PURE__ */ __name((e4) => {
      const t5 = parseFloat(e4);
      return isNaN(t5) ? e4 : t5;
    }, "looseToNumber");
    toNumber = /* @__PURE__ */ __name((e4) => {
      const t5 = isString(e4) ? Number(e4) : NaN;
      return isNaN(t5) ? e4 : t5;
    }, "toNumber");
    getGlobalThis = /* @__PURE__ */ __name(() => g || (g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== fs ? fs : {}), "getGlobalThis");
    h = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
    y = { 1: "TEXT", 2: "CLASS", 4: "STYLE", 8: "PROPS", 16: "FULL_PROPS", 32: "NEED_HYDRATION", 64: "STABLE_FRAGMENT", 128: "KEYED_FRAGMENT", 256: "UNKEYED_FRAGMENT", 512: "NEED_PATCH", 1024: "DYNAMIC_SLOTS", 2048: "DEV_ROOT_FRAGMENT", [-1]: "CACHED", [-2]: "BAIL" };
    b = { 1: "STABLE", 2: "DYNAMIC", 3: "FORWARDED" };
    E = makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
    S = E;
    __name(generateCodeFrame, "generateCodeFrame");
    __name(normalizeStyle, "normalizeStyle");
    A = /;(?![^(]*\))/g;
    T = /:([^]+)/;
    N = /\/\*[^]*?\*\//g;
    __name(parseStringStyle, "parseStringStyle");
    __name(stringifyStyle, "stringifyStyle");
    __name(normalizeClass, "normalizeClass");
    __name(normalizeProps, "normalizeProps");
    k = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot");
    O = makeMap("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
    M = makeMap("annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics");
    C = makeMap("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
    x = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
    v = makeMap(x);
    R = makeMap(x + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    __name(includeBooleanAttr, "includeBooleanAttr");
    _ = /[>/="'\u0009\u000a\u000c\u0020]/;
    L = {};
    __name(isSSRSafeAttrName, "isSSRSafeAttrName");
    P = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" };
    w = makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");
    D = makeMap("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");
    F = makeMap("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");
    __name(isRenderableAttrValue, "isRenderableAttrValue");
    z = /["'&<>]/;
    __name(escapeHtml, "escapeHtml");
    I = /^-?>|<!--|-->|--!>|<!-$/g;
    __name(escapeHtmlComment, "escapeHtmlComment");
    U = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
    __name(looseEqual, "looseEqual");
    __name(looseIndexOf, "looseIndexOf");
    isRef = /* @__PURE__ */ __name((e4) => !(!e4 || true !== e4.__v_isRef), "isRef");
    toDisplayString = /* @__PURE__ */ __name((e4) => isString(e4) ? e4 : null == e4 ? "" : i(e4) || isObject(e4) && (e4.toString === o || !isFunction(e4.toString)) ? isRef(e4) ? toDisplayString(e4.value) : JSON.stringify(e4, replacer, 2) : String(e4), "toDisplayString");
    replacer = /* @__PURE__ */ __name((e4, t5) => isRef(t5) ? replacer(e4, t5.value) : isMap(t5) ? { [`Map(${t5.size})`]: [...t5.entries()].reduce((e5, [t6, a6], n2) => (e5[stringifySymbol(t6, n2) + " =>"] = a6, e5), {}) } : isSet(t5) ? { [`Set(${t5.size})`]: [...t5.values()].map((e5) => stringifySymbol(e5)) } : isSymbol(t5) ? stringifySymbol(t5) : !isObject(t5) || i(t5) || isPlainObject(t5) ? t5 : String(t5), "replacer");
    stringifySymbol = /* @__PURE__ */ __name((e4, t5 = "") => {
      var a6;
      return isSymbol(e4) ? `Symbol(${null != (a6 = e4.description) ? a6 : t5})` : e4;
    }, "stringifySymbol");
    __name(normalizeCssVarValue, "normalizeCssVarValue");
    j = Object.freeze(Object.defineProperty({ __proto__: null, EMPTY_ARR: a, EMPTY_OBJ: t, NO, NOOP, PatchFlagNames: y, PatchFlags: { TEXT: 1, 1: "TEXT", CLASS: 2, 2: "CLASS", STYLE: 4, 4: "STYLE", PROPS: 8, 8: "PROPS", FULL_PROPS: 16, 16: "FULL_PROPS", NEED_HYDRATION: 32, 32: "NEED_HYDRATION", STABLE_FRAGMENT: 64, 64: "STABLE_FRAGMENT", KEYED_FRAGMENT: 128, 128: "KEYED_FRAGMENT", UNKEYED_FRAGMENT: 256, 256: "UNKEYED_FRAGMENT", NEED_PATCH: 512, 512: "NEED_PATCH", DYNAMIC_SLOTS: 1024, 1024: "DYNAMIC_SLOTS", DEV_ROOT_FRAGMENT: 2048, 2048: "DEV_ROOT_FRAGMENT", CACHED: -1, "-1": "CACHED", BAIL: -2, "-2": "BAIL" }, ShapeFlags: { ELEMENT: 1, 1: "ELEMENT", FUNCTIONAL_COMPONENT: 2, 2: "FUNCTIONAL_COMPONENT", STATEFUL_COMPONENT: 4, 4: "STATEFUL_COMPONENT", TEXT_CHILDREN: 8, 8: "TEXT_CHILDREN", ARRAY_CHILDREN: 16, 16: "ARRAY_CHILDREN", SLOTS_CHILDREN: 32, 32: "SLOTS_CHILDREN", TELEPORT: 64, 64: "TELEPORT", SUSPENSE: 128, 128: "SUSPENSE", COMPONENT_SHOULD_KEEP_ALIVE: 256, 256: "COMPONENT_SHOULD_KEEP_ALIVE", COMPONENT_KEPT_ALIVE: 512, 512: "COMPONENT_KEPT_ALIVE", COMPONENT: 6, 6: "COMPONENT" }, SlotFlags: { STABLE: 1, 1: "STABLE", DYNAMIC: 2, 2: "DYNAMIC", FORWARDED: 3, 3: "FORWARDED" }, camelize: p, capitalize: f, cssVarNameEscapeSymbolsRE: U, def, escapeHtml, escapeHtmlComment, extend: n, genCacheKey: /* @__PURE__ */ __name(function(e4, t5) {
      return e4 + JSON.stringify(t5, (e5, t6) => "function" == typeof t6 ? t6.toString() : t6);
    }, "genCacheKey"), genPropsAccessExp: /* @__PURE__ */ __name(function(e4) {
      return h.test(e4) ? `__props.${e4}` : `__props[${JSON.stringify(e4)}]`;
    }, "genPropsAccessExp"), generateCodeFrame, getEscapedCssVarName: /* @__PURE__ */ __name(function(e4, t5) {
      return e4.replace(U, (e5) => t5 ? '"' === e5 ? '\\\\\\"' : `\\\\${e5}` : `\\${e5}`);
    }, "getEscapedCssVarName"), getGlobalThis, hasChanged, hasOwn, hyphenate: d, includeBooleanAttr, invokeArrayFns, isArray: i, isBooleanAttr: R, isBuiltInDirective: l, isDate, isFunction, isGloballyAllowed: E, isGloballyWhitelisted: S, isHTMLTag: k, isIntegerKey, isKnownHtmlAttr: w, isKnownMathMLAttr: F, isKnownSvgAttr: D, isMap, isMathMLTag: M, isModelListener, isObject, isOn, isPlainObject, isPromise, isRegExp, isRenderableAttrValue, isReservedProp: s, isSSRSafeAttrName, isSVGTag: O, isSet, isSpecialBooleanAttr: v, isString, isSymbol, isVoidTag: C, looseEqual, looseIndexOf, looseToNumber, makeMap, normalizeClass, normalizeCssVarValue, normalizeProps, normalizeStyle, objectToString: o, parseStringStyle, propsToAttrMap: P, remove, slotFlagsText: b, stringifyStyle, toDisplayString, toHandlerKey: u, toNumber, toRawType, toTypeString }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .output/server/chunks/_/error-500.mjs
var error_500_exports = {};
__export(error_500_exports, {
  template: () => template
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:async_hooks";
var t2, template;
var init_error_500 = __esm({
  ".output/server/chunks/_/error-500.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_shared_esm_bundler();
    init_nitro();
    t2 = { appName: "Nuxt", statusCode: 500, statusMessage: "Internal server error", description: "This page is temporarily unavailable.", refresh: "Refresh this page" };
    template = /* @__PURE__ */ __name((r4) => (r4 = { ...t2, ...r4 }, '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(r4.statusCode) + " - " + escapeHtml(r4.statusMessage) + " | " + escapeHtml(r4.appName) + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class="antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide"><div class="max-w-520px text-center"><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]">` + escapeHtml(r4.statusCode) + '</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl">' + escapeHtml(r4.statusMessage) + '</h2><p class="mb-4 px-2 text-[#64748B] text-md">' + escapeHtml(r4.description) + "</p></div></body></html>"), "template");
  }
});

// .output/server/chunks/build/client.precomputed.mjs
var client_precomputed_exports = {};
__export(client_precomputed_exports, {
  default: () => e
});
var e, c2, r2;
var init_client_precomputed = __esm({
  ".output/server/chunks/build/client.precomputed.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    e = { dependencies: { "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/entry.js": { scripts: { "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/entry.js": c2 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "BTzNJ8r-.js", name: "entry", src: "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/entry.js", isEntry: true, dynamicImports: ["../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-404.vue", "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-500.vue"], css: ["entry.CGkThn_i.css"] } }, styles: { "entry.CGkThn_i.css": r2 = { file: "entry.CGkThn_i.css", resourceType: "style", prefetch: true, preload: true } }, preload: { "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/entry.js": c2, "entry.CGkThn_i.css": r2 }, prefetch: { "entry.CGkThn_i.css": r2 } }, "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-404.vue": { scripts: {}, styles: { "entry.CGkThn_i.css": r2 }, preload: { "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-404.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "CU-pC6vv.js", name: "error-404", src: "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-404.vue", isDynamicEntry: true, imports: ["../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/entry.js"], css: [] }, "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/entry.js": c2, "entry.CGkThn_i.css": r2 }, prefetch: { "entry.CGkThn_i.css": r2 } }, "error-404.wPSazbbD.css": { scripts: {}, styles: {}, preload: { "error-404.wPSazbbD.css": { file: "error-404.wPSazbbD.css", resourceType: "style", prefetch: true, preload: true } }, prefetch: {} }, "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-500.vue": { scripts: {}, styles: { "entry.CGkThn_i.css": r2 }, preload: { "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-500.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "ClE5NG7b.js", name: "error-500", src: "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-500.vue", isDynamicEntry: true, imports: ["../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/entry.js"], css: [] }, "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/entry.js": c2, "entry.CGkThn_i.css": r2 }, prefetch: { "entry.CGkThn_i.css": r2 } }, "error-500.BOaDmLFy.css": { scripts: {}, styles: {}, preload: { "error-500.BOaDmLFy.css": { file: "error-500.BOaDmLFy.css", resourceType: "style", prefetch: true, preload: true } }, prefetch: {} }, "entry.CGkThn_i.css": { scripts: {}, styles: {}, preload: { "entry.CGkThn_i.css": r2 }, prefetch: {} } }, entrypoints: ["../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/entry.js"], modules: { "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-404.vue": { file: "CU-pC6vv.js", resourceType: "script", mimeType: void 0, module: true }, "error-404.wPSazbbD.css": { file: "error-404.wPSazbbD.css", resourceType: "style", mimeType: void 0, module: void 0 }, "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-500.vue": { file: "ClE5NG7b.js", resourceType: "script", mimeType: void 0, module: true }, "error-500.BOaDmLFy.css": { file: "error-500.BOaDmLFy.css", resourceType: "style", mimeType: void 0, module: void 0 }, "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/entry.js": { file: "BTzNJ8r-.js", resourceType: "script", mimeType: void 0, module: true }, "entry.CGkThn_i.css": { file: "entry.CGkThn_i.css", resourceType: "style", mimeType: void 0, module: void 0 } } };
  }
});

// .output/server/chunks/build/error-404-BqsMkaoQ.mjs
var error_404_BqsMkaoQ_exports = {};
__export(error_404_BqsMkaoQ_exports, {
  default: () => x2
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:async_hooks";
function defineNuxtLink(a6) {
  const n2 = a6.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(e4) {
    return "string" == typeof e4 && e4.startsWith("#");
  }
  __name(isHashLinkWithoutHashMode, "isHashLinkWithoutHashMode");
  function useNuxtLink(e4) {
    const n3 = useRouter(), o4 = useRuntimeConfig(), i4 = Wt.computed(() => !!e4.target && "_self" !== e4.target), l3 = Wt.computed(() => {
      const r4 = e4.to || e4.href || "";
      return "string" == typeof r4 && hasProtocol(r4, { acceptRelative: true });
    }), f3 = Wt.resolveComponent("RouterLink"), h4 = f3 && "string" != typeof f3 ? f3.useLink : void 0, v3 = Wt.computed(() => {
      if (e4.external) return true;
      const t5 = e4.to || e4.href || "";
      return "object" != typeof t5 && ("" === t5 || l3.value);
    }), m3 = Wt.computed(() => {
      const t5 = e4.to || e4.href || "";
      return v3.value ? t5 : (function(e5, t6, r4) {
        const n4 = r4 ?? a6.trailingSlash;
        if (!e5 || "append" !== n4 && "remove" !== n4) return e5;
        if ("string" == typeof e5) return applyTrailingSlashBehavior(e5, n4);
        const o5 = "path" in e5 && void 0 !== e5.path ? e5.path : t6(e5).path;
        return { ...e5, name: void 0, path: applyTrailingSlashBehavior(o5, n4) };
      })(t5, n3.resolve, e4.trailingSlash);
    }), g4 = v3.value ? void 0 : h4?.({ ...e4, to: m3 }), b4 = Wt.computed(() => {
      const t5 = e4.trailingSlash ?? a6.trailingSlash;
      if (!m3.value || l3.value || isHashLinkWithoutHashMode(m3.value)) return m3.value;
      if (v3.value) {
        const e5 = "object" == typeof m3.value && "path" in m3.value ? resolveRouteObject(m3.value) : m3.value;
        return applyTrailingSlashBehavior("object" == typeof e5 ? n3.resolve(e5).href : e5, t5);
      }
      return "object" == typeof m3.value ? n3.resolve(m3.value)?.href ?? null : applyTrailingSlashBehavior(joinURL(o4.app.baseURL, m3.value), t5);
    });
    return { to: m3, hasTarget: i4, isAbsoluteUrl: l3, isExternal: v3, href: b4, isActive: g4?.isActive ?? Wt.computed(() => m3.value === n3.currentRoute.value.path), isExactActive: g4?.isExactActive ?? Wt.computed(() => m3.value === n3.currentRoute.value.path), route: g4?.route ?? Wt.computed(() => n3.resolve(m3.value)), async navigate(t5) {
      await navigateTo(b4.value, { replace: e4.replace, external: v3.value || i4.value });
    } };
  }
  __name(useNuxtLink, "useNuxtLink");
  return Wt.defineComponent({ name: n2, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false }, trailingSlash: { type: String, default: void 0, required: false } }, useLink: useNuxtLink, setup(t5, { slots: r4 }) {
    const n3 = useRouter(), { to: o4, href: i4, navigate: d3, isExternal: c4, hasTarget: p3, isAbsoluteUrl: f3 } = useNuxtLink(t5);
    Wt.shallowRef(false);
    async function prefetch(e4 = useNuxtApp()) {
    }
    __name(prefetch, "prefetch");
    return () => {
      if (!c4.value && !p3.value && !isHashLinkWithoutHashMode(o4.value)) {
        const e4 = { ref: void 0, to: o4.value, activeClass: t5.activeClass || a6.activeClass, exactActiveClass: t5.exactActiveClass || a6.exactActiveClass, replace: t5.replace, ariaCurrentValue: t5.ariaCurrentValue, custom: t5.custom };
        return t5.custom || (e4.rel = t5.rel || void 0), Wt.h(Wt.resolveComponent("RouterLink"), e4, r4.default);
      }
      const u3 = t5.target || null, l3 = ((...e4) => e4.find((e5) => void 0 !== e5))(t5.noRel ? "" : t5.rel, a6.externalRelAttribute, f3.value || p3.value ? "noopener noreferrer" : "") || null;
      return t5.custom ? r4.default ? r4.default({ href: i4.value, navigate: d3, prefetch, get route() {
        if (!i4.value) return;
        const t6 = new URL(i4.value, "http://localhost");
        return { path: t6.pathname, fullPath: t6.pathname, get query() {
          return parseQuery(t6.search);
        }, hash: t6.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: i4.value };
      }, rel: l3, target: u3, isExternal: c4.value || p3.value, isActive: false, isExactActive: false }) : null : Wt.h("a", { ref: void 0, href: i4.value || null, rel: l3, target: u3, onClick: /* @__PURE__ */ __name((e4) => {
        if (!c4.value && !p3.value) return e4.preventDefault(), t5.replace ? n3.replace(i4.value) : n3.push(i4.value);
      }, "onClick") }, r4.default?.());
    };
  } });
}
function applyTrailingSlashBehavior(e4, r4) {
  const o4 = "append" === r4 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e4) && !e4.startsWith("http") ? e4 : o4(e4, true);
}
var g2, b2, y2, x2;
var init_error_404_BqsMkaoQ = __esm({
  ".output/server/chunks/build/error-404-BqsMkaoQ.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_server();
    init_renderer();
    init_shared_esm_bundler();
    __name(defineNuxtLink, "defineNuxtLink");
    g2 = defineNuxtLink(Gt);
    __name(applyTrailingSlashBehavior, "applyTrailingSlashBehavior");
    b2 = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, statusCode: { type: Number, default: 404 }, statusMessage: { type: String, default: "Page not found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(e4) {
      const t5 = e4;
      return useHead({ title: `${t5.statusCode} - ${t5.statusMessage} | ${t5.appName}`, script: [{ innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ innerHTML: '*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t6, r4, a6, n2) => {
        const o4 = g2;
        r4(`<div${ssrRenderAttrs(Wt.mergeProps({ class: "antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide" }, n2))} data-v-73158506><div class="max-w-520px text-center" data-v-73158506><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]" data-v-73158506>${ssrInterpolate(e4.statusCode)}</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl" data-v-73158506>${ssrInterpolate(e4.statusMessage)}</h2><p class="mb-4 px-2 text-[#64748B] text-md" data-v-73158506>${ssrInterpolate(e4.description)}</p><div class="flex items-center justify-center w-full" data-v-73158506>`), r4(ssrRenderComponent(o4, { to: "/", class: "font-medium hover:text-[#00DC82] text-sm underline underline-offset-3" }, { default: Wt.withCtx((t7, r5, a7, n3) => {
          if (!r5) return [Wt.createTextVNode(Wt.toDisplayString(e4.backHome), 1)];
          r5(`${ssrInterpolate(e4.backHome)}`);
        }), _: 1 }, a6)), r4("</div></div></div>");
      };
    } };
    y2 = b2.setup;
    b2.setup = (e4, t5) => {
      const r4 = Wt.useSSRContext();
      return (r4.modules || (r4.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-404.vue"), y2 ? y2(e4, t5) : void 0;
    };
    x2 = _export_sfc(b2, [["__scopeId", "data-v-73158506"]]);
  }
});

// .output/server/chunks/build/error-500-cztk-OJf.mjs
var error_500_cztk_OJf_exports = {};
__export(error_500_cztk_OJf_exports, {
  default: () => i2
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:async_hooks";
var s2, a2, i2;
var init_error_500_cztk_OJf = __esm({
  ".output/server/chunks/build/error-500-cztk-OJf.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server();
    init_renderer();
    init_nitro();
    init_shared_esm_bundler();
    s2 = { __name: "error-500", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, statusCode: { type: Number, default: 500 }, statusMessage: { type: String, default: "Internal server error" }, description: { type: String, default: "This page is temporarily unavailable." }, refresh: { type: String, default: "Refresh this page" } }, setup(e4) {
      const s4 = e4;
      return useHead({ title: `${s4.statusCode} - ${s4.statusMessage} | ${s4.appName}`, script: [{ innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ innerHTML: '*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (r4, s5, a6, i4) => {
        s5(`<div${ssrRenderAttrs(Wt.mergeProps({ class: "antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide" }, i4))} data-v-bfab201b><div class="max-w-520px text-center" data-v-bfab201b><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]" data-v-bfab201b>${ssrInterpolate(e4.statusCode)}</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl" data-v-bfab201b>${ssrInterpolate(e4.statusMessage)}</h2><p class="mb-4 px-2 text-[#64748B] text-md" data-v-bfab201b>${ssrInterpolate(e4.description)}</p></div></div>`);
      };
    } };
    a2 = s2.setup;
    s2.setup = (e4, r4) => {
      const n2 = Wt.useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-500.vue"), a2 ? a2(e4, r4) : void 0;
    };
    i2 = _export_sfc(s2, [["__scopeId", "data-v-bfab201b"]]);
  }
});

// .output/server/chunks/build/server.mjs
var server_exports = {};
__export(server_exports, {
  _: () => _export_sfc,
  a: () => useRouter,
  b: () => useNuxtApp,
  c: () => useRuntimeConfig,
  d: () => Gt,
  n: () => navigateTo,
  r: () => resolveRouteObject,
  s: () => gn,
  u: () => useHead,
  v: () => Wt
});
function registerRuntimeHelpers(e4) {
  Object.getOwnPropertySymbols(e4).forEach((t5) => {
    Le[t5] = e4[t5];
  });
}
function createRoot(e4, t5 = "") {
  return { type: 0, source: t5, children: e4, helpers: /* @__PURE__ */ new Set(), components: [], directives: [], hoists: [], imports: [], cached: [], temps: 0, codegenNode: void 0, loc: ke };
}
function createVNodeCall(e4, t5, n2, r4, o4, s4, i4, a6 = false, c4 = false, l3 = false, p3 = ke) {
  return e4 && (a6 ? (e4.helper(Q), e4.helper(getVNodeBlockHelper(e4.inSSR, l3))) : e4.helper(getVNodeHelper(e4.inSSR, l3)), i4 && e4.helper(de)), { type: 13, tag: t5, props: n2, children: r4, patchFlag: o4, dynamicProps: s4, directives: i4, isBlock: a6, disableTracking: c4, isComponent: l3, loc: p3 };
}
function createArrayExpression(e4, t5 = ke) {
  return { type: 17, loc: t5, elements: e4 };
}
function createObjectExpression(e4, t5 = ke) {
  return { type: 15, loc: t5, properties: e4 };
}
function createObjectProperty(e4, t5) {
  return { type: 16, loc: ke, key: isString(e4) ? createSimpleExpression(e4, true) : e4, value: t5 };
}
function createSimpleExpression(e4, t5 = false, n2 = ke, r4 = 0) {
  return { type: 4, loc: n2, content: e4, isStatic: t5, constType: t5 ? 3 : r4 };
}
function createCompoundExpression(e4, t5 = ke) {
  return { type: 8, loc: t5, children: e4 };
}
function createCallExpression(e4, t5 = [], n2 = ke) {
  return { type: 14, loc: n2, callee: e4, arguments: t5 };
}
function createFunctionExpression(e4, t5 = void 0, n2 = false, r4 = false, o4 = ke) {
  return { type: 18, params: e4, returns: t5, newline: n2, isSlot: r4, loc: o4 };
}
function createConditionalExpression(e4, t5, n2, r4 = true) {
  return { type: 19, test: e4, consequent: t5, alternate: n2, newline: r4, loc: ke };
}
function createCacheExpression(e4, t5, n2 = false, r4 = false) {
  return { type: 20, index: e4, value: t5, needPauseTracking: n2, inVOnce: r4, needArraySpread: false, loc: ke };
}
function createBlockStatement(e4) {
  return { type: 21, body: e4, loc: ke };
}
function getVNodeHelper(e4, t5) {
  return e4 || t5 ? ne : re;
}
function getVNodeBlockHelper(e4, t5) {
  return e4 || t5 ? ee : te;
}
function convertToBlock(e4, { helper: t5, removeHelper: n2, inSSR: r4 }) {
  e4.isBlock || (e4.isBlock = true, n2(getVNodeHelper(r4, e4.isComponent)), t5(Q), t5(getVNodeBlockHelper(r4, e4.isComponent)));
}
function isTagStartChar(e4) {
  return e4 >= 97 && e4 <= 122 || e4 >= 65 && e4 <= 90;
}
function isWhitespace(e4) {
  return 32 === e4 || 10 === e4 || 9 === e4 || 12 === e4 || 13 === e4;
}
function isEndOfTagSection(e4) {
  return 47 === e4 || 62 === e4 || isWhitespace(e4);
}
function toCharCodes(e4) {
  const t5 = new Uint8Array(e4.length);
  for (let n2 = 0; n2 < e4.length; n2++) t5[n2] = e4.charCodeAt(n2);
  return t5;
}
function getCompatValue(e4, { compatConfig: t5 }) {
  const n2 = t5 && t5[e4];
  return "MODE" === e4 ? n2 || 3 : n2;
}
function isCompatEnabled(e4, t5) {
  const n2 = getCompatValue("MODE", t5), r4 = getCompatValue(e4, t5);
  return 3 === n2 ? true === r4 : false !== r4;
}
function checkCompatEnabled(e4, t5, n2, ...r4) {
  return isCompatEnabled(e4, t5);
}
function defaultOnError(e4) {
  throw e4;
}
function defaultOnWarn(e4) {
}
function createCompilerError(e4, t5, n2, r4) {
  const o4 = new SyntaxError(String(`https://vuejs.org/error-reference/#compiler-${e4}`));
  return o4.code = e4, o4.loc = t5, o4;
}
function walkBlockDeclarations(e4, t5) {
  const n2 = "SwitchCase" === e4.type ? e4.consequent : e4.body;
  for (const e5 of n2) if ("VariableDeclaration" === e5.type) {
    if (e5.declare) continue;
    for (const n3 of e5.declarations) for (const e6 of extractIdentifiers(n3.id)) t5(e6);
  } else if ("FunctionDeclaration" === e5.type || "ClassDeclaration" === e5.type) {
    if (e5.declare || !e5.id) continue;
    t5(e5.id);
  } else isForStatement(e5) ? walkForStatement(e5, true, t5) : "SwitchStatement" === e5.type && walkSwitchStatement(e5, true, t5);
}
function isForStatement(e4) {
  return "ForOfStatement" === e4.type || "ForInStatement" === e4.type || "ForStatement" === e4.type;
}
function walkForStatement(e4, t5, n2) {
  const r4 = "ForStatement" === e4.type ? e4.init : e4.left;
  if (r4 && "VariableDeclaration" === r4.type && ("var" === r4.kind ? t5 : !t5)) for (const e5 of r4.declarations) for (const t6 of extractIdentifiers(e5.id)) n2(t6);
}
function walkSwitchStatement(e4, t5, n2) {
  for (const r4 of e4.cases) {
    for (const e5 of r4.consequent) if ("VariableDeclaration" === e5.type && ("var" === e5.kind ? t5 : !t5)) for (const t6 of e5.declarations) for (const e6 of extractIdentifiers(t6.id)) n2(e6);
    walkBlockDeclarations(r4, n2);
  }
}
function extractIdentifiers(e4, t5 = []) {
  switch (e4.type) {
    case "Identifier":
      t5.push(e4);
      break;
    case "MemberExpression":
      let n2 = e4;
      for (; "MemberExpression" === n2.type; ) n2 = n2.object;
      t5.push(n2);
      break;
    case "ObjectPattern":
      for (const n3 of e4.properties) "RestElement" === n3.type ? extractIdentifiers(n3.argument, t5) : extractIdentifiers(n3.value, t5);
      break;
    case "ArrayPattern":
      e4.elements.forEach((e5) => {
        e5 && extractIdentifiers(e5, t5);
      });
      break;
    case "RestElement":
      extractIdentifiers(e4.argument, t5);
      break;
    case "AssignmentPattern":
      extractIdentifiers(e4.left, t5);
  }
  return t5;
}
function isCoreComponent(e4) {
  switch (e4) {
    case "Teleport":
    case "teleport":
      return J;
    case "Suspense":
    case "suspense":
      return K;
    case "KeepAlive":
    case "keep-alive":
      return Y;
    case "BaseTransition":
    case "base-transition":
      return Z;
  }
}
function advancePositionWithMutation(e4, t5, n2 = t5.length) {
  let r4 = 0, o4 = -1;
  for (let e5 = 0; e5 < n2; e5++) 10 === t5.charCodeAt(e5) && (r4++, o4 = e5);
  return e4.offset += n2, e4.line += r4, e4.column = -1 === o4 ? e4.column + n2 : n2 - o4, e4;
}
function findDir(e4, t5, n2 = false) {
  for (let r4 = 0; r4 < e4.props.length; r4++) {
    const o4 = e4.props[r4];
    if (7 === o4.type && (n2 || o4.exp) && (isString(t5) ? o4.name === t5 : t5.test(o4.name))) return o4;
  }
}
function findProp(e4, t5, n2 = false, r4 = false) {
  for (let o4 = 0; o4 < e4.props.length; o4++) {
    const s4 = e4.props[o4];
    if (6 === s4.type) {
      if (n2) continue;
      if (s4.name === t5 && (s4.value || r4)) return s4;
    } else if ("bind" === s4.name && (s4.exp || r4) && isStaticArgOf(s4.arg, t5)) return s4;
  }
}
function isStaticArgOf(e4, t5) {
  return !(!e4 || !isStaticExp(e4) || e4.content !== t5);
}
function hasDynamicKeyVBind(e4) {
  return e4.props.some((e5) => !(7 !== e5.type || "bind" !== e5.name || e5.arg && 4 === e5.arg.type && e5.arg.isStatic));
}
function isText$1(e4) {
  return 5 === e4.type || 2 === e4.type;
}
function isVPre(e4) {
  return 7 === e4.type && "pre" === e4.name;
}
function isVSlot(e4) {
  return 7 === e4.type && "slot" === e4.name;
}
function isTemplateNode(e4) {
  return 1 === e4.type && 3 === e4.tagType;
}
function isSlotOutlet(e4) {
  return 1 === e4.type && 2 === e4.tagType;
}
function getUnnormalizedProps(e4, t5 = []) {
  if (e4 && !isString(e4) && 14 === e4.type) {
    const n2 = e4.callee;
    if (!isString(n2) && Ke.has(n2)) return getUnnormalizedProps(e4.arguments[0], t5.concat(e4));
  }
  return [e4, t5];
}
function injectProp(e4, t5, n2) {
  let r4, o4, s4 = 13 === e4.type ? e4.props : e4.arguments[2], i4 = [];
  if (s4 && !isString(s4) && 14 === s4.type) {
    const e5 = getUnnormalizedProps(s4);
    s4 = e5[0], i4 = e5[1], o4 = i4[i4.length - 1];
  }
  if (null == s4 || isString(s4)) r4 = createObjectExpression([t5]);
  else if (14 === s4.type) {
    const e5 = s4.arguments[0];
    isString(e5) || 15 !== e5.type ? s4.callee === ve ? r4 = createCallExpression(n2.helper(ge), [createObjectExpression([t5]), s4]) : s4.arguments.unshift(createObjectExpression([t5])) : hasProp(t5, e5) || e5.properties.unshift(t5), !r4 && (r4 = s4);
  } else 15 === s4.type ? (hasProp(t5, s4) || s4.properties.unshift(t5), r4 = s4) : (r4 = createCallExpression(n2.helper(ge), [createObjectExpression([t5]), s4]), o4 && o4.callee === xe && (o4 = i4[i4.length - 2]));
  13 === e4.type ? o4 ? o4.arguments[0] = r4 : e4.props = r4 : o4 ? o4.arguments[0] = r4 : e4.arguments[2] = r4;
}
function hasProp(e4, t5) {
  let n2 = false;
  if (4 === e4.key.type) {
    const r4 = e4.key.content;
    n2 = t5.properties.some((e5) => 4 === e5.key.type && e5.key.content === r4);
  }
  return n2;
}
function toValidAssetId(e4, t5) {
  return `_${t5}_${e4.replace(/[^\w]/g, (t6, n2) => "-" === t6 ? "_" : e4.charCodeAt(n2).toString())}`;
}
function getMemoedVNodeCall(e4) {
  return 14 === e4.type && e4.callee === we ? e4.arguments[1].returns : e4;
}
function isAllWhitespace(e4) {
  for (let t5 = 0; t5 < e4.length; t5++) if (!isWhitespace(e4.charCodeAt(t5))) return false;
  return true;
}
function isWhitespaceText(e4) {
  return 2 === e4.type && isAllWhitespace(e4.content) || 12 === e4.type && isWhitespaceText(e4.content);
}
function isCommentOrWhitespace(e4) {
  return 3 === e4.type || isWhitespaceText(e4);
}
function getSlice(e4, t5) {
  return tt.slice(e4, t5);
}
function endOpenTag(e4) {
  dt.inSFCRoot && (nt.innerLoc = getLoc(e4 + 1, e4 + 1)), addNode(nt);
  const { tag: t5, ns: n2 } = nt;
  0 === n2 && Qe.isPreTag(t5) && at++, Qe.isVoidTag(t5) ? onCloseTag(nt, e4) : (pt.unshift(nt), 1 !== n2 && 2 !== n2 || (dt.inXML = true)), nt = null;
}
function onText(e4, t5, n2) {
  {
    const t6 = pt[0] && pt[0].tag;
    "script" !== t6 && "style" !== t6 && e4.includes("&") && (e4 = Qe.decodeEntities(e4, false));
  }
  const r4 = pt[0] || et, o4 = r4.children[r4.children.length - 1];
  o4 && 2 === o4.type ? (o4.content += e4, setLocEnd(o4.loc, n2)) : r4.children.push({ type: 2, content: e4, loc: getLoc(t5, n2) });
}
function onCloseTag(e4, t5, n2 = false) {
  setLocEnd(e4.loc, n2 ? backTrack(t5, 60) : (function(e5, t6) {
    let n3 = e5;
    for (; tt.charCodeAt(n3) !== t6 && n3 < tt.length - 1; ) n3++;
    return n3;
  })(t5, 62) + 1), dt.inSFCRoot && (e4.children.length ? e4.innerLoc.end = n({}, e4.children[e4.children.length - 1].loc.end) : e4.innerLoc.end = n({}, e4.innerLoc.start), e4.innerLoc.source = getSlice(e4.innerLoc.start.offset, e4.innerLoc.end.offset));
  const { tag: r4, ns: o4, children: s4 } = e4;
  if (ct || ("slot" === r4 ? e4.tagType = 2 : isFragmentTemplate(e4) ? e4.tagType = 3 : (function({ tag: e5, props: t6 }) {
    if (Qe.isCustomElement(e5)) return false;
    if ("component" === e5 || (n3 = e5.charCodeAt(0), n3 > 64 && n3 < 91) || isCoreComponent(e5) || Qe.isBuiltInComponent && Qe.isBuiltInComponent(e5) || Qe.isNativeTag && !Qe.isNativeTag(e5)) return true;
    var n3;
    for (let e6 = 0; e6 < t6.length; e6++) {
      const n4 = t6[e6];
      if (6 === n4.type) {
        if ("is" === n4.name && n4.value) {
          if (n4.value.content.startsWith("vue:")) return true;
          if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT", Qe, n4.loc)) return true;
        }
      } else if ("bind" === n4.name && isStaticArgOf(n4.arg, "is") && checkCompatEnabled("COMPILER_IS_ON_ELEMENT", Qe, n4.loc)) return true;
    }
    return false;
  })(e4) && (e4.tagType = 1)), dt.inRCDATA || (e4.children = condenseWhitespace(s4)), 0 === o4 && Qe.isIgnoreNewlineTag(r4)) {
    const e5 = s4[0];
    e5 && 2 === e5.type && (e5.content = e5.content.replace(/^\r?\n/, ""));
  }
  0 === o4 && Qe.isPreTag(r4) && at--, lt === e4 && (ct = dt.inVPre = false, lt = null), dt.inXML && 0 === (pt[0] ? pt[0].ns : Qe.ns) && (dt.inXML = false);
  {
    const t6 = e4.props;
    if (!dt.inSFCRoot && isCompatEnabled("COMPILER_NATIVE_TEMPLATE", Qe) && "template" === e4.tag && !isFragmentTemplate(e4)) {
      const t7 = pt[0] || et, n4 = t7.children.indexOf(e4);
      t7.children.splice(n4, 1, ...e4.children);
    }
    const n3 = t6.find((e5) => 6 === e5.type && "inline-template" === e5.name);
    n3 && checkCompatEnabled("COMPILER_INLINE_TEMPLATE", Qe, n3.loc) && e4.children.length && (n3.value = { type: 2, content: getSlice(e4.children[0].loc.start.offset, e4.children[e4.children.length - 1].loc.end.offset), loc: n3.loc });
  }
}
function backTrack(e4, t5) {
  let n2 = e4;
  for (; tt.charCodeAt(n2) !== t5 && n2 >= 0; ) n2--;
  return n2;
}
function isFragmentTemplate({ tag: e4, props: t5 }) {
  if ("template" === e4) {
    for (let e5 = 0; e5 < t5.length; e5++) if (7 === t5[e5].type && ft.has(t5[e5].name)) return true;
  }
  return false;
}
function condenseWhitespace(e4) {
  const t5 = "preserve" !== Qe.whitespace;
  let n2 = false;
  for (let r4 = 0; r4 < e4.length; r4++) {
    const o4 = e4[r4];
    if (2 === o4.type) if (at) o4.content = o4.content.replace(mt, "\n");
    else if (isAllWhitespace(o4.content)) {
      const s4 = e4[r4 - 1] && e4[r4 - 1].type, i4 = e4[r4 + 1] && e4[r4 + 1].type;
      !s4 || !i4 || t5 && (3 === s4 && (3 === i4 || 1 === i4) || 1 === s4 && (3 === i4 || 1 === i4 && hasNewlineChar(o4.content))) ? (n2 = true, e4[r4] = null) : o4.content = " ";
    } else t5 && (o4.content = condense(o4.content));
  }
  return n2 ? e4.filter(Boolean) : e4;
}
function hasNewlineChar(e4) {
  for (let t5 = 0; t5 < e4.length; t5++) {
    const n2 = e4.charCodeAt(t5);
    if (10 === n2 || 13 === n2) return true;
  }
  return false;
}
function condense(e4) {
  let t5 = "", n2 = false;
  for (let r4 = 0; r4 < e4.length; r4++) isWhitespace(e4.charCodeAt(r4)) ? n2 || (t5 += " ", n2 = true) : (t5 += e4[r4], n2 = false);
  return t5;
}
function addNode(e4) {
  (pt[0] || et).children.push(e4);
}
function getLoc(e4, t5) {
  return { start: dt.getPos(e4), end: null == t5 ? t5 : dt.getPos(t5), source: null == t5 ? t5 : getSlice(e4, t5) };
}
function setLocEnd(e4, t5) {
  e4.end = dt.getPos(t5), e4.source = getSlice(e4.start.offset, t5);
}
function dirToAttr(e4) {
  const t5 = { type: 6, name: e4.rawName, nameLoc: getLoc(e4.loc.start.offset, e4.loc.start.offset + e4.rawName.length), value: void 0, loc: e4.loc };
  if (e4.exp) {
    const n2 = e4.exp.loc;
    n2.end.offset < e4.loc.end.offset && (n2.start.offset--, n2.start.column--, n2.end.offset++, n2.end.column++), t5.value = { type: 2, content: e4.exp.content, loc: n2 };
  }
  return t5;
}
function createExp(e4, t5 = false, n2, r4 = 0, o4 = 0) {
  return createSimpleExpression(e4, t5, n2, r4);
}
function emitError(e4, t5, n2) {
  Qe.onError(createCompilerError(e4, getLoc(t5, t5)));
}
function baseParse(e4, t5) {
  if (dt.reset(), nt = null, rt = null, ot = "", st = -1, it = -1, pt.length = 0, tt = e4, Qe = n({}, Ze), t5) {
    let e5;
    for (e5 in t5) null != t5[e5] && (Qe[e5] = t5[e5]);
  }
  dt.mode = "html" === Qe.parseMode ? 1 : "sfc" === Qe.parseMode ? 2 : 0, dt.inXML = 1 === Qe.ns || 2 === Qe.ns;
  const n2 = t5 && t5.delimiters;
  n2 && (dt.delimiterOpen = toCharCodes(n2[0]), dt.delimiterClose = toCharCodes(n2[1]));
  const r4 = et = createRoot([], e4);
  return dt.parse(tt), r4.loc = getLoc(0, e4.length), r4.children = condenseWhitespace(r4.children), et = null, r4;
}
function cacheStatic(e4, t5) {
  walk(e4, void 0, t5, !!getSingleElementRoot(e4));
}
function getSingleElementRoot(e4) {
  const t5 = e4.children.filter((e5) => 3 !== e5.type);
  return 1 !== t5.length || 1 !== t5[0].type || isSlotOutlet(t5[0]) ? null : t5[0];
}
function walk(e4, t5, n2, r4 = false, o4 = false) {
  const { children: s4 } = e4, i4 = [];
  for (let t6 = 0; t6 < s4.length; t6++) {
    const a7 = s4[t6];
    if (1 === a7.type && 0 === a7.tagType) {
      const e5 = r4 ? 0 : getConstantType(a7, n2);
      if (e5 > 0) {
        if (e5 >= 2) {
          a7.codegenNode.patchFlag = -1, i4.push(a7);
          continue;
        }
      } else {
        const e6 = a7.codegenNode;
        if (13 === e6.type) {
          const t7 = e6.patchFlag;
          if ((void 0 === t7 || 512 === t7 || 1 === t7) && getGeneratedPropsConstantType(a7, n2) >= 2) {
            const t8 = getNodeProps(a7);
            t8 && (e6.props = n2.hoist(t8));
          }
          e6.dynamicProps && (e6.dynamicProps = n2.hoist(e6.dynamicProps));
        }
      }
    } else if (12 === a7.type) {
      if ((r4 ? 0 : getConstantType(a7, n2)) >= 2) {
        14 === a7.codegenNode.type && a7.codegenNode.arguments.length > 0 && a7.codegenNode.arguments.push("-1"), i4.push(a7);
        continue;
      }
    }
    if (1 === a7.type) {
      const t7 = 1 === a7.tagType;
      t7 && n2.scopes.vSlot++, walk(a7, e4, n2, false, o4), t7 && n2.scopes.vSlot--;
    } else if (11 === a7.type) walk(a7, e4, n2, 1 === a7.children.length, true);
    else if (9 === a7.type) for (let t7 = 0; t7 < a7.branches.length; t7++) walk(a7.branches[t7], e4, n2, 1 === a7.branches[t7].children.length, o4);
  }
  let a6 = false;
  if (i4.length === s4.length && 1 === e4.type) {
    if (0 === e4.tagType && e4.codegenNode && 13 === e4.codegenNode.type && i(e4.codegenNode.children)) e4.codegenNode.children = getCacheExpression(createArrayExpression(e4.codegenNode.children)), a6 = true;
    else if (1 === e4.tagType && e4.codegenNode && 13 === e4.codegenNode.type && e4.codegenNode.children && !i(e4.codegenNode.children) && 15 === e4.codegenNode.children.type) {
      const t6 = getSlotNode(e4.codegenNode, "default");
      t6 && (t6.returns = getCacheExpression(createArrayExpression(t6.returns)), a6 = true);
    } else if (3 === e4.tagType && t5 && 1 === t5.type && 1 === t5.tagType && t5.codegenNode && 13 === t5.codegenNode.type && t5.codegenNode.children && !i(t5.codegenNode.children) && 15 === t5.codegenNode.children.type) {
      const n3 = findDir(e4, "slot", true), r5 = n3 && n3.arg && getSlotNode(t5.codegenNode, n3.arg);
      r5 && (r5.returns = getCacheExpression(createArrayExpression(r5.returns)), a6 = true);
    }
  }
  if (!a6) for (const e5 of i4) e5.codegenNode = n2.cache(e5.codegenNode);
  function getCacheExpression(e5) {
    const t6 = n2.cache(e5);
    return t6.needArraySpread = true, t6;
  }
  __name(getCacheExpression, "getCacheExpression");
  function getSlotNode(e5, t6) {
    if (e5.children && !i(e5.children) && 15 === e5.children.type) {
      const n3 = e5.children.properties.find((e6) => e6.key === t6 || e6.key.content === t6);
      return n3 && n3.value;
    }
  }
  __name(getSlotNode, "getSlotNode");
  i4.length && n2.transformHoist && n2.transformHoist(s4, n2, e4);
}
function getConstantType(e4, t5) {
  const { constantCache: n2 } = t5;
  switch (e4.type) {
    case 1:
      if (0 !== e4.tagType) return 0;
      const r4 = n2.get(e4);
      if (void 0 !== r4) return r4;
      const o4 = e4.codegenNode;
      if (13 !== o4.type) return 0;
      if (o4.isBlock && "svg" !== e4.tag && "foreignObject" !== e4.tag && "math" !== e4.tag) return 0;
      if (void 0 === o4.patchFlag) {
        let r5 = 3;
        const s5 = getGeneratedPropsConstantType(e4, t5);
        if (0 === s5) return n2.set(e4, 0), 0;
        s5 < r5 && (r5 = s5);
        for (let o5 = 0; o5 < e4.children.length; o5++) {
          const s6 = getConstantType(e4.children[o5], t5);
          if (0 === s6) return n2.set(e4, 0), 0;
          s6 < r5 && (r5 = s6);
        }
        if (r5 > 1) for (let o5 = 0; o5 < e4.props.length; o5++) {
          const s6 = e4.props[o5];
          if (7 === s6.type && "bind" === s6.name && s6.exp) {
            const o6 = getConstantType(s6.exp, t5);
            if (0 === o6) return n2.set(e4, 0), 0;
            o6 < r5 && (r5 = o6);
          }
        }
        if (o4.isBlock) {
          for (let t6 = 0; t6 < e4.props.length; t6++) {
            if (7 === e4.props[t6].type) return n2.set(e4, 0), 0;
          }
          t5.removeHelper(Q), t5.removeHelper(getVNodeBlockHelper(t5.inSSR, o4.isComponent)), o4.isBlock = false, t5.helper(getVNodeHelper(t5.inSSR, o4.isComponent));
        }
        return n2.set(e4, r5), r5;
      }
      return n2.set(e4, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
    default:
      return 0;
    case 5:
    case 12:
      return getConstantType(e4.content, t5);
    case 4:
      return e4.constType;
    case 8:
      let s4 = 3;
      for (let n3 = 0; n3 < e4.children.length; n3++) {
        const r5 = e4.children[n3];
        if (isString(r5) || isSymbol(r5)) continue;
        const o5 = getConstantType(r5, t5);
        if (0 === o5) return 0;
        o5 < s4 && (s4 = o5);
      }
      return s4;
    case 20:
      return 2;
  }
}
function getConstantTypeOfHelperCall(e4, t5) {
  if (14 === e4.type && !isString(e4.callee) && gt.has(e4.callee)) {
    const n2 = e4.arguments[0];
    if (4 === n2.type) return getConstantType(n2, t5);
    if (14 === n2.type) return getConstantTypeOfHelperCall(n2, t5);
  }
  return 0;
}
function getGeneratedPropsConstantType(e4, t5) {
  let n2 = 3;
  const r4 = getNodeProps(e4);
  if (r4 && 15 === r4.type) {
    const { properties: e5 } = r4;
    for (let r5 = 0; r5 < e5.length; r5++) {
      const { key: o4, value: s4 } = e5[r5], i4 = getConstantType(o4, t5);
      if (0 === i4) return i4;
      let a6;
      if (i4 < n2 && (n2 = i4), a6 = 4 === s4.type ? getConstantType(s4, t5) : 14 === s4.type ? getConstantTypeOfHelperCall(s4, t5) : 0, 0 === a6) return a6;
      a6 < n2 && (n2 = a6);
    }
  }
  return n2;
}
function getNodeProps(e4) {
  const t5 = e4.codegenNode;
  if (13 === t5.type) return t5.props;
}
function createTransformContext(e4, { filename: t5 = "", prefixIdentifiers: n2 = false, hoistStatic: r4 = false, hmr: o4 = false, cacheHandlers: s4 = false, nodeTransforms: i4 = [], directiveTransforms: a6 = {}, transformHoist: c4 = null, isBuiltInComponent: l3 = NOOP, isCustomElement: p3 = NOOP, expressionPlugins: d3 = [], scopeId: u3 = null, slotted: h4 = true, ssr: f3 = false, inSSR: m3 = false, ssrCssVars: g4 = "", bindingMetadata: E3 = t, inline: _3 = false, isTS: S3 = false, onError: x4 = defaultOnError, onWarn: v3 = defaultOnWarn, compatConfig: C3 }) {
  const N3 = t5.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), T3 = { filename: t5, selfName: N3 && f(p(N3[1])), prefixIdentifiers: n2, hoistStatic: r4, hmr: o4, cacheHandlers: s4, nodeTransforms: i4, directiveTransforms: a6, transformHoist: c4, isBuiltInComponent: l3, isCustomElement: p3, expressionPlugins: d3, scopeId: u3, slotted: h4, ssr: f3, inSSR: m3, ssrCssVars: g4, bindingMetadata: E3, inline: _3, isTS: S3, onError: x4, onWarn: v3, compatConfig: C3, root: e4, helpers: /* @__PURE__ */ new Map(), components: /* @__PURE__ */ new Set(), directives: /* @__PURE__ */ new Set(), hoists: [], imports: [], cached: [], constantCache: /* @__PURE__ */ new WeakMap(), temps: 0, identifiers: /* @__PURE__ */ Object.create(null), scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 }, parent: null, grandParent: null, currentNode: e4, childIndex: 0, inVOnce: false, helper(e5) {
    const t6 = T3.helpers.get(e5) || 0;
    return T3.helpers.set(e5, t6 + 1), e5;
  }, removeHelper(e5) {
    const t6 = T3.helpers.get(e5);
    if (t6) {
      const n3 = t6 - 1;
      n3 ? T3.helpers.set(e5, n3) : T3.helpers.delete(e5);
    }
  }, helperString: /* @__PURE__ */ __name((e5) => `_${Le[T3.helper(e5)]}`, "helperString"), replaceNode(e5) {
    T3.parent.children[T3.childIndex] = T3.currentNode = e5;
  }, removeNode(e5) {
    const t6 = T3.parent.children, n3 = e5 ? t6.indexOf(e5) : T3.currentNode ? T3.childIndex : -1;
    e5 && e5 !== T3.currentNode ? T3.childIndex > n3 && (T3.childIndex--, T3.onNodeRemoved()) : (T3.currentNode = null, T3.onNodeRemoved()), T3.parent.children.splice(n3, 1);
  }, onNodeRemoved: NOOP, addIdentifiers(e5) {
  }, removeIdentifiers(e5) {
  }, hoist(e5) {
    isString(e5) && (e5 = createSimpleExpression(e5)), T3.hoists.push(e5);
    const t6 = createSimpleExpression(`_hoisted_${T3.hoists.length}`, false, e5.loc, 2);
    return t6.hoisted = e5, t6;
  }, cache(e5, t6 = false, n3 = false) {
    const r5 = createCacheExpression(T3.cached.length, e5, t6, n3);
    return T3.cached.push(r5), r5;
  } };
  return T3.filters = /* @__PURE__ */ new Set(), T3;
}
function transform(e4, t5) {
  const n2 = createTransformContext(e4, t5);
  traverseNode(e4, n2), t5.hoistStatic && cacheStatic(e4, n2), t5.ssr || (function(e5, t6) {
    const { helper: n3 } = t6, { children: r4 } = e5;
    if (1 === r4.length) {
      const n4 = getSingleElementRoot(e5);
      if (n4 && n4.codegenNode) {
        const r5 = n4.codegenNode;
        13 === r5.type && convertToBlock(r5, t6), e5.codegenNode = r5;
      } else e5.codegenNode = r4[0];
    } else if (r4.length > 1) {
      let r5 = 64;
      e5.codegenNode = createVNodeCall(t6, n3(z2), void 0, e5.children, r5, void 0, void 0, true, void 0, false);
    }
  })(e4, n2), e4.helpers = /* @__PURE__ */ new Set([...n2.helpers.keys()]), e4.components = [...n2.components], e4.directives = [...n2.directives], e4.imports = n2.imports, e4.hoists = n2.hoists, e4.temps = n2.temps, e4.cached = n2.cached, e4.transformed = true, e4.filters = [...n2.filters];
}
function traverseNode(e4, t5) {
  t5.currentNode = e4;
  const { nodeTransforms: n2 } = t5, r4 = [];
  for (let o5 = 0; o5 < n2.length; o5++) {
    const s4 = n2[o5](e4, t5);
    if (s4 && (i(s4) ? r4.push(...s4) : r4.push(s4)), !t5.currentNode) return;
    e4 = t5.currentNode;
  }
  switch (e4.type) {
    case 3:
      t5.ssr || t5.helper(oe);
      break;
    case 5:
      t5.ssr || t5.helper(me);
      break;
    case 9:
      for (let n3 = 0; n3 < e4.branches.length; n3++) traverseNode(e4.branches[n3], t5);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      !(function(e5, t6) {
        let n3 = 0;
        const nodeRemoved = /* @__PURE__ */ __name(() => {
          n3--;
        }, "nodeRemoved");
        for (; n3 < e5.children.length; n3++) {
          const r5 = e5.children[n3];
          isString(r5) || (t6.grandParent = t6.parent, t6.parent = e5, t6.childIndex = n3, t6.onNodeRemoved = nodeRemoved, traverseNode(r5, t6));
        }
      })(e4, t5);
  }
  t5.currentNode = e4;
  let o4 = r4.length;
  for (; o4--; ) r4[o4]();
}
function createStructuralDirectiveTransform(e4, t5) {
  const n2 = isString(e4) ? (t6) => t6 === e4 : (t6) => e4.test(t6);
  return (e5, r4) => {
    if (1 === e5.type) {
      const { props: o4 } = e5;
      if (3 === e5.tagType && o4.some(isVSlot)) return;
      const s4 = [];
      for (let i4 = 0; i4 < o4.length; i4++) {
        const a6 = o4[i4];
        if (7 === a6.type && n2(a6.name)) {
          o4.splice(i4, 1), i4--;
          const n3 = t5(e5, a6, r4);
          n3 && s4.push(n3);
        }
      }
      return s4;
    }
  };
}
function generate(e4, t5 = {}) {
  const n2 = (function(e5, { mode: t6 = "function", prefixIdentifiers: n3 = "module" === t6, sourceMap: r5 = false, filename: o5 = "template.vue.html", scopeId: s5 = null, optimizeImports: i5 = false, runtimeGlobalName: a7 = "Vue", runtimeModuleName: c5 = "vue", ssrRuntimeModuleName: l4 = "vue/server-renderer", ssr: p4 = false, isTS: d4 = false, inSSR: u4 = false }) {
    const h5 = { mode: t6, prefixIdentifiers: n3, sourceMap: r5, filename: o5, scopeId: s5, optimizeImports: i5, runtimeGlobalName: a7, runtimeModuleName: c5, ssrRuntimeModuleName: l4, ssr: p4, isTS: d4, inSSR: u4, source: e5.source, code: "", column: 1, line: 1, offset: 0, indentLevel: 0, pure: false, map: void 0, helper: /* @__PURE__ */ __name((e6) => `_${Le[e6]}`, "helper"), push(e6, t7 = -2, n4) {
      h5.code += e6;
    }, indent() {
      newline(++h5.indentLevel);
    }, deindent(e6 = false) {
      e6 ? --h5.indentLevel : newline(--h5.indentLevel);
    }, newline() {
      newline(h5.indentLevel);
    } };
    function newline(e6) {
      h5.push("\n" + "  ".repeat(e6), 0);
    }
    __name(newline, "newline");
    return h5;
  })(e4, t5);
  t5.onContextCreated && t5.onContextCreated(n2);
  const { mode: r4, push: o4, prefixIdentifiers: s4, indent: i4, deindent: a6, newline: c4, scopeId: l3, ssr: p3 } = n2, d3 = Array.from(e4.helpers), u3 = d3.length > 0, h4 = !s4 && "module" !== r4;
  !(function(e5, t6) {
    const { ssr: n3, prefixIdentifiers: r5, push: o5, newline: s5, runtimeModuleName: i5, runtimeGlobalName: a7, ssrRuntimeModuleName: c5 } = t6, l4 = a7, p4 = Array.from(e5.helpers);
    if (p4.length > 0 && (o5(`const _Vue = ${l4}
`, -1), e5.hoists.length)) {
      o5(`const { ${[ne, re, oe, se, ie].filter((e6) => p4.includes(e6)).map(aliasHelper).join(", ")} } = _Vue
`, -1);
    }
    (function(e6, t7) {
      if (!e6.length) return;
      t7.pure = true;
      const { push: n4, newline: r6 } = t7;
      r6();
      for (let o6 = 0; o6 < e6.length; o6++) {
        const s6 = e6[o6];
        s6 && (n4(`const _hoisted_${o6 + 1} = `), genNode(s6, t7), r6());
      }
      t7.pure = false;
    })(e5.hoists, t6), s5(), o5("return ");
  })(e4, n2);
  if (o4(`function ${p3 ? "ssrRender" : "render"}(${(p3 ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ")}) {`), i4(), h4 && (o4("with (_ctx) {"), i4(), u3 && (o4(`const { ${d3.map(aliasHelper).join(", ")} } = _Vue
`, -1), c4())), e4.components.length && (genAssets(e4.components, "component", n2), (e4.directives.length || e4.temps > 0) && c4()), e4.directives.length && (genAssets(e4.directives, "directive", n2), e4.temps > 0 && c4()), e4.filters && e4.filters.length && (c4(), genAssets(e4.filters, "filter", n2), c4()), e4.temps > 0) {
    o4("let ");
    for (let t6 = 0; t6 < e4.temps; t6++) o4(`${t6 > 0 ? ", " : ""}_temp${t6}`);
  }
  return (e4.components.length || e4.directives.length || e4.temps) && (o4("\n", 0), c4()), p3 || o4("return "), e4.codegenNode ? genNode(e4.codegenNode, n2) : o4("null"), h4 && (a6(), o4("}")), a6(), o4("}"), { ast: e4, code: n2.code, preamble: "", map: n2.map ? n2.map.toJSON() : void 0 };
}
function genAssets(e4, t5, { helper: n2, push: r4, newline: o4, isTS: s4 }) {
  const i4 = n2("filter" === t5 ? pe : "component" === t5 ? ae : le);
  for (let n3 = 0; n3 < e4.length; n3++) {
    let a6 = e4[n3];
    const c4 = a6.endsWith("__self");
    c4 && (a6 = a6.slice(0, -6)), r4(`const ${toValidAssetId(a6, t5)} = ${i4}(${JSON.stringify(a6)}${c4 ? ", true" : ""})${s4 ? "!" : ""}`), n3 < e4.length - 1 && o4();
  }
}
function genNodeListAsArray(e4, t5) {
  const n2 = e4.length > 3 || false;
  t5.push("["), n2 && t5.indent(), genNodeList(e4, t5, n2), n2 && t5.deindent(), t5.push("]");
}
function genNodeList(e4, t5, n2 = false, r4 = true) {
  const { push: o4, newline: s4 } = t5;
  for (let i4 = 0; i4 < e4.length; i4++) {
    const a6 = e4[i4];
    isString(a6) ? o4(a6, -3) : i(a6) ? genNodeListAsArray(a6, t5) : genNode(a6, t5), i4 < e4.length - 1 && (n2 ? (r4 && o4(","), s4()) : r4 && o4(", "));
  }
}
function genNode(e4, t5) {
  if (isString(e4)) t5.push(e4, -3);
  else if (isSymbol(e4)) t5.push(t5.helper(e4));
  else switch (e4.type) {
    case 1:
    case 9:
    case 11:
    case 12:
      genNode(e4.codegenNode, t5);
      break;
    case 2:
      !(function(e5, t6) {
        t6.push(JSON.stringify(e5.content), -3, e5);
      })(e4, t5);
      break;
    case 4:
      genExpression(e4, t5);
      break;
    case 5:
      !(function(e5, t6) {
        const { push: n2, helper: r4, pure: o4 } = t6;
        o4 && n2(Et);
        n2(`${r4(me)}(`), genNode(e5.content, t6), n2(")");
      })(e4, t5);
      break;
    case 8:
      genCompoundExpression(e4, t5);
      break;
    case 3:
      !(function(e5, t6) {
        const { push: n2, helper: r4, pure: o4 } = t6;
        o4 && n2(Et);
        n2(`${r4(oe)}(${JSON.stringify(e5.content)})`, -3, e5);
      })(e4, t5);
      break;
    case 13:
      !(function(e5, t6) {
        const { push: n2, helper: r4, pure: o4 } = t6, { tag: s4, props: i4, children: a6, patchFlag: c4, dynamicProps: l3, directives: p3, isBlock: d3, disableTracking: u3, isComponent: h4 } = e5;
        let f3;
        c4 && (f3 = String(c4));
        p3 && n2(r4(de) + "(");
        d3 && n2(`(${r4(Q)}(${u3 ? "true" : ""}), `);
        o4 && n2(Et);
        const m3 = d3 ? getVNodeBlockHelper(t6.inSSR, h4) : getVNodeHelper(t6.inSSR, h4);
        n2(r4(m3) + "(", -2, e5), genNodeList((function(e6) {
          let t7 = e6.length;
          for (; t7-- && null == e6[t7]; ) ;
          return e6.slice(0, t7 + 1).map((e7) => e7 || "null");
        })([s4, i4, a6, f3, l3]), t6), n2(")"), d3 && n2(")");
        p3 && (n2(", "), genNode(p3, t6), n2(")"));
      })(e4, t5);
      break;
    case 14:
      !(function(e5, t6) {
        const { push: n2, helper: r4, pure: o4 } = t6, s4 = isString(e5.callee) ? e5.callee : r4(e5.callee);
        o4 && n2(Et);
        n2(s4 + "(", -2, e5), genNodeList(e5.arguments, t6), n2(")");
      })(e4, t5);
      break;
    case 15:
      !(function(e5, t6) {
        const { push: n2, indent: r4, deindent: o4, newline: s4 } = t6, { properties: i4 } = e5;
        if (!i4.length) return void n2("{}", -2, e5);
        const a6 = i4.length > 1 || false;
        n2(a6 ? "{" : "{ "), a6 && r4();
        for (let e6 = 0; e6 < i4.length; e6++) {
          const { key: r5, value: o5 } = i4[e6];
          genExpressionAsPropertyKey(r5, t6), n2(": "), genNode(o5, t6), e6 < i4.length - 1 && (n2(","), s4());
        }
        a6 && o4(), n2(a6 ? "}" : " }");
      })(e4, t5);
      break;
    case 17:
      !(function(e5, t6) {
        genNodeListAsArray(e5.elements, t6);
      })(e4, t5);
      break;
    case 18:
      !(function(e5, t6) {
        const { push: n2, indent: r4, deindent: o4 } = t6, { params: s4, returns: i4, body: a6, newline: c4, isSlot: l3 } = e5;
        l3 && n2(`_${Le[Oe]}(`);
        n2("(", -2, e5), i(s4) ? genNodeList(s4, t6) : s4 && genNode(s4, t6);
        n2(") => "), (c4 || a6) && (n2("{"), r4());
        i4 ? (c4 && n2("return "), i(i4) ? genNodeListAsArray(i4, t6) : genNode(i4, t6)) : a6 && genNode(a6, t6);
        (c4 || a6) && (o4(), n2("}"));
        l3 && (e5.isNonScopedSlot && n2(", undefined, true"), n2(")"));
      })(e4, t5);
      break;
    case 19:
      !(function(e5, t6) {
        const { test: n2, consequent: r4, alternate: o4, newline: s4 } = e5, { push: i4, indent: a6, deindent: c4, newline: l3 } = t6;
        if (4 === n2.type) {
          const e6 = !isSimpleIdentifier(n2.content);
          e6 && i4("("), genExpression(n2, t6), e6 && i4(")");
        } else i4("("), genNode(n2, t6), i4(")");
        s4 && a6(), t6.indentLevel++, s4 || i4(" "), i4("? "), genNode(r4, t6), t6.indentLevel--, s4 && l3(), s4 || i4(" "), i4(": ");
        const p3 = 19 === o4.type;
        p3 || t6.indentLevel++;
        genNode(o4, t6), p3 || t6.indentLevel--;
        s4 && c4(true);
      })(e4, t5);
      break;
    case 20:
      !(function(e5, t6) {
        const { push: n2, helper: r4, indent: o4, deindent: s4, newline: i4 } = t6, { needPauseTracking: a6, needArraySpread: c4 } = e5;
        c4 && n2("[...(");
        n2(`_cache[${e5.index}] || (`), a6 && (o4(), n2(`${r4(Te)}(-1`), e5.inVOnce && n2(", true"), n2("),"), i4(), n2("("));
        n2(`_cache[${e5.index}] = `), genNode(e5.value, t6), a6 && (n2(`).cacheIndex = ${e5.index},`), i4(), n2(`${r4(Te)}(1),`), i4(), n2(`_cache[${e5.index}]`), s4());
        n2(")"), c4 && n2(")]");
      })(e4, t5);
      break;
    case 21:
      genNodeList(e4.body, t5, true, false);
  }
}
function genExpression(e4, t5) {
  const { content: n2, isStatic: r4 } = e4;
  t5.push(r4 ? JSON.stringify(n2) : n2, -3, e4);
}
function genCompoundExpression(e4, t5) {
  for (let n2 = 0; n2 < e4.children.length; n2++) {
    const r4 = e4.children[n2];
    isString(r4) ? t5.push(r4, -3) : genNode(r4, t5);
  }
}
function genExpressionAsPropertyKey(e4, t5) {
  const { push: n2 } = t5;
  if (8 === e4.type) n2("["), genCompoundExpression(e4, t5), n2("]");
  else if (e4.isStatic) {
    n2(isSimpleIdentifier(e4.content) ? e4.content : JSON.stringify(e4.content), -2, e4);
  } else n2(`[${e4.content}]`, -3, e4);
}
function processExpression(e4, t5, n2 = false, r4 = false, o4 = Object.create(t5.identifiers)) {
  return e4;
}
function processIf(e4, t5, n2, r4) {
  if (!("else" === t5.name || t5.exp && t5.exp.content.trim())) {
    const r5 = t5.exp ? t5.exp.loc : e4.loc;
    n2.onError(createCompilerError(28, t5.loc)), t5.exp = createSimpleExpression("true", false, r5);
  }
  if ("if" === t5.name) {
    const s4 = createIfBranch(e4, t5), i4 = { type: 9, loc: (o4 = e4.loc, getLoc(o4.start.offset, o4.end.offset)), branches: [s4] };
    if (n2.replaceNode(i4), r4) return r4(i4, s4, true);
  } else {
    const o5 = n2.parent.children;
    let s4 = o5.indexOf(e4);
    for (; s4-- >= -1; ) {
      const i4 = o5[s4];
      if (!i4 || !isCommentOrWhitespace(i4)) {
        if (i4 && 9 === i4.type) {
          "else-if" !== t5.name && "else" !== t5.name || void 0 !== i4.branches[i4.branches.length - 1].condition || n2.onError(createCompilerError(30, e4.loc)), n2.removeNode();
          const o6 = createIfBranch(e4, t5);
          i4.branches.push(o6);
          const s5 = r4 && r4(i4, o6, false);
          traverseNode(o6, n2), s5 && s5(), n2.currentNode = null;
        } else n2.onError(createCompilerError(30, e4.loc));
        break;
      }
      n2.removeNode(i4);
    }
  }
  var o4;
}
function createIfBranch(e4, t5) {
  const n2 = 3 === e4.tagType;
  return { type: 10, loc: e4.loc, condition: "else" === t5.name ? void 0 : t5.exp, children: n2 && !findDir(e4, "for") ? e4.children : [e4], userKey: findProp(e4, "key"), isTemplateIf: n2 };
}
function createCodegenNodeForBranch(e4, t5, n2) {
  return e4.condition ? createConditionalExpression(e4.condition, createChildrenCodegenNode(e4, t5, n2), createCallExpression(n2.helper(oe), ['""', "true"])) : createChildrenCodegenNode(e4, t5, n2);
}
function createChildrenCodegenNode(e4, t5, n2) {
  const { helper: r4 } = n2, o4 = createObjectProperty("key", createSimpleExpression(`${t5}`, false, ke, 2)), { children: s4 } = e4, i4 = s4[0];
  if (1 !== s4.length || 1 !== i4.type) {
    if (1 === s4.length && 11 === i4.type) {
      const e5 = i4.codegenNode;
      return injectProp(e5, o4, n2), e5;
    }
    {
      let t6 = 64;
      return createVNodeCall(n2, r4(z2), createObjectExpression([o4]), s4, t6, void 0, void 0, true, false, false, e4.loc);
    }
  }
  {
    const e5 = i4.codegenNode, t6 = getMemoedVNodeCall(e5);
    return 13 === t6.type && convertToBlock(t6, n2), injectProp(t6, o4, n2), e5;
  }
}
function processFor(e4, t5, n2, r4) {
  if (!t5.exp) return void n2.onError(createCompilerError(31, t5.loc));
  const o4 = t5.forParseResult;
  if (!o4) return void n2.onError(createCompilerError(32, t5.loc));
  finalizeForParseResult(o4);
  const { addIdentifiers: s4, removeIdentifiers: i4, scopes: a6 } = n2, { source: c4, value: l3, key: p3, index: d3 } = o4, u3 = { type: 11, loc: t5.loc, source: c4, valueAlias: l3, keyAlias: p3, objectIndexAlias: d3, parseResult: o4, children: isTemplateNode(e4) ? e4.children : [e4] };
  n2.replaceNode(u3), a6.vFor++;
  const h4 = r4 && r4(u3);
  return () => {
    a6.vFor--, h4 && h4();
  };
}
function finalizeForParseResult(e4, t5) {
  e4.finalized || (e4.finalized = true);
}
function createForLoopParams({ value: e4, key: t5, index: n2 }, r4 = []) {
  return (function(e5) {
    let t6 = e5.length;
    for (; t6-- && !e5[t6]; ) ;
    return e5.slice(0, t6 + 1).map((e6, t7) => e6 || createSimpleExpression("_".repeat(t7 + 1), false));
  })([e4, t5, n2, ...r4]);
}
function buildSlots(e4, t5, n2 = buildClientSlotFn) {
  t5.helper(Oe);
  const { children: r4, loc: o4 } = e4, s4 = [], i4 = [];
  let a6 = t5.scopes.vSlot > 0 || t5.scopes.vFor > 0;
  const c4 = findDir(e4, "slot", true);
  if (c4) {
    const { arg: e5, exp: t6 } = c4;
    e5 && !isStaticExp(e5) && (a6 = true), s4.push(createObjectProperty(e5 || createSimpleExpression("default", true), n2(t6, void 0, r4, o4)));
  }
  let l3 = false, p3 = false;
  const d3 = [], u3 = /* @__PURE__ */ new Set();
  let h4 = 0;
  for (let e5 = 0; e5 < r4.length; e5++) {
    const o5 = r4[e5];
    let f4;
    if (!isTemplateNode(o5) || !(f4 = findDir(o5, "slot", true))) {
      3 !== o5.type && d3.push(o5);
      continue;
    }
    if (c4) {
      t5.onError(createCompilerError(37, f4.loc));
      break;
    }
    l3 = true;
    const { children: m4, loc: g4 } = o5, { arg: E3 = createSimpleExpression("default", true), exp: _3, loc: S3 } = f4;
    let x4;
    isStaticExp(E3) ? x4 = E3 ? E3.content : "default" : a6 = true;
    const v3 = findDir(o5, "for"), C3 = n2(_3, v3, m4, g4);
    let N3, y4;
    if (N3 = findDir(o5, "if")) a6 = true, i4.push(createConditionalExpression(N3.exp, buildDynamicSlot(E3, C3, h4++), xt));
    else if (y4 = findDir(o5, /^else(?:-if)?$/, true)) {
      let n3, o6 = e5;
      for (; o6-- && (n3 = r4[o6], isCommentOrWhitespace(n3)); ) ;
      if (n3 && isTemplateNode(n3) && findDir(n3, /^(?:else-)?if$/)) {
        let e6 = i4[i4.length - 1];
        for (; 19 === e6.alternate.type; ) e6 = e6.alternate;
        e6.alternate = y4.exp ? createConditionalExpression(y4.exp, buildDynamicSlot(E3, C3, h4++), xt) : buildDynamicSlot(E3, C3, h4++);
      } else t5.onError(createCompilerError(30, y4.loc));
    } else if (v3) {
      a6 = true;
      const e6 = v3.forParseResult;
      e6 ? (finalizeForParseResult(e6), i4.push(createCallExpression(t5.helper(ue), [e6.source, createFunctionExpression(createForLoopParams(e6), buildDynamicSlot(E3, C3), true)]))) : t5.onError(createCompilerError(32, v3.loc));
    } else {
      if (x4) {
        if (u3.has(x4)) {
          t5.onError(createCompilerError(38, S3));
          continue;
        }
        u3.add(x4), "default" === x4 && (p3 = true);
      }
      s4.push(createObjectProperty(E3, C3));
    }
  }
  if (!c4) {
    const buildDefaultSlotProperty = /* @__PURE__ */ __name((e5, r5) => {
      const s5 = n2(e5, void 0, r5, o4);
      return t5.compatConfig && (s5.isNonScopedSlot = true), createObjectProperty("default", s5);
    }, "buildDefaultSlotProperty");
    l3 ? d3.length && !d3.every(isWhitespaceText) && (p3 ? t5.onError(createCompilerError(39, d3[0].loc)) : s4.push(buildDefaultSlotProperty(void 0, d3))) : s4.push(buildDefaultSlotProperty(void 0, r4));
  }
  const f3 = a6 ? 2 : hasForwardedSlots(e4.children) ? 3 : 1;
  let m3 = createObjectExpression(s4.concat(createObjectProperty("_", createSimpleExpression(f3 + "", false))), o4);
  return i4.length && (m3 = createCallExpression(t5.helper(fe), [m3, createArrayExpression(i4)])), { slots: m3, hasDynamicSlots: a6 };
}
function buildDynamicSlot(e4, t5, n2) {
  const r4 = [createObjectProperty("name", e4), createObjectProperty("fn", t5)];
  return null != n2 && r4.push(createObjectProperty("key", createSimpleExpression(String(n2), true))), createObjectExpression(r4);
}
function hasForwardedSlots(e4) {
  for (let t5 = 0; t5 < e4.length; t5++) {
    const n2 = e4[t5];
    switch (n2.type) {
      case 1:
        if (2 === n2.tagType || hasForwardedSlots(n2.children)) return true;
        break;
      case 9:
        if (hasForwardedSlots(n2.branches)) return true;
        break;
      case 10:
      case 11:
        if (hasForwardedSlots(n2.children)) return true;
    }
  }
  return false;
}
function resolveComponentType(e4, t5, n2 = false) {
  let { tag: r4 } = e4;
  const o4 = isComponentTag(r4), s4 = findProp(e4, "is", false, true);
  if (s4) if (o4 || isCompatEnabled("COMPILER_IS_ON_ELEMENT", t5)) {
    let e5;
    if (6 === s4.type ? e5 = s4.value && createSimpleExpression(s4.value.content, true) : (e5 = s4.exp, e5 || (e5 = createSimpleExpression("is", false, s4.arg.loc))), e5) return createCallExpression(t5.helper(ce), [e5]);
  } else 6 === s4.type && s4.value.content.startsWith("vue:") && (r4 = s4.value.content.slice(4));
  const i4 = isCoreComponent(r4) || t5.isBuiltInComponent(r4);
  return i4 ? (n2 || t5.helper(i4), i4) : (t5.helper(ae), t5.components.add(r4), toValidAssetId(r4, "component"));
}
function buildProps(e4, t5, n2 = e4.props, r4, o4, s4 = false) {
  const { tag: i4, loc: a6, children: c4 } = e4;
  let l3 = [];
  const p3 = [], d3 = [], u3 = c4.length > 0;
  let h4 = false, f3 = 0, m3 = false, g4 = false, E3 = false, _3 = false, S3 = false, x4 = false;
  const v3 = [], pushMergeArg = /* @__PURE__ */ __name((e5) => {
    l3.length && (p3.push(createObjectExpression(dedupeProperties(l3), a6)), l3 = []), e5 && p3.push(e5);
  }, "pushMergeArg"), pushRefVForMarker = /* @__PURE__ */ __name(() => {
    t5.scopes.vFor > 0 && l3.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
  }, "pushRefVForMarker"), analyzePatchFlag = /* @__PURE__ */ __name(({ key: e5, value: n3 }) => {
    if (isStaticExp(e5)) {
      const s5 = e5.content, i5 = isOn(s5);
      if (!i5 || r4 && !o4 || "onclick" === s5.toLowerCase() || "onUpdate:modelValue" === s5 || s(s5) || (_3 = true), i5 && s(s5) && (x4 = true), i5 && 14 === n3.type && (n3 = n3.arguments[0]), 20 === n3.type || (4 === n3.type || 8 === n3.type) && getConstantType(n3, t5) > 0) return;
      "ref" === s5 ? m3 = true : "class" === s5 ? g4 = true : "style" === s5 ? E3 = true : "key" === s5 || v3.includes(s5) || v3.push(s5), !r4 || "class" !== s5 && "style" !== s5 || v3.includes(s5) || v3.push(s5);
    } else S3 = true;
  }, "analyzePatchFlag");
  for (let o5 = 0; o5 < n2.length; o5++) {
    const c5 = n2[o5];
    if (6 === c5.type) {
      const { loc: e5, name: n3, nameLoc: r5, value: o6 } = c5;
      let s5 = true;
      if ("ref" === n3 && (m3 = true, pushRefVForMarker()), "is" === n3 && (isComponentTag(i4) || o6 && o6.content.startsWith("vue:") || isCompatEnabled("COMPILER_IS_ON_ELEMENT", t5))) continue;
      l3.push(createObjectProperty(createSimpleExpression(n3, true, r5), createSimpleExpression(o6 ? o6.content : "", s5, o6 ? o6.loc : e5)));
    } else {
      const { name: n3, arg: o6, exp: m4, loc: g5, modifiers: E4 } = c5, _4 = "bind" === n3, x5 = "on" === n3;
      if ("slot" === n3) {
        r4 || t5.onError(createCompilerError(40, g5));
        continue;
      }
      if ("once" === n3 || "memo" === n3) continue;
      if ("is" === n3 || _4 && isStaticArgOf(o6, "is") && (isComponentTag(i4) || isCompatEnabled("COMPILER_IS_ON_ELEMENT", t5))) continue;
      if (x5 && s4) continue;
      if ((_4 && isStaticArgOf(o6, "key") || x5 && u3 && isStaticArgOf(o6, "vue:before-update")) && (h4 = true), _4 && isStaticArgOf(o6, "ref") && pushRefVForMarker(), !o6 && (_4 || x5)) {
        if (S3 = true, m4) if (_4) {
          if (pushMergeArg(), isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER", t5)) {
            p3.unshift(m4);
            continue;
          }
          pushRefVForMarker(), pushMergeArg(), p3.push(m4);
        } else pushMergeArg({ type: 14, loc: g5, callee: t5.helper(ve), arguments: r4 ? [m4] : [m4, "true"] });
        else t5.onError(createCompilerError(_4 ? 34 : 35, g5));
        continue;
      }
      _4 && E4.some((e5) => "prop" === e5.content) && (f3 |= 32);
      const v4 = t5.directiveTransforms[n3];
      if (v4) {
        const { props: n4, needRuntime: r5 } = v4(c5, e4, t5);
        !s4 && n4.forEach(analyzePatchFlag), x5 && o6 && !isStaticExp(o6) ? pushMergeArg(createObjectExpression(n4, a6)) : l3.push(...n4), r5 && (d3.push(c5), isSymbol(r5) && vt.set(c5, r5));
      } else l(n3) || (d3.push(c5), u3 && (h4 = true));
    }
  }
  let C3;
  if (p3.length ? (pushMergeArg(), C3 = p3.length > 1 ? createCallExpression(t5.helper(ge), p3, a6) : p3[0]) : l3.length && (C3 = createObjectExpression(dedupeProperties(l3), a6)), S3 ? f3 |= 16 : (g4 && !r4 && (f3 |= 2), E3 && !r4 && (f3 |= 4), v3.length && (f3 |= 8), _3 && (f3 |= 32)), h4 || 0 !== f3 && 32 !== f3 || !(m3 || x4 || d3.length > 0) || (f3 |= 512), !t5.inSSR && C3) switch (C3.type) {
    case 15:
      let e5 = -1, n3 = -1, r5 = false;
      for (let t6 = 0; t6 < C3.properties.length; t6++) {
        const o6 = C3.properties[t6].key;
        isStaticExp(o6) ? "class" === o6.content ? e5 = t6 : "style" === o6.content && (n3 = t6) : o6.isHandlerKey || (r5 = true);
      }
      const o5 = C3.properties[e5], s5 = C3.properties[n3];
      r5 ? C3 = createCallExpression(t5.helper(Se), [C3]) : (o5 && !isStaticExp(o5.value) && (o5.value = createCallExpression(t5.helper(Ee), [o5.value])), s5 && (E3 || 4 === s5.value.type && "[" === s5.value.content.trim()[0] || 17 === s5.value.type) && (s5.value = createCallExpression(t5.helper(_e), [s5.value])));
      break;
    case 14:
      break;
    default:
      C3 = createCallExpression(t5.helper(Se), [createCallExpression(t5.helper(xe), [C3])]);
  }
  return { props: C3, directives: d3, patchFlag: f3, dynamicPropNames: v3, shouldUseBlock: h4 };
}
function dedupeProperties(e4) {
  const t5 = /* @__PURE__ */ new Map(), n2 = [];
  for (let r4 = 0; r4 < e4.length; r4++) {
    const o4 = e4[r4];
    if (8 === o4.key.type || !o4.key.isStatic) {
      n2.push(o4);
      continue;
    }
    const s4 = o4.key.content, i4 = t5.get(s4);
    i4 ? ("style" === s4 || "class" === s4 || isOn(s4)) && mergeAsArray(i4, o4) : (t5.set(s4, o4), n2.push(o4));
  }
  return n2;
}
function mergeAsArray(e4, t5) {
  17 === e4.value.type ? e4.value.elements.push(t5.value) : e4.value = createArrayExpression([e4.value, t5.value], e4.loc);
}
function buildDirectiveArgs(e4, t5) {
  const n2 = [], r4 = vt.get(e4);
  r4 ? n2.push(t5.helperString(r4)) : (t5.helper(le), t5.directives.add(e4.name), n2.push(toValidAssetId(e4.name, "directive")));
  const { loc: o4 } = e4;
  if (e4.exp && n2.push(e4.exp), e4.arg && (e4.exp || n2.push("void 0"), n2.push(e4.arg)), Object.keys(e4.modifiers).length) {
    e4.arg || (e4.exp || n2.push("void 0"), n2.push("void 0"));
    const t6 = createSimpleExpression("true", false, o4);
    n2.push(createObjectExpression(e4.modifiers.map((e5) => createObjectProperty(e5, t6)), o4));
  }
  return createArrayExpression(n2, e4.loc);
}
function isComponentTag(e4) {
  return "component" === e4 || "Component" === e4;
}
function processSlotOutlet(e4, t5) {
  let n2, r4 = '"default"';
  const o4 = [];
  for (let t6 = 0; t6 < e4.props.length; t6++) {
    const n3 = e4.props[t6];
    if (6 === n3.type) n3.value && ("name" === n3.name ? r4 = JSON.stringify(n3.value.content) : (n3.name = p(n3.name), o4.push(n3)));
    else if ("bind" === n3.name && isStaticArgOf(n3.arg, "name")) {
      if (n3.exp) r4 = n3.exp;
      else if (n3.arg && 4 === n3.arg.type) {
        const e5 = p(n3.arg.content);
        r4 = n3.exp = createSimpleExpression(e5, false, n3.arg.loc);
      }
    } else "bind" === n3.name && n3.arg && isStaticExp(n3.arg) && (n3.arg.content = p(n3.arg.content)), o4.push(n3);
  }
  if (o4.length > 0) {
    const { props: r5, directives: s4 } = buildProps(e4, t5, o4, false, false);
    n2 = r5, s4.length && t5.onError(createCompilerError(36, s4[0].loc));
  }
  return { slotName: r4, slotProps: n2 };
}
function createTransformProps(e4 = []) {
  return { props: e4 };
}
function rewriteFilter(e4, t5) {
  if (4 === e4.type) parseFilter(e4, t5);
  else for (let n2 = 0; n2 < e4.children.length; n2++) {
    const r4 = e4.children[n2];
    "object" == typeof r4 && (4 === r4.type ? parseFilter(r4, t5) : 8 === r4.type ? rewriteFilter(e4, t5) : 5 === r4.type && rewriteFilter(r4.content, t5));
  }
}
function parseFilter(e4, t5) {
  const n2 = e4.content;
  let r4, o4, s4, i4, a6 = false, c4 = false, l3 = false, p3 = false, d3 = 0, u3 = 0, h4 = 0, f3 = 0, m3 = [];
  for (s4 = 0; s4 < n2.length; s4++) if (o4 = r4, r4 = n2.charCodeAt(s4), a6) 39 === r4 && 92 !== o4 && (a6 = false);
  else if (c4) 34 === r4 && 92 !== o4 && (c4 = false);
  else if (l3) 96 === r4 && 92 !== o4 && (l3 = false);
  else if (p3) 47 === r4 && 92 !== o4 && (p3 = false);
  else if (124 !== r4 || 124 === n2.charCodeAt(s4 + 1) || 124 === n2.charCodeAt(s4 - 1) || d3 || u3 || h4) {
    switch (r4) {
      case 34:
        c4 = true;
        break;
      case 39:
        a6 = true;
        break;
      case 96:
        l3 = true;
        break;
      case 40:
        h4++;
        break;
      case 41:
        h4--;
        break;
      case 91:
        u3++;
        break;
      case 93:
        u3--;
        break;
      case 123:
        d3++;
        break;
      case 125:
        d3--;
    }
    if (47 === r4) {
      let e5, t6 = s4 - 1;
      for (; t6 >= 0 && (e5 = n2.charAt(t6), " " === e5); t6--) ;
      e5 && Nt.test(e5) || (p3 = true);
    }
  } else void 0 === i4 ? (f3 = s4 + 1, i4 = n2.slice(0, s4).trim()) : pushFilter();
  function pushFilter() {
    m3.push(n2.slice(f3, s4).trim()), f3 = s4 + 1;
  }
  __name(pushFilter, "pushFilter");
  if (void 0 === i4 ? i4 = n2.slice(0, s4).trim() : 0 !== f3 && pushFilter(), m3.length) {
    for (s4 = 0; s4 < m3.length; s4++) i4 = wrapFilter(i4, m3[s4], t5);
    e4.content = i4, e4.ast = void 0;
  }
}
function wrapFilter(e4, t5, n2) {
  n2.helper(pe);
  const r4 = t5.indexOf("(");
  if (r4 < 0) return n2.filters.add(t5), `${toValidAssetId(t5, "filter")}(${e4})`;
  {
    const o4 = t5.slice(0, r4), s4 = t5.slice(r4 + 1);
    return n2.filters.add(o4), `${toValidAssetId(o4, "filter")}(${e4}${")" !== s4 ? "," + s4 : s4}`;
  }
}
function getBaseTransformPreset(e4) {
  return [[transformVBindShorthand, transformOnce, _t, transformMemo, St, transformFilter, transformSlotOutlet, transformElement, trackSlotScopes, transformText], { on: transformOn$1, bind: transformBind, model: transformModel$1 }];
}
function baseCompile(e4, t5 = {}) {
  const n2 = t5.onError || defaultOnError, r4 = "module" === t5.mode;
  true === t5.prefixIdentifiers ? n2(createCompilerError(47)) : r4 && n2(createCompilerError(48));
  t5.cacheHandlers && n2(createCompilerError(49)), t5.scopeId && !r4 && n2(createCompilerError(50));
  const o4 = n({}, t5, { prefixIdentifiers: false }), s4 = isString(e4) ? baseParse(e4, o4) : e4, [i4, a6] = getBaseTransformPreset();
  return transform(s4, n({}, o4, { nodeTransforms: [...i4, ...t5.nodeTransforms || []], directiveTransforms: n({}, a6, t5.directiveTransforms || {}) })), generate(s4, o4);
}
function createDOMCompilerError(e4, t5) {
  return createCompilerError(e4, t5);
}
function getNuxtAppCtx(e4 = qt) {
  return getContext(e4, { asyncContext: false });
}
function registerPluginHooks(e4, t5) {
  t5.hooks && e4.hooks.addHooks(t5.hooks);
}
function defineNuxtPlugin(e4) {
  if ("function" == typeof e4) return e4;
  const t5 = e4._name || e4.name;
  return delete e4.name, Object.assign(e4.setup || (() => {
  }), e4, { [zt]: true, _name: t5 });
}
function callWithNuxt(e4, t5, n2) {
  const fn2 = /* @__PURE__ */ __name(() => t5(), "fn"), r4 = getNuxtAppCtx(e4._id);
  return e4.vueApp.runWithContext(() => r4.callAsync(e4, fn2));
}
function useNuxtApp(e4) {
  const t5 = (function(e5) {
    let t6;
    return Wt.hasInjectionContext() && (t6 = Wt.getCurrentInstance()?.appContext.app.$nuxt), t6 ||= getNuxtAppCtx(e5).tryUse(), t6 || null;
  })(e4);
  if (!t5) throw new Error("[nuxt] instance unavailable");
  return t5;
}
function useRuntimeConfig(e4) {
  return useNuxtApp().$config;
}
function defineGetter(e4, t5, n2) {
  Object.defineProperty(e4, t5, { get: /* @__PURE__ */ __name(() => n2, "get") });
}
function defineNuxtRouteMiddleware(e4) {
  return e4;
}
function resolveRouteObject(e4) {
  return withQuery(e4.path || "", e4.query || {}) + (e4.hash || "");
}
function getRouteFromPath(e4) {
  const t5 = e4 && "object" == typeof e4 ? e4 : {};
  "object" == typeof e4 && (e4 = stringifyParsedURL({ pathname: e4.path || "", search: stringifyQuery(e4.query || {}), hash: e4.hash || "" }));
  const n2 = new URL(e4.toString(), "http://localhost");
  return { path: n2.pathname, fullPath: e4, query: parseQuery(n2.search), hash: n2.hash, params: t5.params || {}, name: void 0, matched: t5.matched || [], redirectedFrom: void 0, meta: t5.meta || {}, href: e4 };
}
function useHead(e4, t5 = {}) {
  const n2 = t5.head || (function(e5) {
    const t6 = e5 || useNuxtApp();
    return t6.ssrContext?.head || t6.runWithContext(() => {
      if (Wt.hasInjectionContext()) {
        const e6 = Wt.inject(mr);
        if (!e6) throw new Error("[nuxt] [unhead] Missing Unhead instance.");
        return e6;
      }
    });
  })(t5.nuxt);
  return useHead2(e4, { head: n2, ...t5 });
}
function definePayloadReducer(e4, t5) {
  useNuxtApp().ssrContext._payloadReducers[e4] = t5;
}
var G, q, z2, J, K, Y, Z, Q, ee, te, ne, re, oe, se, ie, ae, ce, le, pe, de, ue, he, fe, me, ge, Ee, _e, Se, xe, ve, Ce, Ne, ye, Te, be, Ie, Oe, Ae, Re, we, Pe, Le, ke, Me, De, Ve, Fe, He, isStaticProperty, Xe, isStaticExp, Be, isSimpleIdentifier, Ue, je, $e, getExpSource, isMemberExpressionBrowser, We, Ge, qe, isFnExpressionBrowser, ze, Je, Ke, Ye, Ze, Qe, et, tt, nt, rt, ot, st, it, at, ct, lt, pt, dt, ut, ht, ft, mt, gt, Et, aliasHelper, _t, St, xt, trackSlotScopes, buildClientSlotFn, vt, transformElement, transformSlotOutlet, transformOn$1, transformBind, injectPrefix, transformText, Ct, transformOnce, transformModel$1, Nt, transformFilter, yt, transformMemo, transformVBindShorthand, noopDirectiveTransform, Tt, bt, It, Ot, At, Rt, wt, Pt, Lt, kt, Mt, Dt, transformStyle, parseInlineCSS, Vt, Ft, Ht, Xt, Bt, transformClick, ignoreSideEffectTags, Ut, jt, $t, Wt, Gt, qt, zt, Jt, useRouter, Kt, navigateTo, Yt, useError, showError, createError2, Zt, Qt, en, tn, nn, _export_sfc, rn, on2, sn, an, cn, ln, pn, dn, un, hn, mn, gn;
var init_server = __esm({
  ".output/server/chunks/build/server.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_renderer();
    init_shared_esm_bundler();
    globalThis._importMeta_ = globalThis._importMeta_ || { url: "file:///_entry.js", env: {} };
    G = { exports: {} };
    q = {};
    z2 = Symbol("");
    J = Symbol("");
    K = Symbol("");
    Y = Symbol("");
    Z = Symbol("");
    Q = Symbol("");
    ee = Symbol("");
    te = Symbol("");
    ne = Symbol("");
    re = Symbol("");
    oe = Symbol("");
    se = Symbol("");
    ie = Symbol("");
    ae = Symbol("");
    ce = Symbol("");
    le = Symbol("");
    pe = Symbol("");
    de = Symbol("");
    ue = Symbol("");
    he = Symbol("");
    fe = Symbol("");
    me = Symbol("");
    ge = Symbol("");
    Ee = Symbol("");
    _e = Symbol("");
    Se = Symbol("");
    xe = Symbol("");
    ve = Symbol("");
    Ce = Symbol("");
    Ne = Symbol("");
    ye = Symbol("");
    Te = Symbol("");
    be = Symbol("");
    Ie = Symbol("");
    Oe = Symbol("");
    Ae = Symbol("");
    Re = Symbol("");
    we = Symbol("");
    Pe = Symbol("");
    Le = { [z2]: "Fragment", [J]: "Teleport", [K]: "Suspense", [Y]: "KeepAlive", [Z]: "BaseTransition", [Q]: "openBlock", [ee]: "createBlock", [te]: "createElementBlock", [ne]: "createVNode", [re]: "createElementVNode", [oe]: "createCommentVNode", [se]: "createTextVNode", [ie]: "createStaticVNode", [ae]: "resolveComponent", [ce]: "resolveDynamicComponent", [le]: "resolveDirective", [pe]: "resolveFilter", [de]: "withDirectives", [ue]: "renderList", [he]: "renderSlot", [fe]: "createSlots", [me]: "toDisplayString", [ge]: "mergeProps", [Ee]: "normalizeClass", [_e]: "normalizeStyle", [Se]: "normalizeProps", [xe]: "guardReactiveProps", [ve]: "toHandlers", [Ce]: "camelize", [Ne]: "capitalize", [ye]: "toHandlerKey", [Te]: "setBlockTracking", [be]: "pushScopeId", [Ie]: "popScopeId", [Oe]: "withCtx", [Ae]: "unref", [Re]: "isRef", [we]: "withMemo", [Pe]: "isMemoSame" };
    __name(registerRuntimeHelpers, "registerRuntimeHelpers");
    ke = { start: { line: 1, column: 1, offset: 0 }, end: { line: 1, column: 1, offset: 0 }, source: "" };
    __name(createRoot, "createRoot");
    __name(createVNodeCall, "createVNodeCall");
    __name(createArrayExpression, "createArrayExpression");
    __name(createObjectExpression, "createObjectExpression");
    __name(createObjectProperty, "createObjectProperty");
    __name(createSimpleExpression, "createSimpleExpression");
    __name(createCompoundExpression, "createCompoundExpression");
    __name(createCallExpression, "createCallExpression");
    __name(createFunctionExpression, "createFunctionExpression");
    __name(createConditionalExpression, "createConditionalExpression");
    __name(createCacheExpression, "createCacheExpression");
    __name(createBlockStatement, "createBlockStatement");
    __name(getVNodeHelper, "getVNodeHelper");
    __name(getVNodeBlockHelper, "getVNodeBlockHelper");
    __name(convertToBlock, "convertToBlock");
    Me = new Uint8Array([123, 123]);
    De = new Uint8Array([125, 125]);
    __name(isTagStartChar, "isTagStartChar");
    __name(isWhitespace, "isWhitespace");
    __name(isEndOfTagSection, "isEndOfTagSection");
    __name(toCharCodes, "toCharCodes");
    Ve = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) };
    Fe = { COMPILER_IS_ON_ELEMENT: { message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".', link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html" }, COMPILER_V_BIND_SYNC: { message: /* @__PURE__ */ __name((e4) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e4}.sync\` should be changed to \`v-model:${e4}\`.`, "message"), link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html" }, COMPILER_V_BIND_OBJECT_ORDER: { message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.', link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html" }, COMPILER_V_ON_NATIVE: { message: ".native modifier for v-on has been removed as is no longer necessary.", link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html" }, COMPILER_V_IF_V_FOR_PRECEDENCE: { message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.", link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html" }, COMPILER_NATIVE_TEMPLATE: { message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3." }, COMPILER_INLINE_TEMPLATE: { message: '"inline-template" has been removed in Vue 3.', link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html" }, COMPILER_FILTERS: { message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.', link: "https://v3-migration.vuejs.org/breaking-changes/filters.html" } };
    __name(getCompatValue, "getCompatValue");
    __name(isCompatEnabled, "isCompatEnabled");
    __name(checkCompatEnabled, "checkCompatEnabled");
    __name(defaultOnError, "defaultOnError");
    __name(defaultOnWarn, "defaultOnWarn");
    __name(createCompilerError, "createCompilerError");
    He = { 0: "Illegal comment.", 1: "CDATA section is allowed only in XML context.", 2: "Duplicate attribute.", 3: "End tag cannot have attributes.", 4: "Illegal '/' in tags.", 5: "Unexpected EOF in tag.", 6: "Unexpected EOF in CDATA section.", 7: "Unexpected EOF in comment.", 8: "Unexpected EOF in script.", 9: "Unexpected EOF in tag.", 10: "Incorrectly closed comment.", 11: "Incorrectly opened comment.", 12: "Illegal tag name. Use '&lt;' to print '<'.", 13: "Attribute value was expected.", 14: "End tag name was expected.", 15: "Whitespace was expected.", 16: "Unexpected '<!--' in comment.", 17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`, 18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).", 19: "Attribute name cannot start with '='.", 21: "'<?' is allowed only in XML context.", 20: "Unexpected null character.", 22: "Illegal '/' in tags.", 23: "Invalid end tag.", 24: "Element is missing end tag.", 25: "Interpolation end sign was not found.", 27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.", 26: "Legal directive name was expected.", 28: "v-if/v-else-if is missing expression.", 29: "v-if/else branches must use unique keys.", 30: "v-else/v-else-if has no adjacent v-if or v-else-if.", 31: "v-for is missing expression.", 32: "v-for has invalid expression.", 33: "<template v-for> key should be placed on the <template> tag.", 34: "v-bind is missing expression.", 52: "v-bind with same-name shorthand only allows static argument.", 35: "v-on is missing expression.", 36: "Unexpected custom directive on <slot> outlet.", 37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.", 38: "Duplicate slot names found. ", 39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.", 40: "v-slot can only be used on components or <template> tags.", 41: "v-model is missing expression.", 42: "v-model value must be a valid JavaScript member expression.", 43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.", 44: "v-model cannot be used on a prop, because local prop bindings are not writable.\nUse a v-bind binding combined with a v-on listener that emits update:x event instead.", 45: "Error parsing JavaScript expression: ", 46: "<KeepAlive> expects exactly one child component.", 51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.", 47: '"prefixIdentifiers" option is not supported in this build of compiler.', 48: "ES module mode is not supported in this build of compiler.", 49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.', 50: '"scopeId" option is only supported in module mode.', 53: "" };
    __name(walkBlockDeclarations, "walkBlockDeclarations");
    __name(isForStatement, "isForStatement");
    __name(walkForStatement, "walkForStatement");
    __name(walkSwitchStatement, "walkSwitchStatement");
    __name(extractIdentifiers, "extractIdentifiers");
    isStaticProperty = /* @__PURE__ */ __name((e4) => e4 && ("ObjectProperty" === e4.type || "ObjectMethod" === e4.type) && !e4.computed, "isStaticProperty");
    Xe = ["TSAsExpression", "TSTypeAssertion", "TSNonNullExpression", "TSInstantiationExpression", "TSSatisfiesExpression"];
    isStaticExp = /* @__PURE__ */ __name((e4) => 4 === e4.type && e4.isStatic, "isStaticExp");
    __name(isCoreComponent, "isCoreComponent");
    Be = /^$|^\d|[^\$\w\xA0-\uFFFF]/;
    isSimpleIdentifier = /* @__PURE__ */ __name((e4) => !Be.test(e4), "isSimpleIdentifier");
    Ue = /[A-Za-z_$\xA0-\uFFFF]/;
    je = /[\.\?\w$\xA0-\uFFFF]/;
    $e = /\s+[.[]\s*|\s*[.[]\s+/g;
    getExpSource = /* @__PURE__ */ __name((e4) => 4 === e4.type ? e4.content : e4.loc.source, "getExpSource");
    isMemberExpressionBrowser = /* @__PURE__ */ __name((e4) => {
      const t5 = getExpSource(e4).trim().replace($e, (e5) => e5.trim());
      let n2 = 0, r4 = [], o4 = 0, s4 = 0, i4 = null;
      for (let e5 = 0; e5 < t5.length; e5++) {
        const a6 = t5.charAt(e5);
        switch (n2) {
          case 0:
            if ("[" === a6) r4.push(n2), n2 = 1, o4++;
            else if ("(" === a6) r4.push(n2), n2 = 2, s4++;
            else if (!(0 === e5 ? Ue : je).test(a6)) return false;
            break;
          case 1:
            "'" === a6 || '"' === a6 || "`" === a6 ? (r4.push(n2), n2 = 3, i4 = a6) : "[" === a6 ? o4++ : "]" === a6 && (--o4 || (n2 = r4.pop()));
            break;
          case 2:
            if ("'" === a6 || '"' === a6 || "`" === a6) r4.push(n2), n2 = 3, i4 = a6;
            else if ("(" === a6) s4++;
            else if (")" === a6) {
              if (e5 === t5.length - 1) return false;
              --s4 || (n2 = r4.pop());
            }
            break;
          case 3:
            a6 === i4 && (n2 = r4.pop(), i4 = null);
        }
      }
      return !o4 && !s4;
    }, "isMemberExpressionBrowser");
    We = NOOP;
    Ge = isMemberExpressionBrowser;
    qe = /^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/;
    isFnExpressionBrowser = /* @__PURE__ */ __name((e4) => qe.test(getExpSource(e4)), "isFnExpressionBrowser");
    ze = NOOP;
    Je = isFnExpressionBrowser;
    __name(advancePositionWithMutation, "advancePositionWithMutation");
    __name(findDir, "findDir");
    __name(findProp, "findProp");
    __name(isStaticArgOf, "isStaticArgOf");
    __name(hasDynamicKeyVBind, "hasDynamicKeyVBind");
    __name(isText$1, "isText$1");
    __name(isVPre, "isVPre");
    __name(isVSlot, "isVSlot");
    __name(isTemplateNode, "isTemplateNode");
    __name(isSlotOutlet, "isSlotOutlet");
    Ke = /* @__PURE__ */ new Set([Se, xe]);
    __name(getUnnormalizedProps, "getUnnormalizedProps");
    __name(injectProp, "injectProp");
    __name(hasProp, "hasProp");
    __name(toValidAssetId, "toValidAssetId");
    __name(getMemoedVNodeCall, "getMemoedVNodeCall");
    Ye = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
    __name(isAllWhitespace, "isAllWhitespace");
    __name(isWhitespaceText, "isWhitespaceText");
    __name(isCommentOrWhitespace, "isCommentOrWhitespace");
    Ze = { parseMode: "base", ns: 0, delimiters: ["{{", "}}"], getNamespace: /* @__PURE__ */ __name(() => 0, "getNamespace"), isVoidTag: NO, isPreTag: NO, isIgnoreNewlineTag: NO, isCustomElement: NO, onError: defaultOnError, onWarn: defaultOnWarn, comments: false, prefixIdentifiers: false };
    Qe = Ze;
    et = null;
    tt = "";
    nt = null;
    rt = null;
    ot = "";
    st = -1;
    it = -1;
    at = 0;
    ct = false;
    lt = null;
    pt = [];
    dt = new class {
      constructor(e4, t5) {
        this.stack = e4, this.cbs = t5, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = false, this.inXML = false, this.inVPre = false, this.newlines = [], this.mode = 0, this.delimiterOpen = Me, this.delimiterClose = De, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
      }
      get inSFCRoot() {
        return 2 === this.mode && 0 === this.stack.length;
      }
      reset() {
        this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = false, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = Me, this.delimiterClose = De;
      }
      getPos(e4) {
        let t5 = 1, n2 = e4 + 1;
        for (let r4 = this.newlines.length - 1; r4 >= 0; r4--) {
          const o4 = this.newlines[r4];
          if (e4 > o4) {
            t5 = r4 + 2, n2 = e4 - o4;
            break;
          }
        }
        return { column: n2, line: t5, offset: e4 };
      }
      peek() {
        return this.buffer.charCodeAt(this.index + 1);
      }
      stateText(e4) {
        60 === e4 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : this.inVPre || e4 !== this.delimiterOpen[0] || (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e4));
      }
      stateInterpolationOpen(e4) {
        if (e4 === this.delimiterOpen[this.delimiterIndex]) if (this.delimiterIndex === this.delimiterOpen.length - 1) {
          const e5 = this.index + 1 - this.delimiterOpen.length;
          e5 > this.sectionStart && this.cbs.ontext(this.sectionStart, e5), this.state = 3, this.sectionStart = e5;
        } else this.delimiterIndex++;
        else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(e4)) : (this.state = 1, this.stateText(e4));
      }
      stateInterpolation(e4) {
        e4 === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(e4));
      }
      stateInterpolationClose(e4) {
        e4 === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(e4));
      }
      stateSpecialStartSequence(e4) {
        const t5 = this.sequenceIndex === this.currentSequence.length;
        if (t5 ? isEndOfTagSection(e4) : (32 | e4) === this.currentSequence[this.sequenceIndex]) {
          if (!t5) return void this.sequenceIndex++;
        } else this.inRCDATA = false;
        this.sequenceIndex = 0, this.state = 6, this.stateInTagName(e4);
      }
      stateInRCDATA(e4) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (62 === e4 || isWhitespace(e4)) {
            const t5 = this.index - this.currentSequence.length;
            if (this.sectionStart < t5) {
              const e5 = this.index;
              this.index = t5, this.cbs.ontext(this.sectionStart, t5), this.index = e5;
            }
            return this.sectionStart = t5 + 2, this.stateInClosingTagName(e4), void (this.inRCDATA = false);
          }
          this.sequenceIndex = 0;
        }
        (32 | e4) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence === Ve.TitleEnd || this.currentSequence === Ve.TextareaEnd && !this.inSFCRoot ? this.inVPre || e4 !== this.delimiterOpen[0] || (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e4)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(60 === e4);
      }
      stateCDATASequence(e4) {
        e4 === Ve.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Ve.Cdata.length && (this.state = 28, this.currentSequence = Ve.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(e4));
      }
      fastForwardTo(e4) {
        for (; ++this.index < this.buffer.length; ) {
          const t5 = this.buffer.charCodeAt(this.index);
          if (10 === t5 && this.newlines.push(this.index), t5 === e4) return true;
        }
        return this.index = this.buffer.length - 1, false;
      }
      stateInCommentLike(e4) {
        e4 === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Ve.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e4 !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
      }
      startSpecial(e4, t5) {
        this.enterRCDATA(e4, t5), this.state = 31;
      }
      enterRCDATA(e4, t5) {
        this.inRCDATA = true, this.currentSequence = e4, this.sequenceIndex = t5;
      }
      stateBeforeTagName(e4) {
        33 === e4 ? (this.state = 22, this.sectionStart = this.index + 1) : 63 === e4 ? (this.state = 24, this.sectionStart = this.index + 1) : isTagStartChar(e4) ? (this.sectionStart = this.index, 0 === this.mode ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : this.state = 116 === e4 ? 30 : 115 === e4 ? 29 : 6) : 47 === e4 ? this.state = 8 : (this.state = 1, this.stateText(e4));
      }
      stateInTagName(e4) {
        isEndOfTagSection(e4) && this.handleTagName(e4);
      }
      stateInSFCRootTagName(e4) {
        if (isEndOfTagSection(e4)) {
          const t5 = this.buffer.slice(this.sectionStart, this.index);
          "template" !== t5 && this.enterRCDATA(toCharCodes("</" + t5), 0), this.handleTagName(e4);
        }
      }
      handleTagName(e4) {
        this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e4);
      }
      stateBeforeClosingTagName(e4) {
        isWhitespace(e4) || (62 === e4 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = isTagStartChar(e4) ? 9 : 27, this.sectionStart = this.index));
      }
      stateInClosingTagName(e4) {
        (62 === e4 || isWhitespace(e4)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(e4));
      }
      stateAfterClosingTagName(e4) {
        62 === e4 && (this.state = 1, this.sectionStart = this.index + 1);
      }
      stateBeforeAttrName(e4) {
        62 === e4 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : 47 === e4 ? this.state = 7 : 60 === e4 && 47 === this.peek() ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : isWhitespace(e4) || this.handleAttrStart(e4);
      }
      handleAttrStart(e4) {
        118 === e4 && 45 === this.peek() ? (this.state = 13, this.sectionStart = this.index) : 46 === e4 || 58 === e4 || 64 === e4 || 35 === e4 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
      }
      stateInSelfClosingTag(e4) {
        62 === e4 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = false) : isWhitespace(e4) || (this.state = 11, this.stateBeforeAttrName(e4));
      }
      stateInAttrName(e4) {
        (61 === e4 || isEndOfTagSection(e4)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(e4));
      }
      stateInDirName(e4) {
        61 === e4 || isEndOfTagSection(e4) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(e4)) : 58 === e4 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : 46 === e4 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
      }
      stateInDirArg(e4) {
        61 === e4 || isEndOfTagSection(e4) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(e4)) : 91 === e4 ? this.state = 15 : 46 === e4 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
      }
      stateInDynamicDirArg(e4) {
        93 === e4 ? this.state = 14 : (61 === e4 || isEndOfTagSection(e4)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(e4));
      }
      stateInDirModifier(e4) {
        61 === e4 || isEndOfTagSection(e4) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(e4)) : 46 === e4 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
      }
      handleAttrNameEnd(e4) {
        this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(e4);
      }
      stateAfterAttrName(e4) {
        61 === e4 ? this.state = 18 : 47 === e4 || 62 === e4 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e4)) : isWhitespace(e4) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(e4));
      }
      stateBeforeAttrValue(e4) {
        34 === e4 ? (this.state = 19, this.sectionStart = this.index + 1) : 39 === e4 ? (this.state = 20, this.sectionStart = this.index + 1) : isWhitespace(e4) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(e4));
      }
      handleInAttrValue(e4, t5) {
        (e4 === t5 || this.fastForwardTo(t5)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(34 === t5 ? 3 : 2, this.index + 1), this.state = 11);
      }
      stateInAttrValueDoubleQuotes(e4) {
        this.handleInAttrValue(e4, 34);
      }
      stateInAttrValueSingleQuotes(e4) {
        this.handleInAttrValue(e4, 39);
      }
      stateInAttrValueNoQuotes(e4) {
        isWhitespace(e4) || 62 === e4 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(e4)) : 39 !== e4 && 60 !== e4 && 61 !== e4 && 96 !== e4 || this.cbs.onerr(18, this.index);
      }
      stateBeforeDeclaration(e4) {
        91 === e4 ? (this.state = 26, this.sequenceIndex = 0) : this.state = 45 === e4 ? 25 : 23;
      }
      stateInDeclaration(e4) {
        (62 === e4 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
      }
      stateInProcessingInstruction(e4) {
        (62 === e4 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
      }
      stateBeforeComment(e4) {
        45 === e4 ? (this.state = 28, this.currentSequence = Ve.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
      }
      stateInSpecialComment(e4) {
        (62 === e4 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
      }
      stateBeforeSpecialS(e4) {
        e4 === Ve.ScriptEnd[3] ? this.startSpecial(Ve.ScriptEnd, 4) : e4 === Ve.StyleEnd[3] ? this.startSpecial(Ve.StyleEnd, 4) : (this.state = 6, this.stateInTagName(e4));
      }
      stateBeforeSpecialT(e4) {
        e4 === Ve.TitleEnd[3] ? this.startSpecial(Ve.TitleEnd, 4) : e4 === Ve.TextareaEnd[3] ? this.startSpecial(Ve.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(e4));
      }
      startEntity() {
      }
      stateInEntity() {
      }
      parse(e4) {
        for (this.buffer = e4; this.index < this.buffer.length; ) {
          const e5 = this.buffer.charCodeAt(this.index);
          switch (10 === e5 && 33 !== this.state && this.newlines.push(this.index), this.state) {
            case 1:
              this.stateText(e5);
              break;
            case 2:
              this.stateInterpolationOpen(e5);
              break;
            case 3:
              this.stateInterpolation(e5);
              break;
            case 4:
              this.stateInterpolationClose(e5);
              break;
            case 31:
              this.stateSpecialStartSequence(e5);
              break;
            case 32:
              this.stateInRCDATA(e5);
              break;
            case 26:
              this.stateCDATASequence(e5);
              break;
            case 19:
              this.stateInAttrValueDoubleQuotes(e5);
              break;
            case 12:
              this.stateInAttrName(e5);
              break;
            case 13:
              this.stateInDirName(e5);
              break;
            case 14:
              this.stateInDirArg(e5);
              break;
            case 15:
              this.stateInDynamicDirArg(e5);
              break;
            case 16:
              this.stateInDirModifier(e5);
              break;
            case 28:
              this.stateInCommentLike(e5);
              break;
            case 27:
              this.stateInSpecialComment(e5);
              break;
            case 11:
              this.stateBeforeAttrName(e5);
              break;
            case 6:
              this.stateInTagName(e5);
              break;
            case 34:
              this.stateInSFCRootTagName(e5);
              break;
            case 9:
              this.stateInClosingTagName(e5);
              break;
            case 5:
              this.stateBeforeTagName(e5);
              break;
            case 17:
              this.stateAfterAttrName(e5);
              break;
            case 20:
              this.stateInAttrValueSingleQuotes(e5);
              break;
            case 18:
              this.stateBeforeAttrValue(e5);
              break;
            case 8:
              this.stateBeforeClosingTagName(e5);
              break;
            case 10:
              this.stateAfterClosingTagName(e5);
              break;
            case 29:
              this.stateBeforeSpecialS(e5);
              break;
            case 30:
              this.stateBeforeSpecialT(e5);
              break;
            case 21:
              this.stateInAttrValueNoQuotes(e5);
              break;
            case 7:
              this.stateInSelfClosingTag(e5);
              break;
            case 23:
              this.stateInDeclaration(e5);
              break;
            case 22:
              this.stateBeforeDeclaration(e5);
              break;
            case 25:
              this.stateBeforeComment(e5);
              break;
            case 24:
              this.stateInProcessingInstruction(e5);
              break;
            case 33:
              this.stateInEntity();
          }
          this.index++;
        }
        this.cleanup(), this.finish();
      }
      cleanup() {
        this.sectionStart !== this.index && (1 === this.state || 32 === this.state && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : 19 !== this.state && 20 !== this.state && 21 !== this.state || (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
      }
      finish() {
        this.handleTrailingData(), this.cbs.onend();
      }
      handleTrailingData() {
        const e4 = this.buffer.length;
        this.sectionStart >= e4 || (28 === this.state ? this.currentSequence === Ve.CdataEnd ? this.cbs.oncdata(this.sectionStart, e4) : this.cbs.oncomment(this.sectionStart, e4) : 6 === this.state || 11 === this.state || 18 === this.state || 17 === this.state || 12 === this.state || 13 === this.state || 14 === this.state || 15 === this.state || 16 === this.state || 20 === this.state || 19 === this.state || 21 === this.state || 9 === this.state || this.cbs.ontext(this.sectionStart, e4));
      }
      emitCodePoint(e4, t5) {
      }
    }(pt, { onerr: emitError, ontext(e4, t5) {
      onText(getSlice(e4, t5), e4, t5);
    }, ontextentity(e4, t5, n2) {
      onText(e4, t5, n2);
    }, oninterpolation(e4, t5) {
      if (ct) return onText(getSlice(e4, t5), e4, t5);
      let n2 = e4 + dt.delimiterOpen.length, r4 = t5 - dt.delimiterClose.length;
      for (; isWhitespace(tt.charCodeAt(n2)); ) n2++;
      for (; isWhitespace(tt.charCodeAt(r4 - 1)); ) r4--;
      let o4 = getSlice(n2, r4);
      o4.includes("&") && (o4 = Qe.decodeEntities(o4, false)), addNode({ type: 5, content: createExp(o4, false, getLoc(n2, r4)), loc: getLoc(e4, t5) });
    }, onopentagname(e4, t5) {
      const n2 = getSlice(e4, t5);
      nt = { type: 1, tag: n2, ns: Qe.getNamespace(n2, pt[0], Qe.ns), tagType: 0, props: [], children: [], loc: getLoc(e4 - 1, t5), codegenNode: void 0 };
    }, onopentagend(e4) {
      endOpenTag(e4);
    }, onclosetag(e4, t5) {
      const n2 = getSlice(e4, t5);
      if (!Qe.isVoidTag(n2)) {
        let r4 = false;
        for (let e5 = 0; e5 < pt.length; e5++) {
          if (pt[e5].tag.toLowerCase() === n2.toLowerCase()) {
            r4 = true, e5 > 0 && emitError(24, pt[0].loc.start.offset);
            for (let n3 = 0; n3 <= e5; n3++) {
              onCloseTag(pt.shift(), t5, n3 < e5);
            }
            break;
          }
        }
        r4 || emitError(23, backTrack(e4, 60));
      }
    }, onselfclosingtag(e4) {
      const t5 = nt.tag;
      nt.isSelfClosing = true, endOpenTag(e4), pt[0] && pt[0].tag === t5 && onCloseTag(pt.shift(), e4);
    }, onattribname(e4, t5) {
      rt = { type: 6, name: getSlice(e4, t5), nameLoc: getLoc(e4, t5), value: void 0, loc: getLoc(e4) };
    }, ondirname(e4, t5) {
      const n2 = getSlice(e4, t5), r4 = "." === n2 || ":" === n2 ? "bind" : "@" === n2 ? "on" : "#" === n2 ? "slot" : n2.slice(2);
      if (ct || "" !== r4 || emitError(26, e4), ct || "" === r4) rt = { type: 6, name: n2, nameLoc: getLoc(e4, t5), value: void 0, loc: getLoc(e4) };
      else if (rt = { type: 7, name: r4, rawName: n2, exp: void 0, arg: void 0, modifiers: "." === n2 ? [createSimpleExpression("prop")] : [], loc: getLoc(e4) }, "pre" === r4) {
        ct = dt.inVPre = true, lt = nt;
        const e5 = nt.props;
        for (let t6 = 0; t6 < e5.length; t6++) 7 === e5[t6].type && (e5[t6] = dirToAttr(e5[t6]));
      }
    }, ondirarg(e4, t5) {
      if (e4 === t5) return;
      const n2 = getSlice(e4, t5);
      if (ct && !isVPre(rt)) rt.name += n2, setLocEnd(rt.nameLoc, t5);
      else {
        const r4 = "[" !== n2[0];
        rt.arg = createExp(r4 ? n2 : n2.slice(1, -1), r4, getLoc(e4, t5), r4 ? 3 : 0);
      }
    }, ondirmodifier(e4, t5) {
      const n2 = getSlice(e4, t5);
      if (ct && !isVPre(rt)) rt.name += "." + n2, setLocEnd(rt.nameLoc, t5);
      else if ("slot" === rt.name) {
        const e5 = rt.arg;
        e5 && (e5.content += "." + n2, setLocEnd(e5.loc, t5));
      } else {
        const r4 = createSimpleExpression(n2, true, getLoc(e4, t5));
        rt.modifiers.push(r4);
      }
    }, onattribdata(e4, t5) {
      ot += getSlice(e4, t5), st < 0 && (st = e4), it = t5;
    }, onattribentity(e4, t5, n2) {
      ot += e4, st < 0 && (st = t5), it = n2;
    }, onattribnameend(e4) {
      const t5 = rt.loc.start.offset, n2 = getSlice(t5, e4);
      7 === rt.type && (rt.rawName = n2), nt.props.some((e5) => (7 === e5.type ? e5.rawName : e5.name) === n2) && emitError(2, t5);
    }, onattribend(e4, t5) {
      if (nt && rt) {
        if (setLocEnd(rt.loc, t5), 0 !== e4) if (ot.includes("&") && (ot = Qe.decodeEntities(ot, true)), 6 === rt.type) "class" === rt.name && (ot = condense(ot).trim()), 1 !== e4 || ot || emitError(13, t5), rt.value = { type: 2, content: ot, loc: 1 === e4 ? getLoc(st, it) : getLoc(st - 1, it + 1) }, dt.inSFCRoot && "template" === nt.tag && "lang" === rt.name && ot && "html" !== ot && dt.enterRCDATA(toCharCodes("</template"), 0);
        else {
          let e5 = 0;
          rt.exp = createExp(ot, false, getLoc(st, it), 0, e5), "for" === rt.name && (rt.forParseResult = (function(e6) {
            const t7 = e6.loc, n2 = e6.content, r4 = n2.match(Ye);
            if (!r4) return;
            const [, o4, s4] = r4, createAliasExpression = /* @__PURE__ */ __name((e7, n3, r5 = false) => {
              const o5 = t7.start.offset + n3;
              return createExp(e7, false, getLoc(o5, o5 + e7.length), 0, r5 ? 1 : 0);
            }, "createAliasExpression"), i4 = { source: createAliasExpression(s4.trim(), n2.indexOf(s4, o4.length)), value: void 0, key: void 0, index: void 0, finalized: false };
            let a6 = o4.trim().replace(ht, "").trim();
            const c4 = o4.indexOf(a6), l3 = a6.match(ut);
            if (l3) {
              a6 = a6.replace(ut, "").trim();
              const e7 = l3[1].trim();
              let t8;
              if (e7 && (t8 = n2.indexOf(e7, c4 + a6.length), i4.key = createAliasExpression(e7, t8, true)), l3[2]) {
                const r5 = l3[2].trim();
                r5 && (i4.index = createAliasExpression(r5, n2.indexOf(r5, i4.key ? t8 + e7.length : c4 + a6.length), true));
              }
            }
            a6 && (i4.value = createAliasExpression(a6, c4, true));
            return i4;
          })(rt.exp));
          let t6 = -1;
          "bind" === rt.name && (t6 = rt.modifiers.findIndex((e6) => "sync" === e6.content)) > -1 && checkCompatEnabled("COMPILER_V_BIND_SYNC", Qe, rt.loc, rt.arg.loc.source) && (rt.name = "model", rt.modifiers.splice(t6, 1));
        }
        7 === rt.type && "pre" === rt.name || nt.props.push(rt);
      }
      ot = "", st = it = -1;
    }, oncomment(e4, t5) {
      Qe.comments && addNode({ type: 3, content: getSlice(e4, t5), loc: getLoc(e4 - 4, t5 + 3) });
    }, onend() {
      const e4 = tt.length;
      for (let t5 = 0; t5 < pt.length; t5++) onCloseTag(pt[t5], e4 - 1), emitError(24, pt[t5].loc.start.offset);
    }, oncdata(e4, t5) {
      0 !== pt[0].ns ? onText(getSlice(e4, t5), e4, t5) : emitError(1, e4 - 9);
    }, onprocessinginstruction(e4) {
      0 === (pt[0] ? pt[0].ns : Qe.ns) && emitError(21, e4 - 1);
    } });
    ut = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    ht = /^\(|\)$/g;
    __name(getSlice, "getSlice");
    __name(endOpenTag, "endOpenTag");
    __name(onText, "onText");
    __name(onCloseTag, "onCloseTag");
    __name(backTrack, "backTrack");
    ft = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
    __name(isFragmentTemplate, "isFragmentTemplate");
    mt = /\r\n/g;
    __name(condenseWhitespace, "condenseWhitespace");
    __name(hasNewlineChar, "hasNewlineChar");
    __name(condense, "condense");
    __name(addNode, "addNode");
    __name(getLoc, "getLoc");
    __name(setLocEnd, "setLocEnd");
    __name(dirToAttr, "dirToAttr");
    __name(createExp, "createExp");
    __name(emitError, "emitError");
    __name(baseParse, "baseParse");
    __name(cacheStatic, "cacheStatic");
    __name(getSingleElementRoot, "getSingleElementRoot");
    __name(walk, "walk");
    __name(getConstantType, "getConstantType");
    gt = /* @__PURE__ */ new Set([Ee, _e, Se, xe]);
    __name(getConstantTypeOfHelperCall, "getConstantTypeOfHelperCall");
    __name(getGeneratedPropsConstantType, "getGeneratedPropsConstantType");
    __name(getNodeProps, "getNodeProps");
    __name(createTransformContext, "createTransformContext");
    __name(transform, "transform");
    __name(traverseNode, "traverseNode");
    __name(createStructuralDirectiveTransform, "createStructuralDirectiveTransform");
    Et = "/*@__PURE__*/";
    aliasHelper = /* @__PURE__ */ __name((e4) => `${Le[e4]}: _${Le[e4]}`, "aliasHelper");
    __name(generate, "generate");
    __name(genAssets, "genAssets");
    __name(genNodeListAsArray, "genNodeListAsArray");
    __name(genNodeList, "genNodeList");
    __name(genNode, "genNode");
    __name(genExpression, "genExpression");
    __name(genCompoundExpression, "genCompoundExpression");
    __name(genExpressionAsPropertyKey, "genExpressionAsPropertyKey");
    new RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
    __name(processExpression, "processExpression");
    _t = createStructuralDirectiveTransform(/^(?:if|else|else-if)$/, (e4, t5, n2) => processIf(e4, t5, n2, (e5, t6, r4) => {
      const o4 = n2.parent.children;
      let s4 = o4.indexOf(e5), i4 = 0;
      for (; s4-- >= 0; ) {
        const e6 = o4[s4];
        e6 && 9 === e6.type && (i4 += e6.branches.length);
      }
      return () => {
        if (r4) e5.codegenNode = createCodegenNodeForBranch(t6, i4, n2);
        else {
          const r5 = (function(e6) {
            for (; ; ) if (19 === e6.type) {
              if (19 !== e6.alternate.type) return e6;
              e6 = e6.alternate;
            } else 20 === e6.type && (e6 = e6.value);
          })(e5.codegenNode);
          r5.alternate = createCodegenNodeForBranch(t6, i4 + e5.branches.length - 1, n2);
        }
      };
    }));
    __name(processIf, "processIf");
    __name(createIfBranch, "createIfBranch");
    __name(createCodegenNodeForBranch, "createCodegenNodeForBranch");
    __name(createChildrenCodegenNode, "createChildrenCodegenNode");
    St = createStructuralDirectiveTransform("for", (e4, t5, n2) => {
      const { helper: r4, removeHelper: o4 } = n2;
      return processFor(e4, t5, n2, (t6) => {
        const s4 = createCallExpression(r4(ue), [t6.source]), i4 = isTemplateNode(e4), a6 = findDir(e4, "memo"), c4 = findProp(e4, "key", false, true);
        c4 && c4.type;
        let l3 = c4 && (6 === c4.type ? c4.value ? createSimpleExpression(c4.value.content, true) : void 0 : c4.exp);
        const p3 = c4 && l3 ? createObjectProperty("key", l3) : null, d3 = 4 === t6.source.type && t6.source.constType > 0, u3 = d3 ? 64 : c4 ? 128 : 256;
        return t6.codegenNode = createVNodeCall(n2, r4(z2), void 0, s4, u3, void 0, void 0, true, !d3, false, e4.loc), () => {
          let c5;
          const { children: u4 } = t6, h4 = 1 !== u4.length || 1 !== u4[0].type, f3 = isSlotOutlet(e4) ? e4 : i4 && 1 === e4.children.length && isSlotOutlet(e4.children[0]) ? e4.children[0] : null;
          if (f3 ? (c5 = f3.codegenNode, i4 && p3 && injectProp(c5, p3, n2)) : h4 ? c5 = createVNodeCall(n2, r4(z2), p3 ? createObjectExpression([p3]) : void 0, e4.children, 64, void 0, void 0, true, void 0, false) : (c5 = u4[0].codegenNode, i4 && p3 && injectProp(c5, p3, n2), c5.isBlock !== !d3 && (c5.isBlock ? (o4(Q), o4(getVNodeBlockHelper(n2.inSSR, c5.isComponent))) : o4(getVNodeHelper(n2.inSSR, c5.isComponent))), c5.isBlock = !d3, c5.isBlock ? (r4(Q), r4(getVNodeBlockHelper(n2.inSSR, c5.isComponent))) : r4(getVNodeHelper(n2.inSSR, c5.isComponent))), a6) {
            const e5 = createFunctionExpression(createForLoopParams(t6.parseResult, [createSimpleExpression("_cached")]));
            e5.body = createBlockStatement([createCompoundExpression(["const _memo = (", a6.exp, ")"]), createCompoundExpression(["if (_cached", ...l3 ? [" && _cached.key === ", l3] : [], ` && ${n2.helperString(Pe)}(_cached, _memo)) return _cached`]), createCompoundExpression(["const _item = ", c5]), createSimpleExpression("_item.memo = _memo"), createSimpleExpression("return _item")]), s4.arguments.push(e5, createSimpleExpression("_cache"), createSimpleExpression(String(n2.cached.length))), n2.cached.push(null);
          } else s4.arguments.push(createFunctionExpression(createForLoopParams(t6.parseResult), c5, true));
        };
      });
    });
    __name(processFor, "processFor");
    __name(finalizeForParseResult, "finalizeForParseResult");
    __name(createForLoopParams, "createForLoopParams");
    xt = createSimpleExpression("undefined", false);
    trackSlotScopes = /* @__PURE__ */ __name((e4, t5) => {
      if (1 === e4.type && (1 === e4.tagType || 3 === e4.tagType)) {
        const n2 = findDir(e4, "slot");
        if (n2) return n2.exp, t5.scopes.vSlot++, () => {
          t5.scopes.vSlot--;
        };
      }
    }, "trackSlotScopes");
    buildClientSlotFn = /* @__PURE__ */ __name((e4, t5, n2, r4) => createFunctionExpression(e4, n2, false, true, n2.length ? n2[0].loc : r4), "buildClientSlotFn");
    __name(buildSlots, "buildSlots");
    __name(buildDynamicSlot, "buildDynamicSlot");
    __name(hasForwardedSlots, "hasForwardedSlots");
    vt = /* @__PURE__ */ new WeakMap();
    transformElement = /* @__PURE__ */ __name((e4, t5) => function() {
      if (1 !== (e4 = t5.currentNode).type || 0 !== e4.tagType && 1 !== e4.tagType) return;
      const { tag: n2, props: r4 } = e4, o4 = 1 === e4.tagType;
      let s4 = o4 ? resolveComponentType(e4, t5) : `"${n2}"`;
      const i4 = isObject(s4) && s4.callee === ce;
      let a6, c4, l3, p3, d3, u3 = 0, h4 = i4 || s4 === J || s4 === K || !o4 && ("svg" === n2 || "foreignObject" === n2 || "math" === n2);
      if (r4.length > 0) {
        const n3 = buildProps(e4, t5, void 0, o4, i4);
        a6 = n3.props, u3 = n3.patchFlag, p3 = n3.dynamicPropNames;
        const r5 = n3.directives;
        d3 = r5 && r5.length ? createArrayExpression(r5.map((e5) => buildDirectiveArgs(e5, t5))) : void 0, n3.shouldUseBlock && (h4 = true);
      }
      if (e4.children.length > 0) {
        s4 === Y && (h4 = true, u3 |= 1024);
        if (o4 && s4 !== J && s4 !== Y) {
          const { slots: n3, hasDynamicSlots: r5 } = buildSlots(e4, t5);
          c4 = n3, r5 && (u3 |= 1024);
        } else if (1 === e4.children.length && s4 !== J) {
          const n3 = e4.children[0], r5 = n3.type, o5 = 5 === r5 || 8 === r5;
          o5 && 0 === getConstantType(n3, t5) && (u3 |= 1), c4 = o5 || 2 === r5 ? n3 : e4.children;
        } else c4 = e4.children;
      }
      p3 && p3.length && (l3 = (function(e5) {
        let t6 = "[";
        for (let n3 = 0, r5 = e5.length; n3 < r5; n3++) t6 += JSON.stringify(e5[n3]), n3 < r5 - 1 && (t6 += ", ");
        return t6 + "]";
      })(p3)), e4.codegenNode = createVNodeCall(t5, s4, a6, c4, 0 === u3 ? void 0 : u3, l3, d3, !!h4, false, o4, e4.loc);
    }, "transformElement");
    __name(resolveComponentType, "resolveComponentType");
    __name(buildProps, "buildProps");
    __name(dedupeProperties, "dedupeProperties");
    __name(mergeAsArray, "mergeAsArray");
    __name(buildDirectiveArgs, "buildDirectiveArgs");
    __name(isComponentTag, "isComponentTag");
    transformSlotOutlet = /* @__PURE__ */ __name((e4, t5) => {
      if (isSlotOutlet(e4)) {
        const { children: n2, loc: r4 } = e4, { slotName: o4, slotProps: s4 } = processSlotOutlet(e4, t5), i4 = [t5.prefixIdentifiers ? "_ctx.$slots" : "$slots", o4, "{}", "undefined", "true"];
        let a6 = 2;
        s4 && (i4[2] = s4, a6 = 3), n2.length && (i4[3] = createFunctionExpression([], n2, false, false, r4), a6 = 4), t5.scopeId && !t5.slotted && (a6 = 5), i4.splice(a6), e4.codegenNode = createCallExpression(t5.helper(he), i4, r4);
      }
    }, "transformSlotOutlet");
    __name(processSlotOutlet, "processSlotOutlet");
    transformOn$1 = /* @__PURE__ */ __name((e4, t5, n2, r4) => {
      const { loc: o4, modifiers: s4, arg: i4 } = e4;
      let a6;
      if (e4.exp || s4.length || n2.onError(createCompilerError(35, o4)), 4 === i4.type) if (i4.isStatic) {
        let e5 = i4.content;
        e5.startsWith("vue:") && (e5 = `vnode-${e5.slice(4)}`);
        a6 = createSimpleExpression(0 !== t5.tagType || e5.startsWith("vnode") || !/[A-Z]/.test(e5) ? u(p(e5)) : `on:${e5}`, true, i4.loc);
      } else a6 = createCompoundExpression([`${n2.helperString(ye)}(`, i4, ")"]);
      else a6 = i4, a6.children.unshift(`${n2.helperString(ye)}(`), a6.children.push(")");
      let c4 = e4.exp;
      c4 && !c4.content.trim() && (c4 = void 0);
      let l3 = n2.cacheHandlers && !c4 && !n2.inVOnce;
      if (c4) {
        const e5 = Ge(c4), t6 = !(e5 || Je(c4)), n3 = c4.content.includes(";");
        (t6 || l3 && e5) && (c4 = createCompoundExpression([`${t6 ? "$event" : "(...args)"} => ${n3 ? "{" : "("}`, c4, n3 ? "}" : ")"]));
      }
      let p3 = { props: [createObjectProperty(a6, c4 || createSimpleExpression("() => {}", false, o4))] };
      return r4 && (p3 = r4(p3)), l3 && (p3.props[0].value = n2.cache(p3.props[0].value)), p3.props.forEach((e5) => e5.key.isHandlerKey = true), p3;
    }, "transformOn$1");
    transformBind = /* @__PURE__ */ __name((e4, t5, n2) => {
      const { modifiers: r4, loc: o4 } = e4, s4 = e4.arg;
      let { exp: i4 } = e4;
      return i4 && 4 === i4.type && !i4.content.trim() && (i4 = void 0), 4 !== s4.type ? (s4.children.unshift("("), s4.children.push(') || ""')) : s4.isStatic || (s4.content = s4.content ? `${s4.content} || ""` : '""'), r4.some((e5) => "camel" === e5.content) && (4 === s4.type ? s4.isStatic ? s4.content = p(s4.content) : s4.content = `${n2.helperString(Ce)}(${s4.content})` : (s4.children.unshift(`${n2.helperString(Ce)}(`), s4.children.push(")"))), n2.inSSR || (r4.some((e5) => "prop" === e5.content) && injectPrefix(s4, "."), r4.some((e5) => "attr" === e5.content) && injectPrefix(s4, "^")), { props: [createObjectProperty(s4, i4)] };
    }, "transformBind");
    injectPrefix = /* @__PURE__ */ __name((e4, t5) => {
      4 === e4.type ? e4.isStatic ? e4.content = t5 + e4.content : e4.content = `\`${t5}\${${e4.content}}\`` : (e4.children.unshift(`'${t5}' + (`), e4.children.push(")"));
    }, "injectPrefix");
    transformText = /* @__PURE__ */ __name((e4, t5) => {
      if (0 === e4.type || 1 === e4.type || 11 === e4.type || 10 === e4.type) return () => {
        const n2 = e4.children;
        let r4, o4 = false;
        for (let e5 = 0; e5 < n2.length; e5++) {
          const t6 = n2[e5];
          if (isText$1(t6)) {
            o4 = true;
            for (let o5 = e5 + 1; o5 < n2.length; o5++) {
              const s4 = n2[o5];
              if (!isText$1(s4)) {
                r4 = void 0;
                break;
              }
              r4 || (r4 = n2[e5] = createCompoundExpression([t6], t6.loc)), r4.children.push(" + ", s4), n2.splice(o5, 1), o5--;
            }
          }
        }
        if (o4 && (1 !== n2.length || 0 !== e4.type && (1 !== e4.type || 0 !== e4.tagType || e4.props.find((e5) => 7 === e5.type && !t5.directiveTransforms[e5.name]) || "template" === e4.tag))) for (let e5 = 0; e5 < n2.length; e5++) {
          const r5 = n2[e5];
          if (isText$1(r5) || 8 === r5.type) {
            const o5 = [];
            2 === r5.type && " " === r5.content || o5.push(r5), t5.ssr || 0 !== getConstantType(r5, t5) || o5.push("1"), n2[e5] = { type: 12, content: r5, loc: r5.loc, codegenNode: createCallExpression(t5.helper(se), o5) };
          }
        }
      };
    }, "transformText");
    Ct = /* @__PURE__ */ new WeakSet();
    transformOnce = /* @__PURE__ */ __name((e4, t5) => {
      if (1 === e4.type && findDir(e4, "once", true)) {
        if (Ct.has(e4) || t5.inVOnce || t5.inSSR) return;
        return Ct.add(e4), t5.inVOnce = true, t5.helper(Te), () => {
          t5.inVOnce = false;
          const e5 = t5.currentNode;
          e5.codegenNode && (e5.codegenNode = t5.cache(e5.codegenNode, true, true));
        };
      }
    }, "transformOnce");
    transformModel$1 = /* @__PURE__ */ __name((e4, t5, n2) => {
      const { exp: r4, arg: o4 } = e4;
      if (!r4) return n2.onError(createCompilerError(41, e4.loc)), createTransformProps();
      const s4 = r4.loc.source.trim(), i4 = 4 === r4.type ? r4.content : s4, a6 = n2.bindingMetadata[s4];
      if ("props" === a6 || "props-aliased" === a6) return n2.onError(createCompilerError(44, r4.loc)), createTransformProps();
      if (!i4.trim() || !Ge(r4)) return n2.onError(createCompilerError(42, r4.loc)), createTransformProps();
      const c4 = o4 || createSimpleExpression("modelValue", true), l3 = o4 ? isStaticExp(o4) ? `onUpdate:${p(o4.content)}` : createCompoundExpression(['"onUpdate:" + ', o4]) : "onUpdate:modelValue";
      let p3;
      p3 = createCompoundExpression([`${n2.isTS ? "($event: any)" : "$event"} => ((`, r4, ") = $event)"]);
      const d3 = [createObjectProperty(c4, e4.exp), createObjectProperty(l3, p3)];
      if (e4.modifiers.length && 1 === t5.tagType) {
        const t6 = e4.modifiers.map((e5) => e5.content).map((e5) => (isSimpleIdentifier(e5) ? e5 : JSON.stringify(e5)) + ": true").join(", "), n3 = o4 ? isStaticExp(o4) ? `${o4.content}Modifiers` : createCompoundExpression([o4, ' + "Modifiers"']) : "modelModifiers";
        d3.push(createObjectProperty(n3, createSimpleExpression(`{ ${t6} }`, false, e4.loc, 2)));
      }
      return createTransformProps(d3);
    }, "transformModel$1");
    __name(createTransformProps, "createTransformProps");
    Nt = /[\w).+\-_$\]]/;
    transformFilter = /* @__PURE__ */ __name((e4, t5) => {
      isCompatEnabled("COMPILER_FILTERS", t5) && (5 === e4.type ? rewriteFilter(e4.content, t5) : 1 === e4.type && e4.props.forEach((e5) => {
        7 === e5.type && "for" !== e5.name && e5.exp && rewriteFilter(e5.exp, t5);
      }));
    }, "transformFilter");
    __name(rewriteFilter, "rewriteFilter");
    __name(parseFilter, "parseFilter");
    __name(wrapFilter, "wrapFilter");
    yt = /* @__PURE__ */ new WeakSet();
    transformMemo = /* @__PURE__ */ __name((e4, t5) => {
      if (1 === e4.type) {
        const n2 = findDir(e4, "memo");
        if (!n2 || yt.has(e4) || t5.inSSR) return;
        return yt.add(e4), () => {
          const r4 = e4.codegenNode || t5.currentNode.codegenNode;
          r4 && 13 === r4.type && (1 !== e4.tagType && convertToBlock(r4, t5), e4.codegenNode = createCallExpression(t5.helper(we), [n2.exp, createFunctionExpression(void 0, r4), "_cache", String(t5.cached.length)]), t5.cached.push(null));
        };
      }
    }, "transformMemo");
    transformVBindShorthand = /* @__PURE__ */ __name((e4, t5) => {
      if (1 === e4.type) {
        for (const n2 of e4.props) if (7 === n2.type && "bind" === n2.name && (!n2.exp || 4 === n2.exp.type && !n2.exp.content.trim()) && n2.arg) {
          const e5 = n2.arg;
          if (4 === e5.type && e5.isStatic) {
            const t6 = p(e5.content);
            (Ue.test(t6[0]) || "-" === t6[0]) && (n2.exp = createSimpleExpression(t6, false, e5.loc));
          } else t5.onError(createCompilerError(52, e5.loc)), n2.exp = createSimpleExpression("", true, e5.loc);
        }
      }
    }, "transformVBindShorthand");
    __name(getBaseTransformPreset, "getBaseTransformPreset");
    __name(baseCompile, "baseCompile");
    noopDirectiveTransform = /* @__PURE__ */ __name(() => ({ props: [] }), "noopDirectiveTransform");
    Tt = Symbol("");
    bt = Symbol("");
    It = Symbol("");
    Ot = Symbol("");
    At = Symbol("");
    Rt = Symbol("");
    wt = Symbol("");
    Pt = Symbol("");
    Lt = Symbol("");
    kt = Symbol("");
    registerRuntimeHelpers({ [Tt]: "vModelRadio", [bt]: "vModelCheckbox", [It]: "vModelText", [Ot]: "vModelSelect", [At]: "vModelDynamic", [Rt]: "withModifiers", [wt]: "withKeys", [Pt]: "vShow", [Lt]: "Transition", [kt]: "TransitionGroup" });
    Dt = { parseMode: "html", isVoidTag: C, isNativeTag: /* @__PURE__ */ __name((e4) => k(e4) || O(e4) || M(e4), "isNativeTag"), isPreTag: /* @__PURE__ */ __name((e4) => "pre" === e4, "isPreTag"), isIgnoreNewlineTag: /* @__PURE__ */ __name((e4) => "pre" === e4 || "textarea" === e4, "isIgnoreNewlineTag"), decodeEntities: /* @__PURE__ */ __name(function(e4, t5 = false) {
      return Mt || (Mt = document.createElement("div")), t5 ? (Mt.innerHTML = `<div foo="${e4.replace(/"/g, "&quot;")}">`, Mt.children[0].getAttribute("foo")) : (Mt.innerHTML = e4, Mt.textContent);
    }, "decodeEntities"), isBuiltInComponent: /* @__PURE__ */ __name((e4) => "Transition" === e4 || "transition" === e4 ? Lt : "TransitionGroup" === e4 || "transition-group" === e4 ? kt : void 0, "isBuiltInComponent"), getNamespace(e4, t5, n2) {
      let r4 = t5 ? t5.ns : n2;
      if (t5 && 2 === r4) if ("annotation-xml" === t5.tag) {
        if ("svg" === e4) return 1;
        t5.props.some((e5) => 6 === e5.type && "encoding" === e5.name && null != e5.value && ("text/html" === e5.value.content || "application/xhtml+xml" === e5.value.content)) && (r4 = 0);
      } else /^m(?:[ions]|text)$/.test(t5.tag) && "mglyph" !== e4 && "malignmark" !== e4 && (r4 = 0);
      else t5 && 1 === r4 && ("foreignObject" !== t5.tag && "desc" !== t5.tag && "title" !== t5.tag || (r4 = 0));
      if (0 === r4) {
        if ("svg" === e4) return 1;
        if ("math" === e4) return 2;
      }
      return r4;
    } };
    transformStyle = /* @__PURE__ */ __name((e4) => {
      1 === e4.type && e4.props.forEach((t5, n2) => {
        6 === t5.type && "style" === t5.name && t5.value && (e4.props[n2] = { type: 7, name: "bind", arg: createSimpleExpression("style", true, t5.loc), exp: parseInlineCSS(t5.value.content, t5.loc), modifiers: [], loc: t5.loc });
      });
    }, "transformStyle");
    parseInlineCSS = /* @__PURE__ */ __name((e4, t5) => {
      const n2 = parseStringStyle(e4);
      return createSimpleExpression(JSON.stringify(n2), false, t5, 3);
    }, "parseInlineCSS");
    __name(createDOMCompilerError, "createDOMCompilerError");
    Vt = { 53: "v-html is missing expression.", 54: "v-html will override element children.", 55: "v-text is missing expression.", 56: "v-text will override element children.", 57: "v-model can only be used on <input>, <textarea> and <select> elements.", 58: "v-model argument is not supported on plain elements.", 59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.", 60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.", 61: "v-show is missing expression.", 62: "<Transition> expects exactly one child element or component.", 63: "Tags with side effect (<script> and <style>) are ignored in client component templates." };
    Ft = makeMap("passive,once,capture");
    Ht = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact,middle");
    Xt = makeMap("left,right");
    Bt = makeMap("onkeyup,onkeydown,onkeypress");
    transformClick = /* @__PURE__ */ __name((e4, t5) => isStaticExp(e4) && "onclick" === e4.content.toLowerCase() ? createSimpleExpression(t5, true) : 4 !== e4.type ? createCompoundExpression(["(", e4, `) === "onClick" ? "${t5}" : (`, e4, ")"]) : e4, "transformClick");
    ignoreSideEffectTags = /* @__PURE__ */ __name((e4, t5) => {
      1 !== e4.type || 0 !== e4.tagType || "script" !== e4.tag && "style" !== e4.tag || t5.removeNode();
    }, "ignoreSideEffectTags");
    Ut = [transformStyle];
    jt = { cloak: noopDirectiveTransform, html: /* @__PURE__ */ __name((e4, t5, n2) => {
      const { exp: r4, loc: o4 } = e4;
      return r4 || n2.onError(createDOMCompilerError(53, o4)), t5.children.length && (n2.onError(createDOMCompilerError(54, o4)), t5.children.length = 0), { props: [createObjectProperty(createSimpleExpression("innerHTML", true, o4), r4 || createSimpleExpression("", true))] };
    }, "html"), text: /* @__PURE__ */ __name((e4, t5, n2) => {
      const { exp: r4, loc: o4 } = e4;
      return r4 || n2.onError(createDOMCompilerError(55, o4)), t5.children.length && (n2.onError(createDOMCompilerError(56, o4)), t5.children.length = 0), { props: [createObjectProperty(createSimpleExpression("textContent", true), r4 ? getConstantType(r4, n2) > 0 ? r4 : createCallExpression(n2.helperString(me), [r4], o4) : createSimpleExpression("", true))] };
    }, "text"), model: /* @__PURE__ */ __name((e4, t5, n2) => {
      const r4 = transformModel$1(e4, t5, n2);
      if (!r4.props.length || 1 === t5.tagType) return r4;
      e4.arg && n2.onError(createDOMCompilerError(58, e4.arg.loc));
      const { tag: o4 } = t5, s4 = n2.isCustomElement(o4);
      if ("input" === o4 || "textarea" === o4 || "select" === o4 || s4) {
        let i4 = It, a6 = false;
        if ("input" === o4 || s4) {
          const r5 = findProp(t5, "type");
          if (r5) {
            if (7 === r5.type) i4 = At;
            else if (r5.value) switch (r5.value.content) {
              case "radio":
                i4 = Tt;
                break;
              case "checkbox":
                i4 = bt;
                break;
              case "file":
                a6 = true, n2.onError(createDOMCompilerError(59, e4.loc));
            }
          } else hasDynamicKeyVBind(t5) && (i4 = At);
        } else "select" === o4 && (i4 = Ot);
        a6 || (r4.needRuntime = n2.helper(i4));
      } else n2.onError(createDOMCompilerError(57, e4.loc));
      return r4.props = r4.props.filter((e5) => !(4 === e5.key.type && "modelValue" === e5.key.content)), r4;
    }, "model"), on: /* @__PURE__ */ __name((e4, t5, n2) => transformOn$1(e4, t5, n2, (t6) => {
      const { modifiers: r4 } = e4;
      if (!r4.length) return t6;
      let { key: o4, value: s4 } = t6.props[0];
      const { keyModifiers: i4, nonKeyModifiers: a6, eventOptionModifiers: c4 } = ((e5, t7, n3) => {
        const r5 = [], o5 = [], s5 = [];
        for (let i5 = 0; i5 < t7.length; i5++) {
          const a7 = t7[i5].content;
          "native" === a7 && checkCompatEnabled("COMPILER_V_ON_NATIVE", n3) || Ft(a7) ? s5.push(a7) : Xt(a7) ? isStaticExp(e5) ? Bt(e5.content.toLowerCase()) ? r5.push(a7) : o5.push(a7) : (r5.push(a7), o5.push(a7)) : Ht(a7) ? o5.push(a7) : r5.push(a7);
        }
        return { keyModifiers: r5, nonKeyModifiers: o5, eventOptionModifiers: s5 };
      })(o4, r4, n2, e4.loc);
      if (a6.includes("right") && (o4 = transformClick(o4, "onContextmenu")), a6.includes("middle") && (o4 = transformClick(o4, "onMouseup")), a6.length && (s4 = createCallExpression(n2.helper(Rt), [s4, JSON.stringify(a6)])), !i4.length || isStaticExp(o4) && !Bt(o4.content.toLowerCase()) || (s4 = createCallExpression(n2.helper(wt), [s4, JSON.stringify(i4)])), c4.length) {
        const e5 = c4.map(f).join("");
        o4 = isStaticExp(o4) ? createSimpleExpression(`${o4.content}${e5}`, true) : createCompoundExpression(["(", o4, `) + "${e5}"`]);
      }
      return { props: [createObjectProperty(o4, s4)] };
    }), "on"), show: /* @__PURE__ */ __name((e4, t5, n2) => {
      const { exp: r4, loc: o4 } = e4;
      return r4 || n2.onError(createDOMCompilerError(61, o4)), { props: [], needRuntime: n2.helper(Pt) };
    }, "show") };
    $t = Object.freeze(Object.defineProperty({ __proto__: null, BASE_TRANSITION: Z, BindingTypes: { DATA: "data", PROPS: "props", PROPS_ALIASED: "props-aliased", SETUP_LET: "setup-let", SETUP_CONST: "setup-const", SETUP_REACTIVE_CONST: "setup-reactive-const", SETUP_MAYBE_REF: "setup-maybe-ref", SETUP_REF: "setup-ref", OPTIONS: "options", LITERAL_CONST: "literal-const" }, CAMELIZE: Ce, CAPITALIZE: Ne, CREATE_BLOCK: ee, CREATE_COMMENT: oe, CREATE_ELEMENT_BLOCK: te, CREATE_ELEMENT_VNODE: re, CREATE_SLOTS: fe, CREATE_STATIC: ie, CREATE_TEXT: se, CREATE_VNODE: ne, CompilerDeprecationTypes: { COMPILER_IS_ON_ELEMENT: "COMPILER_IS_ON_ELEMENT", COMPILER_V_BIND_SYNC: "COMPILER_V_BIND_SYNC", COMPILER_V_BIND_OBJECT_ORDER: "COMPILER_V_BIND_OBJECT_ORDER", COMPILER_V_ON_NATIVE: "COMPILER_V_ON_NATIVE", COMPILER_V_IF_V_FOR_PRECEDENCE: "COMPILER_V_IF_V_FOR_PRECEDENCE", COMPILER_NATIVE_TEMPLATE: "COMPILER_NATIVE_TEMPLATE", COMPILER_INLINE_TEMPLATE: "COMPILER_INLINE_TEMPLATE", COMPILER_FILTERS: "COMPILER_FILTERS" }, ConstantTypes: { NOT_CONSTANT: 0, 0: "NOT_CONSTANT", CAN_SKIP_PATCH: 1, 1: "CAN_SKIP_PATCH", CAN_CACHE: 2, 2: "CAN_CACHE", CAN_STRINGIFY: 3, 3: "CAN_STRINGIFY" }, DOMDirectiveTransforms: jt, DOMErrorCodes: { X_V_HTML_NO_EXPRESSION: 53, 53: "X_V_HTML_NO_EXPRESSION", X_V_HTML_WITH_CHILDREN: 54, 54: "X_V_HTML_WITH_CHILDREN", X_V_TEXT_NO_EXPRESSION: 55, 55: "X_V_TEXT_NO_EXPRESSION", X_V_TEXT_WITH_CHILDREN: 56, 56: "X_V_TEXT_WITH_CHILDREN", X_V_MODEL_ON_INVALID_ELEMENT: 57, 57: "X_V_MODEL_ON_INVALID_ELEMENT", X_V_MODEL_ARG_ON_ELEMENT: 58, 58: "X_V_MODEL_ARG_ON_ELEMENT", X_V_MODEL_ON_FILE_INPUT_ELEMENT: 59, 59: "X_V_MODEL_ON_FILE_INPUT_ELEMENT", X_V_MODEL_UNNECESSARY_VALUE: 60, 60: "X_V_MODEL_UNNECESSARY_VALUE", X_V_SHOW_NO_EXPRESSION: 61, 61: "X_V_SHOW_NO_EXPRESSION", X_TRANSITION_INVALID_CHILDREN: 62, 62: "X_TRANSITION_INVALID_CHILDREN", X_IGNORED_SIDE_EFFECT_TAG: 63, 63: "X_IGNORED_SIDE_EFFECT_TAG", __EXTEND_POINT__: 64, 64: "__EXTEND_POINT__" }, DOMErrorMessages: Vt, DOMNodeTransforms: Ut, ElementTypes: { ELEMENT: 0, 0: "ELEMENT", COMPONENT: 1, 1: "COMPONENT", SLOT: 2, 2: "SLOT", TEMPLATE: 3, 3: "TEMPLATE" }, ErrorCodes: { ABRUPT_CLOSING_OF_EMPTY_COMMENT: 0, 0: "ABRUPT_CLOSING_OF_EMPTY_COMMENT", CDATA_IN_HTML_CONTENT: 1, 1: "CDATA_IN_HTML_CONTENT", DUPLICATE_ATTRIBUTE: 2, 2: "DUPLICATE_ATTRIBUTE", END_TAG_WITH_ATTRIBUTES: 3, 3: "END_TAG_WITH_ATTRIBUTES", END_TAG_WITH_TRAILING_SOLIDUS: 4, 4: "END_TAG_WITH_TRAILING_SOLIDUS", EOF_BEFORE_TAG_NAME: 5, 5: "EOF_BEFORE_TAG_NAME", EOF_IN_CDATA: 6, 6: "EOF_IN_CDATA", EOF_IN_COMMENT: 7, 7: "EOF_IN_COMMENT", EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT: 8, 8: "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT", EOF_IN_TAG: 9, 9: "EOF_IN_TAG", INCORRECTLY_CLOSED_COMMENT: 10, 10: "INCORRECTLY_CLOSED_COMMENT", INCORRECTLY_OPENED_COMMENT: 11, 11: "INCORRECTLY_OPENED_COMMENT", INVALID_FIRST_CHARACTER_OF_TAG_NAME: 12, 12: "INVALID_FIRST_CHARACTER_OF_TAG_NAME", MISSING_ATTRIBUTE_VALUE: 13, 13: "MISSING_ATTRIBUTE_VALUE", MISSING_END_TAG_NAME: 14, 14: "MISSING_END_TAG_NAME", MISSING_WHITESPACE_BETWEEN_ATTRIBUTES: 15, 15: "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES", NESTED_COMMENT: 16, 16: "NESTED_COMMENT", UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME: 17, 17: "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME", UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE: 18, 18: "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE", UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME: 19, 19: "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME", UNEXPECTED_NULL_CHARACTER: 20, 20: "UNEXPECTED_NULL_CHARACTER", UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME: 21, 21: "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME", UNEXPECTED_SOLIDUS_IN_TAG: 22, 22: "UNEXPECTED_SOLIDUS_IN_TAG", X_INVALID_END_TAG: 23, 23: "X_INVALID_END_TAG", X_MISSING_END_TAG: 24, 24: "X_MISSING_END_TAG", X_MISSING_INTERPOLATION_END: 25, 25: "X_MISSING_INTERPOLATION_END", X_MISSING_DIRECTIVE_NAME: 26, 26: "X_MISSING_DIRECTIVE_NAME", X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END: 27, 27: "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END", X_V_IF_NO_EXPRESSION: 28, 28: "X_V_IF_NO_EXPRESSION", X_V_IF_SAME_KEY: 29, 29: "X_V_IF_SAME_KEY", X_V_ELSE_NO_ADJACENT_IF: 30, 30: "X_V_ELSE_NO_ADJACENT_IF", X_V_FOR_NO_EXPRESSION: 31, 31: "X_V_FOR_NO_EXPRESSION", X_V_FOR_MALFORMED_EXPRESSION: 32, 32: "X_V_FOR_MALFORMED_EXPRESSION", X_V_FOR_TEMPLATE_KEY_PLACEMENT: 33, 33: "X_V_FOR_TEMPLATE_KEY_PLACEMENT", X_V_BIND_NO_EXPRESSION: 34, 34: "X_V_BIND_NO_EXPRESSION", X_V_ON_NO_EXPRESSION: 35, 35: "X_V_ON_NO_EXPRESSION", X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET: 36, 36: "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET", X_V_SLOT_MIXED_SLOT_USAGE: 37, 37: "X_V_SLOT_MIXED_SLOT_USAGE", X_V_SLOT_DUPLICATE_SLOT_NAMES: 38, 38: "X_V_SLOT_DUPLICATE_SLOT_NAMES", X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN: 39, 39: "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN", X_V_SLOT_MISPLACED: 40, 40: "X_V_SLOT_MISPLACED", X_V_MODEL_NO_EXPRESSION: 41, 41: "X_V_MODEL_NO_EXPRESSION", X_V_MODEL_MALFORMED_EXPRESSION: 42, 42: "X_V_MODEL_MALFORMED_EXPRESSION", X_V_MODEL_ON_SCOPE_VARIABLE: 43, 43: "X_V_MODEL_ON_SCOPE_VARIABLE", X_V_MODEL_ON_PROPS: 44, 44: "X_V_MODEL_ON_PROPS", X_INVALID_EXPRESSION: 45, 45: "X_INVALID_EXPRESSION", X_KEEP_ALIVE_INVALID_CHILDREN: 46, 46: "X_KEEP_ALIVE_INVALID_CHILDREN", X_PREFIX_ID_NOT_SUPPORTED: 47, 47: "X_PREFIX_ID_NOT_SUPPORTED", X_MODULE_MODE_NOT_SUPPORTED: 48, 48: "X_MODULE_MODE_NOT_SUPPORTED", X_CACHE_HANDLER_NOT_SUPPORTED: 49, 49: "X_CACHE_HANDLER_NOT_SUPPORTED", X_SCOPE_ID_NOT_SUPPORTED: 50, 50: "X_SCOPE_ID_NOT_SUPPORTED", X_VNODE_HOOKS: 51, 51: "X_VNODE_HOOKS", X_V_BIND_INVALID_SAME_NAME_ARGUMENT: 52, 52: "X_V_BIND_INVALID_SAME_NAME_ARGUMENT", __EXTEND_POINT__: 53, 53: "__EXTEND_POINT__" }, FRAGMENT: z2, GUARD_REACTIVE_PROPS: xe, IS_MEMO_SAME: Pe, IS_REF: Re, KEEP_ALIVE: Y, MERGE_PROPS: ge, NORMALIZE_CLASS: Ee, NORMALIZE_PROPS: Se, NORMALIZE_STYLE: _e, Namespaces: { HTML: 0, 0: "HTML", SVG: 1, 1: "SVG", MATH_ML: 2, 2: "MATH_ML" }, NodeTypes: { ROOT: 0, 0: "ROOT", ELEMENT: 1, 1: "ELEMENT", TEXT: 2, 2: "TEXT", COMMENT: 3, 3: "COMMENT", SIMPLE_EXPRESSION: 4, 4: "SIMPLE_EXPRESSION", INTERPOLATION: 5, 5: "INTERPOLATION", ATTRIBUTE: 6, 6: "ATTRIBUTE", DIRECTIVE: 7, 7: "DIRECTIVE", COMPOUND_EXPRESSION: 8, 8: "COMPOUND_EXPRESSION", IF: 9, 9: "IF", IF_BRANCH: 10, 10: "IF_BRANCH", FOR: 11, 11: "FOR", TEXT_CALL: 12, 12: "TEXT_CALL", VNODE_CALL: 13, 13: "VNODE_CALL", JS_CALL_EXPRESSION: 14, 14: "JS_CALL_EXPRESSION", JS_OBJECT_EXPRESSION: 15, 15: "JS_OBJECT_EXPRESSION", JS_PROPERTY: 16, 16: "JS_PROPERTY", JS_ARRAY_EXPRESSION: 17, 17: "JS_ARRAY_EXPRESSION", JS_FUNCTION_EXPRESSION: 18, 18: "JS_FUNCTION_EXPRESSION", JS_CONDITIONAL_EXPRESSION: 19, 19: "JS_CONDITIONAL_EXPRESSION", JS_CACHE_EXPRESSION: 20, 20: "JS_CACHE_EXPRESSION", JS_BLOCK_STATEMENT: 21, 21: "JS_BLOCK_STATEMENT", JS_TEMPLATE_LITERAL: 22, 22: "JS_TEMPLATE_LITERAL", JS_IF_STATEMENT: 23, 23: "JS_IF_STATEMENT", JS_ASSIGNMENT_EXPRESSION: 24, 24: "JS_ASSIGNMENT_EXPRESSION", JS_SEQUENCE_EXPRESSION: 25, 25: "JS_SEQUENCE_EXPRESSION", JS_RETURN_STATEMENT: 26, 26: "JS_RETURN_STATEMENT" }, OPEN_BLOCK: Q, POP_SCOPE_ID: Ie, PUSH_SCOPE_ID: be, RENDER_LIST: ue, RENDER_SLOT: he, RESOLVE_COMPONENT: ae, RESOLVE_DIRECTIVE: le, RESOLVE_DYNAMIC_COMPONENT: ce, RESOLVE_FILTER: pe, SET_BLOCK_TRACKING: Te, SUSPENSE: K, TELEPORT: J, TO_DISPLAY_STRING: me, TO_HANDLERS: ve, TO_HANDLER_KEY: ye, TRANSITION: Lt, TRANSITION_GROUP: kt, TS_NODE_TYPES: Xe, UNREF: Ae, V_MODEL_CHECKBOX: bt, V_MODEL_DYNAMIC: At, V_MODEL_RADIO: Tt, V_MODEL_SELECT: Ot, V_MODEL_TEXT: It, V_ON_WITH_KEYS: wt, V_ON_WITH_MODIFIERS: Rt, V_SHOW: Pt, WITH_CTX: Oe, WITH_DIRECTIVES: de, WITH_MEMO: we, advancePositionWithClone: /* @__PURE__ */ __name(function(e4, t5, n2 = t5.length) {
      return advancePositionWithMutation({ offset: e4.offset, line: e4.line, column: e4.column }, t5, n2);
    }, "advancePositionWithClone"), advancePositionWithMutation, assert: /* @__PURE__ */ __name(function(e4, t5) {
      if (!e4) throw new Error(t5 || "unexpected compiler condition");
    }, "assert"), baseCompile, baseParse, buildDirectiveArgs, buildProps, buildSlots, checkCompatEnabled, compile: /* @__PURE__ */ __name(function(e4, t5 = {}) {
      return baseCompile(e4, n({}, Dt, t5, { nodeTransforms: [ignoreSideEffectTags, ...Ut, ...t5.nodeTransforms || []], directiveTransforms: n({}, jt, t5.directiveTransforms || {}), transformHoist: null }));
    }, "compile"), convertToBlock, createArrayExpression, createAssignmentExpression: /* @__PURE__ */ __name(function(e4, t5) {
      return { type: 24, left: e4, right: t5, loc: ke };
    }, "createAssignmentExpression"), createBlockStatement, createCacheExpression, createCallExpression, createCompilerError, createCompoundExpression, createConditionalExpression, createDOMCompilerError, createForLoopParams, createFunctionExpression, createIfStatement: /* @__PURE__ */ __name(function(e4, t5, n2) {
      return { type: 23, test: e4, consequent: t5, alternate: n2, loc: ke };
    }, "createIfStatement"), createInterpolation: /* @__PURE__ */ __name(function(e4, t5) {
      return { type: 5, loc: t5, content: isString(e4) ? createSimpleExpression(e4, false, t5) : e4 };
    }, "createInterpolation"), createObjectExpression, createObjectProperty, createReturnStatement: /* @__PURE__ */ __name(function(e4) {
      return { type: 26, returns: e4, loc: ke };
    }, "createReturnStatement"), createRoot, createSequenceExpression: /* @__PURE__ */ __name(function(e4) {
      return { type: 25, expressions: e4, loc: ke };
    }, "createSequenceExpression"), createSimpleExpression, createStructuralDirectiveTransform, createTemplateLiteral: /* @__PURE__ */ __name(function(e4) {
      return { type: 22, elements: e4, loc: ke };
    }, "createTemplateLiteral"), createTransformContext, createVNodeCall, errorMessages: He, extractIdentifiers, findDir, findProp, forAliasRE: Ye, generate, generateCodeFrame, getBaseTransformPreset, getConstantType, getMemoedVNodeCall, getVNodeBlockHelper, getVNodeHelper, hasDynamicKeyVBind, hasScopeRef: /* @__PURE__ */ __name(function hasScopeRef(e4, t5) {
      if (!e4 || 0 === Object.keys(t5).length) return false;
      switch (e4.type) {
        case 1:
          for (let n2 = 0; n2 < e4.props.length; n2++) {
            const r4 = e4.props[n2];
            if (7 === r4.type && (hasScopeRef(r4.arg, t5) || hasScopeRef(r4.exp, t5))) return true;
          }
          return e4.children.some((e5) => hasScopeRef(e5, t5));
        case 11:
          return !!hasScopeRef(e4.source, t5) || e4.children.some((e5) => hasScopeRef(e5, t5));
        case 9:
          return e4.branches.some((e5) => hasScopeRef(e5, t5));
        case 10:
          return !!hasScopeRef(e4.condition, t5) || e4.children.some((e5) => hasScopeRef(e5, t5));
        case 4:
          return !e4.isStatic && isSimpleIdentifier(e4.content) && !!t5[e4.content];
        case 8:
          return e4.children.some((e5) => isObject(e5) && hasScopeRef(e5, t5));
        case 5:
        case 12:
          return hasScopeRef(e4.content, t5);
        default:
          return false;
      }
    }, "hasScopeRef"), helperNameMap: Le, injectProp, isAllWhitespace, isCommentOrWhitespace, isCoreComponent, isFnExpression: Je, isFnExpressionBrowser, isFnExpressionNode: ze, isFunctionType: /* @__PURE__ */ __name((e4) => /Function(?:Expression|Declaration)$|Method$/.test(e4.type), "isFunctionType"), isInDestructureAssignment: /* @__PURE__ */ __name(function(e4, t5) {
      if (e4 && ("ObjectProperty" === e4.type || "ArrayPattern" === e4.type)) {
        let e5 = t5.length;
        for (; e5--; ) {
          const n2 = t5[e5];
          if ("AssignmentExpression" === n2.type) return true;
          if ("ObjectProperty" !== n2.type && !n2.type.endsWith("Pattern")) break;
        }
      }
      return false;
    }, "isInDestructureAssignment"), isInNewExpression: /* @__PURE__ */ __name(function(e4) {
      let t5 = e4.length;
      for (; t5--; ) {
        const n2 = e4[t5];
        if ("NewExpression" === n2.type) return true;
        if ("MemberExpression" !== n2.type) break;
      }
      return false;
    }, "isInNewExpression"), isMemberExpression: Ge, isMemberExpressionBrowser, isMemberExpressionNode: We, isReferencedIdentifier: /* @__PURE__ */ __name(function(e4, t5, n2) {
      return false;
    }, "isReferencedIdentifier"), isSimpleIdentifier, isSlotOutlet, isStaticArgOf, isStaticExp, isStaticProperty, isStaticPropertyKey: /* @__PURE__ */ __name((e4, t5) => isStaticProperty(t5) && t5.key === e4, "isStaticPropertyKey"), isTemplateNode, isText: isText$1, isVPre, isVSlot, isWhitespaceText, locStub: ke, noopDirectiveTransform, parse: /* @__PURE__ */ __name(function(e4, t5 = {}) {
      return baseParse(e4, n({}, Dt, t5));
    }, "parse"), parserOptions: Dt, processExpression, processFor, processIf, processSlotOutlet, registerRuntimeHelpers, resolveComponentType, stringifyExpression: /* @__PURE__ */ __name(function stringifyExpression(e4) {
      return isString(e4) ? e4 : 4 === e4.type ? e4.content : e4.children.map(stringifyExpression).join("");
    }, "stringifyExpression"), toValidAssetId, trackSlotScopes, trackVForSlotScopes: /* @__PURE__ */ __name((e4, t5) => {
      let n2;
      if (isTemplateNode(e4) && e4.props.some(isVSlot) && (n2 = findDir(e4, "for"))) {
        const e5 = n2.forParseResult;
        if (e5) {
          finalizeForParseResult(e5);
          const { value: n3, key: r4, index: o4 } = e5, { addIdentifiers: s4, removeIdentifiers: i4 } = t5;
          return n3 && s4(n3), r4 && s4(r4), o4 && s4(o4), () => {
            n3 && i4(n3), r4 && i4(r4), o4 && i4(o4);
          };
        }
      }
    }, "trackVForSlotScopes"), transform, transformBind, transformElement, transformExpression: /* @__PURE__ */ __name((e4, t5) => {
      if (5 === e4.type) e4.content = processExpression(e4.content, t5);
      else if (1 === e4.type) {
        const n2 = findDir(e4, "memo");
        for (let r4 = 0; r4 < e4.props.length; r4++) {
          const o4 = e4.props[r4];
          if (7 === o4.type && "for" !== o4.name) {
            const e5 = o4.exp, r5 = o4.arg;
            !e5 || 4 !== e5.type || "on" === o4.name && r5 || n2 && r5 && 4 === r5.type && "key" === r5.content || (o4.exp = processExpression(e5, t5, "slot" === o4.name)), r5 && 4 === r5.type && !r5.isStatic && (o4.arg = processExpression(r5, t5));
          }
        }
      }
    }, "transformExpression"), transformModel: transformModel$1, transformOn: transformOn$1, transformStyle, transformVBindShorthand, traverseNode, unwrapTSNode: /* @__PURE__ */ __name(function unwrapTSNode(e4) {
      return Xe.includes(e4.type) ? unwrapTSNode(e4.expression) : e4;
    }, "unwrapTSNode"), validFirstIdentCharRE: Ue, walkBlockDeclarations, walkFunctionParams: /* @__PURE__ */ __name(function(e4, t5) {
      for (const n2 of e4.params) for (const e5 of extractIdentifiers(n2)) t5(e5);
    }, "walkFunctionParams"), walkIdentifiers: /* @__PURE__ */ __name(function(e4, t5, n2 = false, r4 = [], o4 = /* @__PURE__ */ Object.create(null)) {
    }, "walkIdentifiers"), warnDeprecation: /* @__PURE__ */ __name(function(e4, t5, n2, ...r4) {
      if ("suppress-warning" === getCompatValue(e4, t5)) return;
      const { message: o4, link: s4 } = Fe[e4], i4 = `(deprecation ${e4}) ${"function" == typeof o4 ? o4(...r4) : o4}${s4 ? `
  Details: ${s4}` : ""}`, a6 = new SyntaxError(i4);
      a6.code = e4, n2 && (a6.loc = n2), t5.onWarn(a6);
    }, "warnDeprecation") }, Symbol.toStringTag, { value: "Module" }));
    !(function(e4) {
      Object.defineProperty(e4, "__esModule", { value: true });
      var t5 = $t, n2 = gr, r4 = j;
      function _interopNamespaceDefault(e5) {
        var t6 = /* @__PURE__ */ Object.create(null);
        if (e5) for (var n3 in e5) t6[n3] = e5[n3];
        return t6.default = e5, Object.freeze(t6);
      }
      __name(_interopNamespaceDefault, "_interopNamespaceDefault");
      var o4 = _interopNamespaceDefault(n2);
      const s4 = /* @__PURE__ */ Object.create(null);
      function compileToFunction(e5, n3) {
        if (!r4.isString(e5)) {
          if (!e5.nodeType) return r4.NOOP;
          e5 = e5.innerHTML;
        }
        const i4 = r4.genCacheKey(e5, n3), a6 = s4[i4];
        if (a6) return a6;
        if ("#" === e5[0]) {
          const t6 = document.querySelector(e5);
          e5 = t6 ? t6.innerHTML : "";
        }
        const c4 = r4.extend({ hoistStatic: true, onError: void 0, onWarn: r4.NOOP }, n3);
        c4.isCustomElement || "undefined" == typeof customElements || (c4.isCustomElement = (e6) => !!customElements.get(e6));
        const { code: l3 } = t5.compile(e5, c4), p3 = new Function("Vue", l3)(o4);
        return p3._rc = true, s4[i4] = p3;
      }
      __name(compileToFunction, "compileToFunction");
      n2.registerRuntimeCompiler(compileToFunction), e4.compile = compileToFunction, Object.keys(n2).forEach(function(t6) {
        "default" === t6 || Object.prototype.hasOwnProperty.call(e4, t6) || (e4[t6] = n2[t6]);
      });
    })(q), G.exports = q;
    Wt = G.exports;
    globalThis.$fetch || (globalThis.$fetch = Ls.create({ baseURL: baseURL() })), "global" in globalThis || (globalThis.global = globalThis);
    Gt = { componentName: "NuxtLink" };
    qt = "nuxt-app";
    __name(getNuxtAppCtx, "getNuxtAppCtx");
    zt = "__nuxt_plugin";
    __name(registerPluginHooks, "registerPluginHooks");
    __name(defineNuxtPlugin, "defineNuxtPlugin");
    __name(callWithNuxt, "callWithNuxt");
    __name(useNuxtApp, "useNuxtApp");
    __name(useRuntimeConfig, "useRuntimeConfig");
    __name(defineGetter, "defineGetter");
    Jt = Symbol("route");
    globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
    useRouter = /* @__PURE__ */ __name(() => useNuxtApp()?.$router, "useRouter");
    __name(defineNuxtRouteMiddleware, "defineNuxtRouteMiddleware");
    Kt = /"/g;
    navigateTo = /* @__PURE__ */ __name((r4, s4) => {
      r4 ||= "/";
      const i4 = "string" == typeof r4 ? r4 : "path" in r4 ? resolveRouteObject(r4) : useRouter().resolve(r4).href, a6 = hasProtocol(i4, { acceptRelative: true }), c4 = s4?.external || a6;
      if (c4) {
        if (!s4?.external) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const { protocol: e4 } = new URL(i4, "http://localhost");
        if (e4 && isScriptProtocol(e4)) throw new Error(`Cannot navigate to a URL with '${e4}' protocol.`);
      }
      const l3 = (() => {
        try {
          if (useNuxtApp()._processingMiddleware) return true;
        } catch {
          return false;
        }
        return false;
      })(), p3 = useRouter(), d3 = useNuxtApp();
      if (d3.ssrContext) {
        const e4 = "string" == typeof r4 || c4 ? i4 : p3.resolve(r4).fullPath || "/", t5 = c4 ? i4 : joinURL(useRuntimeConfig().app.baseURL, e4), redirect = /* @__PURE__ */ __name(async function(e5) {
          await d3.callHook("app:redirected");
          const n2 = t5.replace(Kt, "%22"), r5 = (function(e6, t6 = false) {
            const n3 = new URL(e6, "http://localhost");
            if (!t6) return n3.pathname + n3.search + n3.hash;
            if (e6.startsWith("//")) return n3.toString().replace(n3.protocol, "");
            return n3.toString();
          })(t5, a6);
          return d3.ssrContext._renderResponse = { statusCode: sanitizeStatusCode(s4?.redirectCode || 302, 302), body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${n2}"></head></html>`, headers: { location: r5 } }, e5;
        }, "redirect");
        return !c4 && l3 ? (p3.afterEach((t6) => t6.fullPath === e4 ? redirect(false) : void 0), r4) : redirect(!l3 && void 0);
      }
      return c4 ? (d3._scope.stop(), s4?.replace ? (void 0).replace(i4) : (void 0).href = i4, l3 ? !!d3.isHydrating && new Promise(() => {
      }) : Promise.resolve()) : s4?.replace ? p3.replace(r4) : p3.push(r4);
    }, "navigateTo");
    __name(resolveRouteObject, "resolveRouteObject");
    Yt = "__nuxt_error";
    useError = /* @__PURE__ */ __name(() => Wt.toRef(useNuxtApp().payload, "error"), "useError");
    showError = /* @__PURE__ */ __name((e4) => {
      const t5 = createError2(e4);
      try {
        const e5 = useError();
        0, e5.value ||= t5;
      } catch {
        throw t5;
      }
      return t5;
    }, "showError");
    createError2 = /* @__PURE__ */ __name((e4) => {
      const t5 = createError(e4);
      return Object.defineProperty(t5, Yt, { value: true, configurable: false, writable: false }), t5;
    }, "createError");
    Zt = defineNuxtPlugin({ name: "nuxt:head", enforce: "pre", setup(e4) {
      const t5 = e4.ssrContext.head;
      e4.vueApp.use(t5);
    } });
    Qt = [defineNuxtRouteMiddleware(async (e4) => {
    })];
    __name(getRouteFromPath, "getRouteFromPath");
    __name(useHead, "useHead");
    __name(definePayloadReducer, "definePayloadReducer");
    en = [["NuxtError", (e4) => {
      return !!(t5 = e4) && "object" == typeof t5 && Yt in t5 && e4.toJSON();
      var t5;
    }], ["EmptyShallowRef", (e4) => Wt.isRef(e4) && Wt.isShallow(e4) && !e4.value && ("bigint" == typeof e4.value ? "0n" : JSON.stringify(e4.value) || "_")], ["EmptyRef", (e4) => Wt.isRef(e4) && !e4.value && ("bigint" == typeof e4.value ? "0n" : JSON.stringify(e4.value) || "_")], ["ShallowRef", (e4) => Wt.isRef(e4) && Wt.isShallow(e4) && e4.value], ["ShallowReactive", (e4) => Wt.isReactive(e4) && Wt.isShallow(e4) && Wt.toRaw(e4)], ["Ref", (e4) => Wt.isRef(e4) && e4.value], ["Reactive", (e4) => Wt.isReactive(e4) && Wt.toRaw(e4)]];
    tn = [Zt, defineNuxtPlugin({ name: "nuxt:router", enforce: "pre", setup(e4) {
      const t5 = e4.ssrContext.url, n2 = [], r4 = { "navigate:before": [], "resolve:before": [], "navigate:after": [], error: [] }, registerHook = /* @__PURE__ */ __name((e5, t6) => (r4[e5].push(t6), () => r4[e5].splice(r4[e5].indexOf(t6), 1)), "registerHook");
      useRuntimeConfig().app.baseURL;
      const o4 = Wt.reactive(getRouteFromPath(t5));
      async function handleNavigation(e5, t6) {
        try {
          const t7 = getRouteFromPath(e5);
          for (const e6 of r4["navigate:before"]) {
            const n3 = await e6(t7, o4);
            if (false === n3 || n3 instanceof Error) return;
            if ("string" == typeof n3 && n3.length) return handleNavigation(n3, true);
          }
          for (const e6 of r4["resolve:before"]) await e6(t7, o4);
          Object.assign(o4, t7);
          for (const e6 of r4["navigate:after"]) await e6(t7, o4);
        } catch (e6) {
          for (const t7 of r4.error) await t7(e6);
        }
      }
      __name(handleNavigation, "handleNavigation");
      const s4 = { currentRoute: Wt.computed(() => o4), isReady: /* @__PURE__ */ __name(() => Promise.resolve(), "isReady"), options: {}, install: /* @__PURE__ */ __name(() => Promise.resolve(), "install"), push: /* @__PURE__ */ __name((e5) => handleNavigation(e5), "push"), replace: /* @__PURE__ */ __name((e5) => handleNavigation(e5), "replace"), back: /* @__PURE__ */ __name(() => (void 0).history.go(-1), "back"), go: /* @__PURE__ */ __name((e5) => (void 0).history.go(e5), "go"), forward: /* @__PURE__ */ __name(() => (void 0).history.go(1), "forward"), beforeResolve: /* @__PURE__ */ __name((e5) => registerHook("resolve:before", e5), "beforeResolve"), beforeEach: /* @__PURE__ */ __name((e5) => registerHook("navigate:before", e5), "beforeEach"), afterEach: /* @__PURE__ */ __name((e5) => registerHook("navigate:after", e5), "afterEach"), onError: /* @__PURE__ */ __name((e5) => registerHook("error", e5), "onError"), resolve: getRouteFromPath, addRoute: /* @__PURE__ */ __name((e5, t6) => {
        n2.push(t6);
      }, "addRoute"), getRoutes: /* @__PURE__ */ __name(() => n2, "getRoutes"), hasRoute: /* @__PURE__ */ __name((e5) => n2.some((t6) => t6.name === e5), "hasRoute"), removeRoute: /* @__PURE__ */ __name((e5) => {
        const t6 = n2.findIndex((t7) => t7.name === e5);
        -1 !== t6 && n2.splice(t6, 1);
      }, "removeRoute") };
      e4.vueApp.component("RouterLink", Wt.defineComponent({ functional: true, props: { to: { type: String, required: true }, custom: Boolean, replace: Boolean, activeClass: String, exactActiveClass: String, ariaCurrentValue: String }, setup: /* @__PURE__ */ __name((e5, { slots: t6 }) => {
        const navigate = /* @__PURE__ */ __name(() => handleNavigation(e5.to, e5.replace), "navigate");
        return () => {
          const n3 = s4.resolve(e5.to);
          return e5.custom ? t6.default?.({ href: e5.to, navigate, route: n3 }) : Wt.h("a", { href: e5.to, onClick: /* @__PURE__ */ __name((e6) => (e6.preventDefault(), navigate()), "onClick") }, t6);
        };
      }, "setup") })), e4._route = o4, e4._middleware ||= { global: [], named: {} };
      const i4 = e4.payload.state._layout;
      return e4.hooks.hookOnce("app:created", async () => {
        s4.beforeEach(async (n3, r5) => {
          if (n3.meta = Wt.reactive(n3.meta || {}), e4.isHydrating && i4 && !Wt.isReadonly(n3.meta.layout) && (n3.meta.layout = i4), e4._processingMiddleware = true, !e4.ssrContext?.islandContext) {
            const o5 = /* @__PURE__ */ new Set([...Qt, ...e4._middleware.global]);
            {
              const t6 = await e4.runWithContext(() => (async function(e5) {
                const t7 = "string" == typeof e5 ? e5 : e5.path;
                {
                  useNuxtApp().ssrContext._preloadManifest = true;
                  const e6 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
                  return Wt2({}, ...e6.matchAll(t7).reverse());
                }
              })({ path: n3.path }));
              if (t6.appMiddleware) for (const n4 in t6.appMiddleware) {
                const r6 = e4._middleware.named[n4];
                if (!r6) return;
                t6.appMiddleware[n4] ? o5.add(r6) : o5.delete(r6);
              }
            }
            for (const s5 of o5) {
              const o6 = await e4.runWithContext(() => s5(n3, r5));
              if (false === o6 || o6 instanceof Error) {
                const n4 = o6 || createError({ statusCode: 404, statusMessage: `Page Not Found: ${t5}`, data: { path: t5 } });
                return delete e4._processingMiddleware, e4.runWithContext(() => showError(n4));
              }
              if (true !== o6 && (o6 || false === o6)) return o6;
            }
          }
        }), s4.afterEach(() => {
          delete e4._processingMiddleware;
        }), await s4.replace(t5), isEqual(o4.fullPath, t5) || await e4.runWithContext(() => navigateTo(o4.fullPath));
      }), { provide: { route: o4, router: s4 } };
    } }), defineNuxtPlugin({ name: "nuxt:revive-payload:server", setup() {
      for (const [e4, t5] of en) definePayloadReducer(e4, t5);
    } }), defineNuxtPlugin({ name: "nuxt:global-components" })];
    nn = Wt.defineComponent({ name: "ServerPlaceholder", render: /* @__PURE__ */ __name(() => Wt.createElementBlock("div"), "render") });
    _export_sfc = /* @__PURE__ */ __name((e4, t5) => {
      const n2 = e4.__vccOpts || e4;
      for (const [e5, r4] of t5) n2[e5] = r4;
      return n2;
    }, "_export_sfc");
    rn = { __name: "NuxtWelcome", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, title: { type: String, default: "Welcome to Nuxt!" } }, setup: /* @__PURE__ */ __name((e4) => (useHead({ title: `${e4.title}`, script: [{ innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ innerHTML: '*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,h2,p,ul{margin:0}ul{list-style:none;padding:0}svg{display:block;vertical-align:middle}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (e5, t5, n2, r4) => {
      t5(`<div${ssrRenderAttrs(Wt.mergeProps({ class: "antialiased bg-white dark:bg-[#020420] dark:text-white flex flex-col items-center justify-center min-h-screen place-content-center sm:text-base text-[#020420] text-sm" }, r4))} data-v-a6629c41><div class="flex flex-col mt-6 sm:mt-0" data-v-a6629c41><h1 class="flex flex-col gap-y-4 items-center justify-center" data-v-a6629c41><a href="https://nuxt.com?utm_source=nuxt-welcome" target="_blank" class="gap-4 inline-flex items-end" data-v-a6629c41><svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-label="Nuxt" class="h-8 sm:h-12" viewBox="0 0 800 200" data-v-a6629c41><path fill="#00dc82" d="M168.303 200h111.522c3.543 0 7.022-.924 10.09-2.679A20.1 20.1 0 0 0 297.3 190a19.86 19.86 0 0 0 2.7-10.001 19.86 19.86 0 0 0-2.709-9.998L222.396 41.429a20.1 20.1 0 0 0-7.384-7.32 20.3 20.3 0 0 0-10.088-2.679c-3.541 0-7.02.925-10.087 2.68a20.1 20.1 0 0 0-7.384 7.32l-19.15 32.896L130.86 9.998a20.1 20.1 0 0 0-7.387-7.32A20.3 20.3 0 0 0 113.384 0c-3.542 0-7.022.924-10.09 2.679a20.1 20.1 0 0 0-7.387 7.319L2.709 170A19.85 19.85 0 0 0 0 179.999c-.002 3.511.93 6.96 2.7 10.001a20.1 20.1 0 0 0 7.385 7.321A20.3 20.3 0 0 0 20.175 200h70.004c27.737 0 48.192-12.075 62.266-35.633l34.171-58.652 18.303-31.389 54.93 94.285h-73.233zm-79.265-31.421-48.854-.011 73.232-125.706 36.541 62.853-24.466 42.01c-9.347 15.285-19.965 20.854-36.453 20.854" data-v-a6629c41></path><path fill="currentColor" d="M377 200a4 4 0 0 0 4-4v-93s5.244 8.286 15 25l38.707 66.961c1.789 3.119 5.084 5.039 8.649 5.039H470V50h-27a4 4 0 0 0-4 4v94l-17-30-36.588-62.98c-1.792-3.108-5.081-5.02-8.639-5.02H350v150zm299.203-56.143L710.551 92h-25.73a9.97 9.97 0 0 0-8.333 4.522L660.757 120.5l-15.731-23.978A9.97 9.97 0 0 0 636.693 92h-25.527l34.348 51.643L608.524 200h24.966a9.97 9.97 0 0 0 8.29-4.458l19.18-28.756 18.981 28.72a9.97 9.97 0 0 0 8.313 4.494h24.736zM724.598 92h19.714V60.071h28.251V92H800v24.857h-27.437V159.5c0 10.5 5.284 15.429 14.43 15.429H800V200h-16.869c-23.576 0-38.819-14.143-38.819-39.214v-43.929h-19.714zM590 92h-15c-3.489 0-6.218.145-8.5 2.523-2.282 2.246-2.5 3.63-2.5 7.066v52.486c0 8.058-.376 12.962-4 16.925-3.624 3.831-8.619 5-16 5-7.247 0-12.376-1.169-16-5-3.624-3.963-4-8.867-4-16.925v-52.486c0-3.435-.218-4.82-2.5-7.066C519.218 92.145 516.489 92 513 92h-15v62.422q0 21.006 11.676 33.292C517.594 195.905 529.103 200 544 200s26.204-4.095 34.123-12.286Q590 175.428 590 154.422z" data-v-a6629c41></path></svg> <span class="bg-[#00DC42]/10 border border-[#00DC42]/50 font-mono font-semibold group-hover:bg-[#00DC42]/15 group-hover:border-[#00DC42] inline-block leading-none px-2 py-1 rounded sm:px-2.5 sm:py-1.5 sm:text-[14px] text-[#00DC82] text-[12px]" data-v-a6629c41>4.2.2</span></a></h1><div class="gap-4 grid grid-cols-1 max-w-[980px] mt-6 px-4 sm:gap-6 sm:grid-cols-3 sm:mt-10 w-full" data-v-a6629c41><div class="bg-gray-50/10 border border-[#00DC42]/50 dark:bg-white/5 flex flex-col gap-1 p-6 rounded-lg sm:col-span-2" data-v-a6629c41><div class="bg-[#00DC82]/5 border border-[#00DC82] dark:bg-[#020420] dark:border-[#00DC82]/80 dark:text-[#00DC82] flex h-[32px] items-center justify-center rounded text-[#00DC82] w-[32px]" data-v-a6629c41><svg xmlns="http://www.w3.org/2000/svg" class="size-[18px]" viewBox="0 0 256 256" data-v-a6629c41><path fill="currentColor" d="m228.1 121.2-143.9-88A8 8 0 0 0 72 40v176a8 8 0 0 0 12.2 6.8l143.9-88a7.9 7.9 0 0 0 0-13.6" opacity=".2" data-v-a6629c41></path><path fill="currentColor" d="M80 232a15.5 15.5 0 0 1-7.8-2.1A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9 15.5 15.5 0 0 1 16.1.3l144 87.9a16 16 0 0 1 0 27.4l-144 87.9A15.4 15.4 0 0 1 80 232m0-192v176l144-88Z" data-v-a6629c41></path></svg></div><h2 class="font-semibold mt-1 text-base" data-v-a6629c41>Get started</h2><p class="dark:text-gray-200 text-gray-700 text-sm" data-v-a6629c41>Remove this welcome page by replacing <a class="bg-green-50 border border-green-600/10 dark:bg-[#020420] dark:border-white/10 dark:text-[#00DC82] font-bold font-mono p-1 rounded text-green-700" data-v-a6629c41>&lt;NuxtWelcome/&gt;</a> in <a href="https://nuxt.com/docs/4.x/directory-structure/app" target="_blank" rel="noopener" class="bg-green-50 border border-green-600/20 dark:bg-[#020420] dark:border-white/20 dark:text-[#00DC82] font-bold font-mono hover:border-[#00DC82] p-1 rounded text-green-700" data-v-a6629c41>app.vue</a> with your own code.</p></div><a href="https://nuxt.com/docs?utm_source=nuxt-welcome" target="_blank" class="bg-gray-50/10 border border-gray-200 dark:bg-white/5 dark:border-white/10 flex flex-col gap-1 group hover:border-[#00DC82] hover:dark:border-[#00DC82] p-6 relative rounded-lg transition-all" data-v-a6629c41><div class="bg-[#00DC82]/5 border border-[#00DC82] dark:bg-[#020420] dark:border-[#00DC82]/50 dark:text-[#00DC82] flex group-hover:dark:border-[#00DC82]/80 h-[32px] items-center justify-center rounded text-[#00DC82] transition-all w-[32px]" data-v-a6629c41><svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 256 256" data-v-a6629c41><path fill="currentColor" d="M136 48v128H88V80H40V48a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8 8 8 0 0 1 8-8h32a8 8 0 0 1 8 8m89.9 149.6-8.3-30.9-46.4 12.5 8.3 30.9a8 8 0 0 0 9.8 5.6l30.9-8.3a8 8 0 0 0 5.7-9.8M184.5 43.1a8.1 8.1 0 0 0-9.8-5.7l-30.9 8.3a8.1 8.1 0 0 0-5.7 9.8l8.3 30.9L192.8 74Z" opacity=".2" data-v-a6629c41></path><path fill="currentColor" d="M233.6 195.6 192.2 41a16 16 0 0 0-19.6-11.3L141.7 38l-1 .3A16 16 0 0 0 128 32H96a15.8 15.8 0 0 0-8 2.2 15.8 15.8 0 0 0-8-2.2H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h32a15.8 15.8 0 0 0 8-2.2 15.8 15.8 0 0 0 8 2.2h32a16 16 0 0 0 16-16v-99.6l27.8 103.7a16 16 0 0 0 15.5 11.9 20 20 0 0 0 4.1-.5l30.9-8.3a16 16 0 0 0 11.3-19.6M156.2 92.1l30.9-8.3 20.7 77.3-30.9 8.3Zm20.5-46.9 6.3 23.1-30.9 8.3-6.3-23.1ZM128 48v120H96V48Zm-48 0v24H48V48ZM48 208V88h32v120Zm80 0H96v-24h32zm90.2-8.3-30.9 8.3-6.3-23.2 31-8.3z" data-v-a6629c41></path></svg></div> <svg xmlns="http://www.w3.org/2000/svg" class="absolute dark:text-white/40 group-hover:size-5 group-hover:text-[#00DC82] right-4 size-4 text-[#020420]/20 top-4 transition-all" viewBox="0 0 256 256" data-v-a6629c41><path fill="currentColor" d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8" data-v-a6629c41></path></svg> <h2 class="font-semibold mt-1 text-base" data-v-a6629c41>Documentation</h2> <p class="dark:text-gray-200 group-hover:dark:text-gray-100 text-gray-700 text-sm" data-v-a6629c41>We highly recommend you take a look at the Nuxt documentation to level up.</p></a></div><div class="gap-4 grid grid-cols-1 max-w-[980px] mt-4 px-4 sm:gap-6 sm:grid-cols-3 sm:mt-6 w-full" data-v-a6629c41><a href="https://nuxt.com/modules?utm_source=nuxt-welcome" target="_blank" class="bg-gray-50/10 border border-gray-200 dark:bg-white/5 dark:border-white/10 flex flex-col gap-1 group hover:border-[#00DC82] hover:dark:border-[#00DC82] p-6 relative rounded-lg transition-all" data-v-a6629c41><div class="bg-[#00DC82]/5 border border-[#00DC82] dark:bg-[#020420] dark:border-[#00DC82]/50 dark:text-[#00DC82] flex group-hover:dark:border-[#00DC82]/80 h-[32px] items-center justify-center rounded text-[#00DC82] transition-all w-[32px]" data-v-a6629c41><svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 256 256" data-v-a6629c41><path fill="currentColor" d="M64 216a8 8 0 0 1-8-8v-42.7a27.6 27.6 0 0 1-14.1 2.6A28 28 0 1 1 56 114.7V72a8 8 0 0 1 8-8h46.7a27.6 27.6 0 0 1-2.6-14.1A28 28 0 1 1 161.3 64H208a8 8 0 0 1 8 8v42.7a27.6 27.6 0 0 0-14.1-2.6 28 28 0 1 0 14.1 53.2V208a8 8 0 0 1-8 8Z" opacity=".2" data-v-a6629c41></path><path fill="currentColor" d="M220.3 158.5a8.1 8.1 0 0 0-7.7-.4 20.2 20.2 0 0 1-23.2-4.4 20 20 0 0 1 13.1-33.6 19.6 19.6 0 0 1 10.1 1.8 8.1 8.1 0 0 0 7.7-.4 8.2 8.2 0 0 0 3.7-6.8V72a16 16 0 0 0-16-16h-36.2c.1-1.3.2-2.7.2-4a36.1 36.1 0 0 0-38.3-35.9 36 36 0 0 0-33.6 33.3 36.4 36.4 0 0 0 .1 6.6H64a16 16 0 0 0-16 16v32.2l-4-.2a35.6 35.6 0 0 0-26.2 11.4 35.3 35.3 0 0 0-9.7 26.9 36 36 0 0 0 33.3 33.6 36.4 36.4 0 0 0 6.6-.1V208a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-42.7a8.2 8.2 0 0 0-3.7-6.8M208 208H64v-42.7a8.2 8.2 0 0 0-3.7-6.8 8.1 8.1 0 0 0-7.7-.4 19.6 19.6 0 0 1-10.1 1.8 20 20 0 0 1-13.1-33.6 20.2 20.2 0 0 1 23.2-4.4 8.1 8.1 0 0 0 7.7-.4 8.2 8.2 0 0 0 3.7-6.8V72h46.7a8.2 8.2 0 0 0 6.8-3.7 8.1 8.1 0 0 0 .4-7.7 19.6 19.6 0 0 1-1.8-10.1 20 20 0 0 1 33.6-13.1 20.2 20.2 0 0 1 4.4 23.2 8.1 8.1 0 0 0 .4 7.7 8.2 8.2 0 0 0 6.8 3.7H208v32.2a36.4 36.4 0 0 0-6.6-.1 36 36 0 0 0-33.3 33.6A36.1 36.1 0 0 0 204 176l4-.2Z" data-v-a6629c41></path></svg></div> <svg xmlns="http://www.w3.org/2000/svg" class="absolute dark:text-white/40 group-hover:size-5 group-hover:text-[#00DC82] right-4 size-4 text-[#020420]/20 top-4 transition-all" viewBox="0 0 256 256" data-v-a6629c41><path fill="currentColor" d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8" data-v-a6629c41></path></svg> <h2 class="font-semibold mt-1 text-base" data-v-a6629c41>Modules</h2> <p class="dark:text-gray-200 group-hover:dark:text-gray-100 text-gray-700 text-sm" data-v-a6629c41>Discover our list of modules to supercharge your Nuxt project.</p></a> <a href="https://nuxt.com/docs/4.x/examples?utm_source=nuxt-welcome" target="_blank" class="bg-gray-50/10 border border-gray-200 dark:bg-white/5 dark:border-white/10 flex flex-col gap-1 group hover:border-[#00DC82] hover:dark:border-[#00DC82] p-6 relative rounded-lg transition-all" data-v-a6629c41><div class="bg-[#00DC82]/5 border border-[#00DC82] dark:bg-[#020420] dark:border-[#00DC82]/50 dark:text-[#00DC82] flex group-hover:dark:border-[#00DC82]/80 h-[32px] items-center justify-center rounded text-[#00DC82] transition-all w-[32px]" data-v-a6629c41><svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 256 256" data-v-a6629c41><path fill="currentColor" d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2" data-v-a6629c41></path><path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM80 84a12 12 0 1 1-12-12 12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12" data-v-a6629c41></path></svg></div> <svg xmlns="http://www.w3.org/2000/svg" class="absolute dark:text-white/40 group-hover:size-5 group-hover:text-[#00DC82] right-4 size-4 text-[#020420]/20 top-4 transition-all" viewBox="0 0 256 256" data-v-a6629c41><path fill="currentColor" d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8" data-v-a6629c41></path></svg> <h2 class="font-semibold mt-1 text-base" data-v-a6629c41>Examples</h2> <p class="dark:text-gray-200 group-hover:dark:text-gray-100 text-gray-700 text-sm" data-v-a6629c41>Explore different way of using Nuxt features and get inspired.</p></a> <a href="https://nuxt.com/deploy?utm_source=nuxt-welcome" target="_blank" class="bg-gray-50/10 border border-gray-200 dark:bg-white/5 dark:border-white/10 flex flex-col gap-1 group hover:border-[#00DC82] hover:dark:border-[#00DC82] p-6 relative rounded-lg transition-all" data-v-a6629c41><div class="bg-[#00DC82]/5 border border-[#00DC82] dark:bg-[#020420] dark:border-[#00DC82]/50 dark:text-[#00DC82] flex group-hover:dark:border-[#00DC82]/80 h-[32px] items-center justify-center rounded text-[#00DC82] transition-all w-[32px]" data-v-a6629c41><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" data-v-a6629c41><path fill="currentColor" d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6Zm90.5-67.9v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9Zm-45.3-45.3H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4Z" opacity=".2" data-v-a6629c41></path><path fill="currentColor" d="M96.6 177a7.9 7.9 0 0 0-10.1 5c-6.6 19.7-27.9 25.8-40.2 27.7 1.9-12.3 8-33.6 27.7-40.2a8 8 0 1 0-5.1-15.1c-16.4 5.4-28.4 18.4-34.8 37.5a91.8 91.8 0 0 0-4.6 26.6 8 8 0 0 0 8 8 91.8 91.8 0 0 0 26.6-4.6c19.1-6.4 32.1-18.4 37.5-34.8a7.9 7.9 0 0 0-5-10.1" data-v-a6629c41></path><path fill="currentColor" d="M227.6 41.8a15.7 15.7 0 0 0-13.4-13.4c-11.3-1.7-40.6-2.5-69.2 26.1l-9 8.9H74.7a16.2 16.2 0 0 0-11.3 4.7l-32.3 32.4a15.9 15.9 0 0 0-4 15.9 16 16 0 0 0 12.2 11.1l39.5 7.9 41.8 41.8 7.9 39.5a16 16 0 0 0 11.1 12.2 14.7 14.7 0 0 0 4.6.7 15.6 15.6 0 0 0 11.3-4.7l32.4-32.3a16.2 16.2 0 0 0 4.7-11.3V120l8.9-9c28.6-28.6 27.8-57.9 26.1-69.2M74.7 79.4H120l-39.9 39.9-37.7-7.5Zm81.6-13.6c7.8-7.8 28.8-25.6 55.5-21.6 4 26.7-13.8 47.7-21.6 55.5L128 161.9 94.1 128Zm20.3 115.5-32.4 32.3-7.5-37.7 39.9-39.9Z" data-v-a6629c41></path></svg></div> <svg xmlns="http://www.w3.org/2000/svg" class="absolute dark:text-white/40 group-hover:size-5 group-hover:text-[#00DC82] right-4 size-4 text-[#020420]/20 top-4 transition-all" viewBox="0 0 256 256" data-v-a6629c41><path fill="currentColor" d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8" data-v-a6629c41></path></svg> <h2 class="font-semibold mt-1 text-base" data-v-a6629c41>Deploy</h2> <p class="dark:text-gray-200 group-hover:dark:text-gray-100 text-gray-700 text-sm" data-v-a6629c41>Learn how to deploy your Nuxt project on different providers.</p></a></div><footer class="lg:px-8 mb-6 mt-6 mx-auto px-4 sm:mb-0 sm:mt-10 sm:px-6 w-full" data-v-a6629c41><ul class="flex gap-4 items-center justify-center" data-v-a6629c41><li data-v-a6629c41><a href="https://go.nuxt.com/github" target="_blank" class="dark:hover:text-white dark:text-gray-400 focus-visible:ring-2 hover:text-[#020420] text-gray-500" data-v-a6629c41><span class="sr-only" data-v-a6629c41>Nuxt GitHub Repository</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-a6629c41><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" data-v-a6629c41></path></svg></a></li><li data-v-a6629c41><a href="https://go.nuxt.com/discord" target="_blank" class="dark:hover:text-white dark:text-gray-400 focus-visible:ring-2 hover:text-[#020420] text-gray-500" data-v-a6629c41><span class="sr-only" data-v-a6629c41>Nuxt Discord Server</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-a6629c41><path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 13 13 0 0 0-.617-1.25.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028 14 14 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13 13 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10 10 0 0 0 .372-.292.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418" data-v-a6629c41></path></svg></a></li><li data-v-a6629c41><a href="https://go.nuxt.com/x" target="_blank" class="dark:hover:text-white dark:text-gray-400 focus-visible:ring-2 hover:text-[#020420] text-gray-500" data-v-a6629c41><span class="sr-only" data-v-a6629c41>Nuxt on X</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-a6629c41><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" data-v-a6629c41></path></svg></a></li><li data-v-a6629c41><a href="https://go.nuxt.com/bluesky" target="_blank" class="dark:hover:text-white dark:text-gray-400 focus-visible:ring-2 hover:text-[#020420] text-gray-500" data-v-a6629c41><span class="sr-only" data-v-a6629c41>Nuxt Bluesky</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-a6629c41><path fill="currentColor" d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364q.204-.03.415-.056-.207.033-.415.056c-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a9 9 0 0 1-.415-.056q.21.026.415.056c2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8" data-v-a6629c41></path></svg></a></li><li data-v-a6629c41><a href="https://go.nuxt.com/linkedin" target="_blank" class="dark:hover:text-white dark:text-gray-400 focus-visible:ring-2 hover:text-[#020420] text-gray-500" data-v-a6629c41><span class="sr-only" data-v-a6629c41>Nuxt Linkedin</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-a6629c41><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" data-v-a6629c41></path></svg></a></li></ul></footer></div></div>`);
    }), "setup") };
    on2 = rn.setup;
    rn.setup = (e4, t5) => {
      const n2 = Wt.useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/welcome.vue"), on2 ? on2(e4, t5) : void 0;
    };
    sn = _export_sfc(rn, [["__scopeId", "data-v-a6629c41"]]);
    an = {};
    cn = an.setup;
    an.setup = (e4, t5) => {
      const n2 = Wt.useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("app.vue"), cn ? cn(e4, t5) : void 0;
    };
    ln = _export_sfc(an, [["ssrRender", function(e4, t5, n2, r4) {
      const o4 = nn, s4 = sn;
      t5(`<div${ssrRenderAttrs(r4)}>`), t5(ssrRenderComponent(o4, null, null, n2)), t5(ssrRenderComponent(s4, null, null, n2)), t5("</div>");
    }]]);
    pn = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(e4) {
      const t5 = e4.error, n2 = Number(t5.statusCode || 500), r4 = 404 === n2, o4 = t5.statusMessage ?? (r4 ? "Page Not Found" : "Internal Server Error"), s4 = t5.message || t5.toString(), i4 = Wt.defineAsyncComponent(() => Promise.resolve().then(() => (init_error_404_BqsMkaoQ(), error_404_BqsMkaoQ_exports))), a6 = Wt.defineAsyncComponent(() => Promise.resolve().then(() => (init_error_500_cztk_OJf(), error_500_cztk_OJf_exports))), c4 = r4 ? i4 : a6;
      return (e5, t6, r5, i5) => {
        t6(ssrRenderComponent(Wt.unref(c4), Wt.mergeProps({ statusCode: Wt.unref(n2), statusMessage: Wt.unref(o4), description: Wt.unref(s4), stack: Wt.unref(void 0) }, i5), null, r5));
      };
    } };
    dn = pn.setup;
    pn.setup = (e4, t5) => {
      const n2 = Wt.useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), dn ? dn(e4, t5) : void 0;
    };
    un = { __name: "nuxt-root", __ssrInlineRender: true, setup(e4) {
      const IslandRenderer = /* @__PURE__ */ __name(() => null, "IslandRenderer"), t5 = useNuxtApp();
      t5.deferHydration(), t5.ssrContext.url;
      const n2 = false;
      Wt.provide(Jt, Wt.hasInjectionContext() ? Wt.inject(Jt, useNuxtApp()._route) : useNuxtApp()._route), t5.hooks.callHookWith((e5) => e5.map((e6) => e6()), "vue:setup");
      const r4 = useError(), o4 = r4.value && !t5.ssrContext.error;
      Wt.onErrorCaptured((e5, n3, r5) => {
        t5.hooks.callHook("vue:error", e5, n3, r5).catch((e6) => console.error("[nuxt] Error in `vue:error` hook", e6));
        {
          const n4 = t5.runWithContext(() => showError(e5));
          return Wt.onServerPrefetch(() => n4), false;
        }
      });
      const s4 = t5.ssrContext.islandContext;
      return (e5, t6, i4, a6) => {
        ssrRenderSuspense(t6, { default: /* @__PURE__ */ __name(() => {
          Wt.unref(o4) ? t6("<div></div>") : Wt.unref(r4) ? t6(ssrRenderComponent(Wt.unref(pn), { error: Wt.unref(r4) }, null, i4)) : Wt.unref(s4) ? t6(ssrRenderComponent(Wt.unref(IslandRenderer), { context: Wt.unref(s4) }, null, i4)) : Wt.unref(n2) ? renderVNode(t6, Wt.createVNode(Wt.resolveDynamicComponent(Wt.unref(n2)), null, null), i4) : t6(ssrRenderComponent(Wt.unref(ln), null, null, i4));
        }, "default") });
      };
    } };
    hn = un.setup;
    un.setup = (e4, t5) => {
      const n2 = Wt.useSSRContext();
      return (n2.modules || (n2.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/nuxt-root.vue"), hn ? hn(e4, t5) : void 0;
    }, mn = /* @__PURE__ */ __name(async function(e4) {
      const t5 = Wt.createApp(un), n2 = (function(e5) {
        let t6 = 0;
        const n3 = { _id: e5.id || qt || "nuxt-app", _scope: Wt.effectScope(), provide: void 0, versions: { get nuxt() {
          return "4.2.2";
        }, get vue() {
          return n3.vueApp.version;
        } }, payload: Wt.shallowReactive({ ...e5.ssrContext?.payload || {}, data: Wt.shallowReactive({}), state: Wt.reactive({}), once: /* @__PURE__ */ new Set(), _errors: Wt.shallowReactive({}) }), static: { data: {} }, runWithContext: /* @__PURE__ */ __name((e6) => n3._scope.active && !Wt.getCurrentScope() ? n3._scope.run(() => callWithNuxt(n3, e6)) : callWithNuxt(n3, e6), "runWithContext"), isHydrating: false, deferHydration() {
          if (!n3.isHydrating) return () => {
          };
          t6++;
          let e6 = false;
          return () => {
            if (!e6) return e6 = true, t6--, 0 === t6 ? (n3.isHydrating = false, n3.callHook("app:suspense:resolve")) : void 0;
          };
        }, _asyncDataPromises: {}, _asyncData: Wt.shallowReactive({}), _payloadRevivers: {}, ...e5 };
        n3.payload.serverRendered = true, n3.ssrContext && (n3.payload.path = n3.ssrContext.url, n3.ssrContext.nuxt = n3, n3.ssrContext.payload = n3.payload, n3.ssrContext.config = { public: n3.ssrContext.runtimeConfig.public, app: n3.ssrContext.runtimeConfig.app }), n3.hooks = createHooks(), n3.hook = n3.hooks.hook;
        {
          const contextCaller = /* @__PURE__ */ __name(async function(e6, t7) {
            for (const r5 of e6) await n3.runWithContext(() => r5(...t7));
          }, "contextCaller");
          n3.hooks.callHook = (e6, ...t7) => n3.hooks.callHookWith(contextCaller, e6, ...t7);
        }
        n3.callHook = n3.hooks.callHook, n3.provide = (e6, t7) => {
          const r5 = "$" + e6;
          defineGetter(n3, r5, t7), defineGetter(n3.vueApp.config.globalProperties, r5, t7);
        }, defineGetter(n3.vueApp, "$nuxt", n3), defineGetter(n3.vueApp.config.globalProperties, "$nuxt", n3);
        const r4 = e5.ssrContext.runtimeConfig;
        return n3.provide("config", r4), n3;
      })({ vueApp: t5, ssrContext: e4 });
      try {
        await (async function(e5, t6) {
          const n3 = /* @__PURE__ */ new Set(), r4 = [], o4 = [];
          let s4, i4 = 0;
          async function executePlugin(a6) {
            const c4 = a6.dependsOn?.filter((e6) => t6.some((t7) => t7._name === e6) && !n3.has(e6)) ?? [];
            if (c4.length > 0) r4.push([new Set(c4), a6]);
            else {
              const t7 = (async function(e6, t8) {
                if ("function" == typeof t8) {
                  const { provide: n4 } = await e6.runWithContext(() => t8(e6)) || {};
                  if (n4 && "object" == typeof n4) for (const t9 in n4) e6.provide(t9, n4[t9]);
                }
              })(e5, a6).then(async () => {
                a6._name && (n3.add(a6._name), await Promise.all(r4.map(async ([e6, t8]) => {
                  e6.has(a6._name) && (e6.delete(a6._name), 0 === e6.size && (i4++, await executePlugin(t8)));
                })));
              }).catch((t8) => {
                if (!a6.parallel && !e5.payload.error) throw t8;
                s4 ||= t8;
              });
              a6.parallel ? o4.push(t7) : await t7;
            }
          }
          __name(executePlugin, "executePlugin");
          for (const n4 of t6) e5.ssrContext?.islandContext && false === n4.env?.islands || registerPluginHooks(e5, n4);
          for (const n4 of t6) e5.ssrContext?.islandContext && false === n4.env?.islands || await executePlugin(n4);
          if (await Promise.all(o4), i4) for (let e6 = 0; e6 < i4; e6++) await Promise.all(o4);
          if (s4) throw e5.payload.error || s4;
        })(n2, tn), await n2.hooks.callHook("app:created", t5);
      } catch (e5) {
        await n2.hooks.callHook("app:error", e5), n2.payload.error ||= createError2(e5);
      }
      if (e4?._renderResponse) throw new Error("skipping render");
      return t5;
    }, "mn");
    gn = Object.freeze(Object.defineProperty({ __proto__: null, _: _export_sfc, a: useNuxtApp, b: useRuntimeConfig, c: Gt, d: useHead, default: /* @__PURE__ */ __name((e4) => mn(e4), "default"), n: navigateTo, r: resolveRouteObject, u: useRouter }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .output/server/chunks/virtual/_virtual_spa-template.mjs
var virtual_spa_template_exports = {};
__export(virtual_spa_template_exports, {
  template: () => o2
});
var o2;
var init_virtual_spa_template = __esm({
  ".output/server/chunks/virtual/_virtual_spa-template.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    o2 = "";
  }
});

// .output/server/chunks/build/welcome-styles.CkVS-aWc.mjs
var welcome_styles_CkVS_aWc_exports = {};
__export(welcome_styles_CkVS_aWc_exports, {
  default: () => a3
});
var a3;
var init_welcome_styles_CkVS_aWc = __esm({
  ".output/server/chunks/build/welcome-styles.CkVS-aWc.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    a3 = [".sr-only[data-v-a6629c41]{height:1px;margin:-1px;overflow:hidden;padding:0;width:1px;clip:rect(0,0,0,0);border-width:0;white-space:nowrap}.absolute[data-v-a6629c41],.sr-only[data-v-a6629c41]{position:absolute}.relative[data-v-a6629c41]{position:relative}.right-4[data-v-a6629c41]{right:1rem}.top-4[data-v-a6629c41]{top:1rem}.grid[data-v-a6629c41]{display:grid}.grid-cols-1[data-v-a6629c41]{grid-template-columns:repeat(1,minmax(0,1fr))}.mx-auto[data-v-a6629c41]{margin-left:auto;margin-right:auto}.mb-6[data-v-a6629c41]{margin-bottom:1.5rem}.mt-1[data-v-a6629c41]{margin-top:.25rem}.mt-4[data-v-a6629c41]{margin-top:1rem}.mt-6[data-v-a6629c41]{margin-top:1.5rem}.inline-block[data-v-a6629c41]{display:inline-block}.size-\\[18px\\][data-v-a6629c41]{height:18px;width:18px}.size-4[data-v-a6629c41]{height:1rem;width:1rem}.group:hover .group-hover\\:size-5[data-v-a6629c41],.size-5[data-v-a6629c41]{height:1.25rem;width:1.25rem}.h-\\[32px\\][data-v-a6629c41]{height:32px}.h-8[data-v-a6629c41]{height:2rem}.max-w-\\[980px\\][data-v-a6629c41]{max-width:980px}.min-h-screen[data-v-a6629c41]{min-height:100vh}.w-\\[32px\\][data-v-a6629c41]{width:32px}.w-full[data-v-a6629c41]{width:100%}.flex[data-v-a6629c41]{display:flex}.inline-flex[data-v-a6629c41]{display:inline-flex}.flex-col[data-v-a6629c41]{flex-direction:column}.place-content-center[data-v-a6629c41]{place-content:center}.items-end[data-v-a6629c41]{align-items:flex-end}.items-center[data-v-a6629c41]{align-items:center}.justify-center[data-v-a6629c41]{justify-content:center}.gap-1[data-v-a6629c41]{gap:.25rem}.gap-4[data-v-a6629c41]{gap:1rem}.gap-y-4[data-v-a6629c41]{row-gap:1rem}.border[data-v-a6629c41]{border-width:1px}.border-\\[\\#00DC42\\]\\/50[data-v-a6629c41]{border-color:#00dc4280}.border-\\[\\#00DC82\\][data-v-a6629c41]{--un-border-opacity:1;border-color:rgb(0 220 130/var(--un-border-opacity))}.border-gray-200[data-v-a6629c41]{--un-border-opacity:1;border-color:rgb(224 224 224/var(--un-border-opacity))}.border-green-600\\/10[data-v-a6629c41]{border-color:#00bb6a1a}.border-green-600\\/20[data-v-a6629c41]{border-color:#00bb6a33}.hover\\:border-\\[\\#00DC82\\][data-v-a6629c41]:hover{--un-border-opacity:1;border-color:rgb(0 220 130/var(--un-border-opacity))}.rounded[data-v-a6629c41]{border-radius:.25rem}.rounded-lg[data-v-a6629c41]{border-radius:.5rem}.bg-\\[\\#00DC42\\]\\/10[data-v-a6629c41]{background-color:#00dc421a}.bg-\\[\\#00DC82\\]\\/5[data-v-a6629c41]{background-color:#00dc820d}.bg-gray-50\\/10[data-v-a6629c41]{background-color:#f5f5f51a}.bg-green-50[data-v-a6629c41]{--un-bg-opacity:1;background-color:rgb(208 252 222/var(--un-bg-opacity))}.bg-white[data-v-a6629c41]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-1[data-v-a6629c41]{padding:.25rem}.p-6[data-v-a6629c41]{padding:1.5rem}.px-2[data-v-a6629c41]{padding-left:.5rem;padding-right:.5rem}.px-4[data-v-a6629c41]{padding-left:1rem;padding-right:1rem}.py-1[data-v-a6629c41]{padding-bottom:.25rem;padding-top:.25rem}.text-\\[12px\\][data-v-a6629c41]{font-size:12px}.text-base[data-v-a6629c41]{font-size:1rem;line-height:1.5rem}.text-sm[data-v-a6629c41]{font-size:.875rem;line-height:1.25rem}.group:hover .group-hover\\:text-\\[\\#00DC82\\][data-v-a6629c41],.text-\\[\\#00DC82\\][data-v-a6629c41]{--un-text-opacity:1;color:rgb(0 220 130/var(--un-text-opacity))}.text-\\[\\#020420\\][data-v-a6629c41]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#020420\\]\\/20[data-v-a6629c41]{color:#02042033}.text-gray-500[data-v-a6629c41]{--un-text-opacity:1;color:rgb(117 117 117/var(--un-text-opacity))}.text-gray-700[data-v-a6629c41]{--un-text-opacity:1;color:rgb(66 66 66/var(--un-text-opacity))}.text-green-700[data-v-a6629c41]{--un-text-opacity:1;color:rgb(0 153 86/var(--un-text-opacity))}.hover\\:text-\\[\\#020420\\][data-v-a6629c41]:hover{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.font-bold[data-v-a6629c41]{font-weight:700}.font-semibold[data-v-a6629c41]{font-weight:600}.leading-none[data-v-a6629c41]{line-height:1}.font-mono[data-v-a6629c41]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.antialiased[data-v-a6629c41]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.focus-visible\\:ring-2[data-v-a6629c41]:focus-visible{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.transition-all[data-v-a6629c41]{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}@media(prefers-color-scheme:dark){.dark\\:border-\\[\\#00DC82\\]\\/50[data-v-a6629c41]{border-color:#00dc8280}.dark\\:border-\\[\\#00DC82\\]\\/80[data-v-a6629c41],.group:hover .group-hover\\:dark\\:border-\\[\\#00DC82\\]\\/80[data-v-a6629c41]{border-color:#00dc82cc}.dark\\:border-white\\/10[data-v-a6629c41]{border-color:#ffffff1a}.dark\\:border-white\\/20[data-v-a6629c41]{border-color:#fff3}.hover\\:dark\\:border-\\[\\#00DC82\\][data-v-a6629c41]:hover{--un-border-opacity:1;border-color:rgb(0 220 130/var(--un-border-opacity))}.dark\\:bg-\\[\\#020420\\][data-v-a6629c41]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:bg-white\\/5[data-v-a6629c41]{background-color:#ffffff0d}.dark\\:text-\\[\\#00DC82\\][data-v-a6629c41]{--un-text-opacity:1;color:rgb(0 220 130/var(--un-text-opacity))}.dark\\:text-gray-200[data-v-a6629c41]{--un-text-opacity:1;color:rgb(224 224 224/var(--un-text-opacity))}.dark\\:text-gray-400[data-v-a6629c41]{--un-text-opacity:1;color:rgb(158 158 158/var(--un-text-opacity))}.dark\\:text-white[data-v-a6629c41]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}.dark\\:text-white\\/40[data-v-a6629c41]{color:#fff6}.dark\\:hover\\:text-white[data-v-a6629c41]:hover{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}.group:hover .group-hover\\:dark\\:text-gray-100[data-v-a6629c41]{--un-text-opacity:1;color:rgb(238 238 238/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:col-span-2[data-v-a6629c41]{grid-column:span 2/span 2}.sm\\:grid-cols-3[data-v-a6629c41]{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:mb-0[data-v-a6629c41]{margin-bottom:0}.sm\\:mt-0[data-v-a6629c41]{margin-top:0}.sm\\:mt-10[data-v-a6629c41]{margin-top:2.5rem}.sm\\:mt-6[data-v-a6629c41]{margin-top:1.5rem}.sm\\:h-12[data-v-a6629c41]{height:3rem}.sm\\:gap-6[data-v-a6629c41]{gap:1.5rem}.sm\\:px-2\\.5[data-v-a6629c41]{padding-left:.625rem;padding-right:.625rem}.sm\\:px-6[data-v-a6629c41]{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-1\\.5[data-v-a6629c41]{padding-bottom:.375rem;padding-top:.375rem}.sm\\:text-\\[14px\\][data-v-a6629c41]{font-size:14px}.sm\\:text-base[data-v-a6629c41]{font-size:1rem;line-height:1.5rem}}@media(min-width:1024px){.lg\\:px-8[data-v-a6629c41]{padding-left:2rem;padding-right:2rem}}"];
  }
});

// .output/server/chunks/build/error-404-styles.CsR5oCKN.mjs
var error_404_styles_CsR5oCKN_exports = {};
__export(error_404_styles_CsR5oCKN_exports, {
  default: () => t3
});
var t3;
var init_error_404_styles_CsR5oCKN = __esm({
  ".output/server/chunks/build/error-404-styles.CsR5oCKN.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    t3 = [".grid[data-v-73158506]{display:grid}.mb-2[data-v-73158506]{margin-bottom:.5rem}.mb-4[data-v-73158506]{margin-bottom:1rem}.max-w-520px[data-v-73158506]{max-width:520px}.min-h-screen[data-v-73158506]{min-height:100vh}.w-full[data-v-73158506]{width:100%}.flex[data-v-73158506]{display:flex}.place-content-center[data-v-73158506]{place-content:center}.items-center[data-v-73158506]{align-items:center}.justify-center[data-v-73158506]{justify-content:center}.overflow-hidden[data-v-73158506]{overflow:hidden}.bg-white[data-v-73158506]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2[data-v-73158506]{padding-left:.5rem;padding-right:.5rem}.text-center[data-v-73158506]{text-align:center}.text-\\[80px\\][data-v-73158506]{font-size:80px}.text-2xl[data-v-73158506]{font-size:1.5rem;line-height:2rem}.text-sm[data-v-73158506]{font-size:.875rem;line-height:1.25rem}.text-\\[\\#020420\\][data-v-73158506]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\][data-v-73158506]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.hover\\:text-\\[\\#00DC82\\][data-v-73158506]:hover{--un-text-opacity:1;color:rgb(0 220 130/var(--un-text-opacity))}.font-medium[data-v-73158506]{font-weight:500}.font-semibold[data-v-73158506]{font-weight:600}.leading-none[data-v-73158506]{line-height:1}.tracking-wide[data-v-73158506]{letter-spacing:.025em}.font-sans[data-v-73158506]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums[data-v-73158506]{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.underline[data-v-73158506]{text-decoration-line:underline}.underline-offset-3[data-v-73158506]{text-underline-offset:3px}.antialiased[data-v-73158506]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\][data-v-73158506]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white[data-v-73158506]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\][data-v-73158506]{font-size:110px}.sm\\:text-3xl[data-v-73158506]{font-size:1.875rem;line-height:2.25rem}}"];
  }
});

// .output/server/chunks/build/error-500-styles.DB9zun32.mjs
var error_500_styles_DB9zun32_exports = {};
__export(error_500_styles_DB9zun32_exports, {
  default: () => a4
});
var a4;
var init_error_500_styles_DB9zun32 = __esm({
  ".output/server/chunks/build/error-500-styles.DB9zun32.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    a4 = [".grid[data-v-bfab201b]{display:grid}.mb-2[data-v-bfab201b]{margin-bottom:.5rem}.mb-4[data-v-bfab201b]{margin-bottom:1rem}.max-w-520px[data-v-bfab201b]{max-width:520px}.min-h-screen[data-v-bfab201b]{min-height:100vh}.place-content-center[data-v-bfab201b]{place-content:center}.overflow-hidden[data-v-bfab201b]{overflow:hidden}.bg-white[data-v-bfab201b]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2[data-v-bfab201b]{padding-left:.5rem;padding-right:.5rem}.text-center[data-v-bfab201b]{text-align:center}.text-\\[80px\\][data-v-bfab201b]{font-size:80px}.text-2xl[data-v-bfab201b]{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\][data-v-bfab201b]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\][data-v-bfab201b]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold[data-v-bfab201b]{font-weight:600}.leading-none[data-v-bfab201b]{line-height:1}.tracking-wide[data-v-bfab201b]{letter-spacing:.025em}.font-sans[data-v-bfab201b]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums[data-v-bfab201b]{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased[data-v-bfab201b]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\][data-v-bfab201b]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white[data-v-bfab201b]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\][data-v-bfab201b]{font-size:110px}.sm\\:text-3xl[data-v-bfab201b]{font-size:1.875rem;line-height:2.25rem}}"];
  }
});

// .output/server/chunks/build/styles.mjs
var styles_exports = {};
__export(styles_exports, {
  default: () => e2
});
var interopDefault, e2;
var init_styles = __esm({
  ".output/server/chunks/build/styles.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    interopDefault = /* @__PURE__ */ __name((e4) => e4.default || e4 || [], "interopDefault");
    e2 = { "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/welcome.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_welcome_styles_CkVS_aWc(), welcome_styles_CkVS_aWc_exports)).then(interopDefault), "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/welcome.vue"), "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-404.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_404_styles_CsR5oCKN(), error_404_styles_CsR5oCKN_exports)).then(interopDefault), "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-404.vue"), "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-500.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_500_styles_DB9zun32(), error_500_styles_DB9zun32_exports)).then(interopDefault), "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-500.vue"), "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/welcome.vue?vue&type=style&index=0&scoped=a6629c41&lang.css": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_welcome_styles_CkVS_aWc(), welcome_styles_CkVS_aWc_exports)).then(interopDefault), "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/welcome.vue?vue&type=style&index=0&scoped=a6629c41&lang.css"), "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-404.vue?vue&type=style&index=0&scoped=73158506&lang.css": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_404_styles_CsR5oCKN(), error_404_styles_CsR5oCKN_exports)).then(interopDefault), "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-404.vue?vue&type=style&index=0&scoped=73158506&lang.css"), "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-500.vue?vue&type=style&index=0&scoped=bfab201b&lang.css": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_500_styles_DB9zun32(), error_500_styles_DB9zun32_exports)).then(interopDefault), "../node_modules/.pnpm/nuxt@4.2.2_@parcel+watcher@2.5.1_@vue+compiler-sfc@3.5.25_cac@6.7.14_db0@0.3.4_drizzle-_c1d75fc58bb199567fc3a5cd2c95078c/node_modules/nuxt/dist/app/components/error-500.vue?vue&type=style&index=0&scoped=bfab201b&lang.css") };
  }
});

// .output/server/chunks/routes/renderer.mjs
var renderer_exports = {};
__export(renderer_exports, {
  a: () => ssrRenderComponent,
  b: () => renderVNode,
  c: () => ssrRenderAttrs,
  d: () => ssrInterpolate,
  e: () => Xr,
  h: () => mr,
  r: () => gr,
  s: () => ssrRenderSuspense,
  u: () => useHead2
});
function getModuleDependencies(e4, t5) {
  if (t5._dependencies[e4]) return t5._dependencies[e4];
  const n2 = t5._dependencies[e4] = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
  if (!t5.manifest) return n2;
  const r4 = t5.manifest[e4];
  if (!r4) return n2;
  r4.file && (n2.preload[e4] = r4, (r4.isEntry || r4.sideEffects) && (n2.scripts[e4] = r4));
  for (const e5 of r4.css || []) n2.styles[e5] = n2.preload[e5] = n2.prefetch[e5] = t5.manifest[e5];
  for (const e5 of r4.assets || []) n2.preload[e5] = n2.prefetch[e5] = t5.manifest[e5];
  for (const e5 of r4.imports || []) {
    const r5 = getModuleDependencies(e5, t5);
    for (const e6 in r5.styles) n2.styles[e6] = r5.styles[e6];
    for (const e6 in r5.preload) n2.preload[e6] = r5.preload[e6];
    for (const e6 in r5.prefetch) n2.prefetch[e6] = r5.prefetch[e6];
  }
  const o4 = {};
  for (const e5 in n2.preload) {
    const t6 = n2.preload[e5];
    t6.preload && (o4[e5] = t6);
  }
  return n2.preload = o4, n2;
}
function getRequestDependencies(e4, t5) {
  if (e4._requestDependencies) return e4._requestDependencies;
  const n2 = (function(e5, t6) {
    let n3 = "";
    const r4 = [...e5].sort();
    for (let e6 = 0; e6 < r4.length; e6++) e6 > 0 && (n3 += ","), n3 += r4[e6];
    if (t6._dependencySets[n3]) return t6._dependencySets[n3];
    const o4 = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
    for (const n4 of e5) {
      const e6 = getModuleDependencies(n4, t6);
      for (const t7 in e6.scripts) o4.scripts[t7] = e6.scripts[t7];
      for (const t7 in e6.styles) o4.styles[t7] = e6.styles[t7];
      for (const t7 in e6.preload) o4.preload[t7] = e6.preload[t7];
      for (const t7 in e6.prefetch) o4.prefetch[t7] = e6.prefetch[t7];
      for (const e7 of t6.manifest?.[n4]?.dynamicImports || []) {
        const n5 = getModuleDependencies(e7, t6);
        for (const e8 in n5.scripts) o4.prefetch[e8] = n5.scripts[e8];
        for (const e8 in n5.styles) o4.prefetch[e8] = n5.styles[e8];
        for (const e8 in n5.preload) o4.prefetch[e8] = n5.preload[e8];
      }
    }
    const s4 = {};
    for (const e6 in o4.prefetch) {
      const t7 = o4.prefetch[e6];
      t7.prefetch && (s4[e6] = t7);
    }
    o4.prefetch = s4;
    for (const e6 in o4.preload) delete o4.prefetch[e6];
    for (const e6 in o4.styles) delete o4.preload[e6], delete o4.prefetch[e6];
    return t6._dependencySets[n3] = o4, o4;
  })(new Set(Array.from([...t5._entrypoints, ...e4.modules || e4._registeredComponents || []])), t5);
  return e4._requestDependencies = n2, n2;
}
function renderStyles(e4, t5) {
  const { styles: n2 } = getRequestDependencies(e4, t5);
  let r4 = "";
  for (const e5 in n2) {
    const o4 = n2[e5];
    r4 += `<link rel="stylesheet" href="${t5.buildAssetsURL(o4.file)}" crossorigin>`;
  }
  return r4;
}
function renderResourceHints(e4, t5) {
  const { preload: n2, prefetch: r4 } = getRequestDependencies(e4, t5);
  let o4 = "";
  for (const e5 in n2) {
    const r5 = n2[e5], s4 = t5.buildAssetsURL(r5.file), i4 = r5.module ? "modulepreload" : "preload", a6 = "style" === r5.resourceType || "font" === r5.resourceType || "script" === r5.resourceType || r5.module ? " crossorigin" : "";
    r5.resourceType && r5.mimeType ? o4 += `<link rel="${i4}" as="${r5.resourceType}" type="${r5.mimeType}"${a6} href="${s4}">` : r5.resourceType ? o4 += `<link rel="${i4}" as="${r5.resourceType}"${a6} href="${s4}">` : o4 += `<link rel="${i4}"${a6} href="${s4}">`;
  }
  for (const e5 in r4) {
    const n3 = r4[e5], s4 = t5.buildAssetsURL(n3.file), i4 = "style" === n3.resourceType || "font" === n3.resourceType || "script" === n3.resourceType || n3.module ? " crossorigin" : "";
    n3.resourceType && n3.mimeType ? o4 += `<link rel="prefetch" as="${n3.resourceType}" type="${n3.mimeType}"${i4} href="${s4}">` : n3.resourceType ? o4 += `<link rel="prefetch" as="${n3.resourceType}"${i4} href="${s4}">` : o4 += `<link rel="prefetch"${i4} href="${s4}">`;
  }
  return o4;
}
function renderResourceHeaders(e4, t5) {
  const { preload: n2, prefetch: r4 } = getRequestDependencies(e4, t5), o4 = [];
  for (const e5 in n2) {
    const r5 = n2[e5];
    let s4 = `<${t5.buildAssetsURL(r5.file)}>; rel="${r5.module ? "modulepreload" : "preload"}"`;
    r5.resourceType && (s4 += `; as="${r5.resourceType}"`), r5.mimeType && (s4 += `; type="${r5.mimeType}"`), ("style" === r5.resourceType || "font" === r5.resourceType || "script" === r5.resourceType || r5.module) && (s4 += "; crossorigin"), o4.push(s4);
  }
  for (const e5 in r4) {
    const n3 = r4[e5];
    let s4 = `<${t5.buildAssetsURL(n3.file)}>; rel="prefetch"`;
    n3.resourceType && (s4 += `; as="${n3.resourceType}"`), n3.mimeType && (s4 += `; type="${n3.mimeType}"`), ("style" === n3.resourceType || "font" === n3.resourceType || "script" === n3.resourceType || n3.module) && (s4 += "; crossorigin"), o4.push(s4);
  }
  return { link: o4.join(", ") };
}
function getPreloadLinks(e4, t5) {
  const { preload: n2 } = getRequestDependencies(e4, t5), r4 = [];
  for (const e5 in n2) {
    const o4 = n2[e5];
    r4.push({ rel: o4.module ? "modulepreload" : "preload", as: o4.resourceType, type: o4.mimeType ?? null, crossorigin: "style" === o4.resourceType || "font" === o4.resourceType || "script" === o4.resourceType || o4.module ? "" : null, href: t5.buildAssetsURL(o4.file) });
  }
  return r4;
}
function getPrefetchLinks(e4, t5) {
  const { prefetch: n2 } = getRequestDependencies(e4, t5), r4 = [];
  for (const e5 in n2) {
    const o4 = n2[e5];
    r4.push({ rel: "prefetch", as: o4.resourceType, type: o4.mimeType ?? null, crossorigin: "style" === o4.resourceType || "font" === o4.resourceType || "script" === o4.resourceType || o4.module ? "" : null, href: t5.buildAssetsURL(o4.file) });
  }
  return r4;
}
function renderScripts(e4, t5) {
  const { scripts: n2 } = getRequestDependencies(e4, t5);
  let r4 = "";
  for (const e5 in n2) {
    const o4 = n2[e5];
    o4.module ? r4 += `<script type="module" src="${t5.buildAssetsURL(o4.file)}" crossorigin><\/script>` : r4 += `<script src="${t5.buildAssetsURL(o4.file)}" defer crossorigin><\/script>`;
  }
  return r4;
}
function createRenderer$1(t5, n2) {
  const r4 = (function({ manifest: t6, precomputed: n3, buildAssetsURL: r5 }) {
    if (!t6 && !n3) throw new Error("Either manifest or precomputed data must be provided");
    const o4 = { buildAssetsURL: r5 || withLeadingSlash, manifest: t6, precomputed: n3, updateManifest, _dependencies: {}, _dependencySets: {}, _entrypoints: [] };
    function updateManifest(e4) {
      const t7 = Object.entries(e4);
      o4.manifest = e4, o4._dependencies = {}, o4._dependencySets = {}, o4._entrypoints = t7.filter((e5) => e5[1].isEntry).map(([e5]) => e5);
    }
    __name(updateManifest, "updateManifest");
    return n3 ? (o4._dependencies = n3.dependencies, o4._entrypoints = n3.entrypoints) : t6 && updateManifest(t6), o4;
  })(n2);
  return { rendererContext: r4, async renderToString(e4) {
    e4._registeredComponents = e4._registeredComponents || /* @__PURE__ */ new Set();
    const o4 = await Promise.resolve(t5).then((e5) => "default" in e5 ? e5.default : e5), s4 = await o4(e4), wrap = /* @__PURE__ */ __name((t6) => () => t6(e4, r4), "wrap");
    return { html: await n2.renderToString(s4, e4), renderResourceHeaders: wrap(renderResourceHeaders), renderResourceHints: wrap(renderResourceHints), renderStyles: wrap(renderStyles), renderScripts: wrap(renderScripts) };
  } };
}
function dedupeKey(e4) {
  const { props: t5, tag: n2 } = e4;
  if (me2.has(n2)) return n2;
  if ("link" === n2 && "canonical" === t5.rel) return "canonical";
  if (t5.charset) return "charset";
  if ("meta" === e4.tag) {
    for (const r4 of be2) if (void 0 !== t5[r4]) {
      const o4 = t5[r4], s4 = o4.includes(":"), i4 = Ce2.has(o4);
      return `${n2}:${o4}${!(s4 || i4) && e4.key ? `:key:${e4.key}` : ""}`;
    }
  }
  if (e4.key) return `${n2}:key:${e4.key}`;
  if (t5.id) return `${n2}:id:${t5.id}`;
  if (he2.has(n2)) {
    const t6 = e4.textContent || e4.innerHTML;
    if (t6) return `${n2}:content:${t6}`;
  }
}
function walkResolver(e4, t5, n2) {
  let r4;
  if ("function" === typeof e4 && (n2 && ("titleTemplate" === n2 || "o" === n2[0] && "n" === n2[1]) || (e4 = e4())), t5 && (r4 = t5(n2, e4)), Array.isArray(r4)) return r4.map((e5) => walkResolver(e5, t5));
  if (r4?.constructor === Object) {
    const e5 = {};
    for (const n3 of Object.keys(r4)) e5[n3] = walkResolver(r4[n3], t5, n3);
    return e5;
  }
  return r4;
}
function normalizeProps2(e4, t5) {
  return e4.props = e4.props || {}, t5 ? "templateParams" === e4.tag ? (e4.props = t5, e4) : (Object.entries(t5).forEach(([n2, r4]) => {
    if (null === r4) return void (e4.props[n2] = null);
    if ("class" === n2 || "style" === n2) return void (e4.props[n2] = (function(e5, t6) {
      const n3 = "style" === e5 ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
      function processValue(t7) {
        const r5 = t7.trim();
        if (r5) if ("style" === e5) {
          const [e6, ...t8] = r5.split(":").map((e7) => e7.trim());
          e6 && t8.length && n3.set(e6, t8.join(":"));
        } else r5.split(" ").filter(Boolean).forEach((e6) => n3.add(e6));
      }
      __name(processValue, "processValue");
      return "string" == typeof t6 ? "style" === e5 ? t6.split(";").forEach(processValue) : processValue(t6) : Array.isArray(t6) ? t6.forEach((e6) => processValue(e6)) : t6 && "object" == typeof t6 && Object.entries(t6).forEach(([t7, r5]) => {
        r5 && "false" !== r5 && ("style" === e5 ? n3.set(t7.trim(), r5) : processValue(t7));
      }), n3;
    })(n2, r4));
    if (ye2.has(n2)) {
      if (["textContent", "innerHTML"].includes(n2) && "object" == typeof r4) {
        let o5 = t5.type;
        if (t5.type || (o5 = "application/json"), !o5?.endsWith("json") && "speculationrules" !== o5) return;
        t5.type = o5, e4.props.type = o5, e4[n2] = JSON.stringify(r4);
      } else e4[n2] = r4;
      return;
    }
    const o4 = String(r4), s4 = n2.startsWith("data-");
    "true" === o4 || "" === o4 ? e4.props[n2] = !s4 || o4 : !r4 && s4 && "false" === o4 ? e4.props[n2] = "false" : void 0 !== r4 && (e4.props[n2] = r4);
  }), e4) : e4;
}
function normalizeTag(e4, t5) {
  const n2 = normalizeProps2({ tag: e4, props: {} }, "object" == typeof t5 && "function" != typeof t5 ? t5 : { ["script" === e4 || "noscript" === e4 || "style" === e4 ? "innerHTML" : "textContent"]: t5 });
  return n2.key && fe2.has(n2.tag) && (n2.props["data-hid"] = n2._h = n2.key), "script" === n2.tag && "object" == typeof n2.innerHTML && (n2.innerHTML = JSON.stringify(n2.innerHTML), n2.props.type = n2.props.type || "application/json"), Array.isArray(n2.props.content) ? n2.props.content.map((e5) => ({ ...n2, props: { ...n2.props, content: e5 } })) : n2;
}
function normalizeEntryToTags(e4, t5) {
  if (!e4) return [];
  "function" == typeof e4 && (e4 = e4());
  const resolvers = /* @__PURE__ */ __name((e5, n3) => {
    for (let r4 = 0; r4 < t5.length; r4++) n3 = t5[r4](e5, n3);
    return n3;
  }, "resolvers");
  e4 = resolvers(void 0, e4);
  const n2 = [];
  return e4 = walkResolver(e4, resolvers), Object.entries(e4 || {}).forEach(([e5, t6]) => {
    if (void 0 !== t6) for (const r4 of Array.isArray(t6) ? t6 : [t6]) n2.push(normalizeTag(e5, r4));
  }), n2.flat();
}
function tagWeight(e4, t5) {
  if ("number" == typeof t5.tagPriority) return t5.tagPriority;
  let n2 = 100;
  const r4 = Se2[t5.tagPriority] || 0, o4 = e4.resolvedOptions.disableCapoSorting ? { link: {}, script: {}, style: {} } : Te2;
  if (t5.tag in ke2) n2 = ke2[t5.tag];
  else if ("meta" === t5.tag) {
    const e5 = "content-security-policy" === t5.props["http-equiv"] ? "content-security-policy" : t5.props.charset ? "charset" : "viewport" === t5.props.name ? "viewport" : null;
    e5 && (n2 = Te2.meta[e5]);
  } else "link" === t5.tag && t5.props.rel ? n2 = o4.link[t5.props.rel] : "script" === t5.tag ? isTruthy(t5.props.async) ? n2 = o4.script.async : !t5.props.src || isTruthy(t5.props.defer) || isTruthy(t5.props.async) || "module" === t5.props.type || t5.props.type?.endsWith("json") ? isTruthy(t5.props.defer) && t5.props.src && !isTruthy(t5.props.async) && (n2 = o4.script.defer) : n2 = o4.script.sync : "style" === t5.tag && (n2 = t5.innerHTML && we2.test(t5.innerHTML) ? o4.style.imported : o4.style.sync);
  return (n2 || 100) + r4;
}
function registerPlugin(e4, t5) {
  const n2 = "function" == typeof t5 ? t5(e4) : t5, r4 = n2.key || String(e4.plugins.size + 1);
  e4.plugins.get(r4) || (e4.plugins.set(r4, n2), e4.hooks.addHooks(n2.hooks || {}));
}
function createUnhead(e4 = {}) {
  const n2 = createHooks();
  n2.addHooks(e4.hooks || {});
  const r4 = !e4.document, o4 = /* @__PURE__ */ new Map(), s4 = /* @__PURE__ */ new Map(), i4 = /* @__PURE__ */ new Set(), a6 = { _entryCount: 1, plugins: s4, dirty: false, resolvedOptions: e4, hooks: n2, ssr: r4, entries: o4, headEntries: /* @__PURE__ */ __name(() => [...o4.values()], "headEntries"), use: /* @__PURE__ */ __name((e5) => registerPlugin(a6, e5), "use"), push(e5, t5) {
    const s5 = { ...t5 || {} };
    delete s5.head;
    const l3 = s5._index ?? a6._entryCount++, c4 = { _i: l3, input: e5, options: s5 }, u3 = { _poll(e6 = false) {
      a6.dirty = true, !e6 && i4.add(l3), n2.callHook("entries:updated", a6);
    }, dispose() {
      o4.delete(l3) && a6.invalidate();
    }, patch(e6) {
      (!s5.mode || "server" === s5.mode && r4 || "client" === s5.mode && !r4) && (c4.input = e6, o4.set(l3, c4), u3._poll());
    } };
    return u3.patch(e5), u3;
  }, async resolveTags() {
    const t5 = { tagMap: /* @__PURE__ */ new Map(), tags: [], entries: [...a6.entries.values()] };
    for (await n2.callHook("entries:resolve", t5); i4.size; ) {
      const t6 = i4.values().next().value;
      i4.delete(t6);
      const r6 = o4.get(t6);
      if (r6) {
        const t7 = { tags: normalizeEntryToTags(r6.input, e4.propResolvers || []).map((e5) => Object.assign(e5, r6.options)), entry: r6 };
        await n2.callHook("entries:normalize", t7), r6._tags = t7.tags.map((e5, t8) => (e5._w = tagWeight(a6, e5), e5._p = (r6._i << 10) + t8, e5._d = dedupeKey(e5), e5));
      }
    }
    let r5 = false;
    t5.entries.flatMap((e5) => (e5._tags || []).map((e6) => ({ ...e6, props: { ...e6.props } }))).sort(sortTags).reduce((e5, t6) => {
      const n3 = String(t6._d || t6._p);
      if (!e5.has(n3)) return e5.set(n3, t6);
      const o5 = e5.get(n3);
      if ("merge" === (t6?.tagDuplicateStrategy || (ve2.has(t6.tag) ? "merge" : null) || (t6.key && t6.key === o5.key ? "merge" : null))) {
        const r6 = { ...o5.props };
        Object.entries(t6.props).forEach(([e6, t7]) => r6[e6] = "style" === e6 ? new Map([...o5.props.style || /* @__PURE__ */ new Map(), ...t7]) : "class" === e6 ? /* @__PURE__ */ new Set([...o5.props.class || /* @__PURE__ */ new Set(), ...t7]) : t7), e5.set(n3, { ...t6, props: r6 });
      } else t6._p >> 10 == o5._p >> 10 && "meta" === t6.tag && (function(e6) {
        const t7 = e6.split(":");
        return !!t7.length && _e2.has(t7[1]);
      })(n3) ? (e5.set(n3, Object.assign([...Array.isArray(o5) ? o5 : [o5], t6], t6)), r5 = true) : (t6._w === o5._w ? t6._p > o5._p : t6?._w < o5?._w) && e5.set(n3, t6);
      return e5;
    }, t5.tagMap);
    const s5 = t5.tagMap.get("title"), l3 = t5.tagMap.get("titleTemplate");
    if (a6._title = s5?.textContent, l3) {
      const e5 = l3?.textContent;
      if (a6._titleTemplate = e5, e5) {
        let n3 = "function" == typeof e5 ? e5(s5?.textContent) : e5;
        "string" != typeof n3 || a6.plugins.has("template-params") || (n3 = n3.replace("%s", s5?.textContent || "")), s5 ? null === n3 ? t5.tagMap.delete("title") : t5.tagMap.set("title", { ...s5, textContent: n3 }) : (l3.tag = "title", l3.textContent = n3);
      }
    }
    t5.tags = Array.from(t5.tagMap.values()), r5 && (t5.tags = t5.tags.flat().sort(sortTags)), await n2.callHook("tags:beforeResolve", t5), await n2.callHook("tags:resolve", t5), await n2.callHook("tags:afterResolve", t5);
    const c4 = [];
    for (const e5 of t5.tags) {
      const { innerHTML: t6, tag: n3, props: r6 } = e5;
      if (ge2.has(n3) && ((0 !== Object.keys(r6).length || e5.innerHTML || e5.textContent) && ("meta" !== n3 || r6.content || r6["http-equiv"] || r6.charset))) {
        if ("script" === n3 && t6) {
          if (r6.type?.endsWith("json")) {
            const n4 = "string" == typeof t6 ? t6 : JSON.stringify(t6);
            e5.innerHTML = n4.replace(/</g, "\\u003C");
          } else "string" == typeof t6 && (e5.innerHTML = t6.replace(new RegExp(`</${n3}`, "g"), `<\\/${n3}`));
          e5._d = dedupeKey(e5);
        }
        c4.push(e5);
      }
    }
    return c4;
  }, invalidate() {
    for (const e5 of o4.values()) i4.add(e5._i);
    a6.dirty = true, n2.callHook("entries:updated", a6);
  } };
  return (e4?.plugins || []).forEach((e5) => registerPlugin(a6, e5)), a6.hooks.callHook("init", a6), e4.init?.forEach((e5) => e5 && a6.push(e5)), a6;
}
function encodeAttribute(e4) {
  return String(e4).replace(/"/g, "&quot;");
}
function propsToString(e4) {
  let t5 = "";
  for (const n2 in e4) {
    if (!Object.hasOwn(e4, n2)) continue;
    let r4 = e4[n2];
    "class" !== n2 && "style" !== n2 || "string" == typeof r4 || (r4 = "class" === n2 ? Array.from(r4).join(" ") : Array.from(r4).map(([e5, t6]) => `${e5}:${t6}`).join(";")), false !== r4 && null !== r4 && (t5 += true === r4 ? ` ${n2}` : ` ${n2}="${encodeAttribute(r4)}"`);
  }
  return t5;
}
function tagToString(e4) {
  const t5 = propsToString(e4.props), n2 = `<${e4.tag}${t5}>`;
  if (!he2.has(e4.tag)) return de2.has(e4.tag) ? n2 : `${n2}</${e4.tag}>`;
  let r4 = String(e4.textContent || e4.innerHTML || "");
  return r4 = "title" === e4.tag ? r4.replace(/[&<>"'/]/g, (e5) => {
    switch (e5) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#x27;";
      case "/":
        return "&#x2F;";
      default:
        return e5;
    }
  }) : r4.replace(new RegExp(`</${e4.tag}`, "gi"), `<\\/${e4.tag}`), de2.has(e4.tag) ? n2 : `${n2}${r4}</${e4.tag}>`;
}
async function renderSSRHead(e4, t5) {
  const n2 = { shouldRender: true };
  if (await e4.hooks.callHook("ssr:beforeRender", n2), !n2.shouldRender) return { headTags: "", bodyTags: "", bodyTagsOpen: "", htmlAttrs: "", bodyAttrs: "" };
  const r4 = { tags: t5?.resolvedTags || await e4.resolveTags() };
  await e4.hooks.callHook("ssr:render", r4);
  const o4 = (function(e5) {
    const t6 = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: "", bodyClose: "", bodyOpen: "" } };
    for (const n3 of e5) {
      if ("htmlAttrs" === n3.tag || "bodyAttrs" === n3.tag) {
        Object.assign(t6[n3.tag], n3.props);
        continue;
      }
      const e6 = tagToString(n3), r5 = n3.tagPosition || "head";
      t6.tags[r5] += t6.tags[r5] ? `${e6}` : e6;
    }
    return { headTags: t6.tags.head, bodyTags: t6.tags.bodyClose, bodyTagsOpen: t6.tags.bodyOpen, htmlAttrs: propsToString(t6.htmlAttrs), bodyAttrs: propsToString(t6.bodyAttrs) };
  })(r4.tags), s4 = { tags: r4.tags, html: o4 };
  return await e4.hooks.callHook("ssr:rendered", s4), s4.html;
}
function getCurrentScope() {
  return Re2;
}
function batch(e4, t5 = false) {
  if (e4.flags |= 8, t5) return e4.next = Pe2, void (Pe2 = e4);
  e4.next = Ee2, Ee2 = e4;
}
function startBatch() {
  $e2++;
}
function endBatch() {
  if (--$e2 > 0) return;
  if (Pe2) {
    let e5 = Pe2;
    for (Pe2 = void 0; e5; ) {
      const t5 = e5.next;
      e5.next = void 0, e5.flags &= -9, e5 = t5;
    }
  }
  let e4;
  for (; Ee2; ) {
    let t5 = Ee2;
    for (Ee2 = void 0; t5; ) {
      const n2 = t5.next;
      if (t5.next = void 0, t5.flags &= -9, 1 & t5.flags) try {
        t5.trigger();
      } catch (t6) {
        e4 || (e4 = t6);
      }
      t5 = n2;
    }
  }
  if (e4) throw e4;
}
function prepareDeps(e4) {
  for (let t5 = e4.deps; t5; t5 = t5.nextDep) t5.version = -1, t5.prevActiveLink = t5.dep.activeLink, t5.dep.activeLink = t5;
}
function cleanupDeps(e4) {
  let t5, n2 = e4.depsTail, r4 = n2;
  for (; r4; ) {
    const e5 = r4.prevDep;
    -1 === r4.version ? (r4 === n2 && (n2 = e5), removeSub(r4), removeDep(r4)) : t5 = r4, r4.dep.activeLink = r4.prevActiveLink, r4.prevActiveLink = void 0, r4 = e5;
  }
  e4.deps = t5, e4.depsTail = n2;
}
function isDirty(e4) {
  for (let t5 = e4.deps; t5; t5 = t5.nextDep) if (t5.dep.version !== t5.version || t5.dep.computed && (refreshComputed(t5.dep.computed) || t5.dep.version !== t5.version)) return true;
  return !!e4._dirty;
}
function refreshComputed(e4) {
  if (4 & e4.flags && !(16 & e4.flags)) return;
  if (e4.flags &= -17, e4.globalVersion === Ve2) return;
  if (e4.globalVersion = Ve2, !e4.isSSR && 128 & e4.flags && (!e4.deps && !e4._dirty || !isDirty(e4))) return;
  e4.flags |= 2;
  const t5 = e4.dep, n2 = Ae2, r4 = Ne2;
  Ae2 = e4, Ne2 = true;
  try {
    prepareDeps(e4);
    const n3 = e4.fn(e4._value);
    (0 === t5.version || hasChanged(n3, e4._value)) && (e4.flags |= 128, e4._value = n3, t5.version++);
  } catch (e5) {
    throw t5.version++, e5;
  } finally {
    Ae2 = n2, Ne2 = r4, cleanupDeps(e4), e4.flags &= -3;
  }
}
function removeSub(e4, t5 = false) {
  const { dep: n2, prevSub: r4, nextSub: o4 } = e4;
  if (r4 && (r4.nextSub = o4, e4.prevSub = void 0), o4 && (o4.prevSub = r4, e4.nextSub = void 0), n2.subs === e4 && (n2.subs = r4, !r4 && n2.computed)) {
    n2.computed.flags &= -5;
    for (let e5 = n2.computed.deps; e5; e5 = e5.nextDep) removeSub(e5, true);
  }
  t5 || --n2.sc || !n2.map || n2.map.delete(n2.key);
}
function removeDep(e4) {
  const { prevDep: t5, nextDep: n2 } = e4;
  t5 && (t5.nextDep = n2, e4.prevDep = void 0), n2 && (n2.prevDep = t5, e4.nextDep = void 0);
}
function pauseTracking() {
  Oe2.push(Ne2), Ne2 = false;
}
function resetTracking() {
  const e4 = Oe2.pop();
  Ne2 = void 0 === e4 || e4;
}
function cleanupEffect(e4) {
  const { cleanup: t5 } = e4;
  if (e4.cleanup = void 0, t5) {
    const e5 = Ae2;
    Ae2 = void 0;
    try {
      t5();
    } finally {
      Ae2 = e5;
    }
  }
}
function addSub(e4) {
  if (e4.dep.sc++, 4 & e4.sub.flags) {
    const t5 = e4.dep.computed;
    if (t5 && !e4.dep.subs) {
      t5.flags |= 20;
      for (let e5 = t5.deps; e5; e5 = e5.nextDep) addSub(e5);
    }
    const n2 = e4.dep.subs;
    n2 !== e4 && (e4.prevSub = n2, n2 && (n2.nextSub = e4)), e4.dep.subs = e4;
  }
}
function track(e4, t5, n2) {
  if (Ne2 && Ae2) {
    let t6 = He2.get(e4);
    t6 || He2.set(e4, t6 = /* @__PURE__ */ new Map());
    let r4 = t6.get(n2);
    r4 || (t6.set(n2, r4 = new Dep()), r4.map = t6, r4.key = n2), r4.track();
  }
}
function trigger(e4, t5, n2, r4, o4, s4) {
  const i4 = He2.get(e4);
  if (!i4) return void Ve2++;
  const run = /* @__PURE__ */ __name((e5) => {
    e5 && e5.trigger();
  }, "run");
  if (startBatch(), "clear" === t5) i4.forEach(run);
  else {
    const o5 = i(e4), s5 = o5 && isIntegerKey(n2);
    if (o5 && "length" === n2) {
      const e5 = Number(r4);
      i4.forEach((t6, n3) => {
        ("length" === n3 || n3 === De2 || !isSymbol(n3) && n3 >= e5) && run(t6);
      });
    } else switch ((void 0 !== n2 || i4.has(void 0)) && run(i4.get(n2)), s5 && run(i4.get(De2)), t5) {
      case "add":
        o5 ? s5 && run(i4.get("length")) : (run(i4.get(Me2)), isMap(e4) && run(i4.get(Ie2)));
        break;
      case "delete":
        o5 || (run(i4.get(Me2)), isMap(e4) && run(i4.get(Ie2)));
        break;
      case "set":
        isMap(e4) && run(i4.get(Me2));
    }
  }
  endBatch();
}
function reactiveReadArray(e4) {
  const t5 = toRaw(e4);
  return t5 === e4 ? t5 : (track(t5, 0, De2), isShallow(e4) ? t5 : t5.map(toReactive));
}
function shallowReadArray(e4) {
  return track(e4 = toRaw(e4), 0, De2), e4;
}
function toWrapped(e4, t5) {
  return isReadonly(e4) ? isReactive(e4) ? toReadonly(toReactive(t5)) : toReadonly(t5) : toReactive(t5);
}
function iterator(e4, t5, n2) {
  const r4 = shallowReadArray(e4), o4 = r4[t5]();
  return r4 === e4 || isShallow(e4) || (o4._next = o4.next, o4.next = () => {
    const e5 = o4._next();
    return e5.done || (e5.value = n2(e5.value)), e5;
  }), o4;
}
function apply(e4, t5, n2, r4, o4, s4) {
  const i4 = shallowReadArray(e4), a6 = i4 !== e4 && !isShallow(e4), l3 = i4[t5];
  if (l3 !== je2[t5]) {
    const t6 = l3.apply(e4, s4);
    return a6 ? toReactive(t6) : t6;
  }
  let c4 = n2;
  i4 !== e4 && (a6 ? c4 = /* @__PURE__ */ __name(function(t6, r5) {
    return n2.call(this, toWrapped(e4, t6), r5, e4);
  }, "c") : n2.length > 2 && (c4 = /* @__PURE__ */ __name(function(t6, r5) {
    return n2.call(this, t6, r5, e4);
  }, "c")));
  const u3 = l3.call(i4, c4, r4);
  return a6 && o4 ? o4(u3) : u3;
}
function reduce(e4, t5, n2, r4) {
  const o4 = shallowReadArray(e4);
  let s4 = n2;
  return o4 !== e4 && (isShallow(e4) ? n2.length > 3 && (s4 = /* @__PURE__ */ __name(function(t6, r5, o5) {
    return n2.call(this, t6, r5, o5, e4);
  }, "s")) : s4 = /* @__PURE__ */ __name(function(t6, r5, o5) {
    return n2.call(this, t6, toWrapped(e4, r5), o5, e4);
  }, "s")), o4[t5](s4, ...r4);
}
function searchProxy(e4, t5, n2) {
  const r4 = toRaw(e4);
  track(r4, 0, De2);
  const o4 = r4[t5](...n2);
  return -1 !== o4 && false !== o4 || !isProxy(n2[0]) ? o4 : (n2[0] = toRaw(n2[0]), r4[t5](...n2));
}
function noTracking(e4, t5, n2 = []) {
  pauseTracking(), startBatch();
  const r4 = toRaw(e4)[t5].apply(e4, n2);
  return endBatch(), resetTracking(), r4;
}
function hasOwnProperty(e4) {
  isSymbol(e4) || (e4 = String(e4));
  const t5 = toRaw(this);
  return track(t5, 0, e4), t5.hasOwnProperty(e4);
}
function createReadonlyMethod(e4) {
  return function(...t5) {
    return "delete" !== e4 && ("clear" === e4 ? void 0 : this);
  };
}
function createInstrumentations(e4, t5) {
  const n2 = { get(n3) {
    const r4 = this.__v_raw, o4 = toRaw(r4), s4 = toRaw(n3);
    e4 || (hasChanged(n3, s4) && track(o4, 0, n3), track(o4, 0, s4));
    const { has: i4 } = getProto(o4), a6 = t5 ? toShallow : e4 ? toReadonly : toReactive;
    return i4.call(o4, n3) ? a6(r4.get(n3)) : i4.call(o4, s4) ? a6(r4.get(s4)) : void (r4 !== o4 && r4.get(n3));
  }, get size() {
    const t6 = this.__v_raw;
    return !e4 && track(toRaw(t6), 0, Me2), t6.size;
  }, has(t6) {
    const n3 = this.__v_raw, r4 = toRaw(n3), o4 = toRaw(t6);
    return e4 || (hasChanged(t6, o4) && track(r4, 0, t6), track(r4, 0, o4)), t6 === o4 ? n3.has(t6) : n3.has(t6) || n3.has(o4);
  }, forEach(n3, r4) {
    const o4 = this, s4 = o4.__v_raw, i4 = toRaw(s4), a6 = t5 ? toShallow : e4 ? toReadonly : toReactive;
    return !e4 && track(i4, 0, Me2), s4.forEach((e5, t6) => n3.call(r4, a6(e5), a6(t6), o4));
  } };
  n(n2, e4 ? { add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear") } : { add(e5) {
    t5 || isShallow(e5) || isReadonly(e5) || (e5 = toRaw(e5));
    const n3 = toRaw(this);
    return getProto(n3).has.call(n3, e5) || (n3.add(e5), trigger(n3, "add", e5, e5)), this;
  }, set(e5, n3) {
    t5 || isShallow(n3) || isReadonly(n3) || (n3 = toRaw(n3));
    const r4 = toRaw(this), { has: o4, get: s4 } = getProto(r4);
    let i4 = o4.call(r4, e5);
    i4 || (e5 = toRaw(e5), i4 = o4.call(r4, e5));
    const a6 = s4.call(r4, e5);
    return r4.set(e5, n3), i4 ? hasChanged(n3, a6) && trigger(r4, "set", e5, n3) : trigger(r4, "add", e5, n3), this;
  }, delete(e5) {
    const t6 = toRaw(this), { has: n3, get: r4 } = getProto(t6);
    let o4 = n3.call(t6, e5);
    o4 || (e5 = toRaw(e5), o4 = n3.call(t6, e5)), r4 && r4.call(t6, e5);
    const s4 = t6.delete(e5);
    return o4 && trigger(t6, "delete", e5, void 0), s4;
  }, clear() {
    const e5 = toRaw(this), t6 = 0 !== e5.size, n3 = e5.clear();
    return t6 && trigger(e5, "clear", void 0, void 0), n3;
  } });
  return ["keys", "values", "entries", Symbol.iterator].forEach((r4) => {
    n2[r4] = /* @__PURE__ */ (function(e5, t6, n3) {
      return function(...r5) {
        const o4 = this.__v_raw, s4 = toRaw(o4), i4 = isMap(s4), a6 = "entries" === e5 || e5 === Symbol.iterator && i4, l3 = "keys" === e5 && i4, c4 = o4[e5](...r5), u3 = n3 ? toShallow : t6 ? toReadonly : toReactive;
        return !t6 && track(s4, 0, l3 ? Ie2 : Me2), { next() {
          const { value: e6, done: t7 } = c4.next();
          return t7 ? { value: e6, done: t7 } : { value: a6 ? [u3(e6[0]), u3(e6[1])] : u3(e6), done: t7 };
        }, [Symbol.iterator]() {
          return this;
        } };
      };
    })(r4, e4, t5);
  }), n2;
}
function createInstrumentationGetter(e4, t5) {
  const n2 = createInstrumentations(e4, t5);
  return (t6, r4, o4) => "__v_isReactive" === r4 ? !e4 : "__v_isReadonly" === r4 ? e4 : "__v_raw" === r4 ? t6 : Reflect.get(hasOwn(n2, r4) && r4 in t6 ? n2 : t6, r4, o4);
}
function reactive(e4) {
  return isReadonly(e4) ? e4 : createReactiveObject(e4, false, Ue2, Ke2, Xe2);
}
function shallowReactive(e4) {
  return createReactiveObject(e4, false, ze2, Je2, Ye2);
}
function readonly(e4) {
  return createReactiveObject(e4, true, We2, Ge2, Qe2);
}
function shallowReadonly(e4) {
  return createReactiveObject(e4, true, qe2, Ze2, et2);
}
function createReactiveObject(e4, t5, n2, r4, o4) {
  if (!isObject(e4)) return e4;
  if (e4.__v_raw && (!t5 || !e4.__v_isReactive)) return e4;
  const s4 = (i4 = e4).__v_skip || !Object.isExtensible(i4) ? 0 : (function(e5) {
    switch (e5) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  })(toRawType(i4));
  var i4;
  if (0 === s4) return e4;
  const a6 = o4.get(e4);
  if (a6) return a6;
  const l3 = new Proxy(e4, 2 === s4 ? r4 : n2);
  return o4.set(e4, l3), l3;
}
function isReactive(e4) {
  return isReadonly(e4) ? isReactive(e4.__v_raw) : !(!e4 || !e4.__v_isReactive);
}
function isReadonly(e4) {
  return !(!e4 || !e4.__v_isReadonly);
}
function isShallow(e4) {
  return !(!e4 || !e4.__v_isShallow);
}
function isProxy(e4) {
  return !!e4 && !!e4.__v_raw;
}
function toRaw(e4) {
  const t5 = e4 && e4.__v_raw;
  return t5 ? toRaw(t5) : e4;
}
function markRaw(e4) {
  return !hasOwn(e4, "__v_skip") && Object.isExtensible(e4) && def(e4, "__v_skip", true), e4;
}
function isRef2(e4) {
  return !!e4 && true === e4.__v_isRef;
}
function ref2(e4) {
  return createRef(e4, false);
}
function shallowRef(e4) {
  return createRef(e4, true);
}
function createRef(e4, t5) {
  return isRef2(e4) ? e4 : new RefImpl(e4, t5);
}
function unref2(e4) {
  return isRef2(e4) ? e4.value : e4;
}
function toValue(e4) {
  return isFunction(e4) ? e4() : unref2(e4);
}
function proxyRefs(e4) {
  return isReactive(e4) ? e4 : new Proxy(e4, tt2);
}
function customRef(e4) {
  return new CustomRefImpl(e4);
}
function propertyToRef(e4, t5, n2) {
  return new ObjectRefImpl(e4, t5, n2);
}
function onWatcherCleanup(e4, t5 = false, n2 = ot2) {
  if (n2) {
    let t6 = rt2.get(n2);
    t6 || rt2.set(n2, t6 = []), t6.push(e4);
  }
}
function traverse(e4, t5 = 1 / 0, n2) {
  if (t5 <= 0 || !isObject(e4) || e4.__v_skip) return e4;
  if (((n2 = n2 || /* @__PURE__ */ new Map()).get(e4) || 0) >= t5) return e4;
  if (n2.set(e4, t5), t5--, isRef2(e4)) traverse(e4.value, t5, n2);
  else if (i(e4)) for (let r4 = 0; r4 < e4.length; r4++) traverse(e4[r4], t5, n2);
  else if (isSet(e4) || isMap(e4)) e4.forEach((e5) => {
    traverse(e5, t5, n2);
  });
  else if (isPlainObject(e4)) {
    for (const r4 in e4) traverse(e4[r4], t5, n2);
    for (const r4 of Object.getOwnPropertySymbols(e4)) Object.prototype.propertyIsEnumerable.call(e4, r4) && traverse(e4[r4], t5, n2);
  }
  return e4;
}
function callWithErrorHandling(e4, t5, n2, r4) {
  try {
    return r4 ? e4(...r4) : e4();
  } catch (e5) {
    handleError(e5, t5, n2);
  }
}
function callWithAsyncErrorHandling(e4, t5, n2, r4) {
  if (isFunction(e4)) {
    const o4 = callWithErrorHandling(e4, t5, n2, r4);
    return o4 && isPromise(o4) && o4.catch((e5) => {
      handleError(e5, t5, n2);
    }), o4;
  }
  if (i(e4)) {
    const o4 = [];
    for (let s4 = 0; s4 < e4.length; s4++) o4.push(callWithAsyncErrorHandling(e4[s4], t5, n2, r4));
    return o4;
  }
}
function handleError(e4, t5, n2, r4 = true) {
  t5 && t5.vnode;
  const { errorHandler: o4, throwUnhandledErrorInProduction: s4 } = t5 && t5.appContext.config || t;
  if (t5) {
    let r5 = t5.parent;
    const s5 = t5.proxy, i4 = `https://vuejs.org/error-reference/#runtime-${n2}`;
    for (; r5; ) {
      const t6 = r5.ec;
      if (t6) {
        for (let n3 = 0; n3 < t6.length; n3++) if (false === t6[n3](e4, s5, i4)) return;
      }
      r5 = r5.parent;
    }
    if (o4) return pauseTracking(), callWithErrorHandling(o4, null, 10, [e4, s5, i4]), void resetTracking();
  }
  !(function(e5, t6, n3, r5 = true, o5 = false) {
    if (o5) throw e5;
    console.error(e5);
  })(e4, 0, 0, r4, s4);
}
function nextTick2(e4) {
  const t5 = ft2 || dt2;
  return e4 ? t5.then(this ? e4.bind(this) : e4) : t5;
}
function queueJob(e4) {
  if (!(1 & e4.flags)) {
    const t5 = getId(e4), n2 = at2[at2.length - 1];
    !n2 || !(2 & e4.flags) && t5 >= getId(n2) ? at2.push(e4) : at2.splice((function(e5) {
      let t6 = lt2 + 1, n3 = at2.length;
      for (; t6 < n3; ) {
        const r4 = t6 + n3 >>> 1, o4 = at2[r4], s4 = getId(o4);
        s4 < e5 || s4 === e5 && 2 & o4.flags ? t6 = r4 + 1 : n3 = r4;
      }
      return t6;
    })(t5), 0, e4), e4.flags |= 1, queueFlush();
  }
}
function queueFlush() {
  ft2 || (ft2 = dt2.then(flushJobs));
}
function queuePostFlushCb(e4) {
  i(e4) ? ct2.push(...e4) : ut2 && -1 === e4.id ? ut2.splice(pt2 + 1, 0, e4) : 1 & e4.flags || (ct2.push(e4), e4.flags |= 1), queueFlush();
}
function flushPreFlushCbs(e4, t5, n2 = lt2 + 1) {
  for (; n2 < at2.length; n2++) {
    const t6 = at2[n2];
    if (t6 && 2 & t6.flags) {
      if (e4 && t6.id !== e4.uid) continue;
      at2.splice(n2, 1), n2--, 4 & t6.flags && (t6.flags &= -2), t6(), 4 & t6.flags || (t6.flags &= -2);
    }
  }
}
function flushPostFlushCbs(e4) {
  if (ct2.length) {
    const e5 = [...new Set(ct2)].sort((e6, t5) => getId(e6) - getId(t5));
    if (ct2.length = 0, ut2) return void ut2.push(...e5);
    for (ut2 = e5, pt2 = 0; pt2 < ut2.length; pt2++) {
      const e6 = ut2[pt2];
      4 & e6.flags && (e6.flags &= -2), 8 & e6.flags || e6(), e6.flags &= -2;
    }
    ut2 = null, pt2 = 0;
  }
}
function flushJobs(e4) {
  try {
    for (lt2 = 0; lt2 < at2.length; lt2++) {
      const e5 = at2[lt2];
      !e5 || 8 & e5.flags || (4 & e5.flags && (e5.flags &= -2), callWithErrorHandling(e5, e5.i, e5.i ? 15 : 14), 4 & e5.flags || (e5.flags &= -2));
    }
  } finally {
    for (; lt2 < at2.length; lt2++) {
      const e5 = at2[lt2];
      e5 && (e5.flags &= -2);
    }
    lt2 = -1, at2.length = 0, flushPostFlushCbs(), ft2 = null, (at2.length || ct2.length) && flushJobs();
  }
}
function setCurrentRenderingInstance$1(e4) {
  const t5 = mt2;
  return mt2 = e4, yt2 = e4 && e4.type.__scopeId || null, t5;
}
function withCtx(e4, t5 = mt2, n2) {
  if (!t5) return e4;
  if (e4._n) return e4;
  const renderFnWithContext = /* @__PURE__ */ __name((...n3) => {
    renderFnWithContext._d && setBlockTracking(-1);
    const r4 = setCurrentRenderingInstance$1(t5);
    let o4;
    try {
      o4 = e4(...n3);
    } finally {
      setCurrentRenderingInstance$1(r4), renderFnWithContext._d && setBlockTracking(1);
    }
    return o4;
  }, "renderFnWithContext");
  return renderFnWithContext._n = true, renderFnWithContext._c = true, renderFnWithContext._d = true, renderFnWithContext;
}
function invokeDirectiveHook(e4, t5, n2, r4) {
  const o4 = e4.dirs, s4 = t5 && t5.dirs;
  for (let i4 = 0; i4 < o4.length; i4++) {
    const a6 = o4[i4];
    s4 && (a6.oldValue = s4[i4].value);
    let l3 = a6.dir[r4];
    l3 && (pauseTracking(), callWithAsyncErrorHandling(l3, n2, 8, [e4.el, a6, e4, t5]), resetTracking());
  }
}
function moveTeleport(e4, t5, n2, { o: { insert: r4 }, m: o4 }, s4 = 2) {
  0 === s4 && r4(e4.targetAnchor, t5, n2);
  const { el: i4, anchor: a6, shapeFlag: l3, children: c4, props: u3 } = e4, p3 = 2 === s4;
  if (p3 && r4(i4, t5, n2), (!p3 || isTeleportDisabled(u3)) && 16 & l3) for (let e5 = 0; e5 < c4.length; e5++) o4(c4[e5], t5, n2, 2);
  p3 && r4(a6, t5, n2);
}
function updateCssVars(e4, t5) {
  const n2 = e4.ctx;
  if (n2 && n2.ut) {
    let r4, o4;
    for (t5 ? (r4 = e4.el, o4 = e4.anchor) : (r4 = e4.targetStart, o4 = e4.targetAnchor); r4 && r4 !== o4; ) 1 === r4.nodeType && r4.setAttribute("data-v-owner", n2.uid), r4 = r4.nextSibling;
    n2.ut();
  }
}
function prepareAnchor(e4, t5, n2, r4) {
  const o4 = t5.targetStart = n2(""), s4 = t5.targetAnchor = n2("");
  return o4[vt2] = s4, e4 && (r4(o4, e4), r4(s4, e4)), s4;
}
function useTransitionState() {
  const e4 = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return Vt2(() => {
    e4.isMounted = true;
  }), It2(() => {
    e4.isUnmounting = true;
  }), e4;
}
function findNonCommentChild(e4) {
  let t5 = e4[0];
  if (e4.length > 1) {
    for (const n2 of e4) if (n2.type !== an2) {
      t5 = n2;
      break;
    }
  }
  return t5;
}
function getLeavingNodesForType(e4, t5) {
  const { leavingVNodes: n2 } = e4;
  let r4 = n2.get(t5.type);
  return r4 || (r4 = /* @__PURE__ */ Object.create(null), n2.set(t5.type, r4)), r4;
}
function resolveTransitionHooks(e4, t5, n2, r4, o4) {
  const { appear: s4, mode: i4, persisted: a6 = false, onBeforeEnter: l3, onEnter: c4, onAfterEnter: u3, onEnterCancelled: p3, onBeforeLeave: d3, onLeave: f3, onAfterLeave: g4, onLeaveCancelled: m3, onBeforeAppear: v3, onAppear: _3, onAfterAppear: b4, onAppearCancelled: C3 } = t5, k3 = String(e4.key), S3 = getLeavingNodesForType(n2, e4), callHook2 = /* @__PURE__ */ __name((e5, t6) => {
    e5 && callWithAsyncErrorHandling(e5, r4, 9, t6);
  }, "callHook"), callAsyncHook = /* @__PURE__ */ __name((e5, t6) => {
    const n3 = t6[1];
    callHook2(e5, t6), i(e5) ? e5.every((e6) => e6.length <= 1) && n3() : e5.length <= 1 && n3();
  }, "callAsyncHook"), T3 = { mode: i4, persisted: a6, beforeEnter(t6) {
    let r5 = l3;
    if (!n2.isMounted) {
      if (!s4) return;
      r5 = v3 || l3;
    }
    t6[Ct2] && t6[Ct2](true);
    const o5 = S3[k3];
    o5 && isSameVNodeType(e4, o5) && o5.el[Ct2] && o5.el[Ct2](), callHook2(r5, [t6]);
  }, enter(e5) {
    let t6 = c4, r5 = u3, o5 = p3;
    if (!n2.isMounted) {
      if (!s4) return;
      t6 = _3 || c4, r5 = b4 || u3, o5 = C3 || p3;
    }
    let i5 = false;
    const a7 = e5[kt2] = (t7) => {
      i5 || (i5 = true, callHook2(t7 ? o5 : r5, [e5]), T3.delayedLeave && T3.delayedLeave(), e5[kt2] = void 0);
    };
    t6 ? callAsyncHook(t6, [e5, a7]) : a7();
  }, leave(t6, r5) {
    const o5 = String(e4.key);
    if (t6[kt2] && t6[kt2](true), n2.isUnmounting) return r5();
    callHook2(d3, [t6]);
    let s5 = false;
    const i5 = t6[Ct2] = (n3) => {
      s5 || (s5 = true, r5(), callHook2(n3 ? m3 : g4, [t6]), t6[Ct2] = void 0, S3[o5] === e4 && delete S3[o5]);
    };
    S3[o5] = e4, f3 ? callAsyncHook(f3, [t6, i5]) : i5();
  }, clone(e5) {
    const s5 = resolveTransitionHooks(e5, t5, n2, r4, o4);
    return o4 && o4(s5), s5;
  } };
  return T3;
}
function emptyPlaceholder(e4) {
  if (isKeepAlive(e4)) return (e4 = cloneVNode(e4)).children = null, e4;
}
function getInnerChild$1(e4) {
  if (!isKeepAlive(e4)) return isTeleport(e4.type) && e4.children ? findNonCommentChild(e4.children) : e4;
  if (e4.component) return e4.component.subTree;
  const { shapeFlag: t5, children: n2 } = e4;
  if (n2) {
    if (16 & t5) return n2[0];
    if (32 & t5 && isFunction(n2.default)) return n2.default();
  }
}
function setTransitionHooks(e4, t5) {
  6 & e4.shapeFlag && e4.component ? (e4.transition = t5, setTransitionHooks(e4.component.subTree, t5)) : 128 & e4.shapeFlag ? (e4.ssContent.transition = t5.clone(e4.ssContent), e4.ssFallback.transition = t5.clone(e4.ssFallback)) : e4.transition = t5;
}
function getTransitionRawChildren(e4, t5 = false, n2) {
  let r4 = [], o4 = 0;
  for (let s4 = 0; s4 < e4.length; s4++) {
    let i4 = e4[s4];
    const a6 = null == n2 ? i4.key : String(n2) + String(null != i4.key ? i4.key : s4);
    i4.type === on3 ? (128 & i4.patchFlag && o4++, r4 = r4.concat(getTransitionRawChildren(i4.children, t5, a6))) : (t5 || i4.type !== an2) && r4.push(null != a6 ? cloneVNode(i4, { key: a6 }) : i4);
  }
  if (o4 > 1) for (let e5 = 0; e5 < r4.length; e5++) r4[e5].patchFlag = -2;
  return r4;
}
function defineComponent(e4, t5) {
  return isFunction(e4) ? (() => n({ name: e4.name }, t5, { setup: e4 }))() : e4;
}
function markAsyncBoundary(e4) {
  e4.ids = [e4.ids[0] + e4.ids[2]++ + "-", 0, 0];
}
function setRef(e4, t5, n2, r4, o4 = false) {
  if (i(e4)) return void e4.forEach((e5, s5) => setRef(e5, t5 && (i(t5) ? t5[s5] : t5), n2, r4, o4));
  if (isAsyncWrapper(r4) && !o4) return void (512 & r4.shapeFlag && r4.type.__asyncResolved && r4.component.subTree.component && setRef(e4, t5, n2, r4.component.subTree));
  const s4 = 4 & r4.shapeFlag ? getComponentPublicInstance(r4.component) : r4.el, i4 = o4 ? null : s4, { i: a6, r: l3 } = e4, c4 = t5 && t5.r, u3 = a6.refs === t ? a6.refs = {} : a6.refs, p3 = a6.setupState, d3 = toRaw(p3), m3 = p3 === t ? NO : (e5) => hasOwn(d3, e5);
  if (null != c4 && c4 !== l3) {
    if (invalidatePendingSetRef(t5), isString(c4)) u3[c4] = null, m3(c4) && (p3[c4] = null);
    else if (isRef2(c4)) {
      c4.value = null;
      const e5 = t5;
      e5.k && (u3[e5.k] = null);
    }
  }
  if (isFunction(l3)) callWithErrorHandling(l3, a6, 12, [i4, u3]);
  else {
    const t6 = isString(l3), r5 = isRef2(l3);
    if (t6 || r5) {
      const doSet = /* @__PURE__ */ __name(() => {
        if (e4.f) {
          const n3 = t6 ? m3(l3) ? p3[l3] : u3[l3] : l3.value;
          if (o4) i(n3) && remove(n3, s4);
          else if (i(n3)) n3.includes(s4) || n3.push(s4);
          else if (t6) u3[l3] = [s4], m3(l3) && (p3[l3] = u3[l3]);
          else {
            const t7 = [s4];
            l3.value = t7, e4.k && (u3[e4.k] = t7);
          }
        } else t6 ? (u3[l3] = i4, m3(l3) && (p3[l3] = i4)) : r5 && (l3.value = i4, e4.k && (u3[e4.k] = i4));
      }, "doSet");
      if (i4) {
        const job = /* @__PURE__ */ __name(() => {
          doSet(), Rt2.delete(e4);
        }, "job");
        job.id = -1, Rt2.set(e4, job), tn2(job, n2);
      } else invalidatePendingSetRef(e4), doSet();
    }
  }
}
function invalidatePendingSetRef(e4) {
  const t5 = Rt2.get(e4);
  t5 && (t5.flags |= 8, Rt2.delete(e4));
}
function createHydrationFunctions(e4) {
  const { mt: t5, p: n2, o: { patchProp: r4, createText: o4, nextSibling: s4, parentNode: i4, remove: a6, insert: l3, createComment: c4 } } = e4, hydrateNode = /* @__PURE__ */ __name((n3, r5, a7, c5, u3, p3 = false) => {
    p3 = p3 || !!r5.dynamicChildren;
    const d3 = isComment(n3) && "[" === n3.data, onMismatch = /* @__PURE__ */ __name(() => handleMismatch(n3, r5, a7, c5, u3, d3), "onMismatch"), { type: f3, ref: g4, shapeFlag: m3, patchFlag: y4 } = r5;
    let v3 = n3.nodeType;
    r5.el = n3, -2 === y4 && (p3 = false, r5.dynamicChildren = null);
    let _3 = null;
    switch (f3) {
      case sn2:
        3 !== v3 ? "" === r5.children ? (l3(r5.el = o4(""), i4(n3), n3), _3 = n3) : _3 = onMismatch() : (n3.data !== r5.children && (logMismatchError(), n3.data = r5.children), _3 = s4(n3));
        break;
      case an2:
        isTemplateNode2(n3) ? (_3 = s4(n3), replaceNode(r5.el = n3.content.firstChild, n3, a7)) : _3 = 8 !== v3 || d3 ? onMismatch() : s4(n3);
        break;
      case ln2:
        if (d3 && (v3 = (n3 = s4(n3)).nodeType), 1 === v3 || 3 === v3) {
          _3 = n3;
          const e5 = !r5.children.length;
          for (let t6 = 0; t6 < r5.staticCount; t6++) e5 && (r5.children += 1 === _3.nodeType ? _3.outerHTML : _3.data), t6 === r5.staticCount - 1 && (r5.anchor = _3), _3 = s4(_3);
          return d3 ? s4(_3) : _3;
        }
        onMismatch();
        break;
      case on3:
        _3 = d3 ? hydrateFragment(n3, r5, a7, c5, u3, p3) : onMismatch();
        break;
      default:
        if (1 & m3) _3 = 1 === v3 && r5.type.toLowerCase() === n3.tagName.toLowerCase() || isTemplateNode2(n3) ? hydrateElement(n3, r5, a7, c5, u3, p3) : onMismatch();
        else if (6 & m3) {
          r5.slotScopeIds = u3;
          const e5 = i4(n3);
          if (_3 = d3 ? locateClosingAnchor(n3) : isComment(n3) && "teleport start" === n3.data ? locateClosingAnchor(n3, n3.data, "teleport end") : s4(n3), t5(r5, e5, null, a7, c5, getContainerType(e5), p3), isAsyncWrapper(r5) && !r5.type.__asyncResolved) {
            let t6;
            d3 ? (t6 = createVNode(on3), t6.anchor = _3 ? _3.previousSibling : e5.lastChild) : t6 = 3 === n3.nodeType ? createTextVNode("") : createVNode("div"), t6.el = n3, r5.component.subTree = t6;
          }
        } else 64 & m3 ? _3 = 8 !== v3 ? onMismatch() : r5.type.hydrate(n3, r5, a7, c5, u3, p3, e4, hydrateChildren) : 128 & m3 && (_3 = r5.type.hydrate(n3, r5, a7, c5, getContainerType(i4(n3)), u3, p3, e4, hydrateNode));
    }
    return null != g4 && setRef(g4, null, c5, r5), _3;
  }, "hydrateNode"), hydrateElement = /* @__PURE__ */ __name((e5, t6, n3, o5, s5, i5) => {
    i5 = i5 || !!t6.dynamicChildren;
    const { type: l4, props: c5, patchFlag: u3, shapeFlag: p3, dirs: d3, transition: f3 } = t6, g4 = "input" === l4 || "option" === l4;
    if (g4 || -1 !== u3) {
      d3 && invokeDirectiveHook(t6, null, n3, "created");
      let l5, m3 = false;
      if (isTemplateNode2(e5)) {
        m3 = needTransition(null, f3) && n3 && n3.vnode.props && n3.vnode.props.appear;
        const r5 = e5.content.firstChild;
        if (m3) {
          const e6 = r5.getAttribute("class");
          e6 && (r5.$cls = e6), f3.beforeEnter(r5);
        }
        replaceNode(r5, e5, n3), t6.el = e5 = r5;
      }
      if (16 & p3 && (!c5 || !c5.innerHTML && !c5.textContent)) {
        let r5 = hydrateChildren(e5.firstChild, t6, e5, n3, o5, s5, i5);
        for (; r5; ) {
          isMismatchAllowed(e5, 1) || logMismatchError();
          const t7 = r5;
          r5 = r5.nextSibling, a6(t7);
        }
      } else if (8 & p3) {
        let n4 = t6.children;
        "\n" !== n4[0] || "PRE" !== e5.tagName && "TEXTAREA" !== e5.tagName || (n4 = n4.slice(1));
        const { textContent: r5 } = e5;
        r5 !== n4 && r5 !== n4.replace(/\r\n|\r/g, "\n") && (isMismatchAllowed(e5, 0) || logMismatchError(), e5.textContent = t6.children);
      }
      if (c5) {
        if (g4 || !i5 || 48 & u3) {
          const t7 = e5.tagName.includes("-");
          for (const o6 in c5) (g4 && (o6.endsWith("value") || "indeterminate" === o6) || isOn(o6) && !s(o6) || "." === o6[0] || t7) && r4(e5, o6, null, c5[o6], void 0, n3);
        } else if (c5.onClick) r4(e5, "onClick", null, c5.onClick, void 0, n3);
        else if (4 & u3 && isReactive(c5.style)) for (const e6 in c5.style) c5.style[e6];
      }
      (l5 = c5 && c5.onVnodeBeforeMount) && invokeVNodeHook(l5, n3, t6), d3 && invokeDirectiveHook(t6, null, n3, "beforeMount"), ((l5 = c5 && c5.onVnodeMounted) || d3 || m3) && queueEffectWithSuspense(() => {
        l5 && invokeVNodeHook(l5, n3, t6), m3 && f3.enter(e5), d3 && invokeDirectiveHook(t6, null, n3, "mounted");
      }, o5);
    }
    return e5.nextSibling;
  }, "hydrateElement"), hydrateChildren = /* @__PURE__ */ __name((e5, t6, r5, i5, a7, c5, u3) => {
    u3 = u3 || !!t6.dynamicChildren;
    const p3 = t6.children, d3 = p3.length;
    for (let t7 = 0; t7 < d3; t7++) {
      const f3 = u3 ? p3[t7] : p3[t7] = normalizeVNode$1(p3[t7]), g4 = f3.type === sn2;
      e5 ? (g4 && !u3 && t7 + 1 < d3 && normalizeVNode$1(p3[t7 + 1]).type === sn2 && (l3(o4(e5.data.slice(f3.children.length)), r5, s4(e5)), e5.data = f3.children), e5 = hydrateNode(e5, f3, i5, a7, c5, u3)) : g4 && !f3.children ? l3(f3.el = o4(""), r5) : (isMismatchAllowed(r5, 1) || logMismatchError(), n2(null, f3, r5, null, i5, a7, getContainerType(r5), c5));
    }
    return e5;
  }, "hydrateChildren"), hydrateFragment = /* @__PURE__ */ __name((e5, t6, n3, r5, o5, a7) => {
    const { slotScopeIds: u3 } = t6;
    u3 && (o5 = o5 ? o5.concat(u3) : u3);
    const p3 = i4(e5), d3 = hydrateChildren(s4(e5), t6, p3, n3, r5, o5, a7);
    return d3 && isComment(d3) && "]" === d3.data ? s4(t6.anchor = d3) : (logMismatchError(), l3(t6.anchor = c4("]"), p3, d3), d3);
  }, "hydrateFragment"), handleMismatch = /* @__PURE__ */ __name((e5, t6, r5, o5, l4, c5) => {
    if (isMismatchAllowed(e5.parentElement, 1) || logMismatchError(), t6.el = null, c5) {
      const t7 = locateClosingAnchor(e5);
      for (; ; ) {
        const n3 = s4(e5);
        if (!n3 || n3 === t7) break;
        a6(n3);
      }
    }
    const u3 = s4(e5), p3 = i4(e5);
    return a6(e5), n2(null, t6, p3, u3, r5, o5, getContainerType(p3), l4), r5 && (r5.vnode.el = t6.el, updateHOCHostEl(r5, t6.el)), u3;
  }, "handleMismatch"), locateClosingAnchor = /* @__PURE__ */ __name((e5, t6 = "[", n3 = "]") => {
    let r5 = 0;
    for (; e5; ) if ((e5 = s4(e5)) && isComment(e5) && (e5.data === t6 && r5++, e5.data === n3)) {
      if (0 === r5) return s4(e5);
      r5--;
    }
    return e5;
  }, "locateClosingAnchor"), replaceNode = /* @__PURE__ */ __name((e5, t6, n3) => {
    const r5 = t6.parentNode;
    r5 && r5.replaceChild(e5, t6);
    let o5 = n3;
    for (; o5; ) o5.vnode.el === t6 && (o5.vnode.el = o5.subTree.el = e5), o5 = o5.parent;
  }, "replaceNode"), isTemplateNode2 = /* @__PURE__ */ __name((e5) => 1 === e5.nodeType && "TEMPLATE" === e5.tagName, "isTemplateNode");
  return [(e5, t6) => {
    if (!t6.hasChildNodes()) return n2(null, e5, t6), flushPostFlushCbs(), void (t6._vnode = e5);
    hydrateNode(t6.firstChild, e5, null, null, null), flushPostFlushCbs(), t6._vnode = e5;
  }, hydrateNode];
}
function isMismatchAllowed(e4, t5) {
  if (0 === t5 || 1 === t5) for (; e4 && !e4.hasAttribute(xt2); ) e4 = e4.parentElement;
  const n2 = e4 && e4.getAttribute(xt2);
  if (null == n2) return false;
  if ("" === n2) return true;
  {
    const e5 = n2.split(",");
    return !(0 !== t5 || !e5.includes("children")) || e5.includes(Et2[t5]);
  }
}
function createInnerComp(e4, t5) {
  const { ref: n2, props: r4, children: o4, ce: s4 } = t5.vnode, i4 = createVNode(e4, r4, o4);
  return i4.ref = n2, i4.ce = s4, delete t5.vnode.ce, i4;
}
function matches(e4, t5) {
  return i(e4) ? e4.some((e5) => matches(e5, t5)) : isString(e4) ? e4.split(",").includes(t5) : !!isRegExp(e4) && (e4.lastIndex = 0, e4.test(t5));
}
function onActivated(e4, t5) {
  registerKeepAliveHook(e4, "a", t5);
}
function onDeactivated(e4, t5) {
  registerKeepAliveHook(e4, "da", t5);
}
function registerKeepAliveHook(e4, t5, n2 = hn2) {
  const r4 = e4.__wdc || (e4.__wdc = () => {
    let t6 = n2;
    for (; t6; ) {
      if (t6.isDeactivated) return;
      t6 = t6.parent;
    }
    return e4();
  });
  if (injectHook(t5, r4, n2), n2) {
    let e5 = n2.parent;
    for (; e5 && e5.parent; ) isKeepAlive(e5.parent.vnode) && injectToKeepAliveRoot(r4, t5, n2, e5), e5 = e5.parent;
  }
}
function injectToKeepAliveRoot(e4, t5, n2, r4) {
  const o4 = injectHook(t5, e4, r4, true);
  Dt2(() => {
    remove(r4[t5], o4);
  }, n2);
}
function resetShapeFlag(e4) {
  e4.shapeFlag &= -257, e4.shapeFlag &= -513;
}
function getInnerChild(e4) {
  return 128 & e4.shapeFlag ? e4.ssContent : e4;
}
function injectHook(e4, t5, n2 = hn2, r4 = false) {
  if (n2) {
    const o4 = n2[e4] || (n2[e4] = []), s4 = t5.__weh || (t5.__weh = (...r5) => {
      pauseTracking();
      const o5 = setCurrentInstance(n2), s5 = callWithAsyncErrorHandling(t5, n2, e4, r5);
      return o5(), resetTracking(), s5;
    });
    return r4 ? o4.unshift(s4) : o4.push(s4), s4;
  }
}
function onErrorCaptured(e4, t5 = hn2) {
  injectHook("ec", e4, t5);
}
function resolveAsset(e4, t5, n2 = true, r4 = false) {
  const o4 = mt2 || hn2;
  if (o4) {
    const n3 = o4.type;
    if (e4 === Bt2) {
      const e5 = getComponentName(n3, false);
      if (e5 && (e5 === t5 || e5 === p(t5) || e5 === f(p(t5)))) return n3;
    }
    const s4 = resolve(o4[e4] || n3[e4], t5) || resolve(o4.appContext[e4], t5);
    return !s4 && r4 ? n3 : s4;
  }
}
function resolve(e4, t5) {
  return e4 && (e4[t5] || e4[p(t5)] || e4[f(p(t5))]);
}
function ensureValidVNode$1(e4) {
  return e4.some((e5) => !isVNode$2(e5) || e5.type !== an2 && !(e5.type === on3 && !ensureValidVNode$1(e5.children))) ? e4 : null;
}
function getContext2(e4) {
  const t5 = getCurrentInstance();
  return t5.setupContext || (t5.setupContext = createSetupContext(t5));
}
function normalizePropsOrEmits(e4) {
  return i(e4) ? e4.reduce((e5, t5) => (e5[t5] = null, e5), {}) : e4;
}
function applyOptions(e4) {
  const t5 = resolveMergedOptions(e4), n2 = e4.proxy, r4 = e4.ctx;
  Kt2 = false, t5.beforeCreate && callHook$1(t5.beforeCreate, e4, "bc");
  const { data: o4, computed: s4, methods: i4, watch: a6, provide: l3, inject: c4, created: u3, beforeMount: p3, mounted: d3, beforeUpdate: g4, updated: m3, activated: v3, deactivated: b4, beforeDestroy: C3, beforeUnmount: k3, destroyed: S3, unmounted: T3, render: w3, renderTracked: R3, renderTriggered: x4, errorCaptured: E3, serverPrefetch: P3, expose: $2, inheritAttrs: N3, components: O3, directives: V2, filters: H2 } = t5;
  if (c4 && (function(e5, t6) {
    i(e5) && (e5 = normalizeInject(e5));
    for (const n3 in e5) {
      const r5 = e5[n3];
      let o5;
      o5 = isObject(r5) ? "default" in r5 ? inject(r5.from || n3, r5.default, true) : inject(r5.from || n3) : inject(r5), isRef2(o5) ? Object.defineProperty(t6, n3, { enumerable: true, configurable: true, get: /* @__PURE__ */ __name(() => o5.value, "get"), set: /* @__PURE__ */ __name((e6) => o5.value = e6, "set") }) : t6[n3] = o5;
    }
  })(c4, r4, null), i4) for (const e5 in i4) {
    const t6 = i4[e5];
    isFunction(t6) && (r4[e5] = t6.bind(n2));
  }
  if (o4) {
    const t6 = o4.call(n2, n2);
    isObject(t6) && (e4.data = reactive(t6));
  }
  if (Kt2 = true, s4) for (const e5 in s4) {
    const t6 = s4[e5], o5 = isFunction(t6) ? t6.bind(n2, n2) : isFunction(t6.get) ? t6.get.bind(n2, n2) : NOOP, i5 = !isFunction(t6) && isFunction(t6.set) ? t6.set.bind(n2) : NOOP, a7 = computed({ get: o5, set: i5 });
    Object.defineProperty(r4, e5, { enumerable: true, configurable: true, get: /* @__PURE__ */ __name(() => a7.value, "get"), set: /* @__PURE__ */ __name((e6) => a7.value = e6, "set") });
  }
  if (a6) for (const e5 in a6) createWatcher(a6[e5], r4, n2, e5);
  if (l3) {
    const e5 = isFunction(l3) ? l3.call(n2) : l3;
    Reflect.ownKeys(e5).forEach((t6) => {
      provide(t6, e5[t6]);
    });
  }
  function registerLifecycleHook(e5, t6) {
    i(t6) ? t6.forEach((t7) => e5(t7.bind(n2))) : t6 && e5(t6.bind(n2));
  }
  __name(registerLifecycleHook, "registerLifecycleHook");
  if (u3 && callHook$1(u3, e4, "c"), registerLifecycleHook(Ot2, p3), registerLifecycleHook(Vt2, d3), registerLifecycleHook(Ht2, g4), registerLifecycleHook(Mt2, m3), registerLifecycleHook(onActivated, v3), registerLifecycleHook(onDeactivated, b4), registerLifecycleHook(onErrorCaptured, E3), registerLifecycleHook(Ft2, R3), registerLifecycleHook(jt2, x4), registerLifecycleHook(It2, k3), registerLifecycleHook(Dt2, T3), registerLifecycleHook(Lt2, P3), i($2)) if ($2.length) {
    const t6 = e4.exposed || (e4.exposed = {});
    $2.forEach((e5) => {
      Object.defineProperty(t6, e5, { get: /* @__PURE__ */ __name(() => n2[e5], "get"), set: /* @__PURE__ */ __name((t7) => n2[e5] = t7, "set"), enumerable: true });
    });
  } else e4.exposed || (e4.exposed = {});
  w3 && e4.render === NOOP && (e4.render = w3), null != N3 && (e4.inheritAttrs = N3), O3 && (e4.components = O3), V2 && (e4.directives = V2), P3 && markAsyncBoundary(e4);
}
function callHook$1(e4, t5, n2) {
  callWithAsyncErrorHandling(i(e4) ? e4.map((e5) => e5.bind(t5.proxy)) : e4.bind(t5.proxy), t5, n2);
}
function createWatcher(e4, t5, n2, r4) {
  let o4 = r4.includes(".") ? createPathGetter(n2, r4) : () => n2[r4];
  if (isString(e4)) {
    const n3 = t5[e4];
    isFunction(n3) && watch(o4, n3);
  } else if (isFunction(e4)) watch(o4, e4.bind(n2));
  else if (isObject(e4)) if (i(e4)) e4.forEach((e5) => createWatcher(e5, t5, n2, r4));
  else {
    const r5 = isFunction(e4.handler) ? e4.handler.bind(n2) : t5[e4.handler];
    isFunction(r5) && watch(o4, r5, e4);
  }
}
function resolveMergedOptions(e4) {
  const t5 = e4.type, { mixins: n2, extends: r4 } = t5, { mixins: o4, optionsCache: s4, config: { optionMergeStrategies: i4 } } = e4.appContext, a6 = s4.get(t5);
  let l3;
  return a6 ? l3 = a6 : o4.length || n2 || r4 ? (l3 = {}, o4.length && o4.forEach((e5) => mergeOptions(l3, e5, i4, true)), mergeOptions(l3, t5, i4)) : l3 = t5, isObject(t5) && s4.set(t5, l3), l3;
}
function mergeOptions(e4, t5, n2, r4 = false) {
  const { mixins: o4, extends: s4 } = t5;
  s4 && mergeOptions(e4, s4, n2, true), o4 && o4.forEach((t6) => mergeOptions(e4, t6, n2, true));
  for (const o5 in t5) if (r4 && "expose" === o5) ;
  else {
    const r5 = Jt2[o5] || n2 && n2[o5];
    e4[o5] = r5 ? r5(e4[o5], t5[o5]) : t5[o5];
  }
  return e4;
}
function mergeDataFn(e4, t5) {
  return t5 ? e4 ? function() {
    return n(isFunction(e4) ? e4.call(this, this) : e4, isFunction(t5) ? t5.call(this, this) : t5);
  } : t5 : e4;
}
function normalizeInject(e4) {
  if (i(e4)) {
    const t5 = {};
    for (let n2 = 0; n2 < e4.length; n2++) t5[e4[n2]] = e4[n2];
    return t5;
  }
  return e4;
}
function mergeAsArray2(e4, t5) {
  return e4 ? [...new Set([].concat(e4, t5))] : t5;
}
function mergeObjectOptions(e4, t5) {
  return e4 ? n(/* @__PURE__ */ Object.create(null), e4, t5) : t5;
}
function mergeEmitsOrPropsOptions(e4, t5) {
  return e4 ? i(e4) && i(t5) ? [.../* @__PURE__ */ new Set([...e4, ...t5])] : n(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(e4), normalizePropsOrEmits(null != t5 ? t5 : {})) : t5;
}
function createAppContext() {
  return { app: null, config: { isNativeTag: NO, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
function createAppAPI(e4, t5) {
  return function(n2, r4 = null) {
    isFunction(n2) || (n2 = n({}, n2)), null == r4 || isObject(r4) || (r4 = null);
    const o4 = createAppContext(), s4 = /* @__PURE__ */ new WeakSet(), i4 = [];
    let a6 = false;
    const l3 = o4.app = { _uid: Gt2++, _component: n2, _props: r4, _container: null, _context: o4, _instance: null, version: Cn, get config() {
      return o4.config;
    }, set config(e5) {
    }, use: /* @__PURE__ */ __name((e5, ...t6) => (s4.has(e5) || (e5 && isFunction(e5.install) ? (s4.add(e5), e5.install(l3, ...t6)) : isFunction(e5) && (s4.add(e5), e5(l3, ...t6))), l3), "use"), mixin: /* @__PURE__ */ __name((e5) => (o4.mixins.includes(e5) || o4.mixins.push(e5), l3), "mixin"), component: /* @__PURE__ */ __name((e5, t6) => t6 ? (o4.components[e5] = t6, l3) : o4.components[e5], "component"), directive: /* @__PURE__ */ __name((e5, t6) => t6 ? (o4.directives[e5] = t6, l3) : o4.directives[e5], "directive"), mount(s5, i5, c4) {
      if (!a6) {
        const u3 = l3._ceVNode || createVNode(n2, r4);
        return u3.appContext = o4, true === c4 ? c4 = "svg" : false === c4 && (c4 = void 0), i5 && t5 ? t5(u3, s5) : e4(u3, s5, c4), a6 = true, l3._container = s5, s5.__vue_app__ = l3, getComponentPublicInstance(u3.component);
      }
    }, onUnmount(e5) {
      i4.push(e5);
    }, unmount() {
      a6 && (callWithAsyncErrorHandling(i4, l3._instance, 16), e4(null, l3._container), delete l3._container.__vue_app__);
    }, provide: /* @__PURE__ */ __name((e5, t6) => (o4.provides[e5] = t6, l3), "provide"), runWithContext(e5) {
      const t6 = Zt2;
      Zt2 = l3;
      try {
        return e5();
      } finally {
        Zt2 = t6;
      }
    } };
    return l3;
  };
}
function provide(e4, t5) {
  if (hn2) {
    let n2 = hn2.provides;
    const r4 = hn2.parent && hn2.parent.provides;
    r4 === n2 && (n2 = hn2.provides = Object.create(r4)), n2[e4] = t5;
  }
}
function inject(e4, t5, n2 = false) {
  const r4 = getCurrentInstance();
  if (r4 || Zt2) {
    let o4 = Zt2 ? Zt2._context.provides : r4 ? null == r4.parent || r4.ce ? r4.vnode.appContext && r4.vnode.appContext.provides : r4.parent.provides : void 0;
    if (o4 && e4 in o4) return o4[e4];
    if (arguments.length > 1) return n2 && isFunction(t5) ? t5.call(r4 && r4.proxy) : t5;
  }
}
function hasInjectionContext() {
  return !(!getCurrentInstance() && !Zt2);
}
function watchEffect(e4, t5) {
  return doWatch(e4, null, t5);
}
function watchSyncEffect(e4, t5) {
  return doWatch(e4, null, { flush: "sync" });
}
function watch(e4, t5, n2) {
  return doWatch(e4, t5, n2);
}
function doWatch(e4, t5, n2 = t) {
  const { immediate: r4, deep: o4, flush: s4, once: i4 } = n2, a6 = n({}, n2), l3 = t5 && r4 || !t5 && "post" !== s4;
  let c4;
  if (_n) {
    if ("sync" === s4) {
      const e5 = useSSRContext();
      c4 = e5.__watcherHandles || (e5.__watcherHandles = []);
    } else if (!l3) {
      const watchStopHandle = /* @__PURE__ */ __name(() => {
      }, "watchStopHandle");
      return watchStopHandle.stop = NOOP, watchStopHandle.resume = NOOP, watchStopHandle.pause = NOOP, watchStopHandle;
    }
  }
  const u3 = hn2;
  a6.call = (e5, t6, n3) => callWithAsyncErrorHandling(e5, u3, t6, n3);
  let p3 = false;
  "post" === s4 ? a6.scheduler = (e5) => {
    tn2(e5, u3 && u3.suspense);
  } : "sync" !== s4 && (p3 = true, a6.scheduler = (e5, t6) => {
    t6 ? e5() : queueJob(e5);
  }), a6.augmentJob = (e5) => {
    t5 && (e5.flags |= 4), p3 && (e5.flags |= 2, u3 && (e5.id = u3.uid, e5.i = u3));
  };
  const d3 = (function(e5, t6, n3 = t) {
    const { immediate: r5, deep: o5, once: s5, scheduler: i5, augmentJob: a7, call: l4 } = n3, reactiveGetter = /* @__PURE__ */ __name((e6) => o5 ? e6 : isShallow(e6) || false === o5 || 0 === o5 ? traverse(e6, 1) : traverse(e6), "reactiveGetter");
    let c5, u4, p4, d4, v3 = false, _3 = false;
    if (isRef2(e5) ? (u4 = /* @__PURE__ */ __name(() => e5.value, "u"), v3 = isShallow(e5)) : isReactive(e5) ? (u4 = /* @__PURE__ */ __name(() => reactiveGetter(e5), "u"), v3 = true) : i(e5) ? (_3 = true, v3 = e5.some((e6) => isReactive(e6) || isShallow(e6)), u4 = /* @__PURE__ */ __name(() => e5.map((e6) => isRef2(e6) ? e6.value : isReactive(e6) ? reactiveGetter(e6) : isFunction(e6) ? l4 ? l4(e6, 2) : e6() : void 0), "u")) : u4 = isFunction(e5) ? t6 ? l4 ? () => l4(e5, 2) : e5 : () => {
      if (p4) {
        pauseTracking();
        try {
          p4();
        } finally {
          resetTracking();
        }
      }
      const t7 = ot2;
      ot2 = c5;
      try {
        return l4 ? l4(e5, 3, [d4]) : e5(d4);
      } finally {
        ot2 = t7;
      }
    } : NOOP, t6 && o5) {
      const e6 = u4, t7 = true === o5 ? 1 / 0 : o5;
      u4 = /* @__PURE__ */ __name(() => traverse(e6(), t7), "u");
    }
    const C3 = getCurrentScope(), watchHandle = /* @__PURE__ */ __name(() => {
      c5.stop(), C3 && C3.active && remove(C3.effects, c5);
    }, "watchHandle");
    if (s5 && t6) {
      const e6 = t6;
      t6 = /* @__PURE__ */ __name((...t7) => {
        e6(...t7), watchHandle();
      }, "t");
    }
    let k3 = _3 ? new Array(e5.length).fill(nt2) : nt2;
    const job = /* @__PURE__ */ __name((e6) => {
      if (1 & c5.flags && (c5.dirty || e6)) if (t6) {
        const e7 = c5.run();
        if (o5 || v3 || (_3 ? e7.some((e8, t7) => hasChanged(e8, k3[t7])) : hasChanged(e7, k3))) {
          p4 && p4();
          const n4 = ot2;
          ot2 = c5;
          try {
            const n5 = [e7, k3 === nt2 ? void 0 : _3 && k3[0] === nt2 ? [] : k3, d4];
            k3 = e7, l4 ? l4(t6, 3, n5) : t6(...n5);
          } finally {
            ot2 = n4;
          }
        }
      } else c5.run();
    }, "job");
    return a7 && a7(job), c5 = new ReactiveEffect(u4), c5.scheduler = i5 ? () => i5(job, false) : job, d4 = /* @__PURE__ */ __name((e6) => onWatcherCleanup(e6, false, c5), "d"), p4 = c5.onStop = () => {
      const e6 = rt2.get(c5);
      if (e6) {
        if (l4) l4(e6, 4);
        else for (const t7 of e6) t7();
        rt2.delete(c5);
      }
    }, t6 ? r5 ? job(true) : k3 = c5.run() : i5 ? i5(job.bind(null, true), true) : c5.run(), watchHandle.pause = c5.pause.bind(c5), watchHandle.resume = c5.resume.bind(c5), watchHandle.stop = watchHandle, watchHandle;
  })(e4, t5, a6);
  return _n && (c4 ? c4.push(d3) : l3 && d3()), d3;
}
function instanceWatch(e4, t5, n2) {
  const r4 = this.proxy, o4 = isString(e4) ? e4.includes(".") ? createPathGetter(r4, e4) : () => r4[e4] : e4.bind(r4, r4);
  let s4;
  isFunction(t5) ? s4 = t5 : (s4 = t5.handler, n2 = t5);
  const i4 = setCurrentInstance(this), a6 = doWatch(o4, s4.bind(r4), n2);
  return i4(), a6;
}
function createPathGetter(e4, t5) {
  const n2 = t5.split(".");
  return () => {
    let t6 = e4;
    for (let e5 = 0; e5 < n2.length && t6; e5++) t6 = t6[n2[e5]];
    return t6;
  };
}
function emit2(e4, t5, ...n2) {
  if (e4.isUnmounted) return;
  const r4 = e4.vnode.props || t;
  let o4 = n2;
  const s4 = t5.startsWith("update:"), i4 = s4 && getModelModifiers(r4, t5.slice(7));
  let a6;
  i4 && (i4.trim && (o4 = n2.map((e5) => isString(e5) ? e5.trim() : e5)), i4.number && (o4 = n2.map(looseToNumber)));
  let l3 = r4[a6 = u(t5)] || r4[a6 = u(p(t5))];
  !l3 && s4 && (l3 = r4[a6 = u(d(t5))]), l3 && callWithAsyncErrorHandling(l3, e4, 6, o4);
  const c4 = r4[a6 + "Once"];
  if (c4) {
    if (e4.emitted) {
      if (e4.emitted[a6]) return;
    } else e4.emitted = {};
    e4.emitted[a6] = true, callWithAsyncErrorHandling(c4, e4, 6, o4);
  }
}
function normalizeEmitsOptions(e4, t5, n2 = false) {
  const r4 = n2 ? Yt2 : t5.emitsCache, o4 = r4.get(e4);
  if (void 0 !== o4) return o4;
  const s4 = e4.emits;
  let i4 = {}, a6 = false;
  if (!isFunction(e4)) {
    const extendEmits = /* @__PURE__ */ __name((e5) => {
      const n3 = normalizeEmitsOptions(e5, t5, true);
      n3 && (a6 = true, n(i4, n3));
    }, "extendEmits");
    !n2 && t5.mixins.length && t5.mixins.forEach(extendEmits), e4.extends && extendEmits(e4.extends), e4.mixins && e4.mixins.forEach(extendEmits);
  }
  return s4 || a6 ? (i(s4) ? s4.forEach((e5) => i4[e5] = null) : n(i4, s4), isObject(e4) && r4.set(e4, i4), i4) : (isObject(e4) && r4.set(e4, null), null);
}
function isEmitListener(e4, t5) {
  return !(!e4 || !isOn(t5)) && (t5 = t5.slice(2).replace(/Once$/, ""), hasOwn(e4, t5[0].toLowerCase() + t5.slice(1)) || hasOwn(e4, d(t5)) || hasOwn(e4, t5));
}
function renderComponentRoot$1(e4) {
  const { type: t5, vnode: n2, proxy: r4, withProxy: o4, propsOptions: [s4], slots: i4, attrs: a6, emit: l3, render: c4, renderCache: u3, props: p3, data: d3, setupState: f3, ctx: g4, inheritAttrs: m3 } = e4, y4 = setCurrentRenderingInstance$1(e4);
  let v3, _3;
  try {
    if (4 & n2.shapeFlag) {
      const e5 = o4 || r4, t6 = e5;
      v3 = normalizeVNode$1(c4.call(t6, e5, u3, p3, f3, d3, g4)), _3 = a6;
    } else {
      const e5 = t5;
      0, v3 = normalizeVNode$1(e5.length > 1 ? e5(p3, { attrs: a6, slots: i4, emit: l3 }) : e5(p3, null)), _3 = t5.props ? a6 : getFunctionalFallthrough(a6);
    }
  } catch (t6) {
    cn2.length = 0, handleError(t6, e4, 1), v3 = createVNode(an2);
  }
  let b4 = v3;
  if (_3 && false !== m3) {
    const e5 = Object.keys(_3), { shapeFlag: t6 } = b4;
    e5.length && 7 & t6 && (s4 && e5.some(isModelListener) && (_3 = filterModelListeners(_3, s4)), b4 = cloneVNode(b4, _3, false, true));
  }
  return n2.dirs && (b4 = cloneVNode(b4, null, false, true), b4.dirs = b4.dirs ? b4.dirs.concat(n2.dirs) : n2.dirs), n2.transition && setTransitionHooks(b4, n2.transition), v3 = b4, setCurrentRenderingInstance$1(y4), v3;
}
function hasPropsChanged(e4, t5, n2) {
  const r4 = Object.keys(t5);
  if (r4.length !== Object.keys(e4).length) return true;
  for (let o4 = 0; o4 < r4.length; o4++) {
    const s4 = r4[o4];
    if (t5[s4] !== e4[s4] && !isEmitListener(n2, s4)) return true;
  }
  return false;
}
function updateHOCHostEl({ vnode: e4, parent: t5 }, n2) {
  for (; t5; ) {
    const r4 = t5.subTree;
    if (r4.suspense && r4.suspense.activeBranch === e4 && (r4.el = e4.el), r4 !== e4) break;
    (e4 = t5.vnode).el = n2, t5 = t5.parent;
  }
}
function setFullProps(e4, t5, n2, r4) {
  const [o4, s4] = e4.propsOptions;
  let i4, a6 = false;
  if (t5) for (let l3 in t5) {
    if (s(l3)) continue;
    const c4 = t5[l3];
    let u3;
    o4 && hasOwn(o4, u3 = p(l3)) ? s4 && s4.includes(u3) ? (i4 || (i4 = {}))[u3] = c4 : n2[u3] = c4 : isEmitListener(e4.emitsOptions, l3) || l3 in r4 && c4 === r4[l3] || (r4[l3] = c4, a6 = true);
  }
  if (s4) {
    const t6 = toRaw(n2), r5 = i4 || t;
    for (let i5 = 0; i5 < s4.length; i5++) {
      const a7 = s4[i5];
      n2[a7] = resolvePropValue(o4, t6, a7, r5[a7], e4, !hasOwn(r5, a7));
    }
  }
  return a6;
}
function resolvePropValue(e4, t5, n2, r4, o4, s4) {
  const i4 = e4[n2];
  if (null != i4) {
    const e5 = hasOwn(i4, "default");
    if (e5 && void 0 === r4) {
      const e6 = i4.default;
      if (i4.type !== Function && !i4.skipFactory && isFunction(e6)) {
        const { propsDefaults: s5 } = o4;
        if (n2 in s5) r4 = s5[n2];
        else {
          const i5 = setCurrentInstance(o4);
          r4 = s5[n2] = e6.call(null, t5), i5();
        }
      } else r4 = e6;
      o4.ce && o4.ce._setProp(n2, r4);
    }
    i4[0] && (s4 && !e5 ? r4 = false : !i4[1] || "" !== r4 && r4 !== d(n2) || (r4 = true));
  }
  return r4;
}
function normalizePropsOptions(e4, t5, n2 = false) {
  const r4 = n2 ? en2 : t5.propsCache, o4 = r4.get(e4);
  if (o4) return o4;
  const s4 = e4.props, i4 = {}, a6 = [];
  let l3 = false;
  if (!isFunction(e4)) {
    const extendProps = /* @__PURE__ */ __name((e5) => {
      l3 = true;
      const [n3, r5] = normalizePropsOptions(e5, t5, true);
      n(i4, n3), r5 && a6.push(...r5);
    }, "extendProps");
    !n2 && t5.mixins.length && t5.mixins.forEach(extendProps), e4.extends && extendProps(e4.extends), e4.mixins && e4.mixins.forEach(extendProps);
  }
  if (!s4 && !l3) return isObject(e4) && r4.set(e4, a), a;
  if (i(s4)) for (let e5 = 0; e5 < s4.length; e5++) {
    const t6 = p(s4[e5]);
    validatePropName(t6) && (i4[t6] = t);
  }
  else if (s4) for (const e5 in s4) {
    const t6 = p(e5);
    if (validatePropName(t6)) {
      const n3 = s4[e5], r5 = i4[t6] = i(n3) || isFunction(n3) ? { type: n3 } : n({}, n3), o5 = r5.type;
      let l4 = false, c5 = true;
      if (i(o5)) for (let e6 = 0; e6 < o5.length; ++e6) {
        const t7 = o5[e6], n4 = isFunction(t7) && t7.name;
        if ("Boolean" === n4) {
          l4 = true;
          break;
        }
        "String" === n4 && (c5 = false);
      }
      else l4 = isFunction(o5) && "Boolean" === o5.name;
      r5[0] = l4, r5[1] = c5, (l4 || hasOwn(r5, "default")) && a6.push(t6);
    }
  }
  const c4 = [i4, a6];
  return isObject(e4) && r4.set(e4, c4), c4;
}
function validatePropName(e4) {
  return "$" !== e4[0] && !s(e4);
}
function createRenderer(e4) {
  return baseCreateRenderer(e4);
}
function createHydrationRenderer(e4) {
  return baseCreateRenderer(e4, createHydrationFunctions);
}
function baseCreateRenderer(e4, t5) {
  getGlobalThis().__VUE__ = true;
  const { insert: n2, remove: r4, patchProp: o4, createElement: s4, createText: i4, createComment: a6, setText: l3, setElementText: c4, parentNode: u3, nextSibling: p3, setScopeId: d3 = NOOP, insertStaticContent: f3 } = e4, patch = /* @__PURE__ */ __name((e5, t6, n3, r5 = null, o5 = null, s5 = null, i5 = void 0, a7 = null, l4 = !!t6.dynamicChildren) => {
    if (e5 === t6) return;
    e5 && !isSameVNodeType(e5, t6) && (r5 = getNextHostNode(e5), unmount(e5, o5, s5, true), e5 = null), -2 === t6.patchFlag && (l4 = false, t6.dynamicChildren = null);
    const { type: c5, ref: u4, shapeFlag: p4 } = t6;
    switch (c5) {
      case sn2:
        processText(e5, t6, n3, r5);
        break;
      case an2:
        processCommentNode(e5, t6, n3, r5);
        break;
      case ln2:
        null == e5 && mountStaticNode(t6, n3, r5, i5);
        break;
      case on3:
        processFragment(e5, t6, n3, r5, o5, s5, i5, a7, l4);
        break;
      default:
        1 & p4 ? processElement(e5, t6, n3, r5, o5, s5, i5, a7, l4) : 6 & p4 ? processComponent(e5, t6, n3, r5, o5, s5, i5, a7, l4) : (64 & p4 || 128 & p4) && c5.process(e5, t6, n3, r5, o5, s5, i5, a7, l4, y4);
    }
    null != u4 && o5 ? setRef(u4, e5 && e5.ref, s5, t6 || e5, !t6) : null == u4 && e5 && null != e5.ref && setRef(e5.ref, null, s5, e5, true);
  }, "patch"), processText = /* @__PURE__ */ __name((e5, t6, r5, o5) => {
    if (null == e5) n2(t6.el = i4(t6.children), r5, o5);
    else {
      const n3 = t6.el = e5.el;
      t6.children !== e5.children && l3(n3, t6.children);
    }
  }, "processText"), processCommentNode = /* @__PURE__ */ __name((e5, t6, r5, o5) => {
    null == e5 ? n2(t6.el = a6(t6.children || ""), r5, o5) : t6.el = e5.el;
  }, "processCommentNode"), mountStaticNode = /* @__PURE__ */ __name((e5, t6, n3, r5) => {
    [e5.el, e5.anchor] = f3(e5.children, t6, n3, r5, e5.el, e5.anchor);
  }, "mountStaticNode"), processElement = /* @__PURE__ */ __name((e5, t6, n3, r5, o5, s5, i5, a7, l4) => {
    if ("svg" === t6.type ? i5 = "svg" : "math" === t6.type && (i5 = "mathml"), null == e5) mountElement(t6, n3, r5, o5, s5, i5, a7, l4);
    else {
      const n4 = e5.el && e5.el._isVueCE ? e5.el : null;
      try {
        n4 && n4._beginPatch(), patchElement(e5, t6, o5, s5, i5, a7, l4);
      } finally {
        n4 && n4._endPatch();
      }
    }
  }, "processElement"), mountElement = /* @__PURE__ */ __name((e5, t6, r5, i5, a7, l4, u4, p4) => {
    let d4, f4;
    const { props: g4, shapeFlag: m4, transition: y5, dirs: v4 } = e5;
    if (d4 = e5.el = s4(e5.type, l4, g4 && g4.is, g4), 8 & m4 ? c4(d4, e5.children) : 16 & m4 && mountChildren(e5.children, d4, null, i5, a7, resolveChildrenNamespace(e5, l4), u4, p4), v4 && invokeDirectiveHook(e5, null, i5, "created"), setScopeId(d4, e5, e5.scopeId, u4, i5), g4) {
      for (const e6 in g4) "value" === e6 || s(e6) || o4(d4, e6, null, g4[e6], l4, i5);
      "value" in g4 && o4(d4, "value", null, g4.value, l4), (f4 = g4.onVnodeBeforeMount) && invokeVNodeHook(f4, i5, e5);
    }
    v4 && invokeDirectiveHook(e5, null, i5, "beforeMount");
    const _4 = needTransition(a7, y5);
    _4 && y5.beforeEnter(d4), n2(d4, t6, r5), ((f4 = g4 && g4.onVnodeMounted) || _4 || v4) && tn2(() => {
      f4 && invokeVNodeHook(f4, i5, e5), _4 && y5.enter(d4), v4 && invokeDirectiveHook(e5, null, i5, "mounted");
    }, a7);
  }, "mountElement"), setScopeId = /* @__PURE__ */ __name((e5, t6, n3, r5, o5) => {
    if (n3 && d3(e5, n3), r5) for (let t7 = 0; t7 < r5.length; t7++) d3(e5, r5[t7]);
    if (o5) {
      let n4 = o5.subTree;
      if (t6 === n4 || isSuspense(n4.type) && (n4.ssContent === t6 || n4.ssFallback === t6)) {
        const t7 = o5.vnode;
        setScopeId(e5, t7, t7.scopeId, t7.slotScopeIds, o5.parent);
      }
    }
  }, "setScopeId"), mountChildren = /* @__PURE__ */ __name((e5, t6, n3, r5, o5, s5, i5, a7, l4 = 0) => {
    for (let c5 = l4; c5 < e5.length; c5++) {
      const l5 = e5[c5] = a7 ? cloneIfMounted(e5[c5]) : normalizeVNode$1(e5[c5]);
      patch(null, l5, t6, n3, r5, o5, s5, i5, a7);
    }
  }, "mountChildren"), patchElement = /* @__PURE__ */ __name((e5, t6, n3, r5, s5, i5, a7) => {
    const l4 = t6.el = e5.el;
    let { patchFlag: u4, dynamicChildren: p4, dirs: d4 } = t6;
    u4 |= 16 & e5.patchFlag;
    const f4 = e5.props || t, m4 = t6.props || t;
    let y5;
    if (n3 && toggleRecurse(n3, false), (y5 = m4.onVnodeBeforeUpdate) && invokeVNodeHook(y5, n3, t6, e5), d4 && invokeDirectiveHook(t6, e5, n3, "beforeUpdate"), n3 && toggleRecurse(n3, true), (f4.innerHTML && null == m4.innerHTML || f4.textContent && null == m4.textContent) && c4(l4, ""), p4 ? patchBlockChildren(e5.dynamicChildren, p4, l4, n3, r5, resolveChildrenNamespace(t6, s5), i5) : a7 || patchChildren(e5, t6, l4, null, n3, r5, resolveChildrenNamespace(t6, s5), i5, false), u4 > 0) {
      if (16 & u4) patchProps(l4, f4, m4, n3, s5);
      else if (2 & u4 && f4.class !== m4.class && o4(l4, "class", null, m4.class, s5), 4 & u4 && o4(l4, "style", f4.style, m4.style, s5), 8 & u4) {
        const e6 = t6.dynamicProps;
        for (let t7 = 0; t7 < e6.length; t7++) {
          const r6 = e6[t7], i6 = f4[r6], a8 = m4[r6];
          a8 === i6 && "value" !== r6 || o4(l4, r6, i6, a8, s5, n3);
        }
      }
      1 & u4 && e5.children !== t6.children && c4(l4, t6.children);
    } else a7 || null != p4 || patchProps(l4, f4, m4, n3, s5);
    ((y5 = m4.onVnodeUpdated) || d4) && tn2(() => {
      y5 && invokeVNodeHook(y5, n3, t6, e5), d4 && invokeDirectiveHook(t6, e5, n3, "updated");
    }, r5);
  }, "patchElement"), patchBlockChildren = /* @__PURE__ */ __name((e5, t6, n3, r5, o5, s5, i5) => {
    for (let a7 = 0; a7 < t6.length; a7++) {
      const l4 = e5[a7], c5 = t6[a7], p4 = l4.el && (l4.type === on3 || !isSameVNodeType(l4, c5) || 198 & l4.shapeFlag) ? u3(l4.el) : n3;
      patch(l4, c5, p4, null, r5, o5, s5, i5, true);
    }
  }, "patchBlockChildren"), patchProps = /* @__PURE__ */ __name((e5, t6, n3, r5, s5) => {
    if (t6 !== n3) {
      if (t6 !== t) for (const i5 in t6) s(i5) || i5 in n3 || o4(e5, i5, t6[i5], null, s5, r5);
      for (const i5 in n3) {
        if (s(i5)) continue;
        const a7 = n3[i5], l4 = t6[i5];
        a7 !== l4 && "value" !== i5 && o4(e5, i5, l4, a7, s5, r5);
      }
      "value" in n3 && o4(e5, "value", t6.value, n3.value, s5);
    }
  }, "patchProps"), processFragment = /* @__PURE__ */ __name((e5, t6, r5, o5, s5, a7, l4, c5, u4) => {
    const p4 = t6.el = e5 ? e5.el : i4(""), d4 = t6.anchor = e5 ? e5.anchor : i4("");
    let { patchFlag: f4, dynamicChildren: g4, slotScopeIds: m4 } = t6;
    m4 && (c5 = c5 ? c5.concat(m4) : m4), null == e5 ? (n2(p4, r5, o5), n2(d4, r5, o5), mountChildren(t6.children || [], r5, d4, s5, a7, l4, c5, u4)) : f4 > 0 && 64 & f4 && g4 && e5.dynamicChildren ? (patchBlockChildren(e5.dynamicChildren, g4, r5, s5, a7, l4, c5), (null != t6.key || s5 && t6 === s5.subTree) && traverseStaticChildren(e5, t6, true)) : patchChildren(e5, t6, r5, d4, s5, a7, l4, c5, u4);
  }, "processFragment"), processComponent = /* @__PURE__ */ __name((e5, t6, n3, r5, o5, s5, i5, a7, l4) => {
    t6.slotScopeIds = a7, null == e5 ? 512 & t6.shapeFlag ? o5.ctx.activate(t6, n3, r5, i5, l4) : mountComponent(t6, n3, r5, o5, s5, i5, l4) : updateComponent(e5, t6, l4);
  }, "processComponent"), mountComponent = /* @__PURE__ */ __name((e5, t6, n3, r5, o5, s5, i5) => {
    const a7 = e5.component = createComponentInstance$1(e5, r5, o5);
    if (isKeepAlive(e5) && (a7.ctx.renderer = y4), setupComponent$1(a7, false, i5), a7.asyncDep) {
      if (o5 && o5.registerDep(a7, setupRenderEffect, i5), !e5.el) {
        const r6 = a7.subTree = createVNode(an2);
        processCommentNode(null, r6, t6, n3), e5.placeholder = r6.el;
      }
    } else setupRenderEffect(a7, e5, t6, n3, o5, s5, i5);
  }, "mountComponent"), updateComponent = /* @__PURE__ */ __name((e5, t6, n3) => {
    const r5 = t6.component = e5.component;
    if ((function(e6, t7, n4) {
      const { props: r6, children: o5, component: s5 } = e6, { props: i5, children: a7, patchFlag: l4 } = t7, c5 = s5.emitsOptions;
      if (t7.dirs || t7.transition) return true;
      if (!(n4 && l4 >= 0)) return !(!o5 && !a7 || a7 && a7.$stable) || r6 !== i5 && (r6 ? !i5 || hasPropsChanged(r6, i5, c5) : !!i5);
      if (1024 & l4) return true;
      if (16 & l4) return r6 ? hasPropsChanged(r6, i5, c5) : !!i5;
      if (8 & l4) {
        const e7 = t7.dynamicProps;
        for (let t8 = 0; t8 < e7.length; t8++) {
          const n5 = e7[t8];
          if (i5[n5] !== r6[n5] && !isEmitListener(c5, n5)) return true;
        }
      }
      return false;
    })(e5, t6, n3)) {
      if (r5.asyncDep && !r5.asyncResolved) return void updateComponentPreRender(r5, t6, n3);
      r5.next = t6, r5.update();
    } else t6.el = e5.el, r5.vnode = t6;
  }, "updateComponent"), setupRenderEffect = /* @__PURE__ */ __name((e5, t6, n3, r5, o5, s5, i5) => {
    const componentUpdateFn = /* @__PURE__ */ __name(() => {
      if (e5.isMounted) {
        let { next: t7, bu: n4, u: r6, parent: a8, vnode: l5 } = e5;
        {
          const n5 = locateNonHydratedAsyncRoot(e5);
          if (n5) return t7 && (t7.el = l5.el, updateComponentPreRender(e5, t7, i5)), void n5.asyncDep.then(() => {
            e5.isUnmounted || componentUpdateFn();
          });
        }
        let c6, p4 = t7;
        toggleRecurse(e5, false), t7 ? (t7.el = l5.el, updateComponentPreRender(e5, t7, i5)) : t7 = l5, n4 && invokeArrayFns(n4), (c6 = t7.props && t7.props.onVnodeBeforeUpdate) && invokeVNodeHook(c6, a8, t7, l5), toggleRecurse(e5, true);
        const d4 = renderComponentRoot$1(e5), f4 = e5.subTree;
        e5.subTree = d4, patch(f4, d4, u3(f4.el), getNextHostNode(f4), e5, o5, s5), t7.el = d4.el, null === p4 && updateHOCHostEl(e5, d4.el), r6 && tn2(r6, o5), (c6 = t7.props && t7.props.onVnodeUpdated) && tn2(() => invokeVNodeHook(c6, a8, t7, l5), o5);
      } else {
        let i6;
        const { el: a8, props: l5 } = t6, { bm: c6, m: u4, parent: p4, root: d4, type: f4 } = e5, g4 = isAsyncWrapper(t6);
        if (toggleRecurse(e5, false), c6 && invokeArrayFns(c6), !g4 && (i6 = l5 && l5.onVnodeBeforeMount) && invokeVNodeHook(i6, p4, t6), toggleRecurse(e5, true), a8 && _3) {
          const hydrateSubTree = /* @__PURE__ */ __name(() => {
            e5.subTree = renderComponentRoot$1(e5), _3(a8, e5.subTree, e5, o5, null);
          }, "hydrateSubTree");
          g4 && f4.__asyncHydrate ? f4.__asyncHydrate(a8, e5, hydrateSubTree) : hydrateSubTree();
        } else {
          d4.ce && false !== d4.ce._def.shadowRoot && d4.ce._injectChildStyle(f4);
          const i7 = e5.subTree = renderComponentRoot$1(e5);
          patch(null, i7, n3, r5, e5, o5, s5), t6.el = i7.el;
        }
        if (u4 && tn2(u4, o5), !g4 && (i6 = l5 && l5.onVnodeMounted)) {
          const e6 = t6;
          tn2(() => invokeVNodeHook(i6, p4, e6), o5);
        }
        (256 & t6.shapeFlag || p4 && isAsyncWrapper(p4.vnode) && 256 & p4.vnode.shapeFlag) && e5.a && tn2(e5.a, o5), e5.isMounted = true, t6 = n3 = r5 = null;
      }
    }, "componentUpdateFn");
    e5.scope.on();
    const a7 = e5.effect = new ReactiveEffect(componentUpdateFn);
    e5.scope.off();
    const l4 = e5.update = a7.run.bind(a7), c5 = e5.job = a7.runIfDirty.bind(a7);
    c5.i = e5, c5.id = e5.uid, a7.scheduler = () => queueJob(c5), toggleRecurse(e5, true), l4();
  }, "setupRenderEffect"), updateComponentPreRender = /* @__PURE__ */ __name((e5, t6, n3) => {
    t6.component = e5;
    const r5 = e5.vnode.props;
    e5.vnode = t6, e5.next = null, (function(e6, t7, n4, r6) {
      const { props: o5, attrs: s5, vnode: { patchFlag: i5 } } = e6, a7 = toRaw(o5), [l4] = e6.propsOptions;
      let c5 = false;
      if (!(r6 || i5 > 0) || 16 & i5) {
        let r7;
        setFullProps(e6, t7, o5, s5) && (c5 = true);
        for (const s6 in a7) t7 && (hasOwn(t7, s6) || (r7 = d(s6)) !== s6 && hasOwn(t7, r7)) || (l4 ? !n4 || void 0 === n4[s6] && void 0 === n4[r7] || (o5[s6] = resolvePropValue(l4, a7, s6, void 0, e6, true)) : delete o5[s6]);
        if (s5 !== a7) for (const e7 in s5) t7 && hasOwn(t7, e7) || (delete s5[e7], c5 = true);
      } else if (8 & i5) {
        const n5 = e6.vnode.dynamicProps;
        for (let r7 = 0; r7 < n5.length; r7++) {
          let i6 = n5[r7];
          if (isEmitListener(e6.emitsOptions, i6)) continue;
          const u4 = t7[i6];
          if (l4) if (hasOwn(s5, i6)) u4 !== s5[i6] && (s5[i6] = u4, c5 = true);
          else {
            const t8 = p(i6);
            o5[t8] = resolvePropValue(l4, a7, t8, u4, e6, false);
          }
          else u4 !== s5[i6] && (s5[i6] = u4, c5 = true);
        }
      }
      c5 && trigger(e6.attrs, "set", "");
    })(e5, t6.props, r5, n3), ((e6, t7, n4) => {
      const { vnode: r6, slots: o5 } = e6;
      let s5 = true, i5 = t;
      if (32 & r6.shapeFlag) {
        const e7 = t7._;
        e7 ? n4 && 1 === e7 ? s5 = false : assignSlots(o5, t7, n4) : (s5 = !t7.$stable, normalizeObjectSlots(t7, o5)), i5 = t7;
      } else t7 && (normalizeVNodeSlots(e6, t7), i5 = { default: 1 });
      if (s5) for (const e7 in o5) isInternalKey(e7) || null != i5[e7] || delete o5[e7];
    })(e5, t6.children, n3), pauseTracking(), flushPreFlushCbs(e5), resetTracking();
  }, "updateComponentPreRender"), patchChildren = /* @__PURE__ */ __name((e5, t6, n3, r5, o5, s5, i5, a7, l4 = false) => {
    const u4 = e5 && e5.children, p4 = e5 ? e5.shapeFlag : 0, d4 = t6.children, { patchFlag: f4, shapeFlag: g4 } = t6;
    if (f4 > 0) {
      if (128 & f4) return void patchKeyedChildren(u4, d4, n3, r5, o5, s5, i5, a7, l4);
      if (256 & f4) return void patchUnkeyedChildren(u4, d4, n3, r5, o5, s5, i5, a7, l4);
    }
    8 & g4 ? (16 & p4 && unmountChildren(u4, o5, s5), d4 !== u4 && c4(n3, d4)) : 16 & p4 ? 16 & g4 ? patchKeyedChildren(u4, d4, n3, r5, o5, s5, i5, a7, l4) : unmountChildren(u4, o5, s5, true) : (8 & p4 && c4(n3, ""), 16 & g4 && mountChildren(d4, n3, r5, o5, s5, i5, a7, l4));
  }, "patchChildren"), patchUnkeyedChildren = /* @__PURE__ */ __name((e5, t6, n3, r5, o5, s5, i5, a7, l4) => {
    t6 = t6 || a;
    const c5 = (e5 = e5 || a).length, u4 = t6.length, p4 = Math.min(c5, u4);
    let d4;
    for (d4 = 0; d4 < p4; d4++) {
      const r6 = t6[d4] = l4 ? cloneIfMounted(t6[d4]) : normalizeVNode$1(t6[d4]);
      patch(e5[d4], r6, n3, null, o5, s5, i5, a7, l4);
    }
    c5 > u4 ? unmountChildren(e5, o5, s5, true, false, p4) : mountChildren(t6, n3, r5, o5, s5, i5, a7, l4, p4);
  }, "patchUnkeyedChildren"), patchKeyedChildren = /* @__PURE__ */ __name((e5, t6, n3, r5, o5, s5, i5, a7, l4) => {
    let c5 = 0;
    const u4 = t6.length;
    let p4 = e5.length - 1, d4 = u4 - 1;
    for (; c5 <= p4 && c5 <= d4; ) {
      const r6 = e5[c5], u5 = t6[c5] = l4 ? cloneIfMounted(t6[c5]) : normalizeVNode$1(t6[c5]);
      if (!isSameVNodeType(r6, u5)) break;
      patch(r6, u5, n3, null, o5, s5, i5, a7, l4), c5++;
    }
    for (; c5 <= p4 && c5 <= d4; ) {
      const r6 = e5[p4], c6 = t6[d4] = l4 ? cloneIfMounted(t6[d4]) : normalizeVNode$1(t6[d4]);
      if (!isSameVNodeType(r6, c6)) break;
      patch(r6, c6, n3, null, o5, s5, i5, a7, l4), p4--, d4--;
    }
    if (c5 > p4) {
      if (c5 <= d4) {
        const e6 = d4 + 1, p5 = e6 < u4 ? t6[e6].el : r5;
        for (; c5 <= d4; ) patch(null, t6[c5] = l4 ? cloneIfMounted(t6[c5]) : normalizeVNode$1(t6[c5]), n3, p5, o5, s5, i5, a7, l4), c5++;
      }
    } else if (c5 > d4) for (; c5 <= p4; ) unmount(e5[c5], o5, s5, true), c5++;
    else {
      const f4 = c5, g4 = c5, m4 = /* @__PURE__ */ new Map();
      for (c5 = g4; c5 <= d4; c5++) {
        const e6 = t6[c5] = l4 ? cloneIfMounted(t6[c5]) : normalizeVNode$1(t6[c5]);
        null != e6.key && m4.set(e6.key, c5);
      }
      let y5, v4 = 0;
      const _4 = d4 - g4 + 1;
      let b4 = false, C3 = 0;
      const k3 = new Array(_4);
      for (c5 = 0; c5 < _4; c5++) k3[c5] = 0;
      for (c5 = f4; c5 <= p4; c5++) {
        const r6 = e5[c5];
        if (v4 >= _4) {
          unmount(r6, o5, s5, true);
          continue;
        }
        let u5;
        if (null != r6.key) u5 = m4.get(r6.key);
        else for (y5 = g4; y5 <= d4; y5++) if (0 === k3[y5 - g4] && isSameVNodeType(r6, t6[y5])) {
          u5 = y5;
          break;
        }
        void 0 === u5 ? unmount(r6, o5, s5, true) : (k3[u5 - g4] = c5 + 1, u5 >= C3 ? C3 = u5 : b4 = true, patch(r6, t6[u5], n3, null, o5, s5, i5, a7, l4), v4++);
      }
      const S3 = b4 ? (function(e6) {
        const t7 = e6.slice(), n4 = [0];
        let r6, o6, s6, i6, a8;
        const l5 = e6.length;
        for (r6 = 0; r6 < l5; r6++) {
          const l6 = e6[r6];
          if (0 !== l6) {
            if (o6 = n4[n4.length - 1], e6[o6] < l6) {
              t7[r6] = o6, n4.push(r6);
              continue;
            }
            for (s6 = 0, i6 = n4.length - 1; s6 < i6; ) a8 = s6 + i6 >> 1, e6[n4[a8]] < l6 ? s6 = a8 + 1 : i6 = a8;
            l6 < e6[n4[s6]] && (s6 > 0 && (t7[r6] = n4[s6 - 1]), n4[s6] = r6);
          }
        }
        s6 = n4.length, i6 = n4[s6 - 1];
        for (; s6-- > 0; ) n4[s6] = i6, i6 = t7[i6];
        return n4;
      })(k3) : a;
      for (y5 = S3.length - 1, c5 = _4 - 1; c5 >= 0; c5--) {
        const e6 = g4 + c5, p5 = t6[e6], d5 = t6[e6 + 1], f5 = e6 + 1 < u4 ? d5.el || d5.placeholder : r5;
        0 === k3[c5] ? patch(null, p5, n3, f5, o5, s5, i5, a7, l4) : b4 && (y5 < 0 || c5 !== S3[y5] ? move(p5, n3, f5, 2) : y5--);
      }
    }
  }, "patchKeyedChildren"), move = /* @__PURE__ */ __name((e5, t6, o5, s5, i5 = null) => {
    const { el: a7, type: l4, transition: c5, children: u4, shapeFlag: d4 } = e5;
    if (6 & d4) return void move(e5.component.subTree, t6, o5, s5);
    if (128 & d4) return void e5.suspense.move(t6, o5, s5);
    if (64 & d4) return void l4.move(e5, t6, o5, y4);
    if (l4 === on3) {
      n2(a7, t6, o5);
      for (let e6 = 0; e6 < u4.length; e6++) move(u4[e6], t6, o5, s5);
      return void n2(e5.anchor, t6, o5);
    }
    if (l4 === ln2) return void (({ el: e6, anchor: t7 }, r5, o6) => {
      let s6;
      for (; e6 && e6 !== t7; ) s6 = p3(e6), n2(e6, r5, o6), e6 = s6;
      n2(t7, r5, o6);
    })(e5, t6, o5);
    if (2 !== s5 && 1 & d4 && c5) if (0 === s5) c5.beforeEnter(a7), n2(a7, t6, o5), tn2(() => c5.enter(a7), i5);
    else {
      const { leave: s6, delayLeave: i6, afterLeave: l5 } = c5, remove22 = /* @__PURE__ */ __name(() => {
        e5.ctx.isUnmounted ? r4(a7) : n2(a7, t6, o5);
      }, "remove2"), performLeave = /* @__PURE__ */ __name(() => {
        a7._isLeaving && a7[Ct2](true), s6(a7, () => {
          remove22(), l5 && l5();
        });
      }, "performLeave");
      i6 ? i6(a7, remove22, performLeave) : performLeave();
    }
    else n2(a7, t6, o5);
  }, "move"), unmount = /* @__PURE__ */ __name((e5, t6, n3, r5 = false, o5 = false) => {
    const { type: s5, props: i5, ref: a7, children: l4, dynamicChildren: c5, shapeFlag: u4, patchFlag: p4, dirs: d4, cacheIndex: f4 } = e5;
    if (-2 === p4 && (o5 = false), null != a7 && (pauseTracking(), setRef(a7, null, n3, e5, true), resetTracking()), null != f4 && (t6.renderCache[f4] = void 0), 256 & u4) return void t6.ctx.deactivate(e5);
    const g4 = 1 & u4 && d4, m4 = !isAsyncWrapper(e5);
    let v4;
    if (m4 && (v4 = i5 && i5.onVnodeBeforeUnmount) && invokeVNodeHook(v4, t6, e5), 6 & u4) unmountComponent(e5.component, n3, r5);
    else {
      if (128 & u4) return void e5.suspense.unmount(n3, r5);
      g4 && invokeDirectiveHook(e5, null, t6, "beforeUnmount"), 64 & u4 ? e5.type.remove(e5, t6, n3, y4, r5) : c5 && !c5.hasOnce && (s5 !== on3 || p4 > 0 && 64 & p4) ? unmountChildren(c5, t6, n3, false, true) : (s5 === on3 && 384 & p4 || !o5 && 16 & u4) && unmountChildren(l4, t6, n3), r5 && remove2(e5);
    }
    (m4 && (v4 = i5 && i5.onVnodeUnmounted) || g4) && tn2(() => {
      v4 && invokeVNodeHook(v4, t6, e5), g4 && invokeDirectiveHook(e5, null, t6, "unmounted");
    }, n3);
  }, "unmount"), remove2 = /* @__PURE__ */ __name((e5) => {
    const { type: t6, el: n3, anchor: o5, transition: s5 } = e5;
    if (t6 === on3) return void removeFragment(n3, o5);
    if (t6 === ln2) return void (({ el: e6, anchor: t7 }) => {
      let n4;
      for (; e6 && e6 !== t7; ) n4 = p3(e6), r4(e6), e6 = n4;
      r4(t7);
    })(e5);
    const performRemove = /* @__PURE__ */ __name(() => {
      r4(n3), s5 && !s5.persisted && s5.afterLeave && s5.afterLeave();
    }, "performRemove");
    if (1 & e5.shapeFlag && s5 && !s5.persisted) {
      const { leave: t7, delayLeave: r5 } = s5, performLeave = /* @__PURE__ */ __name(() => t7(n3, performRemove), "performLeave");
      r5 ? r5(e5.el, performRemove, performLeave) : performLeave();
    } else performRemove();
  }, "remove"), removeFragment = /* @__PURE__ */ __name((e5, t6) => {
    let n3;
    for (; e5 !== t6; ) n3 = p3(e5), r4(e5), e5 = n3;
    r4(t6);
  }, "removeFragment"), unmountComponent = /* @__PURE__ */ __name((e5, t6, n3) => {
    const { bum: r5, scope: o5, job: s5, subTree: i5, um: a7, m: l4, a: c5 } = e5;
    invalidateMount(l4), invalidateMount(c5), r5 && invokeArrayFns(r5), o5.stop(), s5 && (s5.flags |= 8, unmount(i5, e5, t6, n3)), a7 && tn2(a7, t6), tn2(() => {
      e5.isUnmounted = true;
    }, t6);
  }, "unmountComponent"), unmountChildren = /* @__PURE__ */ __name((e5, t6, n3, r5 = false, o5 = false, s5 = 0) => {
    for (let i5 = s5; i5 < e5.length; i5++) unmount(e5[i5], t6, n3, r5, o5);
  }, "unmountChildren"), getNextHostNode = /* @__PURE__ */ __name((e5) => {
    if (6 & e5.shapeFlag) return getNextHostNode(e5.component.subTree);
    if (128 & e5.shapeFlag) return e5.suspense.next();
    const t6 = p3(e5.anchor || e5.el), n3 = t6 && t6[vt2];
    return n3 ? p3(n3) : t6;
  }, "getNextHostNode");
  let m3 = false;
  const render2 = /* @__PURE__ */ __name((e5, t6, n3) => {
    null == e5 ? t6._vnode && unmount(t6._vnode, null, null, true) : patch(t6._vnode || null, e5, t6, null, null, null, n3), t6._vnode = e5, m3 || (m3 = true, flushPreFlushCbs(), flushPostFlushCbs(), m3 = false);
  }, "render"), y4 = { p: patch, um: unmount, m: move, r: remove2, mt: mountComponent, mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, n: getNextHostNode, o: e4 };
  let v3, _3;
  return t5 && ([v3, _3] = t5(y4)), { render: render2, hydrate: v3, createApp: createAppAPI(render2, v3) };
}
function resolveChildrenNamespace({ type: e4, props: t5 }, n2) {
  return "svg" === n2 && "foreignObject" === e4 || "mathml" === n2 && "annotation-xml" === e4 && t5 && t5.encoding && t5.encoding.includes("html") ? void 0 : n2;
}
function toggleRecurse({ effect: e4, job: t5 }, n2) {
  n2 ? (e4.flags |= 32, t5.flags |= 4) : (e4.flags &= -33, t5.flags &= -5);
}
function needTransition(e4, t5) {
  return (!e4 || e4 && !e4.pendingBranch) && t5 && !t5.persisted;
}
function traverseStaticChildren(e4, t5, n2 = false) {
  const r4 = e4.children, o4 = t5.children;
  if (i(r4) && i(o4)) for (let e5 = 0; e5 < r4.length; e5++) {
    const t6 = r4[e5];
    let s4 = o4[e5];
    1 & s4.shapeFlag && !s4.dynamicChildren && ((s4.patchFlag <= 0 || 32 === s4.patchFlag) && (s4 = o4[e5] = cloneIfMounted(o4[e5]), s4.el = t6.el), n2 || -2 === s4.patchFlag || traverseStaticChildren(t6, s4)), s4.type === sn2 && -1 !== s4.patchFlag && (s4.el = t6.el), s4.type !== an2 || s4.el || (s4.el = t6.el);
  }
}
function locateNonHydratedAsyncRoot(e4) {
  const t5 = e4.subTree.component;
  if (t5) return t5.asyncDep && !t5.asyncResolved ? t5 : locateNonHydratedAsyncRoot(t5);
}
function invalidateMount(e4) {
  if (e4) for (let t5 = 0; t5 < e4.length; t5++) e4[t5].flags |= 8;
}
function triggerEvent(e4, t5) {
  const n2 = e4.props && e4.props[t5];
  isFunction(n2) && n2();
}
function createSuspenseBoundary(e4, t5, n2, r4, o4, s4, i4, a6, l3, c4, u3 = false) {
  const { p: p3, m: d3, um: f3, n: g4, o: { parentNode: m3, remove: y4 } } = c4;
  let v3;
  const _3 = (function(e5) {
    const t6 = e5.props && e5.props.suspensible;
    return null != t6 && false !== t6;
  })(e4);
  _3 && t5 && t5.pendingBranch && (v3 = t5.pendingId, t5.deps++);
  const b4 = e4.props ? toNumber(e4.props.timeout) : void 0, C3 = s4, k3 = { vnode: e4, parent: t5, parentComponent: n2, namespace: i4, container: r4, hiddenContainer: o4, deps: 0, pendingId: nn2++, timeout: "number" == typeof b4 ? b4 : -1, activeBranch: null, pendingBranch: null, isInFallback: !u3, isHydrating: u3, isUnmounted: false, effects: [], resolve(e5 = false, n3 = false) {
    const { vnode: r5, activeBranch: o5, pendingBranch: i5, pendingId: a7, effects: l4, parentComponent: c5, container: u4, isInFallback: p4 } = k3;
    let y5 = false;
    k3.isHydrating ? k3.isHydrating = false : e5 || (y5 = o5 && i5.transition && "out-in" === i5.transition.mode, y5 && (o5.transition.afterLeave = () => {
      a7 === k3.pendingId && (d3(i5, u4, s4 === C3 ? g4(o5) : s4, 0), queuePostFlushCb(l4), p4 && r5.ssFallback && (r5.ssFallback.el = null));
    }), o5 && (m3(o5.el) === u4 && (s4 = g4(o5)), f3(o5, c5, k3, true), !y5 && p4 && r5.ssFallback && tn2(() => r5.ssFallback.el = null, k3)), y5 || d3(i5, u4, s4, 0)), setActiveBranch(k3, i5), k3.pendingBranch = null, k3.isInFallback = false;
    let b5 = k3.parent, S3 = false;
    for (; b5; ) {
      if (b5.pendingBranch) {
        b5.effects.push(...l4), S3 = true;
        break;
      }
      b5 = b5.parent;
    }
    S3 || y5 || queuePostFlushCb(l4), k3.effects = [], _3 && t5 && t5.pendingBranch && v3 === t5.pendingId && (t5.deps--, 0 !== t5.deps || n3 || t5.resolve()), triggerEvent(r5, "onResolve");
  }, fallback(e5) {
    if (!k3.pendingBranch) return;
    const { vnode: t6, activeBranch: n3, parentComponent: r5, container: o5, namespace: s5 } = k3;
    triggerEvent(t6, "onFallback");
    const i5 = g4(n3), mountFallback = /* @__PURE__ */ __name(() => {
      k3.isInFallback && (p3(null, e5, o5, i5, r5, null, s5, a6, l3), setActiveBranch(k3, e5));
    }, "mountFallback"), c5 = e5.transition && "out-in" === e5.transition.mode;
    c5 && (n3.transition.afterLeave = mountFallback), k3.isInFallback = true, f3(n3, r5, null, true), c5 || mountFallback();
  }, move(e5, t6, n3) {
    k3.activeBranch && d3(k3.activeBranch, e5, t6, n3), k3.container = e5;
  }, next: /* @__PURE__ */ __name(() => k3.activeBranch && g4(k3.activeBranch), "next"), registerDep(e5, t6, n3) {
    const r5 = !!k3.pendingBranch;
    r5 && k3.deps++;
    const o5 = e5.vnode.el;
    e5.asyncDep.catch((t7) => {
      handleError(t7, e5, 0);
    }).then((s5) => {
      if (e5.isUnmounted || k3.isUnmounted || k3.pendingId !== e5.suspenseId) return;
      e5.asyncResolved = true;
      const { vnode: a7 } = e5;
      handleSetupResult(e5, s5, false), o5 && (a7.el = o5);
      const l4 = !o5 && e5.subTree.el;
      t6(e5, a7, m3(o5 || e5.subTree.el), o5 ? null : g4(e5.subTree), k3, i4, n3), l4 && (a7.placeholder = null, y4(l4)), updateHOCHostEl(e5, a7.el), r5 && 0 === --k3.deps && k3.resolve();
    });
  }, unmount(e5, t6) {
    k3.isUnmounted = true, k3.activeBranch && f3(k3.activeBranch, n2, e5, t6), k3.pendingBranch && f3(k3.pendingBranch, n2, e5, t6);
  } };
  return k3;
}
function normalizeSuspenseSlot(e4) {
  let t5;
  if (isFunction(e4)) {
    const n2 = pn2 && e4._c;
    n2 && (e4._d = false, openBlock()), e4 = e4(), n2 && (e4._d = true, t5 = un2, closeBlock());
  }
  if (i(e4)) {
    const t6 = (function(e5) {
      let t7;
      for (let n2 = 0; n2 < e5.length; n2++) {
        const r4 = e5[n2];
        if (!isVNode$2(r4)) return;
        if (r4.type !== an2 || "v-if" === r4.children) {
          if (t7) return;
          t7 = r4;
        }
      }
      return t7;
    })(e4);
    e4 = t6;
  }
  return e4 = normalizeVNode$1(e4), t5 && !e4.dynamicChildren && (e4.dynamicChildren = t5.filter((t6) => t6 !== e4)), e4;
}
function queueEffectWithSuspense(e4, t5) {
  t5 && t5.pendingBranch ? i(e4) ? t5.effects.push(...e4) : t5.effects.push(e4) : queuePostFlushCb(e4);
}
function setActiveBranch(e4, t5) {
  e4.activeBranch = t5;
  const { vnode: n2, parentComponent: r4 } = e4;
  let o4 = t5.el;
  for (; !o4 && t5.component; ) o4 = (t5 = t5.component.subTree).el;
  n2.el = o4, r4 && r4.subTree === n2 && (r4.vnode.el = o4, updateHOCHostEl(r4, o4));
}
function openBlock(e4 = false) {
  cn2.push(un2 = e4 ? null : []);
}
function closeBlock() {
  cn2.pop(), un2 = cn2[cn2.length - 1] || null;
}
function setBlockTracking(e4, t5 = false) {
  pn2 += e4, e4 < 0 && un2 && t5 && (un2.hasOnce = true);
}
function setupBlock(e4) {
  return e4.dynamicChildren = pn2 > 0 ? un2 || a : null, closeBlock(), pn2 > 0 && un2 && un2.push(e4), e4;
}
function createBlock(e4, t5, n2, r4, o4) {
  return setupBlock(createVNode(e4, t5, n2, r4, o4, true));
}
function isVNode$2(e4) {
  return !!e4 && true === e4.__v_isVNode;
}
function isSameVNodeType(e4, t5) {
  return e4.type === t5.type && e4.key === t5.key;
}
function createBaseVNode(e4, t5 = null, n2 = null, r4 = 0, o4 = null, s4 = e4 === on3 ? 0 : 1, i4 = false, a6 = false) {
  const l3 = { __v_isVNode: true, __v_skip: true, type: e4, props: t5, key: t5 && normalizeKey(t5), ref: t5 && normalizeRef(t5), scopeId: yt2, slotScopeIds: null, children: n2, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s4, patchFlag: r4, dynamicProps: o4, dynamicChildren: null, appContext: null, ctx: mt2 };
  return a6 ? (normalizeChildren(l3, n2), 128 & s4 && e4.normalize(l3)) : n2 && (l3.shapeFlag |= isString(n2) ? 8 : 16), pn2 > 0 && !i4 && un2 && (l3.patchFlag > 0 || 6 & s4) && 32 !== l3.patchFlag && un2.push(l3), l3;
}
function guardReactiveProps(e4) {
  return e4 ? isProxy(e4) || isInternalObject(e4) ? n({}, e4) : e4 : null;
}
function cloneVNode(e4, t5, n2 = false, r4 = false) {
  const { props: o4, ref: s4, patchFlag: i4, children: a6, transition: l3 } = e4, c4 = t5 ? mergeProps(o4 || {}, t5) : o4, u3 = { __v_isVNode: true, __v_skip: true, type: e4.type, props: c4, key: c4 && normalizeKey(c4), ref: t5 && t5.ref ? n2 && s4 ? i(s4) ? s4.concat(normalizeRef(t5)) : [s4, normalizeRef(t5)] : normalizeRef(t5) : s4, scopeId: e4.scopeId, slotScopeIds: e4.slotScopeIds, children: a6, target: e4.target, targetStart: e4.targetStart, targetAnchor: e4.targetAnchor, staticCount: e4.staticCount, shapeFlag: e4.shapeFlag, patchFlag: t5 && e4.type !== on3 ? -1 === i4 ? 16 : 16 | i4 : i4, dynamicProps: e4.dynamicProps, dynamicChildren: e4.dynamicChildren, appContext: e4.appContext, dirs: e4.dirs, transition: l3, component: e4.component, suspense: e4.suspense, ssContent: e4.ssContent && cloneVNode(e4.ssContent), ssFallback: e4.ssFallback && cloneVNode(e4.ssFallback), placeholder: e4.placeholder, el: e4.el, anchor: e4.anchor, ctx: e4.ctx, ce: e4.ce };
  return l3 && r4 && setTransitionHooks(u3, l3.clone(u3)), u3;
}
function createTextVNode(e4 = " ", t5 = 0) {
  return createVNode(sn2, null, e4, t5);
}
function normalizeVNode$1(e4) {
  return null == e4 || "boolean" == typeof e4 ? createVNode(an2) : i(e4) ? createVNode(on3, null, e4.slice()) : isVNode$2(e4) ? cloneIfMounted(e4) : createVNode(sn2, null, String(e4));
}
function cloneIfMounted(e4) {
  return null === e4.el && -1 !== e4.patchFlag || e4.memo ? e4 : cloneVNode(e4);
}
function normalizeChildren(e4, t5) {
  let n2 = 0;
  const { shapeFlag: r4 } = e4;
  if (null == t5) t5 = null;
  else if (i(t5)) n2 = 16;
  else if ("object" == typeof t5) {
    if (65 & r4) {
      const n3 = t5.default;
      return void (n3 && (n3._c && (n3._d = false), normalizeChildren(e4, n3()), n3._c && (n3._d = true)));
    }
    {
      n2 = 32;
      const r5 = t5._;
      r5 || isInternalObject(t5) ? 3 === r5 && mt2 && (1 === mt2.slots._ ? t5._ = 1 : (t5._ = 2, e4.patchFlag |= 1024)) : t5._ctx = mt2;
    }
  } else isFunction(t5) ? (t5 = { default: t5, _ctx: mt2 }, n2 = 32) : (t5 = String(t5), 64 & r4 ? (n2 = 16, t5 = [createTextVNode(t5)]) : n2 = 8);
  e4.children = t5, e4.shapeFlag |= n2;
}
function mergeProps(...e4) {
  const t5 = {};
  for (let n2 = 0; n2 < e4.length; n2++) {
    const r4 = e4[n2];
    for (const e5 in r4) if ("class" === e5) t5.class !== r4.class && (t5.class = normalizeClass([t5.class, r4.class]));
    else if ("style" === e5) t5.style = normalizeStyle([t5.style, r4.style]);
    else if (isOn(e5)) {
      const n3 = t5[e5], o4 = r4[e5];
      !o4 || n3 === o4 || i(n3) && n3.includes(o4) || (t5[e5] = n3 ? [].concat(n3, o4) : o4);
    } else "" !== e5 && (t5[e5] = r4[e5]);
  }
  return t5;
}
function invokeVNodeHook(e4, t5, n2, r4 = null) {
  callWithAsyncErrorHandling(e4, t5, 7, [n2, r4]);
}
function createComponentInstance$1(e4, t5, n2) {
  const r4 = e4.type, o4 = (t5 ? t5.appContext : e4.appContext) || dn2, s4 = { uid: fn++, vnode: e4, type: r4, parent: t5, appContext: o4, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new EffectScope(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t5 ? t5.provides : Object.create(o4.provides), ids: t5 ? t5.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: normalizePropsOptions(r4, o4), emitsOptions: normalizeEmitsOptions(r4, o4), emit: null, emitted: null, propsDefaults: t, inheritAttrs: r4.inheritAttrs, ctx: t, data: t, props: t, attrs: t, slots: t, refs: t, setupState: t, setupContext: null, suspense: n2, suspenseId: n2 ? n2.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return s4.ctx = { _: s4 }, s4.root = t5 ? t5.root : s4, s4.emit = emit2.bind(null, s4), e4.ce && e4.ce(s4), s4;
}
function isStatefulComponent(e4) {
  return 4 & e4.vnode.shapeFlag;
}
function setupComponent$1(e4, t5 = false, n2 = false) {
  t5 && mn2(t5);
  const { props: r4, children: o4 } = e4.vnode, s4 = isStatefulComponent(e4);
  !(function(e5, t6, n3, r5 = false) {
    const o5 = {}, s5 = createInternalObject();
    e5.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(e5, t6, o5, s5);
    for (const t7 in e5.propsOptions[0]) t7 in o5 || (o5[t7] = void 0);
    n3 ? e5.props = r5 ? o5 : shallowReactive(o5) : e5.type.props ? e5.props = o5 : e5.props = s5, e5.attrs = s5;
  })(e4, r4, s4, t5), ((e5, t6, n3) => {
    const r5 = e5.slots = createInternalObject();
    if (32 & e5.vnode.shapeFlag) {
      const e6 = t6._;
      e6 ? (assignSlots(r5, t6, n3), n3 && def(r5, "_", e6, true)) : normalizeObjectSlots(t6, r5);
    } else t6 && normalizeVNodeSlots(e5, t6);
  })(e4, o4, n2 || t5);
  const i4 = s4 ? (function(e5, t6) {
    const n3 = e5.type;
    e5.accessCache = /* @__PURE__ */ Object.create(null), e5.proxy = new Proxy(e5.ctx, zt2);
    const { setup: r5 } = n3;
    if (r5) {
      pauseTracking();
      const n4 = e5.setupContext = r5.length > 1 ? createSetupContext(e5) : null, o5 = setCurrentInstance(e5), s5 = callWithErrorHandling(r5, e5, 0, [e5.props, n4]), i5 = isPromise(s5);
      if (resetTracking(), o5(), !i5 && !e5.sp || isAsyncWrapper(e5) || markAsyncBoundary(e5), i5) {
        if (s5.then(unsetCurrentInstance, unsetCurrentInstance), t6) return s5.then((n5) => {
          handleSetupResult(e5, n5, t6);
        }).catch((t7) => {
          handleError(t7, e5, 0);
        });
        e5.asyncDep = s5;
      } else handleSetupResult(e5, s5, t6);
    } else finishComponentSetup(e5, t6);
  })(e4, t5) : void 0;
  return t5 && mn2(false), i4;
}
function handleSetupResult(e4, t5, n2) {
  isFunction(t5) ? e4.type.__ssrInlineRender ? e4.ssrRender = t5 : e4.render = t5 : isObject(t5) && (e4.setupState = proxyRefs(t5)), finishComponentSetup(e4, n2);
}
function finishComponentSetup(e4, t5, n2) {
  const r4 = e4.type;
  if (!e4.render) {
    if (!t5 && yn && !r4.render) {
      const t6 = r4.template || resolveMergedOptions(e4).template;
      if (t6) {
        const { isCustomElement: n3, compilerOptions: o4 } = e4.appContext.config, { delimiters: s4, compilerOptions: i4 } = r4, a6 = n(n({ isCustomElement: n3, delimiters: s4 }, o4), i4);
        r4.render = yn(t6, a6);
      }
    }
    e4.render = r4.render || NOOP, vn && vn(e4);
  }
  {
    const t6 = setCurrentInstance(e4);
    pauseTracking();
    try {
      applyOptions(e4);
    } finally {
      resetTracking(), t6();
    }
  }
}
function createSetupContext(e4) {
  const expose = /* @__PURE__ */ __name((t5) => {
    e4.exposed = t5 || {};
  }, "expose");
  return { attrs: new Proxy(e4.attrs, bn), slots: e4.slots, emit: e4.emit, expose };
}
function getComponentPublicInstance(e4) {
  return e4.exposed ? e4.exposeProxy || (e4.exposeProxy = new Proxy(proxyRefs(markRaw(e4.exposed)), { get: /* @__PURE__ */ __name((t5, n2) => n2 in t5 ? t5[n2] : n2 in Wt3 ? Wt3[n2](e4) : void 0, "get"), has: /* @__PURE__ */ __name((e5, t5) => t5 in e5 || t5 in Wt3, "has") })) : e4.proxy;
}
function getComponentName(e4, t5 = true) {
  return isFunction(e4) ? e4.displayName || e4.name : e4.name || t5 && e4.__name;
}
function h2(e4, t5, n2) {
  try {
    setBlockTracking(-1);
    const r4 = arguments.length;
    return 2 === r4 ? isObject(t5) && !i(t5) ? isVNode$2(t5) ? createVNode(e4, null, [t5]) : createVNode(e4, t5) : createVNode(e4, null, t5) : (r4 > 3 ? n2 = Array.prototype.slice.call(arguments, 2) : 3 === r4 && isVNode$2(n2) && (n2 = [n2]), createVNode(e4, t5, n2));
  } finally {
    setBlockTracking(1);
  }
}
function isMemoSame(e4, t5) {
  const n2 = e4.memo;
  if (n2.length != t5.length) return false;
  for (let e5 = 0; e5 < n2.length; e5++) if (hasChanged(n2[e5], t5[e5])) return false;
  return pn2 > 0 && un2 && un2.push(e4), true;
}
function resolveTransitionProps(e4) {
  const t5 = {};
  for (const n3 in e4) n3 in Nn || (t5[n3] = e4[n3]);
  if (false === e4.css) return t5;
  const { name: n2 = "v", type: r4, duration: o4, enterFromClass: s4 = `${n2}-enter-from`, enterActiveClass: i4 = `${n2}-enter-active`, enterToClass: a6 = `${n2}-enter-to`, appearFromClass: l3 = s4, appearActiveClass: c4 = i4, appearToClass: u3 = a6, leaveFromClass: p3 = `${n2}-leave-from`, leaveActiveClass: d3 = `${n2}-leave-active`, leaveToClass: f3 = `${n2}-leave-to` } = e4, g4 = (function(e5) {
    if (null == e5) return null;
    if (isObject(e5)) return [NumberOf(e5.enter), NumberOf(e5.leave)];
    {
      const t6 = NumberOf(e5);
      return [t6, t6];
    }
  })(o4), m3 = g4 && g4[0], y4 = g4 && g4[1], { onBeforeEnter: b4, onEnter: C3, onEnterCancelled: k3, onLeave: S3, onLeaveCancelled: T3, onBeforeAppear: w3 = b4, onAppear: R3 = C3, onAppearCancelled: A3 = k3 } = t5, finishEnter = /* @__PURE__ */ __name((e5, t6, n3, r5) => {
    e5._enterCancelled = r5, removeTransitionClass(e5, t6 ? u3 : a6), removeTransitionClass(e5, t6 ? c4 : i4), n3 && n3();
  }, "finishEnter"), finishLeave = /* @__PURE__ */ __name((e5, t6) => {
    e5._isLeaving = false, removeTransitionClass(e5, p3), removeTransitionClass(e5, f3), removeTransitionClass(e5, d3), t6 && t6();
  }, "finishLeave"), makeEnterHook = /* @__PURE__ */ __name((e5) => (t6, n3) => {
    const o5 = e5 ? R3 : C3, resolve2 = /* @__PURE__ */ __name(() => finishEnter(t6, e5, n3), "resolve");
    callHook(o5, [t6, resolve2]), nextFrame(() => {
      removeTransitionClass(t6, e5 ? l3 : s4), addTransitionClass(t6, e5 ? u3 : a6), hasExplicitCallback(o5) || whenTransitionEnds(t6, r4, m3, resolve2);
    });
  }, "makeEnterHook");
  return n(t5, { onBeforeEnter(e5) {
    callHook(b4, [e5]), addTransitionClass(e5, s4), addTransitionClass(e5, i4);
  }, onBeforeAppear(e5) {
    callHook(w3, [e5]), addTransitionClass(e5, l3), addTransitionClass(e5, c4);
  }, onEnter: makeEnterHook(false), onAppear: makeEnterHook(true), onLeave(e5, t6) {
    e5._isLeaving = true;
    const resolve2 = /* @__PURE__ */ __name(() => finishLeave(e5, t6), "resolve");
    addTransitionClass(e5, p3), e5._enterCancelled ? (addTransitionClass(e5, d3), forceReflow(e5)) : (forceReflow(e5), addTransitionClass(e5, d3)), nextFrame(() => {
      e5._isLeaving && (removeTransitionClass(e5, p3), addTransitionClass(e5, f3), hasExplicitCallback(S3) || whenTransitionEnds(e5, r4, y4, resolve2));
    }), callHook(S3, [e5, resolve2]);
  }, onEnterCancelled(e5) {
    finishEnter(e5, false, void 0, true), callHook(k3, [e5]);
  }, onAppearCancelled(e5) {
    finishEnter(e5, true, void 0, true), callHook(A3, [e5]);
  }, onLeaveCancelled(e5) {
    finishLeave(e5), callHook(T3, [e5]);
  } });
}
function NumberOf(e4) {
  return toNumber(e4);
}
function addTransitionClass(e4, t5) {
  t5.split(/\s+/).forEach((t6) => t6 && e4.classList.add(t6)), (e4[$n] || (e4[$n] = /* @__PURE__ */ new Set())).add(t5);
}
function removeTransitionClass(e4, t5) {
  t5.split(/\s+/).forEach((t6) => t6 && e4.classList.remove(t6));
  const n2 = e4[$n];
  n2 && (n2.delete(t5), n2.size || (e4[$n] = void 0));
}
function nextFrame(e4) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e4);
  });
}
function whenTransitionEnds(e4, t5, n2, r4) {
  const o4 = e4._endId = ++Hn, resolveIfNotStale = /* @__PURE__ */ __name(() => {
    o4 === e4._endId && r4();
  }, "resolveIfNotStale");
  if (null != n2) return setTimeout(resolveIfNotStale, n2);
  const { type: s4, timeout: i4, propCount: a6 } = getTransitionInfo(e4, t5);
  if (!s4) return r4();
  const l3 = s4 + "end";
  let c4 = 0;
  const end = /* @__PURE__ */ __name(() => {
    e4.removeEventListener(l3, onEnd), resolveIfNotStale();
  }, "end"), onEnd = /* @__PURE__ */ __name((t6) => {
    t6.target === e4 && ++c4 >= a6 && end();
  }, "onEnd");
  setTimeout(() => {
    c4 < a6 && end();
  }, i4 + 1), e4.addEventListener(l3, onEnd);
}
function getTransitionInfo(e4, t5) {
  const n2 = window.getComputedStyle(e4), getStyleProperties = /* @__PURE__ */ __name((e5) => (n2[e5] || "").split(", "), "getStyleProperties"), r4 = getStyleProperties(`${En}Delay`), o4 = getStyleProperties(`${En}Duration`), s4 = getTimeout(r4, o4), i4 = getStyleProperties(`${Pn}Delay`), a6 = getStyleProperties(`${Pn}Duration`), l3 = getTimeout(i4, a6);
  let c4 = null, u3 = 0, p3 = 0;
  t5 === En ? s4 > 0 && (c4 = En, u3 = s4, p3 = o4.length) : t5 === Pn ? l3 > 0 && (c4 = Pn, u3 = l3, p3 = a6.length) : (u3 = Math.max(s4, l3), c4 = u3 > 0 ? s4 > l3 ? En : Pn : null, p3 = c4 ? c4 === En ? o4.length : a6.length : 0);
  return { type: c4, timeout: u3, propCount: p3, hasTransform: c4 === En && /\b(?:transform|all)(?:,|$)/.test(getStyleProperties(`${En}Property`).toString()) };
}
function getTimeout(e4, t5) {
  for (; e4.length < t5.length; ) e4 = e4.concat(e4);
  return Math.max(...t5.map((t6, n2) => toMs(t6) + toMs(e4[n2])));
}
function toMs(e4) {
  return "auto" === e4 ? 0 : 1e3 * Number(e4.slice(0, -1).replace(",", "."));
}
function forceReflow(e4) {
  return (e4 ? e4.ownerDocument : document).body.offsetHeight;
}
function setDisplay(e4, t5) {
  e4.style.display = t5 ? e4[Mn] : "none", e4[In] = !t5;
}
function setVarsOnVNode(e4, t5) {
  if (128 & e4.shapeFlag) {
    const n2 = e4.suspense;
    e4 = n2.activeBranch, n2.pendingBranch && !n2.isHydrating && n2.effects.push(() => {
      setVarsOnVNode(n2.activeBranch, t5);
    });
  }
  for (; e4.component; ) e4 = e4.component.subTree;
  if (1 & e4.shapeFlag && e4.el) setVarsOnNode(e4.el, t5);
  else if (e4.type === on3) e4.children.forEach((e5) => setVarsOnVNode(e5, t5));
  else if (e4.type === ln2) {
    let { el: n2, anchor: r4 } = e4;
    for (; n2 && (setVarsOnNode(n2, t5), n2 !== r4); ) n2 = n2.nextSibling;
  }
}
function setVarsOnNode(e4, t5) {
  if (1 === e4.nodeType) {
    const n2 = e4.style;
    let r4 = "";
    for (const e5 in t5) {
      const o4 = normalizeCssVarValue(t5[e5]);
      n2.setProperty(`--${e5}`, o4), r4 += `--${e5}: ${o4};`;
    }
    n2[Ln] = r4;
  }
}
function setStyle(e4, t5, n2) {
  if (i(n2)) n2.forEach((n3) => setStyle(e4, t5, n3));
  else if (null == n2 && (n2 = ""), t5.startsWith("--")) e4.setProperty(t5, n2);
  else {
    const r4 = (function(e5, t6) {
      const n3 = Un[t6];
      if (n3) return n3;
      let r5 = p(t6);
      if ("filter" !== r5 && r5 in e5) return Un[t6] = r5;
      r5 = f(r5);
      for (let n4 = 0; n4 < Bn.length; n4++) {
        const o4 = Bn[n4] + r5;
        if (o4 in e5) return Un[t6] = o4;
      }
      return t6;
    })(e4, t5);
    Fn.test(n2) ? e4.setProperty(d(r4), n2.replace(Fn, ""), "important") : e4[r4] = n2;
  }
}
function patchAttr(e4, t5, n2, r4, o4, s4 = v(t5)) {
  r4 && t5.startsWith("xlink:") ? null == n2 ? e4.removeAttributeNS(Wn, t5.slice(6, t5.length)) : e4.setAttributeNS(Wn, t5, n2) : null == n2 || s4 && !includeBooleanAttr(n2) ? e4.removeAttribute(t5) : e4.setAttribute(t5, s4 ? "" : isSymbol(n2) ? String(n2) : n2);
}
function patchDOMProp(e4, t5, n2, r4, o4) {
  if ("innerHTML" === t5 || "textContent" === t5) return void (null != n2 && (e4[t5] = n2));
  const s4 = e4.tagName;
  if ("value" === t5 && "PROGRESS" !== s4 && !s4.includes("-")) {
    const r5 = "OPTION" === s4 ? e4.getAttribute("value") || "" : e4.value, o5 = null == n2 ? "checkbox" === e4.type ? "on" : "" : String(n2);
    return r5 === o5 && "_value" in e4 || (e4.value = o5), null == n2 && e4.removeAttribute(t5), void (e4._value = n2);
  }
  let i4 = false;
  if ("" === n2 || null == n2) {
    const r5 = typeof e4[t5];
    "boolean" === r5 ? n2 = includeBooleanAttr(n2) : null == n2 && "string" === r5 ? (n2 = "", i4 = true) : "number" === r5 && (n2 = 0, i4 = true);
  }
  try {
    e4[t5] = n2;
  } catch (e5) {
  }
  i4 && e4.removeAttribute(o4 || t5);
}
function addEventListener(e4, t5, n2, r4) {
  e4.addEventListener(t5, n2, r4);
}
function patchEvent(e4, t5, n2, r4, o4 = null) {
  const s4 = e4[zn] || (e4[zn] = {}), i4 = s4[t5];
  if (r4 && i4) i4.value = r4;
  else {
    const [n3, a6] = (function(e5) {
      let t6;
      if (qn.test(e5)) {
        let n5;
        for (t6 = {}; n5 = e5.match(qn); ) e5 = e5.slice(0, e5.length - n5[0].length), t6[n5[0].toLowerCase()] = true;
      }
      const n4 = ":" === e5[2] ? e5.slice(3) : d(e5.slice(2));
      return [n4, t6];
    })(t5);
    if (r4) {
      const i5 = s4[t5] = (function(e5, t6) {
        const invoker = /* @__PURE__ */ __name((e6) => {
          if (e6._vts) {
            if (e6._vts <= invoker.attached) return;
          } else e6._vts = Date.now();
          callWithAsyncErrorHandling((function(e7, t7) {
            if (i(t7)) {
              const n4 = e7.stopImmediatePropagation;
              return e7.stopImmediatePropagation = () => {
                n4.call(e7), e7._stopped = true;
              }, t7.map((e8) => (t8) => !t8._stopped && e8 && e8(t8));
            }
            return t7;
          })(e6, invoker.value), t6, 5, [e6]);
        }, "invoker");
        return invoker.value = e5, invoker.attached = getNow(), invoker;
      })(r4, o4);
      addEventListener(e4, n3, i5, a6);
    } else i4 && (!(function(e5, t6, n4, r5) {
      e5.removeEventListener(t6, n4, r5);
    })(e4, n3, i4, a6), s4[t5] = void 0);
  }
}
function defineCustomElement(e4, t5, n2) {
  let r4 = defineComponent(e4, t5);
  isPlainObject(r4) && (r4 = n({}, r4, t5));
  class VueCustomElement extends VueElement {
    static {
      __name(this, "VueCustomElement");
    }
    constructor(e5) {
      super(r4, e5, n2);
    }
  }
  return VueCustomElement.def = r4, VueCustomElement;
}
function useHost(e4) {
  const t5 = getCurrentInstance(), n2 = t5 && t5.ce;
  return n2 || null;
}
function callPendingCbs(e4) {
  const t5 = e4.el;
  t5[Qn] && t5[Qn](), t5[er] && t5[er]();
}
function recordPosition(e4) {
  Yn.set(e4, { left: e4.el.offsetLeft, top: e4.el.offsetTop });
}
function applyTranslation(e4) {
  const t5 = Xn.get(e4), n2 = Yn.get(e4), r4 = t5.left - n2.left, o4 = t5.top - n2.top;
  if (r4 || o4) {
    const t6 = e4.el.style;
    return t6.transform = t6.webkitTransform = `translate(${r4}px,${o4}px)`, t6.transitionDuration = "0s", e4;
  }
}
function onCompositionStart(e4) {
  e4.target.composing = true;
}
function onCompositionEnd(e4) {
  const t5 = e4.target;
  t5.composing && (t5.composing = false, t5.dispatchEvent(new Event("input")));
}
function castValue(e4, t5, n2) {
  return t5 && (e4 = e4.trim()), n2 && (e4 = looseToNumber(e4)), e4;
}
function setChecked(e4, { value: t5, oldValue: n2 }, r4) {
  let o4;
  if (e4._modelValue = t5, i(t5)) o4 = looseIndexOf(t5, r4.props.value) > -1;
  else if (isSet(t5)) o4 = t5.has(r4.props.value);
  else {
    if (t5 === n2) return;
    o4 = looseEqual(t5, getCheckboxValue(e4, true));
  }
  e4.checked !== o4 && (e4.checked = o4);
}
function setSelected(e4, t5) {
  const n2 = e4.multiple, r4 = i(t5);
  if (!n2 || r4 || isSet(t5)) {
    for (let o4 = 0, s4 = e4.options.length; o4 < s4; o4++) {
      const s5 = e4.options[o4], i4 = getValue(s5);
      if (n2) if (r4) {
        const e5 = typeof i4;
        s5.selected = "string" === e5 || "number" === e5 ? t5.some((e6) => String(e6) === String(i4)) : looseIndexOf(t5, i4) > -1;
      } else s5.selected = t5.has(i4);
      else if (looseEqual(getValue(s5), t5)) return void (e4.selectedIndex !== o4 && (e4.selectedIndex = o4));
    }
    n2 || -1 === e4.selectedIndex || (e4.selectedIndex = -1);
  }
}
function getValue(e4) {
  return "_value" in e4 ? e4._value : e4.value;
}
function getCheckboxValue(e4, t5) {
  const n2 = t5 ? "_trueValue" : "_falseValue";
  return n2 in e4 ? e4[n2] : t5;
}
function resolveDynamicModel(e4, t5) {
  switch (e4) {
    case "SELECT":
      return ir;
    case "TEXTAREA":
      return rr;
    default:
      switch (t5) {
        case "checkbox":
          return or;
        case "radio":
          return sr;
        default:
          return rr;
      }
  }
}
function callModelHook(e4, t5, n2, r4, o4) {
  const s4 = resolveDynamicModel(e4.tagName, n2.props && n2.props.type)[o4];
  s4 && s4(e4, t5, n2, r4);
}
function ensureRenderer() {
  return dr || (dr = createRenderer(pr));
}
function ensureHydrationRenderer() {
  return dr = fr ? dr : createHydrationRenderer(pr), fr = true, dr;
}
function resolveRootNamespace(e4) {
  return e4 instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && e4 instanceof MathMLElement ? "mathml" : void 0;
}
function normalizeContainer(e4) {
  if (isString(e4)) {
    return document.querySelector(e4);
  }
  return e4;
}
function injectHead() {
  if (hasInjectionContext()) {
    const e4 = inject(mr);
    if (!e4) throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e4;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function useHead2(e4, t5 = {}) {
  const n2 = t5.head || injectHead();
  return n2.ssr ? n2.push(e4 || {}, t5) : (function(e5, t6, n3 = {}) {
    const r4 = ref2(false);
    let o4;
    watchEffect(() => {
      const s4 = r4.value ? {} : walkResolver(t6, VueResolver);
      o4 ? o4.patch(s4) : o4 = e5.push(s4, n3);
    });
    getCurrentInstance() && (It2(() => {
      o4.dispose();
    }), onDeactivated(() => {
      r4.value = true;
    }), onActivated(() => {
      r4.value = false;
    }));
    return o4;
  })(n2, e4, t5);
}
function createHead(e4 = {}) {
  const t5 = (function(e5 = {}) {
    const t6 = createUnhead({ ...e5, document: false, propResolvers: [...e5.propResolvers || [], (e6, t7) => e6 && e6.startsWith("on") && "function" == typeof t7 ? `this.dataset.${e6}fired = true` : t7], init: [e5.disableDefaults ? void 0 : { htmlAttrs: { lang: "en" }, meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }] }, ...e5.init || []] });
    return t6._ssrPayload = {}, t6.use({ key: "server", hooks: { "tags:resolve": /* @__PURE__ */ __name(function(e6) {
      const n2 = e6.tagMap.get("title"), r4 = e6.tagMap.get("titleTemplate");
      let o4 = { title: "server" === n2?.mode ? t6._title : void 0, titleTemplate: "server" === r4?.mode ? t6._titleTemplate : void 0 };
      Object.keys(t6._ssrPayload || {}).length > 0 && (o4 = { ...t6._ssrPayload, ...o4 }), Object.values(o4).some(Boolean) && e6.tags.push({ tag: "script", innerHTML: JSON.stringify(o4), props: { id: "unhead:payload", type: "application/json" } });
    }, "tags:resolve") } }), t6;
  })({ ...e4, propResolvers: [VueResolver] });
  return t5.install = (function(e5) {
    return { install(t6) {
      t6.config.globalProperties.$unhead = e5, t6.config.globalProperties.$head = e5, t6.provide(mr, e5);
    } }.install;
  })(t5), t5;
}
function ssrRenderAttrs(e4, t5) {
  let n2 = "";
  for (const r4 in e4) {
    if (yr(r4) || isOn(r4) || "textarea" === t5 && "value" === r4) continue;
    const o4 = e4[r4];
    n2 += "class" === r4 ? ` class="${ssrRenderClass(o4)}"` : "style" === r4 ? ` style="${ssrRenderStyle(o4)}"` : "className" === r4 ? ` class="${String(o4)}"` : ssrRenderDynamicAttr(r4, o4, t5);
  }
  return n2;
}
function ssrRenderDynamicAttr(e4, t5, n2) {
  if (!isRenderableAttrValue(t5)) return "";
  const r4 = n2 && (n2.indexOf("-") > 0 || O(n2)) ? e4 : P[e4] || e4.toLowerCase();
  return R(r4) ? includeBooleanAttr(t5) ? ` ${r4}` : "" : isSSRSafeAttrName(r4) ? "" === t5 ? ` ${r4}` : ` ${r4}="${escapeHtml(t5)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r4}`), "");
}
function ssrRenderClass(e4) {
  return escapeHtml(normalizeClass(e4));
}
function ssrRenderStyle(e4) {
  if (!e4) return "";
  if (isString(e4)) return escapeHtml(e4);
  const t5 = normalizeStyle((function(e5) {
    if (!i(e5) && isObject(e5)) {
      const t6 = {};
      for (const n2 in e5) n2.startsWith(":--") ? t6[n2.slice(1)] = normalizeCssVarValue(e5[n2]) : t6[n2] = e5[n2];
      return t6;
    }
    return e5;
  })(e4));
  return escapeHtml(stringifyStyle(t5));
}
function ssrRenderComponent(e4, t5 = null, n2 = null, r4 = null, o4) {
  return renderComponentVNode(createVNode(e4, t5, n2), r4, o4);
}
function ssrInterpolate(e4) {
  return escapeHtml(toDisplayString(e4));
}
async function ssrRenderSuspense(e4, { default: t5 }) {
  t5 ? t5() : e4("<!---->");
}
function createBuffer() {
  let e4 = false;
  const t5 = [];
  return { getBuffer: /* @__PURE__ */ __name(() => t5, "getBuffer"), push(n2) {
    const r4 = isString(n2);
    e4 && r4 ? t5[t5.length - 1] += n2 : (t5.push(n2), e4 = r4, (isPromise(n2) || i(n2) && n2.hasAsync) && (t5.hasAsync = true));
  } };
}
function renderComponentVNode(e4, t5 = null, n2) {
  const r4 = e4.component = _r(e4, t5, null), o4 = Cr(r4, true), s4 = isPromise(o4);
  let i4 = r4.sp;
  if (s4 || i4) {
    return Promise.resolve(o4).then(() => {
      if (s4 && (i4 = r4.sp), i4) return Promise.all(i4.map((e5) => e5.call(r4.proxy)));
    }).catch(NOOP).then(() => renderComponentSubTree(r4, n2));
  }
  return renderComponentSubTree(r4, n2);
}
function renderComponentSubTree(e4, t5) {
  const n2 = e4.type, { getBuffer: r4, push: o4 } = createBuffer();
  if (isFunction(n2)) {
    let r5 = kr(e4);
    if (!n2.props) for (const t6 in e4.attrs) t6.startsWith("data-v-") && ((r5.props || (r5.props = {}))[t6] = "");
    renderVNode(o4, e4.subTree = r5, e4, t5);
  } else {
    e4.render && e4.render !== NOOP || e4.ssrRender || n2.ssrRender || !isString(n2.template) || (n2.ssrRender = (function() {
      throw new Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
    })(n2.template));
    const r5 = e4.ssrRender || n2.ssrRender;
    if (r5) {
      let n3 = false !== e4.inheritAttrs ? e4.attrs : void 0, s4 = false, i4 = e4;
      for (; ; ) {
        const e5 = i4.vnode.scopeId;
        e5 && (s4 || (n3 = { ...n3 }, s4 = true), n3[e5] = "");
        const t6 = i4.parent;
        if (!t6 || !t6.subTree || t6.subTree !== i4.vnode) break;
        i4 = t6;
      }
      if (t5) {
        s4 || (n3 = { ...n3 });
        const e5 = t5.trim().split(" ");
        for (let t6 = 0; t6 < e5.length; t6++) n3[e5[t6]] = "";
      }
      const a6 = br(e4);
      try {
        r5(e4.proxy, o4, e4, n3, e4.props, e4.setupState, e4.data, e4.ctx);
      } finally {
        br(a6);
      }
    } else e4.render && e4.render !== NOOP ? renderVNode(o4, e4.subTree = kr(e4), e4, t5) : (n2.name || n2.__file, o4("<!---->"));
  }
  return r4();
}
function renderVNode(e4, t5, n2, r4) {
  const { type: o4, shapeFlag: s4, children: i4, dirs: a6, props: l3 } = t5;
  switch (a6 && (t5.props = (function(e5, t6, n3) {
    const r5 = [];
    for (let t7 = 0; t7 < n3.length; t7++) {
      const o5 = n3[t7], { dir: { getSSRProps: s5 } } = o5;
      if (s5) {
        const t8 = s5(o5, e5);
        t8 && r5.push(t8);
      }
    }
    return mergeProps(t6 || {}, ...r5);
  })(t5, l3, a6)), o4) {
    case sn2:
      e4(escapeHtml(i4));
      break;
    case an2:
      e4(i4 ? `<!--${escapeHtmlComment(i4)}-->` : "<!---->");
      break;
    case ln2:
      e4(i4);
      break;
    case on3:
      t5.slotScopeIds && (r4 = (r4 ? r4 + " " : "") + t5.slotScopeIds.join(" ")), e4("<!--[-->"), renderVNodeChildren(e4, i4, n2, r4), e4("<!--]-->");
      break;
    default:
      1 & s4 ? (function(e5, t6, n3, r5) {
        const o5 = t6.type;
        let { props: s5, children: i5, shapeFlag: a7, scopeId: l4 } = t6, c4 = `<${o5}`;
        s5 && (c4 += ssrRenderAttrs(s5, o5));
        l4 && (c4 += ` ${l4}`);
        let u3 = n3, p3 = t6;
        for (; u3 && p3 === u3.subTree; ) p3 = u3.vnode, p3.scopeId && (c4 += ` ${p3.scopeId}`), u3 = u3.parent;
        r5 && (c4 += ` ${r5}`);
        if (e5(c4 + ">"), !C(o5)) {
          let t7 = false;
          s5 && (s5.innerHTML ? (t7 = true, e5(s5.innerHTML)) : s5.textContent ? (t7 = true, e5(escapeHtml(s5.textContent))) : "textarea" === o5 && s5.value && (t7 = true, e5(escapeHtml(s5.value)))), t7 || (8 & a7 ? e5(escapeHtml(i5)) : 16 & a7 && renderVNodeChildren(e5, i5, n3, r5)), e5(`</${o5}>`);
        }
      })(e4, t5, n2, r4) : 6 & s4 ? e4(renderComponentVNode(t5, n2, r4)) : 64 & s4 ? (function(e5, t6, n3, r5) {
        const o5 = t6.props && t6.props.to, s5 = t6.props && t6.props.disabled;
        if (!o5) return [];
        if (!isString(o5)) return [];
        !(function(e6, t7, n4, r6, o6) {
          e6("<!--teleport start-->");
          const s6 = o6.appContext.provides[Xt2], i5 = s6.__teleportBuffers || (s6.__teleportBuffers = {}), a7 = i5[n4] || (i5[n4] = []), l4 = a7.length;
          let c4;
          if (r6) t7(e6), c4 = "<!--teleport start anchor--><!--teleport anchor-->";
          else {
            const { getBuffer: e7, push: n5 } = createBuffer();
            n5("<!--teleport start anchor-->"), t7(n5), n5("<!--teleport anchor-->"), c4 = e7();
          }
          a7.splice(l4, 0, c4), e6("<!--teleport end-->");
        })(e5, (e6) => {
          renderVNodeChildren(e6, t6.children, n3, r5);
        }, o5, s5 || "" === s5, n3);
      })(e4, t5, n2, r4) : 128 & s4 && renderVNode(e4, t5.ssContent, n2, r4);
  }
}
function renderVNodeChildren(e4, t5, n2, r4) {
  for (let o4 = 0; o4 < t5.length; o4++) renderVNode(e4, Sr(t5[o4]), n2, r4);
}
function nestedUnrollBuffer(e4, t5, n2) {
  if (!e4.hasAsync) return t5 + unrollBufferSync$1(e4);
  let r4 = t5;
  for (let t6 = n2; t6 < e4.length; t6 += 1) {
    const n3 = e4[t6];
    if (isString(n3)) {
      r4 += n3;
      continue;
    }
    if (isPromise(n3)) return n3.then((n4) => (e4[t6] = n4, nestedUnrollBuffer(e4, r4, t6)));
    const o4 = nestedUnrollBuffer(n3, r4, 0);
    if (isPromise(o4)) return o4.then((n4) => (e4[t6] = n4, nestedUnrollBuffer(e4, "", t6)));
    r4 = o4;
  }
  return r4;
}
function unrollBuffer$1(e4) {
  return nestedUnrollBuffer(e4, "", 0);
}
function unrollBufferSync$1(e4) {
  let t5 = "";
  for (let n2 = 0; n2 < e4.length; n2++) {
    let r4 = e4[n2];
    isString(r4) ? t5 += r4 : t5 += unrollBufferSync$1(r4);
  }
  return t5;
}
async function renderToString(e4, t5 = {}) {
  if (Rr(e4)) return renderToString(createApp({ render: /* @__PURE__ */ __name(() => e4, "render") }), t5);
  const n2 = createVNode(e4._component, e4._props);
  n2.appContext = e4._context, e4.provide(Xt2, t5);
  const r4 = await renderComponentVNode(n2), o4 = await unrollBuffer$1(r4);
  if (await (async function(e5) {
    if (e5.__teleportBuffers) {
      e5.teleports = e5.teleports || {};
      for (const t6 in e5.__teleportBuffers) e5.teleports[t6] = await unrollBuffer$1(await Promise.all([e5.__teleportBuffers[t6]]));
    }
  })(t5), t5.__watcherHandles) for (const e5 of t5.__watcherHandles) e5();
  return o4;
}
function lazyCachedFunction(e4) {
  let t5 = null;
  return () => (null === t5 && (t5 = e4().catch((e5) => {
    throw t5 = null, e5;
  })), t5);
}
function is_primitive(e4) {
  return Object(e4) !== e4;
}
function is_plain_object(e4) {
  const t5 = Object.getPrototypeOf(e4);
  return t5 === Object.prototype || null === t5 || null === Object.getPrototypeOf(t5) || Object.getOwnPropertyNames(t5).sort().join("\0") === Ir;
}
function get_type(e4) {
  return Object.prototype.toString.call(e4).slice(8, -1);
}
function get_escaped_char(e4) {
  switch (e4) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return e4 < " " ? `\\u${e4.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(e4) {
  let t5 = "", n2 = 0;
  const r4 = e4.length;
  for (let o4 = 0; o4 < r4; o4 += 1) {
    const r5 = get_escaped_char(e4[o4]);
    r5 && (t5 += e4.slice(n2, o4) + r5, n2 = o4 + 1);
  }
  return `"${0 === n2 ? e4 : t5 + e4.slice(n2)}"`;
}
function enumerable_symbols(e4) {
  return Object.getOwnPropertySymbols(e4).filter((t5) => Object.getOwnPropertyDescriptor(e4, t5).enumerable);
}
function stringify_key(e4) {
  return Dr.test(e4) ? "." + e4 : "[" + JSON.stringify(e4) + "]";
}
function uneval(e4, t5) {
  const n2 = /* @__PURE__ */ new Map(), r4 = [], o4 = /* @__PURE__ */ new Map();
  !(/* @__PURE__ */ __name(function walk2(t6) {
    if (!is_primitive(t6)) {
      if (n2.has(t6)) return void n2.set(t6, n2.get(t6) + 1);
      if (n2.set(t6, 1), "function" == typeof t6) throw new DevalueError("Cannot stringify a function", r4, t6, e4);
      switch (get_type(t6)) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
        case "URL":
        case "URLSearchParams":
        case "ArrayBuffer":
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          return;
        case "Array":
          t6.forEach((e5, t7) => {
            r4.push(`[${t7}]`), walk2(e5), r4.pop();
          });
          break;
        case "Set":
          Array.from(t6).forEach(walk2);
          break;
        case "Map":
          for (const [e5, n3] of t6) r4.push(`.get(${is_primitive(e5) ? stringify_primitive$1(e5) : "..."})`), walk2(n3), r4.pop();
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          return void walk2(t6.buffer);
        default:
          if (!is_plain_object(t6)) throw new DevalueError("Cannot stringify arbitrary non-POJOs", r4, t6, e4);
          if (enumerable_symbols(t6).length > 0) throw new DevalueError("Cannot stringify POJOs with symbolic keys", r4, t6, e4);
          for (const e5 in t6) r4.push(stringify_key(e5)), walk2(t6[e5]), r4.pop();
      }
    }
  }, "walk"))(e4);
  const s4 = /* @__PURE__ */ new Map();
  function stringify3(e5) {
    if (s4.has(e5)) return s4.get(e5);
    if (is_primitive(e5)) return stringify_primitive$1(e5);
    if (o4.has(e5)) return o4.get(e5);
    const t6 = get_type(e5);
    switch (t6) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify3(e5.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(e5.source)}, "${e5.flags}")`;
      case "Date":
        return `new Date(${e5.getTime()})`;
      case "URL":
        return `new URL(${stringify_string(e5.toString())})`;
      case "URLSearchParams":
        return `new URLSearchParams(${stringify_string(e5.toString())})`;
      case "Array":
        const r5 = e5.map((t7, n3) => n3 in e5 ? stringify3(t7) : ""), o5 = 0 === e5.length || e5.length - 1 in e5 ? "" : ",";
        return `[${r5.join(",")}${o5}]`;
      case "Set":
      case "Map":
        return `new ${t6}([${Array.from(e5).map(stringify3).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        let r6 = `new ${t6}`;
        if (1 === n2.get(e5.buffer)) {
          r6 += `([${new e5.constructor(e5.buffer)}])`;
        } else r6 += `([${stringify3(e5.buffer)}])`;
        const o6 = e5.byteOffset, s6 = o6 + e5.byteLength;
        if (o6 > 0 || s6 !== e5.buffer.byteLength) {
          const e6 = +/(\d+)/.exec(t6)[1] / 8;
          r6 += `.subarray(${o6 / e6},${s6 / e6})`;
        }
        return r6;
      }
      case "ArrayBuffer":
        return `new Uint8Array([${new Uint8Array(e5).toString()}]).buffer`;
      case "Temporal.Duration":
      case "Temporal.Instant":
      case "Temporal.PlainDate":
      case "Temporal.PlainTime":
      case "Temporal.PlainDateTime":
      case "Temporal.PlainMonthDay":
      case "Temporal.PlainYearMonth":
      case "Temporal.ZonedDateTime":
        return `${t6}.from(${stringify_string(e5.toString())})`;
      default:
        const s5 = Object.keys(e5), i5 = s5.map((t7) => `${(function(e6) {
          return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e6) ? e6 : escape_unsafe_chars(JSON.stringify(e6));
        })(t7)}:${stringify3(e5[t7])}`).join(",");
        return null === Object.getPrototypeOf(e5) ? s5.length > 0 ? `{${i5},__proto__:null}` : "{__proto__:null}" : `{${i5}}`;
    }
  }
  __name(stringify3, "stringify");
  Array.from(n2).filter((e5) => e5[1] > 1).sort((e5, t6) => t6[1] - e5[1]).forEach((e5, t6) => {
    s4.set(e5[0], (function(e6) {
      let t7 = "";
      do {
        t7 = Lr[e6 % 54] + t7, e6 = ~~(e6 / 54) - 1;
      } while (e6 >= 0);
      return Fr.test(t7) ? `${t7}0` : t7;
    })(t6));
  });
  const i4 = stringify3(e4);
  if (s4.size) {
    const e5 = [], t6 = [], n3 = [];
    return s4.forEach((r5, s5) => {
      if (e5.push(r5), o4.has(s5)) return void n3.push(o4.get(s5));
      if (is_primitive(s5)) return void n3.push(stringify_primitive$1(s5));
      switch (get_type(s5)) {
        case "Number":
        case "String":
        case "Boolean":
          n3.push(`Object(${stringify3(s5.valueOf())})`);
          break;
        case "RegExp":
          n3.push(s5.toString());
          break;
        case "Date":
          n3.push(`new Date(${s5.getTime()})`);
          break;
        case "Array":
          n3.push(`Array(${s5.length})`), s5.forEach((e6, n4) => {
            t6.push(`${r5}[${n4}]=${stringify3(e6)}`);
          });
          break;
        case "Set":
          n3.push("new Set"), t6.push(`${r5}.${Array.from(s5).map((e6) => `add(${stringify3(e6)})`).join(".")}`);
          break;
        case "Map":
          n3.push("new Map"), t6.push(`${r5}.${Array.from(s5).map(([e6, t7]) => `set(${stringify3(e6)}, ${stringify3(t7)})`).join(".")}`);
          break;
        case "ArrayBuffer":
          n3.push(`new Uint8Array([${new Uint8Array(s5).join(",")}]).buffer`);
          break;
        default:
          n3.push(null === Object.getPrototypeOf(s5) ? "Object.create(null)" : "{}"), Object.keys(s5).forEach((e6) => {
            t6.push(`${r5}${(function(e7) {
              return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e7) ? `.${e7}` : `[${escape_unsafe_chars(JSON.stringify(e7))}]`;
            })(e6)}=${stringify3(s5[e6])}`);
          });
      }
    }), t6.push(`return ${i4}`), `(function(${e5.join(",")}){${t6.join(";")}}(${n3.join(",")}))`;
  }
  return i4;
}
function escape_unsafe_char(e4) {
  return Mr[e4] || e4;
}
function escape_unsafe_chars(e4) {
  return e4.replace(jr, escape_unsafe_char);
}
function stringify_primitive$1(e4) {
  if ("string" == typeof e4) return stringify_string(e4);
  if (void 0 === e4) return "void 0";
  if (0 === e4 && 1 / e4 < 0) return "-0";
  const t5 = String(e4);
  return "number" == typeof e4 ? t5.replace(/^(-)?0\./, "$1.") : "bigint" == typeof e4 ? e4 + "n" : t5;
}
function encode64(e4) {
  const t5 = new DataView(e4);
  let n2 = "";
  for (let r4 = 0; r4 < e4.byteLength; r4++) n2 += String.fromCharCode(t5.getUint8(r4));
  return (function(e5) {
    let t6 = "";
    for (let n3 = 0; n3 < e5.length; n3 += 3) {
      const r4 = [void 0, void 0, void 0, void 0];
      r4[0] = e5.charCodeAt(n3) >> 2, r4[1] = (3 & e5.charCodeAt(n3)) << 4, e5.length > n3 + 1 && (r4[1] |= e5.charCodeAt(n3 + 1) >> 4, r4[2] = (15 & e5.charCodeAt(n3 + 1)) << 2), e5.length > n3 + 2 && (r4[2] |= e5.charCodeAt(n3 + 2) >> 6, r4[3] = 63 & e5.charCodeAt(n3 + 2));
      for (let e6 = 0; e6 < r4.length; e6++) void 0 === r4[e6] ? t6 += "=" : t6 += Br[r4[e6]];
    }
    return t6;
  })(n2);
}
function stringify(e4, t5) {
  const n2 = [], r4 = /* @__PURE__ */ new Map(), o4 = [];
  if (t5) for (const e5 of Object.getOwnPropertyNames(t5)) o4.push({ key: e5, fn: t5[e5] });
  const s4 = [];
  let i4 = 0;
  const a6 = (/* @__PURE__ */ __name(function flatten(t6) {
    if (void 0 === t6) return -1;
    if (Number.isNaN(t6)) return -3;
    if (t6 === 1 / 0) return -4;
    if (t6 === -1 / 0) return -5;
    if (0 === t6 && 1 / t6 < 0) return -6;
    if (r4.has(t6)) return r4.get(t6);
    const a7 = i4++;
    r4.set(t6, a7);
    for (const { key: e5, fn: r5 } of o4) {
      const o5 = r5(t6);
      if (o5) return n2[a7] = `["${e5}",${flatten(o5)}]`, a7;
    }
    if ("function" == typeof t6) throw new DevalueError("Cannot stringify a function", s4, t6, e4);
    let l3 = "";
    if (is_primitive(t6)) l3 = stringify_primitive(t6);
    else {
      const n3 = get_type(t6);
      switch (n3) {
        case "Number":
        case "String":
        case "Boolean":
          l3 = `["Object",${stringify_primitive(t6)}]`;
          break;
        case "BigInt":
          l3 = `["BigInt",${t6}]`;
          break;
        case "Date":
          l3 = `["Date","${!isNaN(t6.getDate()) ? t6.toISOString() : ""}"]`;
          break;
        case "URL":
          l3 = `["URL",${stringify_string(t6.toString())}]`;
          break;
        case "URLSearchParams":
          l3 = `["URLSearchParams",${stringify_string(t6.toString())}]`;
          break;
        case "RegExp":
          const { source: r5, flags: o5 } = t6;
          l3 = o5 ? `["RegExp",${stringify_string(r5)},"${o5}"]` : `["RegExp",${stringify_string(r5)}]`;
          break;
        case "Array":
          l3 = "[";
          for (let e5 = 0; e5 < t6.length; e5 += 1) e5 > 0 && (l3 += ","), e5 in t6 ? (s4.push(`[${e5}]`), l3 += flatten(t6[e5]), s4.pop()) : l3 += -2;
          l3 += "]";
          break;
        case "Set":
          l3 = '["Set"';
          for (const e5 of t6) l3 += `,${flatten(e5)}`;
          l3 += "]";
          break;
        case "Map":
          l3 = '["Map"';
          for (const [e5, n4] of t6) s4.push(`.get(${is_primitive(e5) ? stringify_primitive(e5) : "..."})`), l3 += `,${flatten(e5)},${flatten(n4)}`, s4.pop();
          l3 += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const e5 = t6;
          l3 = '["' + n3 + '",' + flatten(e5.buffer);
          const r6 = t6.byteOffset, o6 = r6 + t6.byteLength;
          if (r6 > 0 || o6 !== e5.buffer.byteLength) {
            const e6 = +/(\d+)/.exec(n3)[1] / 8;
            l3 += `,${r6 / e6},${o6 / e6}`;
          }
          l3 += "]";
          break;
        }
        case "ArrayBuffer":
          l3 = `["ArrayBuffer","${encode64(t6)}"]`;
          break;
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          l3 = `["${n3}",${stringify_string(t6.toString())}]`;
          break;
        default:
          if (!is_plain_object(t6)) throw new DevalueError("Cannot stringify arbitrary non-POJOs", s4, t6, e4);
          if (enumerable_symbols(t6).length > 0) throw new DevalueError("Cannot stringify POJOs with symbolic keys", s4, t6, e4);
          if (null === Object.getPrototypeOf(t6)) {
            l3 = '["null"';
            for (const e5 in t6) s4.push(stringify_key(e5)), l3 += `,${stringify_string(e5)},${flatten(t6[e5])}`, s4.pop();
            l3 += "]";
          } else {
            l3 = "{";
            let e5 = false;
            for (const n4 in t6) e5 && (l3 += ","), e5 = true, s4.push(stringify_key(n4)), l3 += `${stringify_string(n4)}:${flatten(t6[n4])}`, s4.pop();
            l3 += "}";
          }
      }
    }
    return n2[a7] = l3, a7;
  }, "flatten"))(e4);
  return a6 < 0 ? `${a6}` : `[${n2.join(",")}]`;
}
function stringify_primitive(e4) {
  const t5 = typeof e4;
  return "string" === t5 ? stringify_string(e4) : e4 instanceof String ? stringify_string(e4.toString()) : void 0 === e4 ? (-1).toString() : 0 === e4 && 1 / e4 < 0 ? (-6).toString() : "bigint" === t5 ? `["BigInt","${e4}"]` : String(e4);
}
function renderPayloadJsonScript(e4) {
  const t5 = { type: "application/json", innerHTML: e4.data ? stringify(e4.data, e4.ssrContext._payloadReducers) : "", "data-nuxt-data": "nuxt-app", "data-ssr": !e4.ssrContext.noSSR, id: "__NUXT_DATA__" };
  e4.src && (t5["data-src"] = e4.src);
  return [t5, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(e4.ssrContext.config)}` }];
}
function splitPayload(e4) {
  const { data: t5, prerenderedAt: n2, ...r4 } = e4.payload;
  return { initial: { ...r4, prerenderedAt: n2 }, payload: { data: t5, prerenderedAt: n2 } };
}
function normalizeChunks(e4) {
  const t5 = [];
  for (const n2 of e4) {
    const e5 = n2?.trim();
    e5 && t5.push(e5);
  }
  return t5;
}
function joinTags(e4) {
  return e4.join("");
}
function joinAttrs(e4) {
  return 0 === e4.length ? "" : " " + e4.join(" ");
}
var de2, fe2, he2, ge2, me2, ye2, ve2, _e2, be2, Ce2, sortTags, ke2, Se2, Te2, we2, isTruthy, Re2, Ae2, EffectScope, xe2, ReactiveEffect, Ee2, Pe2, $e2, Ne2, Oe2, Ve2, Link, Dep, He2, Me2, Ie2, De2, Le2, je2, Fe2, Be2, BaseReactiveHandler, MutableReactiveHandler, ReadonlyReactiveHandler, Ue2, We2, ze2, qe2, toShallow, getProto, Ke2, Je2, Ge2, Ze2, Xe2, Ye2, Qe2, et2, toReactive, toReadonly, RefImpl, tt2, CustomRefImpl, ObjectRefImpl, GetterRefImpl, ComputedRefImpl, nt2, rt2, ot2, st2, it2, at2, lt2, ct2, ut2, pt2, dt2, ft2, getId, ht2, gt2, mt2, yt2, vt2, isTeleport, isTeleportDisabled, isTeleportDeferred, isTargetSVG, isTargetMathML, resolveTarget, _t2, bt2, Ct2, kt2, St2, Tt2, recursiveGetSubtree, wt2, Rt2, At2, logMismatchError, getContainerType, isComment, xt2, Et2, Pt2, $t2, isAsyncWrapper, isKeepAlive, Nt2, createHook, Ot2, Vt2, Ht2, Mt2, It2, Dt2, Lt2, jt2, Ft2, Bt2, Ut2, getPublicInstance, Wt3, hasSetupBinding, zt2, qt2, Kt2, Jt2, Gt2, Zt2, Xt2, useSSRContext, getModelModifiers, Yt2, getFunctionalFallthrough, filterModelListeners, Qt2, createInternalObject, isInternalObject, en2, isInternalKey, normalizeSlotValue, normalizeSlot, normalizeObjectSlots, normalizeVNodeSlots, assignSlots, tn2, isSuspense, nn2, rn2, on3, sn2, an2, ln2, cn2, un2, pn2, normalizeKey, normalizeRef, createVNode, dn2, fn, hn2, getCurrentInstance, gn2, mn2, setCurrentInstance, unsetCurrentInstance, yn, vn, _n, bn, computed, Cn, kn, Sn, Tn, setDevtoolsHook, wn, Rn, An, xn, En, Pn, $n, Nn, On, Vn, callHook, hasExplicitCallback, Hn, Mn, In, Dn, Ln, jn, Fn, Bn, Un, Wn, zn, qn, Kn, Jn, getNow, isNativeOn, patchProp, Gn, Zn, VueElement, Xn, Yn, Qn, er, tr, getModelAssigner, nr, rr, or, sr, ir, ar, lr, cr, ur, pr, dr, fr, render, createApp, createSSRApp, hr, initDirectivesForSSR, gr, VueResolver, mr, yr, vr, _r, br, Cr, kr, Sr, Tr, wr, Rr, Ar, xr, Er, Pr, $r, Nr, getPrecomputedDependencies, Or, Vr, Hr, Mr, DevalueError, Ir, Dr, Lr, jr, Fr, Br, Ur, Wr, zr, qr, Kr, Jr, Gr, Zr, Xr;
var init_renderer = __esm({
  ".output/server/chunks/routes/renderer.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_shared_esm_bundler();
    __name(getModuleDependencies, "getModuleDependencies");
    __name(getRequestDependencies, "getRequestDependencies");
    __name(renderStyles, "renderStyles");
    __name(renderResourceHints, "renderResourceHints");
    __name(renderResourceHeaders, "renderResourceHeaders");
    __name(getPreloadLinks, "getPreloadLinks");
    __name(getPrefetchLinks, "getPrefetchLinks");
    __name(renderScripts, "renderScripts");
    __name(createRenderer$1, "createRenderer$1");
    de2 = /* @__PURE__ */ new Set(["meta", "link", "base"]);
    fe2 = /* @__PURE__ */ new Set(["link", "style", "script", "noscript"]);
    he2 = /* @__PURE__ */ new Set(["title", "titleTemplate", "script", "style", "noscript"]);
    ge2 = /* @__PURE__ */ new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]);
    me2 = /* @__PURE__ */ new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]);
    ye2 = /* @__PURE__ */ new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]);
    ve2 = /* @__PURE__ */ new Set(["templateParams", "htmlAttrs", "bodyAttrs"]);
    _e2 = /* @__PURE__ */ new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"]);
    be2 = ["name", "property", "http-equiv"];
    Ce2 = /* @__PURE__ */ new Set(["viewport", "description", "keywords", "robots"]);
    __name(dedupeKey, "dedupeKey");
    __name(walkResolver, "walkResolver");
    __name(normalizeProps2, "normalizeProps");
    __name(normalizeTag, "normalizeTag");
    __name(normalizeEntryToTags, "normalizeEntryToTags");
    sortTags = /* @__PURE__ */ __name((e4, t5) => e4._w === t5._w ? e4._p - t5._p : e4._w - t5._w, "sortTags");
    ke2 = { base: -10, title: 10 };
    Se2 = { critical: -8, high: -1, low: 2 };
    Te2 = { meta: { "content-security-policy": -30, charset: -20, viewport: -15 }, link: { preconnect: 20, stylesheet: 60, preload: 70, modulepreload: 70, prefetch: 90, "dns-prefetch": 90, prerender: 90 }, script: { async: 30, defer: 80, sync: 50 }, style: { imported: 40, sync: 60 } };
    we2 = /@import/;
    isTruthy = /* @__PURE__ */ __name((e4) => "" === e4 || true === e4, "isTruthy");
    __name(tagWeight, "tagWeight");
    __name(registerPlugin, "registerPlugin");
    __name(createUnhead, "createUnhead");
    __name(encodeAttribute, "encodeAttribute");
    __name(propsToString, "propsToString");
    __name(tagToString, "tagToString");
    __name(renderSSRHead, "renderSSRHead");
    EffectScope = class {
      static {
        __name(this, "EffectScope");
      }
      constructor(e4 = false) {
        this.detached = e4, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Re2, !e4 && Re2 && (this.index = (Re2.scopes || (Re2.scopes = [])).push(this) - 1);
      }
      get active() {
        return this._active;
      }
      pause() {
        if (this._active) {
          let e4, t5;
          if (this._isPaused = true, this.scopes) for (e4 = 0, t5 = this.scopes.length; e4 < t5; e4++) this.scopes[e4].pause();
          for (e4 = 0, t5 = this.effects.length; e4 < t5; e4++) this.effects[e4].pause();
        }
      }
      resume() {
        if (this._active && this._isPaused) {
          let e4, t5;
          if (this._isPaused = false, this.scopes) for (e4 = 0, t5 = this.scopes.length; e4 < t5; e4++) this.scopes[e4].resume();
          for (e4 = 0, t5 = this.effects.length; e4 < t5; e4++) this.effects[e4].resume();
        }
      }
      run(e4) {
        if (this._active) {
          const t5 = Re2;
          try {
            return Re2 = this, e4();
          } finally {
            Re2 = t5;
          }
        }
      }
      on() {
        1 === ++this._on && (this.prevScope = Re2, Re2 = this);
      }
      off() {
        this._on > 0 && 0 === --this._on && (Re2 = this.prevScope, this.prevScope = void 0);
      }
      stop(e4) {
        if (this._active) {
          let t5, n2;
          for (this._active = false, t5 = 0, n2 = this.effects.length; t5 < n2; t5++) this.effects[t5].stop();
          for (this.effects.length = 0, t5 = 0, n2 = this.cleanups.length; t5 < n2; t5++) this.cleanups[t5]();
          if (this.cleanups.length = 0, this.scopes) {
            for (t5 = 0, n2 = this.scopes.length; t5 < n2; t5++) this.scopes[t5].stop(true);
            this.scopes.length = 0;
          }
          if (!this.detached && this.parent && !e4) {
            const e5 = this.parent.scopes.pop();
            e5 && e5 !== this && (this.parent.scopes[this.index] = e5, e5.index = this.index);
          }
          this.parent = void 0;
        }
      }
    };
    __name(getCurrentScope, "getCurrentScope");
    xe2 = /* @__PURE__ */ new WeakSet();
    ReactiveEffect = class {
      static {
        __name(this, "ReactiveEffect");
      }
      constructor(e4) {
        this.fn = e4, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re2 && Re2.active && Re2.effects.push(this);
      }
      pause() {
        this.flags |= 64;
      }
      resume() {
        64 & this.flags && (this.flags &= -65, xe2.has(this) && (xe2.delete(this), this.trigger()));
      }
      notify() {
        2 & this.flags && !(32 & this.flags) || 8 & this.flags || batch(this);
      }
      run() {
        if (!(1 & this.flags)) return this.fn();
        this.flags |= 2, cleanupEffect(this), prepareDeps(this);
        const e4 = Ae2, t5 = Ne2;
        Ae2 = this, Ne2 = true;
        try {
          return this.fn();
        } finally {
          cleanupDeps(this), Ae2 = e4, Ne2 = t5, this.flags &= -3;
        }
      }
      stop() {
        if (1 & this.flags) {
          for (let e4 = this.deps; e4; e4 = e4.nextDep) removeSub(e4);
          this.deps = this.depsTail = void 0, cleanupEffect(this), this.onStop && this.onStop(), this.flags &= -2;
        }
      }
      trigger() {
        64 & this.flags ? xe2.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
      }
      runIfDirty() {
        isDirty(this) && this.run();
      }
      get dirty() {
        return isDirty(this);
      }
    };
    $e2 = 0;
    __name(batch, "batch");
    __name(startBatch, "startBatch");
    __name(endBatch, "endBatch");
    __name(prepareDeps, "prepareDeps");
    __name(cleanupDeps, "cleanupDeps");
    __name(isDirty, "isDirty");
    __name(refreshComputed, "refreshComputed");
    __name(removeSub, "removeSub");
    __name(removeDep, "removeDep");
    Ne2 = true;
    Oe2 = [];
    __name(pauseTracking, "pauseTracking");
    __name(resetTracking, "resetTracking");
    __name(cleanupEffect, "cleanupEffect");
    Ve2 = 0;
    Link = class {
      static {
        __name(this, "Link");
      }
      constructor(e4, t5) {
        this.sub = e4, this.dep = t5, this.version = t5.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
      }
    };
    Dep = class {
      static {
        __name(this, "Dep");
      }
      constructor(e4) {
        this.computed = e4, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
      }
      track(e4) {
        if (!Ae2 || !Ne2 || Ae2 === this.computed) return;
        let t5 = this.activeLink;
        if (void 0 === t5 || t5.sub !== Ae2) t5 = this.activeLink = new Link(Ae2, this), Ae2.deps ? (t5.prevDep = Ae2.depsTail, Ae2.depsTail.nextDep = t5, Ae2.depsTail = t5) : Ae2.deps = Ae2.depsTail = t5, addSub(t5);
        else if (-1 === t5.version && (t5.version = this.version, t5.nextDep)) {
          const e5 = t5.nextDep;
          e5.prevDep = t5.prevDep, t5.prevDep && (t5.prevDep.nextDep = e5), t5.prevDep = Ae2.depsTail, t5.nextDep = void 0, Ae2.depsTail.nextDep = t5, Ae2.depsTail = t5, Ae2.deps === t5 && (Ae2.deps = e5);
        }
        return t5;
      }
      trigger(e4) {
        this.version++, Ve2++, this.notify(e4);
      }
      notify(e4) {
        startBatch();
        try {
          0;
          for (let e5 = this.subs; e5; e5 = e5.prevSub) e5.sub.notify() && e5.sub.dep.notify();
        } finally {
          endBatch();
        }
      }
    };
    __name(addSub, "addSub");
    He2 = /* @__PURE__ */ new WeakMap();
    Me2 = Symbol("");
    Ie2 = Symbol("");
    De2 = Symbol("");
    __name(track, "track");
    __name(trigger, "trigger");
    __name(reactiveReadArray, "reactiveReadArray");
    __name(shallowReadArray, "shallowReadArray");
    __name(toWrapped, "toWrapped");
    Le2 = { __proto__: null, [Symbol.iterator]() {
      return iterator(this, Symbol.iterator, (e4) => toWrapped(this, e4));
    }, concat(...e4) {
      return reactiveReadArray(this).concat(...e4.map((e5) => i(e5) ? reactiveReadArray(e5) : e5));
    }, entries() {
      return iterator(this, "entries", (e4) => (e4[1] = toWrapped(this, e4[1]), e4));
    }, every(e4, t5) {
      return apply(this, "every", e4, t5, void 0, arguments);
    }, filter(e4, t5) {
      return apply(this, "filter", e4, t5, (e5) => e5.map((e6) => toWrapped(this, e6)), arguments);
    }, find(e4, t5) {
      return apply(this, "find", e4, t5, (e5) => toWrapped(this, e5), arguments);
    }, findIndex(e4, t5) {
      return apply(this, "findIndex", e4, t5, void 0, arguments);
    }, findLast(e4, t5) {
      return apply(this, "findLast", e4, t5, (e5) => toWrapped(this, e5), arguments);
    }, findLastIndex(e4, t5) {
      return apply(this, "findLastIndex", e4, t5, void 0, arguments);
    }, forEach(e4, t5) {
      return apply(this, "forEach", e4, t5, void 0, arguments);
    }, includes(...e4) {
      return searchProxy(this, "includes", e4);
    }, indexOf(...e4) {
      return searchProxy(this, "indexOf", e4);
    }, join(e4) {
      return reactiveReadArray(this).join(e4);
    }, lastIndexOf(...e4) {
      return searchProxy(this, "lastIndexOf", e4);
    }, map(e4, t5) {
      return apply(this, "map", e4, t5, void 0, arguments);
    }, pop() {
      return noTracking(this, "pop");
    }, push(...e4) {
      return noTracking(this, "push", e4);
    }, reduce(e4, ...t5) {
      return reduce(this, "reduce", e4, t5);
    }, reduceRight(e4, ...t5) {
      return reduce(this, "reduceRight", e4, t5);
    }, shift() {
      return noTracking(this, "shift");
    }, some(e4, t5) {
      return apply(this, "some", e4, t5, void 0, arguments);
    }, splice(...e4) {
      return noTracking(this, "splice", e4);
    }, toReversed() {
      return reactiveReadArray(this).toReversed();
    }, toSorted(e4) {
      return reactiveReadArray(this).toSorted(e4);
    }, toSpliced(...e4) {
      return reactiveReadArray(this).toSpliced(...e4);
    }, unshift(...e4) {
      return noTracking(this, "unshift", e4);
    }, values() {
      return iterator(this, "values", (e4) => toWrapped(this, e4));
    } };
    __name(iterator, "iterator");
    je2 = Array.prototype;
    __name(apply, "apply");
    __name(reduce, "reduce");
    __name(searchProxy, "searchProxy");
    __name(noTracking, "noTracking");
    Fe2 = makeMap("__proto__,__v_isRef,__isVue");
    Be2 = new Set(Object.getOwnPropertyNames(Symbol).filter((e4) => "arguments" !== e4 && "caller" !== e4).map((e4) => Symbol[e4]).filter(isSymbol));
    __name(hasOwnProperty, "hasOwnProperty");
    BaseReactiveHandler = class {
      static {
        __name(this, "BaseReactiveHandler");
      }
      constructor(e4 = false, t5 = false) {
        this._isReadonly = e4, this._isShallow = t5;
      }
      get(e4, t5, n2) {
        if ("__v_skip" === t5) return e4.__v_skip;
        const r4 = this._isReadonly, o4 = this._isShallow;
        if ("__v_isReactive" === t5) return !r4;
        if ("__v_isReadonly" === t5) return r4;
        if ("__v_isShallow" === t5) return o4;
        if ("__v_raw" === t5) return n2 === (r4 ? o4 ? et2 : Qe2 : o4 ? Ye2 : Xe2).get(e4) || Object.getPrototypeOf(e4) === Object.getPrototypeOf(n2) ? e4 : void 0;
        const s4 = i(e4);
        if (!r4) {
          let e5;
          if (s4 && (e5 = Le2[t5])) return e5;
          if ("hasOwnProperty" === t5) return hasOwnProperty;
        }
        const i4 = Reflect.get(e4, t5, isRef2(e4) ? e4 : n2);
        if (isSymbol(t5) ? Be2.has(t5) : Fe2(t5)) return i4;
        if (r4 || track(e4, 0, t5), o4) return i4;
        if (isRef2(i4)) {
          const e5 = s4 && isIntegerKey(t5) ? i4 : i4.value;
          return r4 && isObject(e5) ? readonly(e5) : e5;
        }
        return isObject(i4) ? r4 ? readonly(i4) : reactive(i4) : i4;
      }
    };
    MutableReactiveHandler = class extends BaseReactiveHandler {
      static {
        __name(this, "MutableReactiveHandler");
      }
      constructor(e4 = false) {
        super(false, e4);
      }
      set(e4, t5, n2, r4) {
        let o4 = e4[t5];
        const s4 = i(e4) && isIntegerKey(t5);
        if (!this._isShallow) {
          const e5 = isReadonly(o4);
          if (isShallow(n2) || isReadonly(n2) || (o4 = toRaw(o4), n2 = toRaw(n2)), !s4 && isRef2(o4) && !isRef2(n2)) return e5 || (o4.value = n2), true;
        }
        const i4 = s4 ? Number(t5) < e4.length : hasOwn(e4, t5), a6 = Reflect.set(e4, t5, n2, isRef2(e4) ? e4 : r4);
        return e4 === toRaw(r4) && (i4 ? hasChanged(n2, o4) && trigger(e4, "set", t5, n2) : trigger(e4, "add", t5, n2)), a6;
      }
      deleteProperty(e4, t5) {
        const n2 = hasOwn(e4, t5);
        e4[t5];
        const r4 = Reflect.deleteProperty(e4, t5);
        return r4 && n2 && trigger(e4, "delete", t5, void 0), r4;
      }
      has(e4, t5) {
        const n2 = Reflect.has(e4, t5);
        return isSymbol(t5) && Be2.has(t5) || track(e4, 0, t5), n2;
      }
      ownKeys(e4) {
        return track(e4, 0, i(e4) ? "length" : Me2), Reflect.ownKeys(e4);
      }
    };
    ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      static {
        __name(this, "ReadonlyReactiveHandler");
      }
      constructor(e4 = false) {
        super(true, e4);
      }
      set(e4, t5) {
        return true;
      }
      deleteProperty(e4, t5) {
        return true;
      }
    };
    Ue2 = new MutableReactiveHandler();
    We2 = new ReadonlyReactiveHandler();
    ze2 = new MutableReactiveHandler(true);
    qe2 = new ReadonlyReactiveHandler(true);
    toShallow = /* @__PURE__ */ __name((e4) => e4, "toShallow");
    getProto = /* @__PURE__ */ __name((e4) => Reflect.getPrototypeOf(e4), "getProto");
    __name(createReadonlyMethod, "createReadonlyMethod");
    __name(createInstrumentations, "createInstrumentations");
    __name(createInstrumentationGetter, "createInstrumentationGetter");
    Ke2 = { get: createInstrumentationGetter(false, false) };
    Je2 = { get: createInstrumentationGetter(false, true) };
    Ge2 = { get: createInstrumentationGetter(true, false) };
    Ze2 = { get: createInstrumentationGetter(true, true) };
    Xe2 = /* @__PURE__ */ new WeakMap();
    Ye2 = /* @__PURE__ */ new WeakMap();
    Qe2 = /* @__PURE__ */ new WeakMap();
    et2 = /* @__PURE__ */ new WeakMap();
    __name(reactive, "reactive");
    __name(shallowReactive, "shallowReactive");
    __name(readonly, "readonly");
    __name(shallowReadonly, "shallowReadonly");
    __name(createReactiveObject, "createReactiveObject");
    __name(isReactive, "isReactive");
    __name(isReadonly, "isReadonly");
    __name(isShallow, "isShallow");
    __name(isProxy, "isProxy");
    __name(toRaw, "toRaw");
    __name(markRaw, "markRaw");
    toReactive = /* @__PURE__ */ __name((e4) => isObject(e4) ? reactive(e4) : e4, "toReactive");
    toReadonly = /* @__PURE__ */ __name((e4) => isObject(e4) ? readonly(e4) : e4, "toReadonly");
    __name(isRef2, "isRef");
    __name(ref2, "ref");
    __name(shallowRef, "shallowRef");
    __name(createRef, "createRef");
    RefImpl = class {
      static {
        __name(this, "RefImpl");
      }
      constructor(e4, t5) {
        this.dep = new Dep(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t5 ? e4 : toRaw(e4), this._value = t5 ? e4 : toReactive(e4), this.__v_isShallow = t5;
      }
      get value() {
        return this.dep.track(), this._value;
      }
      set value(e4) {
        const t5 = this._rawValue, n2 = this.__v_isShallow || isShallow(e4) || isReadonly(e4);
        e4 = n2 ? e4 : toRaw(e4), hasChanged(e4, t5) && (this._rawValue = e4, this._value = n2 ? e4 : toReactive(e4), this.dep.trigger());
      }
    };
    __name(unref2, "unref");
    __name(toValue, "toValue");
    tt2 = { get: /* @__PURE__ */ __name((e4, t5, n2) => "__v_raw" === t5 ? e4 : unref2(Reflect.get(e4, t5, n2)), "get"), set: /* @__PURE__ */ __name((e4, t5, n2, r4) => {
      const o4 = e4[t5];
      return isRef2(o4) && !isRef2(n2) ? (o4.value = n2, true) : Reflect.set(e4, t5, n2, r4);
    }, "set") };
    __name(proxyRefs, "proxyRefs");
    CustomRefImpl = class {
      static {
        __name(this, "CustomRefImpl");
      }
      constructor(e4) {
        this.__v_isRef = true, this._value = void 0;
        const t5 = this.dep = new Dep(), { get: n2, set: r4 } = e4(t5.track.bind(t5), t5.trigger.bind(t5));
        this._get = n2, this._set = r4;
      }
      get value() {
        return this._value = this._get();
      }
      set value(e4) {
        this._set(e4);
      }
    };
    __name(customRef, "customRef");
    ObjectRefImpl = class {
      static {
        __name(this, "ObjectRefImpl");
      }
      constructor(e4, t5, n2) {
        this._object = e4, this._key = t5, this._defaultValue = n2, this.__v_isRef = true, this._value = void 0, this._raw = toRaw(e4);
        let r4 = true, o4 = e4;
        if (!i(e4) || !isIntegerKey(String(t5))) do {
          r4 = !isProxy(o4) || isShallow(o4);
        } while (r4 && (o4 = o4.__v_raw));
        this._shallow = r4;
      }
      get value() {
        let e4 = this._object[this._key];
        return this._shallow && (e4 = unref2(e4)), this._value = void 0 === e4 ? this._defaultValue : e4;
      }
      set value(e4) {
        if (this._shallow && isRef2(this._raw[this._key])) {
          const t5 = this._object[this._key];
          if (isRef2(t5)) return void (t5.value = e4);
        }
        this._object[this._key] = e4;
      }
      get dep() {
        return (function(e4, t5) {
          const n2 = He2.get(e4);
          return n2 && n2.get(t5);
        })(this._raw, this._key);
      }
    };
    GetterRefImpl = class {
      static {
        __name(this, "GetterRefImpl");
      }
      constructor(e4) {
        this._getter = e4, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
      }
      get value() {
        return this._value = this._getter();
      }
    };
    __name(propertyToRef, "propertyToRef");
    ComputedRefImpl = class {
      static {
        __name(this, "ComputedRefImpl");
      }
      constructor(e4, t5, n2) {
        this.fn = e4, this.setter = t5, this._value = void 0, this.dep = new Dep(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ve2 - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t5, this.isSSR = n2;
      }
      notify() {
        if (this.flags |= 16, !(8 & this.flags) && Ae2 !== this) return batch(this, true), true;
      }
      get value() {
        const e4 = this.dep.track();
        return refreshComputed(this), e4 && (e4.version = this.dep.version), this._value;
      }
      set value(e4) {
        this.setter && this.setter(e4);
      }
    };
    nt2 = {};
    rt2 = /* @__PURE__ */ new WeakMap();
    __name(onWatcherCleanup, "onWatcherCleanup");
    __name(traverse, "traverse");
    st2 = [];
    it2 = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush", 15: "component update", 16: "app unmount cleanup function" };
    __name(callWithErrorHandling, "callWithErrorHandling");
    __name(callWithAsyncErrorHandling, "callWithAsyncErrorHandling");
    __name(handleError, "handleError");
    at2 = [];
    lt2 = -1;
    ct2 = [];
    ut2 = null;
    pt2 = 0;
    dt2 = Promise.resolve();
    ft2 = null;
    __name(nextTick2, "nextTick");
    __name(queueJob, "queueJob");
    __name(queueFlush, "queueFlush");
    __name(queuePostFlushCb, "queuePostFlushCb");
    __name(flushPreFlushCbs, "flushPreFlushCbs");
    __name(flushPostFlushCbs, "flushPostFlushCbs");
    getId = /* @__PURE__ */ __name((e4) => null == e4.id ? 2 & e4.flags ? -1 : 1 / 0 : e4.id, "getId");
    __name(flushJobs, "flushJobs");
    gt2 = [];
    mt2 = null;
    yt2 = null;
    __name(setCurrentRenderingInstance$1, "setCurrentRenderingInstance$1");
    __name(withCtx, "withCtx");
    __name(invokeDirectiveHook, "invokeDirectiveHook");
    vt2 = Symbol("_vte");
    isTeleport = /* @__PURE__ */ __name((e4) => e4.__isTeleport, "isTeleport");
    isTeleportDisabled = /* @__PURE__ */ __name((e4) => e4 && (e4.disabled || "" === e4.disabled), "isTeleportDisabled");
    isTeleportDeferred = /* @__PURE__ */ __name((e4) => e4 && (e4.defer || "" === e4.defer), "isTeleportDeferred");
    isTargetSVG = /* @__PURE__ */ __name((e4) => "undefined" != typeof SVGElement && e4 instanceof SVGElement, "isTargetSVG");
    isTargetMathML = /* @__PURE__ */ __name((e4) => "function" == typeof MathMLElement && e4 instanceof MathMLElement, "isTargetMathML");
    resolveTarget = /* @__PURE__ */ __name((e4, t5) => {
      const n2 = e4 && e4.to;
      if (isString(n2)) {
        if (t5) {
          return t5(n2);
        }
        return null;
      }
      return n2;
    }, "resolveTarget");
    _t2 = { name: "Teleport", __isTeleport: true, process(e4, t5, n2, r4, o4, s4, i4, a6, l3, c4) {
      const { mc: u3, pc: p3, pbc: d3, o: { insert: f3, querySelector: g4, createText: m3, createComment: y4 } } = c4, v3 = isTeleportDisabled(t5.props);
      let { shapeFlag: _3, children: b4, dynamicChildren: C3 } = t5;
      if (null == e4) {
        const e5 = t5.el = m3(""), c5 = t5.anchor = m3("");
        f3(e5, n2, r4), f3(c5, n2, r4);
        const mount = /* @__PURE__ */ __name((e6, t6) => {
          16 & _3 && u3(b4, e6, t6, o4, s4, i4, a6, l3);
        }, "mount"), mountToTarget = /* @__PURE__ */ __name(() => {
          const e6 = t5.target = resolveTarget(t5.props, g4), n3 = prepareAnchor(e6, t5, m3, f3);
          e6 && ("svg" !== i4 && isTargetSVG(e6) ? i4 = "svg" : "mathml" !== i4 && isTargetMathML(e6) && (i4 = "mathml"), o4 && o4.isCE && (o4.ce._teleportTargets || (o4.ce._teleportTargets = /* @__PURE__ */ new Set())).add(e6), v3 || (mount(e6, n3), updateCssVars(t5, false)));
        }, "mountToTarget");
        v3 && (mount(n2, c5), updateCssVars(t5, true)), isTeleportDeferred(t5.props) ? (t5.el.__isMounted = false, tn2(() => {
          mountToTarget(), delete t5.el.__isMounted;
        }, s4)) : mountToTarget();
      } else {
        if (isTeleportDeferred(t5.props) && false === e4.el.__isMounted) return void tn2(() => {
          _t2.process(e4, t5, n2, r4, o4, s4, i4, a6, l3, c4);
        }, s4);
        t5.el = e4.el, t5.targetStart = e4.targetStart;
        const u4 = t5.anchor = e4.anchor, f4 = t5.target = e4.target, m4 = t5.targetAnchor = e4.targetAnchor, y5 = isTeleportDisabled(e4.props), _4 = y5 ? n2 : f4, b5 = y5 ? u4 : m4;
        if ("svg" === i4 || isTargetSVG(f4) ? i4 = "svg" : ("mathml" === i4 || isTargetMathML(f4)) && (i4 = "mathml"), C3 ? (d3(e4.dynamicChildren, C3, _4, o4, s4, i4, a6), traverseStaticChildren(e4, t5, true)) : l3 || p3(e4, t5, _4, b5, o4, s4, i4, a6, false), v3) y5 ? t5.props && e4.props && t5.props.to !== e4.props.to && (t5.props.to = e4.props.to) : moveTeleport(t5, n2, u4, c4, 1);
        else if ((t5.props && t5.props.to) !== (e4.props && e4.props.to)) {
          const e5 = t5.target = resolveTarget(t5.props, g4);
          e5 && moveTeleport(t5, e5, null, c4, 0);
        } else y5 && moveTeleport(t5, f4, m4, c4, 1);
        updateCssVars(t5, v3);
      }
    }, remove(e4, t5, n2, { um: r4, o: { remove: o4 } }, s4) {
      const { shapeFlag: i4, children: a6, anchor: l3, targetStart: c4, targetAnchor: u3, target: p3, props: d3 } = e4;
      if (p3 && (o4(c4), o4(u3)), s4 && o4(l3), 16 & i4) {
        const e5 = s4 || !isTeleportDisabled(d3);
        for (let o5 = 0; o5 < a6.length; o5++) {
          const s5 = a6[o5];
          r4(s5, t5, n2, e5, !!s5.dynamicChildren);
        }
      }
    }, move: moveTeleport, hydrate: /* @__PURE__ */ __name(function(e4, t5, n2, r4, o4, s4, { o: { nextSibling: i4, parentNode: a6, querySelector: l3, insert: c4, createText: u3 } }, p3) {
      function hydrateDisabledTeleport(e5, t6, l4, c5) {
        t6.anchor = p3(i4(e5), t6, a6(e5), n2, r4, o4, s4), t6.targetStart = l4, t6.targetAnchor = c5;
      }
      __name(hydrateDisabledTeleport, "hydrateDisabledTeleport");
      const d3 = t5.target = resolveTarget(t5.props, l3), f3 = isTeleportDisabled(t5.props);
      if (d3) {
        const a7 = d3._lpa || d3.firstChild;
        if (16 & t5.shapeFlag) if (f3) hydrateDisabledTeleport(e4, t5, a7, a7 && i4(a7));
        else {
          t5.anchor = i4(e4);
          let l4 = a7;
          for (; l4; ) {
            if (l4 && 8 === l4.nodeType) {
              if ("teleport start anchor" === l4.data) t5.targetStart = l4;
              else if ("teleport anchor" === l4.data) {
                t5.targetAnchor = l4, d3._lpa = t5.targetAnchor && i4(t5.targetAnchor);
                break;
              }
            }
            l4 = i4(l4);
          }
          t5.targetAnchor || prepareAnchor(d3, t5, u3, c4), p3(a7 && i4(a7), t5, d3, n2, r4, o4, s4);
        }
        updateCssVars(t5, f3);
      } else f3 && 16 & t5.shapeFlag && hydrateDisabledTeleport(e4, t5, e4, i4(e4));
      return t5.anchor && i4(t5.anchor);
    }, "hydrate") };
    __name(moveTeleport, "moveTeleport");
    bt2 = _t2;
    __name(updateCssVars, "updateCssVars");
    __name(prepareAnchor, "prepareAnchor");
    Ct2 = Symbol("_leaveCb");
    kt2 = Symbol("_enterCb");
    __name(useTransitionState, "useTransitionState");
    St2 = [Function, Array];
    Tt2 = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: St2, onEnter: St2, onAfterEnter: St2, onEnterCancelled: St2, onBeforeLeave: St2, onLeave: St2, onAfterLeave: St2, onLeaveCancelled: St2, onBeforeAppear: St2, onAppear: St2, onAfterAppear: St2, onAppearCancelled: St2 };
    recursiveGetSubtree = /* @__PURE__ */ __name((e4) => {
      const t5 = e4.subTree;
      return t5.component ? recursiveGetSubtree(t5.component) : t5;
    }, "recursiveGetSubtree");
    __name(findNonCommentChild, "findNonCommentChild");
    wt2 = { name: "BaseTransition", props: Tt2, setup(e4, { slots: t5 }) {
      const n2 = getCurrentInstance(), r4 = useTransitionState();
      return () => {
        const o4 = t5.default && getTransitionRawChildren(t5.default(), true);
        if (!o4 || !o4.length) return;
        const s4 = findNonCommentChild(o4), i4 = toRaw(e4), { mode: a6 } = i4;
        if (r4.isLeaving) return emptyPlaceholder(s4);
        const l3 = getInnerChild$1(s4);
        if (!l3) return emptyPlaceholder(s4);
        let c4 = resolveTransitionHooks(l3, i4, r4, n2, (e5) => c4 = e5);
        l3.type !== an2 && setTransitionHooks(l3, c4);
        let u3 = n2.subTree && getInnerChild$1(n2.subTree);
        if (u3 && u3.type !== an2 && !isSameVNodeType(u3, l3) && recursiveGetSubtree(n2).type !== an2) {
          let e5 = resolveTransitionHooks(u3, i4, r4, n2);
          if (setTransitionHooks(u3, e5), "out-in" === a6 && l3.type !== an2) return r4.isLeaving = true, e5.afterLeave = () => {
            r4.isLeaving = false, 8 & n2.job.flags || n2.update(), delete e5.afterLeave, u3 = void 0;
          }, emptyPlaceholder(s4);
          "in-out" === a6 && l3.type !== an2 ? e5.delayLeave = (e6, t6, n3) => {
            getLeavingNodesForType(r4, u3)[String(u3.key)] = u3, e6[Ct2] = () => {
              t6(), e6[Ct2] = void 0, delete c4.delayedLeave, u3 = void 0;
            }, c4.delayedLeave = () => {
              n3(), delete c4.delayedLeave, u3 = void 0;
            };
          } : u3 = void 0;
        } else u3 && (u3 = void 0);
        return s4;
      };
    } };
    __name(getLeavingNodesForType, "getLeavingNodesForType");
    __name(resolveTransitionHooks, "resolveTransitionHooks");
    __name(emptyPlaceholder, "emptyPlaceholder");
    __name(getInnerChild$1, "getInnerChild$1");
    __name(setTransitionHooks, "setTransitionHooks");
    __name(getTransitionRawChildren, "getTransitionRawChildren");
    __name(defineComponent, "defineComponent");
    __name(markAsyncBoundary, "markAsyncBoundary");
    Rt2 = /* @__PURE__ */ new WeakMap();
    __name(setRef, "setRef");
    __name(invalidatePendingSetRef, "invalidatePendingSetRef");
    At2 = false;
    logMismatchError = /* @__PURE__ */ __name(() => {
      At2 || (console.error("Hydration completed but contains mismatches."), At2 = true);
    }, "logMismatchError");
    getContainerType = /* @__PURE__ */ __name((e4) => {
      if (1 === e4.nodeType) return ((e5) => e5.namespaceURI.includes("svg") && "foreignObject" !== e5.tagName)(e4) ? "svg" : ((e5) => e5.namespaceURI.includes("MathML"))(e4) ? "mathml" : void 0;
    }, "getContainerType");
    isComment = /* @__PURE__ */ __name((e4) => 8 === e4.nodeType, "isComment");
    __name(createHydrationFunctions, "createHydrationFunctions");
    xt2 = "data-allow-mismatch";
    Et2 = { 0: "text", 1: "children", 2: "class", 3: "style", 4: "attribute" };
    __name(isMismatchAllowed, "isMismatchAllowed");
    Pt2 = getGlobalThis().requestIdleCallback || ((e4) => setTimeout(e4, 1));
    $t2 = getGlobalThis().cancelIdleCallback || ((e4) => clearTimeout(e4));
    isAsyncWrapper = /* @__PURE__ */ __name((e4) => !!e4.type.__asyncLoader, "isAsyncWrapper");
    __name(createInnerComp, "createInnerComp");
    isKeepAlive = /* @__PURE__ */ __name((e4) => e4.type.__isKeepAlive, "isKeepAlive");
    Nt2 = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e4, { slots: t5 }) {
      const n2 = getCurrentInstance(), r4 = n2.ctx;
      if (!r4.renderer) return () => {
        const e5 = t5.default && t5.default();
        return e5 && 1 === e5.length ? e5[0] : e5;
      };
      const o4 = /* @__PURE__ */ new Map(), s4 = /* @__PURE__ */ new Set();
      let i4 = null;
      const a6 = n2.suspense, { renderer: { p: l3, m: c4, um: u3, o: { createElement: p3 } } } = r4, d3 = p3("div");
      function unmount(e5) {
        resetShapeFlag(e5), u3(e5, n2, a6, true);
      }
      __name(unmount, "unmount");
      function pruneCache(e5) {
        o4.forEach((t6, n3) => {
          const r5 = getComponentName(t6.type);
          r5 && !e5(r5) && pruneCacheEntry(n3);
        });
      }
      __name(pruneCache, "pruneCache");
      function pruneCacheEntry(e5) {
        const t6 = o4.get(e5);
        !t6 || i4 && isSameVNodeType(t6, i4) ? i4 && resetShapeFlag(i4) : unmount(t6), o4.delete(e5), s4.delete(e5);
      }
      __name(pruneCacheEntry, "pruneCacheEntry");
      r4.activate = (e5, t6, n3, r5, o5) => {
        const s5 = e5.component;
        c4(e5, t6, n3, 0, a6), l3(s5.vnode, e5, t6, n3, s5, a6, r5, e5.slotScopeIds, o5), tn2(() => {
          s5.isDeactivated = false, s5.a && invokeArrayFns(s5.a);
          const t7 = e5.props && e5.props.onVnodeMounted;
          t7 && invokeVNodeHook(t7, s5.parent, e5);
        }, a6);
      }, r4.deactivate = (e5) => {
        const t6 = e5.component;
        invalidateMount(t6.m), invalidateMount(t6.a), c4(e5, d3, null, 1, a6), tn2(() => {
          t6.da && invokeArrayFns(t6.da);
          const n3 = e5.props && e5.props.onVnodeUnmounted;
          n3 && invokeVNodeHook(n3, t6.parent, e5), t6.isDeactivated = true;
        }, a6);
      }, watch(() => [e4.include, e4.exclude], ([e5, t6]) => {
        e5 && pruneCache((t7) => matches(e5, t7)), t6 && pruneCache((e6) => !matches(t6, e6));
      }, { flush: "post", deep: true });
      let f3 = null;
      const cacheSubtree = /* @__PURE__ */ __name(() => {
        null != f3 && (isSuspense(n2.subTree.type) ? tn2(() => {
          o4.set(f3, getInnerChild(n2.subTree));
        }, n2.subTree.suspense) : o4.set(f3, getInnerChild(n2.subTree)));
      }, "cacheSubtree");
      return Vt2(cacheSubtree), Mt2(cacheSubtree), It2(() => {
        o4.forEach((e5) => {
          const { subTree: t6, suspense: r5 } = n2, o5 = getInnerChild(t6);
          if (e5.type === o5.type && e5.key === o5.key) {
            resetShapeFlag(o5);
            const e6 = o5.component.da;
            return void (e6 && tn2(e6, r5));
          }
          unmount(e5);
        });
      }), () => {
        if (f3 = null, !t5.default) return i4 = null;
        const n3 = t5.default(), r5 = n3[0];
        if (n3.length > 1) return i4 = null, n3;
        if (!(isVNode$2(r5) && (4 & r5.shapeFlag || 128 & r5.shapeFlag))) return i4 = null, r5;
        let a7 = getInnerChild(r5);
        if (a7.type === an2) return i4 = null, a7;
        const l4 = a7.type, c5 = getComponentName(isAsyncWrapper(a7) ? a7.type.__asyncResolved || {} : l4), { include: u4, exclude: p4, max: d4 } = e4;
        if (u4 && (!c5 || !matches(u4, c5)) || p4 && c5 && matches(p4, c5)) return a7.shapeFlag &= -257, i4 = a7, r5;
        const g4 = null == a7.key ? l4 : a7.key, m3 = o4.get(g4);
        return a7.el && (a7 = cloneVNode(a7), 128 & r5.shapeFlag && (r5.ssContent = a7)), f3 = g4, m3 ? (a7.el = m3.el, a7.component = m3.component, a7.transition && setTransitionHooks(a7, a7.transition), a7.shapeFlag |= 512, s4.delete(g4), s4.add(g4)) : (s4.add(g4), d4 && s4.size > parseInt(d4, 10) && pruneCacheEntry(s4.values().next().value)), a7.shapeFlag |= 256, i4 = a7, isSuspense(r5.type) ? r5 : a7;
      };
    } };
    __name(matches, "matches");
    __name(onActivated, "onActivated");
    __name(onDeactivated, "onDeactivated");
    __name(registerKeepAliveHook, "registerKeepAliveHook");
    __name(injectToKeepAliveRoot, "injectToKeepAliveRoot");
    __name(resetShapeFlag, "resetShapeFlag");
    __name(getInnerChild, "getInnerChild");
    __name(injectHook, "injectHook");
    createHook = /* @__PURE__ */ __name((e4) => (t5, n2 = hn2) => {
      _n && "sp" !== e4 || injectHook(e4, (...e5) => t5(...e5), n2);
    }, "createHook");
    Ot2 = createHook("bm");
    Vt2 = createHook("m");
    Ht2 = createHook("bu");
    Mt2 = createHook("u");
    It2 = createHook("bum");
    Dt2 = createHook("um");
    Lt2 = createHook("sp");
    jt2 = createHook("rtg");
    Ft2 = createHook("rtc");
    __name(onErrorCaptured, "onErrorCaptured");
    Bt2 = "components";
    Ut2 = Symbol.for("v-ndc");
    __name(resolveAsset, "resolveAsset");
    __name(resolve, "resolve");
    __name(ensureValidVNode$1, "ensureValidVNode$1");
    getPublicInstance = /* @__PURE__ */ __name((e4) => e4 ? isStatefulComponent(e4) ? getComponentPublicInstance(e4) : getPublicInstance(e4.parent) : null, "getPublicInstance");
    Wt3 = n(/* @__PURE__ */ Object.create(null), { $: /* @__PURE__ */ __name((e4) => e4, "$"), $el: /* @__PURE__ */ __name((e4) => e4.vnode.el, "$el"), $data: /* @__PURE__ */ __name((e4) => e4.data, "$data"), $props: /* @__PURE__ */ __name((e4) => e4.props, "$props"), $attrs: /* @__PURE__ */ __name((e4) => e4.attrs, "$attrs"), $slots: /* @__PURE__ */ __name((e4) => e4.slots, "$slots"), $refs: /* @__PURE__ */ __name((e4) => e4.refs, "$refs"), $parent: /* @__PURE__ */ __name((e4) => getPublicInstance(e4.parent), "$parent"), $root: /* @__PURE__ */ __name((e4) => getPublicInstance(e4.root), "$root"), $host: /* @__PURE__ */ __name((e4) => e4.ce, "$host"), $emit: /* @__PURE__ */ __name((e4) => e4.emit, "$emit"), $options: /* @__PURE__ */ __name((e4) => resolveMergedOptions(e4), "$options"), $forceUpdate: /* @__PURE__ */ __name((e4) => e4.f || (e4.f = () => {
      queueJob(e4.update);
    }), "$forceUpdate"), $nextTick: /* @__PURE__ */ __name((e4) => e4.n || (e4.n = nextTick2.bind(e4.proxy)), "$nextTick"), $watch: /* @__PURE__ */ __name((e4) => instanceWatch.bind(e4), "$watch") });
    hasSetupBinding = /* @__PURE__ */ __name((e4, t5) => e4 !== t && !e4.__isScriptSetup && hasOwn(e4, t5), "hasSetupBinding");
    zt2 = { get({ _: e4 }, t5) {
      if ("__v_skip" === t5) return true;
      const { ctx: n2, setupState: r4, data: o4, props: s4, accessCache: i4, type: a6, appContext: l3 } = e4;
      if ("$" !== t5[0]) {
        const e5 = i4[t5];
        if (void 0 !== e5) switch (e5) {
          case 1:
            return r4[t5];
          case 2:
            return o4[t5];
          case 4:
            return n2[t5];
          case 3:
            return s4[t5];
        }
        else {
          if (hasSetupBinding(r4, t5)) return i4[t5] = 1, r4[t5];
          if (o4 !== t && hasOwn(o4, t5)) return i4[t5] = 2, o4[t5];
          if (hasOwn(s4, t5)) return i4[t5] = 3, s4[t5];
          if (n2 !== t && hasOwn(n2, t5)) return i4[t5] = 4, n2[t5];
          Kt2 && (i4[t5] = 0);
        }
      }
      const c4 = Wt3[t5];
      let u3, p3;
      return c4 ? ("$attrs" === t5 && track(e4.attrs, 0, ""), c4(e4)) : (u3 = a6.__cssModules) && (u3 = u3[t5]) ? u3 : n2 !== t && hasOwn(n2, t5) ? (i4[t5] = 4, n2[t5]) : (p3 = l3.config.globalProperties, hasOwn(p3, t5) ? p3[t5] : void 0);
    }, set({ _: e4 }, t5, n2) {
      const { data: r4, setupState: o4, ctx: s4 } = e4;
      return hasSetupBinding(o4, t5) ? (o4[t5] = n2, true) : r4 !== t && hasOwn(r4, t5) ? (r4[t5] = n2, true) : !hasOwn(e4.props, t5) && (("$" !== t5[0] || !(t5.slice(1) in e4)) && (s4[t5] = n2, true));
    }, has({ _: { data: e4, setupState: t5, accessCache: n2, ctx: r4, appContext: o4, props: s4, type: i4 } }, a6) {
      let l3;
      return !!(n2[a6] || e4 !== t && "$" !== a6[0] && hasOwn(e4, a6) || hasSetupBinding(t5, a6) || hasOwn(s4, a6) || hasOwn(r4, a6) || hasOwn(Wt3, a6) || hasOwn(o4.config.globalProperties, a6) || (l3 = i4.__cssModules) && l3[a6]);
    }, defineProperty(e4, t5, n2) {
      return null != n2.get ? e4._.accessCache[t5] = 0 : hasOwn(n2, "value") && this.set(e4, t5, n2.value, null), Reflect.defineProperty(e4, t5, n2);
    } };
    qt2 = n({}, zt2, { get(e4, t5) {
      if (t5 !== Symbol.unscopables) return zt2.get(e4, t5, e4);
    }, has: /* @__PURE__ */ __name((e4, t5) => "_" !== t5[0] && !E(t5), "has") });
    __name(getContext2, "getContext");
    __name(normalizePropsOrEmits, "normalizePropsOrEmits");
    Kt2 = true;
    __name(applyOptions, "applyOptions");
    __name(callHook$1, "callHook$1");
    __name(createWatcher, "createWatcher");
    __name(resolveMergedOptions, "resolveMergedOptions");
    __name(mergeOptions, "mergeOptions");
    Jt2 = { data: mergeDataFn, props: mergeEmitsOrPropsOptions, emits: mergeEmitsOrPropsOptions, methods: mergeObjectOptions, computed: mergeObjectOptions, beforeCreate: mergeAsArray2, created: mergeAsArray2, beforeMount: mergeAsArray2, mounted: mergeAsArray2, beforeUpdate: mergeAsArray2, updated: mergeAsArray2, beforeDestroy: mergeAsArray2, beforeUnmount: mergeAsArray2, destroyed: mergeAsArray2, unmounted: mergeAsArray2, activated: mergeAsArray2, deactivated: mergeAsArray2, errorCaptured: mergeAsArray2, serverPrefetch: mergeAsArray2, components: mergeObjectOptions, directives: mergeObjectOptions, watch: /* @__PURE__ */ __name(function(e4, t5) {
      if (!e4) return t5;
      if (!t5) return e4;
      const n2 = n(/* @__PURE__ */ Object.create(null), e4);
      for (const r4 in t5) n2[r4] = mergeAsArray2(e4[r4], t5[r4]);
      return n2;
    }, "watch"), provide: mergeDataFn, inject: /* @__PURE__ */ __name(function(e4, t5) {
      return mergeObjectOptions(normalizeInject(e4), normalizeInject(t5));
    }, "inject") };
    __name(mergeDataFn, "mergeDataFn");
    __name(normalizeInject, "normalizeInject");
    __name(mergeAsArray2, "mergeAsArray");
    __name(mergeObjectOptions, "mergeObjectOptions");
    __name(mergeEmitsOrPropsOptions, "mergeEmitsOrPropsOptions");
    __name(createAppContext, "createAppContext");
    Gt2 = 0;
    __name(createAppAPI, "createAppAPI");
    Zt2 = null;
    __name(provide, "provide");
    __name(inject, "inject");
    __name(hasInjectionContext, "hasInjectionContext");
    Xt2 = Symbol.for("v-scx");
    useSSRContext = /* @__PURE__ */ __name(() => inject(Xt2), "useSSRContext");
    __name(watchEffect, "watchEffect");
    __name(watchSyncEffect, "watchSyncEffect");
    __name(watch, "watch");
    __name(doWatch, "doWatch");
    __name(instanceWatch, "instanceWatch");
    __name(createPathGetter, "createPathGetter");
    getModelModifiers = /* @__PURE__ */ __name((e4, t5) => "modelValue" === t5 || "model-value" === t5 ? e4.modelModifiers : e4[`${t5}Modifiers`] || e4[`${p(t5)}Modifiers`] || e4[`${d(t5)}Modifiers`], "getModelModifiers");
    __name(emit2, "emit");
    Yt2 = /* @__PURE__ */ new WeakMap();
    __name(normalizeEmitsOptions, "normalizeEmitsOptions");
    __name(isEmitListener, "isEmitListener");
    __name(renderComponentRoot$1, "renderComponentRoot$1");
    getFunctionalFallthrough = /* @__PURE__ */ __name((e4) => {
      let t5;
      for (const n2 in e4) ("class" === n2 || "style" === n2 || isOn(n2)) && ((t5 || (t5 = {}))[n2] = e4[n2]);
      return t5;
    }, "getFunctionalFallthrough");
    filterModelListeners = /* @__PURE__ */ __name((e4, t5) => {
      const n2 = {};
      for (const r4 in e4) isModelListener(r4) && r4.slice(9) in t5 || (n2[r4] = e4[r4]);
      return n2;
    }, "filterModelListeners");
    __name(hasPropsChanged, "hasPropsChanged");
    __name(updateHOCHostEl, "updateHOCHostEl");
    Qt2 = {};
    createInternalObject = /* @__PURE__ */ __name(() => Object.create(Qt2), "createInternalObject");
    isInternalObject = /* @__PURE__ */ __name((e4) => Object.getPrototypeOf(e4) === Qt2, "isInternalObject");
    __name(setFullProps, "setFullProps");
    __name(resolvePropValue, "resolvePropValue");
    en2 = /* @__PURE__ */ new WeakMap();
    __name(normalizePropsOptions, "normalizePropsOptions");
    __name(validatePropName, "validatePropName");
    isInternalKey = /* @__PURE__ */ __name((e4) => "_" === e4 || "_ctx" === e4 || "$stable" === e4, "isInternalKey");
    normalizeSlotValue = /* @__PURE__ */ __name((e4) => i(e4) ? e4.map(normalizeVNode$1) : [normalizeVNode$1(e4)], "normalizeSlotValue");
    normalizeSlot = /* @__PURE__ */ __name((e4, t5, n2) => {
      if (t5._n) return t5;
      const r4 = withCtx((...e5) => normalizeSlotValue(t5(...e5)), n2);
      return r4._c = false, r4;
    }, "normalizeSlot");
    normalizeObjectSlots = /* @__PURE__ */ __name((e4, t5, n2) => {
      const r4 = e4._ctx;
      for (const n3 in e4) {
        if (isInternalKey(n3)) continue;
        const o4 = e4[n3];
        if (isFunction(o4)) t5[n3] = normalizeSlot(0, o4, r4);
        else if (null != o4) {
          const e5 = normalizeSlotValue(o4);
          t5[n3] = () => e5;
        }
      }
    }, "normalizeObjectSlots");
    normalizeVNodeSlots = /* @__PURE__ */ __name((e4, t5) => {
      const n2 = normalizeSlotValue(t5);
      e4.slots.default = () => n2;
    }, "normalizeVNodeSlots");
    assignSlots = /* @__PURE__ */ __name((e4, t5, n2) => {
      for (const r4 in t5) !n2 && isInternalKey(r4) || (e4[r4] = t5[r4]);
    }, "assignSlots");
    tn2 = queueEffectWithSuspense;
    __name(createRenderer, "createRenderer");
    __name(createHydrationRenderer, "createHydrationRenderer");
    __name(baseCreateRenderer, "baseCreateRenderer");
    __name(resolveChildrenNamespace, "resolveChildrenNamespace");
    __name(toggleRecurse, "toggleRecurse");
    __name(needTransition, "needTransition");
    __name(traverseStaticChildren, "traverseStaticChildren");
    __name(locateNonHydratedAsyncRoot, "locateNonHydratedAsyncRoot");
    __name(invalidateMount, "invalidateMount");
    isSuspense = /* @__PURE__ */ __name((e4) => e4.__isSuspense, "isSuspense");
    nn2 = 0;
    rn2 = { name: "Suspense", __isSuspense: true, process(e4, t5, n2, r4, o4, s4, i4, a6, l3, c4) {
      if (null == e4) !(function(e5, t6, n3, r5, o5, s5, i5, a7, l4) {
        const { p: c5, o: { createElement: u3 } } = l4, p3 = u3("div"), d3 = e5.suspense = createSuspenseBoundary(e5, o5, r5, t6, p3, n3, s5, i5, a7, l4);
        c5(null, d3.pendingBranch = e5.ssContent, p3, null, r5, d3, s5, i5), d3.deps > 0 ? (triggerEvent(e5, "onPending"), triggerEvent(e5, "onFallback"), c5(null, e5.ssFallback, t6, n3, r5, null, s5, i5), setActiveBranch(d3, e5.ssFallback)) : d3.resolve(false, true);
      })(t5, n2, r4, o4, s4, i4, a6, l3, c4);
      else {
        if (s4 && s4.deps > 0 && !e4.suspense.isInFallback) return t5.suspense = e4.suspense, t5.suspense.vnode = t5, void (t5.el = e4.el);
        !(function(e5, t6, n3, r5, o5, s5, i5, a7, { p: l4, um: c5, o: { createElement: u3 } }) {
          const p3 = t6.suspense = e5.suspense;
          p3.vnode = t6, t6.el = e5.el;
          const d3 = t6.ssContent, f3 = t6.ssFallback, { activeBranch: g4, pendingBranch: m3, isInFallback: y4, isHydrating: v3 } = p3;
          if (m3) p3.pendingBranch = d3, isSameVNodeType(m3, d3) ? (l4(m3, d3, p3.hiddenContainer, null, o5, p3, s5, i5, a7), p3.deps <= 0 ? p3.resolve() : y4 && (v3 || (l4(g4, f3, n3, r5, o5, null, s5, i5, a7), setActiveBranch(p3, f3)))) : (p3.pendingId = nn2++, v3 ? (p3.isHydrating = false, p3.activeBranch = m3) : c5(m3, o5, p3), p3.deps = 0, p3.effects.length = 0, p3.hiddenContainer = u3("div"), y4 ? (l4(null, d3, p3.hiddenContainer, null, o5, p3, s5, i5, a7), p3.deps <= 0 ? p3.resolve() : (l4(g4, f3, n3, r5, o5, null, s5, i5, a7), setActiveBranch(p3, f3))) : g4 && isSameVNodeType(g4, d3) ? (l4(g4, d3, n3, r5, o5, p3, s5, i5, a7), p3.resolve(true)) : (l4(null, d3, p3.hiddenContainer, null, o5, p3, s5, i5, a7), p3.deps <= 0 && p3.resolve()));
          else if (g4 && isSameVNodeType(g4, d3)) l4(g4, d3, n3, r5, o5, p3, s5, i5, a7), setActiveBranch(p3, d3);
          else if (triggerEvent(t6, "onPending"), p3.pendingBranch = d3, 512 & d3.shapeFlag ? p3.pendingId = d3.component.suspenseId : p3.pendingId = nn2++, l4(null, d3, p3.hiddenContainer, null, o5, p3, s5, i5, a7), p3.deps <= 0) p3.resolve();
          else {
            const { timeout: e6, pendingId: t7 } = p3;
            e6 > 0 ? setTimeout(() => {
              p3.pendingId === t7 && p3.fallback(f3);
            }, e6) : 0 === e6 && p3.fallback(f3);
          }
        })(e4, t5, n2, r4, o4, i4, a6, l3, c4);
      }
    }, hydrate: /* @__PURE__ */ __name(function(e4, t5, n2, r4, o4, s4, i4, a6, l3) {
      const c4 = t5.suspense = createSuspenseBoundary(t5, r4, n2, e4.parentNode, document.createElement("div"), null, o4, s4, i4, a6, true), u3 = l3(e4, c4.pendingBranch = t5.ssContent, n2, c4, s4, i4);
      0 === c4.deps && c4.resolve(false, true);
      return u3;
    }, "hydrate"), normalize: /* @__PURE__ */ __name(function(e4) {
      const { shapeFlag: t5, children: n2 } = e4, r4 = 32 & t5;
      e4.ssContent = normalizeSuspenseSlot(r4 ? n2.default : n2), e4.ssFallback = r4 ? normalizeSuspenseSlot(n2.fallback) : createVNode(an2);
    }, "normalize") };
    __name(triggerEvent, "triggerEvent");
    __name(createSuspenseBoundary, "createSuspenseBoundary");
    __name(normalizeSuspenseSlot, "normalizeSuspenseSlot");
    __name(queueEffectWithSuspense, "queueEffectWithSuspense");
    __name(setActiveBranch, "setActiveBranch");
    on3 = Symbol.for("v-fgt");
    sn2 = Symbol.for("v-txt");
    an2 = Symbol.for("v-cmt");
    ln2 = Symbol.for("v-stc");
    cn2 = [];
    un2 = null;
    __name(openBlock, "openBlock");
    __name(closeBlock, "closeBlock");
    pn2 = 1;
    __name(setBlockTracking, "setBlockTracking");
    __name(setupBlock, "setupBlock");
    __name(createBlock, "createBlock");
    __name(isVNode$2, "isVNode$2");
    __name(isSameVNodeType, "isSameVNodeType");
    normalizeKey = /* @__PURE__ */ __name(({ key: e4 }) => null != e4 ? e4 : null, "normalizeKey");
    normalizeRef = /* @__PURE__ */ __name(({ ref: e4, ref_key: t5, ref_for: n2 }) => ("number" == typeof e4 && (e4 = "" + e4), null != e4 ? isString(e4) || isRef2(e4) || isFunction(e4) ? { i: mt2, r: e4, k: t5, f: !!n2 } : e4 : null), "normalizeRef");
    __name(createBaseVNode, "createBaseVNode");
    createVNode = /* @__PURE__ */ __name(function(e4, t5 = null, n2 = null, r4 = 0, o4 = null, s4 = false) {
      e4 && e4 !== Ut2 || (e4 = an2);
      if (isVNode$2(e4)) {
        const r5 = cloneVNode(e4, t5, true);
        return n2 && normalizeChildren(r5, n2), pn2 > 0 && !s4 && un2 && (6 & r5.shapeFlag ? un2[un2.indexOf(e4)] = r5 : un2.push(r5)), r5.patchFlag = -2, r5;
      }
      i4 = e4, isFunction(i4) && "__vccOpts" in i4 && (e4 = e4.__vccOpts);
      var i4;
      if (t5) {
        t5 = guardReactiveProps(t5);
        let { class: e5, style: n3 } = t5;
        e5 && !isString(e5) && (t5.class = normalizeClass(e5)), isObject(n3) && (isProxy(n3) && !i(n3) && (n3 = n({}, n3)), t5.style = normalizeStyle(n3));
      }
      const a6 = isString(e4) ? 1 : isSuspense(e4) ? 128 : isTeleport(e4) ? 64 : isObject(e4) ? 4 : isFunction(e4) ? 2 : 0;
      return createBaseVNode(e4, t5, n2, r4, o4, a6, s4, true);
    }, "createVNode");
    __name(guardReactiveProps, "guardReactiveProps");
    __name(cloneVNode, "cloneVNode");
    __name(createTextVNode, "createTextVNode");
    __name(normalizeVNode$1, "normalizeVNode$1");
    __name(cloneIfMounted, "cloneIfMounted");
    __name(normalizeChildren, "normalizeChildren");
    __name(mergeProps, "mergeProps");
    __name(invokeVNodeHook, "invokeVNodeHook");
    dn2 = createAppContext();
    fn = 0;
    __name(createComponentInstance$1, "createComponentInstance$1");
    hn2 = null;
    getCurrentInstance = /* @__PURE__ */ __name(() => hn2 || mt2, "getCurrentInstance");
    {
      const e4 = getGlobalThis(), registerGlobalSetter = /* @__PURE__ */ __name((t5, n2) => {
        let r4;
        return (r4 = e4[t5]) || (r4 = e4[t5] = []), r4.push(n2), (e5) => {
          r4.length > 1 ? r4.forEach((t6) => t6(e5)) : r4[0](e5);
        };
      }, "registerGlobalSetter");
      gn2 = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e5) => hn2 = e5), mn2 = registerGlobalSetter("__VUE_SSR_SETTERS__", (e5) => _n = e5);
    }
    setCurrentInstance = /* @__PURE__ */ __name((e4) => {
      const t5 = hn2;
      return gn2(e4), e4.scope.on(), () => {
        e4.scope.off(), gn2(t5);
      };
    }, "setCurrentInstance");
    unsetCurrentInstance = /* @__PURE__ */ __name(() => {
      hn2 && hn2.scope.off(), gn2(null);
    }, "unsetCurrentInstance");
    __name(isStatefulComponent, "isStatefulComponent");
    _n = false;
    __name(setupComponent$1, "setupComponent$1");
    __name(handleSetupResult, "handleSetupResult");
    __name(finishComponentSetup, "finishComponentSetup");
    bn = { get: /* @__PURE__ */ __name((e4, t5) => (track(e4, 0, ""), e4[t5]), "get") };
    __name(createSetupContext, "createSetupContext");
    __name(getComponentPublicInstance, "getComponentPublicInstance");
    __name(getComponentName, "getComponentName");
    computed = /* @__PURE__ */ __name((e4, t5) => {
      const n2 = (function(e5, t6, n3 = false) {
        let r4, o4;
        return isFunction(e5) ? r4 = e5 : (r4 = e5.get, o4 = e5.set), new ComputedRefImpl(r4, o4, n3);
      })(e4, 0, _n);
      return n2;
    }, "computed");
    __name(h2, "h");
    __name(isMemoSame, "isMemoSame");
    Cn = "3.5.25";
    kn = NOOP;
    Sn = it2;
    Tn = ht2;
    setDevtoolsHook = /* @__PURE__ */ __name(function(e4, t5) {
      ht2 = e4, ht2 ? (ht2.enabled = true, gt2.forEach(({ event: e5, args: t6 }) => ht2.emit(e5, ...t6)), gt2 = []) : gt2 = [];
    }, "setDevtoolsHook");
    wn = { createComponentInstance: createComponentInstance$1, setupComponent: setupComponent$1, renderComponentRoot: renderComponentRoot$1, setCurrentRenderingInstance: setCurrentRenderingInstance$1, isVNode: isVNode$2, normalizeVNode: normalizeVNode$1, getComponentPublicInstance, ensureValidVNode: ensureValidVNode$1, pushWarningContext: /* @__PURE__ */ __name(function(e4) {
      st2.push(e4);
    }, "pushWarningContext"), popWarningContext: /* @__PURE__ */ __name(function() {
      st2.pop();
    }, "popWarningContext") };
    Rn = "undefined" != typeof document ? document : null;
    An = Rn && Rn.createElement("template");
    xn = { insert: /* @__PURE__ */ __name((e4, t5, n2) => {
      t5.insertBefore(e4, n2 || null);
    }, "insert"), remove: /* @__PURE__ */ __name((e4) => {
      const t5 = e4.parentNode;
      t5 && t5.removeChild(e4);
    }, "remove"), createElement: /* @__PURE__ */ __name((e4, t5, n2, r4) => {
      const o4 = "svg" === t5 ? Rn.createElementNS("http://www.w3.org/2000/svg", e4) : "mathml" === t5 ? Rn.createElementNS("http://www.w3.org/1998/Math/MathML", e4) : n2 ? Rn.createElement(e4, { is: n2 }) : Rn.createElement(e4);
      return "select" === e4 && r4 && null != r4.multiple && o4.setAttribute("multiple", r4.multiple), o4;
    }, "createElement"), createText: /* @__PURE__ */ __name((e4) => Rn.createTextNode(e4), "createText"), createComment: /* @__PURE__ */ __name((e4) => Rn.createComment(e4), "createComment"), setText: /* @__PURE__ */ __name((e4, t5) => {
      e4.nodeValue = t5;
    }, "setText"), setElementText: /* @__PURE__ */ __name((e4, t5) => {
      e4.textContent = t5;
    }, "setElementText"), parentNode: /* @__PURE__ */ __name((e4) => e4.parentNode, "parentNode"), nextSibling: /* @__PURE__ */ __name((e4) => e4.nextSibling, "nextSibling"), querySelector: /* @__PURE__ */ __name((e4) => Rn.querySelector(e4), "querySelector"), setScopeId(e4, t5) {
      e4.setAttribute(t5, "");
    }, insertStaticContent(e4, t5, n2, r4, o4, s4) {
      const i4 = n2 ? n2.previousSibling : t5.lastChild;
      if (o4 && (o4 === s4 || o4.nextSibling)) for (; t5.insertBefore(o4.cloneNode(true), n2), o4 !== s4 && (o4 = o4.nextSibling); ) ;
      else {
        An.innerHTML = "svg" === r4 ? `<svg>${e4}</svg>` : "mathml" === r4 ? `<math>${e4}</math>` : e4;
        const o5 = An.content;
        if ("svg" === r4 || "mathml" === r4) {
          const e5 = o5.firstChild;
          for (; e5.firstChild; ) o5.appendChild(e5.firstChild);
          o5.removeChild(e5);
        }
        t5.insertBefore(o5, n2);
      }
      return [i4 ? i4.nextSibling : t5.firstChild, n2 ? n2.previousSibling : t5.lastChild];
    } };
    En = "transition";
    Pn = "animation";
    $n = Symbol("_vtc");
    Nn = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
    On = n({}, Tt2, Nn);
    Vn = ((e4) => (e4.displayName = "Transition", e4.props = On, e4))((e4, { slots: t5 }) => h2(wt2, resolveTransitionProps(e4), t5));
    callHook = /* @__PURE__ */ __name((e4, t5 = []) => {
      i(e4) ? e4.forEach((e5) => e5(...t5)) : e4 && e4(...t5);
    }, "callHook");
    hasExplicitCallback = /* @__PURE__ */ __name((e4) => !!e4 && (i(e4) ? e4.some((e5) => e5.length > 1) : e4.length > 1), "hasExplicitCallback");
    __name(resolveTransitionProps, "resolveTransitionProps");
    __name(NumberOf, "NumberOf");
    __name(addTransitionClass, "addTransitionClass");
    __name(removeTransitionClass, "removeTransitionClass");
    __name(nextFrame, "nextFrame");
    Hn = 0;
    __name(whenTransitionEnds, "whenTransitionEnds");
    __name(getTransitionInfo, "getTransitionInfo");
    __name(getTimeout, "getTimeout");
    __name(toMs, "toMs");
    __name(forceReflow, "forceReflow");
    Mn = Symbol("_vod");
    In = Symbol("_vsh");
    Dn = { name: "show", beforeMount(e4, { value: t5 }, { transition: n2 }) {
      e4[Mn] = "none" === e4.style.display ? "" : e4.style.display, n2 && t5 ? n2.beforeEnter(e4) : setDisplay(e4, t5);
    }, mounted(e4, { value: t5 }, { transition: n2 }) {
      n2 && t5 && n2.enter(e4);
    }, updated(e4, { value: t5, oldValue: n2 }, { transition: r4 }) {
      !t5 != !n2 && (r4 ? t5 ? (r4.beforeEnter(e4), setDisplay(e4, true), r4.enter(e4)) : r4.leave(e4, () => {
        setDisplay(e4, false);
      }) : setDisplay(e4, t5));
    }, beforeUnmount(e4, { value: t5 }) {
      setDisplay(e4, t5);
    } };
    __name(setDisplay, "setDisplay");
    Ln = Symbol("");
    __name(setVarsOnVNode, "setVarsOnVNode");
    __name(setVarsOnNode, "setVarsOnNode");
    jn = /(?:^|;)\s*display\s*:/;
    Fn = /\s*!important$/;
    __name(setStyle, "setStyle");
    Bn = ["Webkit", "Moz", "ms"];
    Un = {};
    Wn = "http://www.w3.org/1999/xlink";
    __name(patchAttr, "patchAttr");
    __name(patchDOMProp, "patchDOMProp");
    __name(addEventListener, "addEventListener");
    zn = Symbol("_vei");
    __name(patchEvent, "patchEvent");
    qn = /(?:Once|Passive|Capture)$/;
    Kn = 0;
    Jn = Promise.resolve();
    getNow = /* @__PURE__ */ __name(() => Kn || (Jn.then(() => Kn = 0), Kn = Date.now()), "getNow");
    isNativeOn = /* @__PURE__ */ __name((e4) => 111 === e4.charCodeAt(0) && 110 === e4.charCodeAt(1) && e4.charCodeAt(2) > 96 && e4.charCodeAt(2) < 123, "isNativeOn");
    patchProp = /* @__PURE__ */ __name((e4, t5, n2, r4, o4, s4) => {
      const i4 = "svg" === o4;
      "class" === t5 ? (function(e5, t6, n3) {
        const r5 = e5[$n];
        r5 && (t6 = (t6 ? [t6, ...r5] : [...r5]).join(" ")), null == t6 ? e5.removeAttribute("class") : n3 ? e5.setAttribute("class", t6) : e5.className = t6;
      })(e4, r4, i4) : "style" === t5 ? (function(e5, t6, n3) {
        const r5 = e5.style, o5 = isString(n3);
        let s5 = false;
        if (n3 && !o5) {
          if (t6) if (isString(t6)) for (const e6 of t6.split(";")) {
            const t7 = e6.slice(0, e6.indexOf(":")).trim();
            null == n3[t7] && setStyle(r5, t7, "");
          }
          else for (const e6 in t6) null == n3[e6] && setStyle(r5, e6, "");
          for (const e6 in n3) "display" === e6 && (s5 = true), setStyle(r5, e6, n3[e6]);
        } else if (o5) {
          if (t6 !== n3) {
            const e6 = r5[Ln];
            e6 && (n3 += ";" + e6), r5.cssText = n3, s5 = jn.test(n3);
          }
        } else t6 && e5.removeAttribute("style");
        Mn in e5 && (e5[Mn] = s5 ? r5.display : "", e5[In] && (r5.display = "none"));
      })(e4, n2, r4) : isOn(t5) ? isModelListener(t5) || patchEvent(e4, t5, 0, r4, s4) : ("." === t5[0] ? (t5 = t5.slice(1), 1) : "^" === t5[0] ? (t5 = t5.slice(1), 0) : (function(e5, t6, n3, r5) {
        if (r5) return "innerHTML" === t6 || "textContent" === t6 || !!(t6 in e5 && isNativeOn(t6) && isFunction(n3));
        if ("spellcheck" === t6 || "draggable" === t6 || "translate" === t6 || "autocorrect" === t6) return false;
        if ("sandbox" === t6 && "IFRAME" === e5.tagName) return false;
        if ("form" === t6) return false;
        if ("list" === t6 && "INPUT" === e5.tagName) return false;
        if ("type" === t6 && "TEXTAREA" === e5.tagName) return false;
        if ("width" === t6 || "height" === t6) {
          const t7 = e5.tagName;
          if ("IMG" === t7 || "VIDEO" === t7 || "CANVAS" === t7 || "SOURCE" === t7) return false;
        }
        if (isNativeOn(t6) && isString(n3)) return false;
        return t6 in e5;
      })(e4, t5, r4, i4)) ? (patchDOMProp(e4, t5, r4), e4.tagName.includes("-") || "value" !== t5 && "checked" !== t5 && "selected" !== t5 || patchAttr(e4, t5, r4, i4, 0, "value" !== t5)) : !e4._isVueCE || !/[A-Z]/.test(t5) && isString(r4) ? ("true-value" === t5 ? e4._trueValue = r4 : "false-value" === t5 && (e4._falseValue = r4), patchAttr(e4, t5, r4, i4)) : patchDOMProp(e4, p(t5), r4, 0, t5);
    }, "patchProp");
    Gn = {};
    __name(defineCustomElement, "defineCustomElement");
    Zn = "undefined" != typeof HTMLElement ? HTMLElement : class {
    };
    VueElement = class _VueElement extends Zn {
      static {
        __name(this, "VueElement");
      }
      constructor(e4, t5 = {}, n2 = createApp) {
        super(), this._def = e4, this._props = t5, this._createApp = n2, this._isVueCE = true, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = false, this._resolved = false, this._patching = false, this._dirty = false, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && n2 !== createApp ? this._root = this.shadowRoot : false !== e4.shadowRoot ? (this.attachShadow(n({}, e4.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot) : this._root = this;
      }
      connectedCallback() {
        if (!this.isConnected) return;
        this.shadowRoot || this._resolved || this._parseSlots(), this._connected = true;
        let e4 = this;
        for (; e4 = e4 && (e4.parentNode || e4.host); ) if (e4 instanceof _VueElement) {
          this._parent = e4;
          break;
        }
        this._instance || (this._resolved ? this._mount(this._def) : e4 && e4._pendingResolve ? this._pendingResolve = e4._pendingResolve.then(() => {
          this._pendingResolve = void 0, this._resolveDef();
        }) : this._resolveDef());
      }
      _setParent(e4 = this._parent) {
        e4 && (this._instance.parent = e4._instance, this._inheritParentContext(e4));
      }
      _inheritParentContext(e4 = this._parent) {
        e4 && this._app && Object.setPrototypeOf(this._app._context.provides, e4._instance.provides);
      }
      disconnectedCallback() {
        this._connected = false, nextTick2(() => {
          this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
        });
      }
      _processMutations(e4) {
        for (const t5 of e4) this._setAttr(t5.attributeName);
      }
      _resolveDef() {
        if (this._pendingResolve) return;
        for (let e5 = 0; e5 < this.attributes.length; e5++) this._setAttr(this.attributes[e5].name);
        this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: true });
        const resolve2 = /* @__PURE__ */ __name((e5, t5 = false) => {
          this._resolved = true, this._pendingResolve = void 0;
          const { props: n2, styles: r4 } = e5;
          let o4;
          if (n2 && !i(n2)) for (const e6 in n2) {
            const t6 = n2[e6];
            (t6 === Number || t6 && t6.type === Number) && (e6 in this._props && (this._props[e6] = toNumber(this._props[e6])), (o4 || (o4 = /* @__PURE__ */ Object.create(null)))[p(e6)] = true);
          }
          this._numberProps = o4, this._resolveProps(e5), this.shadowRoot && this._applyStyles(r4), this._mount(e5);
        }, "resolve"), e4 = this._def.__asyncLoader;
        e4 ? this._pendingResolve = e4().then((e5) => {
          e5.configureApp = this._def.configureApp, resolve2(this._def = e5, true);
        }) : resolve2(this._def);
      }
      _mount(e4) {
        this._app = this._createApp(e4), this._inheritParentContext(), e4.configureApp && e4.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
        const t5 = this._instance && this._instance.exposed;
        if (t5) for (const e5 in t5) hasOwn(this, e5) || Object.defineProperty(this, e5, { get: /* @__PURE__ */ __name(() => unref2(t5[e5]), "get") });
      }
      _resolveProps(e4) {
        const { props: t5 } = e4, n2 = i(t5) ? t5 : Object.keys(t5 || {});
        for (const e5 of Object.keys(this)) "_" !== e5[0] && n2.includes(e5) && this._setProp(e5, this[e5]);
        for (const e5 of n2.map(p)) Object.defineProperty(this, e5, { get() {
          return this._getProp(e5);
        }, set(t6) {
          this._setProp(e5, t6, true, !this._patching);
        } });
      }
      _setAttr(e4) {
        if (e4.startsWith("data-v-")) return;
        const t5 = this.hasAttribute(e4);
        let n2 = t5 ? this.getAttribute(e4) : Gn;
        const r4 = p(e4);
        t5 && this._numberProps && this._numberProps[r4] && (n2 = toNumber(n2)), this._setProp(r4, n2, false, true);
      }
      _getProp(e4) {
        return this._props[e4];
      }
      _setProp(e4, t5, n2 = true, r4 = false) {
        if (t5 !== this._props[e4] && (this._dirty = true, t5 === Gn ? delete this._props[e4] : (this._props[e4] = t5, "key" === e4 && this._app && (this._app._ceVNode.key = t5)), r4 && this._instance && this._update(), n2)) {
          const n3 = this._ob;
          n3 && (this._processMutations(n3.takeRecords()), n3.disconnect()), true === t5 ? this.setAttribute(d(e4), "") : "string" == typeof t5 || "number" == typeof t5 ? this.setAttribute(d(e4), t5 + "") : t5 || this.removeAttribute(d(e4)), n3 && n3.observe(this, { attributes: true });
        }
      }
      _update() {
        const e4 = this._createVNode();
        this._app && (e4.appContext = this._app._context), render(e4, this._root);
      }
      _createVNode() {
        const e4 = {};
        this.shadowRoot || (e4.onVnodeMounted = e4.onVnodeUpdated = this._renderSlots.bind(this));
        const t5 = createVNode(this._def, n(e4, this._props));
        return this._instance || (t5.ce = (e5) => {
          this._instance = e5, e5.ce = this, e5.isCE = true;
          const dispatch = /* @__PURE__ */ __name((e6, t6) => {
            this.dispatchEvent(new CustomEvent(e6, isPlainObject(t6[0]) ? n({ detail: t6 }, t6[0]) : { detail: t6 }));
          }, "dispatch");
          e5.emit = (e6, ...t6) => {
            dispatch(e6, t6), d(e6) !== e6 && dispatch(d(e6), t6);
          }, this._setParent();
        }), t5;
      }
      _applyStyles(e4, t5) {
        if (!e4) return;
        if (t5) {
          if (t5 === this._def || this._styleChildren.has(t5)) return;
          this._styleChildren.add(t5);
        }
        const n2 = this._nonce;
        for (let t6 = e4.length - 1; t6 >= 0; t6--) {
          const r4 = document.createElement("style");
          n2 && r4.setAttribute("nonce", n2), r4.textContent = e4[t6], this.shadowRoot.prepend(r4);
        }
      }
      _parseSlots() {
        const e4 = this._slots = {};
        let t5;
        for (; t5 = this.firstChild; ) {
          const n2 = 1 === t5.nodeType && t5.getAttribute("slot") || "default";
          (e4[n2] || (e4[n2] = [])).push(t5), this.removeChild(t5);
        }
      }
      _renderSlots() {
        const e4 = this._getSlots(), t5 = this._instance.type.__scopeId;
        for (let n2 = 0; n2 < e4.length; n2++) {
          const r4 = e4[n2], o4 = r4.getAttribute("name") || "default", s4 = this._slots[o4], i4 = r4.parentNode;
          if (s4) for (const e5 of s4) {
            if (t5 && 1 === e5.nodeType) {
              const n3 = t5 + "-s", r5 = document.createTreeWalker(e5, 1);
              let o5;
              for (e5.setAttribute(n3, ""); o5 = r5.nextNode(); ) o5.setAttribute(n3, "");
            }
            i4.insertBefore(e5, r4);
          }
          else for (; r4.firstChild; ) i4.insertBefore(r4.firstChild, r4);
          i4.removeChild(r4);
        }
      }
      _getSlots() {
        const e4 = [this];
        this._teleportTargets && e4.push(...this._teleportTargets);
        const t5 = /* @__PURE__ */ new Set();
        for (const n2 of e4) {
          const e5 = n2.querySelectorAll("slot");
          for (let n3 = 0; n3 < e5.length; n3++) t5.add(e5[n3]);
        }
        return Array.from(t5);
      }
      _injectChildStyle(e4) {
        this._applyStyles(e4.styles, e4);
      }
      _beginPatch() {
        this._patching = true, this._dirty = false;
      }
      _endPatch() {
        this._patching = false, this._dirty && this._instance && this._update();
      }
      _removeChildStyle(e4) {
      }
    };
    __name(useHost, "useHost");
    Xn = /* @__PURE__ */ new WeakMap();
    Yn = /* @__PURE__ */ new WeakMap();
    Qn = Symbol("_moveCb");
    er = Symbol("_enterCb");
    tr = ((e4) => (delete e4.props.mode, e4))({ name: "TransitionGroup", props: n({}, On, { tag: String, moveClass: String }), setup(e4, { slots: t5 }) {
      const n2 = getCurrentInstance(), r4 = useTransitionState();
      let o4, s4;
      return Mt2(() => {
        if (!o4.length) return;
        const t6 = e4.moveClass || `${e4.name || "v"}-move`;
        if (!(function(e5, t7, n3) {
          const r6 = e5.cloneNode(), o5 = e5[$n];
          o5 && o5.forEach((e6) => {
            e6.split(/\s+/).forEach((e7) => e7 && r6.classList.remove(e7));
          });
          n3.split(/\s+/).forEach((e6) => e6 && r6.classList.add(e6)), r6.style.display = "none";
          const s5 = 1 === t7.nodeType ? t7 : t7.parentNode;
          s5.appendChild(r6);
          const { hasTransform: i4 } = getTransitionInfo(r6);
          return s5.removeChild(r6), i4;
        })(o4[0].el, n2.vnode.el, t6)) return void (o4 = []);
        o4.forEach(callPendingCbs), o4.forEach(recordPosition);
        const r5 = o4.filter(applyTranslation);
        forceReflow(n2.vnode.el), r5.forEach((e5) => {
          const n3 = e5.el, r6 = n3.style;
          addTransitionClass(n3, t6), r6.transform = r6.webkitTransform = r6.transitionDuration = "";
          const o5 = n3[Qn] = (e6) => {
            e6 && e6.target !== n3 || e6 && !e6.propertyName.endsWith("transform") || (n3.removeEventListener("transitionend", o5), n3[Qn] = null, removeTransitionClass(n3, t6));
          };
          n3.addEventListener("transitionend", o5);
        }), o4 = [];
      }), () => {
        const i4 = toRaw(e4), a6 = resolveTransitionProps(i4);
        let l3 = i4.tag || on3;
        if (o4 = [], s4) for (let e5 = 0; e5 < s4.length; e5++) {
          const t6 = s4[e5];
          t6.el && t6.el instanceof Element && (o4.push(t6), setTransitionHooks(t6, resolveTransitionHooks(t6, a6, r4, n2)), Xn.set(t6, { left: t6.el.offsetLeft, top: t6.el.offsetTop }));
        }
        s4 = t5.default ? getTransitionRawChildren(t5.default()) : [];
        for (let e5 = 0; e5 < s4.length; e5++) {
          const t6 = s4[e5];
          null != t6.key && setTransitionHooks(t6, resolveTransitionHooks(t6, a6, r4, n2));
        }
        return createVNode(l3, null, s4);
      };
    } });
    __name(callPendingCbs, "callPendingCbs");
    __name(recordPosition, "recordPosition");
    __name(applyTranslation, "applyTranslation");
    getModelAssigner = /* @__PURE__ */ __name((e4) => {
      const t5 = e4.props["onUpdate:modelValue"] || false;
      return i(t5) ? (e5) => invokeArrayFns(t5, e5) : t5;
    }, "getModelAssigner");
    __name(onCompositionStart, "onCompositionStart");
    __name(onCompositionEnd, "onCompositionEnd");
    nr = Symbol("_assign");
    __name(castValue, "castValue");
    rr = { created(e4, { modifiers: { lazy: t5, trim: n2, number: r4 } }, o4) {
      e4[nr] = getModelAssigner(o4);
      const s4 = r4 || o4.props && "number" === o4.props.type;
      addEventListener(e4, t5 ? "change" : "input", (t6) => {
        t6.target.composing || e4[nr](castValue(e4.value, n2, s4));
      }), (n2 || s4) && addEventListener(e4, "change", () => {
        e4.value = castValue(e4.value, n2, s4);
      }), t5 || (addEventListener(e4, "compositionstart", onCompositionStart), addEventListener(e4, "compositionend", onCompositionEnd), addEventListener(e4, "change", onCompositionEnd));
    }, mounted(e4, { value: t5 }) {
      e4.value = null == t5 ? "" : t5;
    }, beforeUpdate(e4, { value: t5, oldValue: n2, modifiers: { lazy: r4, trim: o4, number: s4 } }, i4) {
      if (e4[nr] = getModelAssigner(i4), e4.composing) return;
      const a6 = null == t5 ? "" : t5;
      if ((!s4 && "number" !== e4.type || /^0\d/.test(e4.value) ? e4.value : looseToNumber(e4.value)) !== a6) {
        if (document.activeElement === e4 && "range" !== e4.type) {
          if (r4 && t5 === n2) return;
          if (o4 && e4.value.trim() === a6) return;
        }
        e4.value = a6;
      }
    } };
    or = { deep: true, created(e4, t5, n2) {
      e4[nr] = getModelAssigner(n2), addEventListener(e4, "change", () => {
        const t6 = e4._modelValue, n3 = getValue(e4), r4 = e4.checked, o4 = e4[nr];
        if (i(t6)) {
          const e5 = looseIndexOf(t6, n3), s4 = -1 !== e5;
          if (r4 && !s4) o4(t6.concat(n3));
          else if (!r4 && s4) {
            const n4 = [...t6];
            n4.splice(e5, 1), o4(n4);
          }
        } else if (isSet(t6)) {
          const e5 = new Set(t6);
          r4 ? e5.add(n3) : e5.delete(n3), o4(e5);
        } else o4(getCheckboxValue(e4, r4));
      });
    }, mounted: setChecked, beforeUpdate(e4, t5, n2) {
      e4[nr] = getModelAssigner(n2), setChecked(e4, t5, n2);
    } };
    __name(setChecked, "setChecked");
    sr = { created(e4, { value: t5 }, n2) {
      e4.checked = looseEqual(t5, n2.props.value), e4[nr] = getModelAssigner(n2), addEventListener(e4, "change", () => {
        e4[nr](getValue(e4));
      });
    }, beforeUpdate(e4, { value: t5, oldValue: n2 }, r4) {
      e4[nr] = getModelAssigner(r4), t5 !== n2 && (e4.checked = looseEqual(t5, r4.props.value));
    } };
    ir = { deep: true, created(e4, { value: t5, modifiers: { number: n2 } }, r4) {
      const o4 = isSet(t5);
      addEventListener(e4, "change", () => {
        const t6 = Array.prototype.filter.call(e4.options, (e5) => e5.selected).map((e5) => n2 ? looseToNumber(getValue(e5)) : getValue(e5));
        e4[nr](e4.multiple ? o4 ? new Set(t6) : t6 : t6[0]), e4._assigning = true, nextTick2(() => {
          e4._assigning = false;
        });
      }), e4[nr] = getModelAssigner(r4);
    }, mounted(e4, { value: t5 }) {
      setSelected(e4, t5);
    }, beforeUpdate(e4, t5, n2) {
      e4[nr] = getModelAssigner(n2);
    }, updated(e4, { value: t5 }) {
      e4._assigning || setSelected(e4, t5);
    } };
    __name(setSelected, "setSelected");
    __name(getValue, "getValue");
    __name(getCheckboxValue, "getCheckboxValue");
    ar = { created(e4, t5, n2) {
      callModelHook(e4, t5, n2, null, "created");
    }, mounted(e4, t5, n2) {
      callModelHook(e4, t5, n2, null, "mounted");
    }, beforeUpdate(e4, t5, n2, r4) {
      callModelHook(e4, t5, n2, r4, "beforeUpdate");
    }, updated(e4, t5, n2, r4) {
      callModelHook(e4, t5, n2, r4, "updated");
    } };
    __name(resolveDynamicModel, "resolveDynamicModel");
    __name(callModelHook, "callModelHook");
    lr = ["ctrl", "shift", "alt", "meta"];
    cr = { stop: /* @__PURE__ */ __name((e4) => e4.stopPropagation(), "stop"), prevent: /* @__PURE__ */ __name((e4) => e4.preventDefault(), "prevent"), self: /* @__PURE__ */ __name((e4) => e4.target !== e4.currentTarget, "self"), ctrl: /* @__PURE__ */ __name((e4) => !e4.ctrlKey, "ctrl"), shift: /* @__PURE__ */ __name((e4) => !e4.shiftKey, "shift"), alt: /* @__PURE__ */ __name((e4) => !e4.altKey, "alt"), meta: /* @__PURE__ */ __name((e4) => !e4.metaKey, "meta"), left: /* @__PURE__ */ __name((e4) => "button" in e4 && 0 !== e4.button, "left"), middle: /* @__PURE__ */ __name((e4) => "button" in e4 && 1 !== e4.button, "middle"), right: /* @__PURE__ */ __name((e4) => "button" in e4 && 2 !== e4.button, "right"), exact: /* @__PURE__ */ __name((e4, t5) => lr.some((n2) => e4[`${n2}Key`] && !t5.includes(n2)), "exact") };
    ur = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" };
    pr = n({ patchProp }, xn);
    fr = false;
    __name(ensureRenderer, "ensureRenderer");
    __name(ensureHydrationRenderer, "ensureHydrationRenderer");
    render = /* @__PURE__ */ __name((...e4) => {
      ensureRenderer().render(...e4);
    }, "render");
    createApp = /* @__PURE__ */ __name((...e4) => {
      const t5 = ensureRenderer().createApp(...e4), { mount: n2 } = t5;
      return t5.mount = (e5) => {
        const r4 = normalizeContainer(e5);
        if (!r4) return;
        const o4 = t5._component;
        isFunction(o4) || o4.render || o4.template || (o4.template = r4.innerHTML), 1 === r4.nodeType && (r4.textContent = "");
        const s4 = n2(r4, false, resolveRootNamespace(r4));
        return r4 instanceof Element && (r4.removeAttribute("v-cloak"), r4.setAttribute("data-v-app", "")), s4;
      }, t5;
    }, "createApp");
    createSSRApp = /* @__PURE__ */ __name((...e4) => {
      const t5 = ensureHydrationRenderer().createApp(...e4), { mount: n2 } = t5;
      return t5.mount = (e5) => {
        const t6 = normalizeContainer(e5);
        if (t6) return n2(t6, true, resolveRootNamespace(t6));
      }, t5;
    }, "createSSRApp");
    __name(resolveRootNamespace, "resolveRootNamespace");
    __name(normalizeContainer, "normalizeContainer");
    hr = false;
    initDirectivesForSSR = /* @__PURE__ */ __name(() => {
      hr || (hr = true, rr.getSSRProps = ({ value: e4 }) => ({ value: e4 }), sr.getSSRProps = ({ value: e4 }, t5) => {
        if (t5.props && looseEqual(t5.props.value, e4)) return { checked: true };
      }, or.getSSRProps = ({ value: e4 }, t5) => {
        if (i(e4)) {
          if (t5.props && looseIndexOf(e4, t5.props.value) > -1) return { checked: true };
        } else if (isSet(e4)) {
          if (t5.props && e4.has(t5.props.value)) return { checked: true };
        } else if (e4) return { checked: true };
      }, ar.getSSRProps = (e4, t5) => {
        if ("string" != typeof t5.type) return;
        const n2 = resolveDynamicModel(t5.type.toUpperCase(), t5.props && t5.props.type);
        return n2.getSSRProps ? n2.getSSRProps(e4, t5) : void 0;
      }, Dn.getSSRProps = ({ value: e4 }) => {
        if (!e4) return { style: { display: "none" } };
      });
    }, "initDirectivesForSSR");
    gr = Object.freeze(Object.defineProperty({ __proto__: null, BaseTransition: wt2, BaseTransitionPropsValidators: Tt2, Comment: an2, DeprecationTypes: null, EffectScope, ErrorCodes: { SETUP_FUNCTION: 0, 0: "SETUP_FUNCTION", RENDER_FUNCTION: 1, 1: "RENDER_FUNCTION", NATIVE_EVENT_HANDLER: 5, 5: "NATIVE_EVENT_HANDLER", COMPONENT_EVENT_HANDLER: 6, 6: "COMPONENT_EVENT_HANDLER", VNODE_HOOK: 7, 7: "VNODE_HOOK", DIRECTIVE_HOOK: 8, 8: "DIRECTIVE_HOOK", TRANSITION_HOOK: 9, 9: "TRANSITION_HOOK", APP_ERROR_HANDLER: 10, 10: "APP_ERROR_HANDLER", APP_WARN_HANDLER: 11, 11: "APP_WARN_HANDLER", FUNCTION_REF: 12, 12: "FUNCTION_REF", ASYNC_COMPONENT_LOADER: 13, 13: "ASYNC_COMPONENT_LOADER", SCHEDULER: 14, 14: "SCHEDULER", COMPONENT_UPDATE: 15, 15: "COMPONENT_UPDATE", APP_UNMOUNT_CLEANUP: 16, 16: "APP_UNMOUNT_CLEANUP" }, ErrorTypeStrings: Sn, Fragment: on3, KeepAlive: Nt2, ReactiveEffect, Static: ln2, Suspense: rn2, Teleport: bt2, Text: sn2, TrackOpTypes: { GET: "get", HAS: "has", ITERATE: "iterate" }, Transition: Vn, TransitionGroup: tr, TriggerOpTypes: { SET: "set", ADD: "add", DELETE: "delete", CLEAR: "clear" }, VueElement, assertNumber: /* @__PURE__ */ __name(function(e4, t5) {
    }, "assertNumber"), callWithAsyncErrorHandling, callWithErrorHandling, camelize: p, capitalize: f, cloneVNode, compatUtils: null, computed, createApp, createBlock, createCommentVNode: /* @__PURE__ */ __name(function(e4 = "", t5 = false) {
      return t5 ? (openBlock(), createBlock(an2, null, e4)) : createVNode(an2, null, e4);
    }, "createCommentVNode"), createElementBlock: /* @__PURE__ */ __name(function(e4, t5, n2, r4, o4, s4) {
      return setupBlock(createBaseVNode(e4, t5, n2, r4, o4, s4, true));
    }, "createElementBlock"), createElementVNode: createBaseVNode, createHydrationRenderer, createPropsRestProxy: /* @__PURE__ */ __name(function(e4, t5) {
      const n2 = {};
      for (const r4 in e4) t5.includes(r4) || Object.defineProperty(n2, r4, { enumerable: true, get: /* @__PURE__ */ __name(() => e4[r4], "get") });
      return n2;
    }, "createPropsRestProxy"), createRenderer, createSSRApp, createSlots: /* @__PURE__ */ __name(function(e4, t5) {
      for (let n2 = 0; n2 < t5.length; n2++) {
        const r4 = t5[n2];
        if (i(r4)) for (let t6 = 0; t6 < r4.length; t6++) e4[r4[t6].name] = r4[t6].fn;
        else r4 && (e4[r4.name] = r4.key ? (...e5) => {
          const t6 = r4.fn(...e5);
          return t6 && (t6.key = r4.key), t6;
        } : r4.fn);
      }
      return e4;
    }, "createSlots"), createStaticVNode: /* @__PURE__ */ __name(function(e4, t5) {
      const n2 = createVNode(ln2, null, e4);
      return n2.staticCount = t5, n2;
    }, "createStaticVNode"), createTextVNode, createVNode, customRef, defineAsyncComponent: /* @__PURE__ */ __name(function(e4) {
      isFunction(e4) && (e4 = { loader: e4 });
      const { loader: t5, loadingComponent: n2, errorComponent: r4, delay: o4 = 200, hydrate: s4, timeout: i4, suspensible: a6 = true, onError: l3 } = e4;
      let c4, u3 = null, p3 = 0;
      const load = /* @__PURE__ */ __name(() => {
        let e5;
        return u3 || (e5 = u3 = t5().catch((e6) => {
          if (e6 = e6 instanceof Error ? e6 : new Error(String(e6)), l3) return new Promise((t6, n3) => {
            l3(e6, () => t6((p3++, u3 = null, load())), () => n3(e6), p3 + 1);
          });
          throw e6;
        }).then((t6) => e5 !== u3 && u3 ? u3 : (t6 && (t6.__esModule || "Module" === t6[Symbol.toStringTag]) && (t6 = t6.default), c4 = t6, t6)));
      }, "load");
      return defineComponent({ name: "AsyncComponentWrapper", __asyncLoader: load, __asyncHydrate(e5, t6, n3) {
        let r5 = false;
        (t6.bu || (t6.bu = [])).push(() => r5 = true);
        const performHydrate = /* @__PURE__ */ __name(() => {
          r5 || n3();
        }, "performHydrate"), o5 = s4 ? () => {
          const n4 = s4(performHydrate, (t7) => (function(e6, t8) {
            if (isComment(e6) && "[" === e6.data) {
              let n5 = 1, r6 = e6.nextSibling;
              for (; r6; ) {
                if (1 === r6.nodeType) {
                  if (false === t8(r6)) break;
                } else if (isComment(r6)) if ("]" === r6.data) {
                  if (0 === --n5) break;
                } else "[" === r6.data && n5++;
                r6 = r6.nextSibling;
              }
            } else t8(e6);
          })(e5, t7));
          n4 && (t6.bum || (t6.bum = [])).push(n4);
        } : performHydrate;
        c4 ? o5() : load().then(() => !t6.isUnmounted && o5());
      }, get __asyncResolved() {
        return c4;
      }, setup() {
        const e5 = hn2;
        if (markAsyncBoundary(e5), c4) return () => createInnerComp(c4, e5);
        const onError = /* @__PURE__ */ __name((t7) => {
          u3 = null, handleError(t7, e5, 13, !r4);
        }, "onError");
        if (a6 && e5.suspense || _n) return load().then((t7) => () => createInnerComp(t7, e5)).catch((e6) => (onError(e6), () => r4 ? createVNode(r4, { error: e6 }) : null));
        const t6 = ref2(false), s5 = ref2(), l4 = ref2(!!o4);
        return o4 && setTimeout(() => {
          l4.value = false;
        }, o4), null != i4 && setTimeout(() => {
          if (!t6.value && !s5.value) {
            const e6 = new Error(`Async component timed out after ${i4}ms.`);
            onError(e6), s5.value = e6;
          }
        }, i4), load().then(() => {
          t6.value = true, e5.parent && isKeepAlive(e5.parent.vnode) && e5.parent.update();
        }).catch((e6) => {
          onError(e6), s5.value = e6;
        }), () => t6.value && c4 ? createInnerComp(c4, e5) : s5.value && r4 ? createVNode(r4, { error: s5.value }) : n2 && !l4.value ? createInnerComp(n2, e5) : void 0;
      } });
    }, "defineAsyncComponent"), defineComponent, defineCustomElement, defineEmits: /* @__PURE__ */ __name(function() {
      return null;
    }, "defineEmits"), defineExpose: /* @__PURE__ */ __name(function(e4) {
    }, "defineExpose"), defineModel: /* @__PURE__ */ __name(function() {
    }, "defineModel"), defineOptions: /* @__PURE__ */ __name(function(e4) {
    }, "defineOptions"), defineProps: /* @__PURE__ */ __name(function() {
      return null;
    }, "defineProps"), defineSSRCustomElement: /* @__PURE__ */ __name((e4, t5) => defineCustomElement(e4, t5, createSSRApp), "defineSSRCustomElement"), defineSlots: /* @__PURE__ */ __name(function() {
      return null;
    }, "defineSlots"), devtools: Tn, effect: /* @__PURE__ */ __name(function(e4, t5) {
      e4.effect instanceof ReactiveEffect && (e4 = e4.effect.fn);
      const n2 = new ReactiveEffect(e4);
      t5 && n(n2, t5);
      try {
        n2.run();
      } catch (e5) {
        throw n2.stop(), e5;
      }
      const r4 = n2.run.bind(n2);
      return r4.effect = n2, r4;
    }, "effect"), effectScope: /* @__PURE__ */ __name(function(e4) {
      return new EffectScope(e4);
    }, "effectScope"), getCurrentInstance, getCurrentScope, getCurrentWatcher: /* @__PURE__ */ __name(function() {
      return ot2;
    }, "getCurrentWatcher"), getTransitionRawChildren, guardReactiveProps, h: h2, handleError, hasInjectionContext, hydrate: /* @__PURE__ */ __name((...e4) => {
      ensureHydrationRenderer().hydrate(...e4);
    }, "hydrate"), hydrateOnIdle: /* @__PURE__ */ __name((e4 = 1e4) => (t5) => {
      const n2 = Pt2(t5, { timeout: e4 });
      return () => $t2(n2);
    }, "hydrateOnIdle"), hydrateOnInteraction: /* @__PURE__ */ __name((e4 = []) => (t5, n2) => {
      isString(e4) && (e4 = [e4]);
      let r4 = false;
      const doHydrate = /* @__PURE__ */ __name((e5) => {
        r4 || (r4 = true, teardown(), t5(), e5.target.dispatchEvent(new e5.constructor(e5.type, e5)));
      }, "doHydrate"), teardown = /* @__PURE__ */ __name(() => {
        n2((t6) => {
          for (const n3 of e4) t6.removeEventListener(n3, doHydrate);
        });
      }, "teardown");
      return n2((t6) => {
        for (const n3 of e4) t6.addEventListener(n3, doHydrate, { once: true });
      }), teardown;
    }, "hydrateOnInteraction"), hydrateOnMediaQuery: /* @__PURE__ */ __name((e4) => (t5) => {
      if (e4) {
        const n2 = matchMedia(e4);
        if (!n2.matches) return n2.addEventListener("change", t5, { once: true }), () => n2.removeEventListener("change", t5);
        t5();
      }
    }, "hydrateOnMediaQuery"), hydrateOnVisible: /* @__PURE__ */ __name((e4) => (t5, n2) => {
      const r4 = new IntersectionObserver((e5) => {
        for (const n3 of e5) if (n3.isIntersecting) {
          r4.disconnect(), t5();
          break;
        }
      }, e4);
      return n2((e5) => {
        if (e5 instanceof Element) return (function(e6) {
          const { top: t6, left: n3, bottom: r5, right: o4 } = e6.getBoundingClientRect(), { innerHeight: s4, innerWidth: i4 } = window;
          return (t6 > 0 && t6 < s4 || r5 > 0 && r5 < s4) && (n3 > 0 && n3 < i4 || o4 > 0 && o4 < i4);
        })(e5) ? (t5(), r4.disconnect(), false) : void r4.observe(e5);
      }), () => r4.disconnect();
    }, "hydrateOnVisible"), initCustomFormatter: /* @__PURE__ */ __name(function() {
    }, "initCustomFormatter"), initDirectivesForSSR, inject, isMemoSame, isProxy, isReactive, isReadonly, isRef: isRef2, isRuntimeOnly: /* @__PURE__ */ __name(() => !yn, "isRuntimeOnly"), isShallow, isVNode: isVNode$2, markRaw, mergeDefaults: /* @__PURE__ */ __name(function(e4, t5) {
      const n2 = normalizePropsOrEmits(e4);
      for (const e5 in t5) {
        if (e5.startsWith("__skip")) continue;
        let r4 = n2[e5];
        r4 ? i(r4) || isFunction(r4) ? r4 = n2[e5] = { type: r4, default: t5[e5] } : r4.default = t5[e5] : null === r4 && (r4 = n2[e5] = { default: t5[e5] }), r4 && t5[`__skip_${e5}`] && (r4.skipFactory = true);
      }
      return n2;
    }, "mergeDefaults"), mergeModels: /* @__PURE__ */ __name(function(e4, t5) {
      return e4 && t5 ? i(e4) && i(t5) ? e4.concat(t5) : n({}, normalizePropsOrEmits(e4), normalizePropsOrEmits(t5)) : e4 || t5;
    }, "mergeModels"), mergeProps, nextTick: nextTick2, nodeOps: xn, normalizeClass, normalizeProps, normalizeStyle, onActivated, onBeforeMount: Ot2, onBeforeUnmount: It2, onBeforeUpdate: Ht2, onDeactivated, onErrorCaptured, onMounted: Vt2, onRenderTracked: Ft2, onRenderTriggered: jt2, onScopeDispose: /* @__PURE__ */ __name(function(e4, t5 = false) {
      Re2 && Re2.cleanups.push(e4);
    }, "onScopeDispose"), onServerPrefetch: Lt2, onUnmounted: Dt2, onUpdated: Mt2, onWatcherCleanup, openBlock, patchProp, popScopeId: /* @__PURE__ */ __name(function() {
      yt2 = null;
    }, "popScopeId"), provide, proxyRefs, pushScopeId: /* @__PURE__ */ __name(function(e4) {
      yt2 = e4;
    }, "pushScopeId"), queuePostFlushCb, reactive, readonly, ref: ref2, registerRuntimeCompiler: /* @__PURE__ */ __name(function(e4) {
      yn = e4, vn = /* @__PURE__ */ __name((e5) => {
        e5.render._rc && (e5.withProxy = new Proxy(e5.ctx, qt2));
      }, "vn");
    }, "registerRuntimeCompiler"), render, renderList: /* @__PURE__ */ __name(function(e4, t5, n2, r4) {
      let o4;
      const s4 = n2 && n2[r4], i4 = i(e4);
      if (i4 || isString(e4)) {
        let n3 = false, r5 = false;
        i4 && isReactive(e4) && (n3 = !isShallow(e4), r5 = isReadonly(e4), e4 = shallowReadArray(e4)), o4 = new Array(e4.length);
        for (let i5 = 0, a6 = e4.length; i5 < a6; i5++) o4[i5] = t5(n3 ? r5 ? toReadonly(toReactive(e4[i5])) : toReactive(e4[i5]) : e4[i5], i5, void 0, s4 && s4[i5]);
      } else if ("number" == typeof e4) {
        o4 = new Array(e4);
        for (let n3 = 0; n3 < e4; n3++) o4[n3] = t5(n3 + 1, n3, void 0, s4 && s4[n3]);
      } else if (isObject(e4)) if (e4[Symbol.iterator]) o4 = Array.from(e4, (e5, n3) => t5(e5, n3, void 0, s4 && s4[n3]));
      else {
        const n3 = Object.keys(e4);
        o4 = new Array(n3.length);
        for (let r5 = 0, i5 = n3.length; r5 < i5; r5++) {
          const i6 = n3[r5];
          o4[r5] = t5(e4[i6], i6, r5, s4 && s4[r5]);
        }
      }
      else o4 = [];
      return n2 && (n2[r4] = o4), o4;
    }, "renderList"), renderSlot: /* @__PURE__ */ __name(function(e4, t5, n2 = {}, r4, o4) {
      if (mt2.ce || mt2.parent && isAsyncWrapper(mt2.parent) && mt2.parent.ce) {
        const e5 = Object.keys(n2).length > 0;
        return "default" !== t5 && (n2.name = t5), openBlock(), createBlock(on3, null, [createVNode("slot", n2, r4 && r4())], e5 ? -2 : 64);
      }
      let s4 = e4[t5];
      s4 && s4._c && (s4._d = false), openBlock();
      const i4 = s4 && ensureValidVNode$1(s4(n2)), a6 = n2.key || i4 && i4.key, l3 = createBlock(on3, { key: (a6 && !isSymbol(a6) ? a6 : `_${t5}`) + (!i4 && r4 ? "_fb" : "") }, i4 || (r4 ? r4() : []), i4 && 1 === e4._ ? 64 : -2);
      return !o4 && l3.scopeId && (l3.slotScopeIds = [l3.scopeId + "-s"]), s4 && s4._c && (s4._d = true), l3;
    }, "renderSlot"), resolveComponent: /* @__PURE__ */ __name(function(e4, t5) {
      return resolveAsset(Bt2, e4, true, t5) || e4;
    }, "resolveComponent"), resolveDirective: /* @__PURE__ */ __name(function(e4) {
      return resolveAsset("directives", e4);
    }, "resolveDirective"), resolveDynamicComponent: /* @__PURE__ */ __name(function(e4) {
      return isString(e4) ? resolveAsset(Bt2, e4, false) || e4 : e4 || Ut2;
    }, "resolveDynamicComponent"), resolveFilter: null, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, shallowReactive, shallowReadonly, shallowRef, ssrContextKey: Xt2, ssrUtils: wn, stop: /* @__PURE__ */ __name(function(e4) {
      e4.effect.stop();
    }, "stop"), toDisplayString, toHandlerKey: u, toHandlers: /* @__PURE__ */ __name(function(e4, t5) {
      const n2 = {};
      for (const r4 in e4) n2[t5 && /[A-Z]/.test(r4) ? `on:${r4}` : u(r4)] = e4[r4];
      return n2;
    }, "toHandlers"), toRaw, toRef: /* @__PURE__ */ __name(function(e4, t5, n2) {
      return isRef2(e4) ? e4 : isFunction(e4) ? new GetterRefImpl(e4) : isObject(e4) && arguments.length > 1 ? propertyToRef(e4, t5, n2) : ref2(e4);
    }, "toRef"), toRefs: /* @__PURE__ */ __name(function(e4) {
      const t5 = i(e4) ? new Array(e4.length) : {};
      for (const n2 in e4) t5[n2] = propertyToRef(e4, n2);
      return t5;
    }, "toRefs"), toValue, transformVNodeArgs: /* @__PURE__ */ __name(function(e4) {
    }, "transformVNodeArgs"), triggerRef: /* @__PURE__ */ __name(function(e4) {
      e4.dep && e4.dep.trigger();
    }, "triggerRef"), unref: unref2, useAttrs: /* @__PURE__ */ __name(function() {
      return getContext2().attrs;
    }, "useAttrs"), useCssModule: /* @__PURE__ */ __name(function(e4 = "$style") {
      {
        const t5 = getCurrentInstance();
        if (!t5) return t;
        const n2 = t5.type.__cssModules;
        if (!n2) return t;
        const r4 = n2[e4];
        return r4 || t;
      }
    }, "useCssModule"), useCssVars: /* @__PURE__ */ __name(function(e4) {
      const t5 = getCurrentInstance();
      if (!t5) return;
      const n2 = t5.ut = (n3 = e4(t5.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${t5.uid}"]`)).forEach((e5) => setVarsOnNode(e5, n3));
      }, setVars = /* @__PURE__ */ __name(() => {
        const r4 = e4(t5.proxy);
        t5.ce ? setVarsOnNode(t5.ce, r4) : setVarsOnVNode(t5.subTree, r4), n2(r4);
      }, "setVars");
      Ht2(() => {
        queuePostFlushCb(setVars);
      }), Vt2(() => {
        watch(setVars, NOOP, { flush: "post" });
        const e5 = new MutationObserver(setVars);
        e5.observe(t5.subTree.el.parentNode, { childList: true }), Dt2(() => e5.disconnect());
      });
    }, "useCssVars"), useHost, useId: /* @__PURE__ */ __name(function() {
      const e4 = getCurrentInstance();
      return e4 ? (e4.appContext.config.idPrefix || "v") + "-" + e4.ids[0] + e4.ids[1]++ : "";
    }, "useId"), useModel: /* @__PURE__ */ __name(function(e4, t5, n2 = t) {
      const r4 = getCurrentInstance(), o4 = p(t5), s4 = d(t5), i4 = getModelModifiers(e4, o4), a6 = customRef((i5, a7) => {
        let l3, c4, u3 = t;
        return watchSyncEffect(() => {
          const t6 = e4[o4];
          hasChanged(l3, t6) && (l3 = t6, a7());
        }), { get: /* @__PURE__ */ __name(() => (i5(), n2.get ? n2.get(l3) : l3), "get"), set(e5) {
          const i6 = n2.set ? n2.set(e5) : e5;
          if (!(hasChanged(i6, l3) || u3 !== t && hasChanged(e5, u3))) return;
          const p3 = r4.vnode.props;
          p3 && (t5 in p3 || o4 in p3 || s4 in p3) && (`onUpdate:${t5}` in p3 || `onUpdate:${o4}` in p3 || `onUpdate:${s4}` in p3) || (l3 = e5, a7()), r4.emit(`update:${t5}`, i6), hasChanged(e5, i6) && hasChanged(e5, u3) && !hasChanged(i6, c4) && a7(), u3 = e5, c4 = i6;
        } };
      });
      return a6[Symbol.iterator] = () => {
        let e5 = 0;
        return { next: /* @__PURE__ */ __name(() => e5 < 2 ? { value: e5++ ? i4 || t : a6, done: false } : { done: true }, "next") };
      }, a6;
    }, "useModel"), useSSRContext, useShadowRoot: /* @__PURE__ */ __name(function() {
      const e4 = useHost();
      return e4 && e4.shadowRoot;
    }, "useShadowRoot"), useSlots: /* @__PURE__ */ __name(function() {
      return getContext2().slots;
    }, "useSlots"), useTemplateRef: /* @__PURE__ */ __name(function(e4) {
      const t5 = getCurrentInstance(), n2 = shallowRef(null);
      if (t5) {
        const r4 = t5.refs === t ? t5.refs = {} : t5.refs;
        Object.defineProperty(r4, e4, { enumerable: true, get: /* @__PURE__ */ __name(() => n2.value, "get"), set: /* @__PURE__ */ __name((e5) => n2.value = e5, "set") });
      }
      return n2;
    }, "useTemplateRef"), useTransitionState, vModelCheckbox: or, vModelDynamic: ar, vModelRadio: sr, vModelSelect: ir, vModelText: rr, vShow: Dn, version: Cn, warn: kn, watch, watchEffect, watchPostEffect: /* @__PURE__ */ __name(function(e4, t5) {
      return doWatch(e4, null, { flush: "post" });
    }, "watchPostEffect"), watchSyncEffect, withAsyncContext: /* @__PURE__ */ __name(function(e4) {
      const t5 = getCurrentInstance();
      let n2 = e4();
      return unsetCurrentInstance(), isPromise(n2) && (n2 = n2.catch((e5) => {
        throw setCurrentInstance(t5), e5;
      })), [n2, () => setCurrentInstance(t5)];
    }, "withAsyncContext"), withCtx, withDefaults: /* @__PURE__ */ __name(function(e4, t5) {
      return null;
    }, "withDefaults"), withDirectives: /* @__PURE__ */ __name(function(e4, t5) {
      if (null === mt2) return e4;
      const n2 = getComponentPublicInstance(mt2), r4 = e4.dirs || (e4.dirs = []);
      for (let e5 = 0; e5 < t5.length; e5++) {
        let [o4, s4, i4, a6 = t] = t5[e5];
        o4 && (isFunction(o4) && (o4 = { mounted: o4, updated: o4 }), o4.deep && traverse(s4), r4.push({ dir: o4, instance: n2, value: s4, oldValue: void 0, arg: i4, modifiers: a6 }));
      }
      return e4;
    }, "withDirectives"), withKeys: /* @__PURE__ */ __name((e4, t5) => {
      const n2 = e4._withKeys || (e4._withKeys = {}), r4 = t5.join(".");
      return n2[r4] || (n2[r4] = (n3) => {
        if (!("key" in n3)) return;
        const r5 = d(n3.key);
        return t5.some((e5) => e5 === r5 || ur[e5] === r5) ? e4(n3) : void 0;
      });
    }, "withKeys"), withMemo: /* @__PURE__ */ __name(function(e4, t5, n2, r4) {
      const o4 = n2[r4];
      if (o4 && isMemoSame(o4, e4)) return o4;
      const s4 = t5();
      return s4.memo = e4.slice(), s4.cacheIndex = r4, n2[r4] = s4;
    }, "withMemo"), withModifiers: /* @__PURE__ */ __name((e4, t5) => {
      const n2 = e4._withMods || (e4._withMods = {}), r4 = t5.join(".");
      return n2[r4] || (n2[r4] = (n3, ...r5) => {
        for (let e5 = 0; e5 < t5.length; e5++) {
          const r6 = cr[t5[e5]];
          if (r6 && r6(n3, t5)) return;
        }
        return e4(n3, ...r5);
      });
    }, "withModifiers"), withScopeId: /* @__PURE__ */ __name((e4) => withCtx, "withScopeId") }, Symbol.toStringTag, { value: "Module" }));
    VueResolver = /* @__PURE__ */ __name((e4, t5) => isRef2(t5) ? toValue(t5) : t5, "VueResolver");
    mr = "usehead";
    __name(injectHead, "injectHead");
    __name(useHead2, "useHead");
    __name(createHead, "createHead");
    yr = makeMap(",key,ref,innerHTML,textContent,ref_key,ref_for");
    __name(ssrRenderAttrs, "ssrRenderAttrs");
    __name(ssrRenderDynamicAttr, "ssrRenderDynamicAttr");
    __name(ssrRenderClass, "ssrRenderClass");
    __name(ssrRenderStyle, "ssrRenderStyle");
    __name(ssrRenderComponent, "ssrRenderComponent");
    ({ ensureValidVNode: vr } = wn);
    __name(ssrInterpolate, "ssrInterpolate");
    {
      const e4 = getGlobalThis(), registerGlobalSetter = /* @__PURE__ */ __name((t5, n2) => {
        let r4;
        return (r4 = e4[t5]) || (r4 = e4[t5] = []), r4.push(n2), (e5) => {
          r4.length > 1 ? r4.forEach((t6) => t6(e5)) : r4[0](e5);
        };
      }, "registerGlobalSetter");
      registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e5) => e5), registerGlobalSetter("__VUE_SSR_SETTERS__", (e5) => e5);
    }
    __name(ssrRenderSuspense, "ssrRenderSuspense");
    ({ createComponentInstance: _r, setCurrentRenderingInstance: br, setupComponent: Cr, renderComponentRoot: kr, normalizeVNode: Sr, pushWarningContext: Tr, popWarningContext: wr } = wn);
    __name(createBuffer, "createBuffer");
    __name(renderComponentVNode, "renderComponentVNode");
    __name(renderComponentSubTree, "renderComponentSubTree");
    __name(renderVNode, "renderVNode");
    __name(renderVNodeChildren, "renderVNodeChildren");
    ({ isVNode: Rr } = wn);
    __name(nestedUnrollBuffer, "nestedUnrollBuffer");
    __name(unrollBuffer$1, "unrollBuffer$1");
    __name(unrollBufferSync$1, "unrollBufferSync$1");
    __name(renderToString, "renderToString");
    ({ isVNode: Ar } = wn);
    initDirectivesForSSR();
    xr = { meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }, { charset: "utf-8" }], link: [], style: [], script: [], noscript: [] };
    Er = { id: "teleports" };
    Pr = { id: "__nuxt-loader" };
    $r = `<div${propsToString({ id: "__nuxt" })}>`;
    Nr = "</div>";
    getPrecomputedDependencies = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_client_precomputed(), client_precomputed_exports)).then((e4) => e4.default || e4).then((e4) => "function" == typeof e4 ? e4() : e4), "getPrecomputedDependencies");
    Or = lazyCachedFunction(async () => {
      const e4 = await Promise.resolve().then(() => (init_server(), server_exports)).then(function(e5) {
        return e5.s;
      }).then((e5) => e5.default || e5);
      if (!e4) throw new Error("Server bundle is not available");
      return createRenderer$1(e4, { precomputed: await getPrecomputedDependencies(), manifest: void 0, renderToString: /* @__PURE__ */ __name(async function(e5, t5) {
        const n2 = await renderToString(e5, t5);
        return $r + n2 + Nr;
      }, "renderToString"), buildAssetsURL });
    });
    Vr = lazyCachedFunction(async () => {
      const e4 = await getPrecomputedDependencies(), t5 = await Promise.resolve().then(() => (init_virtual_spa_template(), virtual_spa_template_exports)).then((e5) => e5.template).catch(() => "").then((e5) => {
        {
          const t6 = `<div${propsToString(Pr)}>`;
          return $r + Nr + (e5 ? t6 + e5 + "</div>" : "");
        }
      }), o4 = createRenderer$1(() => () => {
      }, { precomputed: e4, manifest: void 0, renderToString: /* @__PURE__ */ __name(() => t5, "renderToString"), buildAssetsURL }), s4 = await o4.renderToString({});
      return { rendererContext: o4.rendererContext, renderToString: /* @__PURE__ */ __name((e5) => {
        const t6 = useRuntimeConfig2(e5.event);
        return e5.modules ||= /* @__PURE__ */ new Set(), e5.payload.serverRendered = false, e5.config = { public: t6.public, app: t6.app }, Promise.resolve(s4);
      }, "renderToString") };
    });
    __name(lazyCachedFunction, "lazyCachedFunction");
    Hr = lazyCachedFunction(() => Promise.resolve().then(() => (init_styles(), styles_exports)).then((e4) => e4.default || e4));
    Mr = { "<": "\\u003C", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\u2028": "\\u2028", "\u2029": "\\u2029" };
    DevalueError = class extends Error {
      static {
        __name(this, "DevalueError");
      }
      constructor(e4, t5, n2, r4) {
        super(e4), this.name = "DevalueError", this.path = t5.join(""), this.value = n2, this.root = r4;
      }
    };
    __name(is_primitive, "is_primitive");
    Ir = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    __name(is_plain_object, "is_plain_object");
    __name(get_type, "get_type");
    __name(get_escaped_char, "get_escaped_char");
    __name(stringify_string, "stringify_string");
    __name(enumerable_symbols, "enumerable_symbols");
    Dr = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    __name(stringify_key, "stringify_key");
    Lr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    jr = /[<\b\f\n\r\t\0\u2028\u2029]/g;
    Fr = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
    __name(uneval, "uneval");
    __name(escape_unsafe_char, "escape_unsafe_char");
    __name(escape_unsafe_chars, "escape_unsafe_chars");
    __name(stringify_primitive$1, "stringify_primitive$1");
    __name(encode64, "encode64");
    Br = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    __name(stringify, "stringify");
    __name(stringify_primitive, "stringify_primitive");
    __name(renderPayloadJsonScript, "renderPayloadJsonScript");
    __name(splitPayload, "splitPayload");
    Ur = { disableDefaults: true };
    Wr = {};
    zr = [];
    globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    qr = !!Er.id;
    Kr = qr ? `<div${propsToString(Er)}>` : "";
    Jr = qr ? "</div>" : "";
    Gr = /^[^?]*\/_payload.json(?:\?.*)?$/;
    Zr = defineRenderHandler(async (e4) => {
      const t5 = useNitroApp(), i4 = e4.path.startsWith("/__nuxt_error") ? getQuery(e4) : null;
      if (i4 && !("__unenv__" in e4.node.req)) throw createError({ statusCode: 404, statusMessage: "Page Not Found: /__nuxt_error" });
      const a6 = (function(e5) {
        return { url: e5.path, event: e5, runtimeConfig: useRuntimeConfig2(e5), noSSR: e5.context.nuxt?.noSSR || false, head: createHead(Ur), error: false, nuxt: void 0, payload: {}, _payloadReducers: /* @__PURE__ */ Object.create(null), modules: /* @__PURE__ */ new Set() };
      })(e4), f3 = { mode: "server" };
      if (a6.head.push(xr, f3), i4) {
        if (i4.statusCode &&= Number.parseInt(i4.statusCode), "string" == typeof i4.data) try {
          i4.data = destr(i4.data);
        } catch {
        }
        !(function(e5, t6) {
          e5.error = true, e5.payload = { error: t6 }, e5.url = t6.url;
        })(a6, i4);
      }
      const g4 = Gr.test(a6.url);
      if (g4) {
        const t6 = a6.url.substring(0, a6.url.lastIndexOf("/")) || "/";
        a6.url = t6, e4._path = e4.node.req.url = t6;
      }
      const m3 = getRouteRules(e4);
      false === m3.ssr && (a6.noSSR = true);
      const y4 = await (function(e5) {
        return e5.noSSR ? Vr() : Or();
      })(a6);
      for (const e5 of zr) a6.modules.add(e5);
      const v3 = await y4.renderToString(a6).catch(async (e5) => {
        if (a6._renderResponse && "skipping render" === e5.message) return {};
        const t6 = !i4 && a6.payload?.error || e5;
        throw await a6.nuxt?.hooks.callHook("app:error", t6), t6;
      }), _3 = a6._renderResponse || g4 ? [] : await (async function(e5) {
        const t6 = await Hr(), n2 = /* @__PURE__ */ new Set();
        for (const r4 of e5) if (r4 in t6 && t6[r4]) for (const e6 of await t6[r4]()) n2.add(e6);
        return Array.from(n2).map((e6) => ({ innerHTML: e6 }));
      })(a6.modules ?? []);
      if (await a6.nuxt?.hooks.callHook("app:rendered", { ssrContext: a6, renderResult: v3 }), a6._renderResponse) return a6._renderResponse;
      if (a6.payload?.error && !i4) throw a6.payload.error;
      if (g4) {
        const e5 = (function(e6) {
          return { body: stringify(splitPayload(e6).payload, e6._payloadReducers), statusCode: getResponseStatus(e6.event), statusMessage: getResponseStatusText(e6.event), headers: { "content-type": "application/json;charset=utf-8", "x-powered-by": "Nuxt" } };
        })(a6);
        return e5;
      }
      const b4 = m3.noScripts, { styles: C3, scripts: k3 } = getRequestDependencies(a6, y4.rendererContext);
      a6._preloadManifest && !b4 && a6.head.push({ link: [{ rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${a6.runtimeConfig.app.buildId}.json`) }] }, { ...f3, tagPriority: "low" }), _3.length && a6.head.push({ style: _3 });
      const S3 = [];
      for (const e5 of Object.values(C3)) S3.push({ rel: "stylesheet", href: y4.rendererContext.buildAssetsURL(e5.file), crossorigin: "" });
      if (S3.length && a6.head.push({ link: S3 }, f3), b4 || (a6.head.push({ link: getPreloadLinks(a6, y4.rendererContext) }, f3), a6.head.push({ link: getPrefetchLinks(a6, y4.rendererContext) }, f3), a6.head.push({ script: renderPayloadJsonScript({ ssrContext: a6, data: a6.payload }) }, { ...f3, tagPosition: "bodyClose", tagPriority: "high" })), !m3.noScripts) {
        const e5 = "head";
        a6.head.push({ script: Object.values(k3).map((t6) => ({ type: t6.module ? "module" : null, src: y4.rendererContext.buildAssetsURL(t6.file), defer: !t6.module || null, tagPosition: e5, crossorigin: "" })) }, f3);
      }
      const { headTags: T3, bodyTags: w3, bodyTagsOpen: R3, htmlAttrs: A3, bodyAttrs: x4 } = await renderSSRHead(a6.head, Wr), E3 = { htmlAttrs: A3 ? [A3] : [], head: normalizeChunks([T3]), bodyAttrs: x4 ? [x4] : [], bodyPrepend: normalizeChunks([R3, a6.teleports?.body]), body: [v3.html, Kr + (qr ? joinTags([a6.teleports?.[`#${Er.id}`]]) : "") + Jr], bodyAppend: [w3] };
      return await t5.hooks.callHook("render:html", E3, { event: e4 }), { body: (P3 = E3, `<!DOCTYPE html><html${joinAttrs(P3.htmlAttrs)}><head>${joinTags(P3.head)}</head><body${joinAttrs(P3.bodyAttrs)}>${joinTags(P3.bodyPrepend)}${joinTags(P3.body)}${joinTags(P3.bodyAppend)}</body></html>`), statusCode: getResponseStatus(e4), statusMessage: getResponseStatusText(e4), headers: { "content-type": "text/html;charset=utf-8", "x-powered-by": "Nuxt" } };
      var P3;
    });
    __name(normalizeChunks, "normalizeChunks");
    __name(joinTags, "joinTags");
    __name(joinAttrs, "joinAttrs");
    Xr = Object.freeze(Object.defineProperty({ __proto__: null, default: Zr }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .output/server/chunks/routes/api/users.get.mjs
var users_get_exports = {};
__export(users_get_exports, {
  default: () => e3
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:async_hooks";
var e3;
var init_users_get = __esm({
  ".output/server/chunks/routes/api/users.get.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    e3 = defineEventHandler(() => getUsers());
  }
});

// .output/server/chunks/nitro/nitro.mjs
import { env as t4 } from "cloudflare:workers";
import { EventEmitter as s3 } from "node:events";
import { Buffer as r3 } from "node:buffer";
import { setImmediate as a5, clearImmediate as c3 } from "node:timers";
import { AsyncLocalStorage as u2 } from "node:async_hooks";
function createNotImplementedError2(e4) {
  return new Error(`[unenv] ${e4} is not implemented yet!`);
}
function notImplemented2(e4) {
  return Object.assign(() => {
    throw createNotImplementedError2(e4);
  }, { __unenv__: true });
}
function jsonParseTransform(e4, t5) {
  if (!("__proto__" === e4 || "constructor" === e4 && t5 && "object" == typeof t5 && "prototype" in t5)) return t5;
  !(function(e5) {
    console.warn(`[destr] Dropping "${e5}" key to prevent prototype pollution.`);
  })(e4);
}
function destr(e4, t5 = {}) {
  if ("string" != typeof e4) return e4;
  if ('"' === e4[0] && '"' === e4[e4.length - 1] && -1 === e4.indexOf("\\")) return e4.slice(1, -1);
  const s4 = e4.trim();
  if (s4.length <= 9) switch (s4.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY;
  }
  if (!qt3.test(e4)) {
    if (t5.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e4;
  }
  try {
    if (Tt3.test(e4) || Qt3.test(e4)) {
      if (t5.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e4, jsonParseTransform);
    }
    return JSON.parse(e4);
  } catch (s5) {
    if (t5.strict) throw s5;
    return e4;
  }
}
function encodeQueryValue(e4) {
  return (function(e5) {
    return encodeURI("" + e5).replace(kt3, "|");
  })("string" == typeof e4 ? e4 : JSON.stringify(e4)).replace(At3, "%2B").replace(Pt3, "+").replace(xt3, "%23").replace(Rt3, "%26").replace($t3, "`").replace(Et3, "^").replace(Bt3, "%2F");
}
function encodeQueryKey(e4) {
  return encodeQueryValue(e4).replace(Nt3, "%3D");
}
function decode(e4 = "") {
  try {
    return decodeURIComponent("" + e4);
  } catch {
    return "" + e4;
  }
}
function decodeQueryKey(e4) {
  return decode(e4.replace(At3, " "));
}
function decodeQueryValue(e4) {
  return decode(e4.replace(At3, " "));
}
function parseQuery(e4 = "") {
  const t5 = /* @__PURE__ */ Object.create(null);
  "?" === e4[0] && (e4 = e4.slice(1));
  for (const s4 of e4.split("&")) {
    const e5 = s4.match(/([^=]+)=?(.*)/) || [];
    if (e5.length < 2) continue;
    const r4 = decodeQueryKey(e5[1]);
    if ("__proto__" === r4 || "constructor" === r4) continue;
    const a6 = decodeQueryValue(e5[2] || "");
    void 0 === t5[r4] ? t5[r4] = a6 : Array.isArray(t5[r4]) ? t5[r4].push(a6) : t5[r4] = [t5[r4], a6];
  }
  return t5;
}
function stringifyQuery(e4) {
  return Object.keys(e4).filter((t5) => void 0 !== e4[t5]).map((t5) => {
    return s4 = t5, "number" != typeof (r4 = e4[t5]) && "boolean" != typeof r4 || (r4 = String(r4)), r4 ? Array.isArray(r4) ? r4.map((e5) => `${encodeQueryKey(s4)}=${encodeQueryValue(e5)}`).join("&") : `${encodeQueryKey(s4)}=${encodeQueryValue(r4)}` : encodeQueryKey(s4);
    var s4, r4;
  }).filter(Boolean).join("&");
}
function hasProtocol(e4, t5 = {}) {
  return "boolean" == typeof t5 && (t5 = { acceptRelative: t5 }), t5.strict ? jt3.test(e4) : Ot3.test(e4) || !!t5.acceptRelative && It3.test(e4);
}
function isScriptProtocol(e4) {
  return !!e4 && Mt3.test(e4);
}
function hasTrailingSlash(e4 = "", t5) {
  return t5 ? Ht3.test(e4) : e4.endsWith("/");
}
function withoutTrailingSlash(e4 = "", t5) {
  if (!t5) return (hasTrailingSlash(e4) ? e4.slice(0, -1) : e4) || "/";
  if (!hasTrailingSlash(e4, true)) return e4 || "/";
  let s4 = e4, r4 = "";
  const a6 = e4.indexOf("#");
  -1 !== a6 && (s4 = e4.slice(0, a6), r4 = e4.slice(a6));
  const [c4, ...u3] = s4.split("?");
  return ((c4.endsWith("/") ? c4.slice(0, -1) : c4) || "/") + (u3.length > 0 ? `?${u3.join("?")}` : "") + r4;
}
function withTrailingSlash(e4 = "", t5) {
  if (!t5) return e4.endsWith("/") ? e4 : e4 + "/";
  if (hasTrailingSlash(e4, true)) return e4 || "/";
  let s4 = e4, r4 = "";
  const a6 = e4.indexOf("#");
  if (-1 !== a6 && (s4 = e4.slice(0, a6), r4 = e4.slice(a6), !s4)) return r4;
  const [c4, ...u3] = s4.split("?");
  return c4 + "/" + (u3.length > 0 ? `?${u3.join("?")}` : "") + r4;
}
function withLeadingSlash(e4 = "") {
  return (function(e5 = "") {
    return e5.startsWith("/");
  })(e4) ? e4 : "/" + e4;
}
function withoutBase(e4, t5) {
  if (isEmptyURL(t5)) return e4;
  const s4 = withoutTrailingSlash(t5);
  if (!e4.startsWith(s4)) return e4;
  const r4 = e4.slice(s4.length);
  return "/" === r4[0] ? r4 : "/" + r4;
}
function withQuery(e4, t5) {
  const s4 = parseURL(e4), r4 = { ...parseQuery(s4.search), ...t5 };
  return s4.search = stringifyQuery(r4), stringifyParsedURL(s4);
}
function getQuery$1(e4) {
  return parseQuery(parseURL(e4).search);
}
function isEmptyURL(e4) {
  return !e4 || "/" === e4;
}
function joinURL(e4, ...t5) {
  let s4 = e4 || "";
  for (const e5 of t5.filter((e6) => /* @__PURE__ */ (function(e7) {
    return e7 && "/" !== e7;
  })(e6))) if (s4) {
    const t6 = e5.replace(Dt3, "");
    s4 = withTrailingSlash(s4) + t6;
  } else s4 = e5;
  return s4;
}
function joinRelativeURL(...e4) {
  const t5 = /\/(?!\/)/, s4 = e4.filter(Boolean), r4 = [];
  let a6 = 0;
  for (const e5 of s4) if (e5 && "/" !== e5) {
    for (const [s5, c5] of e5.split(t5).entries()) if (c5 && "." !== c5) if (".." !== c5) 1 === s5 && r4[r4.length - 1]?.endsWith(":/") ? r4[r4.length - 1] += "/" + c5 : (r4.push(c5), a6++);
    else {
      if (1 === r4.length && hasProtocol(r4[0])) continue;
      r4.pop(), a6--;
    }
  }
  let c4 = r4.join("/");
  return a6 >= 0 ? s4[0]?.startsWith("/") && !c4.startsWith("/") ? c4 = "/" + c4 : s4[0]?.startsWith("./") && !c4.startsWith("./") && (c4 = "./" + c4) : c4 = "../".repeat(-1 * a6) + c4, s4[s4.length - 1]?.endsWith("/") && !c4.endsWith("/") && (c4 += "/"), c4;
}
function isEqual(e4, t5, s4 = {}) {
  return s4.trailingSlash || (e4 = withTrailingSlash(e4), t5 = withTrailingSlash(t5)), s4.leadingSlash || (e4 = withLeadingSlash(e4), t5 = withLeadingSlash(t5)), s4.encoding || (e4 = decode(e4), t5 = decode(t5)), e4 === t5;
}
function parseURL(e4 = "", t5) {
  const s4 = e4.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (s4) {
    const [, e5, t6 = ""] = s4;
    return { protocol: e5.toLowerCase(), pathname: t6, href: e5 + t6, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e4, { acceptRelative: true })) return parsePath(e4);
  const [, r4 = "", a6, c4 = ""] = e4.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, u3 = "", d3 = ""] = c4.match(/([^#/?]*)(.*)?/) || [];
  "file:" === r4 && (d3 = d3.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: h4, search: f3, hash: m3 } = parsePath(d3);
  return { protocol: r4.toLowerCase(), auth: a6 ? a6.slice(0, Math.max(0, a6.length - 1)) : "", host: u3, pathname: h4, search: f3, hash: m3, [Ut3]: !r4 };
}
function parsePath(e4 = "") {
  const [t5 = "", s4 = "", r4 = ""] = (e4.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t5, search: s4, hash: r4 };
}
function stringifyParsedURL(e4) {
  const t5 = e4.pathname || "", s4 = e4.search ? (e4.search.startsWith("?") ? "" : "?") + e4.search : "", r4 = e4.hash || "", a6 = e4.auth ? e4.auth + "@" : "", c4 = e4.host || "";
  return (e4.protocol || e4[Ut3] ? (e4.protocol || "") + "//" : "") + a6 + c4 + t5 + s4 + r4;
}
function createRouter$1(e4 = {}) {
  const t5 = { options: e4, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = /* @__PURE__ */ __name((t6) => e4.strictTrailingSlash ? t6 : t6.replace(/\/$/, "") || "/", "normalizeTrailingSlash");
  if (e4.routes) for (const s4 in e4.routes) insert(t5, normalizeTrailingSlash(s4), e4.routes[s4]);
  return { ctx: t5, lookup: /* @__PURE__ */ __name((e5) => (function(e6, t6) {
    const s4 = e6.staticRoutesMap[t6];
    if (s4) return s4.data;
    const r4 = t6.split("/"), a6 = {};
    let c4 = false, u3 = null, d3 = e6.rootNode, h4 = null;
    for (let e7 = 0; e7 < r4.length; e7++) {
      const t7 = r4[e7];
      null !== d3.wildcardChildNode && (u3 = d3.wildcardChildNode, h4 = r4.slice(e7).join("/"));
      const s5 = d3.children.get(t7);
      if (void 0 === s5) {
        if (d3 && d3.placeholderChildren.length > 1) {
          const t8 = r4.length - e7;
          d3 = d3.placeholderChildren.find((e8) => e8.maxDepth === t8) || null;
        } else d3 = d3.placeholderChildren[0] || null;
        if (!d3) break;
        d3.paramName && (a6[d3.paramName] = t7), c4 = true;
      } else d3 = s5;
    }
    null !== d3 && null !== d3.data || null === u3 || (d3 = u3, a6[d3.paramName || "_"] = h4, c4 = true);
    if (!d3) return null;
    if (c4) return { ...d3.data, params: c4 ? a6 : void 0 };
    return d3.data;
  })(t5, normalizeTrailingSlash(e5)), "lookup"), insert: /* @__PURE__ */ __name((e5, s4) => insert(t5, normalizeTrailingSlash(e5), s4), "insert"), remove: /* @__PURE__ */ __name((e5) => (function(e6, t6) {
    let s4 = false;
    const r4 = t6.split("/");
    let a6 = e6.rootNode;
    for (const e7 of r4) if (a6 = a6.children.get(e7), !a6) return s4;
    if (a6.data) {
      const e7 = r4.at(-1) || "";
      a6.data = null, 0 === Object.keys(a6.children).length && a6.parent && (a6.parent.children.delete(e7), a6.parent.wildcardChildNode = null, a6.parent.placeholderChildren = []), s4 = true;
    }
    return s4;
  })(t5, normalizeTrailingSlash(e5)), "remove") };
}
function insert(e4, t5, s4) {
  let r4 = true;
  const a6 = t5.split("/");
  let c4 = e4.rootNode, u3 = 0;
  const d3 = [c4];
  for (const e5 of a6) {
    let t6;
    if (t6 = c4.children.get(e5)) c4 = t6;
    else {
      const s5 = getNodeType(e5);
      t6 = createRadixNode({ type: s5, parent: c4 }), c4.children.set(e5, t6), s5 === Kt3 ? (t6.paramName = "*" === e5 ? "_" + u3++ : e5.slice(1), c4.placeholderChildren.push(t6), r4 = false) : s5 === zt3 && (c4.wildcardChildNode = t6, t6.paramName = e5.slice(3) || "_", r4 = false), d3.push(t6), c4 = t6;
    }
  }
  for (const [e5, t6] of d3.entries()) t6.maxDepth = Math.max(d3.length - e5, t6.maxDepth || 0);
  return c4.data = s4, true === r4 && (e4.staticRoutesMap[t5] = c4), c4;
}
function createRadixNode(e4 = {}) {
  return { type: e4.type || Ft3, maxDepth: 0, parent: e4.parent || null, children: /* @__PURE__ */ new Map(), data: e4.data || null, paramName: e4.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e4) {
  return e4.startsWith("**") ? zt3 : ":" === e4[0] || "*" === e4 ? Kt3 : Ft3;
}
function toRouteMatcher(e4) {
  return /* @__PURE__ */ (function(e5, t5) {
    return { ctx: { table: e5 }, matchAll: /* @__PURE__ */ __name((s4) => _matchRoutes(s4, e5, t5), "matchAll") };
  })(_routerNodeToTable("", e4.ctx.rootNode), e4.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e4, t5, s4) {
  true !== s4 && e4.endsWith("/") && (e4 = e4.slice(0, -1) || "/");
  const r4 = [];
  for (const [s5, a7] of _sortRoutesMap(t5.wildcard)) (e4 === s5 || e4.startsWith(s5 + "/")) && r4.push(a7);
  for (const [s5, a7] of _sortRoutesMap(t5.dynamic)) if (e4.startsWith(s5 + "/")) {
    const t6 = "/" + e4.slice(s5.length).split("/").splice(2).join("/");
    r4.push(..._matchRoutes(t6, a7));
  }
  const a6 = t5.static.get(e4);
  return a6 && r4.push(a6), r4.filter(Boolean);
}
function _sortRoutesMap(e4) {
  return [...e4.entries()].sort((e5, t5) => e5[0].length - t5[0].length);
}
function _routerNodeToTable(e4, t5) {
  const s4 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return (/* @__PURE__ */ __name(function _addNode(e5, t6) {
    if (e5) if (t6.type !== Ft3 || e5.includes("*") || e5.includes(":")) {
      if (t6.type === zt3) s4.wildcard.set(e5.replace("/**", ""), t6.data);
      else if (t6.type === Kt3) {
        const r4 = _routerNodeToTable("", t6);
        return t6.data && r4.static.set("/", t6.data), void s4.dynamic.set(e5.replace(/\/\*|\/:\w+/, ""), r4);
      }
    } else t6.data && s4.static.set(e5, t6.data);
    for (const [s5, r4] of t6.children.entries()) _addNode(`${e5}/${s5}`.replace("//", "/"), r4);
  }, "_addNode"))(e4, t5), s4;
}
function isPlainObject2(e4) {
  if (null === e4 || "object" != typeof e4) return false;
  const t5 = Object.getPrototypeOf(e4);
  return (null === t5 || t5 === Object.prototype || null === Object.getPrototypeOf(t5)) && (!(Symbol.iterator in e4) && (!(Symbol.toStringTag in e4) || "[object Module]" === Object.prototype.toString.call(e4)));
}
function _defu(e4, t5, s4 = ".", r4) {
  if (!isPlainObject2(t5)) return _defu(e4, {}, s4, r4);
  const a6 = Object.assign({}, t5);
  for (const t6 in e4) {
    if ("__proto__" === t6 || "constructor" === t6) continue;
    const c4 = e4[t6];
    null != c4 && (r4 && r4(a6, t6, c4, s4) || (Array.isArray(c4) && Array.isArray(a6[t6]) ? a6[t6] = [...c4, ...a6[t6]] : isPlainObject2(c4) && isPlainObject2(a6[t6]) ? a6[t6] = _defu(c4, a6[t6], (s4 ? `${s4}.` : "") + t6.toString(), r4) : a6[t6] = c4));
  }
  return a6;
}
function createDefu(e4) {
  return (...t5) => t5.reduce((t6, s4) => _defu(t6, s4, "", e4), {});
}
function o3(e4) {
  throw new Error(`${e4} is not implemented yet!`);
}
function p2(e4) {
  const t5 = {};
  for (const [s4, r4] of Object.entries(e4)) s4 && (t5[s4] = (Array.isArray(r4) ? r4 : [r4]).filter(Boolean));
  return t5;
}
function v2(e4 = {}) {
  if (e4 instanceof Headers) return e4;
  const t5 = new Headers();
  for (const [s4, r4] of Object.entries(e4)) if (void 0 !== r4) {
    if (Array.isArray(r4)) {
      for (const e5 of r4) t5.append(s4, String(e5));
      continue;
    }
    t5.set(s4, String(r4));
  }
  return t5;
}
async function b3(e4, t5) {
  const s4 = new y3(), r4 = new w2(s4);
  let a6;
  if (s4.url = t5.url?.toString() || "/", !s4.url.startsWith("/")) {
    const e5 = new URL(s4.url);
    a6 = e5.host, s4.url = e5.pathname + e5.search + e5.hash;
  }
  s4.method = t5.method || "GET", s4.headers = (function(e5 = {}) {
    const t6 = new Zt3(), s5 = Array.isArray(e5) || (function(e6) {
      return "function" == typeof e6?.entries;
    })(e5) ? e5 : Object.entries(e5);
    for (const [e6, r5] of s5) if (r5) {
      if (void 0 === t6[e6]) {
        t6[e6] = r5;
        continue;
      }
      t6[e6] = [...Array.isArray(t6[e6]) ? t6[e6] : [t6[e6]], ...Array.isArray(r5) ? r5 : [r5]];
    }
    return t6;
  })(t5.headers || {}), s4.headers.host || (s4.headers.host = t5.host || a6 || "localhost"), s4.connection.encrypted = s4.connection.encrypted || "https" === t5.protocol, s4.body = t5.body || null, s4.__unenv__ = t5.context, await e4(s4, r4);
  let c4 = r4._data;
  (Xt3.has(r4.statusCode) || "HEAD" === s4.method.toUpperCase()) && (c4 = null, delete r4._headers["content-length"]);
  const u3 = { status: r4.statusCode, statusText: r4.statusMessage, headers: r4._headers, body: c4 };
  return s4.destroy(), r4.destroy(), u3;
}
function hasProp2(e4, t5) {
  try {
    return t5 in e4;
  } catch {
    return false;
  }
}
function createError(e4) {
  if ("string" == typeof e4) return new H3Error(e4);
  if (isError(e4)) return e4;
  const t5 = new H3Error(e4.message ?? e4.statusMessage ?? "", { cause: e4.cause || e4 });
  if (hasProp2(e4, "stack")) try {
    Object.defineProperty(t5, "stack", { get: /* @__PURE__ */ __name(() => e4.stack, "get") });
  } catch {
    try {
      t5.stack = e4.stack;
    } catch {
    }
  }
  if (e4.data && (t5.data = e4.data), e4.statusCode ? t5.statusCode = sanitizeStatusCode(e4.statusCode, t5.statusCode) : e4.status && (t5.statusCode = sanitizeStatusCode(e4.status, t5.statusCode)), e4.statusMessage ? t5.statusMessage = e4.statusMessage : e4.statusText && (t5.statusMessage = e4.statusText), t5.statusMessage) {
    const e5 = t5.statusMessage;
    sanitizeStatusMessage(t5.statusMessage) !== e5 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e4.fatal && (t5.fatal = e4.fatal), void 0 !== e4.unhandled && (t5.unhandled = e4.unhandled), t5;
}
function isError(e4) {
  return true === e4?.constructor?.__h3_error__;
}
function getQuery(e4) {
  return getQuery$1(e4.path || "");
}
function getRequestHeaders(e4) {
  const t5 = {};
  for (const s4 in e4.node.req.headers) {
    const r4 = e4.node.req.headers[s4];
    t5[s4] = Array.isArray(r4) ? r4.filter(Boolean).join(", ") : r4;
  }
  return t5;
}
function readRawBody(e4, t5 = "utf8") {
  !(function(e5, t6) {
    if (!(function(e6, t7) {
      if ("string" == typeof t7) {
        if (e6.method === t7) return true;
      } else if (t7.includes(e6.method)) return true;
      return false;
    })(e5, t6)) throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  })(e4, ts);
  const s4 = e4._requestBody || e4.web?.request?.body || e4.node.req[es] || e4.node.req.rawBody || e4.node.req.body;
  if (s4) {
    const e5 = Promise.resolve(s4).then((e6) => r3.isBuffer(e6) ? e6 : "function" == typeof e6.pipeTo ? new Promise((t6, s5) => {
      const a7 = [];
      e6.pipeTo(new WritableStream({ write(e7) {
        a7.push(e7);
      }, close() {
        t6(r3.concat(a7));
      }, abort(e7) {
        s5(e7);
      } })).catch(s5);
    }) : "function" == typeof e6.pipe ? new Promise((t6, s5) => {
      const a7 = [];
      e6.on("data", (e7) => {
        a7.push(e7);
      }).on("end", () => {
        t6(r3.concat(a7));
      }).on("error", s5);
    }) : e6.constructor === Object ? r3.from(JSON.stringify(e6)) : e6 instanceof URLSearchParams ? r3.from(e6.toString()) : e6 instanceof FormData ? new Response(e6).bytes().then((e7) => r3.from(e7)) : r3.from(e6));
    return t5 ? e5.then((e6) => e6.toString(t5)) : e5;
  }
  if (!Number.parseInt(e4.node.req.headers["content-length"] || "") && !String(e4.node.req.headers["transfer-encoding"] ?? "").split(",").map((e5) => e5.trim()).filter(Boolean).includes("chunked")) return Promise.resolve(void 0);
  const a6 = e4.node.req[es] = new Promise((t6, s5) => {
    const a7 = [];
    e4.node.req.on("error", (e5) => {
      s5(e5);
    }).on("data", (e5) => {
      a7.push(e5);
    }).on("end", () => {
      t6(r3.concat(a7));
    });
  });
  return t5 ? a6.then((e5) => e5.toString(t5)) : a6;
}
function handleCacheHeaders(e4, t5) {
  const s4 = ["public", ...t5.cacheControls || []];
  let r4 = false;
  if (void 0 !== t5.maxAge && s4.push("max-age=" + +t5.maxAge, "s-maxage=" + +t5.maxAge), t5.modifiedTime) {
    const s5 = new Date(t5.modifiedTime), a6 = e4.node.req.headers["if-modified-since"];
    e4.node.res.setHeader("last-modified", s5.toUTCString()), a6 && new Date(a6) >= s5 && (r4 = true);
  }
  if (t5.etag) {
    e4.node.res.setHeader("etag", t5.etag);
    e4.node.req.headers["if-none-match"] === t5.etag && (r4 = true);
  }
  return e4.node.res.setHeader("cache-control", s4.join(", ")), !!r4 && (e4.node.res.statusCode = 304, e4.handled || e4.node.res.end(), true);
}
function sanitizeStatusMessage(e4 = "") {
  return e4.replace(rs, "");
}
function sanitizeStatusCode(e4, t5 = 200) {
  return e4 ? ("string" == typeof e4 && (e4 = Number.parseInt(e4, 10)), e4 < 100 || e4 > 999 ? t5 : e4) : t5;
}
function splitCookiesString(e4) {
  if (Array.isArray(e4)) return e4.flatMap((e5) => splitCookiesString(e5));
  if ("string" != typeof e4) return [];
  const t5 = [];
  let s4, r4, a6, c4, u3, d3 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; d3 < e4.length && /\s/.test(e4.charAt(d3)); ) d3 += 1;
    return d3 < e4.length;
  }, "skipWhitespace"), notSpecialChar = /* @__PURE__ */ __name(() => (r4 = e4.charAt(d3), "=" !== r4 && ";" !== r4 && "," !== r4), "notSpecialChar");
  for (; d3 < e4.length; ) {
    for (s4 = d3, u3 = false; skipWhitespace(); ) if (r4 = e4.charAt(d3), "," === r4) {
      for (a6 = d3, d3 += 1, skipWhitespace(), c4 = d3; d3 < e4.length && notSpecialChar(); ) d3 += 1;
      d3 < e4.length && "=" === e4.charAt(d3) ? (u3 = true, d3 = c4, t5.push(e4.slice(s4, a6)), s4 = d3) : d3 = a6 + 1;
    } else d3 += 1;
    (!u3 || d3 >= e4.length) && t5.push(e4.slice(s4));
  }
  return t5;
}
function send2(e4, t5, s4) {
  return s4 && (function(e5, t6) {
    t6 && 304 !== e5.node.res.statusCode && !e5.node.res.getHeader("content-type") && e5.node.res.setHeader("content-type", t6);
  })(e4, s4), new Promise((s5) => {
    ns(() => {
      e4.handled || e4.node.res.end(t5), s5();
    });
  });
}
function setResponseStatus(e4, t5, s4) {
  t5 && (e4.node.res.statusCode = sanitizeStatusCode(t5, e4.node.res.statusCode)), s4 && (e4.node.res.statusMessage = sanitizeStatusMessage(s4));
}
function getResponseStatus(e4) {
  return e4.node.res.statusCode;
}
function getResponseStatusText(e4) {
  return e4.node.res.statusMessage;
}
function setResponseHeaders(e4, t5) {
  for (const [s4, r4] of Object.entries(t5)) e4.node.res.setHeader(s4, r4);
}
function setResponseHeader(e4, t5, s4) {
  e4.node.res.setHeader(t5, s4);
}
function appendResponseHeader(e4, t5, s4) {
  let r4 = e4.node.res.getHeader(t5);
  r4 ? (Array.isArray(r4) || (r4 = [r4.toString()]), e4.node.res.setHeader(t5, [...r4, s4])) : e4.node.res.setHeader(t5, s4);
}
function sendStream(e4, t5) {
  if (!t5 || "object" != typeof t5) throw new Error("[h3] Invalid stream provided.");
  if (e4.node.res._data = t5, !e4.node.res.socket) return e4._handled = true, Promise.resolve();
  if (hasProp2(t5, "pipeTo") && "function" == typeof t5.pipeTo) return t5.pipeTo(new WritableStream({ write(t6) {
    e4.node.res.write(t6);
  } })).then(() => {
    e4.node.res.end();
  });
  if (hasProp2(t5, "pipe") && "function" == typeof t5.pipe) return new Promise((s4, r4) => {
    t5.pipe(e4.node.res), t5.on && (t5.on("end", () => {
      e4.node.res.end(), s4();
    }), t5.on("error", (e5) => {
      r4(e5);
    })), e4.node.res.on("close", () => {
      t5.abort && t5.abort();
    });
  });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(e4, t5) {
  for (const [s4, r4] of t5.headers) "set-cookie" === s4 ? e4.node.res.appendHeader(s4, splitCookiesString(r4)) : e4.node.res.setHeader(s4, r4);
  if (t5.status && (e4.node.res.statusCode = sanitizeStatusCode(t5.status, e4.node.res.statusCode)), t5.statusText && (e4.node.res.statusMessage = sanitizeStatusMessage(t5.statusText)), t5.redirected && e4.node.res.setHeader("location", t5.url), t5.body) return sendStream(e4, t5.body);
  e4.node.res.end();
}
async function proxyRequest(e4, t5, s4 = {}) {
  let r4, a6;
  as.has(e4.method) && (s4.streamRequest ? (r4 = (function(e5) {
    if (!ts.includes(e5.method)) return;
    const t6 = e5.web?.request?.body || e5._requestBody;
    return t6 || (es in e5.node.req || "rawBody" in e5.node.req || "body" in e5.node.req || "__unenv__" in e5.node.req ? new ReadableStream({ async start(t7) {
      const s5 = await readRawBody(e5, false);
      s5 && t7.enqueue(s5), t7.close();
    } }) : new ReadableStream({ start: /* @__PURE__ */ __name((t7) => {
      e5.node.req.on("data", (e6) => {
        t7.enqueue(e6);
      }), e5.node.req.on("end", () => {
        t7.close();
      }), e5.node.req.on("error", (e6) => {
        t7.error(e6);
      });
    }, "start") }));
  })(e4), a6 = "half") : r4 = await readRawBody(e4, false).catch(() => {
  }));
  const c4 = s4.fetchOptions?.method || e4.method, u3 = (function(e5, ...t6) {
    const s5 = t6.filter(Boolean);
    if (0 === s5.length) return e5;
    const r5 = new Headers(e5);
    for (const e6 of s5) {
      const t7 = Array.isArray(e6) ? e6 : "function" == typeof e6.entries ? e6.entries() : Object.entries(e6);
      for (const [e7, s6] of t7) void 0 !== s6 && r5.set(e7, s6);
    }
    return r5;
  })(getProxyRequestHeaders(e4, { host: t5.startsWith("/") }), s4.fetchOptions?.headers, s4.headers);
  return (async function(e5, t6, s5 = {}) {
    let r5;
    try {
      r5 = await _getFetch(s5.fetch)(t6, { headers: s5.headers, ignoreResponseError: true, ...s5.fetchOptions });
    } catch (e6) {
      throw createError({ status: 502, statusMessage: "Bad Gateway", cause: e6 });
    }
    e5.node.res.statusCode = sanitizeStatusCode(r5.status, e5.node.res.statusCode), e5.node.res.statusMessage = sanitizeStatusMessage(r5.statusText);
    const a7 = [];
    for (const [t7, s6] of r5.headers.entries()) "content-encoding" !== t7 && "content-length" !== t7 && ("set-cookie" !== t7 ? e5.node.res.setHeader(t7, s6) : a7.push(...splitCookiesString(s6)));
    a7.length > 0 && e5.node.res.setHeader("set-cookie", a7.map((e6) => (s5.cookieDomainRewrite && (e6 = rewriteCookieProperty(e6, s5.cookieDomainRewrite, "domain")), s5.cookiePathRewrite && (e6 = rewriteCookieProperty(e6, s5.cookiePathRewrite, "path")), e6)));
    s5.onResponse && await s5.onResponse(e5, r5);
    if (void 0 !== r5._data) return r5._data;
    if (e5.handled) return;
    if (false === s5.sendStream) {
      const t7 = new Uint8Array(await r5.arrayBuffer());
      return e5.node.res.end(t7);
    }
    if (r5.body) for await (const t7 of r5.body) e5.node.res.write(t7);
    return e5.node.res.end();
  })(e4, t5, { ...s4, fetchOptions: { method: c4, body: r4, duplex: a6, ...s4.fetchOptions, headers: u3 } });
}
function getProxyRequestHeaders(e4, t5) {
  const s4 = /* @__PURE__ */ Object.create(null), r4 = getRequestHeaders(e4);
  for (const e5 in r4) (!ls.has(e5) || "host" === e5 && t5?.host) && (s4[e5] = r4[e5]);
  return s4;
}
function fetchWithEvent(e4, t5, s4, r4) {
  return _getFetch(r4?.fetch)(t5, { ...s4, context: s4?.context || e4.context, headers: { ...getProxyRequestHeaders(e4, { host: "string" == typeof t5 && t5.startsWith("/") }), ...s4?.headers } });
}
function _getFetch(e4) {
  if (e4) return e4;
  if (globalThis.fetch) return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e4, t5, s4) {
  const r4 = "string" == typeof t5 ? { "*": t5 } : t5;
  return e4.replace(new RegExp(`(;\\s*${s4}=)([^;]+)`, "gi"), (e5, t6, s5) => {
    let a6;
    if (s5 in r4) a6 = r4[s5];
    else {
      if (!("*" in r4)) return e5;
      a6 = r4["*"];
    }
    return a6 ? t6 + a6 : "";
  });
}
function isEvent(e4) {
  return hasProp2(e4, "__is_event__");
}
function createEvent(e4, t5) {
  return new H3Event(e4, t5);
}
function defineEventHandler(e4) {
  if ("function" == typeof e4) return e4.__is_handler__ = true, e4;
  const t5 = { onRequest: _normalizeArray(e4.onRequest), onBeforeResponse: _normalizeArray(e4.onBeforeResponse) }, _handler = /* @__PURE__ */ __name((s4) => (async function(e5, t6, s5) {
    if (s5.onRequest) {
      for (const t7 of s5.onRequest) if (await t7(e5), e5.handled) return;
    }
    const r4 = await t6(e5), a6 = { body: r4 };
    if (s5.onBeforeResponse) for (const t7 of s5.onBeforeResponse) await t7(e5, a6);
    return a6.body;
  })(s4, e4.handler, t5), "_handler");
  return _handler.__is_handler__ = true, _handler.__resolve__ = e4.handler.__resolve__, _handler.__websocket__ = e4.websocket, _handler;
}
function _normalizeArray(e4) {
  return e4 ? Array.isArray(e4) ? e4 : [e4] : void 0;
}
function isEventHandler(e4) {
  return hasProp2(e4, "__is_handler__");
}
function toEventHandler(e4, t5, s4) {
  return isEventHandler(e4) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", s4 && "/" !== s4 ? `
     Route: ${s4}` : "", `
     Handler: ${e4}`), e4;
}
function createApp2(e4 = {}) {
  const t5 = [], s4 = (function(e5, t6) {
    const s5 = t6.debug ? 2 : void 0;
    return cs(async (r5) => {
      r5.node.req.originalUrl = r5.node.req.originalUrl || r5.node.req.url || "/";
      const a7 = r5._path || r5.node.req.url || "/";
      let c5;
      t6.onRequest && await t6.onRequest(r5);
      for (const u3 of e5) {
        if (u3.route.length > 1) {
          if (!a7.startsWith(u3.route)) continue;
          c5 = a7.slice(u3.route.length) || "/";
        } else c5 = a7;
        if (u3.match && !u3.match(c5, r5)) continue;
        r5._path = c5, r5.node.req.url = c5;
        const e6 = await u3.handler(r5), d3 = void 0 === e6 ? void 0 : await e6;
        if (void 0 !== d3) {
          const e7 = { body: d3 };
          return t6.onBeforeResponse && (r5._onBeforeResponseCalled = true, await t6.onBeforeResponse(r5, e7)), await handleHandlerResponse(r5, e7.body, s5), void (t6.onAfterResponse && (r5._onAfterResponseCalled = true, await t6.onAfterResponse(r5, e7)));
        }
        if (r5.handled) return void (t6.onAfterResponse && (r5._onAfterResponseCalled = true, await t6.onAfterResponse(r5, void 0)));
      }
      if (!r5.handled) throw createError({ statusCode: 404, statusMessage: `Cannot find any path matching ${r5.path || "/"}.` });
      t6.onAfterResponse && (r5._onAfterResponseCalled = true, await t6.onAfterResponse(r5, void 0));
    });
  })(t5, e4), r4 = /* @__PURE__ */ (function(e5) {
    return async (t6) => {
      let s5;
      for (const r5 of e5) {
        if ("/" === r5.route && !r5.handler.__resolve__) continue;
        if (!t6.startsWith(r5.route)) continue;
        if (s5 = t6.slice(r5.route.length) || "/", r5.match && !r5.match(s5, void 0)) continue;
        let e6 = { route: r5.route, handler: r5.handler };
        if (e6.handler.__resolve__) {
          const t7 = await e6.handler.__resolve__(s5);
          if (!t7) continue;
          e6 = { ...e6, ...t7, route: joinURL(e6.route || "/", t7.route || "/") };
        }
        return e6;
      }
    };
  })(t5);
  s4.__resolve__ = r4;
  const a6 = /* @__PURE__ */ (function(e5) {
    let t6;
    return () => (t6 || (t6 = e5()), t6);
  })(() => {
    return t6 = r4, { ...e4.websocket, async resolve(e5) {
      const s5 = e5.request?.url || e5.url || "/", { pathname: r5 } = "string" == typeof s5 ? parseURL(s5) : s5, a7 = await t6(r5);
      return a7?.handler?.__websocket__ || {};
    } };
    var t6;
  }), c4 = { use: /* @__PURE__ */ __name((e5, t6, s5) => use(c4, e5, t6, s5), "use"), resolve: r4, handler: s4, stack: t5, options: e4, get websocket() {
    return a6();
  } };
  return c4;
}
function use(e4, t5, s4, r4) {
  if (Array.isArray(t5)) for (const a6 of t5) use(e4, a6, s4, r4);
  else if (Array.isArray(s4)) for (const a6 of s4) use(e4, t5, a6, r4);
  else "string" == typeof t5 ? e4.stack.push(normalizeLayer({ ...r4, route: t5, handler: s4 })) : "function" == typeof t5 ? e4.stack.push(normalizeLayer({ ...s4, handler: t5 })) : e4.stack.push(normalizeLayer({ ...t5 }));
  return e4;
}
function normalizeLayer(e4) {
  let t5 = e4.handler;
  return t5.handler && (t5 = t5.handler), e4.lazy ? t5 = lazyEventHandler(t5) : isEventHandler(t5) || (t5 = toEventHandler(t5, 0, e4.route)), { route: withoutTrailingSlash(e4.route), match: e4.match, handler: t5 };
}
function handleHandlerResponse(e4, t5, s4) {
  if (null === t5) return (function(e5, t6) {
    if (e5.handled) return;
    t6 || 200 === e5.node.res.statusCode || (t6 = e5.node.res.statusCode);
    const s5 = sanitizeStatusCode(t6, 204);
    204 === s5 && e5.node.res.removeHeader("content-length"), e5.node.res.writeHead(s5), e5.node.res.end();
  })(e4);
  if (t5) {
    if (a6 = t5, "undefined" != typeof Response && a6 instanceof Response) return sendWebResponse(e4, t5);
    if ((function(e5) {
      if (!e5 || "object" != typeof e5) return false;
      if ("function" == typeof e5.pipe) {
        if ("function" == typeof e5._read) return true;
        if ("function" == typeof e5.abort) return true;
      }
      return "function" == typeof e5.pipeTo;
    })(t5)) return sendStream(e4, t5);
    if (t5.buffer) return send2(e4, t5);
    if (t5.arrayBuffer && "function" == typeof t5.arrayBuffer) return t5.arrayBuffer().then((s5) => send2(e4, r3.from(s5), t5.type));
    if (t5 instanceof Error) throw createError(t5);
    if ("function" == typeof t5.end) return true;
  }
  var a6;
  const c4 = typeof t5;
  if ("string" === c4) return send2(e4, t5, ss.html);
  if ("object" === c4 || "boolean" === c4 || "number" === c4) return send2(e4, JSON.stringify(t5, void 0, s4), ss.json);
  if ("bigint" === c4) return send2(e4, t5.toString(), ss.json);
  throw createError({ statusCode: 500, statusMessage: `[h3] Cannot send ${c4} as response.` });
}
function toNodeListener(e4) {
  return async function(t5, s4) {
    const r4 = createEvent(t5, s4);
    try {
      await e4.handler(r4);
    } catch (t6) {
      const s5 = createError(t6);
      if (isError(t6) || (s5.unhandled = true), setResponseStatus(r4, s5.statusCode, s5.statusMessage), e4.options.onError && await e4.options.onError(s5, r4), r4.handled) return;
      (s5.unhandled || s5.fatal) && console.error("[h3]", s5.fatal ? "[fatal]" : "[unhandled]", s5), e4.options.onBeforeResponse && !r4._onBeforeResponseCalled && await e4.options.onBeforeResponse(r4, { body: s5 }), await (function(e5, t7, s6) {
        if (e5.handled) return;
        const r5 = isError(t7) ? t7 : createError(t7), a6 = { statusCode: r5.statusCode, statusMessage: r5.statusMessage, stack: [], data: r5.data };
        if (s6 && (a6.stack = (r5.stack || "").split("\n").map((e6) => e6.trim())), e5.handled) return;
        setResponseStatus(e5, Number.parseInt(r5.statusCode), r5.statusMessage), e5.node.res.setHeader("content-type", ss.json), e5.node.res.end(JSON.stringify(a6, void 0, 2));
      })(r4, s5, !!e4.options.debug), e4.options.onAfterResponse && !r4._onAfterResponseCalled && await e4.options.onAfterResponse(r4, { body: s5 });
    }
  };
}
function flatHooks(e4, t5 = {}, s4) {
  for (const r4 in e4) {
    const a6 = e4[r4], c4 = s4 ? `${s4}:${r4}` : r4;
    "object" == typeof a6 && null !== a6 ? flatHooks(a6, t5, c4) : "function" == typeof a6 && (t5[c4] = a6);
  }
  return t5;
}
function serialTaskCaller(e4, t5) {
  const s4 = t5.shift(), r4 = hs(s4);
  return e4.reduce((e5, s5) => e5.then(() => r4.run(() => s5(...t5))), Promise.resolve());
}
function parallelTaskCaller(e4, t5) {
  const s4 = t5.shift(), r4 = hs(s4);
  return Promise.all(e4.map((e5) => r4.run(() => e5(...t5))));
}
function callEachWith(e4, t5) {
  for (const s4 of [...e4]) s4(t5);
}
function createHooks() {
  return new Hookable();
}
function isPayloadMethod(e4 = "GET") {
  return ps.has(e4.toUpperCase());
}
function resolveFetchOptions(e4, t5, s4, r4) {
  const a6 = (function(e5, t6, s5) {
    if (!t6) return new s5(e5);
    const r5 = new s5(t6);
    if (e5) for (const [t7, a7] of Symbol.iterator in e5 || Array.isArray(e5) ? e5 : new s5(e5)) r5.set(t7, a7);
    return r5;
  })(t5?.headers ?? e4?.headers, s4?.headers, r4);
  let c4;
  return (s4?.query || s4?.params || t5?.params || t5?.query) && (c4 = { ...s4?.params, ...s4?.query, ...t5?.params, ...t5?.query }), { ...s4, ...t5, query: c4, params: c4, headers: a6 };
}
async function callHooks(e4, t5) {
  if (t5) if (Array.isArray(t5)) for (const s4 of t5) await s4(e4);
  else await t5(e4);
}
function createFetch(e4 = {}) {
  const { fetch: t5 = globalThis.fetch, Headers: s4 = globalThis.Headers, AbortController: r4 = globalThis.AbortController } = e4;
  async function onError(e5) {
    const t6 = e5.error && "AbortError" === e5.error.name && !e5.options.timeout || false;
    if (false !== e5.options.retry && !t6) {
      let t7;
      t7 = "number" == typeof e5.options.retry ? e5.options.retry : isPayloadMethod(e5.options.method) ? 0 : 1;
      const s6 = e5.response && e5.response.status || 500;
      if (t7 > 0 && (Array.isArray(e5.options.retryStatusCodes) ? e5.options.retryStatusCodes.includes(s6) : ys.has(s6))) {
        const s7 = "function" == typeof e5.options.retryDelay ? e5.options.retryDelay(e5) : e5.options.retryDelay || 0;
        return s7 > 0 && await new Promise((e6) => setTimeout(e6, s7)), $fetchRaw(e5.request, { ...e5.options, retry: t7 - 1 });
      }
    }
    const s5 = (function(e6) {
      const t7 = e6.error?.message || e6.error?.toString() || "", s6 = e6.request?.method || e6.options?.method || "GET", r5 = e6.request?.url || String(e6.request) || "/", a6 = `[${s6}] ${JSON.stringify(r5)}`, c4 = e6.response ? `${e6.response.status} ${e6.response.statusText}` : "<no response>", u3 = new FetchError(`${a6}: ${c4}${t7 ? ` ${t7}` : ""}`, e6.error ? { cause: e6.error } : void 0);
      for (const t8 of ["request", "options", "response"]) Object.defineProperty(u3, t8, { get: /* @__PURE__ */ __name(() => e6[t8], "get") });
      for (const [t8, s7] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]]) Object.defineProperty(u3, t8, { get: /* @__PURE__ */ __name(() => e6.response && e6.response[s7], "get") });
      return u3;
    })(e5);
    throw Error.captureStackTrace && Error.captureStackTrace(s5, $fetchRaw), s5;
  }
  __name(onError, "onError");
  const $fetchRaw = /* @__PURE__ */ __name(async function(a6, c4 = {}) {
    const u3 = { request: a6, options: resolveFetchOptions(a6, c4, e4.defaults, s4), response: void 0, error: void 0 };
    if (u3.options.method && (u3.options.method = u3.options.method.toUpperCase()), u3.options.onRequest && (await callHooks(u3, u3.options.onRequest), u3.options.headers instanceof s4 || (u3.options.headers = new s4(u3.options.headers || {}))), "string" == typeof u3.request && (u3.options.baseURL && (u3.request = (function(e5, t6) {
      if (isEmptyURL(t6) || hasProtocol(e5)) return e5;
      const s5 = withoutTrailingSlash(t6);
      return e5.startsWith(s5) ? e5 : joinURL(s5, e5);
    })(u3.request, u3.options.baseURL)), u3.options.query && (u3.request = withQuery(u3.request, u3.options.query), delete u3.options.query), "query" in u3.options && delete u3.options.query, "params" in u3.options && delete u3.options.params), u3.options.body && isPayloadMethod(u3.options.method)) if ((function(e5) {
      if (void 0 === e5) return false;
      const t6 = typeof e5;
      return "string" === t6 || "number" === t6 || "boolean" === t6 || null === t6 || "object" === t6 && (!!Array.isArray(e5) || !e5.buffer && !(e5 instanceof FormData || e5 instanceof URLSearchParams) && (e5.constructor && "Object" === e5.constructor.name || "function" == typeof e5.toJSON));
    })(u3.options.body)) {
      const e5 = u3.options.headers.get("content-type");
      "string" != typeof u3.options.body && (u3.options.body = "application/x-www-form-urlencoded" === e5 ? new URLSearchParams(u3.options.body).toString() : JSON.stringify(u3.options.body)), e5 || u3.options.headers.set("content-type", "application/json"), u3.options.headers.has("accept") || u3.options.headers.set("accept", "application/json");
    } else ("pipeTo" in u3.options.body && "function" == typeof u3.options.body.pipeTo || "function" == typeof u3.options.body.pipe) && ("duplex" in u3.options || (u3.options.duplex = "half"));
    let d3;
    if (!u3.options.signal && u3.options.timeout) {
      const e5 = new r4();
      d3 = setTimeout(() => {
        const t6 = new Error("[TimeoutError]: The operation was aborted due to timeout");
        t6.name = "TimeoutError", t6.code = 23, e5.abort(t6);
      }, u3.options.timeout), u3.options.signal = e5.signal;
    }
    try {
      u3.response = await t5(u3.request, u3.options);
    } catch (e5) {
      return u3.error = e5, u3.options.onRequestError && await callHooks(u3, u3.options.onRequestError), await onError(u3);
    } finally {
      d3 && clearTimeout(d3);
    }
    if ((u3.response.body || u3.response._bodyInit) && !bs.has(u3.response.status) && "HEAD" !== u3.options.method) {
      const e5 = (u3.options.parseResponse ? "json" : u3.options.responseType) || (function(e6 = "") {
        if (!e6) return "json";
        const t6 = e6.split(";").shift() || "";
        return gs.test(t6) ? "json" : "text/event-stream" === t6 ? "stream" : ms.has(t6) || t6.startsWith("text/") ? "text" : "blob";
      })(u3.response.headers.get("content-type") || "");
      switch (e5) {
        case "json": {
          const e6 = await u3.response.text(), t6 = u3.options.parseResponse || destr;
          u3.response._data = t6(e6);
          break;
        }
        case "stream":
          u3.response._data = u3.response.body || u3.response._bodyInit;
          break;
        default:
          u3.response._data = await u3.response[e5]();
      }
    }
    return u3.options.onResponse && await callHooks(u3, u3.options.onResponse), !u3.options.ignoreResponseError && u3.response.status >= 400 && u3.response.status < 600 ? (u3.options.onResponseError && await callHooks(u3, u3.options.onResponseError), await onError(u3)) : u3.response;
  }, "$fetchRaw"), $fetch = /* @__PURE__ */ __name(async function(e5, t6) {
    return (await $fetchRaw(e5, t6))._data;
  }, "$fetch");
  return $fetch.raw = $fetchRaw, $fetch.native = (...e5) => t5(...e5), $fetch.create = (t6 = {}, s5 = {}) => createFetch({ ...e4, ...s5, defaults: { ...e4.defaults, ...s5.defaults, ...t6 } }), $fetch;
}
function asyncCall(e4, ...t5) {
  try {
    return (s4 = e4(...t5)) && "function" == typeof s4.then ? s4 : Promise.resolve(s4);
  } catch (e5) {
    return Promise.reject(e5);
  }
  var s4;
}
function stringify2(e4) {
  if (/* @__PURE__ */ (function(e5) {
    const t5 = typeof e5;
    return null === e5 || "object" !== t5 && "function" !== t5;
  })(e4)) return String(e4);
  if ((function(e5) {
    const t5 = Object.getPrototypeOf(e5);
    return !t5 || t5.isPrototypeOf(Object);
  })(e4) || Array.isArray(e4)) return JSON.stringify(e4);
  if ("function" == typeof e4.toJSON) return stringify2(e4.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function serializeRaw(e4) {
  return "string" == typeof e4 ? e4 : Cs + (function(e5) {
    if (globalThis.Buffer) return r3.from(e5).toString("base64");
    return globalThis.btoa(String.fromCodePoint(...e5));
  })(e4);
}
function deserializeRaw(e4) {
  return "string" != typeof e4 ? e4 : e4.startsWith(Cs) ? (function(e5) {
    if (globalThis.Buffer) return r3.from(e5, "base64");
    return Uint8Array.from(globalThis.atob(e5), (e6) => e6.codePointAt(0));
  })(e4.slice(7)) : e4;
}
function normalizeKey$1(e4) {
  return e4 && e4.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...e4) {
  return normalizeKey$1(e4.join(":"));
}
function normalizeBaseKey(e4) {
  return (e4 = normalizeKey$1(e4)) ? e4 + ":" : "";
}
function watch2(e4, t5, s4) {
  return e4.watch ? e4.watch((e5, r4) => t5(e5, s4 + r4)) : () => {
  };
}
async function dispose(e4) {
  "function" == typeof e4.dispose && await asyncCall(e4.dispose);
}
function useStorage(e4 = "") {
  return e4 ? (function(e5, t5) {
    if (!(t5 = normalizeBaseKey(t5))) return e5;
    const s4 = { ...e5 };
    for (const r4 of Ts) s4[r4] = (s5 = "", ...a6) => e5[r4](t5 + s5, ...a6);
    return s4.getKeys = (s5 = "", ...r4) => e5.getKeys(t5 + s5, ...r4).then((e6) => e6.map((e7) => e7.slice(t5.length))), s4.keys = s4.getKeys, s4.getItems = async (s5, r4) => {
      const a6 = s5.map((e6) => "string" == typeof e6 ? t5 + e6 : { ...e6, key: t5 + e6.key });
      return (await e5.getItems(a6, r4)).map((e6) => ({ key: e6.key.slice(t5.length), value: e6.value }));
    }, s4.setItems = async (s5, r4) => {
      const a6 = s5.map((e6) => ({ key: t5 + e6.key, value: e6.value, options: e6.options }));
      return e5.setItems(a6, r4);
    }, s4;
  })(xs, e4) : xs;
}
function hash(e4) {
  return (function(e5) {
    return new k2().finalize(e5).toBase64();
  })("string" == typeof e4 ? e4 : (function(e5) {
    const t5 = new As();
    return t5.dispatch(e5), t5.buff;
  })(e4)).replace(/[-_]/g, "").slice(0, 10);
}
function defineCachedFunction(e4, t5 = {}) {
  t5 = { name: "_", base: "/cache", swr: true, maxAge: 1, ...t5 };
  const s4 = {}, r4 = t5.group || "nitro/functions", a6 = t5.name || e4.name || "_", c4 = t5.integrity || hash([e4, t5]), u3 = t5.validate || ((e5) => void 0 !== e5.value);
  return async (...d3) => {
    if (await t5.shouldBypassCache?.(...d3)) return e4(...d3);
    const h4 = await (t5.getKey || getKey)(...d3), f3 = await t5.shouldInvalidateCache?.(...d3), m3 = await (async function(e5, d4, h5, f4) {
      const m4 = [t5.base, r4, a6, e5 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
      let g5 = await useStorage().getItem(m4).catch((e6) => {
        console.error("[cache] Cache read error.", e6), useNitroApp().captureError(e6, { event: f4, tags: ["cache"] });
      }) || {};
      if ("object" != typeof g5) {
        g5 = {};
        const e6 = new Error("Malformed data read from cache.");
        console.error("[cache]", e6), useNitroApp().captureError(e6, { event: f4, tags: ["cache"] });
      }
      const S3 = 1e3 * (t5.maxAge ?? 0);
      S3 && (g5.expires = Date.now() + S3);
      const _3 = h5 || g5.integrity !== c4 || S3 && Date.now() - (g5.mtime || 0) > S3 || false === u3(g5), L3 = _3 ? (async () => {
        const r5 = s4[e5];
        r5 || (void 0 !== g5.value && (t5.staleMaxAge || 0) >= 0 && false === t5.swr && (g5.value = void 0, g5.integrity = void 0, g5.mtime = void 0, g5.expires = void 0), s4[e5] = Promise.resolve(d4()));
        try {
          g5.value = await s4[e5];
        } catch (t6) {
          throw r5 || delete s4[e5], t6;
        }
        if (!r5 && (g5.mtime = Date.now(), g5.integrity = c4, delete s4[e5], false !== u3(g5))) {
          let e6;
          t5.maxAge && !t5.swr && (e6 = { ttl: t5.maxAge });
          const s5 = useStorage().setItem(m4, g5, e6).catch((e7) => {
            console.error("[cache] Cache write error.", e7), useNitroApp().captureError(e7, { event: f4, tags: ["cache"] });
          });
          f4?.waitUntil && f4.waitUntil(s5);
        }
      })() : Promise.resolve();
      return void 0 === g5.value ? await L3 : _3 && f4 && f4.waitUntil && f4.waitUntil(L3), t5.swr && false !== u3(g5) ? (L3.catch((e6) => {
        console.error("[cache] SWR handler error.", e6), useNitroApp().captureError(e6, { event: f4, tags: ["cache"] });
      }), g5) : L3.then(() => g5);
    })(h4, () => e4(...d3), f3, d3[0] && isEvent(d3[0]) ? d3[0] : void 0);
    let g4 = m3.value;
    return t5.transform && (g4 = await t5.transform(m3, ...d3) || g4), g4;
  };
}
function getKey(...e4) {
  return e4.length > 0 ? hash(e4) : "";
}
function escapeKey(e4) {
  return String(e4).replace(/\W/g, "");
}
function cloneWithProxy(e4, t5) {
  return new Proxy(e4, { get: /* @__PURE__ */ __name((e5, s4, r4) => s4 in t5 ? t5[s4] : Reflect.get(e5, s4, r4), "get"), set: /* @__PURE__ */ __name((e5, s4, r4, a6) => s4 in t5 ? (t5[s4] = r4, true) : Reflect.set(e5, s4, r4, a6), "set") });
}
function klona(e4) {
  if ("object" != typeof e4) return e4;
  var t5, s4, r4 = Object.prototype.toString.call(e4);
  if ("[object Object]" === r4) {
    if (e4.constructor !== Object && "function" == typeof e4.constructor) for (t5 in s4 = new e4.constructor(), e4) e4.hasOwnProperty(t5) && s4[t5] !== e4[t5] && (s4[t5] = klona(e4[t5]));
    else for (t5 in s4 = {}, e4) "__proto__" === t5 ? Object.defineProperty(s4, t5, { value: klona(e4[t5]), configurable: true, enumerable: true, writable: true }) : s4[t5] = klona(e4[t5]);
    return s4;
  }
  if ("[object Array]" === r4) {
    for (t5 = e4.length, s4 = Array(t5); t5--; ) s4[t5] = klona(e4[t5]);
    return s4;
  }
  return "[object Set]" === r4 ? (s4 = /* @__PURE__ */ new Set(), e4.forEach(function(e5) {
    s4.add(klona(e5));
  }), s4) : "[object Map]" === r4 ? (s4 = /* @__PURE__ */ new Map(), e4.forEach(function(e5, t6) {
    s4.set(klona(t6), klona(e5));
  }), s4) : "[object Date]" === r4 ? /* @__PURE__ */ new Date(+e4) : "[object RegExp]" === r4 ? ((s4 = new RegExp(e4.source, e4.flags)).lastIndex = e4.lastIndex, s4) : "[object DataView]" === r4 ? new e4.constructor(klona(e4.buffer)) : "[object ArrayBuffer]" === r4 ? e4.slice(0) : "Array]" === r4.slice(-6) ? new e4.constructor(e4) : e4;
}
function isUppercase(e4 = "") {
  if (!$s.test(e4)) return e4 !== e4.toLowerCase();
}
function kebabCase(e4, t5) {
  return e4 ? (Array.isArray(e4) ? e4 : (function(e5) {
    const t6 = ks, s4 = [];
    if (!e5 || "string" != typeof e5) return s4;
    let r4, a6, c4 = "";
    for (const u3 of e5) {
      const e6 = t6.includes(u3);
      if (true === e6) {
        s4.push(c4), c4 = "", r4 = void 0;
        continue;
      }
      const d3 = isUppercase(u3);
      if (false === a6) {
        if (false === r4 && true === d3) {
          s4.push(c4), c4 = u3, r4 = d3;
          continue;
        }
        if (true === r4 && false === d3 && c4.length > 1) {
          const e7 = c4.at(-1);
          s4.push(c4.slice(0, Math.max(0, c4.length - 1))), c4 = e7 + u3, r4 = d3;
          continue;
        }
      }
      c4 += u3, r4 = d3, a6 = e6;
    }
    return s4.push(c4), s4;
  })(e4)).map((e5) => e5.toLowerCase()).join(t5) : "";
}
function getEnv(e4, t5) {
  const s4 = (r4 = e4, kebabCase(r4 || "", "_")).toUpperCase();
  var r4;
  return destr(S2.env[t5.prefix + s4] ?? S2.env[t5.altPrefix + s4]);
}
function _isObject(e4) {
  return "object" == typeof e4 && !Array.isArray(e4);
}
function applyEnv(e4, t5, s4 = "") {
  for (const r4 in e4) {
    const a6 = s4 ? `${s4}_${r4}` : r4, c4 = getEnv(a6, t5);
    _isObject(e4[r4]) ? _isObject(c4) ? (e4[r4] = { ...e4[r4], ...c4 }, applyEnv(e4[r4], t5, a6)) : void 0 === c4 ? applyEnv(e4[r4], t5, a6) : e4[r4] = c4 ?? e4[r4] : e4[r4] = c4 ?? e4[r4], t5.envExpansion && "string" == typeof e4[r4] && (e4[r4] = _expandFromEnv(e4[r4]));
  }
  return e4;
}
function _expandFromEnv(e4) {
  return e4.replace(Ps, (e5, t5) => S2.env[t5] || e5);
}
function useRuntimeConfig2(e4) {
  if (!e4) return Is;
  if (e4.context.nitro.runtimeConfig) return e4.context.nitro.runtimeConfig;
  const t5 = klona(js);
  return applyEnv(t5, Os), e4.context.nitro.runtimeConfig = t5, t5;
}
function _deepFreeze(e4) {
  const t5 = Object.getOwnPropertyNames(e4);
  for (const s4 of t5) {
    const t6 = e4[s4];
    t6 && "object" == typeof t6 && _deepFreeze(t6);
  }
  return Object.freeze(e4);
}
function createRouteRulesHandler(e4) {
  return cs((t5) => {
    const s4 = getRouteRules(t5);
    if (s4.headers && os(t5, s4.headers), s4.redirect) {
      let e5 = s4.redirect.to;
      if (e5.endsWith("/**")) {
        let r4 = t5.path;
        const a6 = s4.redirect._redirectStripBase;
        a6 && (r4 = withoutBase(r4, a6)), e5 = joinURL(e5.slice(0, -3), r4);
      } else if (t5.path.includes("?")) {
        e5 = withQuery(e5, getQuery$1(t5.path));
      }
      return (function(e6, t6, s5 = 302) {
        return e6.node.res.statusCode = sanitizeStatusCode(s5, e6.node.res.statusCode), e6.node.res.setHeader("location", t6), send2(e6, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t6.replace(/"/g, "%22")}"></head></html>`, ss.html);
      })(t5, e5, s4.redirect.statusCode);
    }
    if (s4.proxy) {
      let r4 = s4.proxy.to;
      if (r4.endsWith("/**")) {
        let e5 = t5.path;
        const a6 = s4.proxy._proxyStripBase;
        a6 && (e5 = withoutBase(e5, a6)), r4 = joinURL(r4.slice(0, -3), e5);
      } else if (t5.path.includes("?")) {
        r4 = withQuery(r4, getQuery$1(t5.path));
      }
      return proxyRequest(t5, r4, { fetch: e4.localFetch, ...s4.proxy });
    }
  });
}
function getRouteRules(e4) {
  return e4.context._nitro = e4.context._nitro || {}, e4.context._nitro.routeRules || (e4.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e4.path.split("?")[0], useRuntimeConfig2().app.baseURL))), e4.context._nitro.routeRules;
}
function getRouteRulesForPath(e4) {
  return Wt2({}, ...Ks.matchAll(e4).reverse());
}
function joinHeaders(e4) {
  return Array.isArray(e4) ? e4.join(", ") : String(e4);
}
function normalizeCookieHeader(e4 = "") {
  return splitCookiesString(joinHeaders(e4));
}
function normalizeCookieHeaders(e4) {
  const t5 = new Headers();
  for (const [s4, r4] of e4) if ("set-cookie" === s4) for (const e5 of normalizeCookieHeader(r4)) t5.append("set-cookie", e5);
  else t5.set(s4, joinHeaders(r4));
  return t5;
}
function hasReqHeader(e4, t5, s4) {
  const r4 = (function(e5, t6) {
    return getRequestHeaders(e5)[t6.toLowerCase()];
  })(e4, t5);
  return r4 && "string" == typeof r4 && r4.toLowerCase().includes(s4);
}
function defaultHandler(e4, t5, s4) {
  const r4 = e4.unhandled || e4.fatal, a6 = e4.statusCode || 500, c4 = e4.statusMessage || "Server Error", u3 = (function(e5, t6 = {}) {
    const s5 = (function(e6, t7 = {}) {
      if (t7.xForwardedHost) {
        const t8 = e6.node.req.headers["x-forwarded-host"], s6 = (t8 || "").split(",").shift()?.trim();
        if (s6) return s6;
      }
      return e6.node.req.headers.host || "localhost";
    })(e5, t6), r5 = (function(e6, t7 = {}) {
      return false !== t7.xForwardedProto && "https" === e6.node.req.headers["x-forwarded-proto"] || e6.node.req.connection?.encrypted ? "https" : "http";
    })(e5, t6), a7 = (e5.node.req.originalUrl || e5.path).replace(/^[/\\]+/g, "/");
    return new URL(a7, `${r5}://${s5}`);
  })(t5, { xForwardedHost: true, xForwardedProto: true });
  if (404 === a6) {
    const e5 = "/";
    if (/^\/[^/]/.test(e5) && !u3.pathname.startsWith(e5)) {
      return { status: 302, statusText: "Found", headers: { location: `${e5}${u3.pathname.slice(1)}${u3.search}` }, body: "Redirecting..." };
    }
  }
  if (r4 && !s4?.silent) {
    const s5 = [e4.unhandled && "[unhandled]", e4.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${s5} [${t5.method}] ${u3}
`, e4);
  }
  const d3 = { "content-type": "application/json", "x-content-type-options": "nosniff", "x-frame-options": "DENY", "referrer-policy": "no-referrer", "content-security-policy": "script-src 'none'; frame-ancestors 'none';" };
  setResponseStatus(t5, a6, c4), 404 !== a6 && (function(e5, t6) {
    return e5.node.res.getHeader(t6);
  })(t5, "cache-control") || (d3["cache-control"] = "no-cache");
  return { status: a6, statusText: c4, headers: d3, body: { error: true, url: u3.href, statusCode: a6, statusMessage: c4, message: r4 ? "Server Error" : e4.message, data: r4 ? void 0 : e4.data } };
}
function is(e4, t5) {
  if (!e4 || "object" != typeof e4) return false;
  if (e4 instanceof t5) return true;
  if (!Object.prototype.hasOwnProperty.call(t5, Js)) throw new Error(`Class "${t5.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
  let s4 = Object.getPrototypeOf(e4).constructor;
  if (s4) for (; s4; ) {
    if (Js in s4 && s4[Js] === t5[Js]) return true;
    s4 = Object.getPrototypeOf(s4);
  }
  return false;
}
function getTableName(e4) {
  return e4[Gs];
}
function getTableUniqueName(e4) {
  return `${e4[Ys] ?? "public"}.${e4[Gs]}`;
}
function isSQLWrapper(e4) {
  return null != e4 && "function" == typeof e4.getSQL;
}
function sql(e4, ...t5) {
  const s4 = [];
  (t5.length > 0 || e4.length > 0 && "" !== e4[0]) && s4.push(new StringChunk(e4[0]));
  for (const [r4, a6] of t5.entries()) s4.push(a6, new StringChunk(e4[r4 + 1]));
  return new SQL(s4);
}
function fillPlaceholders(e4, t5) {
  return e4.map((e5) => {
    if (is(e5, Placeholder)) {
      if (!(e5.name in t5)) throw new Error(`No value for placeholder "${e5.name}" was provided`);
      return t5[e5.name];
    }
    if (is(e5, Param) && is(e5.value, Placeholder)) {
      if (!(e5.value.name in t5)) throw new Error(`No value for placeholder "${e5.value.name}" was provided`);
      return e5.encoder.mapToDriverValue(t5[e5.value.name]);
    }
    return e5;
  });
}
function mapResultRow(e4, t5, s4) {
  const r4 = {}, a6 = e4.reduce((e5, { path: a7, field: c4 }, u3) => {
    let d3;
    d3 = is(c4, Column) ? c4 : is(c4, SQL) ? c4.decoder : is(c4, Subquery) ? c4._.sql.decoder : c4.sql.decoder;
    let h4 = e5;
    for (const [e6, f3] of a7.entries()) if (e6 < a7.length - 1) f3 in h4 || (h4[f3] = {}), h4 = h4[f3];
    else {
      const e7 = t5[u3], m3 = h4[f3] = null === e7 ? null : d3.mapFromDriverValue(e7);
      if (s4 && is(c4, Column) && 2 === a7.length) {
        const e8 = a7[0];
        e8 in r4 ? "string" == typeof r4[e8] && r4[e8] !== getTableName(c4.table) && (r4[e8] = false) : r4[e8] = null === m3 && getTableName(c4.table);
      }
    }
    return e5;
  }, {});
  if (s4 && Object.keys(r4).length > 0) for (const [e5, t6] of Object.entries(r4)) "string" != typeof t6 || s4[t6] || (a6[e5] = null);
  return a6;
}
function orderSelectedFields(e4, t5) {
  return Object.entries(e4).reduce((e5, [s4, r4]) => {
    if ("string" != typeof s4) return e5;
    const a6 = t5 ? [...t5, s4] : [s4];
    return is(r4, Column) || is(r4, SQL) || is(r4, SQL.Aliased) || is(r4, Subquery) ? e5.push({ path: a6, field: r4 }) : is(r4, Table) ? e5.push(...orderSelectedFields(r4[Table.Symbol.Columns], a6)) : e5.push(...orderSelectedFields(r4, a6)), e5;
  }, []);
}
function haveSameKeys(e4, t5) {
  const s4 = Object.keys(e4), r4 = Object.keys(t5);
  if (s4.length !== r4.length) return false;
  for (const [e5, t6] of s4.entries()) if (t6 !== r4[e5]) return false;
  return true;
}
function mapUpdateSet(e4, t5) {
  const s4 = Object.entries(t5).filter(([, e5]) => void 0 !== e5).map(([t6, s5]) => is(s5, SQL) || is(s5, Column) ? [t6, s5] : [t6, new Param(s5, e4[Table.Symbol.Columns][t6])]);
  if (0 === s4.length) throw new Error("No values to set");
  return Object.fromEntries(s4);
}
function getTableLikeName(e4) {
  return is(e4, Subquery) ? e4._.alias : is(e4, View) ? e4[lr2].name : is(e4, SQL) ? void 0 : e4[Table.Symbol.IsAlias] ? e4[Table.Symbol.Name] : e4[Table.Symbol.BaseName];
}
function getColumnNameAndConfig(e4, t5) {
  return { name: "string" == typeof e4 && e4.length > 0 ? e4 : "", config: "object" == typeof e4 ? e4 : t5 };
}
function bindIfParam(e4, t5) {
  return !(function(e5) {
    return "object" == typeof e5 && null !== e5 && "mapToDriverValue" in e5 && "function" == typeof e5.mapToDriverValue;
  })(t5) || isSQLWrapper(e4) || is(e4, Param) || is(e4, Placeholder) || is(e4, Column) || is(e4, Table) || is(e4, View) ? e4 : new Param(e4, t5);
}
function and(...e4) {
  const t5 = e4.filter((e5) => void 0 !== e5);
  if (0 !== t5.length) return 1 === t5.length ? new SQL(t5) : new SQL([new StringChunk("("), sql.join(t5, new StringChunk(" and ")), new StringChunk(")")]);
}
function or2(...e4) {
  const t5 = e4.filter((e5) => void 0 !== e5);
  if (0 !== t5.length) return 1 === t5.length ? new SQL(t5) : new SQL([new StringChunk("("), sql.join(t5, new StringChunk(" or ")), new StringChunk(")")]);
}
function not(e4) {
  return sql`not ${e4}`;
}
function inArray(e4, t5) {
  return Array.isArray(t5) ? 0 === t5.length ? sql`false` : sql`${e4} in ${t5.map((t6) => bindIfParam(t6, e4))}` : sql`${e4} in ${bindIfParam(t5, e4)}`;
}
function notInArray(e4, t5) {
  return Array.isArray(t5) ? 0 === t5.length ? sql`true` : sql`${e4} not in ${t5.map((t6) => bindIfParam(t6, e4))}` : sql`${e4} not in ${bindIfParam(t5, e4)}`;
}
function isNull(e4) {
  return sql`${e4} is null`;
}
function isNotNull(e4) {
  return sql`${e4} is not null`;
}
function exists(e4) {
  return sql`exists ${e4}`;
}
function notExists(e4) {
  return sql`not exists ${e4}`;
}
function between(e4, t5, s4) {
  return sql`${e4} between ${bindIfParam(t5, e4)} and ${bindIfParam(s4, e4)}`;
}
function notBetween(e4, t5, s4) {
  return sql`${e4} not between ${bindIfParam(t5, e4)} and ${bindIfParam(s4, e4)}`;
}
function like(e4, t5) {
  return sql`${e4} like ${t5}`;
}
function notLike(e4, t5) {
  return sql`${e4} not like ${t5}`;
}
function ilike(e4, t5) {
  return sql`${e4} ilike ${t5}`;
}
function notIlike(e4, t5) {
  return sql`${e4} not ilike ${t5}`;
}
function asc(e4) {
  return sql`${e4} asc`;
}
function desc(e4) {
  return sql`${e4} desc`;
}
function createOne(e4) {
  return function(t5, s4) {
    return new One(e4, t5, s4, s4?.fields.reduce((e5, t6) => e5 && t6.notNull, true) ?? false);
  };
}
function createMany(e4) {
  return function(t5, s4) {
    return new Many(e4, t5, s4);
  };
}
function normalizeRelation(e4, t5, s4) {
  if (is(s4, One) && s4.config) return { fields: s4.config.fields, references: s4.config.references };
  const r4 = t5[getTableUniqueName(s4.referencedTable)];
  if (!r4) throw new Error(`Table "${s4.referencedTable[Table.Symbol.Name]}" not found in schema`);
  const a6 = e4[r4];
  if (!a6) throw new Error(`Table "${r4}" not found in schema`);
  const c4 = s4.sourceTable, u3 = t5[getTableUniqueName(c4)];
  if (!u3) throw new Error(`Table "${c4[Table.Symbol.Name]}" not found in schema`);
  const d3 = [];
  for (const e5 of Object.values(a6.relations)) (s4.relationName && s4 !== e5 && e5.relationName === s4.relationName || !s4.relationName && e5.referencedTable === s4.sourceTable) && d3.push(e5);
  if (d3.length > 1) throw s4.relationName ? new Error(`There are multiple relations with name "${s4.relationName}" in table "${r4}"`) : new Error(`There are multiple relations between "${r4}" and "${s4.sourceTable[Table.Symbol.Name]}". Please specify relation name`);
  if (d3[0] && is(d3[0], One) && d3[0].config) return { fields: d3[0].config.references, references: d3[0].config.fields };
  throw new Error(`There is not enough information to infer relation "${u3}.${s4.fieldName}"`);
}
function createTableRelationsHelpers(e4) {
  return { one: createOne(e4), many: createMany(e4) };
}
function mapRelationalRow(e4, t5, s4, r4, a6 = (e5) => e5) {
  const c4 = {};
  for (const [u3, d3] of r4.entries()) if (d3.isJson) {
    const r5 = t5.relations[d3.tsKey], h4 = s4[u3], f3 = "string" == typeof h4 ? JSON.parse(h4) : h4;
    c4[d3.tsKey] = is(r5, One) ? f3 && mapRelationalRow(e4, e4[d3.relationTableTsKey], f3, d3.selection, a6) : f3.map((t6) => mapRelationalRow(e4, e4[d3.relationTableTsKey], t6, d3.selection, a6));
  } else {
    const e5 = a6(s4[u3]), t6 = d3.field;
    let r5;
    r5 = is(t6, Column) ? t6 : is(t6, SQL) ? t6.decoder : t6.sql.decoder, c4[d3.tsKey] = null === e5 ? null : r5.mapFromDriverValue(e5);
  }
  return c4;
}
function aliasedTable(e4, t5) {
  return new Proxy(e4, new TableAliasProxyHandler(t5, false));
}
function aliasedTableColumn(e4, t5) {
  return new Proxy(e4, new ColumnAliasProxyHandler(new Proxy(e4.table, new TableAliasProxyHandler(t5, false))));
}
function mapColumnsInAliasedSQLToAlias(e4, t5) {
  return new SQL.Aliased(mapColumnsInSQLToAlias(e4.sql, t5), e4.fieldAlias);
}
function mapColumnsInSQLToAlias(e4, t5) {
  return sql.join(e4.queryChunks.map((e5) => is(e5, Column) ? aliasedTableColumn(e5, t5) : is(e5, SQL) ? mapColumnsInSQLToAlias(e5, t5) : is(e5, SQL.Aliased) ? mapColumnsInAliasedSQLToAlias(e5, t5) : e5));
}
function blob(e4, t5) {
  const { name: s4, config: r4 } = getColumnNameAndConfig(e4, t5);
  return "json" === r4?.mode ? new SQLiteBlobJsonBuilder(s4) : "bigint" === r4?.mode ? new SQLiteBigIntBuilder(s4) : new SQLiteBlobBufferBuilder(s4);
}
function customType(e4) {
  return (t5, s4) => {
    const { name: r4, config: a6 } = getColumnNameAndConfig(t5, s4);
    return new SQLiteCustomColumnBuilder(r4, a6, e4);
  };
}
function integer(e4, t5) {
  const { name: s4, config: r4 } = getColumnNameAndConfig(e4, t5);
  return "timestamp" === r4?.mode || "timestamp_ms" === r4?.mode ? new SQLiteTimestampBuilder(s4, r4.mode) : "boolean" === r4?.mode ? new SQLiteBooleanBuilder(s4, r4.mode) : new SQLiteIntegerBuilder(s4);
}
function numeric(e4, t5) {
  const { name: s4, config: r4 } = getColumnNameAndConfig(e4, t5), a6 = r4?.mode;
  return "number" === a6 ? new SQLiteNumericNumberBuilder(s4) : "bigint" === a6 ? new SQLiteNumericBigIntBuilder(s4) : new SQLiteNumericBuilder(s4);
}
function real(e4) {
  return new SQLiteRealBuilder(e4 ?? "");
}
function text(e4, t5 = {}) {
  const { name: s4, config: r4 } = getColumnNameAndConfig(e4, t5);
  return "json" === r4.mode ? new SQLiteTextJsonBuilder(s4) : new SQLiteTextBuilder(s4, r4);
}
function sqliteTableBase(e4, t5, s4, r4, a6 = e4) {
  const c4 = new SQLiteTable(e4, r4, a6), u3 = "function" == typeof t5 ? t5({ blob, customType, integer, numeric, real, text }) : t5, d3 = Object.fromEntries(Object.entries(u3).map(([e5, t6]) => {
    const s5 = t6;
    s5.setName(e5);
    const r5 = s5.build(c4);
    return c4[gr2].push(...s5.buildForeignKeys(r5, c4)), [e5, r5];
  })), h4 = Object.assign(c4, d3);
  return h4[Table.Symbol.Columns] = d3, h4[Table.Symbol.ExtraConfigColumns] = d3, h4;
}
function extractUsedTable(e4) {
  return is(e4, SQLiteTable) ? [`${e4[Table.Symbol.BaseName]}`] : is(e4, Subquery) ? e4._.usedTables ?? [] : is(e4, SQL) ? e4.usedTables ?? [] : [];
}
function toSnakeCase(e4) {
  return (e4.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []).map((e5) => e5.toLowerCase()).join("_");
}
function toCamelCase(e4) {
  return (e4.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []).reduce((e5, t5, s4) => e5 + (0 === s4 ? t5.toLowerCase() : `${t5[0].toUpperCase()}${t5.slice(1)}`), "");
}
function noopCase(e4) {
  return e4;
}
function createSetOperator(e4, t5) {
  return (s4, r4, ...a6) => {
    const c4 = [r4, ...a6].map((s5) => ({ type: e4, isAll: t5, rightSelect: s5 }));
    for (const e5 of c4) if (!haveSameKeys(s4.getSelectedFields(), e5.rightSelect.getSelectedFields())) throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");
    return s4.addSetOperators(c4);
  };
}
async function hashQuery(e4, t5) {
  const s4 = `${e4}-${JSON.stringify(t5)}`, r4 = new TextEncoder().encode(s4), a6 = await crypto.subtle.digest("SHA-256", r4), c4 = [...new Uint8Array(a6)].map((e5) => e5.toString(16).padStart(2, "0")).join("");
  return c4;
}
function d1ToRawMapping(e4) {
  const t5 = [];
  for (const s4 of e4) {
    const e5 = Object.keys(s4).map((e6) => s4[e6]);
    t5.push(e5);
  }
  return t5;
}
function defineRenderHandler(e4) {
  const t5 = useRuntimeConfig2();
  return cs(async (s4) => {
    const r4 = useNitroApp(), a6 = { event: s4, render: e4, response: void 0 };
    if (await r4.hooks.callHook("render:before", a6), !a6.response) {
      if (s4.path === `${t5.app.baseURL}favicon.ico`) return setResponseHeader(s4, "Content-Type", "image/x-icon"), send2(s4, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      if (a6.response = await a6.render(s4), !a6.response) {
        const e5 = getResponseStatus(s4);
        return setResponseStatus(s4, 200 === e5 ? 500 : e5), send2(s4, "No response returned from render handler: " + s4.path);
      }
    }
    return await r4.hooks.callHook("render:response", a6.response, a6), a6.response.headers && setResponseHeaders(s4, a6.response.headers), (a6.response.statusCode || a6.response.statusMessage) && setResponseStatus(s4, a6.response.statusCode, a6.response.statusMessage), a6.response.body;
  });
}
function baseURL() {
  return useRuntimeConfig2().app.baseURL;
}
function buildAssetsURL(...e4) {
  return joinRelativeURL(publicAssetsURL(), useRuntimeConfig2().app.buildAssetsDir, ...e4);
}
function publicAssetsURL(...e4) {
  const t5 = useRuntimeConfig2().app, s4 = t5.cdnURL || t5.baseURL;
  return e4.length ? joinRelativeURL(s4, ...e4) : s4;
}
function getUsers() {
  return Tr2.query.users.findMany();
}
function useNitroApp() {
  return Rr2;
}
var ReadStream2, WriteStream2, d2, Process2, h3, f2, _getEnv, m2, g3, S2, _2, L2, C2, T2, Q2, q2, x3, R2, B, N2, E2, $, P2, j2, O2, I2, M2, H, D2, U2, F2, z3, K2, W, V, J2, G2, Y2, Z2, X, ee2, te2, se2, re2, ie2, oe2, ae2, le2, ce2, ue2, de3, he3, fe3, pe2, me3, ge3, ye3, be3, we3, Se3, ve3, _e3, Le3, Ce3, Te3, Qe3, qe3, xe3, Re3, Be3, Ne3, Ae3, Ee3, $e3, ke3, Pe3, je3, Oe3, Ie3, Me3, He3, De3, Ue3, Fe3, ze3, Ke3, We3, Ve3, Je3, Ge3, Ye3, Ze3, Xe3, et3, tt3, st3, rt3, nt3, it3, ot3, at3, ct3, ut3, dt3, ht3, ft3, pt3, mt3, yt3, bt3, wt3, St3, vt3, _t3, Lt3, Ct3, Tt3, Qt3, qt3, xt3, Rt3, Bt3, Nt3, At3, Et3, $t3, kt3, Pt3, jt3, Ot3, It3, Mt3, Ht3, Dt3, Ut3, Ft3, zt3, Kt3, Wt2, Vt3, i3, Jt3, Gt3, Yt3, A2, y3, w2, Zt3, Xt3, H3Error, es, ts, ss, rs, ns, os, as, ls, H3Event, cs, lazyEventHandler, us, ds, hs, Hookable, fs, FetchError, ps, ms, gs, ys, bs, ws, Ss, vs, _s, Ls, Cs, Ts, memory, Qs, normalizeKey2, qs, xs, Rs, Bs, Ns, k2, l2, As, cachedEventHandler, Es, $s, ks, Ps, js, Os, Is, Ms, Hs, Ds, getContext, Us, Fs, zs, Ks, Ws, Vs, Js, ConsoleLogWriter, DefaultLogger, NoopLogger, Gs, Ys, Zs, Xs, er2, tr2, sr2, rr2, nr2, Table, Column, ColumnBuilder, ir2, Subquery, WithSubquery, ar2, lr2, StringChunk, SQL, Name, cr2, ur2, Param, dr2, Placeholder, hr2, View, fr2, pr2, mr2, PgTable, PrimaryKeyBuilder, PrimaryKey, eq, ne2, gt3, gte, lt3, lte, Relation, Relations, One, Many, ColumnAliasProxyHandler, TableAliasProxyHandler, SelectionProxyHandler, QueryPromise, ForeignKeyBuilder, ForeignKey, SQLiteColumnBuilder, SQLiteColumn, SQLiteBigIntBuilder, SQLiteBigInt, SQLiteBlobJsonBuilder, SQLiteBlobJson, SQLiteBlobBufferBuilder, SQLiteBlobBuffer, SQLiteCustomColumnBuilder, SQLiteCustomColumn, SQLiteBaseIntegerBuilder, SQLiteBaseInteger, SQLiteIntegerBuilder, SQLiteInteger, SQLiteTimestampBuilder, SQLiteTimestamp, SQLiteBooleanBuilder, SQLiteBoolean, SQLiteNumericBuilder, SQLiteNumeric, SQLiteNumericNumberBuilder, SQLiteNumericNumber, SQLiteNumericBigIntBuilder, SQLiteNumericBigInt, SQLiteRealBuilder, SQLiteReal, SQLiteTextBuilder, SQLiteText, SQLiteTextJsonBuilder, SQLiteTextJson, gr2, SQLiteTable, SQLiteDeleteBase, CasingCache, DrizzleError, DrizzleQueryError, TransactionRollbackError, SQLiteViewBase, SQLiteDialect, SQLiteSyncDialect, SQLiteAsyncDialect, TypedQueryBuilder, SQLiteSelectBuilder, SQLiteSelectQueryBuilderBase, SQLiteSelectBase, getSQLiteSetOperators, yr2, br2, wr2, Sr2, QueryBuilder, SQLiteInsertBuilder, SQLiteInsertBase, SQLiteUpdateBuilder, SQLiteUpdateBase, SQLiteCountBuilder, RelationalQueryBuilder, SQLiteRelationalQuery, SQLiteSyncRelationalQuery, SQLiteRaw, BaseSQLiteDatabase, Cache, NoopCache, ExecuteResultSync, SQLitePreparedQuery, SQLiteSession, SQLiteTransaction, SQLiteD1Session, D1Transaction, D1PreparedQuery, DrizzleD1Database, vr2, _r2, Lr2, Cr2, Tr2, Qr, qr2, _lazy_Y8uJcO, xr2, Rr2, Br2, Nr2, Ar2;
var init_nitro = __esm({
  ".output/server/chunks/nitro/nitro.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_process2();
    "global" in globalThis || (globalThis.global = globalThis);
    ReadStream2 = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(e4) {
        this.fd = e4;
      }
      setRawMode(e4) {
        return this.isRaw = e4, this;
      }
    };
    WriteStream2 = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(e4) {
        this.fd = e4;
      }
      clearLine(e4, t5) {
        return t5 && t5(), false;
      }
      clearScreenDown(e4) {
        return e4 && e4(), false;
      }
      cursorTo(e4, t5, s4) {
        return s4 && "function" == typeof s4 && s4(), false;
      }
      moveCursor(e4, t5, s4) {
        return s4 && s4(), false;
      }
      getColorDepth(e4) {
        return 1;
      }
      hasColors(e4, t5) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(e4, t5, s4) {
        e4 instanceof Uint8Array && (e4 = new TextDecoder().decode(e4));
        try {
          console.log(e4);
        } catch {
        }
        return s4 && "function" == typeof s4 && s4(), false;
      }
    };
    __name(createNotImplementedError2, "createNotImplementedError");
    __name(notImplemented2, "notImplemented");
    d2 = "22.14.0";
    Process2 = class _Process extends s3 {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(e4) {
        super(), this.env = e4.env, this.hrtime = e4.hrtime, this.nextTick = e4.nextTick;
        for (const e5 of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(s3.prototype)]) {
          const t5 = this[e5];
          "function" == typeof t5 && (this[e5] = t5.bind(this));
        }
      }
      emitWarning(e4, t5, s4) {
        console.warn(`${s4 ? `[${s4}] ` : ""}${t5 ? `${t5}: ` : ""}${e4}`);
      }
      emit(...e4) {
        return super.emit(...e4);
      }
      listeners(e4) {
        return super.listeners(e4);
      }
      #e;
      #t;
      #s;
      get stdin() {
        return this.#e ??= new ReadStream2(0);
      }
      get stdout() {
        return this.#t ??= new WriteStream2(1);
      }
      get stderr() {
        return this.#s ??= new WriteStream2(2);
      }
      #r = "/";
      chdir(e4) {
        this.#r = e4;
      }
      cwd() {
        return this.#r;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${d2}`;
      }
      get versions() {
        return { node: d2 };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError2("process.umask");
      }
      getBuiltinModule() {
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError2("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError2("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError2("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError2("process.kill");
      }
      abort() {
        throw createNotImplementedError2("process.abort");
      }
      dlopen() {
        throw createNotImplementedError2("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError2("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError2("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError2("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError2("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError2("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError2("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError2("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError2("process.openStdin");
      }
      assert() {
        throw createNotImplementedError2("process.assert");
      }
      binding() {
        throw createNotImplementedError2("process.binding");
      }
      permission = { has: notImplemented2("process.permission.has") };
      report = { directory: "", filename: "", signal: "SIGUSR2", compact: false, reportOnFatalError: false, reportOnSignal: false, reportOnUncaughtException: false, getReport: notImplemented2("process.report.getReport"), writeReport: notImplemented2("process.report.writeReport") };
      finalization = { register: notImplemented2("process.finalization.register"), unregister: notImplemented2("process.finalization.unregister"), registerBeforeExit: notImplemented2("process.finalization.registerBeforeExit") };
      memoryUsage = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    h3 = /* @__PURE__ */ Object.create(null);
    f2 = globalThis.process;
    _getEnv = /* @__PURE__ */ __name((e4) => globalThis.__env__ || f2?.env || (e4 ? h3 : globalThis), "_getEnv");
    m2 = new Proxy(h3, { get: /* @__PURE__ */ __name((e4, t5) => _getEnv()[t5] ?? h3[t5], "get"), has: /* @__PURE__ */ __name((e4, t5) => t5 in _getEnv() || t5 in h3, "has"), set: /* @__PURE__ */ __name((e4, t5, s4) => (_getEnv(true)[t5] = s4, true), "set"), deleteProperty: /* @__PURE__ */ __name((e4, t5) => (delete _getEnv(true)[t5], true), "deleteProperty"), ownKeys() {
      const e4 = _getEnv();
      return Object.keys(e4);
    }, getOwnPropertyDescriptor(e4, t5) {
      const s4 = _getEnv();
      if (t5 in s4) return { value: s4[t5], writable: true, enumerable: true, configurable: true };
    } });
    g3 = Object.assign(function(e4) {
      const t5 = Date.now(), s4 = Math.trunc(t5 / 1e3), r4 = t5 % 1e3 * 1e6;
      if (e4) {
        let t6 = s4 - e4[0], a6 = r4 - e4[0];
        return a6 < 0 && (t6 -= 1, a6 = 1e9 + a6), [t6, a6];
      }
      return [s4, r4];
    }, { bigint: /* @__PURE__ */ __name(function() {
      return BigInt(1e6 * Date.now());
    }, "bigint") });
    globalThis.__env__ = t4;
    S2 = new Process2({ env: m2, hrtime: g3, nextTick: process_default.nextTick });
    for (const t5 of ["exit", "getBuiltinModule", "platform"]) t5 in process_default && (S2[t5] = process_default[t5]);
    process_default.features && Object.defineProperty(S2, "features", { get: /* @__PURE__ */ __name(() => process_default.features, "get") });
    ({ abort: _2, addListener: L2, allowedNodeEnvironmentFlags: C2, hasUncaughtExceptionCaptureCallback: T2, setUncaughtExceptionCaptureCallback: Q2, loadEnvFile: q2, sourceMapsEnabled: x3, arch: R2, argv: B, argv0: N2, chdir: E2, config: $, connected: P2, constrainedMemory: j2, availableMemory: O2, cpuUsage: I2, cwd: M2, debugPort: H, dlopen: D2, disconnect: U2, emit: F2, emitWarning: z3, env: K2, eventNames: W, execArgv: V, execPath: J2, exit: G2, finalization: Y2, features: Z2, getBuiltinModule: X, getActiveResourcesInfo: ee2, getMaxListeners: te2, hrtime: se2, kill: re2, listeners: ie2, listenerCount: oe2, memoryUsage: ae2, nextTick: le2, on: ce2, off: ue2, once: de3, pid: he3, platform: fe3, ppid: pe2, prependListener: me3, prependOnceListener: ge3, rawListeners: ye3, release: be3, removeAllListeners: we3, removeListener: Se3, report: ve3, resourceUsage: _e3, setMaxListeners: Le3, setSourceMapsEnabled: Ce3, stderr: Te3, stdin: Qe3, stdout: qe3, title: xe3, umask: Re3, uptime: Be3, version: Ne3, versions: Ae3, domain: Ee3, initgroups: $e3, moduleLoadList: ke3, reallyExit: Pe3, openStdin: je3, assert: Oe3, binding: Ie3, send: Me3, exitCode: He3, channel: De3, getegid: Ue3, geteuid: Fe3, getgid: ze3, getgroups: Ke3, getuid: We3, setegid: Ve3, seteuid: Je3, setgid: Ge3, setgroups: Ye3, setuid: Ze3, permission: Xe3, mainModule: et3, _events: tt3, _eventsCount: st3, _exiting: rt3, _maxListeners: nt3, _debugEnd: it3, _debugProcess: ot3, _fatalException: at3, _getActiveHandles: ct3, _getActiveRequests: ut3, _kill: dt3, _preload_modules: ht3, _rawDebug: ft3, _startProfilerIdleNotifier: pt3, _stopProfilerIdleNotifier: mt3, _tickCallback: yt3, _disconnect: bt3, _handleQueue: wt3, _pendingMessage: St3, _channel: vt3, _send: _t3, _linkedBinding: Lt3 } = S2);
    Ct3 = globalThis.process;
    globalThis.process = Ct3 ? new Proxy(Ct3, { get: /* @__PURE__ */ __name((e4, t5, s4) => Reflect.has(e4, t5) ? Reflect.get(e4, t5, s4) : Reflect.get(S2, t5, s4), "get") }) : S2, globalThis.Buffer || (globalThis.Buffer = r3), globalThis.setImmediate || (globalThis.setImmediate = a5), globalThis.clearImmediate || (globalThis.clearImmediate = c3);
    Tt3 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    Qt3 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    qt3 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform, "jsonParseTransform");
    __name(destr, "destr");
    xt3 = /#/g;
    Rt3 = /&/g;
    Bt3 = /\//g;
    Nt3 = /=/g;
    At3 = /\+/g;
    Et3 = /%5e/gi;
    $t3 = /%60/gi;
    kt3 = /%7c/gi;
    Pt3 = /%20/gi;
    __name(encodeQueryValue, "encodeQueryValue");
    __name(encodeQueryKey, "encodeQueryKey");
    __name(decode, "decode");
    __name(decodeQueryKey, "decodeQueryKey");
    __name(decodeQueryValue, "decodeQueryValue");
    __name(parseQuery, "parseQuery");
    __name(stringifyQuery, "stringifyQuery");
    jt3 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    Ot3 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    It3 = /^([/\\]\s*){2,}[^/\\]/;
    Mt3 = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
    Ht3 = /\/$|\/\?|\/#/;
    Dt3 = /^\.?\//;
    __name(hasProtocol, "hasProtocol");
    __name(isScriptProtocol, "isScriptProtocol");
    __name(hasTrailingSlash, "hasTrailingSlash");
    __name(withoutTrailingSlash, "withoutTrailingSlash");
    __name(withTrailingSlash, "withTrailingSlash");
    __name(withLeadingSlash, "withLeadingSlash");
    __name(withoutBase, "withoutBase");
    __name(withQuery, "withQuery");
    __name(getQuery$1, "getQuery$1");
    __name(isEmptyURL, "isEmptyURL");
    __name(joinURL, "joinURL");
    __name(joinRelativeURL, "joinRelativeURL");
    __name(isEqual, "isEqual");
    Ut3 = Symbol.for("ufo:protocolRelative");
    __name(parseURL, "parseURL");
    __name(parsePath, "parsePath");
    __name(stringifyParsedURL, "stringifyParsedURL");
    Ft3 = 0;
    zt3 = 1;
    Kt3 = 2;
    __name(createRouter$1, "createRouter$1");
    __name(insert, "insert");
    __name(createRadixNode, "createRadixNode");
    __name(getNodeType, "getNodeType");
    __name(toRouteMatcher, "toRouteMatcher");
    __name(_matchRoutes, "_matchRoutes");
    __name(_sortRoutesMap, "_sortRoutesMap");
    __name(_routerNodeToTable, "_routerNodeToTable");
    __name(isPlainObject2, "isPlainObject");
    __name(_defu, "_defu");
    __name(createDefu, "createDefu");
    Wt2 = createDefu();
    Vt3 = createDefu((e4, t5, s4) => {
      if (void 0 !== e4[t5] && "function" == typeof s4) return e4[t5] = s4(e4[t5]), true;
    });
    __name(o3, "o");
    i3 = class _i extends s3 {
      static {
        __name(this, "i");
      }
      __unenv__ = {};
      readableEncoding = null;
      readableEnded = true;
      readableFlowing = false;
      readableHighWaterMark = 0;
      readableLength = 0;
      readableObjectMode = false;
      readableAborted = false;
      readableDidRead = false;
      closed = false;
      errored = null;
      readable = false;
      destroyed = false;
      static from(e4, t5) {
        return new _i(t5);
      }
      constructor(e4) {
        super();
      }
      _read(e4) {
      }
      read(e4) {
      }
      setEncoding(e4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      isPaused() {
        return true;
      }
      unpipe(e4) {
        return this;
      }
      unshift(e4, t5) {
      }
      wrap(e4) {
        return this;
      }
      push(e4, t5) {
        return false;
      }
      _destroy(e4, t5) {
        this.removeAllListeners();
      }
      destroy(e4) {
        return this.destroyed = true, this._destroy(e4), this;
      }
      pipe(e4, t5) {
        return {};
      }
      compose(e4, t5) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw o3("Readable.asyncIterator");
      }
      iterator(e4) {
        throw o3("Readable.iterator");
      }
      map(e4, t5) {
        throw o3("Readable.map");
      }
      filter(e4, t5) {
        throw o3("Readable.filter");
      }
      forEach(e4, t5) {
        throw o3("Readable.forEach");
      }
      reduce(e4, t5, s4) {
        throw o3("Readable.reduce");
      }
      find(e4, t5) {
        throw o3("Readable.find");
      }
      findIndex(e4, t5) {
        throw o3("Readable.findIndex");
      }
      some(e4, t5) {
        throw o3("Readable.some");
      }
      toArray(e4) {
        throw o3("Readable.toArray");
      }
      every(e4, t5) {
        throw o3("Readable.every");
      }
      flatMap(e4, t5) {
        throw o3("Readable.flatMap");
      }
      drop(e4, t5) {
        throw o3("Readable.drop");
      }
      take(e4, t5) {
        throw o3("Readable.take");
      }
      asIndexedPairs(e4) {
        throw o3("Readable.asIndexedPairs");
      }
    };
    Jt3 = class extends s3 {
      static {
        __name(this, "Jt");
      }
      __unenv__ = {};
      writable = true;
      writableEnded = false;
      writableFinished = false;
      writableHighWaterMark = 0;
      writableLength = 0;
      writableObjectMode = false;
      writableCorked = 0;
      closed = false;
      errored = null;
      writableNeedDrain = false;
      writableAborted = false;
      destroyed = false;
      _data;
      _encoding = "utf8";
      constructor(e4) {
        super();
      }
      pipe(e4, t5) {
        return {};
      }
      _write(e4, t5, s4) {
        if (this.writableEnded) s4 && s4();
        else {
          if (void 0 === this._data) this._data = e4;
          else {
            const s5 = "string" == typeof this._data ? r3.from(this._data, this._encoding || t5 || "utf8") : this._data, a6 = "string" == typeof e4 ? r3.from(e4, t5 || this._encoding || "utf8") : e4;
            this._data = r3.concat([s5, a6]);
          }
          this._encoding = t5, s4 && s4();
        }
      }
      _writev(e4, t5) {
      }
      _destroy(e4, t5) {
      }
      _final(e4) {
      }
      write(e4, t5, s4) {
        const r4 = "string" == typeof t5 ? this._encoding : "utf8", a6 = "function" == typeof t5 ? t5 : "function" == typeof s4 ? s4 : void 0;
        return this._write(e4, r4, a6), true;
      }
      setDefaultEncoding(e4) {
        return this;
      }
      end(e4, t5, s4) {
        const r4 = "function" == typeof e4 ? e4 : "function" == typeof t5 ? t5 : "function" == typeof s4 ? s4 : void 0;
        if (this.writableEnded) return r4 && r4(), this;
        const a6 = e4 === r4 ? void 0 : e4;
        if (a6) {
          const e5 = t5 === r4 ? void 0 : t5;
          this.write(a6, e5, r4);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e4) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e4, t5) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return Promise.resolve();
      }
    };
    Gt3 = class {
      static {
        __name(this, "Gt");
      }
      allowHalfOpen = true;
      _destroy;
      constructor(e4 = new i3(), t5 = new Jt3()) {
        Object.assign(this, e4), Object.assign(this, t5), this._destroy = /* @__PURE__ */ (function(...e5) {
          return function(...t6) {
            for (const s4 of e5) s4(...t6);
          };
        })(e4._destroy, t5._destroy);
      }
    };
    Yt3 = (Object.assign(Gt3.prototype, i3.prototype), Object.assign(Gt3.prototype, Jt3.prototype), Gt3);
    A2 = class extends Yt3 {
      static {
        __name(this, "A");
      }
      __unenv__ = {};
      bufferSize = 0;
      bytesRead = 0;
      bytesWritten = 0;
      connecting = false;
      destroyed = false;
      pending = false;
      localAddress = "";
      localPort = 0;
      remoteAddress = "";
      remoteFamily = "";
      remotePort = 0;
      autoSelectFamilyAttemptedAddresses = [];
      readyState = "readOnly";
      constructor(e4) {
        super();
      }
      write(e4, t5, s4) {
        return false;
      }
      connect(e4, t5, s4) {
        return this;
      }
      end(e4, t5, s4) {
        return this;
      }
      setEncoding(e4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e4, t5) {
        return this;
      }
      setNoDelay(e4) {
        return this;
      }
      setKeepAlive(e4, t5) {
        return this;
      }
      address() {
        return {};
      }
      unref() {
        return this;
      }
      ref() {
        return this;
      }
      destroySoon() {
        this.destroy();
      }
      resetAndDestroy() {
        const e4 = new Error("ERR_SOCKET_CLOSED");
        return e4.code = "ERR_SOCKET_CLOSED", this.destroy(e4), this;
      }
    };
    y3 = class extends i3 {
      static {
        __name(this, "y");
      }
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(e4) {
        super(), this.socket = this.connection = e4 || new A2();
      }
      get rawHeaders() {
        const e4 = this.headers, t5 = [];
        for (const s4 in e4) if (Array.isArray(e4[s4])) for (const r4 of e4[s4]) t5.push(s4, r4);
        else t5.push(s4, e4[s4]);
        return t5;
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e4, t5) {
        return this;
      }
      get headersDistinct() {
        return p2(this.headers);
      }
      get trailersDistinct() {
        return p2(this.trailers);
      }
    };
    __name(p2, "p");
    w2 = class extends Jt3 {
      static {
        __name(this, "w");
      }
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(e4) {
        super(), this.req = e4;
      }
      assignSocket(e4) {
        e4._httpMessage = this, this.socket = e4, this.connection = e4, this.emit("socket", e4), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e4) {
      }
      writeContinue(e4) {
      }
      writeHead(e4, t5, s4) {
        e4 && (this.statusCode = e4), "string" == typeof t5 && (this.statusMessage = t5, t5 = void 0);
        const r4 = s4 || t5;
        if (r4 && !Array.isArray(r4)) for (const e5 in r4) this.setHeader(e5, r4[e5]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e4, t5) {
        return this;
      }
      appendHeader(e4, t5) {
        e4 = e4.toLowerCase();
        const s4 = this._headers[e4], r4 = [...Array.isArray(s4) ? s4 : [s4], ...Array.isArray(t5) ? t5 : [t5]].filter(Boolean);
        return this._headers[e4] = r4.length > 1 ? r4 : r4[0], this;
      }
      setHeader(e4, t5) {
        return this._headers[e4.toLowerCase()] = t5, this;
      }
      setHeaders(e4) {
        for (const [t5, s4] of Object.entries(e4)) this.setHeader(t5, s4);
        return this;
      }
      getHeader(e4) {
        return this._headers[e4.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e4) {
        return e4.toLowerCase() in this._headers;
      }
      removeHeader(e4) {
        delete this._headers[e4.toLowerCase()];
      }
      addTrailers(e4) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e4, t5) {
        "function" == typeof t5 && t5();
      }
    };
    Zt3 = (() => {
      const n2 = /* @__PURE__ */ __name(function() {
      }, "n");
      return n2.prototype = /* @__PURE__ */ Object.create(null), n2;
    })();
    __name(v2, "v");
    Xt3 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(b3, "b");
    __name(hasProp2, "hasProp");
    H3Error = class extends Error {
      static {
        __name(this, "H3Error");
      }
      static __h3_error__ = true;
      statusCode = 500;
      fatal = false;
      unhandled = false;
      statusMessage;
      data;
      cause;
      constructor(e4, t5 = {}) {
        super(e4, t5), t5.cause && !this.cause && (this.cause = t5.cause);
      }
      toJSON() {
        const e4 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e4.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e4.data = this.data), e4;
      }
    };
    __name(createError, "createError");
    __name(isError, "isError");
    __name(getQuery, "getQuery");
    __name(getRequestHeaders, "getRequestHeaders");
    es = Symbol.for("h3RawBody");
    ts = ["PATCH", "POST", "PUT", "DELETE"];
    __name(readRawBody, "readRawBody");
    __name(handleCacheHeaders, "handleCacheHeaders");
    ss = { html: "text/html", json: "application/json" };
    rs = /[^\u0009\u0020-\u007E]/g;
    __name(sanitizeStatusMessage, "sanitizeStatusMessage");
    __name(sanitizeStatusCode, "sanitizeStatusCode");
    __name(splitCookiesString, "splitCookiesString");
    ns = void 0 === a5 ? (e4) => e4() : a5;
    __name(send2, "send");
    __name(setResponseStatus, "setResponseStatus");
    __name(getResponseStatus, "getResponseStatus");
    __name(getResponseStatusText, "getResponseStatusText");
    __name(setResponseHeaders, "setResponseHeaders");
    os = setResponseHeaders;
    __name(setResponseHeader, "setResponseHeader");
    __name(appendResponseHeader, "appendResponseHeader");
    __name(sendStream, "sendStream");
    __name(sendWebResponse, "sendWebResponse");
    as = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    ls = /* @__PURE__ */ new Set(["transfer-encoding", "accept-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    __name(proxyRequest, "proxyRequest");
    __name(getProxyRequestHeaders, "getProxyRequestHeaders");
    __name(fetchWithEvent, "fetchWithEvent");
    __name(_getFetch, "_getFetch");
    __name(rewriteCookieProperty, "rewriteCookieProperty");
    H3Event = class {
      static {
        __name(this, "H3Event");
      }
      __is_event__ = true;
      node;
      web;
      context = {};
      _method;
      _path;
      _headers;
      _requestBody;
      _handled = false;
      _onBeforeResponseCalled;
      _onAfterResponseCalled;
      constructor(e4, t5) {
        this.node = { req: e4, res: t5 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = (function(e4) {
          const t5 = new Headers();
          for (const [s4, r4] of Object.entries(e4)) if (Array.isArray(r4)) for (const e5 of r4) t5.append(s4, e5);
          else r4 && t5.set(s4, r4);
          return t5;
        })(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e4) {
        return Promise.resolve(e4).then((e5) => sendWebResponse(this, e5));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    __name(isEvent, "isEvent");
    __name(createEvent, "createEvent");
    __name(defineEventHandler, "defineEventHandler");
    __name(_normalizeArray, "_normalizeArray");
    cs = defineEventHandler;
    __name(isEventHandler, "isEventHandler");
    __name(toEventHandler, "toEventHandler");
    lazyEventHandler = /* @__PURE__ */ __name(function(e4) {
      let t5, s4;
      const resolveHandler = /* @__PURE__ */ __name(() => s4 ? Promise.resolve(s4) : (t5 || (t5 = Promise.resolve(e4()).then((e5) => {
        const t6 = e5.default || e5;
        if ("function" != typeof t6) throw new TypeError("Invalid lazy handler result. It should be a function:", t6);
        return s4 = { handler: toEventHandler(e5.default || e5) }, s4;
      })), t5), "resolveHandler"), r4 = cs((e5) => s4 ? s4.handler(e5) : resolveHandler().then((t6) => t6.handler(e5)));
      return r4.__resolve__ = resolveHandler, r4;
    }, "lazyEventHandler");
    __name(createApp2, "createApp");
    __name(use, "use");
    __name(normalizeLayer, "normalizeLayer");
    __name(handleHandlerResponse, "handleHandlerResponse");
    us = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    __name(toNodeListener, "toNodeListener");
    __name(flatHooks, "flatHooks");
    ds = { run: /* @__PURE__ */ __name((e4) => e4(), "run") };
    hs = void 0 !== console.createTask ? console.createTask : () => ds;
    __name(serialTaskCaller, "serialTaskCaller");
    __name(parallelTaskCaller, "parallelTaskCaller");
    __name(callEachWith, "callEachWith");
    Hookable = class {
      static {
        __name(this, "Hookable");
      }
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e4, t5, s4 = {}) {
        if (!e4 || "function" != typeof t5) return () => {
        };
        const r4 = e4;
        let a6;
        for (; this._deprecatedHooks[e4]; ) a6 = this._deprecatedHooks[e4], e4 = a6.to;
        if (a6 && !s4.allowDeprecated) {
          let e5 = a6.message;
          e5 || (e5 = `${r4} hook has been deprecated` + (a6.to ? `, please use ${a6.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e5) || (console.warn(e5), this._deprecatedMessages.add(e5));
        }
        if (!t5.name) try {
          Object.defineProperty(t5, "name", { get: /* @__PURE__ */ __name(() => "_" + e4.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e4] = this._hooks[e4] || [], this._hooks[e4].push(t5), () => {
          t5 && (this.removeHook(e4, t5), t5 = void 0);
        };
      }
      hookOnce(e4, t5) {
        let s4, _function = /* @__PURE__ */ __name((...e5) => ("function" == typeof s4 && s4(), s4 = void 0, _function = void 0, t5(...e5)), "_function");
        return s4 = this.hook(e4, _function), s4;
      }
      removeHook(e4, t5) {
        if (this._hooks[e4]) {
          const s4 = this._hooks[e4].indexOf(t5);
          -1 !== s4 && this._hooks[e4].splice(s4, 1), 0 === this._hooks[e4].length && delete this._hooks[e4];
        }
      }
      deprecateHook(e4, t5) {
        this._deprecatedHooks[e4] = "string" == typeof t5 ? { to: t5 } : t5;
        const s4 = this._hooks[e4] || [];
        delete this._hooks[e4];
        for (const t6 of s4) this.hook(e4, t6);
      }
      deprecateHooks(e4) {
        Object.assign(this._deprecatedHooks, e4);
        for (const t5 in e4) this.deprecateHook(t5, e4[t5]);
      }
      addHooks(e4) {
        const t5 = flatHooks(e4), s4 = Object.keys(t5).map((e5) => this.hook(e5, t5[e5]));
        return () => {
          for (const e5 of s4.splice(0, s4.length)) e5();
        };
      }
      removeHooks(e4) {
        const t5 = flatHooks(e4);
        for (const e5 in t5) this.removeHook(e5, t5[e5]);
      }
      removeAllHooks() {
        for (const e4 in this._hooks) delete this._hooks[e4];
      }
      callHook(e4, ...t5) {
        return t5.unshift(e4), this.callHookWith(serialTaskCaller, e4, ...t5);
      }
      callHookParallel(e4, ...t5) {
        return t5.unshift(e4), this.callHookWith(parallelTaskCaller, e4, ...t5);
      }
      callHookWith(e4, t5, ...s4) {
        const r4 = this._before || this._after ? { name: t5, args: s4, context: {} } : void 0;
        this._before && callEachWith(this._before, r4);
        const a6 = e4(t5 in this._hooks ? [...this._hooks[t5]] : [], s4);
        return a6 instanceof Promise ? a6.finally(() => {
          this._after && r4 && callEachWith(this._after, r4);
        }) : (this._after && r4 && callEachWith(this._after, r4), a6);
      }
      beforeEach(e4) {
        return this._before = this._before || [], this._before.push(e4), () => {
          if (void 0 !== this._before) {
            const t5 = this._before.indexOf(e4);
            -1 !== t5 && this._before.splice(t5, 1);
          }
        };
      }
      afterEach(e4) {
        return this._after = this._after || [], this._after.push(e4), () => {
          if (void 0 !== this._after) {
            const t5 = this._after.indexOf(e4);
            -1 !== t5 && this._after.splice(t5, 1);
          }
        };
      }
    };
    __name(createHooks, "createHooks");
    fs = globalThis;
    FetchError = class extends Error {
      static {
        __name(this, "FetchError");
      }
      constructor(e4, t5) {
        super(e4, t5), this.name = "FetchError", t5?.cause && !this.cause && (this.cause = t5.cause);
      }
    };
    ps = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    __name(isPayloadMethod, "isPayloadMethod");
    ms = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    gs = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    __name(resolveFetchOptions, "resolveFetchOptions");
    __name(callHooks, "callHooks");
    ys = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    bs = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(createFetch, "createFetch");
    ws = (function() {
      if ("undefined" != typeof globalThis) return globalThis;
      if ("undefined" != typeof self) return self;
      if (void 0 !== fs) return fs;
      throw new Error("unable to locate global object");
    })();
    Ss = ws.fetch ? (...e4) => ws.fetch(...e4) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"));
    vs = ws.Headers;
    _s = ws.AbortController;
    Ls = createFetch({ fetch: Ss, Headers: vs, AbortController: _s });
    __name(asyncCall, "asyncCall");
    __name(stringify2, "stringify");
    Cs = "base64:";
    __name(serializeRaw, "serializeRaw");
    __name(deserializeRaw, "deserializeRaw");
    Ts = ["has", "hasItem", "get", "getItem", "getItemRaw", "set", "setItem", "setItemRaw", "del", "remove", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    __name(normalizeKey$1, "normalizeKey$1");
    __name(joinKeys, "joinKeys");
    __name(normalizeBaseKey, "normalizeBaseKey");
    memory = /* @__PURE__ */ __name(() => {
      const e4 = /* @__PURE__ */ new Map();
      return { name: "memory", getInstance: /* @__PURE__ */ __name(() => e4, "getInstance"), hasItem: /* @__PURE__ */ __name((t5) => e4.has(t5), "hasItem"), getItem: /* @__PURE__ */ __name((t5) => e4.get(t5) ?? null, "getItem"), getItemRaw: /* @__PURE__ */ __name((t5) => e4.get(t5) ?? null, "getItemRaw"), setItem(t5, s4) {
        e4.set(t5, s4);
      }, setItemRaw(t5, s4) {
        e4.set(t5, s4);
      }, removeItem(t5) {
        e4.delete(t5);
      }, getKeys: /* @__PURE__ */ __name(() => [...e4.keys()], "getKeys"), clear() {
        e4.clear();
      }, dispose() {
        e4.clear();
      } };
    }, "memory");
    __name(watch2, "watch");
    __name(dispose, "dispose");
    Qs = {};
    normalizeKey2 = /* @__PURE__ */ __name(function(e4) {
      return e4 && e4.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
    }, "normalizeKey");
    qs = { getKeys: /* @__PURE__ */ __name(() => Promise.resolve(Object.keys(Qs)), "getKeys"), hasItem: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey2(e4), Promise.resolve(e4 in Qs)), "hasItem"), getItem: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey2(e4), Promise.resolve(Qs[e4] ? Qs[e4].import() : null)), "getItem"), getMeta: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey2(e4), Promise.resolve(Qs[e4] ? Qs[e4].meta : {})), "getMeta") };
    xs = (function(e4 = {}) {
      const t5 = { mounts: { "": e4.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = /* @__PURE__ */ __name((e5) => {
        for (const s5 of t5.mountpoints) if (e5.startsWith(s5)) return { base: s5, relativeKey: e5.slice(s5.length), driver: t5.mounts[s5] };
        return { base: "", relativeKey: e5, driver: t5.mounts[""] };
      }, "getMount"), getMounts = /* @__PURE__ */ __name((e5, s5) => t5.mountpoints.filter((t6) => t6.startsWith(e5) || s5 && e5.startsWith(t6)).map((s6) => ({ relativeBase: e5.length > s6.length ? e5.slice(s6.length) : void 0, mountpoint: s6, driver: t5.mounts[s6] })), "getMounts"), onChange = /* @__PURE__ */ __name((e5, s5) => {
        if (t5.watching) {
          s5 = normalizeKey$1(s5);
          for (const r4 of t5.watchListeners) r4(e5, s5);
        }
      }, "onChange"), stopWatch = /* @__PURE__ */ __name(async () => {
        if (t5.watching) {
          for (const e5 in t5.unwatch) await t5.unwatch[e5]();
          t5.unwatch = {}, t5.watching = false;
        }
      }, "stopWatch"), runBatch = /* @__PURE__ */ __name((e5, t6, s5) => {
        const r4 = /* @__PURE__ */ new Map(), getBatch = /* @__PURE__ */ __name((e6) => {
          let t7 = r4.get(e6.base);
          return t7 || (t7 = { driver: e6.driver, base: e6.base, items: [] }, r4.set(e6.base, t7)), t7;
        }, "getBatch");
        for (const s6 of e5) {
          const e6 = "string" == typeof s6, r5 = normalizeKey$1(e6 ? s6 : s6.key), a6 = e6 ? void 0 : s6.value, c4 = e6 || !s6.options ? t6 : { ...t6, ...s6.options }, u3 = getMount(r5);
          getBatch(u3).items.push({ key: r5, value: a6, relativeKey: u3.relativeKey, options: c4 });
        }
        return Promise.all([...r4.values()].map((e6) => s5(e6))).then((e6) => e6.flat());
      }, "runBatch"), s4 = { hasItem(e5, t6 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: s5, driver: r4 } = getMount(e5);
        return asyncCall(r4.hasItem, s5, t6);
      }, getItem(e5, t6 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: s5, driver: r4 } = getMount(e5);
        return asyncCall(r4.getItem, s5, t6).then((e6) => destr(e6));
      }, getItems: /* @__PURE__ */ __name((e5, t6 = {}) => runBatch(e5, t6, (e6) => e6.driver.getItems ? asyncCall(e6.driver.getItems, e6.items.map((e7) => ({ key: e7.relativeKey, options: e7.options })), t6).then((t7) => t7.map((t8) => ({ key: joinKeys(e6.base, t8.key), value: destr(t8.value) }))) : Promise.all(e6.items.map((t7) => asyncCall(e6.driver.getItem, t7.relativeKey, t7.options).then((e7) => ({ key: t7.key, value: destr(e7) }))))), "getItems"), getItemRaw(e5, t6 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: s5, driver: r4 } = getMount(e5);
        return r4.getItemRaw ? asyncCall(r4.getItemRaw, s5, t6) : asyncCall(r4.getItem, s5, t6).then((e6) => deserializeRaw(e6));
      }, async setItem(e5, t6, r4 = {}) {
        if (void 0 === t6) return s4.removeItem(e5);
        e5 = normalizeKey$1(e5);
        const { relativeKey: a6, driver: c4 } = getMount(e5);
        c4.setItem && (await asyncCall(c4.setItem, a6, stringify2(t6), r4), c4.watch || onChange("update", e5));
      }, async setItems(e5, t6) {
        await runBatch(e5, t6, async (e6) => {
          if (e6.driver.setItems) return asyncCall(e6.driver.setItems, e6.items.map((e7) => ({ key: e7.relativeKey, value: stringify2(e7.value), options: e7.options })), t6);
          e6.driver.setItem && await Promise.all(e6.items.map((t7) => asyncCall(e6.driver.setItem, t7.relativeKey, stringify2(t7.value), t7.options)));
        });
      }, async setItemRaw(e5, t6, r4 = {}) {
        if (void 0 === t6) return s4.removeItem(e5, r4);
        e5 = normalizeKey$1(e5);
        const { relativeKey: a6, driver: c4 } = getMount(e5);
        if (c4.setItemRaw) await asyncCall(c4.setItemRaw, a6, t6, r4);
        else {
          if (!c4.setItem) return;
          await asyncCall(c4.setItem, a6, serializeRaw(t6), r4);
        }
        c4.watch || onChange("update", e5);
      }, async removeItem(e5, t6 = {}) {
        "boolean" == typeof t6 && (t6 = { removeMeta: t6 }), e5 = normalizeKey$1(e5);
        const { relativeKey: s5, driver: r4 } = getMount(e5);
        r4.removeItem && (await asyncCall(r4.removeItem, s5, t6), (t6.removeMeta || t6.removeMata) && await asyncCall(r4.removeItem, s5 + "$", t6), r4.watch || onChange("remove", e5));
      }, async getMeta(e5, t6 = {}) {
        "boolean" == typeof t6 && (t6 = { nativeOnly: t6 }), e5 = normalizeKey$1(e5);
        const { relativeKey: s5, driver: r4 } = getMount(e5), a6 = /* @__PURE__ */ Object.create(null);
        if (r4.getMeta && Object.assign(a6, await asyncCall(r4.getMeta, s5, t6)), !t6.nativeOnly) {
          const e6 = await asyncCall(r4.getItem, s5 + "$", t6).then((e7) => destr(e7));
          e6 && "object" == typeof e6 && ("string" == typeof e6.atime && (e6.atime = new Date(e6.atime)), "string" == typeof e6.mtime && (e6.mtime = new Date(e6.mtime)), Object.assign(a6, e6));
        }
        return a6;
      }, setMeta(e5, t6, s5 = {}) {
        return this.setItem(e5 + "$", t6, s5);
      }, removeMeta(e5, t6 = {}) {
        return this.removeItem(e5 + "$", t6);
      }, async getKeys(e5, t6 = {}) {
        e5 = normalizeBaseKey(e5);
        const s5 = getMounts(e5, true);
        let r4 = [];
        const a6 = [];
        let c4 = true;
        for (const e6 of s5) {
          e6.driver.flags?.maxDepth || (c4 = false);
          const s6 = await asyncCall(e6.driver.getKeys, e6.relativeBase, t6);
          for (const t7 of s6) {
            const s7 = e6.mountpoint + normalizeKey$1(t7);
            r4.some((e7) => s7.startsWith(e7)) || a6.push(s7);
          }
          r4 = [e6.mountpoint, ...r4.filter((t7) => !t7.startsWith(e6.mountpoint))];
        }
        const u3 = void 0 !== t6.maxDepth && !c4;
        return a6.filter((s6) => (!u3 || (function(e6, t7) {
          if (void 0 === t7) return true;
          let s7 = 0, r5 = e6.indexOf(":");
          for (; r5 > -1; ) s7++, r5 = e6.indexOf(":", r5 + 1);
          return s7 <= t7;
        })(s6, t6.maxDepth)) && (function(e6, t7) {
          return t7 ? e6.startsWith(t7) && "$" !== e6[e6.length - 1] : "$" !== e6[e6.length - 1];
        })(s6, e5));
      }, async clear(e5, t6 = {}) {
        e5 = normalizeBaseKey(e5), await Promise.all(getMounts(e5, false).map(async (e6) => {
          if (e6.driver.clear) return asyncCall(e6.driver.clear, e6.relativeBase, t6);
          if (e6.driver.removeItem) {
            const s5 = await e6.driver.getKeys(e6.relativeBase || "", t6);
            return Promise.all(s5.map((s6) => e6.driver.removeItem(s6, t6)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(t5.mounts).map((e5) => dispose(e5)));
      }, watch: /* @__PURE__ */ __name(async (e5) => (await (async () => {
        if (!t5.watching) {
          t5.watching = true;
          for (const e6 in t5.mounts) t5.unwatch[e6] = await watch2(t5.mounts[e6], onChange, e6);
        }
      })(), t5.watchListeners.push(e5), async () => {
        t5.watchListeners = t5.watchListeners.filter((t6) => t6 !== e5), 0 === t5.watchListeners.length && await stopWatch();
      }), "watch"), async unwatch() {
        t5.watchListeners = [], await stopWatch();
      }, mount(e5, r4) {
        if ((e5 = normalizeBaseKey(e5)) && t5.mounts[e5]) throw new Error(`already mounted at ${e5}`);
        return e5 && (t5.mountpoints.push(e5), t5.mountpoints.sort((e6, t6) => t6.length - e6.length)), t5.mounts[e5] = r4, t5.watching && Promise.resolve(watch2(r4, onChange, e5)).then((s5) => {
          t5.unwatch[e5] = s5;
        }).catch(console.error), s4;
      }, async unmount(e5, s5 = true) {
        (e5 = normalizeBaseKey(e5)) && t5.mounts[e5] && (t5.watching && e5 in t5.unwatch && (t5.unwatch[e5]?.(), delete t5.unwatch[e5]), s5 && await dispose(t5.mounts[e5]), t5.mountpoints = t5.mountpoints.filter((t6) => t6 !== e5), delete t5.mounts[e5]);
      }, getMount(e5 = "") {
        e5 = normalizeKey$1(e5) + ":";
        const t6 = getMount(e5);
        return { driver: t6.driver, base: t6.base };
      }, getMounts(e5 = "", t6 = {}) {
        e5 = normalizeKey$1(e5);
        return getMounts(e5, t6.parents).map((e6) => ({ driver: e6.driver, base: e6.mountpoint }));
      }, keys: /* @__PURE__ */ __name((e5, t6 = {}) => s4.getKeys(e5, t6), "keys"), get: /* @__PURE__ */ __name((e5, t6 = {}) => s4.getItem(e5, t6), "get"), set: /* @__PURE__ */ __name((e5, t6, r4 = {}) => s4.setItem(e5, t6, r4), "set"), has: /* @__PURE__ */ __name((e5, t6 = {}) => s4.hasItem(e5, t6), "has"), del: /* @__PURE__ */ __name((e5, t6 = {}) => s4.removeItem(e5, t6), "del"), remove: /* @__PURE__ */ __name((e5, t6 = {}) => s4.removeItem(e5, t6), "remove") };
      return s4;
    })({});
    __name(useStorage, "useStorage");
    xs.mount("/assets", qs);
    Rs = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    Bs = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    Ns = [];
    k2 = class {
      static {
        __name(this, "k");
      }
      _data = new l2();
      _hash = new l2([...Rs]);
      _nDataBytes = 0;
      _minBufferSize = 0;
      finalize(e4) {
        e4 && this._append(e4);
        const t5 = 8 * this._nDataBytes, s4 = 8 * this._data.sigBytes;
        return this._data.words[s4 >>> 5] |= 128 << 24 - s4 % 32, this._data.words[14 + (s4 + 64 >>> 9 << 4)] = Math.floor(t5 / 4294967296), this._data.words[15 + (s4 + 64 >>> 9 << 4)] = t5, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
      _doProcessBlock(e4, t5) {
        const s4 = this._hash.words;
        let r4 = s4[0], a6 = s4[1], c4 = s4[2], u3 = s4[3], d3 = s4[4], h4 = s4[5], f3 = s4[6], m3 = s4[7];
        for (let s5 = 0; s5 < 64; s5++) {
          if (s5 < 16) Ns[s5] = 0 | e4[t5 + s5];
          else {
            const e5 = Ns[s5 - 15], t6 = (e5 << 25 | e5 >>> 7) ^ (e5 << 14 | e5 >>> 18) ^ e5 >>> 3, r5 = Ns[s5 - 2], a7 = (r5 << 15 | r5 >>> 17) ^ (r5 << 13 | r5 >>> 19) ^ r5 >>> 10;
            Ns[s5] = t6 + Ns[s5 - 7] + a7 + Ns[s5 - 16];
          }
          const g4 = r4 & a6 ^ r4 & c4 ^ a6 & c4, S3 = (r4 << 30 | r4 >>> 2) ^ (r4 << 19 | r4 >>> 13) ^ (r4 << 10 | r4 >>> 22), _3 = m3 + ((d3 << 26 | d3 >>> 6) ^ (d3 << 21 | d3 >>> 11) ^ (d3 << 7 | d3 >>> 25)) + (d3 & h4 ^ ~d3 & f3) + Bs[s5] + Ns[s5];
          m3 = f3, f3 = h4, h4 = d3, d3 = u3 + _3 | 0, u3 = c4, c4 = a6, a6 = r4, r4 = _3 + (S3 + g4) | 0;
        }
        s4[0] = s4[0] + r4 | 0, s4[1] = s4[1] + a6 | 0, s4[2] = s4[2] + c4 | 0, s4[3] = s4[3] + u3 | 0, s4[4] = s4[4] + d3 | 0, s4[5] = s4[5] + h4 | 0, s4[6] = s4[6] + f3 | 0, s4[7] = s4[7] + m3 | 0;
      }
      _append(e4) {
        "string" == typeof e4 && (e4 = l2.fromUtf8(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }
      _process(e4) {
        let t5, s4 = this._data.sigBytes / 64;
        s4 = e4 ? Math.ceil(s4) : Math.max((0 | s4) - this._minBufferSize, 0);
        const r4 = 16 * s4, a6 = Math.min(4 * r4, this._data.sigBytes);
        if (r4) {
          for (let e5 = 0; e5 < r4; e5 += 16) this._doProcessBlock(this._data.words, e5);
          t5 = this._data.words.splice(0, r4), this._data.sigBytes -= a6;
        }
        return new l2(t5, a6);
      }
    };
    l2 = class _l {
      static {
        __name(this, "l");
      }
      words;
      sigBytes;
      constructor(e4, t5) {
        e4 = this.words = e4 || [], this.sigBytes = void 0 === t5 ? 4 * e4.length : t5;
      }
      static fromUtf8(e4) {
        const t5 = unescape(encodeURIComponent(e4)), s4 = t5.length, r4 = [];
        for (let e5 = 0; e5 < s4; e5++) r4[e5 >>> 2] |= (255 & t5.charCodeAt(e5)) << 24 - e5 % 4 * 8;
        return new _l(r4, s4);
      }
      toBase64() {
        const e4 = [];
        for (let t5 = 0; t5 < this.sigBytes; t5 += 3) {
          const s4 = (this.words[t5 >>> 2] >>> 24 - t5 % 4 * 8 & 255) << 16 | (this.words[t5 + 1 >>> 2] >>> 24 - (t5 + 1) % 4 * 8 & 255) << 8 | this.words[t5 + 2 >>> 2] >>> 24 - (t5 + 2) % 4 * 8 & 255;
          for (let r4 = 0; r4 < 4 && 8 * t5 + 6 * r4 < 8 * this.sigBytes; r4++) e4.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(s4 >>> 6 * (3 - r4) & 63));
        }
        return e4.join("");
      }
      concat(e4) {
        if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let t5 = 0; t5 < e4.sigBytes; t5++) {
          const s4 = e4.words[t5 >>> 2] >>> 24 - t5 % 4 * 8 & 255;
          this.words[this.sigBytes + t5 >>> 2] |= s4 << 24 - (this.sigBytes + t5) % 4 * 8;
        }
        else for (let t5 = 0; t5 < e4.sigBytes; t5 += 4) this.words[this.sigBytes + t5 >>> 2] = e4.words[t5 >>> 2];
        this.sigBytes += e4.sigBytes;
      }
    };
    As = (() => {
      class Hasher2 {
        static {
          __name(this, "Hasher2");
        }
        buff = "";
        #n = /* @__PURE__ */ new Map();
        write(e4) {
          this.buff += e4;
        }
        dispatch(e4) {
          return this[null === e4 ? "null" : typeof e4](e4);
        }
        object(e4) {
          if (e4 && "function" == typeof e4.toJSON) return this.object(e4.toJSON());
          const t5 = Object.prototype.toString.call(e4);
          let s4 = "";
          const a6 = t5.length;
          s4 = a6 < 10 ? "unknown:[" + t5 + "]" : t5.slice(8, a6 - 1), s4 = s4.toLowerCase();
          let c4 = null;
          if (void 0 !== (c4 = this.#n.get(e4))) return this.dispatch("[CIRCULAR:" + c4 + "]");
          if (this.#n.set(e4, this.#n.size), void 0 !== r3 && r3.isBuffer && r3.isBuffer(e4)) return this.write("buffer:"), this.write(e4.toString("utf8"));
          if ("object" !== s4 && "function" !== s4 && "asyncfunction" !== s4) this[s4] ? this[s4](e4) : this.unknown(e4, s4);
          else {
            const t6 = Object.keys(e4).sort(), s5 = [];
            this.write("object:" + (t6.length + s5.length) + ":");
            const dispatchForKey = /* @__PURE__ */ __name((t7) => {
              this.dispatch(t7), this.write(":"), this.dispatch(e4[t7]), this.write(",");
            }, "dispatchForKey");
            for (const e5 of t6) dispatchForKey(e5);
            for (const e5 of s5) dispatchForKey(e5);
          }
        }
        array(e4, t5) {
          if (t5 = void 0 !== t5 && t5, this.write("array:" + e4.length + ":"), !t5 || e4.length <= 1) {
            for (const t6 of e4) this.dispatch(t6);
            return;
          }
          const s4 = /* @__PURE__ */ new Map(), r4 = e4.map((e5) => {
            const t6 = new Hasher2();
            t6.dispatch(e5);
            for (const [e6, r5] of t6.#n) s4.set(e6, r5);
            return t6.toString();
          });
          return this.#n = s4, r4.sort(), this.array(r4, false);
        }
        date(e4) {
          return this.write("date:" + e4.toJSON());
        }
        symbol(e4) {
          return this.write("symbol:" + e4.toString());
        }
        unknown(e4, t5) {
          if (this.write(t5), e4) return this.write(":"), e4 && "function" == typeof e4.entries ? this.array([...e4.entries()], true) : void 0;
        }
        error(e4) {
          return this.write("error:" + e4.toString());
        }
        boolean(e4) {
          return this.write("bool:" + e4);
        }
        string(e4) {
          this.write("string:" + e4.length + ":"), this.write(e4);
        }
        function(e4) {
          this.write("fn:"), !(function(e5) {
            if ("function" != typeof e5) return false;
            return "[native code] }" === Function.prototype.toString.call(e5).slice(-15);
          })(e4) ? this.dispatch(e4.toString()) : this.dispatch("[native]");
        }
        number(e4) {
          return this.write("number:" + e4);
        }
        null() {
          return this.write("Null");
        }
        undefined() {
          return this.write("Undefined");
        }
        regexp(e4) {
          return this.write("regex:" + e4.toString());
        }
        arraybuffer(e4) {
          return this.write("arraybuffer:"), this.dispatch(new Uint8Array(e4));
        }
        url(e4) {
          return this.write("url:" + e4.toString());
        }
        map(e4) {
          this.write("map:");
          const t5 = [...e4];
          return this.array(t5, false);
        }
        set(e4) {
          this.write("set:");
          const t5 = [...e4];
          return this.array(t5, false);
        }
        bigint(e4) {
          return this.write("bigint:" + e4.toString());
        }
      }
      for (const e4 of ["uint8array", "uint8clampedarray", "unt8array", "uint16array", "unt16array", "uint32array", "unt32array", "float32array", "float64array"]) Hasher2.prototype[e4] = function(t5) {
        return this.write(e4 + ":"), this.array([...t5], false);
      };
      return Hasher2;
    })();
    __name(hash, "hash");
    __name(defineCachedFunction, "defineCachedFunction");
    __name(getKey, "getKey");
    __name(escapeKey, "escapeKey");
    __name(cloneWithProxy, "cloneWithProxy");
    cachedEventHandler = /* @__PURE__ */ __name(function(e4, t5 = { name: "_", base: "/cache", swr: true, maxAge: 1 }) {
      const s4 = (t5.varies || []).filter(Boolean).map((e5) => e5.toLowerCase()).sort(), r4 = { ...t5, getKey: /* @__PURE__ */ __name(async (e5) => {
        const r5 = await t5.getKey?.(e5);
        if (r5) return escapeKey(r5);
        const a7 = e5.node.req.originalUrl || e5.node.req.url || e5.path;
        let c4;
        try {
          c4 = escapeKey(decodeURI(parseURL(a7).pathname)).slice(0, 16) || "index";
        } catch {
          c4 = "-";
        }
        return [`${c4}.${hash(a7)}`, ...s4.map((t6) => [t6, e5.node.req.headers[t6]]).map(([e6, t6]) => `${escapeKey(e6)}.${hash(t6)}`)].join(":");
      }, "getKey"), validate: /* @__PURE__ */ __name((e5) => !!e5.value && (!(e5.value.code >= 400) && (void 0 !== e5.value.body && ("undefined" !== e5.value.headers.etag && "undefined" !== e5.value.headers["last-modified"]))), "validate"), group: t5.group || "nitro/handlers", integrity: t5.integrity || hash([e4, t5]) }, a6 = (function(e5, t6 = {}) {
        return defineCachedFunction(e5, t6);
      })(async (a7) => {
        const c4 = {};
        for (const e5 of s4) {
          const t6 = a7.node.req.headers[e5];
          void 0 !== t6 && (c4[e5] = t6);
        }
        const u3 = cloneWithProxy(a7.node.req, { headers: c4 }), d3 = {};
        let h4;
        const f3 = createEvent(u3, cloneWithProxy(a7.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: /* @__PURE__ */ __name((e5) => d3[e5], "getHeader"), setHeader(e5, t6) {
          return d3[e5] = t6, this;
        }, getHeaderNames: /* @__PURE__ */ __name(() => Object.keys(d3), "getHeaderNames"), hasHeader: /* @__PURE__ */ __name((e5) => e5 in d3, "hasHeader"), removeHeader(e5) {
          delete d3[e5];
        }, getHeaders: /* @__PURE__ */ __name(() => d3, "getHeaders"), end(e5, t6, s5) {
          return "string" == typeof e5 && (h4 = e5), "function" == typeof t6 && t6(), "function" == typeof s5 && s5(), this;
        }, write: /* @__PURE__ */ __name((e5, t6, s5) => ("string" == typeof e5 && (h4 = e5), "function" == typeof t6 && t6(void 0), "function" == typeof s5 && s5(), true), "write"), writeHead(e5, t6) {
          if (this.statusCode = e5, t6) {
            if (Array.isArray(t6) || "string" == typeof t6) throw new TypeError("Raw headers  is not supported.");
            for (const e6 in t6) {
              const s5 = t6[e6];
              void 0 !== s5 && this.setHeader(e6, s5);
            }
          }
          return this;
        } }));
        f3.fetch = (e5, t6) => fetchWithEvent(f3, e5, t6, { fetch: useNitroApp().localFetch }), f3.$fetch = (e5, t6) => fetchWithEvent(f3, e5, t6, { fetch: globalThis.$fetch }), f3.waitUntil = a7.waitUntil, f3.context = a7.context, f3.context.cache = { options: r4 };
        const m3 = await e4(f3) || h4, g4 = f3.node.res.getHeaders();
        g4.etag = String(g4.Etag || g4.etag || `W/"${hash(m3)}"`), g4["last-modified"] = String(g4["Last-Modified"] || g4["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const S3 = [];
        t5.swr ? (t5.maxAge && S3.push(`s-maxage=${t5.maxAge}`), t5.staleMaxAge ? S3.push(`stale-while-revalidate=${t5.staleMaxAge}`) : S3.push("stale-while-revalidate")) : t5.maxAge && S3.push(`max-age=${t5.maxAge}`), S3.length > 0 && (g4["cache-control"] = S3.join(", "));
        return { code: f3.node.res.statusCode, headers: g4, body: m3 };
      }, r4);
      return defineEventHandler(async (s5) => {
        if (t5.headersOnly) {
          if (handleCacheHeaders(s5, { maxAge: t5.maxAge })) return;
          return e4(s5);
        }
        const r5 = await a6(s5);
        if (s5.node.res.headersSent || s5.node.res.writableEnded) return r5.body;
        if (!handleCacheHeaders(s5, { modifiedTime: new Date(r5.headers["last-modified"]), etag: r5.headers.etag, maxAge: t5.maxAge })) {
          s5.node.res.statusCode = r5.code;
          for (const e5 in r5.headers) {
            const t6 = r5.headers[e5];
            "set-cookie" === e5 ? s5.node.res.appendHeader(e5, splitCookiesString(t6)) : void 0 !== t6 && s5.node.res.setHeader(e5, t6);
          }
          return r5.body;
        }
      });
    }, "cachedEventHandler");
    __name(klona, "klona");
    Es = Vt3({ nuxt: {} });
    $s = /\d/;
    ks = ["-", "_", "/", "."];
    __name(isUppercase, "isUppercase");
    __name(kebabCase, "kebabCase");
    __name(getEnv, "getEnv");
    __name(_isObject, "_isObject");
    __name(applyEnv, "applyEnv");
    Ps = /\{\{([^{}]*)\}\}/g;
    __name(_expandFromEnv, "_expandFromEnv");
    js = { app: { baseURL: "/", buildId: "531d74a7-17ae-4f5d-8cea-08ab2150c244", buildAssetsDir: "/_nuxt/", cdnURL: "" }, nitro: { envPrefix: "NUXT_", routeRules: { "/__nuxt_error": { cache: false }, "/_nuxt/builds/meta/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } }, "/_nuxt/builds/**": { headers: { "cache-control": "public, max-age=1, immutable" } }, "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } } } }, public: { hub: {} }, hub: { dir: "/tmp/nuxthub-d1-repro/.data", hosting: "cloudflare-module", blob: false, cache: false, db: { migrationsDirs: ["/tmp/nuxthub-d1-repro/server/db/migrations"], queriesPaths: [], applyMigrationsDuringBuild: false, dialect: "sqlite", driver: "d1" }, kv: false, userToken: "user_dSqH3yb9MAszgTjRo2mgWSqSbxZEeu" } };
    Os = { prefix: "NITRO_", altPrefix: js.nitro.envPrefix ?? S2.env.NITRO_ENV_PREFIX ?? "_", envExpansion: js.nitro.envExpansion ?? S2.env.NITRO_ENV_EXPANSION ?? false };
    Is = _deepFreeze(applyEnv(klona(js), Os));
    __name(useRuntimeConfig2, "useRuntimeConfig");
    __name(_deepFreeze, "_deepFreeze");
    _deepFreeze(klona(Es)), new Proxy(/* @__PURE__ */ Object.create(null), { get: /* @__PURE__ */ __name((e4, t5) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const s4 = useRuntimeConfig2();
      if (t5 in s4) return s4[t5];
    }, "get") });
    Ms = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== fs ? fs : {};
    Hs = "__unctx__";
    Ds = Ms[Hs] || (Ms[Hs] = /* @__PURE__ */ (function(e4 = {}) {
      const t5 = {};
      return { get: /* @__PURE__ */ __name((s4, r4 = {}) => (t5[s4] || (t5[s4] = (function(e5 = {}) {
        let t6, s5 = false;
        const checkConflict = /* @__PURE__ */ __name((e6) => {
          if (t6 && t6 !== e6) throw new Error("Context conflict");
        }, "checkConflict");
        let r5;
        if (e5.asyncContext) {
          const t7 = e5.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t7 ? r5 = new t7() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = /* @__PURE__ */ __name(() => {
          if (r5) {
            const e6 = r5.getStore();
            if (void 0 !== e6) return e6;
          }
          return t6;
        }, "_getCurrentInstance");
        return { use: /* @__PURE__ */ __name(() => {
          const e6 = _getCurrentInstance();
          if (void 0 === e6) throw new Error("Context is not available");
          return e6;
        }, "use"), tryUse: /* @__PURE__ */ __name(() => _getCurrentInstance(), "tryUse"), set: /* @__PURE__ */ __name((e6, r6) => {
          r6 || checkConflict(e6), t6 = e6, s5 = true;
        }, "set"), unset: /* @__PURE__ */ __name(() => {
          t6 = void 0, s5 = false;
        }, "unset"), call: /* @__PURE__ */ __name((e6, a6) => {
          checkConflict(e6), t6 = e6;
          try {
            return r5 ? r5.run(e6, a6) : a6();
          } finally {
            s5 || (t6 = void 0);
          }
        }, "call"), async callAsync(e6, a6) {
          t6 = e6;
          const onRestore = /* @__PURE__ */ __name(() => {
            t6 = e6;
          }, "onRestore"), onLeave = /* @__PURE__ */ __name(() => t6 === e6 ? onRestore : void 0, "onLeave");
          Fs.add(onLeave);
          try {
            const c4 = r5 ? r5.run(e6, a6) : a6();
            return s5 || (t6 = void 0), await c4;
          } finally {
            Fs.delete(onLeave);
          }
        } };
      })({ ...e4, ...r4 })), t5[s4]), "get") };
    })());
    getContext = /* @__PURE__ */ __name((e4, t5 = {}) => Ds.get(e4, t5), "getContext");
    Us = "__unctx_async_handlers__";
    Fs = Ms[Us] || (Ms[Us] = /* @__PURE__ */ new Set());
    zs = getContext("nitro-app", { asyncContext: true, AsyncLocalStorage: u2 });
    Ks = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig2().nitro.routeRules }));
    __name(createRouteRulesHandler, "createRouteRulesHandler");
    __name(getRouteRules, "getRouteRules");
    __name(getRouteRulesForPath, "getRouteRulesForPath");
    Ws = /post|put|patch/i;
    __name(joinHeaders, "joinHeaders");
    __name(normalizeCookieHeader, "normalizeCookieHeader");
    __name(normalizeCookieHeaders, "normalizeCookieHeaders");
    __name(hasReqHeader, "hasReqHeader");
    __name(defaultHandler, "defaultHandler");
    Vs = [async function(e4, t5, { defaultHandler: s4 }) {
      if (t5.handled || (function(e5) {
        return !hasReqHeader(e5, "accept", "text/html") && (hasReqHeader(e5, "accept", "application/json") || hasReqHeader(e5, "user-agent", "curl/") || hasReqHeader(e5, "user-agent", "httpie/") || hasReqHeader(e5, "sec-fetch-mode", "cors") || e5.path.startsWith("/api/") || e5.path.endsWith(".json"));
      })(t5)) return;
      const r4 = await s4(e4, t5, { json: true });
      if (404 === (e4.statusCode || 500) && 302 === r4.status) return setResponseHeaders(t5, r4.headers), setResponseStatus(t5, r4.status, r4.statusText), send2(t5, JSON.stringify(r4.body, null, 2));
      const a6 = r4.body, c4 = new URL(a6.url);
      a6.url = withoutBase(c4.pathname, useRuntimeConfig2(t5).app.baseURL) + c4.search + c4.hash, a6.message ||= "Server Error", a6.data ||= e4.data, a6.statusMessage ||= e4.statusMessage, delete r4.headers["content-type"], delete r4.headers["content-security-policy"], setResponseHeaders(t5, r4.headers);
      const u3 = getRequestHeaders(t5), d3 = t5.path.startsWith("/__nuxt_error") || !!u3["x-nuxt-error"] ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig2(t5).app.baseURL, "/__nuxt_error"), a6), { headers: { ...u3, "x-nuxt-error": "true" }, redirect: "manual" }).catch(() => null);
      if (t5.handled) return;
      if (!d3) {
        const { template: e5 } = await Promise.resolve().then(() => (init_error_500(), error_500_exports));
        return setResponseHeader(t5, "Content-Type", "text/html;charset=UTF-8"), send2(t5, e5(a6));
      }
      const h4 = await d3.text();
      for (const [e5, s5] of d3.headers.entries()) "set-cookie" !== e5 ? setResponseHeader(t5, e5, s5) : appendResponseHeader(t5, e5, s5);
      return setResponseStatus(t5, d3.status && 200 !== d3.status ? d3.status : r4.status, d3.statusText || r4.statusText), send2(t5, h4);
    }, function(e4, t5) {
      const s4 = defaultHandler(e4, t5);
      return setResponseHeaders(t5, s4.headers), setResponseStatus(t5, s4.status, s4.statusText), send2(t5, JSON.stringify(s4.body, null, 2));
    }];
    Js = Symbol.for("drizzle:entityKind");
    __name(is, "is");
    ConsoleLogWriter = class {
      static {
        __name(this, "ConsoleLogWriter");
      }
      static [Js] = "ConsoleLogWriter";
      write(e4) {
        console.log(e4);
      }
    };
    DefaultLogger = class {
      static {
        __name(this, "DefaultLogger");
      }
      static [Js] = "DefaultLogger";
      writer;
      constructor(e4) {
        this.writer = e4?.writer ?? new ConsoleLogWriter();
      }
      logQuery(e4, t5) {
        const s4 = t5.map((e5) => {
          try {
            return JSON.stringify(e5);
          } catch {
            return String(e5);
          }
        }), r4 = s4.length ? ` -- params: [${s4.join(", ")}]` : "";
        this.writer.write(`Query: ${e4}${r4}`);
      }
    };
    NoopLogger = class {
      static {
        __name(this, "NoopLogger");
      }
      static [Js] = "NoopLogger";
      logQuery() {
      }
    };
    Gs = Symbol.for("drizzle:Name");
    Ys = Symbol.for("drizzle:Schema");
    Zs = Symbol.for("drizzle:Columns");
    Xs = Symbol.for("drizzle:ExtraConfigColumns");
    er2 = Symbol.for("drizzle:OriginalName");
    tr2 = Symbol.for("drizzle:BaseName");
    sr2 = Symbol.for("drizzle:IsAlias");
    rr2 = Symbol.for("drizzle:ExtraConfigBuilder");
    nr2 = Symbol.for("drizzle:IsDrizzleTable");
    Table = class {
      static {
        __name(this, "Table");
      }
      static [Js] = "Table";
      static Symbol = { Name: Gs, Schema: Ys, OriginalName: er2, Columns: Zs, ExtraConfigColumns: Xs, BaseName: tr2, IsAlias: sr2, ExtraConfigBuilder: rr2 };
      [Gs];
      [er2];
      [Ys];
      [Zs];
      [Xs];
      [tr2];
      [sr2] = false;
      [nr2] = true;
      [rr2] = void 0;
      constructor(e4, t5, s4) {
        this[Gs] = this[er2] = e4, this[Ys] = t5, this[tr2] = s4;
      }
    };
    __name(getTableName, "getTableName");
    __name(getTableUniqueName, "getTableUniqueName");
    Column = class {
      static {
        __name(this, "Column");
      }
      constructor(e4, t5) {
        this.table = e4, this.config = t5, this.name = t5.name, this.keyAsName = t5.keyAsName, this.notNull = t5.notNull, this.default = t5.default, this.defaultFn = t5.defaultFn, this.onUpdateFn = t5.onUpdateFn, this.hasDefault = t5.hasDefault, this.primary = t5.primaryKey, this.isUnique = t5.isUnique, this.uniqueName = t5.uniqueName, this.uniqueType = t5.uniqueType, this.dataType = t5.dataType, this.columnType = t5.columnType, this.generated = t5.generated, this.generatedIdentity = t5.generatedIdentity;
      }
      static [Js] = "Column";
      name;
      keyAsName;
      primary;
      notNull;
      default;
      defaultFn;
      onUpdateFn;
      hasDefault;
      isUnique;
      uniqueName;
      uniqueType;
      dataType;
      columnType;
      enumValues = void 0;
      generated = void 0;
      generatedIdentity = void 0;
      config;
      mapFromDriverValue(e4) {
        return e4;
      }
      mapToDriverValue(e4) {
        return e4;
      }
      shouldDisableInsert() {
        return void 0 !== this.config.generated && "byDefault" !== this.config.generated.type;
      }
    };
    ColumnBuilder = class {
      static {
        __name(this, "ColumnBuilder");
      }
      static [Js] = "ColumnBuilder";
      config;
      constructor(e4, t5, s4) {
        this.config = { name: e4, keyAsName: "" === e4, notNull: false, default: void 0, hasDefault: false, primaryKey: false, isUnique: false, uniqueName: void 0, uniqueType: void 0, dataType: t5, columnType: s4, generated: void 0 };
      }
      $type() {
        return this;
      }
      notNull() {
        return this.config.notNull = true, this;
      }
      default(e4) {
        return this.config.default = e4, this.config.hasDefault = true, this;
      }
      $defaultFn(e4) {
        return this.config.defaultFn = e4, this.config.hasDefault = true, this;
      }
      $default = this.$defaultFn;
      $onUpdateFn(e4) {
        return this.config.onUpdateFn = e4, this.config.hasDefault = true, this;
      }
      $onUpdate = this.$onUpdateFn;
      primaryKey() {
        return this.config.primaryKey = true, this.config.notNull = true, this;
      }
      setName(e4) {
        "" === this.config.name && (this.config.name = e4);
      }
    };
    ir2 = Symbol.for("drizzle:isPgEnum");
    Subquery = class {
      static {
        __name(this, "Subquery");
      }
      static [Js] = "Subquery";
      constructor(e4, t5, s4, r4 = false, a6 = []) {
        this._ = { brand: "Subquery", sql: e4, selectedFields: t5, alias: s4, isWith: r4, usedTables: a6 };
      }
    };
    WithSubquery = class extends Subquery {
      static {
        __name(this, "WithSubquery");
      }
      static [Js] = "WithSubquery";
    };
    ar2 = { startActiveSpan: /* @__PURE__ */ __name((e4, t5) => t5(), "startActiveSpan") };
    lr2 = Symbol.for("drizzle:ViewBaseConfig");
    __name(isSQLWrapper, "isSQLWrapper");
    StringChunk = class {
      static {
        __name(this, "StringChunk");
      }
      static [Js] = "StringChunk";
      value;
      constructor(e4) {
        this.value = Array.isArray(e4) ? e4 : [e4];
      }
      getSQL() {
        return new SQL([this]);
      }
    };
    SQL = class _SQL {
      static {
        __name(this, "SQL");
      }
      constructor(e4) {
        this.queryChunks = e4;
        for (const t5 of e4) if (is(t5, Table)) {
          const e5 = t5[Table.Symbol.Schema];
          this.usedTables.push(void 0 === e5 ? t5[Table.Symbol.Name] : e5 + "." + t5[Table.Symbol.Name]);
        }
      }
      static [Js] = "SQL";
      decoder = cr2;
      shouldInlineParams = false;
      usedTables = [];
      append(e4) {
        return this.queryChunks.push(...e4.queryChunks), this;
      }
      toQuery(e4) {
        return ar2.startActiveSpan("drizzle.buildSQL", (t5) => {
          const s4 = this.buildQueryFromSourceParams(this.queryChunks, e4);
          return t5?.setAttributes({ "drizzle.query.text": s4.sql, "drizzle.query.params": JSON.stringify(s4.params) }), s4;
        });
      }
      buildQueryFromSourceParams(e4, t5) {
        const s4 = Object.assign({}, t5, { inlineParams: t5.inlineParams || this.shouldInlineParams, paramStartIndex: t5.paramStartIndex || { value: 0 } }), { casing: r4, escapeName: a6, escapeParam: c4, prepareTyping: u3, inlineParams: d3, paramStartIndex: h4 } = s4;
        return (function(e5) {
          const t6 = { sql: "", params: [] };
          for (const s5 of e5) t6.sql += s5.sql, t6.params.push(...s5.params), s5.typings?.length && (t6.typings || (t6.typings = []), t6.typings.push(...s5.typings));
          return t6;
        })(e4.map((e5) => {
          if (is(e5, StringChunk)) return { sql: e5.value.join(""), params: [] };
          if (is(e5, Name)) return { sql: a6(e5.value), params: [] };
          if (void 0 === e5) return { sql: "", params: [] };
          if (Array.isArray(e5)) {
            const t6 = [new StringChunk("(")];
            for (const [s5, r5] of e5.entries()) t6.push(r5), s5 < e5.length - 1 && t6.push(new StringChunk(", "));
            return t6.push(new StringChunk(")")), this.buildQueryFromSourceParams(t6, s4);
          }
          if (is(e5, _SQL)) return this.buildQueryFromSourceParams(e5.queryChunks, { ...s4, inlineParams: d3 || e5.shouldInlineParams });
          if (is(e5, Table)) {
            const t6 = e5[Table.Symbol.Schema], s5 = e5[Table.Symbol.Name];
            return { sql: void 0 === t6 || e5[sr2] ? a6(s5) : a6(t6) + "." + a6(s5), params: [] };
          }
          if (is(e5, Column)) {
            const s5 = r4.getColumnCasing(e5);
            if ("indexes" === t5.invokeSource) return { sql: a6(s5), params: [] };
            const c5 = e5.table[Table.Symbol.Schema];
            return { sql: e5.table[sr2] || void 0 === c5 ? a6(e5.table[Table.Symbol.Name]) + "." + a6(s5) : a6(c5) + "." + a6(e5.table[Table.Symbol.Name]) + "." + a6(s5), params: [] };
          }
          if (is(e5, View)) {
            const t6 = e5[lr2].schema, s5 = e5[lr2].name;
            return { sql: void 0 === t6 || e5[lr2].isAlias ? a6(s5) : a6(t6) + "." + a6(s5), params: [] };
          }
          if (is(e5, Param)) {
            if (is(e5.value, Placeholder)) return { sql: c4(h4.value++, e5), params: [e5], typings: ["none"] };
            const t6 = null === e5.value ? null : e5.encoder.mapToDriverValue(e5.value);
            if (is(t6, _SQL)) return this.buildQueryFromSourceParams([t6], s4);
            if (d3) return { sql: this.mapInlineParam(t6, s4), params: [] };
            let r5 = ["none"];
            return u3 && (r5 = [u3(e5.encoder)]), { sql: c4(h4.value++, t6), params: [t6], typings: r5 };
          }
          return is(e5, Placeholder) ? { sql: c4(h4.value++, e5), params: [e5], typings: ["none"] } : is(e5, _SQL.Aliased) && void 0 !== e5.fieldAlias ? { sql: a6(e5.fieldAlias), params: [] } : is(e5, Subquery) ? e5._.isWith ? { sql: a6(e5._.alias), params: [] } : this.buildQueryFromSourceParams([new StringChunk("("), e5._.sql, new StringChunk(") "), new Name(e5._.alias)], s4) : (f3 = e5) && "function" == typeof f3 && ir2 in f3 && true === f3[ir2] ? e5.schema ? { sql: a6(e5.schema) + "." + a6(e5.enumName), params: [] } : { sql: a6(e5.enumName), params: [] } : isSQLWrapper(e5) ? e5.shouldOmitSQLParens?.() ? this.buildQueryFromSourceParams([e5.getSQL()], s4) : this.buildQueryFromSourceParams([new StringChunk("("), e5.getSQL(), new StringChunk(")")], s4) : d3 ? { sql: this.mapInlineParam(e5, s4), params: [] } : { sql: c4(h4.value++, e5), params: [e5], typings: ["none"] };
          var f3;
        }));
      }
      mapInlineParam(e4, { escapeString: t5 }) {
        if (null === e4) return "null";
        if ("number" == typeof e4 || "boolean" == typeof e4) return e4.toString();
        if ("string" == typeof e4) return t5(e4);
        if ("object" == typeof e4) {
          const s4 = e4.toString();
          return t5("[object Object]" === s4 ? JSON.stringify(e4) : s4);
        }
        throw new Error("Unexpected param value: " + e4);
      }
      getSQL() {
        return this;
      }
      as(e4) {
        return void 0 === e4 ? this : new _SQL.Aliased(this, e4);
      }
      mapWith(e4) {
        return this.decoder = "function" == typeof e4 ? { mapFromDriverValue: e4 } : e4, this;
      }
      inlineParams() {
        return this.shouldInlineParams = true, this;
      }
      if(e4) {
        return e4 ? this : void 0;
      }
    };
    Name = class {
      static {
        __name(this, "Name");
      }
      constructor(e4) {
        this.value = e4;
      }
      static [Js] = "Name";
      brand;
      getSQL() {
        return new SQL([this]);
      }
    };
    cr2 = { mapFromDriverValue: /* @__PURE__ */ __name((e4) => e4, "mapFromDriverValue") };
    ur2 = { mapToDriverValue: /* @__PURE__ */ __name((e4) => e4, "mapToDriverValue") };
    Param = class {
      static {
        __name(this, "Param");
      }
      constructor(e4, t5 = ur2) {
        this.value = e4, this.encoder = t5;
      }
      static [Js] = "Param";
      brand;
      getSQL() {
        return new SQL([this]);
      }
    };
    __name(sql, "sql");
    (dr2 = sql || (sql = {})).empty = function() {
      return new SQL([]);
    }, dr2.fromList = function(e4) {
      return new SQL(e4);
    }, dr2.raw = function(e4) {
      return new SQL([new StringChunk(e4)]);
    }, dr2.join = function(e4, t5) {
      const s4 = [];
      for (const [r4, a6] of e4.entries()) r4 > 0 && void 0 !== t5 && s4.push(t5), s4.push(a6);
      return new SQL(s4);
    }, dr2.identifier = function(e4) {
      return new Name(e4);
    }, dr2.placeholder = function(e4) {
      return new Placeholder(e4);
    }, dr2.param = function(e4, t5) {
      return new Param(e4, t5);
    }, ((e4) => {
      class Aliased {
        static {
          __name(this, "Aliased");
        }
        constructor(e5, t5) {
          this.sql = e5, this.fieldAlias = t5;
        }
        static [Js] = "SQL.Aliased";
        isSelectionField = false;
        getSQL() {
          return this.sql;
        }
        clone() {
          return new Aliased(this.sql, this.fieldAlias);
        }
      }
      e4.Aliased = Aliased;
    })(SQL || (SQL = {}));
    Placeholder = class {
      static {
        __name(this, "Placeholder");
      }
      constructor(e4) {
        this.name = e4;
      }
      static [Js] = "Placeholder";
      getSQL() {
        return new SQL([this]);
      }
    };
    __name(fillPlaceholders, "fillPlaceholders");
    hr2 = Symbol.for("drizzle:IsDrizzleView");
    View = class {
      static {
        __name(this, "View");
      }
      static [Js] = "View";
      [lr2];
      [hr2] = true;
      constructor({ name: e4, schema: t5, selectedFields: s4, query: r4 }) {
        this[lr2] = { name: e4, originalName: e4, schema: t5, selectedFields: s4, query: r4, isExisting: !r4, isAlias: false };
      }
      getSQL() {
        return new SQL([this]);
      }
    };
    __name(mapResultRow, "mapResultRow");
    __name(orderSelectedFields, "orderSelectedFields");
    __name(haveSameKeys, "haveSameKeys");
    __name(mapUpdateSet, "mapUpdateSet");
    __name(getTableLikeName, "getTableLikeName");
    __name(getColumnNameAndConfig, "getColumnNameAndConfig");
    Column.prototype.getSQL = function() {
      return new SQL([this]);
    }, Table.prototype.getSQL = function() {
      return new SQL([this]);
    }, Subquery.prototype.getSQL = function() {
      return new SQL([this]);
    };
    fr2 = "undefined" == typeof TextDecoder ? null : new TextDecoder();
    pr2 = Symbol.for("drizzle:PgInlineForeignKeys");
    mr2 = Symbol.for("drizzle:EnableRLS");
    PgTable = class extends Table {
      static {
        __name(this, "PgTable");
      }
      static [Js] = "PgTable";
      static Symbol = Object.assign({}, Table.Symbol, { InlineForeignKeys: pr2, EnableRLS: mr2 });
      [pr2] = [];
      [mr2] = false;
      [Table.Symbol.ExtraConfigBuilder] = void 0;
      [Table.Symbol.ExtraConfigColumns] = {};
    };
    PrimaryKeyBuilder = class {
      static {
        __name(this, "PrimaryKeyBuilder");
      }
      static [Js] = "PgPrimaryKeyBuilder";
      columns;
      name;
      constructor(e4, t5) {
        this.columns = e4, this.name = t5;
      }
      build(e4) {
        return new PrimaryKey(e4, this.columns, this.name);
      }
    };
    PrimaryKey = class {
      static {
        __name(this, "PrimaryKey");
      }
      constructor(e4, t5, s4) {
        this.table = e4, this.columns = t5, this.name = s4;
      }
      static [Js] = "PgPrimaryKey";
      columns;
      name;
      getName() {
        return this.name ?? `${this.table[PgTable.Symbol.Name]}_${this.columns.map((e4) => e4.name).join("_")}_pk`;
      }
    };
    __name(bindIfParam, "bindIfParam");
    eq = /* @__PURE__ */ __name((e4, t5) => sql`${e4} = ${bindIfParam(t5, e4)}`, "eq");
    ne2 = /* @__PURE__ */ __name((e4, t5) => sql`${e4} <> ${bindIfParam(t5, e4)}`, "ne");
    __name(and, "and");
    __name(or2, "or");
    __name(not, "not");
    gt3 = /* @__PURE__ */ __name((e4, t5) => sql`${e4} > ${bindIfParam(t5, e4)}`, "gt");
    gte = /* @__PURE__ */ __name((e4, t5) => sql`${e4} >= ${bindIfParam(t5, e4)}`, "gte");
    lt3 = /* @__PURE__ */ __name((e4, t5) => sql`${e4} < ${bindIfParam(t5, e4)}`, "lt");
    lte = /* @__PURE__ */ __name((e4, t5) => sql`${e4} <= ${bindIfParam(t5, e4)}`, "lte");
    __name(inArray, "inArray");
    __name(notInArray, "notInArray");
    __name(isNull, "isNull");
    __name(isNotNull, "isNotNull");
    __name(exists, "exists");
    __name(notExists, "notExists");
    __name(between, "between");
    __name(notBetween, "notBetween");
    __name(like, "like");
    __name(notLike, "notLike");
    __name(ilike, "ilike");
    __name(notIlike, "notIlike");
    __name(asc, "asc");
    __name(desc, "desc");
    Relation = class {
      static {
        __name(this, "Relation");
      }
      constructor(e4, t5, s4) {
        this.sourceTable = e4, this.referencedTable = t5, this.relationName = s4, this.referencedTableName = t5[Table.Symbol.Name];
      }
      static [Js] = "Relation";
      referencedTableName;
      fieldName;
    };
    Relations = class {
      static {
        __name(this, "Relations");
      }
      constructor(e4, t5) {
        this.table = e4, this.config = t5;
      }
      static [Js] = "Relations";
    };
    One = class _One extends Relation {
      static {
        __name(this, "One");
      }
      constructor(e4, t5, s4, r4) {
        super(e4, t5, s4?.relationName), this.config = s4, this.isNullable = r4;
      }
      static [Js] = "One";
      withFieldName(e4) {
        const t5 = new _One(this.sourceTable, this.referencedTable, this.config, this.isNullable);
        return t5.fieldName = e4, t5;
      }
    };
    Many = class _Many extends Relation {
      static {
        __name(this, "Many");
      }
      constructor(e4, t5, s4) {
        super(e4, t5, s4?.relationName), this.config = s4;
      }
      static [Js] = "Many";
      withFieldName(e4) {
        const t5 = new _Many(this.sourceTable, this.referencedTable, this.config);
        return t5.fieldName = e4, t5;
      }
    };
    __name(createOne, "createOne");
    __name(createMany, "createMany");
    __name(normalizeRelation, "normalizeRelation");
    __name(createTableRelationsHelpers, "createTableRelationsHelpers");
    __name(mapRelationalRow, "mapRelationalRow");
    ColumnAliasProxyHandler = class {
      static {
        __name(this, "ColumnAliasProxyHandler");
      }
      constructor(e4) {
        this.table = e4;
      }
      static [Js] = "ColumnAliasProxyHandler";
      get(e4, t5) {
        return "table" === t5 ? this.table : e4[t5];
      }
    };
    TableAliasProxyHandler = class {
      static {
        __name(this, "TableAliasProxyHandler");
      }
      constructor(e4, t5) {
        this.alias = e4, this.replaceOriginalName = t5;
      }
      static [Js] = "TableAliasProxyHandler";
      get(e4, t5) {
        if (t5 === Table.Symbol.IsAlias) return true;
        if (t5 === Table.Symbol.Name) return this.alias;
        if (this.replaceOriginalName && t5 === Table.Symbol.OriginalName) return this.alias;
        if (t5 === lr2) return { ...e4[lr2], name: this.alias, isAlias: true };
        if (t5 === Table.Symbol.Columns) {
          const t6 = e4[Table.Symbol.Columns];
          if (!t6) return t6;
          const s5 = {};
          return Object.keys(t6).map((r4) => {
            s5[r4] = new Proxy(t6[r4], new ColumnAliasProxyHandler(new Proxy(e4, this)));
          }), s5;
        }
        const s4 = e4[t5];
        return is(s4, Column) ? new Proxy(s4, new ColumnAliasProxyHandler(new Proxy(e4, this))) : s4;
      }
    };
    __name(aliasedTable, "aliasedTable");
    __name(aliasedTableColumn, "aliasedTableColumn");
    __name(mapColumnsInAliasedSQLToAlias, "mapColumnsInAliasedSQLToAlias");
    __name(mapColumnsInSQLToAlias, "mapColumnsInSQLToAlias");
    SelectionProxyHandler = class _SelectionProxyHandler {
      static {
        __name(this, "SelectionProxyHandler");
      }
      static [Js] = "SelectionProxyHandler";
      config;
      constructor(e4) {
        this.config = { ...e4 };
      }
      get(e4, t5) {
        if ("_" === t5) return { ...e4._, selectedFields: new Proxy(e4._.selectedFields, this) };
        if (t5 === lr2) return { ...e4[lr2], selectedFields: new Proxy(e4[lr2].selectedFields, this) };
        if ("symbol" == typeof t5) return e4[t5];
        const s4 = (is(e4, Subquery) ? e4._.selectedFields : is(e4, View) ? e4[lr2].selectedFields : e4)[t5];
        if (is(s4, SQL.Aliased)) {
          if ("sql" === this.config.sqlAliasedBehavior && !s4.isSelectionField) return s4.sql;
          const e5 = s4.clone();
          return e5.isSelectionField = true, e5;
        }
        if (is(s4, SQL)) {
          if ("sql" === this.config.sqlBehavior) return s4;
          throw new Error(`You tried to reference "${t5}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`);
        }
        return is(s4, Column) ? this.config.alias ? new Proxy(s4, new ColumnAliasProxyHandler(new Proxy(s4.table, new TableAliasProxyHandler(this.config.alias, this.config.replaceOriginalName ?? false)))) : s4 : "object" != typeof s4 || null === s4 ? s4 : new Proxy(s4, new _SelectionProxyHandler(this.config));
      }
    };
    QueryPromise = class {
      static {
        __name(this, "QueryPromise");
      }
      static [Js] = "QueryPromise";
      [Symbol.toStringTag] = "QueryPromise";
      catch(e4) {
        return this.then(void 0, e4);
      }
      finally(e4) {
        return this.then((t5) => (e4?.(), t5), (t5) => {
          throw e4?.(), t5;
        });
      }
      then(e4, t5) {
        return this.execute().then(e4, t5);
      }
    };
    ForeignKeyBuilder = class {
      static {
        __name(this, "ForeignKeyBuilder");
      }
      static [Js] = "SQLiteForeignKeyBuilder";
      reference;
      _onUpdate;
      _onDelete;
      constructor(e4, t5) {
        this.reference = () => {
          const { name: t6, columns: s4, foreignColumns: r4 } = e4();
          return { name: t6, columns: s4, foreignTable: r4[0].table, foreignColumns: r4 };
        }, t5 && (this._onUpdate = t5.onUpdate, this._onDelete = t5.onDelete);
      }
      onUpdate(e4) {
        return this._onUpdate = e4, this;
      }
      onDelete(e4) {
        return this._onDelete = e4, this;
      }
      build(e4) {
        return new ForeignKey(e4, this);
      }
    };
    ForeignKey = class {
      static {
        __name(this, "ForeignKey");
      }
      constructor(e4, t5) {
        this.table = e4, this.reference = t5.reference, this.onUpdate = t5._onUpdate, this.onDelete = t5._onDelete;
      }
      static [Js] = "SQLiteForeignKey";
      reference;
      onUpdate;
      onDelete;
      getName() {
        const { name: e4, columns: t5, foreignColumns: s4 } = this.reference(), r4 = t5.map((e5) => e5.name), a6 = s4.map((e5) => e5.name), c4 = [this.table[Gs], ...r4, s4[0].table[Gs], ...a6];
        return e4 ?? `${c4.join("_")}_fk`;
      }
    };
    SQLiteColumnBuilder = class extends ColumnBuilder {
      static {
        __name(this, "SQLiteColumnBuilder");
      }
      static [Js] = "SQLiteColumnBuilder";
      foreignKeyConfigs = [];
      references(e4, t5 = {}) {
        return this.foreignKeyConfigs.push({ ref: e4, actions: t5 }), this;
      }
      unique(e4) {
        return this.config.isUnique = true, this.config.uniqueName = e4, this;
      }
      generatedAlwaysAs(e4, t5) {
        return this.config.generated = { as: e4, type: "always", mode: t5?.mode ?? "virtual" }, this;
      }
      buildForeignKeys(e4, t5) {
        return this.foreignKeyConfigs.map(({ ref: s4, actions: r4 }) => ((s5, r5) => {
          const a6 = new ForeignKeyBuilder(() => {
            const t6 = s5();
            return { columns: [e4], foreignColumns: [t6] };
          });
          return r5.onUpdate && a6.onUpdate(r5.onUpdate), r5.onDelete && a6.onDelete(r5.onDelete), a6.build(t5);
        })(s4, r4));
      }
    };
    SQLiteColumn = class extends Column {
      static {
        __name(this, "SQLiteColumn");
      }
      constructor(e4, t5) {
        t5.uniqueName || (t5.uniqueName = (function(e5, t6) {
          return `${e5[Gs]}_${t6.join("_")}_unique`;
        })(e4, [t5.name])), super(e4, t5), this.table = e4;
      }
      static [Js] = "SQLiteColumn";
    };
    SQLiteBigIntBuilder = class extends SQLiteColumnBuilder {
      static {
        __name(this, "SQLiteBigIntBuilder");
      }
      static [Js] = "SQLiteBigIntBuilder";
      constructor(e4) {
        super(e4, "bigint", "SQLiteBigInt");
      }
      build(e4) {
        return new SQLiteBigInt(e4, this.config);
      }
    };
    SQLiteBigInt = class extends SQLiteColumn {
      static {
        __name(this, "SQLiteBigInt");
      }
      static [Js] = "SQLiteBigInt";
      getSQLType() {
        return "blob";
      }
      mapFromDriverValue(e4) {
        if (void 0 !== r3 && r3.from) {
          const t5 = r3.isBuffer(e4) ? e4 : e4 instanceof ArrayBuffer ? r3.from(e4) : e4.buffer ? r3.from(e4.buffer, e4.byteOffset, e4.byteLength) : r3.from(e4);
          return BigInt(t5.toString("utf8"));
        }
        return BigInt(fr2.decode(e4));
      }
      mapToDriverValue(e4) {
        return r3.from(e4.toString());
      }
    };
    SQLiteBlobJsonBuilder = class extends SQLiteColumnBuilder {
      static {
        __name(this, "SQLiteBlobJsonBuilder");
      }
      static [Js] = "SQLiteBlobJsonBuilder";
      constructor(e4) {
        super(e4, "json", "SQLiteBlobJson");
      }
      build(e4) {
        return new SQLiteBlobJson(e4, this.config);
      }
    };
    SQLiteBlobJson = class extends SQLiteColumn {
      static {
        __name(this, "SQLiteBlobJson");
      }
      static [Js] = "SQLiteBlobJson";
      getSQLType() {
        return "blob";
      }
      mapFromDriverValue(e4) {
        if (void 0 !== r3 && r3.from) {
          const t5 = r3.isBuffer(e4) ? e4 : e4 instanceof ArrayBuffer ? r3.from(e4) : e4.buffer ? r3.from(e4.buffer, e4.byteOffset, e4.byteLength) : r3.from(e4);
          return JSON.parse(t5.toString("utf8"));
        }
        return JSON.parse(fr2.decode(e4));
      }
      mapToDriverValue(e4) {
        return r3.from(JSON.stringify(e4));
      }
    };
    SQLiteBlobBufferBuilder = class extends SQLiteColumnBuilder {
      static {
        __name(this, "SQLiteBlobBufferBuilder");
      }
      static [Js] = "SQLiteBlobBufferBuilder";
      constructor(e4) {
        super(e4, "buffer", "SQLiteBlobBuffer");
      }
      build(e4) {
        return new SQLiteBlobBuffer(e4, this.config);
      }
    };
    SQLiteBlobBuffer = class extends SQLiteColumn {
      static {
        __name(this, "SQLiteBlobBuffer");
      }
      static [Js] = "SQLiteBlobBuffer";
      mapFromDriverValue(e4) {
        return r3.isBuffer(e4) ? e4 : r3.from(e4);
      }
      getSQLType() {
        return "blob";
      }
    };
    __name(blob, "blob");
    SQLiteCustomColumnBuilder = class extends SQLiteColumnBuilder {
      static {
        __name(this, "SQLiteCustomColumnBuilder");
      }
      static [Js] = "SQLiteCustomColumnBuilder";
      constructor(e4, t5, s4) {
        super(e4, "custom", "SQLiteCustomColumn"), this.config.fieldConfig = t5, this.config.customTypeParams = s4;
      }
      build(e4) {
        return new SQLiteCustomColumn(e4, this.config);
      }
    };
    SQLiteCustomColumn = class extends SQLiteColumn {
      static {
        __name(this, "SQLiteCustomColumn");
      }
      static [Js] = "SQLiteCustomColumn";
      sqlName;
      mapTo;
      mapFrom;
      constructor(e4, t5) {
        super(e4, t5), this.sqlName = t5.customTypeParams.dataType(t5.fieldConfig), this.mapTo = t5.customTypeParams.toDriver, this.mapFrom = t5.customTypeParams.fromDriver;
      }
      getSQLType() {
        return this.sqlName;
      }
      mapFromDriverValue(e4) {
        return "function" == typeof this.mapFrom ? this.mapFrom(e4) : e4;
      }
      mapToDriverValue(e4) {
        return "function" == typeof this.mapTo ? this.mapTo(e4) : e4;
      }
    };
    __name(customType, "customType");
    SQLiteBaseIntegerBuilder = class extends SQLiteColumnBuilder {
      static {
        __name(this, "SQLiteBaseIntegerBuilder");
      }
      static [Js] = "SQLiteBaseIntegerBuilder";
      constructor(e4, t5, s4) {
        super(e4, t5, s4), this.config.autoIncrement = false;
      }
      primaryKey(e4) {
        return e4?.autoIncrement && (this.config.autoIncrement = true), this.config.hasDefault = true, super.primaryKey();
      }
    };
    SQLiteBaseInteger = class extends SQLiteColumn {
      static {
        __name(this, "SQLiteBaseInteger");
      }
      static [Js] = "SQLiteBaseInteger";
      autoIncrement = this.config.autoIncrement;
      getSQLType() {
        return "integer";
      }
    };
    SQLiteIntegerBuilder = class extends SQLiteBaseIntegerBuilder {
      static {
        __name(this, "SQLiteIntegerBuilder");
      }
      static [Js] = "SQLiteIntegerBuilder";
      constructor(e4) {
        super(e4, "number", "SQLiteInteger");
      }
      build(e4) {
        return new SQLiteInteger(e4, this.config);
      }
    };
    SQLiteInteger = class extends SQLiteBaseInteger {
      static {
        __name(this, "SQLiteInteger");
      }
      static [Js] = "SQLiteInteger";
    };
    SQLiteTimestampBuilder = class extends SQLiteBaseIntegerBuilder {
      static {
        __name(this, "SQLiteTimestampBuilder");
      }
      static [Js] = "SQLiteTimestampBuilder";
      constructor(e4, t5) {
        super(e4, "date", "SQLiteTimestamp"), this.config.mode = t5;
      }
      defaultNow() {
        return this.default(sql`(cast((julianday('now') - 2440587.5)*86400000 as integer))`);
      }
      build(e4) {
        return new SQLiteTimestamp(e4, this.config);
      }
    };
    SQLiteTimestamp = class extends SQLiteBaseInteger {
      static {
        __name(this, "SQLiteTimestamp");
      }
      static [Js] = "SQLiteTimestamp";
      mode = this.config.mode;
      mapFromDriverValue(e4) {
        return "timestamp" === this.config.mode ? new Date(1e3 * e4) : new Date(e4);
      }
      mapToDriverValue(e4) {
        const t5 = e4.getTime();
        return "timestamp" === this.config.mode ? Math.floor(t5 / 1e3) : t5;
      }
    };
    SQLiteBooleanBuilder = class extends SQLiteBaseIntegerBuilder {
      static {
        __name(this, "SQLiteBooleanBuilder");
      }
      static [Js] = "SQLiteBooleanBuilder";
      constructor(e4, t5) {
        super(e4, "boolean", "SQLiteBoolean"), this.config.mode = t5;
      }
      build(e4) {
        return new SQLiteBoolean(e4, this.config);
      }
    };
    SQLiteBoolean = class extends SQLiteBaseInteger {
      static {
        __name(this, "SQLiteBoolean");
      }
      static [Js] = "SQLiteBoolean";
      mode = this.config.mode;
      mapFromDriverValue(e4) {
        return 1 === Number(e4);
      }
      mapToDriverValue(e4) {
        return e4 ? 1 : 0;
      }
    };
    __name(integer, "integer");
    SQLiteNumericBuilder = class extends SQLiteColumnBuilder {
      static {
        __name(this, "SQLiteNumericBuilder");
      }
      static [Js] = "SQLiteNumericBuilder";
      constructor(e4) {
        super(e4, "string", "SQLiteNumeric");
      }
      build(e4) {
        return new SQLiteNumeric(e4, this.config);
      }
    };
    SQLiteNumeric = class extends SQLiteColumn {
      static {
        __name(this, "SQLiteNumeric");
      }
      static [Js] = "SQLiteNumeric";
      mapFromDriverValue(e4) {
        return "string" == typeof e4 ? e4 : String(e4);
      }
      getSQLType() {
        return "numeric";
      }
    };
    SQLiteNumericNumberBuilder = class extends SQLiteColumnBuilder {
      static {
        __name(this, "SQLiteNumericNumberBuilder");
      }
      static [Js] = "SQLiteNumericNumberBuilder";
      constructor(e4) {
        super(e4, "number", "SQLiteNumericNumber");
      }
      build(e4) {
        return new SQLiteNumericNumber(e4, this.config);
      }
    };
    SQLiteNumericNumber = class extends SQLiteColumn {
      static {
        __name(this, "SQLiteNumericNumber");
      }
      static [Js] = "SQLiteNumericNumber";
      mapFromDriverValue(e4) {
        return "number" == typeof e4 ? e4 : Number(e4);
      }
      mapToDriverValue = String;
      getSQLType() {
        return "numeric";
      }
    };
    SQLiteNumericBigIntBuilder = class extends SQLiteColumnBuilder {
      static {
        __name(this, "SQLiteNumericBigIntBuilder");
      }
      static [Js] = "SQLiteNumericBigIntBuilder";
      constructor(e4) {
        super(e4, "bigint", "SQLiteNumericBigInt");
      }
      build(e4) {
        return new SQLiteNumericBigInt(e4, this.config);
      }
    };
    SQLiteNumericBigInt = class extends SQLiteColumn {
      static {
        __name(this, "SQLiteNumericBigInt");
      }
      static [Js] = "SQLiteNumericBigInt";
      mapFromDriverValue = BigInt;
      mapToDriverValue = String;
      getSQLType() {
        return "numeric";
      }
    };
    __name(numeric, "numeric");
    SQLiteRealBuilder = class extends SQLiteColumnBuilder {
      static {
        __name(this, "SQLiteRealBuilder");
      }
      static [Js] = "SQLiteRealBuilder";
      constructor(e4) {
        super(e4, "number", "SQLiteReal");
      }
      build(e4) {
        return new SQLiteReal(e4, this.config);
      }
    };
    SQLiteReal = class extends SQLiteColumn {
      static {
        __name(this, "SQLiteReal");
      }
      static [Js] = "SQLiteReal";
      getSQLType() {
        return "real";
      }
    };
    __name(real, "real");
    SQLiteTextBuilder = class extends SQLiteColumnBuilder {
      static {
        __name(this, "SQLiteTextBuilder");
      }
      static [Js] = "SQLiteTextBuilder";
      constructor(e4, t5) {
        super(e4, "string", "SQLiteText"), this.config.enumValues = t5.enum, this.config.length = t5.length;
      }
      build(e4) {
        return new SQLiteText(e4, this.config);
      }
    };
    SQLiteText = class extends SQLiteColumn {
      static {
        __name(this, "SQLiteText");
      }
      static [Js] = "SQLiteText";
      enumValues = this.config.enumValues;
      length = this.config.length;
      constructor(e4, t5) {
        super(e4, t5);
      }
      getSQLType() {
        return "text" + (this.config.length ? `(${this.config.length})` : "");
      }
    };
    SQLiteTextJsonBuilder = class extends SQLiteColumnBuilder {
      static {
        __name(this, "SQLiteTextJsonBuilder");
      }
      static [Js] = "SQLiteTextJsonBuilder";
      constructor(e4) {
        super(e4, "json", "SQLiteTextJson");
      }
      build(e4) {
        return new SQLiteTextJson(e4, this.config);
      }
    };
    SQLiteTextJson = class extends SQLiteColumn {
      static {
        __name(this, "SQLiteTextJson");
      }
      static [Js] = "SQLiteTextJson";
      getSQLType() {
        return "text";
      }
      mapFromDriverValue(e4) {
        return JSON.parse(e4);
      }
      mapToDriverValue(e4) {
        return JSON.stringify(e4);
      }
    };
    __name(text, "text");
    gr2 = Symbol.for("drizzle:SQLiteInlineForeignKeys");
    SQLiteTable = class extends Table {
      static {
        __name(this, "SQLiteTable");
      }
      static [Js] = "SQLiteTable";
      static Symbol = Object.assign({}, Table.Symbol, { InlineForeignKeys: gr2 });
      [Table.Symbol.Columns];
      [gr2] = [];
      [Table.Symbol.ExtraConfigBuilder] = void 0;
    };
    __name(sqliteTableBase, "sqliteTableBase");
    __name(extractUsedTable, "extractUsedTable");
    SQLiteDeleteBase = class extends QueryPromise {
      static {
        __name(this, "SQLiteDeleteBase");
      }
      constructor(e4, t5, s4, r4) {
        super(), this.table = e4, this.session = t5, this.dialect = s4, this.config = { table: e4, withList: r4 };
      }
      static [Js] = "SQLiteDelete";
      config;
      where(e4) {
        return this.config.where = e4, this;
      }
      orderBy(...e4) {
        if ("function" == typeof e4[0]) {
          const t5 = e4[0](new Proxy(this.config.table[Table.Symbol.Columns], new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" }))), s4 = Array.isArray(t5) ? t5 : [t5];
          this.config.orderBy = s4;
        } else {
          const t5 = e4;
          this.config.orderBy = t5;
        }
        return this;
      }
      limit(e4) {
        return this.config.limit = e4, this;
      }
      returning(e4 = this.table[SQLiteTable.Symbol.Columns]) {
        return this.config.returning = orderSelectedFields(e4), this;
      }
      getSQL() {
        return this.dialect.buildDeleteQuery(this.config);
      }
      toSQL() {
        const { typings: e4, ...t5 } = this.dialect.sqlToQuery(this.getSQL());
        return t5;
      }
      _prepare(e4 = true) {
        return this.session[e4 ? "prepareOneTimeQuery" : "prepareQuery"](this.dialect.sqlToQuery(this.getSQL()), this.config.returning, this.config.returning ? "all" : "run", true, void 0, { type: "delete", tables: extractUsedTable(this.config.table) });
      }
      prepare() {
        return this._prepare(false);
      }
      run = /* @__PURE__ */ __name((e4) => this._prepare().run(e4), "run");
      all = /* @__PURE__ */ __name((e4) => this._prepare().all(e4), "all");
      get = /* @__PURE__ */ __name((e4) => this._prepare().get(e4), "get");
      values = /* @__PURE__ */ __name((e4) => this._prepare().values(e4), "values");
      async execute(e4) {
        return this._prepare().execute(e4);
      }
      $dynamic() {
        return this;
      }
    };
    __name(toSnakeCase, "toSnakeCase");
    __name(toCamelCase, "toCamelCase");
    __name(noopCase, "noopCase");
    CasingCache = class {
      static {
        __name(this, "CasingCache");
      }
      static [Js] = "CasingCache";
      cache = {};
      cachedTables = {};
      convert;
      constructor(e4) {
        this.convert = "snake_case" === e4 ? toSnakeCase : "camelCase" === e4 ? toCamelCase : noopCase;
      }
      getColumnCasing(e4) {
        if (!e4.keyAsName) return e4.name;
        const t5 = `${e4.table[Table.Symbol.Schema] ?? "public"}.${e4.table[Table.Symbol.OriginalName]}.${e4.name}`;
        return this.cache[t5] || this.cacheTable(e4.table), this.cache[t5];
      }
      cacheTable(e4) {
        const t5 = `${e4[Table.Symbol.Schema] ?? "public"}.${e4[Table.Symbol.OriginalName]}`;
        if (!this.cachedTables[t5]) {
          for (const s4 of Object.values(e4[Table.Symbol.Columns])) {
            const e5 = `${t5}.${s4.name}`;
            this.cache[e5] = this.convert(s4.name);
          }
          this.cachedTables[t5] = true;
        }
      }
      clearCache() {
        this.cache = {}, this.cachedTables = {};
      }
    };
    DrizzleError = class extends Error {
      static {
        __name(this, "DrizzleError");
      }
      static [Js] = "DrizzleError";
      constructor({ message: e4, cause: t5 }) {
        super(e4), this.name = "DrizzleError", this.cause = t5;
      }
    };
    DrizzleQueryError = class _DrizzleQueryError extends Error {
      static {
        __name(this, "DrizzleQueryError");
      }
      constructor(e4, t5, s4) {
        super(`Failed query: ${e4}
params: ${t5}`), this.query = e4, this.params = t5, this.cause = s4, Error.captureStackTrace(this, _DrizzleQueryError), s4 && (this.cause = s4);
      }
    };
    TransactionRollbackError = class extends DrizzleError {
      static {
        __name(this, "TransactionRollbackError");
      }
      static [Js] = "TransactionRollbackError";
      constructor() {
        super({ message: "Rollback" });
      }
    };
    SQLiteViewBase = class extends View {
      static {
        __name(this, "SQLiteViewBase");
      }
      static [Js] = "SQLiteViewBase";
    };
    SQLiteDialect = class {
      static {
        __name(this, "SQLiteDialect");
      }
      static [Js] = "SQLiteDialect";
      casing;
      constructor(e4) {
        this.casing = new CasingCache(e4?.casing);
      }
      escapeName(e4) {
        return `"${e4}"`;
      }
      escapeParam(e4) {
        return "?";
      }
      escapeString(e4) {
        return `'${e4.replace(/'/g, "''")}'`;
      }
      buildWithCTE(e4) {
        if (!e4?.length) return;
        const t5 = [sql`with `];
        for (const [s4, r4] of e4.entries()) t5.push(sql`${sql.identifier(r4._.alias)} as (${r4._.sql})`), s4 < e4.length - 1 && t5.push(sql`, `);
        return t5.push(sql` `), sql.join(t5);
      }
      buildDeleteQuery({ table: e4, where: t5, returning: s4, withList: r4, limit: a6, orderBy: c4 }) {
        return sql`${this.buildWithCTE(r4)}delete from ${e4}${t5 ? sql` where ${t5}` : void 0}${s4 ? sql` returning ${this.buildSelection(s4, { isSingleTable: true })}` : void 0}${this.buildOrderBy(c4)}${this.buildLimit(a6)}`;
      }
      buildUpdateSet(e4, t5) {
        const s4 = e4[Table.Symbol.Columns], r4 = Object.keys(s4).filter((e5) => void 0 !== t5[e5] || void 0 !== s4[e5]?.onUpdateFn), a6 = r4.length;
        return sql.join(r4.flatMap((e5, r5) => {
          const c4 = s4[e5], u3 = c4.onUpdateFn?.(), d3 = t5[e5] ?? (is(u3, SQL) ? u3 : sql.param(u3, c4)), h4 = sql`${sql.identifier(this.casing.getColumnCasing(c4))} = ${d3}`;
          return r5 < a6 - 1 ? [h4, sql.raw(", ")] : [h4];
        }));
      }
      buildUpdateQuery({ table: e4, set: t5, where: s4, returning: r4, withList: a6, joins: c4, from: u3, limit: d3, orderBy: h4 }) {
        const f3 = this.buildWithCTE(a6), m3 = this.buildUpdateSet(e4, t5), g4 = u3 && sql.join([sql.raw(" from "), this.buildFromTable(u3)]);
        return sql`${f3}update ${e4} set ${m3}${g4}${this.buildJoins(c4)}${s4 ? sql` where ${s4}` : void 0}${r4 ? sql` returning ${this.buildSelection(r4, { isSingleTable: true })}` : void 0}${this.buildOrderBy(h4)}${this.buildLimit(d3)}`;
      }
      buildSelection(e4, { isSingleTable: t5 = false } = {}) {
        const s4 = e4.length, r4 = e4.flatMap(({ field: e5 }, r5) => {
          const a6 = [];
          if (is(e5, SQL.Aliased) && e5.isSelectionField) a6.push(sql.identifier(e5.fieldAlias));
          else if (is(e5, SQL.Aliased) || is(e5, SQL)) {
            const s5 = is(e5, SQL.Aliased) ? e5.sql : e5;
            t5 ? a6.push(new SQL(s5.queryChunks.map((e6) => is(e6, Column) ? sql.identifier(this.casing.getColumnCasing(e6)) : e6))) : a6.push(s5), is(e5, SQL.Aliased) && a6.push(sql` as ${sql.identifier(e5.fieldAlias)}`);
          } else if (is(e5, Column)) {
            const s5 = e5.table[Table.Symbol.Name];
            "SQLiteNumericBigInt" === e5.columnType ? t5 ? a6.push(sql`cast(${sql.identifier(this.casing.getColumnCasing(e5))} as text)`) : a6.push(sql`cast(${sql.identifier(s5)}.${sql.identifier(this.casing.getColumnCasing(e5))} as text)`) : t5 ? a6.push(sql.identifier(this.casing.getColumnCasing(e5))) : a6.push(sql`${sql.identifier(s5)}.${sql.identifier(this.casing.getColumnCasing(e5))}`);
          } else if (is(e5, Subquery)) {
            const t6 = Object.entries(e5._.selectedFields);
            if (1 === t6.length) {
              const s5 = t6[0][1], r6 = is(s5, SQL) ? s5.decoder : is(s5, Column) ? { mapFromDriverValue: /* @__PURE__ */ __name((e6) => s5.mapFromDriverValue(e6), "mapFromDriverValue") } : s5.sql.decoder;
              r6 && (e5._.sql.decoder = r6);
            }
            a6.push(e5);
          }
          return r5 < s4 - 1 && a6.push(sql`, `), a6;
        });
        return sql.join(r4);
      }
      buildJoins(e4) {
        if (!e4 || 0 === e4.length) return;
        const t5 = [];
        if (e4) for (const [s4, r4] of e4.entries()) {
          0 === s4 && t5.push(sql` `);
          const a6 = r4.table, c4 = r4.on ? sql` on ${r4.on}` : void 0;
          if (is(a6, SQLiteTable)) {
            const e5 = a6[SQLiteTable.Symbol.Name], s5 = a6[SQLiteTable.Symbol.Schema], u3 = a6[SQLiteTable.Symbol.OriginalName], d3 = e5 === u3 ? void 0 : r4.alias;
            t5.push(sql`${sql.raw(r4.joinType)} join ${s5 ? sql`${sql.identifier(s5)}.` : void 0}${sql.identifier(u3)}${d3 && sql` ${sql.identifier(d3)}`}${c4}`);
          } else t5.push(sql`${sql.raw(r4.joinType)} join ${a6}${c4}`);
          s4 < e4.length - 1 && t5.push(sql` `);
        }
        return sql.join(t5);
      }
      buildLimit(e4) {
        return "object" == typeof e4 || "number" == typeof e4 && e4 >= 0 ? sql` limit ${e4}` : void 0;
      }
      buildOrderBy(e4) {
        const t5 = [];
        if (e4) for (const [s4, r4] of e4.entries()) t5.push(r4), s4 < e4.length - 1 && t5.push(sql`, `);
        return t5.length > 0 ? sql` order by ${sql.join(t5)}` : void 0;
      }
      buildFromTable(e4) {
        return is(e4, Table) && e4[Table.Symbol.IsAlias] ? sql`${sql`${sql.identifier(e4[Table.Symbol.Schema] ?? "")}.`.if(e4[Table.Symbol.Schema])}${sql.identifier(e4[Table.Symbol.OriginalName])} ${sql.identifier(e4[Table.Symbol.Name])}` : e4;
      }
      buildSelectQuery({ withList: e4, fields: t5, fieldsFlat: s4, where: r4, having: a6, table: c4, joins: u3, orderBy: d3, groupBy: h4, limit: f3, offset: m3, distinct: g4, setOperators: S3 }) {
        const _3 = s4 ?? orderSelectedFields(t5);
        for (const e5 of _3) if (is(e5.field, Column) && getTableName(e5.field.table) !== (is(c4, Subquery) ? c4._.alias : is(c4, SQLiteViewBase) ? c4[lr2].name : is(c4, SQL) ? void 0 : getTableName(c4)) && !((e6) => u3?.some(({ alias: t6 }) => t6 === (e6[Table.Symbol.IsAlias] ? getTableName(e6) : e6[Table.Symbol.BaseName])))(e5.field.table)) {
          const t6 = getTableName(e5.field.table);
          throw new Error(`Your "${e5.path.join("->")}" field references a column "${t6}"."${e5.field.name}", but the table "${t6}" is not part of the query! Did you forget to join it?`);
        }
        const L3 = !u3 || 0 === u3.length, C3 = this.buildWithCTE(e4), T3 = g4 ? sql` distinct` : void 0, Q3 = this.buildSelection(_3, { isSingleTable: L3 }), q3 = this.buildFromTable(c4), x4 = this.buildJoins(u3), R3 = r4 ? sql` where ${r4}` : void 0, B2 = a6 ? sql` having ${a6}` : void 0, N3 = [];
        if (h4) for (const [e5, t6] of h4.entries()) N3.push(t6), e5 < h4.length - 1 && N3.push(sql`, `);
        const E3 = N3.length > 0 ? sql` group by ${sql.join(N3)}` : void 0, $2 = sql`${C3}select${T3} ${Q3} from ${q3}${x4}${R3}${E3}${B2}${this.buildOrderBy(d3)}${this.buildLimit(f3)}${m3 ? sql` offset ${m3}` : void 0}`;
        return S3.length > 0 ? this.buildSetOperations($2, S3) : $2;
      }
      buildSetOperations(e4, t5) {
        const [s4, ...r4] = t5;
        if (!s4) throw new Error("Cannot pass undefined values to any set operator");
        return 0 === r4.length ? this.buildSetOperationQuery({ leftSelect: e4, setOperator: s4 }) : this.buildSetOperations(this.buildSetOperationQuery({ leftSelect: e4, setOperator: s4 }), r4);
      }
      buildSetOperationQuery({ leftSelect: e4, setOperator: { type: t5, isAll: s4, rightSelect: r4, limit: a6, orderBy: c4, offset: u3 } }) {
        const d3 = sql`${e4.getSQL()} `, h4 = sql`${r4.getSQL()}`;
        let f3;
        if (c4 && c4.length > 0) {
          const e5 = [];
          for (const t6 of c4) if (is(t6, SQLiteColumn)) e5.push(sql.identifier(t6.name));
          else if (is(t6, SQL)) {
            for (let e6 = 0; e6 < t6.queryChunks.length; e6++) {
              const s5 = t6.queryChunks[e6];
              is(s5, SQLiteColumn) && (t6.queryChunks[e6] = sql.identifier(this.casing.getColumnCasing(s5)));
            }
            e5.push(sql`${t6}`);
          } else e5.push(sql`${t6}`);
          f3 = sql` order by ${sql.join(e5, sql`, `)}`;
        }
        const m3 = "object" == typeof a6 || "number" == typeof a6 && a6 >= 0 ? sql` limit ${a6}` : void 0, g4 = sql.raw(`${t5} ${s4 ? "all " : ""}`);
        return sql`${d3}${g4}${h4}${f3}${m3}${u3 ? sql` offset ${u3}` : void 0}`;
      }
      buildInsertQuery({ table: e4, values: t5, onConflict: s4, returning: r4, withList: a6, select: c4 }) {
        const u3 = [], d3 = e4[Table.Symbol.Columns], h4 = Object.entries(d3).filter(([e5, t6]) => !t6.shouldDisableInsert()), f3 = h4.map(([, e5]) => sql.identifier(this.casing.getColumnCasing(e5)));
        if (c4) {
          const e5 = t5;
          is(e5, SQL) ? u3.push(e5) : u3.push(e5.getSQL());
        } else {
          const e5 = t5;
          u3.push(sql.raw("values "));
          for (const [t6, s5] of e5.entries()) {
            const r5 = [];
            for (const [e6, t7] of h4) {
              const a7 = s5[e6];
              if (void 0 === a7 || is(a7, Param) && void 0 === a7.value) {
                let e7;
                if (null !== t7.default && void 0 !== t7.default) e7 = is(t7.default, SQL) ? t7.default : sql.param(t7.default, t7);
                else if (void 0 !== t7.defaultFn) {
                  const s6 = t7.defaultFn();
                  e7 = is(s6, SQL) ? s6 : sql.param(s6, t7);
                } else if (t7.default || void 0 === t7.onUpdateFn) e7 = sql`null`;
                else {
                  const s6 = t7.onUpdateFn();
                  e7 = is(s6, SQL) ? s6 : sql.param(s6, t7);
                }
                r5.push(e7);
              } else r5.push(a7);
            }
            u3.push(r5), t6 < e5.length - 1 && u3.push(sql`, `);
          }
        }
        const m3 = this.buildWithCTE(a6), g4 = sql.join(u3), S3 = r4 ? sql` returning ${this.buildSelection(r4, { isSingleTable: true })}` : void 0, _3 = s4?.length ? sql.join(s4) : void 0;
        return sql`${m3}insert into ${e4} ${f3} ${g4}${_3}${S3}`;
      }
      sqlToQuery(e4, t5) {
        return e4.toQuery({ casing: this.casing, escapeName: this.escapeName, escapeParam: this.escapeParam, escapeString: this.escapeString, invokeSource: t5 });
      }
      buildRelationalQuery({ fullSchema: e4, schema: t5, tableNamesMap: s4, table: r4, tableConfig: a6, queryConfig: c4, tableAlias: u3, nestedQueryRelation: d3, joinOn: h4 }) {
        let f3, m3, g4, S3 = [], _3 = [];
        const L3 = [];
        if (true === c4) {
          S3 = Object.entries(a6.columns).map(([e5, t6]) => ({ dbKey: t6.name, tsKey: e5, field: aliasedTableColumn(t6, u3), relationTableTsKey: void 0, isJson: false, selection: [] }));
        } else {
          const r5 = Object.fromEntries(Object.entries(a6.columns).map(([e5, t6]) => [e5, aliasedTableColumn(t6, u3)]));
          if (c4.where) {
            const e5 = "function" == typeof c4.where ? c4.where(r5, { and, between, eq, exists, gt: gt3, gte, ilike, inArray, isNull, isNotNull, like, lt: lt3, lte, ne: ne2, not, notBetween, notExists, notLike, notIlike, notInArray, or: or2, sql }) : c4.where;
            g4 = e5 && mapColumnsInSQLToAlias(e5, u3);
          }
          const d4 = [];
          let h5 = [];
          if (c4.columns) {
            let e5 = false;
            for (const [t6, s5] of Object.entries(c4.columns)) void 0 !== s5 && t6 in a6.columns && (e5 || true !== s5 || (e5 = true), h5.push(t6));
            h5.length > 0 && (h5 = e5 ? h5.filter((e6) => true === c4.columns?.[e6]) : Object.keys(a6.columns).filter((e6) => !h5.includes(e6)));
          } else h5 = Object.keys(a6.columns);
          for (const e5 of h5) {
            const t6 = a6.columns[e5];
            d4.push({ tsKey: e5, value: t6 });
          }
          let L4, C4 = [];
          if (c4.with && (C4 = Object.entries(c4.with).filter((e5) => !!e5[1]).map(([e5, t6]) => ({ tsKey: e5, queryConfig: t6, relation: a6.relations[e5] }))), c4.extras) {
            L4 = "function" == typeof c4.extras ? c4.extras(r5, { sql }) : c4.extras;
            for (const [e5, t6] of Object.entries(L4)) d4.push({ tsKey: e5, value: mapColumnsInAliasedSQLToAlias(t6, u3) });
          }
          for (const { tsKey: e5, value: t6 } of d4) S3.push({ dbKey: is(t6, SQL.Aliased) ? t6.fieldAlias : a6.columns[e5].name, tsKey: e5, field: is(t6, Column) ? aliasedTableColumn(t6, u3) : t6, relationTableTsKey: void 0, isJson: false, selection: [] });
          let T3 = "function" == typeof c4.orderBy ? c4.orderBy(r5, { sql, asc, desc }) : c4.orderBy ?? [];
          Array.isArray(T3) || (T3 = [T3]), _3 = T3.map((e5) => is(e5, Column) ? aliasedTableColumn(e5, u3) : mapColumnsInSQLToAlias(e5, u3)), f3 = c4.limit, m3 = c4.offset;
          for (const { tsKey: r6, queryConfig: a7, relation: c5 } of C4) {
            const d5 = normalizeRelation(t5, s4, c5), h6 = s4[getTableUniqueName(c5.referencedTable)], f4 = `${u3}_${r6}`, m4 = and(...d5.fields.map((e5, t6) => eq(aliasedTableColumn(d5.references[t6], f4), aliasedTableColumn(e5, u3)))), g5 = this.buildRelationalQuery({ fullSchema: e4, schema: t5, tableNamesMap: s4, table: e4[h6], tableConfig: t5[h6], queryConfig: is(c5, One) ? true === a7 ? { limit: 1 } : { ...a7, limit: 1 } : a7, tableAlias: f4, joinOn: m4, nestedQueryRelation: c5 }), _4 = sql`(${g5.sql})`.as(r6);
            S3.push({ dbKey: r6, tsKey: r6, field: _4, relationTableTsKey: h6, isJson: true, selection: g5.selection });
          }
        }
        if (0 === S3.length) throw new DrizzleError({ message: `No fields selected for table "${a6.tsName}" ("${u3}"). You need to have at least one item in "columns", "with" or "extras". If you need to select all columns, omit the "columns" key or set it to undefined.` });
        let C3;
        if (g4 = and(h4, g4), d3) {
          let e5 = sql`json_array(${sql.join(S3.map(({ field: e6 }) => is(e6, SQLiteColumn) ? sql.identifier(this.casing.getColumnCasing(e6)) : is(e6, SQL.Aliased) ? e6.sql : e6), sql`, `)})`;
          is(d3, Many) && (e5 = sql`coalesce(json_group_array(${e5}), json_array())`);
          const t6 = [{ dbKey: "data", tsKey: "data", field: e5.as("data"), isJson: true, relationTableTsKey: a6.tsName, selection: S3 }];
          void 0 !== f3 || void 0 !== m3 || _3.length > 0 ? (C3 = this.buildSelectQuery({ table: aliasedTable(r4, u3), fields: {}, fieldsFlat: [{ path: [], field: sql.raw("*") }], where: g4, limit: f3, offset: m3, orderBy: _3, setOperators: [] }), g4 = void 0, f3 = void 0, m3 = void 0, _3 = void 0) : C3 = aliasedTable(r4, u3), C3 = this.buildSelectQuery({ table: is(C3, SQLiteTable) ? C3 : new Subquery(C3, {}, u3), fields: {}, fieldsFlat: t6.map(({ field: e6 }) => ({ path: [], field: is(e6, Column) ? aliasedTableColumn(e6, u3) : e6 })), joins: L3, where: g4, limit: f3, offset: m3, orderBy: _3, setOperators: [] });
        } else C3 = this.buildSelectQuery({ table: aliasedTable(r4, u3), fields: {}, fieldsFlat: S3.map(({ field: e5 }) => ({ path: [], field: is(e5, Column) ? aliasedTableColumn(e5, u3) : e5 })), joins: L3, where: g4, limit: f3, offset: m3, orderBy: _3, setOperators: [] });
        return { tableTsKey: a6.tsName, sql: C3, selection: S3 };
      }
    };
    SQLiteSyncDialect = class extends SQLiteDialect {
      static {
        __name(this, "SQLiteSyncDialect");
      }
      static [Js] = "SQLiteSyncDialect";
      migrate(e4, t5, s4) {
        const r4 = void 0 === s4 || "string" == typeof s4 ? "__drizzle_migrations" : s4.migrationsTable ?? "__drizzle_migrations", a6 = sql`
			CREATE TABLE IF NOT EXISTS ${sql.identifier(r4)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
        t5.run(a6);
        const c4 = t5.values(sql`SELECT id, hash, created_at FROM ${sql.identifier(r4)} ORDER BY created_at DESC LIMIT 1`)[0] ?? void 0;
        t5.run(sql`BEGIN`);
        try {
          for (const s5 of e4) if (!c4 || Number(c4[2]) < s5.folderMillis) {
            for (const e5 of s5.sql) t5.run(sql.raw(e5));
            t5.run(sql`INSERT INTO ${sql.identifier(r4)} ("hash", "created_at") VALUES(${s5.hash}, ${s5.folderMillis})`);
          }
          t5.run(sql`COMMIT`);
        } catch (e5) {
          throw t5.run(sql`ROLLBACK`), e5;
        }
      }
    };
    SQLiteAsyncDialect = class extends SQLiteDialect {
      static {
        __name(this, "SQLiteAsyncDialect");
      }
      static [Js] = "SQLiteAsyncDialect";
      async migrate(e4, t5, s4) {
        const r4 = void 0 === s4 || "string" == typeof s4 ? "__drizzle_migrations" : s4.migrationsTable ?? "__drizzle_migrations", a6 = sql`
			CREATE TABLE IF NOT EXISTS ${sql.identifier(r4)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
        await t5.run(a6);
        const c4 = (await t5.values(sql`SELECT id, hash, created_at FROM ${sql.identifier(r4)} ORDER BY created_at DESC LIMIT 1`))[0] ?? void 0;
        await t5.transaction(async (t6) => {
          for (const s5 of e4) if (!c4 || Number(c4[2]) < s5.folderMillis) {
            for (const e5 of s5.sql) await t6.run(sql.raw(e5));
            await t6.run(sql`INSERT INTO ${sql.identifier(r4)} ("hash", "created_at") VALUES(${s5.hash}, ${s5.folderMillis})`);
          }
        });
      }
    };
    TypedQueryBuilder = class {
      static {
        __name(this, "TypedQueryBuilder");
      }
      static [Js] = "TypedQueryBuilder";
      getSelectedFields() {
        return this._.selectedFields;
      }
    };
    SQLiteSelectBuilder = class {
      static {
        __name(this, "SQLiteSelectBuilder");
      }
      static [Js] = "SQLiteSelectBuilder";
      fields;
      session;
      dialect;
      withList;
      distinct;
      constructor(e4) {
        this.fields = e4.fields, this.session = e4.session, this.dialect = e4.dialect, this.withList = e4.withList, this.distinct = e4.distinct;
      }
      from(e4) {
        const t5 = !!this.fields;
        let s4;
        return s4 = this.fields ? this.fields : is(e4, Subquery) ? Object.fromEntries(Object.keys(e4._.selectedFields).map((t6) => [t6, e4[t6]])) : is(e4, SQLiteViewBase) ? e4[lr2].selectedFields : is(e4, SQL) ? {} : e4[Table.Symbol.Columns], new SQLiteSelectBase({ table: e4, fields: s4, isPartialSelect: t5, session: this.session, dialect: this.dialect, withList: this.withList, distinct: this.distinct });
      }
    };
    SQLiteSelectQueryBuilderBase = class extends TypedQueryBuilder {
      static {
        __name(this, "SQLiteSelectQueryBuilderBase");
      }
      static [Js] = "SQLiteSelectQueryBuilder";
      _;
      config;
      joinsNotNullableMap;
      tableName;
      isPartialSelect;
      session;
      dialect;
      cacheConfig = void 0;
      usedTables = /* @__PURE__ */ new Set();
      constructor({ table: e4, fields: t5, isPartialSelect: s4, session: r4, dialect: a6, withList: c4, distinct: u3 }) {
        super(), this.config = { withList: c4, table: e4, fields: { ...t5 }, distinct: u3, setOperators: [] }, this.isPartialSelect = s4, this.session = r4, this.dialect = a6, this._ = { selectedFields: t5, config: this.config }, this.tableName = getTableLikeName(e4), this.joinsNotNullableMap = "string" == typeof this.tableName ? { [this.tableName]: true } : {};
        for (const t6 of extractUsedTable(e4)) this.usedTables.add(t6);
      }
      getUsedTables() {
        return [...this.usedTables];
      }
      createJoin(e4) {
        return (t5, s4) => {
          const r4 = this.tableName, a6 = getTableLikeName(t5);
          for (const e5 of extractUsedTable(t5)) this.usedTables.add(e5);
          if ("string" == typeof a6 && this.config.joins?.some((e5) => e5.alias === a6)) throw new Error(`Alias "${a6}" is already used in this query`);
          if (!this.isPartialSelect && (1 === Object.keys(this.joinsNotNullableMap).length && "string" == typeof r4 && (this.config.fields = { [r4]: this.config.fields }), "string" == typeof a6 && !is(t5, SQL))) {
            const e5 = is(t5, Subquery) ? t5._.selectedFields : is(t5, View) ? t5[lr2].selectedFields : t5[Table.Symbol.Columns];
            this.config.fields[a6] = e5;
          }
          if ("function" == typeof s4 && (s4 = s4(new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })))), this.config.joins || (this.config.joins = []), this.config.joins.push({ on: s4, table: t5, joinType: e4, alias: a6 }), "string" == typeof a6) switch (e4) {
            case "left":
              this.joinsNotNullableMap[a6] = false;
              break;
            case "right":
              this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([e5]) => [e5, false])), this.joinsNotNullableMap[a6] = true;
              break;
            case "cross":
            case "inner":
              this.joinsNotNullableMap[a6] = true;
              break;
            case "full":
              this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([e5]) => [e5, false])), this.joinsNotNullableMap[a6] = false;
          }
          return this;
        };
      }
      leftJoin = this.createJoin("left");
      rightJoin = this.createJoin("right");
      innerJoin = this.createJoin("inner");
      fullJoin = this.createJoin("full");
      crossJoin = this.createJoin("cross");
      createSetOperator(e4, t5) {
        return (s4) => {
          const r4 = "function" == typeof s4 ? s4(getSQLiteSetOperators()) : s4;
          if (!haveSameKeys(this.getSelectedFields(), r4.getSelectedFields())) throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");
          return this.config.setOperators.push({ type: e4, isAll: t5, rightSelect: r4 }), this;
        };
      }
      union = this.createSetOperator("union", false);
      unionAll = this.createSetOperator("union", true);
      intersect = this.createSetOperator("intersect", false);
      except = this.createSetOperator("except", false);
      addSetOperators(e4) {
        return this.config.setOperators.push(...e4), this;
      }
      where(e4) {
        return "function" == typeof e4 && (e4 = e4(new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })))), this.config.where = e4, this;
      }
      having(e4) {
        return "function" == typeof e4 && (e4 = e4(new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })))), this.config.having = e4, this;
      }
      groupBy(...e4) {
        if ("function" == typeof e4[0]) {
          const t5 = e4[0](new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })));
          this.config.groupBy = Array.isArray(t5) ? t5 : [t5];
        } else this.config.groupBy = e4;
        return this;
      }
      orderBy(...e4) {
        if ("function" == typeof e4[0]) {
          const t5 = e4[0](new Proxy(this.config.fields, new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" }))), s4 = Array.isArray(t5) ? t5 : [t5];
          this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).orderBy = s4 : this.config.orderBy = s4;
        } else {
          const t5 = e4;
          this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).orderBy = t5 : this.config.orderBy = t5;
        }
        return this;
      }
      limit(e4) {
        return this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).limit = e4 : this.config.limit = e4, this;
      }
      offset(e4) {
        return this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).offset = e4 : this.config.offset = e4, this;
      }
      getSQL() {
        return this.dialect.buildSelectQuery(this.config);
      }
      toSQL() {
        const { typings: e4, ...t5 } = this.dialect.sqlToQuery(this.getSQL());
        return t5;
      }
      as(e4) {
        const t5 = [];
        if (t5.push(...extractUsedTable(this.config.table)), this.config.joins) for (const e5 of this.config.joins) t5.push(...extractUsedTable(e5.table));
        return new Proxy(new Subquery(this.getSQL(), this.config.fields, e4, false, [...new Set(t5)]), new SelectionProxyHandler({ alias: e4, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
      }
      getSelectedFields() {
        return new Proxy(this.config.fields, new SelectionProxyHandler({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
      }
      $dynamic() {
        return this;
      }
    };
    SQLiteSelectBase = class extends SQLiteSelectQueryBuilderBase {
      static {
        __name(this, "SQLiteSelectBase");
      }
      static [Js] = "SQLiteSelect";
      _prepare(e4 = true) {
        if (!this.session) throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
        const t5 = orderSelectedFields(this.config.fields), s4 = this.session[e4 ? "prepareOneTimeQuery" : "prepareQuery"](this.dialect.sqlToQuery(this.getSQL()), t5, "all", true, void 0, { type: "select", tables: [...this.usedTables] }, this.cacheConfig);
        return s4.joinsNotNullableMap = this.joinsNotNullableMap, s4;
      }
      $withCache(e4) {
        return this.cacheConfig = void 0 === e4 ? { config: {}, enable: true, autoInvalidate: true } : false === e4 ? { enable: false } : { enable: true, autoInvalidate: true, ...e4 }, this;
      }
      prepare() {
        return this._prepare(false);
      }
      run = /* @__PURE__ */ __name((e4) => this._prepare().run(e4), "run");
      all = /* @__PURE__ */ __name((e4) => this._prepare().all(e4), "all");
      get = /* @__PURE__ */ __name((e4) => this._prepare().get(e4), "get");
      values = /* @__PURE__ */ __name((e4) => this._prepare().values(e4), "values");
      async execute() {
        return this.all();
      }
    };
    __name(createSetOperator, "createSetOperator");
    !(function(e4, t5) {
      for (const s4 of t5) for (const t6 of Object.getOwnPropertyNames(s4.prototype)) "constructor" !== t6 && Object.defineProperty(e4.prototype, t6, Object.getOwnPropertyDescriptor(s4.prototype, t6) || /* @__PURE__ */ Object.create(null));
    })(SQLiteSelectBase, [QueryPromise]);
    getSQLiteSetOperators = /* @__PURE__ */ __name(() => ({ union: yr2, unionAll: br2, intersect: wr2, except: Sr2 }), "getSQLiteSetOperators");
    yr2 = createSetOperator("union", false);
    br2 = createSetOperator("union", true);
    wr2 = createSetOperator("intersect", false);
    Sr2 = createSetOperator("except", false);
    QueryBuilder = class {
      static {
        __name(this, "QueryBuilder");
      }
      static [Js] = "SQLiteQueryBuilder";
      dialect;
      dialectConfig;
      constructor(e4) {
        this.dialect = is(e4, SQLiteDialect) ? e4 : void 0, this.dialectConfig = is(e4, SQLiteDialect) ? void 0 : e4;
      }
      $with = /* @__PURE__ */ __name((e4, t5) => {
        const s4 = this;
        return { as: /* @__PURE__ */ __name((r4) => ("function" == typeof r4 && (r4 = r4(s4)), new Proxy(new WithSubquery(r4.getSQL(), t5 ?? ("getSelectedFields" in r4 ? r4.getSelectedFields() ?? {} : {}), e4, true), new SelectionProxyHandler({ alias: e4, sqlAliasedBehavior: "alias", sqlBehavior: "error" }))), "as") };
      }, "$with");
      with(...e4) {
        const t5 = this;
        return { select: /* @__PURE__ */ __name(function(s4) {
          return new SQLiteSelectBuilder({ fields: s4 ?? void 0, session: void 0, dialect: t5.getDialect(), withList: e4 });
        }, "select"), selectDistinct: /* @__PURE__ */ __name(function(s4) {
          return new SQLiteSelectBuilder({ fields: s4 ?? void 0, session: void 0, dialect: t5.getDialect(), withList: e4, distinct: true });
        }, "selectDistinct") };
      }
      select(e4) {
        return new SQLiteSelectBuilder({ fields: e4 ?? void 0, session: void 0, dialect: this.getDialect() });
      }
      selectDistinct(e4) {
        return new SQLiteSelectBuilder({ fields: e4 ?? void 0, session: void 0, dialect: this.getDialect(), distinct: true });
      }
      getDialect() {
        return this.dialect || (this.dialect = new SQLiteSyncDialect(this.dialectConfig)), this.dialect;
      }
    };
    SQLiteInsertBuilder = class {
      static {
        __name(this, "SQLiteInsertBuilder");
      }
      constructor(e4, t5, s4, r4) {
        this.table = e4, this.session = t5, this.dialect = s4, this.withList = r4;
      }
      static [Js] = "SQLiteInsertBuilder";
      values(e4) {
        if (0 === (e4 = Array.isArray(e4) ? e4 : [e4]).length) throw new Error("values() must be called with at least one value");
        const t5 = e4.map((e5) => {
          const t6 = {}, s4 = this.table[Table.Symbol.Columns];
          for (const r4 of Object.keys(e5)) {
            const a6 = e5[r4];
            t6[r4] = is(a6, SQL) ? a6 : new Param(a6, s4[r4]);
          }
          return t6;
        });
        return new SQLiteInsertBase(this.table, t5, this.session, this.dialect, this.withList);
      }
      select(e4) {
        const t5 = "function" == typeof e4 ? e4(new QueryBuilder()) : e4;
        if (!is(t5, SQL) && !haveSameKeys(this.table[Zs], t5._.selectedFields)) throw new Error("Insert select error: selected fields are not the same or are in a different order compared to the table definition");
        return new SQLiteInsertBase(this.table, t5, this.session, this.dialect, this.withList, true);
      }
    };
    SQLiteInsertBase = class extends QueryPromise {
      static {
        __name(this, "SQLiteInsertBase");
      }
      constructor(e4, t5, s4, r4, a6, c4) {
        super(), this.session = s4, this.dialect = r4, this.config = { table: e4, values: t5, withList: a6, select: c4 };
      }
      static [Js] = "SQLiteInsert";
      config;
      returning(e4 = this.config.table[SQLiteTable.Symbol.Columns]) {
        return this.config.returning = orderSelectedFields(e4), this;
      }
      onConflictDoNothing(e4 = {}) {
        if (this.config.onConflict || (this.config.onConflict = []), void 0 === e4.target) this.config.onConflict.push(sql` on conflict do nothing`);
        else {
          const t5 = Array.isArray(e4.target) ? sql`${e4.target}` : sql`${[e4.target]}`, s4 = e4.where ? sql` where ${e4.where}` : sql``;
          this.config.onConflict.push(sql` on conflict ${t5} do nothing${s4}`);
        }
        return this;
      }
      onConflictDoUpdate(e4) {
        if (e4.where && (e4.targetWhere || e4.setWhere)) throw new Error('You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.');
        this.config.onConflict || (this.config.onConflict = []);
        const t5 = e4.where ? sql` where ${e4.where}` : void 0, s4 = e4.targetWhere ? sql` where ${e4.targetWhere}` : void 0, r4 = e4.setWhere ? sql` where ${e4.setWhere}` : void 0, a6 = Array.isArray(e4.target) ? sql`${e4.target}` : sql`${[e4.target]}`, c4 = this.dialect.buildUpdateSet(this.config.table, mapUpdateSet(this.config.table, e4.set));
        return this.config.onConflict.push(sql` on conflict ${a6}${s4} do update set ${c4}${t5}${r4}`), this;
      }
      getSQL() {
        return this.dialect.buildInsertQuery(this.config);
      }
      toSQL() {
        const { typings: e4, ...t5 } = this.dialect.sqlToQuery(this.getSQL());
        return t5;
      }
      _prepare(e4 = true) {
        return this.session[e4 ? "prepareOneTimeQuery" : "prepareQuery"](this.dialect.sqlToQuery(this.getSQL()), this.config.returning, this.config.returning ? "all" : "run", true, void 0, { type: "insert", tables: extractUsedTable(this.config.table) });
      }
      prepare() {
        return this._prepare(false);
      }
      run = /* @__PURE__ */ __name((e4) => this._prepare().run(e4), "run");
      all = /* @__PURE__ */ __name((e4) => this._prepare().all(e4), "all");
      get = /* @__PURE__ */ __name((e4) => this._prepare().get(e4), "get");
      values = /* @__PURE__ */ __name((e4) => this._prepare().values(e4), "values");
      async execute() {
        return this.config.returning ? this.all() : this.run();
      }
      $dynamic() {
        return this;
      }
    };
    SQLiteUpdateBuilder = class {
      static {
        __name(this, "SQLiteUpdateBuilder");
      }
      constructor(e4, t5, s4, r4) {
        this.table = e4, this.session = t5, this.dialect = s4, this.withList = r4;
      }
      static [Js] = "SQLiteUpdateBuilder";
      set(e4) {
        return new SQLiteUpdateBase(this.table, mapUpdateSet(this.table, e4), this.session, this.dialect, this.withList);
      }
    };
    SQLiteUpdateBase = class extends QueryPromise {
      static {
        __name(this, "SQLiteUpdateBase");
      }
      constructor(e4, t5, s4, r4, a6) {
        super(), this.session = s4, this.dialect = r4, this.config = { set: t5, table: e4, withList: a6, joins: [] };
      }
      static [Js] = "SQLiteUpdate";
      config;
      from(e4) {
        return this.config.from = e4, this;
      }
      createJoin(e4) {
        return (t5, s4) => {
          const r4 = getTableLikeName(t5);
          if ("string" == typeof r4 && this.config.joins.some((e5) => e5.alias === r4)) throw new Error(`Alias "${r4}" is already used in this query`);
          if ("function" == typeof s4) {
            const e5 = this.config.from ? is(t5, SQLiteTable) ? t5[Table.Symbol.Columns] : is(t5, Subquery) ? t5._.selectedFields : is(t5, SQLiteViewBase) ? t5[lr2].selectedFields : void 0 : void 0;
            s4 = s4(new Proxy(this.config.table[Table.Symbol.Columns], new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })), e5 && new Proxy(e5, new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })));
          }
          return this.config.joins.push({ on: s4, table: t5, joinType: e4, alias: r4 }), this;
        };
      }
      leftJoin = this.createJoin("left");
      rightJoin = this.createJoin("right");
      innerJoin = this.createJoin("inner");
      fullJoin = this.createJoin("full");
      where(e4) {
        return this.config.where = e4, this;
      }
      orderBy(...e4) {
        if ("function" == typeof e4[0]) {
          const t5 = e4[0](new Proxy(this.config.table[Table.Symbol.Columns], new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" }))), s4 = Array.isArray(t5) ? t5 : [t5];
          this.config.orderBy = s4;
        } else {
          const t5 = e4;
          this.config.orderBy = t5;
        }
        return this;
      }
      limit(e4) {
        return this.config.limit = e4, this;
      }
      returning(e4 = this.config.table[SQLiteTable.Symbol.Columns]) {
        return this.config.returning = orderSelectedFields(e4), this;
      }
      getSQL() {
        return this.dialect.buildUpdateQuery(this.config);
      }
      toSQL() {
        const { typings: e4, ...t5 } = this.dialect.sqlToQuery(this.getSQL());
        return t5;
      }
      _prepare(e4 = true) {
        return this.session[e4 ? "prepareOneTimeQuery" : "prepareQuery"](this.dialect.sqlToQuery(this.getSQL()), this.config.returning, this.config.returning ? "all" : "run", true, void 0, { type: "insert", tables: extractUsedTable(this.config.table) });
      }
      prepare() {
        return this._prepare(false);
      }
      run = /* @__PURE__ */ __name((e4) => this._prepare().run(e4), "run");
      all = /* @__PURE__ */ __name((e4) => this._prepare().all(e4), "all");
      get = /* @__PURE__ */ __name((e4) => this._prepare().get(e4), "get");
      values = /* @__PURE__ */ __name((e4) => this._prepare().values(e4), "values");
      async execute() {
        return this.config.returning ? this.all() : this.run();
      }
      $dynamic() {
        return this;
      }
    };
    SQLiteCountBuilder = class _SQLiteCountBuilder extends SQL {
      static {
        __name(this, "SQLiteCountBuilder");
      }
      constructor(e4) {
        super(_SQLiteCountBuilder.buildEmbeddedCount(e4.source, e4.filters).queryChunks), this.params = e4, this.session = e4.session, this.sql = _SQLiteCountBuilder.buildCount(e4.source, e4.filters);
      }
      sql;
      static [Js] = "SQLiteCountBuilderAsync";
      [Symbol.toStringTag] = "SQLiteCountBuilderAsync";
      session;
      static buildEmbeddedCount(e4, t5) {
        return sql`(select count(*) from ${e4}${sql.raw(" where ").if(t5)}${t5})`;
      }
      static buildCount(e4, t5) {
        return sql`select count(*) from ${e4}${sql.raw(" where ").if(t5)}${t5}`;
      }
      then(e4, t5) {
        return Promise.resolve(this.session.count(this.sql)).then(e4, t5);
      }
      catch(e4) {
        return this.then(void 0, e4);
      }
      finally(e4) {
        return this.then((t5) => (e4?.(), t5), (t5) => {
          throw e4?.(), t5;
        });
      }
    };
    RelationalQueryBuilder = class {
      static {
        __name(this, "RelationalQueryBuilder");
      }
      constructor(e4, t5, s4, r4, a6, c4, u3, d3) {
        this.mode = e4, this.fullSchema = t5, this.schema = s4, this.tableNamesMap = r4, this.table = a6, this.tableConfig = c4, this.dialect = u3, this.session = d3;
      }
      static [Js] = "SQLiteAsyncRelationalQueryBuilder";
      findMany(e4) {
        return "sync" === this.mode ? new SQLiteSyncRelationalQuery(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, e4 || {}, "many") : new SQLiteRelationalQuery(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, e4 || {}, "many");
      }
      findFirst(e4) {
        return "sync" === this.mode ? new SQLiteSyncRelationalQuery(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, e4 ? { ...e4, limit: 1 } : { limit: 1 }, "first") : new SQLiteRelationalQuery(this.fullSchema, this.schema, this.tableNamesMap, this.table, this.tableConfig, this.dialect, this.session, e4 ? { ...e4, limit: 1 } : { limit: 1 }, "first");
      }
    };
    SQLiteRelationalQuery = class extends QueryPromise {
      static {
        __name(this, "SQLiteRelationalQuery");
      }
      constructor(e4, t5, s4, r4, a6, c4, u3, d3, h4) {
        super(), this.fullSchema = e4, this.schema = t5, this.tableNamesMap = s4, this.table = r4, this.tableConfig = a6, this.dialect = c4, this.session = u3, this.config = d3, this.mode = h4;
      }
      static [Js] = "SQLiteAsyncRelationalQuery";
      mode;
      getSQL() {
        return this.dialect.buildRelationalQuery({ fullSchema: this.fullSchema, schema: this.schema, tableNamesMap: this.tableNamesMap, table: this.table, tableConfig: this.tableConfig, queryConfig: this.config, tableAlias: this.tableConfig.tsName }).sql;
      }
      _prepare(e4 = false) {
        const { query: t5, builtQuery: s4 } = this._toSQL();
        return this.session[e4 ? "prepareOneTimeQuery" : "prepareQuery"](s4, void 0, "first" === this.mode ? "get" : "all", true, (e5, s5) => {
          const r4 = e5.map((e6) => mapRelationalRow(this.schema, this.tableConfig, e6, t5.selection, s5));
          return "first" === this.mode ? r4[0] : r4;
        });
      }
      prepare() {
        return this._prepare(false);
      }
      _toSQL() {
        const e4 = this.dialect.buildRelationalQuery({ fullSchema: this.fullSchema, schema: this.schema, tableNamesMap: this.tableNamesMap, table: this.table, tableConfig: this.tableConfig, queryConfig: this.config, tableAlias: this.tableConfig.tsName });
        return { query: e4, builtQuery: this.dialect.sqlToQuery(e4.sql) };
      }
      toSQL() {
        return this._toSQL().builtQuery;
      }
      executeRaw() {
        return "first" === this.mode ? this._prepare(false).get() : this._prepare(false).all();
      }
      async execute() {
        return this.executeRaw();
      }
    };
    SQLiteSyncRelationalQuery = class extends SQLiteRelationalQuery {
      static {
        __name(this, "SQLiteSyncRelationalQuery");
      }
      static [Js] = "SQLiteSyncRelationalQuery";
      sync() {
        return this.executeRaw();
      }
    };
    SQLiteRaw = class extends QueryPromise {
      static {
        __name(this, "SQLiteRaw");
      }
      constructor(e4, t5, s4, r4, a6) {
        super(), this.execute = e4, this.getSQL = t5, this.dialect = r4, this.mapBatchResult = a6, this.config = { action: s4 };
      }
      static [Js] = "SQLiteRaw";
      config;
      getQuery() {
        return { ...this.dialect.sqlToQuery(this.getSQL()), method: this.config.action };
      }
      mapResult(e4, t5) {
        return t5 ? this.mapBatchResult(e4) : e4;
      }
      _prepare() {
        return this;
      }
      isResponseInArrayMode() {
        return false;
      }
    };
    BaseSQLiteDatabase = class {
      static {
        __name(this, "BaseSQLiteDatabase");
      }
      constructor(e4, t5, s4, r4) {
        this.resultKind = e4, this.dialect = t5, this.session = s4, this._ = r4 ? { schema: r4.schema, fullSchema: r4.fullSchema, tableNamesMap: r4.tableNamesMap } : { schema: void 0, fullSchema: {}, tableNamesMap: {} }, this.query = {};
        const a6 = this.query;
        if (this._.schema) for (const [c4, u3] of Object.entries(this._.schema)) a6[c4] = new RelationalQueryBuilder(e4, r4.fullSchema, this._.schema, this._.tableNamesMap, r4.fullSchema[c4], u3, t5, s4);
        this.$cache = { invalidate: /* @__PURE__ */ __name(async (e5) => {
        }, "invalidate") };
      }
      static [Js] = "BaseSQLiteDatabase";
      query;
      $with = /* @__PURE__ */ __name((e4, t5) => {
        const s4 = this;
        return { as: /* @__PURE__ */ __name((r4) => ("function" == typeof r4 && (r4 = r4(new QueryBuilder(s4.dialect))), new Proxy(new WithSubquery(r4.getSQL(), t5 ?? ("getSelectedFields" in r4 ? r4.getSelectedFields() ?? {} : {}), e4, true), new SelectionProxyHandler({ alias: e4, sqlAliasedBehavior: "alias", sqlBehavior: "error" }))), "as") };
      }, "$with");
      $count(e4, t5) {
        return new SQLiteCountBuilder({ source: e4, filters: t5, session: this.session });
      }
      with(...e4) {
        const t5 = this;
        return { select: /* @__PURE__ */ __name(function(s4) {
          return new SQLiteSelectBuilder({ fields: s4 ?? void 0, session: t5.session, dialect: t5.dialect, withList: e4 });
        }, "select"), selectDistinct: /* @__PURE__ */ __name(function(s4) {
          return new SQLiteSelectBuilder({ fields: s4 ?? void 0, session: t5.session, dialect: t5.dialect, withList: e4, distinct: true });
        }, "selectDistinct"), update: /* @__PURE__ */ __name(function(s4) {
          return new SQLiteUpdateBuilder(s4, t5.session, t5.dialect, e4);
        }, "update"), insert: /* @__PURE__ */ __name(function(s4) {
          return new SQLiteInsertBuilder(s4, t5.session, t5.dialect, e4);
        }, "insert"), delete: /* @__PURE__ */ __name(function(s4) {
          return new SQLiteDeleteBase(s4, t5.session, t5.dialect, e4);
        }, "delete") };
      }
      select(e4) {
        return new SQLiteSelectBuilder({ fields: e4 ?? void 0, session: this.session, dialect: this.dialect });
      }
      selectDistinct(e4) {
        return new SQLiteSelectBuilder({ fields: e4 ?? void 0, session: this.session, dialect: this.dialect, distinct: true });
      }
      update(e4) {
        return new SQLiteUpdateBuilder(e4, this.session, this.dialect);
      }
      $cache;
      insert(e4) {
        return new SQLiteInsertBuilder(e4, this.session, this.dialect);
      }
      delete(e4) {
        return new SQLiteDeleteBase(e4, this.session, this.dialect);
      }
      run(e4) {
        const t5 = "string" == typeof e4 ? sql.raw(e4) : e4.getSQL();
        return "async" === this.resultKind ? new SQLiteRaw(async () => this.session.run(t5), () => t5, "run", this.dialect, this.session.extractRawRunValueFromBatchResult.bind(this.session)) : this.session.run(t5);
      }
      all(e4) {
        const t5 = "string" == typeof e4 ? sql.raw(e4) : e4.getSQL();
        return "async" === this.resultKind ? new SQLiteRaw(async () => this.session.all(t5), () => t5, "all", this.dialect, this.session.extractRawAllValueFromBatchResult.bind(this.session)) : this.session.all(t5);
      }
      get(e4) {
        const t5 = "string" == typeof e4 ? sql.raw(e4) : e4.getSQL();
        return "async" === this.resultKind ? new SQLiteRaw(async () => this.session.get(t5), () => t5, "get", this.dialect, this.session.extractRawGetValueFromBatchResult.bind(this.session)) : this.session.get(t5);
      }
      values(e4) {
        const t5 = "string" == typeof e4 ? sql.raw(e4) : e4.getSQL();
        return "async" === this.resultKind ? new SQLiteRaw(async () => this.session.values(t5), () => t5, "values", this.dialect, this.session.extractRawValuesValueFromBatchResult.bind(this.session)) : this.session.values(t5);
      }
      transaction(e4, t5) {
        return this.session.transaction(e4, t5);
      }
    };
    Cache = class {
      static {
        __name(this, "Cache");
      }
      static [Js] = "Cache";
    };
    NoopCache = class extends Cache {
      static {
        __name(this, "NoopCache");
      }
      strategy() {
        return "all";
      }
      static [Js] = "NoopCache";
      async get(e4) {
      }
      async put(e4, t5, s4, r4) {
      }
      async onMutate(e4) {
      }
    };
    __name(hashQuery, "hashQuery");
    ExecuteResultSync = class extends QueryPromise {
      static {
        __name(this, "ExecuteResultSync");
      }
      constructor(e4) {
        super(), this.resultCb = e4;
      }
      static [Js] = "ExecuteResultSync";
      async execute() {
        return this.resultCb();
      }
      sync() {
        return this.resultCb();
      }
    };
    SQLitePreparedQuery = class {
      static {
        __name(this, "SQLitePreparedQuery");
      }
      constructor(e4, t5, s4, r4, a6, c4) {
        this.mode = e4, this.executeMethod = t5, this.query = s4, this.cache = r4, this.queryMetadata = a6, this.cacheConfig = c4, r4 && "all" === r4.strategy() && void 0 === c4 && (this.cacheConfig = { enable: true, autoInvalidate: true }), this.cacheConfig?.enable || (this.cacheConfig = void 0);
      }
      static [Js] = "PreparedQuery";
      joinsNotNullableMap;
      async queryWithCache(e4, t5, s4) {
        if (void 0 === this.cache || is(this.cache, NoopCache) || void 0 === this.queryMetadata) try {
          return await s4();
        } catch (s5) {
          throw new DrizzleQueryError(e4, t5, s5);
        }
        if (this.cacheConfig && !this.cacheConfig.enable) try {
          return await s4();
        } catch (s5) {
          throw new DrizzleQueryError(e4, t5, s5);
        }
        if (("insert" === this.queryMetadata.type || "update" === this.queryMetadata.type || "delete" === this.queryMetadata.type) && this.queryMetadata.tables.length > 0) try {
          const [e5] = await Promise.all([s4(), this.cache.onMutate({ tables: this.queryMetadata.tables })]);
          return e5;
        } catch (s5) {
          throw new DrizzleQueryError(e4, t5, s5);
        }
        if (!this.cacheConfig) try {
          return await s4();
        } catch (s5) {
          throw new DrizzleQueryError(e4, t5, s5);
        }
        if ("select" === this.queryMetadata.type) {
          const r4 = await this.cache.get(this.cacheConfig.tag ?? await hashQuery(e4, t5), this.queryMetadata.tables, void 0 !== this.cacheConfig.tag, this.cacheConfig.autoInvalidate);
          if (void 0 === r4) {
            let r5;
            try {
              r5 = await s4();
            } catch (s5) {
              throw new DrizzleQueryError(e4, t5, s5);
            }
            return await this.cache.put(this.cacheConfig.tag ?? await hashQuery(e4, t5), r5, this.cacheConfig.autoInvalidate ? this.queryMetadata.tables : [], void 0 !== this.cacheConfig.tag, this.cacheConfig.config), r5;
          }
          return r4;
        }
        try {
          return await s4();
        } catch (s5) {
          throw new DrizzleQueryError(e4, t5, s5);
        }
      }
      getQuery() {
        return this.query;
      }
      mapRunResult(e4, t5) {
        return e4;
      }
      mapAllResult(e4, t5) {
        throw new Error("Not implemented");
      }
      mapGetResult(e4, t5) {
        throw new Error("Not implemented");
      }
      execute(e4) {
        return "async" === this.mode ? this[this.executeMethod](e4) : new ExecuteResultSync(() => this[this.executeMethod](e4));
      }
      mapResult(e4, t5) {
        switch (this.executeMethod) {
          case "run":
            return this.mapRunResult(e4, t5);
          case "all":
            return this.mapAllResult(e4, t5);
          case "get":
            return this.mapGetResult(e4, t5);
        }
      }
    };
    SQLiteSession = class {
      static {
        __name(this, "SQLiteSession");
      }
      constructor(e4) {
        this.dialect = e4;
      }
      static [Js] = "SQLiteSession";
      prepareOneTimeQuery(e4, t5, s4, r4, a6, c4, u3) {
        return this.prepareQuery(e4, t5, s4, r4, a6, c4, u3);
      }
      run(e4) {
        const t5 = this.dialect.sqlToQuery(e4);
        try {
          return this.prepareOneTimeQuery(t5, void 0, "run", false).run();
        } catch (e5) {
          throw new DrizzleError({ cause: e5, message: `Failed to run the query '${t5.sql}'` });
        }
      }
      extractRawRunValueFromBatchResult(e4) {
        return e4;
      }
      all(e4) {
        return this.prepareOneTimeQuery(this.dialect.sqlToQuery(e4), void 0, "run", false).all();
      }
      extractRawAllValueFromBatchResult(e4) {
        throw new Error("Not implemented");
      }
      get(e4) {
        return this.prepareOneTimeQuery(this.dialect.sqlToQuery(e4), void 0, "run", false).get();
      }
      extractRawGetValueFromBatchResult(e4) {
        throw new Error("Not implemented");
      }
      values(e4) {
        return this.prepareOneTimeQuery(this.dialect.sqlToQuery(e4), void 0, "run", false).values();
      }
      async count(e4) {
        return (await this.values(e4))[0][0];
      }
      extractRawValuesValueFromBatchResult(e4) {
        throw new Error("Not implemented");
      }
    };
    SQLiteTransaction = class extends BaseSQLiteDatabase {
      static {
        __name(this, "SQLiteTransaction");
      }
      constructor(e4, t5, s4, r4, a6 = 0) {
        super(e4, t5, s4, r4), this.schema = r4, this.nestedIndex = a6;
      }
      static [Js] = "SQLiteTransaction";
      rollback() {
        throw new TransactionRollbackError();
      }
    };
    SQLiteD1Session = class extends SQLiteSession {
      static {
        __name(this, "SQLiteD1Session");
      }
      constructor(e4, t5, s4, r4 = {}) {
        super(t5), this.client = e4, this.schema = s4, this.options = r4, this.logger = r4.logger ?? new NoopLogger(), this.cache = r4.cache ?? new NoopCache();
      }
      static [Js] = "SQLiteD1Session";
      logger;
      cache;
      prepareQuery(e4, t5, s4, r4, a6, c4, u3) {
        const d3 = this.client.prepare(e4.sql);
        return new D1PreparedQuery(d3, e4, this.logger, this.cache, c4, u3, t5, s4, r4, a6);
      }
      async batch(e4) {
        const t5 = [], s4 = [];
        for (const r4 of e4) {
          const e5 = r4._prepare(), a6 = e5.getQuery();
          if (t5.push(e5), a6.params.length > 0) s4.push(e5.stmt.bind(...a6.params));
          else {
            const t6 = e5.getQuery();
            s4.push(this.client.prepare(t6.sql).bind(...t6.params));
          }
        }
        return (await this.client.batch(s4)).map((e5, s5) => t5[s5].mapResult(e5, true));
      }
      extractRawAllValueFromBatchResult(e4) {
        return e4.results;
      }
      extractRawGetValueFromBatchResult(e4) {
        return e4.results[0];
      }
      extractRawValuesValueFromBatchResult(e4) {
        return d1ToRawMapping(e4.results);
      }
      async transaction(e4, t5) {
        const s4 = new D1Transaction("async", this.dialect, this, this.schema);
        await this.run(sql.raw("begin" + (t5?.behavior ? " " + t5.behavior : "")));
        try {
          const t6 = await e4(s4);
          return await this.run(sql`commit`), t6;
        } catch (e5) {
          throw await this.run(sql`rollback`), e5;
        }
      }
    };
    D1Transaction = class _D1Transaction extends SQLiteTransaction {
      static {
        __name(this, "D1Transaction");
      }
      static [Js] = "D1Transaction";
      async transaction(e4) {
        const t5 = `sp${this.nestedIndex}`, s4 = new _D1Transaction("async", this.dialect, this.session, this.schema, this.nestedIndex + 1);
        await this.session.run(sql.raw(`savepoint ${t5}`));
        try {
          const r4 = await e4(s4);
          return await this.session.run(sql.raw(`release savepoint ${t5}`)), r4;
        } catch (e5) {
          throw await this.session.run(sql.raw(`rollback to savepoint ${t5}`)), e5;
        }
      }
    };
    __name(d1ToRawMapping, "d1ToRawMapping");
    D1PreparedQuery = class extends SQLitePreparedQuery {
      static {
        __name(this, "D1PreparedQuery");
      }
      constructor(e4, t5, s4, r4, a6, c4, u3, d3, h4, f3) {
        super("async", d3, t5, r4, a6, c4), this.logger = s4, this._isResponseInArrayMode = h4, this.customResultMapper = f3, this.fields = u3, this.stmt = e4;
      }
      static [Js] = "D1PreparedQuery";
      customResultMapper;
      fields;
      stmt;
      async run(e4) {
        const t5 = fillPlaceholders(this.query.params, e4 ?? {});
        return this.logger.logQuery(this.query.sql, t5), await this.queryWithCache(this.query.sql, t5, async () => this.stmt.bind(...t5).run());
      }
      async all(e4) {
        const { fields: t5, query: s4, logger: r4, stmt: a6, customResultMapper: c4 } = this;
        if (!t5 && !c4) {
          const t6 = fillPlaceholders(s4.params, e4 ?? {});
          return r4.logQuery(s4.sql, t6), await this.queryWithCache(s4.sql, t6, async () => a6.bind(...t6).all().then(({ results: e5 }) => this.mapAllResult(e5)));
        }
        const u3 = await this.values(e4);
        return this.mapAllResult(u3);
      }
      mapAllResult(e4, t5) {
        return t5 && (e4 = d1ToRawMapping(e4.results)), this.fields || this.customResultMapper ? this.customResultMapper ? this.customResultMapper(e4) : e4.map((e5) => mapResultRow(this.fields, e5, this.joinsNotNullableMap)) : e4;
      }
      async get(e4) {
        const { fields: t5, joinsNotNullableMap: s4, query: r4, logger: a6, stmt: c4, customResultMapper: u3 } = this;
        if (!t5 && !u3) {
          const t6 = fillPlaceholders(r4.params, e4 ?? {});
          return a6.logQuery(r4.sql, t6), await this.queryWithCache(r4.sql, t6, async () => c4.bind(...t6).all().then(({ results: e5 }) => e5[0]));
        }
        const d3 = await this.values(e4);
        if (d3[0]) return u3 ? u3(d3) : mapResultRow(t5, d3[0], s4);
      }
      mapGetResult(e4, t5) {
        return t5 && (e4 = d1ToRawMapping(e4.results)[0]), this.fields || this.customResultMapper ? this.customResultMapper ? this.customResultMapper([e4]) : mapResultRow(this.fields, e4, this.joinsNotNullableMap) : e4;
      }
      async values(e4) {
        const t5 = fillPlaceholders(this.query.params, e4 ?? {});
        return this.logger.logQuery(this.query.sql, t5), await this.queryWithCache(this.query.sql, t5, async () => this.stmt.bind(...t5).raw());
      }
      isResponseInArrayMode() {
        return this._isResponseInArrayMode;
      }
    };
    DrizzleD1Database = class extends BaseSQLiteDatabase {
      static {
        __name(this, "DrizzleD1Database");
      }
      static [Js] = "D1Database";
      async batch(e4) {
        return this.session.batch(e4);
      }
    };
    vr2 = (_r2 = "users", Lr2 = { id: integer("id").primaryKey({ autoIncrement: true }), name: text("name").notNull() }, sqliteTableBase(_r2, Lr2));
    Cr2 = Object.freeze(Object.defineProperty({ __proto__: null, users: vr2 }, Symbol.toStringTag, { value: "Module" }));
    Tr2 = (function(e4, t5 = {}) {
      const s4 = new SQLiteAsyncDialect({ casing: t5.casing });
      let r4, a6;
      if (true === t5.logger ? r4 = new DefaultLogger() : false !== t5.logger && (r4 = t5.logger), t5.schema) {
        const e5 = (function(e6, t6) {
          1 === Object.keys(e6).length && "default" in e6 && !is(e6.default, Table) && (e6 = e6.default);
          const s5 = {}, r5 = {}, a7 = {};
          for (const [c5, u4] of Object.entries(e6)) if (is(u4, Table)) {
            const e7 = getTableUniqueName(u4), t7 = r5[e7];
            s5[e7] = c5, a7[c5] = { tsName: c5, dbName: u4[Table.Symbol.Name], schema: u4[Table.Symbol.Schema], columns: u4[Table.Symbol.Columns], relations: t7?.relations ?? {}, primaryKey: t7?.primaryKey ?? [] };
            for (const e8 of Object.values(u4[Table.Symbol.Columns])) e8.primary && a7[c5].primaryKey.push(e8);
            const d3 = u4[Table.Symbol.ExtraConfigBuilder]?.(u4[Table.Symbol.ExtraConfigColumns]);
            if (d3) for (const e8 of Object.values(d3)) is(e8, PrimaryKeyBuilder) && a7[c5].primaryKey.push(...e8.columns);
          } else if (is(u4, Relations)) {
            const e7 = getTableUniqueName(u4.table), c6 = s5[e7], d3 = u4.config(t6(u4.table));
            let h4;
            for (const [t7, s6] of Object.entries(d3)) c6 ? a7[c6].relations[t7] = s6 : (e7 in r5 || (r5[e7] = { relations: {}, primaryKey: h4 }), r5[e7].relations[t7] = s6);
          }
          return { tables: a7, tableNamesMap: s5 };
        })(t5.schema, createTableRelationsHelpers);
        a6 = { fullSchema: t5.schema, schema: e5.tables, tableNamesMap: e5.tableNamesMap };
      }
      const c4 = new SQLiteD1Session(e4, s4, a6, { logger: r4, cache: t5.cache }), u3 = new DrizzleD1Database("async", s4, c4, a6);
      return u3.$client = e4, u3.$cache = t5.cache, u3.$cache && (u3.$cache.invalidate = t5.cache?.onMutate), u3;
    })(S2.env.DB || globalThis.__env__?.DB || globalThis.DB, { schema: Cr2 });
    __name(defineRenderHandler, "defineRenderHandler");
    __name(baseURL, "baseURL");
    __name(buildAssetsURL, "buildAssetsURL");
    __name(publicAssetsURL, "publicAssetsURL");
    __name(getUsers, "getUsers");
    Qr = [async () => {
    }];
    qr2 = defineEventHandler(async (e4) => {
      const t5 = await getUsers();
      e4.context.userCount = t5.length;
    });
    _lazy_Y8uJcO = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_renderer(), renderer_exports)).then(function(e4) {
      return e4.e;
    }), "_lazy_Y8uJcO");
    xr2 = [{ route: "", handler: qr2, lazy: false, middleware: true, method: void 0 }, { route: "/api/users", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_users_get(), users_get_exports)), "handler"), lazy: true, middleware: false, method: "get" }, { route: "/__nuxt_error", handler: _lazy_Y8uJcO, lazy: true, middleware: false, method: void 0 }, { route: "/__nuxt_island/**", handler: defineEventHandler(() => {
    }), lazy: false, middleware: false, method: void 0 }, { route: "/**", handler: _lazy_Y8uJcO, lazy: true, middleware: false, method: void 0 }];
    Rr2 = (function() {
      const e4 = useRuntimeConfig2(), t5 = createHooks(), captureError = /* @__PURE__ */ __name((e5, s5 = {}) => {
        const r5 = t5.callHookParallel("error", e5, s5).catch((e6) => {
          console.error("Error while capturing another error", e6);
        });
        if (s5.event && isEvent(s5.event)) {
          const t6 = s5.event.context.nitro?.errors;
          t6 && t6.push({ error: e5, context: s5 }), s5.event.waitUntil && s5.event.waitUntil(r5);
        }
      }, "captureError"), s4 = createApp2({ debug: destr(false), onError: /* @__PURE__ */ __name((e5, t6) => (captureError(e5, { event: t6, tags: ["request"] }), (async function(e6, t7) {
        for (const s5 of Vs) try {
          if (await s5(e6, t7, { defaultHandler }), t7.handled) return;
        } catch (e7) {
          console.error(e7);
        }
      })(e5, t6)), "onError"), onRequest: /* @__PURE__ */ __name(async (e5) => {
        e5.context.nitro = e5.context.nitro || { errors: [] };
        const t6 = e5.node.req?.__unenv__;
        t6?._platform && (e5.context = { _platform: t6?._platform, ...t6._platform, ...e5.context }), !e5.context.waitUntil && t6?.waitUntil && (e5.context.waitUntil = t6.waitUntil), e5.fetch = (t7, s5) => fetchWithEvent(e5, t7, s5, { fetch: localFetch }), e5.$fetch = (t7, s5) => fetchWithEvent(e5, t7, s5, { fetch: c4 }), e5.waitUntil = (t7) => {
          e5.context.nitro._waitUntilPromises || (e5.context.nitro._waitUntilPromises = []), e5.context.nitro._waitUntilPromises.push(t7), e5.context.waitUntil && e5.context.waitUntil(t7);
        }, e5.captureError = (t7, s5) => {
          captureError(t7, { event: e5, ...s5 });
        }, await Rr2.hooks.callHook("request", e5).catch((t7) => {
          captureError(t7, { event: e5, tags: ["request"] });
        });
      }, "onRequest"), onBeforeResponse: /* @__PURE__ */ __name(async (e5, t6) => {
        await Rr2.hooks.callHook("beforeResponse", e5, t6).catch((t7) => {
          captureError(t7, { event: e5, tags: ["request", "response"] });
        });
      }, "onBeforeResponse"), onAfterResponse: /* @__PURE__ */ __name(async (e5, t6) => {
        await Rr2.hooks.callHook("afterResponse", e5, t6).catch((t7) => {
          captureError(t7, { event: e5, tags: ["request", "response"] });
        });
      }, "onAfterResponse") }), r4 = (function(e5 = {}) {
        const t6 = createRouter$1({}), s5 = {};
        let r5;
        const a7 = {}, addRoute = /* @__PURE__ */ __name((e6, r6, c6) => {
          let u3 = s5[e6];
          if (u3 || (s5[e6] = u3 = { path: e6, handlers: {} }, t6.insert(e6, u3)), Array.isArray(c6)) for (const t7 of c6) addRoute(e6, r6, t7);
          else u3.handlers[c6] = toEventHandler(r6, 0, e6);
          return a7;
        }, "addRoute");
        a7.use = a7.add = (e6, t7, s6) => addRoute(e6, t7, s6 || "all");
        for (const e6 of us) a7[e6] = (t7, s6) => a7.add(t7, s6, e6);
        const matchHandler = /* @__PURE__ */ __name((e6 = "/", s6 = "get") => {
          const a8 = e6.indexOf("?");
          -1 !== a8 && (e6 = e6.slice(0, Math.max(0, a8)));
          const c6 = t6.lookup(e6);
          if (!c6 || !c6.handlers) return { error: createError({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e6 || "/"}.` }) };
          let u3 = c6.handlers[s6] || c6.handlers.all;
          if (!u3) {
            r5 || (r5 = toRouteMatcher(t6));
            const a9 = r5.matchAll(e6).reverse();
            for (const e7 of a9) {
              if (e7.handlers[s6]) {
                u3 = e7.handlers[s6], c6.handlers[s6] = c6.handlers[s6] || u3;
                break;
              }
              if (e7.handlers.all) {
                u3 = e7.handlers.all, c6.handlers.all = c6.handlers.all || u3;
                break;
              }
            }
          }
          return u3 ? { matched: c6, handler: u3 } : { error: createError({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${s6} is not allowed on this route.` }) };
        }, "matchHandler"), c5 = e5.preemptive || e5.preemtive;
        return a7.handler = cs((e6) => {
          const t7 = matchHandler(e6.path, e6.method.toLowerCase());
          if ("error" in t7) {
            if (c5) throw t7.error;
            return;
          }
          e6.context.matchedRoute = t7.matched;
          const s6 = t7.matched.params || {};
          return e6.context.params = s6, Promise.resolve(t7.handler(e6)).then((e7) => void 0 === e7 && c5 ? null : e7);
        }), a7.handler.__resolve__ = async (e6) => {
          e6 = withLeadingSlash(e6);
          const t7 = matchHandler(e6);
          if ("error" in t7) return;
          let s6 = { route: t7.matched.path, handler: t7.handler };
          if (t7.handler.__resolve__) {
            const r6 = await t7.handler.__resolve__(e6);
            if (!r6) return;
            s6 = { ...s6, ...r6 };
          }
          return s6;
        }, a7;
      })({ preemptive: true }), a6 = toNodeListener(s4), localFetch = /* @__PURE__ */ __name((e5, t6) => e5.toString().startsWith("/") ? (async function(e6, t7, s5 = {}) {
        try {
          const r5 = await b3(e6, { url: t7, ...s5 });
          return new Response(r5.body, { status: r5.status, statusText: r5.statusText, headers: v2(r5.headers) });
        } catch (e7) {
          return new Response(e7.toString(), { status: Number.parseInt(e7.statusCode || e7.code) || 500, statusText: e7.statusText });
        }
      })(a6, e5, t6).then((e6) => (function(e7) {
        return e7.headers.has("set-cookie") ? new Response(e7.body, { status: e7.status, statusText: e7.statusText, headers: normalizeCookieHeaders(e7.headers) }) : e7;
      })(e6)) : globalThis.fetch(e5, t6), "localFetch"), c4 = createFetch({ fetch: localFetch, Headers: vs, defaults: { baseURL: e4.app.baseURL } });
      globalThis.$fetch = c4, s4.use(createRouteRulesHandler({ localFetch }));
      for (const t6 of xr2) {
        let a7 = t6.lazy ? lazyEventHandler(t6.handler) : t6.handler;
        if (t6.middleware || !t6.route) {
          const r5 = (e4.app.baseURL + (t6.route || "/")).replace(/\/+/g, "/");
          s4.use(r5, a7);
        } else {
          const e5 = getRouteRulesForPath(t6.route.replace(/:\w+|\*\*/g, "_"));
          e5.cache && (a7 = cachedEventHandler(a7, { group: "nitro/routes", ...e5.cache })), r4.use(t6.route, a7, t6.method);
        }
      }
      s4.use(e4.app.baseURL, r4.handler);
      {
        const e5 = s4.handler;
        s4.handler = (t6) => {
          const s5 = { event: t6 };
          return zs.callAsync(s5, () => e5(t6));
        };
      }
      return { hooks: t5, h3App: s4, router: r4, localCall: /* @__PURE__ */ __name((e5) => b3(a6, e5), "localCall"), localFetch, captureError };
    })();
    __name(useNitroApp, "useNitroApp");
    !(function(e4) {
      for (const t5 of Qr) try {
        t5(e4);
      } catch (t6) {
        throw e4.captureError(t6, { tags: ["plugin"] }), t6;
      }
    })(Rr2);
    Br2 = { "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI"', mtime: "2025-12-10T12:27:09.906Z", size: 4286, path: "../public/favicon.ico" }, "/robots.txt": { type: "text/plain; charset=utf-8", etag: '"18-j8OIsL9qGDmNZ+lHhp2tyH4XtaE"', mtime: "2025-12-10T12:27:09.906Z", size: 24, path: "../public/robots.txt" }, "/_nuxt/BTzNJ8r-.js": { type: "text/javascript; charset=utf-8", etag: '"23df7-KtAwN6IAasEW3EtKQQSsf1azsjM"', mtime: "2025-12-10T12:27:09.902Z", size: 146935, path: "../public/_nuxt/BTzNJ8r-.js" }, "/_nuxt/CU-pC6vv.js": { type: "text/javascript; charset=utf-8", etag: '"2444-EB1roLdxPt8C7A7cx65vHNPNqWg"', mtime: "2025-12-10T12:27:09.902Z", size: 9284, path: "../public/_nuxt/CU-pC6vv.js" }, "/_nuxt/ClE5NG7b.js": { type: "text/javascript; charset=utf-8", etag: '"d90-Cddxnopuer8paBhl53W5so9i16k"', mtime: "2025-12-10T12:27:09.902Z", size: 3472, path: "../public/_nuxt/ClE5NG7b.js" }, "/_nuxt/entry.CGkThn_i.css": { type: "text/css; charset=utf-8", etag: '"1b25-E9+3JUV9UhPs0UhZsuU8AUQ7/tw"', mtime: "2025-12-10T12:27:09.902Z", size: 6949, path: "../public/_nuxt/entry.CGkThn_i.css" }, "/_nuxt/error-404.wPSazbbD.css": { type: "text/css; charset=utf-8", etag: '"97e-HuNnF2rKzFXIXVmWeIOsgqlLRTs"', mtime: "2025-12-10T12:27:09.902Z", size: 2430, path: "../public/_nuxt/error-404.wPSazbbD.css" }, "/_nuxt/error-500.BOaDmLFy.css": { type: "text/css; charset=utf-8", etag: '"773-w1pQMTmgSLb2hESSXvNw5MD21nI"', mtime: "2025-12-10T12:27:09.902Z", size: 1907, path: "../public/_nuxt/error-500.BOaDmLFy.css" }, "/_nuxt/builds/latest.json": { type: "application/json", etag: '"47-w8YauK6PYLiWPuFdUfGRtLPadn0"', mtime: "2025-12-10T12:27:09.898Z", size: 71, path: "../public/_nuxt/builds/latest.json" }, "/_nuxt/builds/meta/531d74a7-17ae-4f5d-8cea-08ab2150c244.json": { type: "application/json", etag: '"8b-xpsOitnnKtx1JmTJZy/F0mDm40g"', mtime: "2025-12-10T12:27:09.894Z", size: 139, path: "../public/_nuxt/builds/meta/531d74a7-17ae-4f5d-8cea-08ab2150c244.json" } };
    Nr2 = { "/_nuxt/builds/meta/": { maxAge: 31536e3 }, "/_nuxt/builds/": { maxAge: 1 }, "/_nuxt/": { maxAge: 31536e3 } };
    Ar2 = (function(e4) {
      const t5 = useNitroApp();
      return { async fetch(s4, a6, c4) {
        const u3 = {}, d3 = new URL(s4.url);
        if (e4.fetch) {
          const t6 = await e4.fetch(s4, a6, c4, d3, u3);
          if (t6) return t6;
        }
        return (async function(e5, t6, s5, a7 = new URL(e5.url), c5 = useNitroApp(), u4) {
          let d4;
          (function(e6) {
            return Ws.test(e6.method);
          })(e5) && (d4 = r3.from(await e5.arrayBuffer()));
          return globalThis.__env__ = t6, c5.localFetch(a7.pathname + a7.search, { context: { waitUntil: /* @__PURE__ */ __name((e6) => s5.waitUntil(e6), "waitUntil"), _platform: { cf: e5.cf, cloudflare: { request: e5, env: t6, context: s5, url: a7, ...u4 } } }, host: a7.hostname, protocol: a7.protocol, method: e5.method, headers: e5.headers, body: d4 });
        })(s4, a6, c4, d3, t5, u3);
      }, scheduled(e5, s4, r4) {
        globalThis.__env__ = s4, r4.waitUntil(t5.hooks.callHook("cloudflare:scheduled", { controller: e5, env: s4, context: r4 }));
      }, email(e5, s4, r4) {
        globalThis.__env__ = s4, r4.waitUntil(t5.hooks.callHook("cloudflare:email", { message: e5, event: e5, env: s4, context: r4 }));
      }, queue(e5, s4, r4) {
        globalThis.__env__ = s4, r4.waitUntil(t5.hooks.callHook("cloudflare:queue", { batch: e5, event: e5, env: s4, context: r4 }));
      }, tail(e5, s4, r4) {
        globalThis.__env__ = s4, r4.waitUntil(t5.hooks.callHook("cloudflare:tail", { traces: e5, env: s4, context: r4 }));
      }, trace(e5, s4, r4) {
        globalThis.__env__ = s4, r4.waitUntil(t5.hooks.callHook("cloudflare:trace", { traces: e5, env: s4, context: r4 }));
      } };
    })({ fetch(e4, t5, s4, r4) {
      if (t5.ASSETS && (function(e5 = "") {
        if (Br2[e5]) return true;
        for (const t6 in Nr2) if (e5.startsWith(t6)) return true;
        return false;
      })(r4.pathname)) return t5.ASSETS.fetch(e4);
    } });
  }
});

// .wrangler/tmp/bundle-sEM6mI/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-sEM6mI/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .output/server/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_nitro();
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:async_hooks";
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };

// node_modules/.pnpm/wrangler@4.53.0_@cloudflare+workers-types@4.20251210.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e4) {
      console.error("Failed to drain the unused request body.", e4);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/.pnpm/wrangler@4.53.0_@cloudflare+workers-types@4.20251210.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e4) {
  return {
    name: e4?.name,
    message: e4?.message ?? String(e4),
    stack: e4?.stack,
    cause: e4?.cause === void 0 ? void 0 : reduceError(e4.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e4) {
    const error3 = reduceError(e4);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-sEM6mI/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = Ar2;

// node_modules/.pnpm/wrangler@4.53.0_@cloudflare+workers-types@4.20251210.0/node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-sEM6mI/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
