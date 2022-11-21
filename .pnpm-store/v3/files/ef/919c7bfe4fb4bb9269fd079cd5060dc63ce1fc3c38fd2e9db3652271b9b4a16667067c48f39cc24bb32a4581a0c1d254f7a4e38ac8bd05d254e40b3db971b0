import { createContext as createContext$1, useMemo, createElement, useContext } from 'react';

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
  var Ctx = /*#__PURE__*/createContext$1(defaultValue);

  if (process.env.NODE_ENV !== "production") {
    Ctx.displayName = name;
  }

  return Ctx;
} ////////////////////////////////////////////////////////////////////////////////

function createContext(rootName, defaultContext) {
  var Ctx = /*#__PURE__*/createContext$1(defaultContext);

  function Provider(props) {
    var children = props.children,
        context = _objectWithoutPropertiesLoose(props, _excluded);

    var value = useMemo(function () {
      return context;
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    Object.values(context));
    return /*#__PURE__*/createElement(Ctx.Provider, {
      value: value
    }, children);
  }

  function useContext$1(childName) {
    var context = useContext(Ctx);

    if (context) {
      return context;
    }

    if (defaultContext) {
      return defaultContext;
    }

    throw Error(childName + " must be rendered inside of a " + rootName + " component.");
  }

  if (process.env.NODE_ENV !== "production") {
    Ctx.displayName = rootName + "Context";
    Provider.displayName = rootName + "Provider";
  }

  return [Provider, useContext$1];
}

export { createContext, createNamedContext };
