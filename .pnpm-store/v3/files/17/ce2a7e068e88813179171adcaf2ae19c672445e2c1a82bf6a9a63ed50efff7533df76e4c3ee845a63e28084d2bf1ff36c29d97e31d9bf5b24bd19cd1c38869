'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/**
 * Returns the previous value of a reference after a component update.
 *
 * @param value
 */

function usePrevious(value) {
  var ref = React.useRef(null);
  React.useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}

exports.usePrevious = usePrevious;
