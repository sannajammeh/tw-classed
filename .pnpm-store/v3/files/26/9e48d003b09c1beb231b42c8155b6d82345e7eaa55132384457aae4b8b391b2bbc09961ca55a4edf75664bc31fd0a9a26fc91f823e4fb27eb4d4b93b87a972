'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["children"];
/** @deprecated */

function createNamedContext(name, defaultValue) {
  var Ctx = /*#__PURE__*/React.createContext(defaultValue);

  return Ctx;
} ////////////////////////////////////////////////////////////////////////////////

function createContext(rootName, defaultContext) {
  var Ctx = /*#__PURE__*/React.createContext(defaultContext);

  function Provider(props) {
    var children = props.children,
        context = _objectWithoutPropertiesLoose(props, _excluded);

    var value = React.useMemo(function () {
      return context;
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    Object.values(context));
    return /*#__PURE__*/React.createElement(Ctx.Provider, {
      value: value
    }, children);
  }

  function useContext(childName) {
    var context = React.useContext(Ctx);

    if (context) {
      return context;
    }

    if (defaultContext) {
      return defaultContext;
    }

    throw Error(childName + " must be rendered inside of a " + rootName + " component.");
  }

  return [Provider, useContext];
}

exports.createContext = createContext;
exports.createNamedContext = createNamedContext;
