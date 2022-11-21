'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/**
 * Forces a re-render, similar to `forceUpdate` in class components.
 */

function useForceUpdate() {
  var _useState = React.useState(Object.create(null)),
      dispatch = _useState[1];

  return React.useCallback(function () {
    dispatch(Object.create(null));
  }, []);
}

exports.useForceUpdate = useForceUpdate;
