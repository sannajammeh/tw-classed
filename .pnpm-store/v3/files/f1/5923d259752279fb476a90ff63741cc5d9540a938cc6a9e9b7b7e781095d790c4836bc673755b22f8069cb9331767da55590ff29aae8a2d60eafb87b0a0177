'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function useStatefulRefValue(ref, initialState) {
  var _useState = React.useState(initialState),
      state = _useState[0],
      setState = _useState[1];

  var callbackRef = React.useCallback(function (refValue) {
    ref.current = refValue;
    setState(refValue); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [state, callbackRef];
}

exports.useStatefulRefValue = useStatefulRefValue;
