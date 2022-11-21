'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var warning = require('tiny-warning');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var warning__default = /*#__PURE__*/_interopDefault(warning);

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
      defaultValue = _ref.defaultValue,
      _ref$calledFrom = _ref.calledFrom,
      calledFrom = _ref$calledFrom === void 0 ? "A component" : _ref$calledFrom;
  var wasControlled = controlledValue !== undefined;

  var _useRef = React.useRef(wasControlled),
      isControlled = _useRef.current;

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning__default['default'](!(!isControlled && wasControlled), calledFrom + " is changing from controlled to uncontrolled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.") : void 0;
    process.env.NODE_ENV !== "production" ? warning__default['default'](!(isControlled && !wasControlled), calledFrom + " is changing from uncontrolled to controlled. Components should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.") : void 0;
  }

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
