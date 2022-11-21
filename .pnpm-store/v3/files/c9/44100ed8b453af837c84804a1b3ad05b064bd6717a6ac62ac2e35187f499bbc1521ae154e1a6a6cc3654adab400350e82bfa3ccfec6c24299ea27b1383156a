import { useRef, useState, useCallback } from 'react';
import warning from 'tiny-warning';

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

  var _useRef = useRef(wasControlled),
      isControlled = _useRef.current;

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(!(!isControlled && wasControlled), calledFrom + " is changing from controlled to uncontrolled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.") : void 0;
    process.env.NODE_ENV !== "production" ? warning(!(isControlled && !wasControlled), calledFrom + " is changing from uncontrolled to controlled. Components should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.") : void 0;
  }

  var _useState = useState(isControlled ? controlledValue : defaultValue),
      valueState = _useState[0],
      setValue = _useState[1];

  var set = useCallback(function (n) {
    if (!isControlled) {
      setValue(n);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return [isControlled ? controlledValue : valueState, set];
}

export { useControlledState };
