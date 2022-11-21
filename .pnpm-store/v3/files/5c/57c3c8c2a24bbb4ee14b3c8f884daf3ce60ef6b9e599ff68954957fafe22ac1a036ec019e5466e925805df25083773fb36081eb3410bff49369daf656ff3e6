import { g as getWorkerState } from './chunk-typecheck-constants.4891f22f.js';
import { s as safeSetTimeout } from './chunk-utils-timers.06f993db.js';

const safeRandom = Math.random;
function withSafeTimers(fn) {
  const currentSetTimeout = globalThis.setTimeout;
  const currentRandom = globalThis.Math.random;
  try {
    globalThis.setTimeout = safeSetTimeout;
    globalThis.Math.random = safeRandom;
    const result = fn();
    return result;
  } finally {
    globalThis.setTimeout = currentSetTimeout;
    globalThis.Math.random = currentRandom;
  }
}
const rpc = () => {
  const { rpc: rpc2 } = getWorkerState();
  return new Proxy(rpc2, {
    get(target, p, handler) {
      const sendCall = Reflect.get(target, p, handler);
      const safeSendCall = (...args) => withSafeTimers(() => sendCall(...args));
      safeSendCall.asEvent = sendCall.asEvent;
      return safeSendCall;
    }
  });
};

export { rpc as r };
