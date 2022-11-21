'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('tiny-warning');

/**
 * Check if a component is controlled or uncontrolled and return the correct
 * state value and setter accordingly. If the component state is controlled by
 * the app, the setter is a noop.
 *
 * @param controlledValue
 * @param defaultValue
 */

function useControlledState(_ref) {
  var controlledValue = _ref.controlledValue,
      defaultValue = _ref.defaultValue;
      _ref.calledFrom;
  var wasControlled = controlledValue !== undefined;

  var _useRef = React.useRef(wasControlled),
      isControlled = _useRef.current;

  var _useState = React.useState(isControlled ? controlledValue : defaultValue),
      valueState = _useState[0],
      setValue = _useState[1];

  var set = React.useCallback(function (n) {
    if (!isControlled) {
      setValue(n);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return [isControlled ? controlledValue : valueState, set];
}

exports.useControlledState = useControlledState;
