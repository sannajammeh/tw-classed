'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function useLazyRef(fn) {
  var isSet = React.useRef(false);
  var ref = React.useRef();

  if (!isSet.current) {
    isSet.current = true;
    ref.current = fn();
  }

  return ref;
}

exports.useLazyRef = useLazyRef;
