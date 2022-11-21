'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useIsomorphicLayoutEffect_dist_reachUtilsUseIsomorphicLayoutEffect = require('../../use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.cjs.prod.js');
require('../../can-use-dom/dist/reach-utils-can-use-dom.cjs.prod.js');

/* eslint-disable react-hooks/rules-of-hooks */

/**
 * Converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop and exposed as a stable function to avoid executing effects when
 * passed as a dependency.
 */
function createStableCallbackHook(useEffectHook, callback) {
  var callbackRef = React.useRef(callback);
  useEffectHook(function () {
    callbackRef.current = callback;
  }); // eslint-disable-next-line react-hooks/exhaustive-deps

  return React.useCallback(function () {
    callbackRef.current && callbackRef.current.apply(callbackRef, arguments);
  }, []);
}
/**
 * Converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop and exposed as a stable function to avoid executing effects when passed
 * as a dependency.
 */


function useStableCallback(callback) {
  return createStableCallbackHook(React.useEffect, callback);
}
/**
 * Converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop and exposed as a stable function to avoid executing effects when passed
 * as a dependency.
 *
 * Use this over `useStableCallback` when you want the callback to be cached in
 * `useLayoutEffect` instead of `useEffect` to deal with timing issues only when
 * needed.
 */

function useStableLayoutCallback(callback) {
  return createStableCallbackHook(useIsomorphicLayoutEffect_dist_reachUtilsUseIsomorphicLayoutEffect.useIsomorphicLayoutEffect, callback);
}

exports.useStableCallback = useStableCallback;
exports.useStableLayoutCallback = useStableLayoutCallback;
