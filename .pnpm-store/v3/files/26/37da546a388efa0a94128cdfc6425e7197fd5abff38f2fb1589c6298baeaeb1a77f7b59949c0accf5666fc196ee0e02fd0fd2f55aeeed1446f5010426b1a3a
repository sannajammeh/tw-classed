'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/**
 * React hook for creating a value exactly once.
 * @see https://github.com/Andarist/use-constant
 */

function useConstant(fn) {
  var ref = React.useRef();

  if (!ref.current) {
    ref.current = {
      v: fn()
    };
  }

  return ref.current.v;
}

exports.useConstant = useConstant;
