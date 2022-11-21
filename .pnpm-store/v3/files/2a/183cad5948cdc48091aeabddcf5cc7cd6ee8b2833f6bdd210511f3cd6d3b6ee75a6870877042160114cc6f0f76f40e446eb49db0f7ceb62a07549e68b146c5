var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.tsx
import React44, { useMemo as useMemo5 } from "react";
import { useRouter as useRouter9 } from "next/router";
import "focus-visible";
import { SkipNavContent } from "@reach/skip-nav";
import cn17 from "clsx";
import { MDXProvider } from "@mdx-js/react";

// src/constants.tsx
import React39, { isValidElement } from "react";
import { useRouter as useRouter8 } from "next/router";

// src/components/anchor.tsx
import React3, { forwardRef } from "react";
import NextLink from "next/link";

// src/contexts/active-anchor.tsx
import React, {
  createContext,
  useContext,
  useState
} from "react";
var ActiveAnchorContext = createContext({});
var SetActiveAnchorContext = createContext((v) => v);
var useActiveAnchor = () => useContext(ActiveAnchorContext);
var useSetActiveAnchor = () => useContext(SetActiveAnchorContext);
var ActiveAnchorProvider = ({
  children
}) => {
  const [activeAnchor, setActiveAnchor2] = useState({});
  return /* @__PURE__ */ React.createElement(ActiveAnchorContext.Provider, {
    value: activeAnchor
  }, /* @__PURE__ */ React.createElement(SetActiveAnchorContext.Provider, {
    value: setActiveAnchor2
  }, children));
};

// src/contexts/config.tsx
import React2, {
  createContext as createContext3,
  useContext as useContext3,
  useState as useState2
} from "react";
import { ThemeProvider } from "next-themes";

// src/contexts/menu.ts
import { useContext as useContext2, createContext as createContext2 } from "react";
var MenuContext = createContext2({
  menu: false,
  setMenu: () => {
  }
});
var useMenu = () => useContext2(MenuContext);
var MenuProvider = MenuContext.Provider;

// src/contexts/config.tsx
var ConfigContext = createContext3(__spreadValues({
  title: "",
  frontMatter: {}
}, DEFAULT_THEME));
var useConfig = () => useContext3(ConfigContext);
var ConfigProvider = ({
  children,
  value
}) => {
  const [menu, setMenu] = useState2(false);
  const { themeConfig, pageOpts } = value;
  const extendedConfig = __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, DEFAULT_THEME), themeConfig), {
    unstable_flexsearch: pageOpts.unstable_flexsearch,
    newNextLinkBehavior: pageOpts.newNextLinkBehavior,
    title: pageOpts.title,
    frontMatter: pageOpts.frontMatter
  }), Object.fromEntries(
    DEEP_OBJECT_KEYS.map(
      (key) => typeof themeConfig[key] === "object" ? [
        key,
        __spreadValues(__spreadValues({}, DEFAULT_THEME[key]), themeConfig[key])
      ] : []
    )
  ));
  const { nextThemes } = extendedConfig;
  if (process.env.NODE_ENV === "development") {
    const notice = "[nextra-theme-docs] \u26A0\uFE0F  You are using a legacy theme config";
    for (const [legacyOption, newPath] of Object.entries(
      LEGACY_CONFIG_OPTIONS
    )) {
      if (legacyOption in themeConfig) {
        const [obj, key] = newPath.split(".");
        const renameTo = key ? `${obj}: { ${key}: ... }` : obj;
        console.warn(
          `${notice} \`${legacyOption}\`. Rename it to \`${renameTo}\` for future compatibility.`
        );
      }
    }
    for (const key of ["search", "footer"]) {
      if (key in themeConfig) {
        const option = themeConfig[key];
        if (typeof option === "boolean" || option == null) {
          console.warn(
            `${notice} \`${key}\`.`,
            option ? "Remove it" : `Rename it to \`${key}: { component: null }\` for future compatibility.`
          );
        }
      }
    }
    if (typeof themeConfig.banner === "string") {
      console.warn(
        notice,
        "`banner`. Rename it to `banner: { content: ... }` for future compatibility."
      );
    }
  }
  return /* @__PURE__ */ React2.createElement(ThemeProvider, {
    attribute: "class",
    disableTransitionOnChange: true,
    defaultTheme: nextThemes.defaultTheme,
    storageKey: nextThemes.storageKey,
    forcedTheme: nextThemes.forcedTheme
  }, /* @__PURE__ */ React2.createElement(ConfigContext.Provider, {
    value: extendedConfig
  }, /* @__PURE__ */ React2.createElement(MenuProvider, {
    value: { menu, setMenu }
  }, children)));
};

// src/contexts/details.ts
import { createContext as createContext4, useContext as useContext4 } from "react";
var DetailsContext = createContext4((v) => v);
var useDetails = () => useContext4(DetailsContext);
var DetailsProvider = DetailsContext.Provider;

// src/components/anchor.tsx
var Anchor = forwardRef(function(_a, forwardedRef) {
  var _b = _a, { href = "", children, newWindow } = _b, props = __objRest(_b, ["href", "children", "newWindow"]);
  const config = useConfig();
  if (newWindow) {
    return /* @__PURE__ */ React3.createElement("a", __spreadValues({
      ref: forwardedRef,
      href,
      target: "_blank",
      rel: "noreferrer"
    }, props), children);
  }
  if (!href) {
    return /* @__PURE__ */ React3.createElement("a", __spreadValues({
      ref: forwardedRef
    }, props), children);
  }
  if (config.newNextLinkBehavior) {
    return /* @__PURE__ */ React3.createElement(NextLink, __spreadValues({
      ref: forwardedRef,
      href
    }, props), children);
  }
  return /* @__PURE__ */ React3.createElement(NextLink, {
    href,
    passHref: true
  }, /* @__PURE__ */ React3.createElement("a", __spreadValues({
    ref: forwardedRef
  }, props), children));
});

// src/components/banner.tsx
import React15 from "react";

// ../nextra/dist/chunk-HIDP27A7.mjs
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async2 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../nextra/dist/chunk-XXFR3PNG.mjs
import React4 from "react";
import React22 from "react";
import React32 from "react";
import React42 from "react";
import React5 from "react";
import React6 from "react";
import React7 from "react";
import React8 from "react";
import React9 from "react";
import React10 from "react";
import React11 from "react";
import React12 from "react";
import React13 from "react";
function ArrowRightIcon(_a) {
  var _b = _a, {
    pathClassName
  } = _b, props = __objRest2(_b, [
    "pathClassName"
  ]);
  return /* @__PURE__ */ React4.createElement("svg", __spreadValues2({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /* @__PURE__ */ React4.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 5l7 7-7 7",
    className: pathClassName
  }));
}
function CheckIcon(props) {
  return /* @__PURE__ */ React22.createElement("svg", __spreadValues2({
    viewBox: "0 0 20 20",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, props), /* @__PURE__ */ React22.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}
function CopyIcon(props) {
  return /* @__PURE__ */ React32.createElement("svg", __spreadValues2({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor"
  }, props), /* @__PURE__ */ React32.createElement("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React32.createElement("path", {
    d: "M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function DiscordIcon(props) {
  return /* @__PURE__ */ React42.createElement("svg", __spreadValues2({
    width: "24",
    height: "24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 5 30.67 23.25"
  }, props), /* @__PURE__ */ React42.createElement("title", null, "Discord"), /* @__PURE__ */ React42.createElement("path", {
    d: "M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"
  }));
}
function GitHubIcon(props) {
  return /* @__PURE__ */ React5.createElement("svg", __spreadValues2({
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "3 3 18 18"
  }, props), /* @__PURE__ */ React5.createElement("title", null, "GitHub"), /* @__PURE__ */ React5.createElement("path", {
    d: "M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"
  }));
}
function GlobeIcon(props) {
  return /* @__PURE__ */ React6.createElement("svg", __spreadValues2({
    viewBox: "2 2 16 16",
    width: "12",
    height: "12",
    fill: "currentColor"
  }, props), /* @__PURE__ */ React6.createElement("path", {
    fillRule: "evenodd",
    d: "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
    clipRule: "evenodd"
  }));
}
function InformationCircleIcon(props) {
  return /* @__PURE__ */ React7.createElement("svg", __spreadValues2({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "20",
    height: "20"
  }, props), /* @__PURE__ */ React7.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
  }));
}
function MenuIcon(props) {
  return /* @__PURE__ */ React8.createElement("svg", __spreadValues2({
    fill: "none",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, props), /* @__PURE__ */ React8.createElement("g", null, /* @__PURE__ */ React8.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 6h16"
  })), /* @__PURE__ */ React8.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 12h16"
  }), /* @__PURE__ */ React8.createElement("g", null, /* @__PURE__ */ React8.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 18h16"
  })));
}
function MoonIcon(props) {
  return /* @__PURE__ */ React9.createElement("svg", __spreadValues2({
    fill: "none",
    viewBox: "2 2 20 20",
    width: "12",
    height: "12",
    stroke: "currentColor"
  }, props), /* @__PURE__ */ React9.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    fill: "currentColor",
    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  }));
}
function SpinnerIcon(props) {
  return /* @__PURE__ */ React10.createElement("svg", __spreadValues2({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), /* @__PURE__ */ React10.createElement("circle", {
    className: "nx-opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /* @__PURE__ */ React10.createElement("path", {
    className: "nx-opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
}
function SunIcon(props) {
  return /* @__PURE__ */ React11.createElement("svg", __spreadValues2({
    fill: "none",
    viewBox: "3 3 18 18",
    width: "12",
    height: "12",
    stroke: "currentColor"
  }, props), /* @__PURE__ */ React11.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    fill: "currentColor",
    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  }));
}
function WordWrapIcon(props) {
  return /* @__PURE__ */ React12.createElement("svg", __spreadValues2({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), /* @__PURE__ */ React12.createElement("path", {
    fill: "currentColor",
    d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
  }));
}
function XIcon(props) {
  return /* @__PURE__ */ React13.createElement("svg", __spreadValues2({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /* @__PURE__ */ React13.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

// src/components/banner.tsx
import cn from "clsx";

// src/utils/get-fs-route.ts
var template = "https://nextra.vercel.app";
var getFSRoute = (asPath, locale) => {
  const pathname = new URL(asPath, template).pathname;
  const cleanedPath = locale ? pathname.replace(new RegExp(`.${locale}(/|$)`), "$1") : pathname;
  return cleanedPath.replace(new RegExp("/index(/|$)"), "$1").split("#")[0] || "/";
};

// src/utils/get-git-edit-url.ts
import gitUrlParse from "git-url-parse";
var getGitEditUrl = (filePath) => {
  const config = useConfig();
  const repo = gitUrlParse(config.docsRepositoryBase || "");
  if (!repo)
    throw new Error("Invalid `docsRepositoryBase` URL!");
  return `${repo.href}/${filePath}`;
};

// src/utils/get-git-issue-url.ts
import gitUrlParse2 from "git-url-parse";
var getGitIssueUrl = ({
  repository = "",
  title,
  labels
}) => {
  const repo = gitUrlParse2(repository);
  if (!repo)
    throw new Error("Invalid `docsRepositoryBase` URL!");
  if (repo.resource.includes("gitlab")) {
    return `${repo.protocol}://${repo.resource}/${repo.owner}/${repo.name}/-/issues/new?issue[title]=${encodeURIComponent(title)}`;
  } else if (repo.resource.includes("github")) {
    return `${repo.protocol}://${repo.resource}/${repo.owner}/${repo.name}/issues/new?title=${encodeURIComponent(title)}&labels=${labels || ""}`;
  } else {
    return "#";
  }
};

// src/utils/get-heading-text.ts
function getHeadingText(heading) {
  return heading.value || "";
}

// src/utils/normalize-pages.ts
function extendMeta(meta = {}, fallback) {
  if (typeof meta === "string") {
    meta = { title: meta };
  }
  const theme = Object.assign({}, fallback.theme, meta.theme);
  return Object.assign({}, fallback, meta, { theme });
}
function findFirstRoute(items) {
  for (const item of items) {
    if (item.route)
      return item.route;
    if (item.children) {
      const route = findFirstRoute(item.children);
      if (route)
        return route;
    }
  }
}
var CUSTOM_ERROR_PAGES = ["/404", "/500"];
function normalizePages({
  list,
  locale,
  defaultLocale,
  route,
  docsRoot = "",
  underCurrentDocsRoot = false,
  pageThemeContext = DEFAULT_PAGE_THEME
}) {
  let _meta;
  for (let item of list) {
    if (item.kind === "Meta") {
      if (item.locale === locale) {
        _meta = item.data;
        break;
      }
      if (!_meta) {
        _meta = item.data;
      }
    }
  }
  const meta = _meta || {};
  const metaKeys = Object.keys(meta);
  for (let key of metaKeys) {
    if (typeof meta[key] === "string") {
      meta[key] = {
        title: meta[key]
      };
    }
  }
  const directories = [];
  const flatDirectories = [];
  const docsDirectories = [];
  const flatDocsDirectories = [];
  const topLevelNavbarItems = [];
  let activeType;
  let activeIndex = 0;
  let activeThemeContext = pageThemeContext;
  let activePath = [];
  let metaKeyIndex = -1;
  const fallbackMeta = meta["*"] || {};
  delete fallbackMeta.title;
  delete fallbackMeta.href;
  const items = list.filter(
    (a) => a.kind !== "Meta" && !a.name.startsWith("_") && (a.locale === locale || a.locale === defaultLocale || !a.locale)
  ).sort((a, b) => {
    const indexA = metaKeys.indexOf(a.name);
    const indexB = metaKeys.indexOf(b.name);
    if (indexA === -1 && indexB === -1)
      return a.name < b.name ? -1 : 1;
    if (indexA === -1)
      return 1;
    if (indexB === -1)
      return -1;
    return indexA - indexB;
  }).flatMap((item) => {
    const items2 = [];
    const index = metaKeys.indexOf(item.name);
    let extendedItem;
    if (index !== -1) {
      for (let i = metaKeyIndex + 1; i < index; i++) {
        const key = metaKeys[i];
        if (key !== "*") {
          items2.push(__spreadValues({
            name: key,
            route: ""
          }, meta[key]));
        }
      }
      metaKeyIndex = index;
      extendedItem = __spreadValues(__spreadValues({}, meta[item.name]), item);
    }
    items2.push(extendedItem || item);
    return items2;
  });
  for (let i = metaKeyIndex + 1; i < metaKeys.length; i++) {
    const key = metaKeys[i];
    if (key !== "*") {
      items.push(__spreadValues({
        name: key,
        route: "#"
      }, meta[key]));
    }
  }
  for (let i = 0; i < items.length; i++) {
    const a = items[i];
    if (i + 1 < items.length && a.name === items[i + 1].name) {
      items[i + 1] = __spreadProps(__spreadValues({}, items[i + 1]), { withIndexPage: true });
      if (a.children && !items[i + 1].children) {
        items[i + 1].children = a.children;
      }
      continue;
    }
    const extendedMeta = extendMeta(meta[a.name], fallbackMeta);
    const { display, type = "doc" } = extendedMeta;
    const extendedPageThemeContext = __spreadValues(__spreadValues({}, pageThemeContext), extendedMeta.theme);
    const isCurrentDocsTree = route.startsWith(docsRoot);
    const normalizedChildren = a.children && normalizePages({
      list: a.children,
      locale,
      defaultLocale,
      route,
      docsRoot: type === "page" || type === "menu" ? a.route : docsRoot,
      underCurrentDocsRoot: underCurrentDocsRoot || isCurrentDocsTree,
      pageThemeContext: extendedPageThemeContext
    });
    const title = extendedMeta.title || type !== "separator" && a.name;
    const getItem = () => __spreadValues(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, a), {
      type
    }), title && { title }), display && { display }), normalizedChildren && { children: [] });
    const item = getItem();
    const docsItem = getItem();
    const pageItem = getItem();
    docsItem.isUnderCurrentDocsTree = isCurrentDocsTree;
    if (a.route === route) {
      activePath = [item];
      activeType = type;
      activeThemeContext = __spreadValues(__spreadValues({}, activeThemeContext), extendedPageThemeContext);
      switch (type) {
        case "page":
        case "menu":
          activeIndex = topLevelNavbarItems.length;
          break;
        case "doc":
          activeIndex = flatDocsDirectories.length;
      }
    }
    if (display === "hidden" || CUSTOM_ERROR_PAGES.includes(a.route))
      continue;
    if (normalizedChildren) {
      if (normalizedChildren.activeIndex !== void 0 && normalizedChildren.activeType !== void 0) {
        activeThemeContext = normalizedChildren.activeThemeContext;
        activeType = normalizedChildren.activeType;
        activePath = [item, ...normalizedChildren.activePath];
        switch (activeType) {
          case "page":
          case "menu":
            activeIndex = topLevelNavbarItems.length + normalizedChildren.activeIndex;
            break;
          case "doc":
            activeIndex = flatDocsDirectories.length + normalizedChildren.activeIndex;
            break;
        }
        if (a.withIndexPage) {
          if (type === "doc") {
            activeIndex++;
          }
        }
      }
      switch (type) {
        case "page":
        case "menu":
          pageItem.children.push(...normalizedChildren.directories);
          docsDirectories.push(...normalizedChildren.docsDirectories);
          if (normalizedChildren.flatDirectories.length) {
            pageItem.firstChildRoute = findFirstRoute(
              normalizedChildren.flatDirectories
            );
            topLevelNavbarItems.push(pageItem);
          } else if (pageItem.withIndexPage) {
            topLevelNavbarItems.push(pageItem);
          }
          break;
        case "doc":
          if (Array.isArray(docsItem.children)) {
            docsItem.children.push(...normalizedChildren.docsDirectories);
          }
          if (item.withIndexPage) {
            if (display !== "children") {
              flatDocsDirectories.push(docsItem);
            }
          }
      }
      flatDirectories.push(...normalizedChildren.flatDirectories);
      flatDocsDirectories.push(...normalizedChildren.flatDocsDirectories);
      if (Array.isArray(item.children)) {
        item.children.push(...normalizedChildren.directories);
      }
    } else {
      flatDirectories.push(item);
      switch (type) {
        case "page":
        case "menu":
          topLevelNavbarItems.push(pageItem);
          break;
        case "doc":
          flatDocsDirectories.push(docsItem);
      }
    }
    if (type === "doc" && display === "children") {
      if (docsItem.children) {
        directories.push(...docsItem.children);
        docsDirectories.push(...docsItem.children);
      }
    } else {
      directories.push(item);
    }
    switch (type) {
      case "page":
      case "menu":
        docsDirectories.push(pageItem);
        break;
      case "doc":
        if (display !== "children") {
          docsDirectories.push(docsItem);
        }
        break;
      case "separator":
        docsDirectories.push(item);
    }
  }
  return {
    activeType,
    activeIndex,
    activeThemeContext,
    activePath,
    directories,
    flatDirectories,
    docsDirectories,
    flatDocsDirectories,
    topLevelNavbarItems
  };
}

// src/utils/render.tsx
import React14 from "react";
function renderComponent(ComponentOrNode, props) {
  if (!ComponentOrNode)
    return null;
  if (typeof ComponentOrNode !== "function")
    return ComponentOrNode;
  return /* @__PURE__ */ React14.createElement(ComponentOrNode, __spreadValues({}, props));
}
function renderString(stringOrFunction, props = {}) {
  const result = typeof stringOrFunction === "function" ? stringOrFunction(props) : stringOrFunction;
  return result || "";
}

// src/utils/use-popper.ts
import { useRef, useCallback, useMemo } from "react";
import { createPopper } from "@popperjs/core";
function usePopper(options) {
  const reference = useRef(null);
  const popper = useRef(null);
  const cleanupCallback = useRef(() => {
  });
  let instantiatePopper = useCallback(() => {
    if (!reference.current)
      return;
    if (!popper.current)
      return;
    if (cleanupCallback.current)
      cleanupCallback.current();
    cleanupCallback.current = createPopper(
      reference.current,
      popper.current,
      options
    ).destroy;
  }, [reference, popper, cleanupCallback, options]);
  return useMemo(
    () => [
      (referenceDomNode) => {
        reference.current = referenceDomNode;
        instantiatePopper();
      },
      (popperDomNode) => {
        popper.current = popperDomNode;
        instantiatePopper();
      }
    ],
    [reference, popper, instantiatePopper]
  );
}

// src/components/banner.tsx
function Banner() {
  const { banner } = useConfig();
  if (!banner.text) {
    return null;
  }
  const hideBannerScript = `try{if(localStorage.getItem(${JSON.stringify(
    banner.key
  )})==='0'){document.body.classList.add('nextra-banner-hidden')}}catch(e){}`;
  return /* @__PURE__ */ React15.createElement(React15.Fragment, null, /* @__PURE__ */ React15.createElement("script", {
    dangerouslySetInnerHTML: { __html: hideBannerScript }
  }), /* @__PURE__ */ React15.createElement("div", {
    className: cn(
      "nx-relative nx-z-20 nx-flex nx-items-center nx-justify-center",
      "nx-bg-neutral-900 nx-text-sm nx-font-medium nx-text-slate-50",
      "nx-h-[var(--nextra-banner-height)] [body.nextra-banner-hidden_&]:nx-hidden",
      "dark:nx-bg-[linear-gradient(1deg,#383838,#212121)] dark:nx-text-white",
      "nx-py-1 nx-pl-[max(env(safe-area-inset-left),2.5rem)] nx-pr-[max(env(safe-area-inset-right),2.5rem)]"
    )
  }, /* @__PURE__ */ React15.createElement("div", {
    className: "nx-max-w-[90rem] nx-truncate"
  }, renderComponent(banner.text)), banner.dismissible && /* @__PURE__ */ React15.createElement("button", {
    className: "nx-absolute nx-opacity-80 hover:nx-opacity-100 ltr:nx-right-0 rtl:nx-left-0",
    onClick: () => {
      try {
        localStorage.setItem(banner.key, "0");
      } catch (e) {
      }
      document.body.classList.add("nextra-banner-hidden");
    }
  }, /* @__PURE__ */ React15.createElement(XIcon, {
    className: "nx-mx-4 nx-h-4 nx-w-4"
  }))));
}

// src/components/bleed.tsx
import React16 from "react";
import cn2 from "clsx";
function Bleed({
  full,
  children
}) {
  return /* @__PURE__ */ React16.createElement("div", {
    className: cn2(
      "nextra-bleed nx-relative -nx-mx-6 nx-mt-6 md:-nx-mx-8 2xl:-nx-mx-24",
      full && [
        "ltr:xl:nx-ml-[calc(50%-50vw+16rem)] ltr:xl:nx-mr-[calc(50%-50vw)]",
        "rtl:xl:nx-ml-[calc(50%-50vw)] rtl:xl:nx-mr-[calc(50%-50vw+16rem)]"
      ]
    )
  }, children);
}

// src/components/breadcrumb.tsx
import React17 from "react";
import cn3 from "clsx";
function Breadcrumb({
  activePath
}) {
  return /* @__PURE__ */ React17.createElement("ul", {
    className: "nextra-breadcrumb nx-mt-2.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden nx-text-sm nx-text-gray-500 contrast-more:nx-text-current"
  }, activePath.map((item, index) => {
    const isLink = !item.children || item.withIndexPage;
    const isActive = index === activePath.length - 1;
    return /* @__PURE__ */ React17.createElement(React17.Fragment, {
      key: item.route + item.name
    }, index > 0 && /* @__PURE__ */ React17.createElement(ArrowRightIcon, {
      className: "nx-w-3.5 nx-shrink-0"
    }), /* @__PURE__ */ React17.createElement("li", {
      className: cn3(
        "nx-whitespace-nowrap nx-transition-colors",
        isActive ? "nx-font-medium nx-text-gray-700 contrast-more:nx-font-bold contrast-more:nx-text-current dark:nx-text-gray-400 contrast-more:dark:nx-text-current" : [
          "nx-min-w-[24px] nx-overflow-hidden nx-text-ellipsis",
          isLink && "hover:nx-text-gray-900 dark:hover:nx-text-gray-200"
        ]
      ),
      title: item.title
    }, isLink && !isActive ? /* @__PURE__ */ React17.createElement(Anchor, {
      href: item.route
    }, item.title) : item.title));
  }));
}

// src/components/callout.tsx
import React18 from "react";
import cn4 from "clsx";
var TypeToEmoji = {
  default: "\u{1F4A1}",
  error: "\u{1F6AB}",
  info: /* @__PURE__ */ React18.createElement(InformationCircleIcon, {
    className: "nx-mt-1"
  }),
  warning: "\u26A0\uFE0F"
};
var classes = {
  default: cn4(
    "nx-border-orange-100 nx-bg-orange-50 nx-text-orange-800 dark:nx-border-orange-400/30 dark:nx-bg-orange-400/20 dark:nx-text-orange-300"
  ),
  error: cn4(
    "nx-border-red-200 nx-bg-red-100 nx-text-red-900 dark:nx-border-red-200/30 dark:nx-bg-red-900/30 dark:nx-text-red-200"
  ),
  info: cn4(
    "nx-border-blue-200 nx-bg-blue-100 nx-text-blue-900 dark:nx-border-blue-200/30 dark:nx-bg-blue-900/30 dark:nx-text-blue-200"
  ),
  warning: cn4(
    "nx-border-yellow-100 nx-bg-yellow-50 nx-text-yellow-900 dark:nx-bg-yellow-700/30 dark:nx-text-yellow-200"
  )
};
function Callout({
  children,
  type = "default",
  emoji = TypeToEmoji[type]
}) {
  return /* @__PURE__ */ React18.createElement("div", {
    className: cn4(
      "nextra-callout nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4",
      "contrast-more:nx-border-current contrast-more:dark:nx-border-current",
      classes[type]
    )
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2",
    style: {
      fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
  }, emoji), /* @__PURE__ */ React18.createElement("div", {
    className: "nx-min-w-0"
  }, children));
}

// src/components/collapse.tsx
import React19, { useRef as useRef2, useEffect } from "react";
import cn5 from "clsx";
function Collapse({
  children,
  className,
  open
}) {
  const containerRef = useRef2(null);
  const innerRef = useRef2(null);
  const animationRef = useRef2();
  const initialRender = useRef2(true);
  const initialState = useRef2(open);
  useEffect(() => {
    if (initialRender.current)
      return;
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    if (open) {
      const container = containerRef.current;
      const inner = innerRef.current;
      if (container && inner) {
        const contentHeight = innerRef.current.clientHeight;
        container.style.maxHeight = contentHeight + "px";
        container.classList.remove("nx-duration-500");
        container.classList.add("nx-duration-300");
        inner.style.opacity = "1";
        animationRef.current = setTimeout(() => {
          const container2 = containerRef.current;
          if (container2) {
            container2.style.removeProperty("max-height");
          }
        }, 300);
      }
    } else {
      const container = containerRef.current;
      const inner = innerRef.current;
      if (container && inner) {
        const contentHeight = innerRef.current.clientHeight;
        container.style.maxHeight = contentHeight + "px";
        container.classList.remove("nx-duration-300");
        container.classList.add("nx-duration-500");
        inner.style.opacity = "0";
        setTimeout(() => {
          const container2 = containerRef.current;
          if (container2) {
            container2.style.maxHeight = "0px";
          }
        }, 0);
      }
    }
  }, [open]);
  useEffect(() => {
    initialRender.current = false;
  }, []);
  return /* @__PURE__ */ React19.createElement("div", {
    ref: containerRef,
    className: "nx-transform-gpu nx-overflow-hidden nx-transition-all nx-duration-300 nx-ease-in-out motion-reduce:nx-transition-none",
    style: {
      maxHeight: initialState.current ? void 0 : 0
    }
  }, /* @__PURE__ */ React19.createElement("div", {
    ref: innerRef,
    className: cn5(
      "nx-transform-gpu nx-overflow-hidden nx-p-2 nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none",
      className
    ),
    style: {
      opacity: initialState.current ? 1 : 0
    }
  }, children));
}

// src/components/flexsearch.tsx
import React24, { useState as useState5, useCallback as useCallback3 } from "react";
import { useRouter as useRouter2 } from "next/router";
import FlexSearch from "flexsearch";
import cn8 from "clsx";

// src/components/search.tsx
import React21, {
  Fragment,
  useCallback as useCallback2,
  useState as useState4,
  useEffect as useEffect3,
  useRef as useRef3
} from "react";
import cn7 from "clsx";
import { Transition } from "@headlessui/react";

// ../nextra/dist/hooks/index.mjs
import { useEffect as useEffect2, useState as useState3 } from "react";
function useMounted() {
  const [mounted, setMounted] = useState3(false);
  useEffect2(() => {
    setMounted(true);
  }, []);
  return mounted;
}

// src/components/input.tsx
import React20, { forwardRef as forwardRef2 } from "react";
import cn6 from "clsx";
var Input = forwardRef2(
  (_a, forwardedRef) => {
    var _b = _a, { className, suffix } = _b, props = __objRest(_b, ["className", "suffix"]);
    return /* @__PURE__ */ React20.createElement("div", {
      className: "nx-relative nx-flex nx-items-center nx-text-gray-900 contrast-more:nx-text-gray-800 dark:nx-text-gray-300 contrast-more:dark:nx-text-gray-300"
    }, /* @__PURE__ */ React20.createElement("input", __spreadValues({
      ref: forwardedRef,
      spellCheck: false,
      className: cn6(
        className,
        "nx-block nx-w-full nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors",
        "nx-text-base nx-leading-tight md:nx-text-sm",
        "nx-bg-black/[.03] dark:nx-bg-gray-50/10",
        "focus:nx-bg-white dark:focus:nx-bg-dark",
        "placeholder:nx-text-gray-400 dark:placeholder:nx-text-gray-500",
        "contrast-more:nx-border contrast-more:nx-border-current"
      )
    }, props)), suffix);
  }
);

// src/components/search.tsx
import { useRouter } from "next/router";
var INPUTS = ["input", "select", "button", "textarea"];
function Search({
  className,
  overlayClassName,
  value,
  onChange,
  onActive,
  loading,
  results
}) {
  const [show, setShow] = useState4(false);
  const config = useConfig();
  const [active, setActive] = useState4(0);
  const router = useRouter();
  const { setMenu } = useMenu();
  const input = useRef3(null);
  const ulRef = useRef3(null);
  useEffect3(() => {
    setActive(0);
  }, [value]);
  useEffect3(() => {
    onActive && onActive(show);
  }, [show]);
  useEffect3(() => {
    const down = (e) => {
      var _a;
      const tagName = (_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase();
      if (!input.current || !tagName || INPUTS.includes(tagName))
        return;
      if (e.key === "/" || e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        input.current.focus();
      } else if (e.key === "Escape") {
        setShow(false);
        input.current.blur();
      }
    };
    window.addEventListener("keydown", down);
    return () => {
      window.removeEventListener("keydown", down);
    };
  }, []);
  const handleKeyDown = useCallback2(
    function(e) {
      var _a, _b, _c;
      switch (e.key) {
        case "ArrowDown": {
          if (active + 1 < results.length) {
            const el = (_a = ulRef.current) == null ? void 0 : _a.querySelector(
              `li:nth-of-type(${active + 2}) > a`
            );
            if (el) {
              e.preventDefault();
              handleActive({ currentTarget: el });
              el.focus();
            }
          }
          break;
        }
        case "ArrowUp": {
          if (active - 1 >= 0) {
            const el = (_b = ulRef.current) == null ? void 0 : _b.querySelector(
              `li:nth-of-type(${active}) > a`
            );
            if (el) {
              e.preventDefault();
              handleActive({ currentTarget: el });
              el.focus();
            }
          }
          break;
        }
        case "Enter": {
          const result = results[active];
          if (result) {
            router.push(result.route);
            finishSearch();
          }
          break;
        }
        case "Escape": {
          setShow(false);
          (_c = input.current) == null ? void 0 : _c.blur();
          break;
        }
      }
    },
    [active, results, router]
  );
  const finishSearch = () => {
    var _a;
    (_a = input.current) == null ? void 0 : _a.blur();
    onChange("");
    setShow(false);
    setMenu(false);
  };
  const mounted = useMounted();
  const renderList = show && Boolean(value);
  const icon = /* @__PURE__ */ React21.createElement(Transition, {
    show: mounted && (!show || Boolean(value)),
    as: React21.Fragment,
    enter: "nx-transition-opacity",
    enterFrom: "nx-opacity-0",
    enterTo: "nx-opacity-100",
    leave: "nx-transition-opacity",
    leaveFrom: "nx-opacity-100",
    leaveTo: "nx-opacity-0"
  }, /* @__PURE__ */ React21.createElement("kbd", {
    className: cn7(
      "nx-absolute nx-my-1.5 nx-select-none ltr:nx-right-1.5 rtl:nx-left-1.5",
      "nx-h-5 nx-rounded nx-bg-white nx-px-1.5 nx-font-mono nx-text-[10px] nx-font-medium nx-text-gray-500",
      "nx-border dark:nx-border-gray-100/20 dark:nx-bg-dark/50",
      "contrast-more:nx-border-current contrast-more:nx-text-current contrast-more:dark:nx-border-current",
      "nx-items-center nx-gap-1 nx-transition-opacity",
      value ? "nx-z-20 nx-flex nx-cursor-pointer hover:nx-opacity-70" : "nx-pointer-events-none nx-hidden sm:nx-flex"
    ),
    title: value ? "Clear" : void 0,
    onClick: () => {
      onChange("");
    }
  }, value ? "ESC" : mounted && (navigator.userAgent.includes("Macintosh") ? /* @__PURE__ */ React21.createElement(React21.Fragment, null, /* @__PURE__ */ React21.createElement("span", {
    className: "nx-text-xs"
  }, "\u2318"), "K") : "CTRL K")));
  const handleActive = useCallback2(
    (e) => {
      const { index } = e.currentTarget.dataset;
      setActive(Number(index));
    },
    []
  );
  return /* @__PURE__ */ React21.createElement("div", {
    className: cn7("nextra-search nx-relative md:nx-w-64", className)
  }, renderList && /* @__PURE__ */ React21.createElement("div", {
    className: "nx-fixed nx-inset-0 nx-z-10",
    onClick: () => setShow(false)
  }), /* @__PURE__ */ React21.createElement(Input, {
    ref: input,
    value,
    onChange: (e) => {
      const { value: value2 } = e.target;
      onChange(value2);
      setShow(Boolean(value2));
    },
    type: "search",
    placeholder: renderString(config.search.placeholder),
    onKeyDown: handleKeyDown,
    suffix: icon
  }), /* @__PURE__ */ React21.createElement(Transition, {
    show: renderList,
    as: Transition.Child,
    leave: "nx-transition-opacity nx-duration-100",
    leaveFrom: "nx-opacity-100",
    leaveTo: "nx-opacity-0"
  }, /* @__PURE__ */ React21.createElement("ul", {
    className: cn7(
      "nextra-scrollbar",
      "nx-bg-white nx-text-gray-100 dark:nx-bg-neutral-900",
      "nx-absolute nx-top-full nx-z-20 nx-mt-2 nx-overflow-auto nx-overscroll-contain nx-rounded-xl nx-py-2.5 nx-shadow-xl",
      "nx-max-h-[min(calc(50vh-11rem-env(safe-area-inset-bottom)),400px)]",
      "md:nx-max-h-[min(calc(100vh-5rem-env(safe-area-inset-bottom)),400px)]",
      "nx-inset-x-0 ltr:md:nx-left-auto rtl:md:nx-right-auto",
      "contrast-more:nx-border contrast-more:nx-border-gray-900 contrast-more:dark:nx-border-gray-50",
      overlayClassName
    ),
    ref: ulRef,
    style: {
      transition: "max-height .2s ease"
    }
  }, loading ? /* @__PURE__ */ React21.createElement("span", {
    className: "nx-flex nx-select-none nx-justify-center nx-gap-2 nx-p-8 nx-text-center nx-text-sm nx-text-gray-400"
  }, /* @__PURE__ */ React21.createElement(SpinnerIcon, {
    className: "nx-h-5 nx-w-5 nx-animate-spin"
  }), "Loading...") : results.length > 0 ? results.map(({ route, prefix, children, id }, i) => /* @__PURE__ */ React21.createElement(Fragment, {
    key: id
  }, prefix, /* @__PURE__ */ React21.createElement("li", {
    className: cn7(
      "nx-mx-2.5 nx-break-words nx-rounded-md",
      "contrast-more:nx-border",
      i === active ? "nx-bg-primary-500/10 nx-text-primary-500 contrast-more:nx-border-primary-500" : "nx-text-gray-800 contrast-more:nx-border-transparent dark:nx-text-gray-300"
    )
  }, /* @__PURE__ */ React21.createElement(Anchor, {
    className: "nx-block nx-scroll-m-12 nx-px-2.5 nx-py-2",
    href: route,
    "data-index": i,
    onFocus: handleActive,
    onMouseMove: handleActive,
    onClick: finishSearch,
    onKeyDown: handleKeyDown
  }, children)))) : renderComponent(config.search.emptyResult))));
}

// src/components/highlight-matches.tsx
import React23, { Fragment as Fragment2, memo } from "react";
var HighlightMatches = memo(function HighlightMatches2({
  value,
  match
}) {
  const splitText = value ? value.split("") : [];
  const escapedSearch = match.trim().replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  const regexp = RegExp("(" + escapedSearch.replaceAll(" ", "|") + ")", "ig");
  let result;
  let id = 0;
  let index = 0;
  const res = [];
  if (value) {
    while ((result = regexp.exec(value)) !== null) {
      res.push(
        /* @__PURE__ */ React23.createElement(Fragment2, {
          key: id++
        }, splitText.splice(0, result.index - index).join(""), /* @__PURE__ */ React23.createElement("span", {
          className: "nx-text-primary-500"
        }, splitText.splice(0, regexp.lastIndex - result.index).join("")))
      );
      index = regexp.lastIndex;
    }
  }
  return /* @__PURE__ */ React23.createElement(React23.Fragment, null, res, splitText.join(""));
});

// src/components/flexsearch.tsx
var indexes = {};
var loadIndexesPromises = /* @__PURE__ */ new Map();
var loadIndexes = (basePath, locale) => {
  const key = basePath + "@" + locale;
  if (loadIndexesPromises.has(key)) {
    return loadIndexesPromises.get(key);
  }
  const promise = loadIndexesImpl(basePath, locale);
  loadIndexesPromises.set(key, promise);
  return promise;
};
var loadIndexesImpl = (basePath, locale) => __async(void 0, null, function* () {
  const response = yield fetch(
    `${basePath}/_next/static/chunks/nextra-data-${locale}.json`
  );
  const data = yield response.json();
  const pageIndex = new FlexSearch.Document({
    cache: 100,
    tokenize: "full",
    document: {
      id: "id",
      index: "content",
      store: ["title"]
    },
    context: {
      resolution: 9,
      depth: 2,
      bidirectional: true
    }
  });
  const sectionIndex = new FlexSearch.Document({
    cache: 100,
    tokenize: "full",
    document: {
      id: "id",
      index: "content",
      tag: "pageId",
      store: ["title", "content", "url", "display"]
    },
    context: {
      resolution: 9,
      depth: 2,
      bidirectional: true
    }
  });
  let pageId = 0;
  for (const route in data) {
    let pageContent = "";
    ++pageId;
    for (const heading in data[route].data) {
      const [hash, text] = heading.split("#");
      const url = route + (hash ? "#" + hash : "");
      const title = text || data[route].title;
      const content = data[route].data[heading] || "";
      const paragraphs = content.split("\n").filter(Boolean);
      sectionIndex.add(__spreadValues({
        id: url,
        url,
        title,
        pageId: `page_${pageId}`,
        content: title
      }, paragraphs[0] && { display: paragraphs[0] }));
      for (let i = 0; i < paragraphs.length; i++) {
        sectionIndex.add({
          id: `${url}_${i}`,
          url,
          title,
          pageId: `page_${pageId}`,
          content: paragraphs[i]
        });
      }
      pageContent += ` ${title} ${content}`;
    }
    pageIndex.add({
      id: pageId,
      title: data[route].title,
      content: pageContent
    });
  }
  indexes[locale] = [pageIndex, sectionIndex];
});
function Flexsearch({
  className
}) {
  const { locale = DEFAULT_LOCALE, basePath } = useRouter2();
  const [loading, setLoading] = useState5(false);
  const [results, setResults] = useState5([]);
  const [search, setSearch] = useState5("");
  const doSearch = (search2) => {
    var _a, _b;
    if (!search2)
      return;
    const [pageIndex, sectionIndex] = indexes[locale];
    const pageResults = ((_a = pageIndex.search(search2, 5, {
      enrich: true,
      suggest: true
    })[0]) == null ? void 0 : _a.result) || [];
    const results2 = [];
    const pageTitleMatches = {};
    for (let i = 0; i < pageResults.length; i++) {
      const result = pageResults[i];
      pageTitleMatches[i] = 0;
      const sectionResults = ((_b = sectionIndex.search(search2, 5, {
        enrich: true,
        suggest: true,
        tag: "page_" + result.id
      })[0]) == null ? void 0 : _b.result) || [];
      let isFirstItemOfPage = true;
      const occurred = {};
      for (let j = 0; j < sectionResults.length; j++) {
        const { doc } = sectionResults[j];
        const isMatchingTitle = doc.display !== void 0;
        if (isMatchingTitle) {
          pageTitleMatches[i]++;
        }
        const { url, title } = doc;
        const content = doc.display || doc.content;
        if (occurred[url + "@" + content])
          continue;
        occurred[url + "@" + content] = true;
        results2.push({
          _page_rk: i,
          _section_rk: j,
          route: url,
          prefix: isFirstItemOfPage && /* @__PURE__ */ React24.createElement("div", {
            className: cn8(
              "nx-mx-2.5 nx-mb-2 nx-mt-6 nx-select-none nx-border-b nx-border-black/10 nx-px-2.5 nx-pb-1.5 nx-text-xs nx-font-semibold nx-uppercase nx-text-gray-500 first:nx-mt-0 dark:nx-border-white/20 dark:nx-text-gray-300",
              "contrast-more:nx-border-gray-600 contrast-more:nx-text-gray-900 contrast-more:dark:nx-border-gray-50 contrast-more:dark:nx-text-gray-50"
            )
          }, result.doc.title),
          children: /* @__PURE__ */ React24.createElement(React24.Fragment, null, /* @__PURE__ */ React24.createElement("div", {
            className: "nx-text-base nx-font-semibold nx-leading-5"
          }, /* @__PURE__ */ React24.createElement(HighlightMatches, {
            match: search2,
            value: title
          })), content && /* @__PURE__ */ React24.createElement("div", {
            className: "excerpt nx-mt-1 nx-text-sm nx-leading-[1.35rem] nx-text-gray-600 dark:nx-text-gray-400 contrast-more:dark:nx-text-gray-50"
          }, /* @__PURE__ */ React24.createElement(HighlightMatches, {
            match: search2,
            value: content
          })))
        });
        isFirstItemOfPage = false;
      }
    }
    setResults(
      results2.sort((a, b) => {
        if (a._page_rk === b._page_rk) {
          return a._section_rk - b._section_rk;
        }
        if (pageTitleMatches[a._page_rk] !== pageTitleMatches[b._page_rk]) {
          return pageTitleMatches[b._page_rk] - pageTitleMatches[a._page_rk];
        }
        return a._page_rk - b._page_rk;
      }).map((res) => ({
        id: `${res._page_rk}_${res._section_rk}`,
        route: res.route,
        prefix: res.prefix,
        children: res.children
      }))
    );
  };
  const preload = useCallback3(
    (active) => __async(this, null, function* () {
      if (active && !indexes[locale]) {
        setLoading(true);
        yield loadIndexes(basePath, locale);
        setLoading(false);
      }
    }),
    [locale]
  );
  const handleChange = (value) => __async(this, null, function* () {
    setSearch(value);
    if (loading) {
      return;
    }
    if (!indexes[locale]) {
      setLoading(true);
      yield loadIndexes(basePath, locale);
      setLoading(false);
    }
    doSearch(value);
  });
  return /* @__PURE__ */ React24.createElement(Search, {
    loading,
    value: search,
    onChange: handleChange,
    onActive: preload,
    className,
    overlayClassName: "nx-w-screen nx-min-h-[100px] nx-max-w-[min(calc(100vw-2rem),calc(100%+20rem))]",
    results
  });
}

// src/components/footer.tsx
import React28 from "react";
import cn10 from "clsx";

// src/components/locale-switch.tsx
import React26 from "react";
import { useRouter as useRouter3 } from "next/router";

// src/components/select.tsx
import React25 from "react";
import cn9 from "clsx";
import { Listbox, Transition as Transition2 } from "@headlessui/react";
import { createPortal } from "react-dom";
function Select({
  options,
  selected,
  onChange,
  title,
  className
}) {
  const [trigger, container] = usePopper({
    strategy: "fixed",
    placement: "top-start",
    modifiers: [
      { name: "offset", options: { offset: [0, 10] } },
      {
        name: "sameWidth",
        enabled: true,
        fn({ state }) {
          state.styles.popper.minWidth = `${state.rects.reference.width}px`;
        },
        phase: "beforeWrite",
        requires: ["computeStyles"]
      }
    ]
  });
  return /* @__PURE__ */ React25.createElement(Listbox, {
    value: selected,
    onChange
  }, ({ open }) => /* @__PURE__ */ React25.createElement(Listbox.Button, {
    ref: trigger,
    title,
    className: cn9(
      "nx-h-7 nx-rounded-md nx-px-2 nx-text-left nx-text-xs nx-font-medium nx-text-gray-600 nx-transition-colors dark:nx-text-gray-400",
      open ? "nx-bg-gray-200 nx-text-gray-900 dark:nx-bg-primary-100/10 dark:nx-text-gray-50" : "hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50",
      className
    )
  }, selected.name, /* @__PURE__ */ React25.createElement(Portal, null, /* @__PURE__ */ React25.createElement(Transition2, {
    ref: container,
    show: open,
    as: Listbox.Options,
    className: "nx-z-20 nx-max-h-64 nx-overflow-auto nx-rounded-md nx-border nx-border-black/5 nx-bg-white nx-py-1 nx-text-sm nx-shadow-lg dark:nx-border-white/20 dark:nx-bg-neutral-800",
    leave: "nx-transition-opacity",
    leaveFrom: "nx-opacity-100",
    leaveTo: "nx-opacity-0"
  }, options.map((option) => /* @__PURE__ */ React25.createElement(Listbox.Option, {
    key: option.key,
    value: option,
    className: ({ active }) => cn9(
      active ? "nx-bg-primary-50 nx-text-primary-500 dark:nx-bg-primary-500/10" : "nx-text-gray-800 dark:nx-text-gray-100",
      "nx-relative nx-cursor-pointer nx-whitespace-nowrap nx-py-1.5",
      "ltr:nx-pl-3 ltr:nx-pr-9 rtl:nx-pr-3 rtl:nx-pl-9"
    )
  }, option.name, option.key === selected.key && /* @__PURE__ */ React25.createElement("span", {
    className: "nx-absolute nx-inset-y-0 nx-flex nx-items-center ltr:nx-right-3 rtl:nx-left-3"
  }, /* @__PURE__ */ React25.createElement(CheckIcon, null))))))));
}
function Portal(props) {
  const mounted = useMounted();
  if (!mounted)
    return null;
  return createPortal(props.children, document.body);
}

// src/components/locale-switch.tsx
function LocaleSwitch({
  options,
  lite,
  className
}) {
  const { locale, asPath } = useRouter3();
  const selected = options.find((l) => locale === l.locale);
  return /* @__PURE__ */ React26.createElement(Select, {
    title: "Change language",
    className,
    onChange: (option) => {
      const date = new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3);
      document.cookie = `NEXT_LOCALE=${option.key}; expires=${date.toUTCString()}; path=/`;
      location.href = asPath;
    },
    selected: {
      key: (selected == null ? void 0 : selected.locale) || "",
      name: /* @__PURE__ */ React26.createElement("div", {
        className: "nx-flex nx-items-center nx-gap-2"
      }, /* @__PURE__ */ React26.createElement(GlobeIcon, null), /* @__PURE__ */ React26.createElement("span", {
        className: lite ? "nx-hidden" : ""
      }, selected == null ? void 0 : selected.text))
    },
    options: options.map((l) => ({
      key: l.locale,
      name: l.text
    }))
  });
}

// src/components/theme-switch.tsx
import React27 from "react";
import { useTheme } from "next-themes";
var OPTIONS = [
  { key: "light", name: "Light" },
  { key: "dark", name: "Dark" },
  { key: "system", name: "System" }
];
function ThemeSwitch({ lite }) {
  const { setTheme, resolvedTheme, theme = "" } = useTheme();
  const mounted = useMounted();
  const IconToUse = mounted && resolvedTheme === "dark" ? MoonIcon : SunIcon;
  return /* @__PURE__ */ React27.createElement("div", {
    className: "nx-relative"
  }, /* @__PURE__ */ React27.createElement(Select, {
    title: "Change theme",
    options: OPTIONS,
    onChange: (option) => {
      setTheme(option.key);
    },
    selected: {
      key: theme,
      name: /* @__PURE__ */ React27.createElement("div", {
        className: "nx-flex nx-items-center nx-gap-2 nx-capitalize"
      }, /* @__PURE__ */ React27.createElement(IconToUse, null), /* @__PURE__ */ React27.createElement("span", {
        className: lite ? "md:nx-hidden" : ""
      }, mounted ? theme : "light"))
    }
  }));
}

// src/components/footer.tsx
function Footer({ menu }) {
  const config = useConfig();
  return /* @__PURE__ */ React28.createElement("footer", {
    className: "nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900"
  }, /* @__PURE__ */ React28.createElement("div", {
    className: cn10(
      "nx-mx-auto nx-flex nx-max-w-[90rem] nx-gap-2 nx-py-2 nx-px-4",
      menu ? "nx-flex" : "nx-hidden"
    )
  }, config.i18n.length > 0 && /* @__PURE__ */ React28.createElement(LocaleSwitch, {
    options: config.i18n
  }), config.darkMode && /* @__PURE__ */ React28.createElement(ThemeSwitch, null)), /* @__PURE__ */ React28.createElement("hr", {
    className: "dark:nx-border-neutral-800"
  }), /* @__PURE__ */ React28.createElement("div", {
    className: cn10(
      "nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start",
      "nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]"
    )
  }, renderComponent(config.footer.text)));
}

// src/components/head.tsx
import React29 from "react";
import NextHead from "next/head";
import { useTheme as useTheme2 } from "next-themes";
import { NextSeo } from "next-seo";
function Head() {
  var _a;
  const config = useConfig();
  const { resolvedTheme } = useTheme2();
  const mounted = useMounted();
  const head = typeof config.head === "function" ? config.head({}) : config.head;
  const hue = config.primaryHue;
  const { dark: darkHue, light: lightHue } = typeof hue === "number" ? { dark: hue, light: hue } : hue;
  const frontMatter = config.frontMatter;
  return /* @__PURE__ */ React29.createElement(React29.Fragment, null, /* @__PURE__ */ React29.createElement(NextSeo, __spreadValues({
    title: config.title,
    description: frontMatter.description,
    canonical: frontMatter.canonical,
    openGraph: frontMatter.openGraph
  }, (_a = config.getNextSeoProps) == null ? void 0 : _a.call(config))), /* @__PURE__ */ React29.createElement(NextHead, null, config.faviconGlyph ? /* @__PURE__ */ React29.createElement("link", {
    rel: "icon",
    href: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='.9em' font-size='90' text-anchor='middle'>${config.faviconGlyph}</text><style>text{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";fill:black}@media(prefers-color-scheme:dark){text{fill:white}}</style></svg>`
  }) : null, mounted ? /* @__PURE__ */ React29.createElement("meta", {
    name: "theme-color",
    content: resolvedTheme === "dark" ? "#111" : "#fff"
  }) : /* @__PURE__ */ React29.createElement(React29.Fragment, null, /* @__PURE__ */ React29.createElement("meta", {
    name: "theme-color",
    content: "#ffffff",
    media: "(prefers-color-scheme: light)"
  }), /* @__PURE__ */ React29.createElement("meta", {
    name: "theme-color",
    content: "#111111",
    media: "(prefers-color-scheme: dark)"
  })), /* @__PURE__ */ React29.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
  }), /* @__PURE__ */ React29.createElement("style", null, `
        :root {
          --nextra-primary-hue: ${lightHue}deg;
          --nextra-navbar-height: 4rem;
          --nextra-menu-height: 3.75rem;
          --nextra-banner-height: 2.5rem;
        }
        
        .dark {
          --nextra-primary-hue: ${darkHue}deg;
        }
      `), head));
}

// src/components/nav-links.tsx
import React30 from "react";
import cn11 from "clsx";
var classes2 = {
  link: cn11(
    "nx-flex nx-max-w-[50%] nx-items-center nx-gap-1 nx-py-4 nx-text-base nx-font-medium nx-text-gray-600 nx-transition-colors [word-break:break-word] hover:nx-text-primary-500 dark:nx-text-gray-300 md:nx-text-lg"
  ),
  icon: cn11("nx-inline nx-h-5 nx-shrink-0")
};
var NavLinks = ({
  flatDirectories,
  currentIndex
}) => {
  const config = useConfig();
  const nav = config.navigation;
  const navigation = typeof nav === "boolean" ? { prev: nav, next: nav } : nav;
  const prev = navigation.prev && flatDirectories[currentIndex - 1];
  const next = navigation.next && flatDirectories[currentIndex + 1];
  if (!prev && !next)
    return null;
  return /* @__PURE__ */ React30.createElement("div", {
    className: cn11(
      "nx-mb-8 nx-flex nx-items-center nx-border-t nx-pt-8 dark:nx-border-neutral-800",
      "contrast-more:nx-border-neutral-400 dark:contrast-more:nx-border-neutral-400"
    )
  }, prev && /* @__PURE__ */ React30.createElement(Anchor, {
    href: prev.route,
    title: prev.title,
    className: cn11(classes2.link, "ltr:nx-pr-4 rtl:nx-pl-4")
  }, /* @__PURE__ */ React30.createElement(ArrowRightIcon, {
    className: cn11(classes2.icon, "ltr:nx-rotate-180")
  }), prev.title), next && /* @__PURE__ */ React30.createElement(Anchor, {
    href: next.route,
    title: next.title,
    className: cn11(
      classes2.link,
      "ltr:nx-ml-auto ltr:nx-pl-4 ltr:nx-text-right rtl:nx-mr-auto rtl:nx-pr-4 rtl:nx-text-left"
    )
  }, next.title, /* @__PURE__ */ React30.createElement(ArrowRightIcon, {
    className: cn11(classes2.icon, "rtl:nx-rotate-180")
  })));
};

// src/components/navbar.tsx
import React31 from "react";
import cn12 from "clsx";
import { useRouter as useRouter4 } from "next/router";
import { Menu, Transition as Transition3 } from "@headlessui/react";
var classes3 = {
  link: cn12("nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100"),
  active: cn12("nx-subpixel-antialiased contrast-more:nx-font-bold"),
  inactive: cn12("nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200")
};
function NavbarMenu({
  className,
  menu,
  children
}) {
  const { items } = menu;
  const routes = Object.fromEntries(
    (menu.children || []).map((route) => [route.name, route])
  );
  return /* @__PURE__ */ React31.createElement("div", {
    className: "nx-relative nx-inline-block"
  }, /* @__PURE__ */ React31.createElement(Menu, null, /* @__PURE__ */ React31.createElement(Menu.Button, {
    className: cn12(
      className,
      "-nx-ml-2 nx-hidden nx-items-center nx-whitespace-nowrap nx-rounded nx-p-2 md:nx-inline-flex",
      classes3.inactive
    )
  }, children), /* @__PURE__ */ React31.createElement(Transition3, {
    leave: "nx-transition-opacity",
    leaveFrom: "nx-opacity-100",
    leaveTo: "nx-opacity-0"
  }, /* @__PURE__ */ React31.createElement(Menu.Items, {
    className: "nx-absolute nx-right-0 nx-z-20 nx-mt-1 nx-max-h-64 nx-min-w-full nx-overflow-auto nx-rounded-md nx-bg-white nx-py-1 nx-text-sm nx-shadow-lg dark:nx-bg-neutral-800"
  }, Object.entries(items || {}).map(([key, item]) => {
    var _a;
    return /* @__PURE__ */ React31.createElement(Menu.Item, {
      key
    }, /* @__PURE__ */ React31.createElement(Anchor, {
      href: item.href || ((_a = routes[key]) == null ? void 0 : _a.route) || menu.route + "/" + key,
      className: cn12(
        "nx-relative nx-hidden nx-w-full nx-select-none nx-whitespace-nowrap nx-text-gray-600 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 md:nx-inline-block",
        "nx-py-1.5 ltr:nx-pl-3 ltr:nx-pr-9 rtl:nx-pr-3 rtl:nx-pl-9"
      ),
      newWindow: item.newWindow
    }, item.title || key));
  })))));
}
function Navbar({ flatDirectories, items }) {
  const config = useConfig();
  const { locale = DEFAULT_LOCALE, asPath } = useRouter4();
  const activeRoute = getFSRoute(asPath, locale);
  const { menu, setMenu } = useMenu();
  return /* @__PURE__ */ React31.createElement("div", {
    className: "nextra-nav-container nx-sticky nx-top-0 nx-z-20 nx-w-full nx-bg-transparent"
  }, /* @__PURE__ */ React31.createElement("div", {
    className: cn12(
      "nextra-nav-container-blur",
      "nx-pointer-events-none nx-absolute nx-z-[-1] nx-h-full nx-w-full nx-bg-white dark:nx-bg-dark",
      "nx-shadow-[0_2px_4px_rgba(0,0,0,.02),0_-1px_0_rgba(0,0,0,.06)_inset] dark:nx-shadow-[0_-1px_0_rgba(255,255,255,.1)_inset]",
      "contrast-more:nx-shadow-[0_0_0_1px_#000] contrast-more:dark:nx-shadow-[0_0_0_1px_#fff]"
    )
  }), /* @__PURE__ */ React31.createElement("nav", {
    className: "nx-mx-auto nx-flex nx-h-[var(--nextra-navbar-height)] nx-max-w-[90rem] nx-items-center nx-justify-end nx-gap-2 nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]"
  }, config.logoLink ? /* @__PURE__ */ React31.createElement(Anchor, {
    href: typeof config.logoLink === "string" ? config.logoLink : "/",
    className: "nx-flex nx-items-center hover:nx-opacity-75 ltr:nx-mr-auto rtl:nx-ml-auto"
  }, renderComponent(config.logo)) : /* @__PURE__ */ React31.createElement("div", {
    className: "nx-flex nx-items-center ltr:nx-mr-auto rtl:nx-ml-auto"
  }, renderComponent(config.logo)), items.map((pageOrMenu) => {
    if (pageOrMenu.display === "hidden")
      return null;
    if (pageOrMenu.type === "menu") {
      const menu2 = pageOrMenu;
      const isActive2 = menu2.route === activeRoute || activeRoute.startsWith(menu2.route + "/");
      return /* @__PURE__ */ React31.createElement(NavbarMenu, {
        key: menu2.title,
        className: cn12(
          classes3.link,
          "nx-flex nx-gap-1",
          isActive2 ? classes3.active : classes3.inactive
        ),
        menu: menu2
      }, menu2.title, /* @__PURE__ */ React31.createElement(ArrowRightIcon, {
        className: "nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5",
        pathClassName: "nx-origin-center nx-transition-transform nx-rotate-90"
      }));
    }
    const page = pageOrMenu;
    let href = page.href || page.route || "#";
    if (page.children) {
      href = (page.withIndexPage ? page.route : page.firstChildRoute) || href;
    }
    const isActive = page.route === activeRoute || activeRoute.startsWith(page.route + "/");
    return /* @__PURE__ */ React31.createElement(Anchor, {
      href,
      key: page.route,
      className: cn12(
        classes3.link,
        "-nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block",
        !isActive || page.newWindow ? classes3.inactive : classes3.active
      ),
      newWindow: page.newWindow,
      "aria-current": !page.newWindow && isActive
    }, page.title);
  }), renderComponent(config.search.component, {
    directories: flatDirectories,
    className: "nx-hidden md:nx-inline-block mx-min-w-[200px]"
  }), config.project.link ? /* @__PURE__ */ React31.createElement(Anchor, {
    className: "nx-p-2 nx-text-current",
    href: config.project.link,
    newWindow: true
  }, renderComponent(config.project.icon)) : config.project.icon ? renderComponent(config.project.icon) : null, config.chat.link ? /* @__PURE__ */ React31.createElement(Anchor, {
    className: "nx-p-2 nx-text-current",
    href: config.chat.link,
    newWindow: true
  }, renderComponent(config.chat.icon)) : config.chat.icon ? renderComponent(config.chat.icon) : null, /* @__PURE__ */ React31.createElement("button", {
    type: "button",
    "aria-label": "Menu",
    className: "nextra-hamburger -nx-mr-2 nx-rounded nx-p-2 active:nx-bg-gray-400/20 md:nx-hidden",
    onClick: () => setMenu(!menu)
  }, /* @__PURE__ */ React31.createElement(MenuIcon, {
    className: cn12({ open: menu })
  }))));
}

// src/components/not-found.tsx
import React33 from "react";
import { useRouter as useRouter5 } from "next/router";
function NotFoundPage() {
  const config = useConfig();
  const mounted = useMounted();
  const { asPath } = useRouter5();
  const { content, labels } = config.notFound;
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ React33.createElement("p", {
    className: "nx-text-center"
  }, /* @__PURE__ */ React33.createElement(Anchor, {
    href: getGitIssueUrl({
      repository: config.docsRepositoryBase,
      title: `Found broken \`${mounted ? asPath : ""}\` link. Please fix!`,
      labels
    }),
    newWindow: true,
    className: "nx-text-primary-500 nx-underline nx-decoration-from-font [text-underline-position:under]"
  }, renderComponent(content)));
}

// src/components/server-side-error.tsx
import React34 from "react";
import { useRouter as useRouter6 } from "next/router";
function ServerSideErrorPage() {
  const config = useConfig();
  const mounted = useMounted();
  const { asPath } = useRouter6();
  const { content, labels } = config.serverSideError;
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ React34.createElement("p", {
    className: "nx-text-center"
  }, /* @__PURE__ */ React34.createElement(Anchor, {
    href: getGitIssueUrl({
      repository: config.docsRepositoryBase,
      title: `Got server-side error in \`${mounted ? asPath : ""}\` url. Please fix!`,
      labels
    }),
    newWindow: true,
    className: "nx-text-primary-500 nx-underline nx-decoration-from-font [text-underline-position:under]"
  }, renderComponent(content)));
}

// src/components/sidebar.tsx
import React35, {
  useState as useState6,
  useEffect as useEffect4,
  useMemo as useMemo2,
  memo as memo2,
  useRef as useRef4
} from "react";
import cn13 from "clsx";
import Slugger from "github-slugger";
import { useRouter as useRouter7 } from "next/router";
import scrollIntoView from "scroll-into-view-if-needed";
var TreeState = /* @__PURE__ */ Object.create(null);
var Folder = memo2(FolderImpl);
var classes4 = {
  link: cn13(
    "nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word]",
    "nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border"
  ),
  inactive: cn13(
    "nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900",
    "dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50",
    "contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50",
    "contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50"
  ),
  active: cn13(
    "nx-bg-primary-50 nx-font-bold nx-text-primary-500 dark:nx-bg-primary-500/10",
    "contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500"
  ),
  list: cn13("nx-flex nx-flex-col nx-gap-1"),
  border: cn13(
    "nx-relative before:nx-absolute before:nx-inset-y-1.5",
    'before:nx-w-px before:nx-bg-gray-200 before:nx-content-[""] dark:before:nx-bg-neutral-800',
    "ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0"
  )
};
function FolderImpl({
  item,
  anchors
}) {
  const { asPath, locale = DEFAULT_LOCALE } = useRouter7();
  const routeOriginal = getFSRoute(asPath, locale);
  const [route] = routeOriginal.split("#");
  const active = [route, route + "/"].includes(item.route + "/");
  const activeRouteInside = active || route.startsWith(item.route + "/");
  const folderLevel = (item.route.match(/\//g) || []).length;
  const { setMenu } = useMenu();
  const config = useConfig();
  const { theme } = item;
  const open = TreeState[item.route] !== void 0 ? TreeState[item.route] : active || activeRouteInside || (theme && "collapsed" in theme ? !theme.collapsed : folderLevel <= config.sidebar.defaultMenuCollapseLevel);
  const rerender = useState6({})[1];
  useEffect4(() => {
    if (activeRouteInside) {
      TreeState[item.route] = true;
    }
  }, [activeRouteInside]);
  if (item.type === "menu") {
    const menu = item;
    const routes = Object.fromEntries(
      (menu.children || []).map((route2) => [route2.name, route2])
    );
    item.children = Object.entries(menu.items || {}).map(([key, item2]) => {
      const route2 = routes[key] || {
        name: key,
        locale: menu.locale,
        route: menu.route + "/" + key
      };
      return __spreadValues(__spreadValues({}, route2), item2);
    });
  }
  return /* @__PURE__ */ React35.createElement("li", {
    className: cn13({ open, active })
  }, /* @__PURE__ */ React35.createElement(Anchor, {
    href: item.withIndexPage ? item.route : "",
    className: cn13(
      "nx-items-center nx-justify-between nx-gap-2",
      classes4.link,
      active ? classes4.active : classes4.inactive
    ),
    onClick: (e) => {
      const clickedToggleIcon = ["svg", "path"].includes(
        e.target.tagName.toLowerCase()
      );
      if (clickedToggleIcon) {
        e.preventDefault();
      }
      if (item.withIndexPage) {
        if (active || clickedToggleIcon) {
          TreeState[item.route] = !open;
        } else {
          TreeState[item.route] = true;
          setMenu(false);
        }
        rerender({});
        return;
      }
      if (active)
        return;
      TreeState[item.route] = !open;
      rerender({});
    }
  }, renderComponent(config.sidebar.titleComponent, {
    title: item.title,
    type: item.type
  }), /* @__PURE__ */ React35.createElement(ArrowRightIcon, {
    className: "nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5",
    pathClassName: cn13(
      "nx-origin-center nx-transition-transform rtl:-nx-rotate-180",
      open && "ltr:nx-rotate-90 rtl:nx-rotate-[-270deg]"
    )
  })), /* @__PURE__ */ React35.createElement(Collapse, {
    className: "ltr:nx-pr-0 rtl:nx-pl-0",
    open
  }, Array.isArray(item.children) ? /* @__PURE__ */ React35.createElement(Menu2, {
    className: cn13(classes4.border, "ltr:nx-ml-1 rtl:nx-mr-1"),
    directories: item.children,
    base: item.route,
    anchors
  }) : null));
}
function Separator({ title }) {
  const config = useConfig();
  return /* @__PURE__ */ React35.createElement("li", {
    className: cn13(
      "[word-break:break-word]",
      title ? "nx-mt-5 nx-mb-2 nx-px-2 nx-py-1.5 nx-text-sm nx-font-semibold nx-text-gray-900 first:nx-mt-0 dark:nx-text-gray-100" : "nx-my-4"
    )
  }, title ? renderComponent(config.sidebar.titleComponent, {
    title,
    type: "separator"
  }) : /* @__PURE__ */ React35.createElement("hr", {
    className: "nx-mx-2 nx-border-t nx-border-gray-200 dark:nx-border-primary-100/10"
  }));
}
function File({
  item,
  anchors
}) {
  const { asPath, locale = DEFAULT_LOCALE } = useRouter7();
  const route = getFSRoute(asPath, locale);
  const active = item.route && [route, route + "/"].includes(item.route + "/");
  const slugger = new Slugger();
  const activeAnchor = useActiveAnchor();
  const { setMenu } = useMenu();
  const config = useConfig();
  if (item.type === "separator") {
    return /* @__PURE__ */ React35.createElement(Separator, {
      title: item.title
    });
  }
  return /* @__PURE__ */ React35.createElement("li", {
    className: cn13(classes4.list, { active })
  }, /* @__PURE__ */ React35.createElement(Anchor, {
    href: item.href || item.route,
    newWindow: item.newWindow,
    className: cn13(classes4.link, active ? classes4.active : classes4.inactive),
    onClick: () => {
      setMenu(false);
    }
  }, renderComponent(config.sidebar.titleComponent, {
    title: item.title,
    type: item.type
  })), active && anchors.length > 0 && /* @__PURE__ */ React35.createElement("ul", {
    className: cn13(
      classes4.list,
      classes4.border,
      "ltr:nx-ml-3 rtl:nx-mr-3"
    )
  }, anchors.map((text) => {
    var _a;
    const slug = slugger.slug(text);
    return /* @__PURE__ */ React35.createElement("li", {
      key: slug
    }, /* @__PURE__ */ React35.createElement("a", {
      href: `#${slug}`,
      className: cn13(
        classes4.link,
        'nx-flex nx-gap-2 before:nx-opacity-25 before:nx-content-["#"]',
        ((_a = activeAnchor[slug]) == null ? void 0 : _a.isActive) ? classes4.active : classes4.inactive
      ),
      onClick: () => {
        setMenu(false);
      }
    }, text));
  })));
}
function Menu2({
  directories,
  anchors,
  className,
  onlyCurrentDocs
}) {
  return /* @__PURE__ */ React35.createElement("ul", {
    className: cn13(classes4.list, className)
  }, directories.map(
    (item) => !onlyCurrentDocs || item.isUnderCurrentDocsTree ? item.type === "menu" || item.children && (item.children.length || !item.withIndexPage) ? /* @__PURE__ */ React35.createElement(Folder, {
      key: item.name,
      item,
      anchors
    }) : /* @__PURE__ */ React35.createElement(File, {
      key: item.name,
      item,
      anchors
    }) : null
  ));
}
var emptyHeading = [];
function Sidebar({
  docsDirectories,
  flatDirectories,
  fullDirectories,
  asPopover = false,
  headings = emptyHeading,
  includePlaceholder
}) {
  const config = useConfig();
  const { menu, setMenu } = useMenu();
  const anchors = useMemo2(
    () => headings.filter((v) => v.children && v.depth === 2 && v.type === "heading").map(getHeadingText).filter(Boolean),
    [headings]
  );
  const sidebarRef = useRef4(null);
  const containerRef = useRef4(null);
  useEffect4(() => {
    if (menu) {
      document.body.classList.add("nx-overflow-hidden", "md:nx-overflow-auto");
    } else {
      document.body.classList.remove(
        "nx-overflow-hidden",
        "md:nx-overflow-auto"
      );
    }
  }, [menu]);
  useEffect4(() => {
    var _a;
    const activeElement = (_a = sidebarRef.current) == null ? void 0 : _a.querySelector("li.active");
    if (activeElement && (window.innerWidth > 767 || menu)) {
      const scroll = () => {
        scrollIntoView(activeElement, {
          block: "center",
          inline: "center",
          scrollMode: "always",
          boundary: containerRef.current
        });
      };
      if (menu) {
        setTimeout(scroll, 300);
      } else {
        scroll();
      }
    }
  }, [menu]);
  const hasMenu = config.i18n.length > 0 || config.darkMode;
  return /* @__PURE__ */ React35.createElement(React35.Fragment, null, includePlaceholder && asPopover ? /* @__PURE__ */ React35.createElement("div", {
    className: "nx-hidden nx-h-0 nx-w-64 nx-shrink-0 xl:nx-block"
  }) : null, /* @__PURE__ */ React35.createElement("div", {
    className: cn13(
      "[transition:background-color_1.5s_ease] motion-reduce:nx-transition-none",
      menu ? "nx-fixed nx-inset-0 nx-z-10 nx-bg-black/80 dark:nx-bg-black/60" : "nx-bg-transparent"
    ),
    onClick: () => setMenu(false)
  }), /* @__PURE__ */ React35.createElement("aside", {
    className: cn13(
      "nextra-sidebar-container nx-flex nx-flex-col",
      "md:nx-top-16 md:nx-w-64 md:nx-shrink-0 md:nx-transform-none",
      asPopover ? "md:nx-hidden" : "md:nx-sticky md:nx-self-start",
      menu ? "[transform:translate3d(0,0,0)]" : "[transform:translate3d(0,-100%,0)]"
    ),
    ref: containerRef
  }, /* @__PURE__ */ React35.createElement("div", {
    className: cn13(
      "nx-z-[1]",
      "nx-p-4 md:nx-hidden",
      "nx-shadow-[0_2px_14px_6px_#fff] dark:nx-shadow-[0_2px_14px_6px_#111]",
      "contrast-more:nx-shadow-none dark:contrast-more:nx-shadow-none"
    )
  }, renderComponent(config.search.component, {
    directories: flatDirectories
  })), /* @__PURE__ */ React35.createElement("div", {
    className: cn13(
      "nextra-scrollbar nx-overflow-y-auto nx-px-4 nx-pb-4 md:nx-pt-4",
      "nx-grow md:nx-h-[calc(100vh-var(--nextra-navbar-height)-3.75rem)]"
    ),
    ref: sidebarRef
  }, /* @__PURE__ */ React35.createElement(Menu2, {
    className: "nx-hidden md:nx-flex",
    directories: docsDirectories,
    anchors: config.toc.float ? [] : anchors,
    onlyCurrentDocs: true
  }), /* @__PURE__ */ React35.createElement(Menu2, {
    className: "md:nx-hidden",
    directories: fullDirectories,
    anchors
  })), hasMenu && /* @__PURE__ */ React35.createElement("div", {
    className: cn13(
      "nx-relative nx-z-[1]",
      "nx-mx-4 nx-border-t nx-py-4 nx-shadow-[0_-12px_16px_#fff]",
      "nx-flex nx-items-center nx-gap-2",
      "dark:nx-border-neutral-800 dark:nx-shadow-[0_-12px_16px_#111]",
      "contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-shadow-none"
    )
  }, config.i18n.length > 0 && /* @__PURE__ */ React35.createElement(LocaleSwitch, {
    options: config.i18n,
    className: "nx-grow"
  }), config.darkMode && /* @__PURE__ */ React35.createElement(ThemeSwitch, {
    lite: config.i18n.length > 0
  }))));
}

// src/components/tabs.tsx
import React36 from "react";
import cn14 from "clsx";
import { Tab as HeadlessTab } from "@headlessui/react";
function isTabItem(item) {
  if (item && typeof item === "object" && "label" in item)
    return true;
  return false;
}
var renderTab = (item) => {
  if (isTabItem(item)) {
    return item.label;
  }
  return item;
};
function Tabs({
  items,
  selectedIndex,
  defaultIndex,
  onChange,
  children
}) {
  return /* @__PURE__ */ React36.createElement(HeadlessTab.Group, {
    selectedIndex,
    defaultIndex,
    onChange
  }, /* @__PURE__ */ React36.createElement("div", {
    className: "no-scrollbar -nx-m-2 nx-overflow-x-auto nx-overflow-y-hidden nx-overscroll-x-contain nx-p-2"
  }, /* @__PURE__ */ React36.createElement(HeadlessTab.List, {
    className: "nx-mt-4 nx-flex nx-w-max nx-min-w-full nx-border-b nx-border-gray-200 nx-pb-px dark:nx-border-neutral-800"
  }, items.map((item, index) => {
    const disabled = !!(item && typeof item === "object" && "disabled" in item && item.disabled);
    return /* @__PURE__ */ React36.createElement(HeadlessTab, {
      key: index,
      disabled,
      className: ({ selected }) => cn14(
        "nx-mr-2 nx-rounded-t nx-p-2 nx-font-medium nx-leading-5 nx-transition-colors",
        "-nx-mb-0.5 nx-select-none nx-border-b-2",
        selected ? "nx-border-primary-500 nx-text-primary-500" : "nx-border-transparent nx-text-gray-600 hover:nx-border-gray-200 hover:nx-text-black dark:nx-text-gray-200 dark:hover:nx-border-neutral-800 dark:hover:nx-text-white",
        disabled && "nx-pointer-events-none nx-text-gray-400 dark:nx-text-neutral-600"
      )
    }, renderTab(item));
  }))), /* @__PURE__ */ React36.createElement(HeadlessTab.Panels, null, children));
}
function Tab(_a) {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ React36.createElement(HeadlessTab.Panel, __spreadProps(__spreadValues({}, props), {
    className: "nx-rounded nx-pt-6"
  }), children);
}

// src/components/toc.tsx
import React37, { useEffect as useEffect5, useRef as useRef5, useMemo as useMemo3 } from "react";
import cn15 from "clsx";
import Slugger2 from "github-slugger";
import scrollIntoView2 from "scroll-into-view-if-needed";
function TOC({ headings, filePath }) {
  var _a;
  const slugger = new Slugger2();
  const activeAnchor = useActiveAnchor();
  const config = useConfig();
  const tocRef = useRef5(null);
  const items = useMemo3(
    () => headings.filter((heading) => heading.type === "heading" && heading.depth > 1).map((heading) => {
      const text = getHeadingText(heading);
      return {
        text,
        slug: slugger.slug(text),
        depth: heading.depth
      };
    }),
    [headings]
  );
  const hasHeadings = items.length > 0;
  const hasMetaInfo = Boolean(
    config.feedback.content || config.editLink.component || config.toc.extraContent
  );
  const activeSlug = (_a = Object.entries(activeAnchor).find(
    ([, { isActive }]) => isActive
  )) == null ? void 0 : _a[0];
  useEffect5(() => {
    var _a2;
    if (!activeSlug)
      return;
    const anchor = (_a2 = tocRef.current) == null ? void 0 : _a2.querySelector(`li > a[href="#${activeSlug}"`);
    if (anchor) {
      scrollIntoView2(anchor, {
        behavior: "smooth",
        block: "center",
        inline: "center",
        scrollMode: "always",
        boundary: tocRef.current
      });
    }
  }, [activeSlug]);
  const linkClassName = cn15(
    "nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100",
    "contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50"
  );
  return /* @__PURE__ */ React37.createElement("div", {
    ref: tocRef,
    className: cn15(
      "nextra-scrollbar nx-sticky nx-top-16 nx-overflow-y-auto nx-pr-4 nx-pt-8 nx-text-sm [hyphens:auto]",
      "nx-max-h-[calc(100vh-var(--nextra-navbar-height)-env(safe-area-inset-bottom))] ltr:-nx-mr-4 rtl:-nx-ml-4"
    )
  }, hasHeadings && /* @__PURE__ */ React37.createElement(React37.Fragment, null, /* @__PURE__ */ React37.createElement("p", {
    className: "nx-mb-4 nx-font-semibold nx-tracking-tight"
  }, renderComponent(config.toc.title)), /* @__PURE__ */ React37.createElement("ul", null, items.map(({ slug, text, depth }) => {
    var _a2;
    return /* @__PURE__ */ React37.createElement("li", {
      className: "nx-my-2 nx-scroll-my-6 nx-scroll-py-6",
      key: slug
    }, /* @__PURE__ */ React37.createElement("a", {
      href: `#${slug}`,
      className: cn15(
        {
          2: "nx-font-semibold",
          3: "ltr:nx-ml-4 rtl:nx-mr-4",
          4: "ltr:nx-ml-8 rtl:nx-mr-8",
          5: "ltr:nx-ml-12 rtl:nx-mr-12",
          6: "ltr:nx-ml-16 rtl:nx-mr-16"
        }[depth],
        "nx-inline-block",
        ((_a2 = activeAnchor[slug]) == null ? void 0 : _a2.isActive) ? "nx-text-primary-500 nx-subpixel-antialiased contrast-more:!nx-text-primary-500" : "nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300",
        "contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50"
      )
    }, text));
  }))), hasMetaInfo && /* @__PURE__ */ React37.createElement("div", {
    className: cn15(
      hasHeadings && "nx-mt-8 nx-border-t nx-bg-white nx-pt-8 nx-shadow-[0_-12px_16px_white] dark:nx-bg-dark dark:nx-shadow-[0_-12px_16px_#111]",
      "nx-sticky nx-bottom-0 nx-flex nx-flex-col nx-items-start nx-gap-2 nx-pb-8 dark:nx-border-neutral-800",
      "contrast-more:nx-border-t contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-border-neutral-400"
    )
  }, config.feedback.content ? /* @__PURE__ */ React37.createElement(Anchor, {
    className: linkClassName,
    href: getGitIssueUrl({
      repository: config.docsRepositoryBase,
      title: `Feedback for \u201C${config.title}\u201D`,
      labels: config.feedback.labels
    }),
    newWindow: true
  }, renderComponent(config.feedback.content)) : null, renderComponent(config.editLink.component, {
    filePath,
    className: linkClassName,
    children: renderComponent(config.editLink.text)
  }), renderComponent(config.toc.extraContent)));
}

// src/components/match-sorter-search.tsx
import React38, { useMemo as useMemo4, useState as useState7 } from "react";
import { matchSorter } from "match-sorter";
function MatchSorterSearch({
  className,
  directories = []
}) {
  const [search, setSearch] = useState7("");
  const results = useMemo4(
    () => search ? matchSorter(directories, search, { keys: ["title"] }).map(
      ({ route, title }) => ({
        id: route + title,
        route,
        children: /* @__PURE__ */ React38.createElement(HighlightMatches, {
          value: title,
          match: search
        })
      })
    ) : [],
    [search]
  );
  return /* @__PURE__ */ React38.createElement(Search, {
    value: search,
    onChange: setSearch,
    className,
    overlayClassName: "nx-w-full",
    results
  });
}

// src/constants.tsx
var DEFAULT_LOCALE = "en-US";
var IS_BROWSER = typeof window !== "undefined";
var DEFAULT_THEME = {
  banner: {
    dismissible: true,
    key: "nextra-banner"
  },
  chat: {
    icon: /* @__PURE__ */ React39.createElement(React39.Fragment, null, /* @__PURE__ */ React39.createElement(DiscordIcon, null), /* @__PURE__ */ React39.createElement("span", {
      className: "nx-sr-only"
    }, "Discord"))
  },
  darkMode: true,
  direction: "ltr",
  docsRepositoryBase: "https://github.com/shuding/nextra",
  editLink: {
    component({ className, filePath, children }) {
      const editUrl = getGitEditUrl(filePath);
      if (!editUrl) {
        return null;
      }
      return /* @__PURE__ */ React39.createElement(Anchor, {
        className,
        href: editUrl
      }, children);
    },
    text: "Edit this page"
  },
  feedback: {},
  footer: {
    component: Footer,
    text: `MIT ${new Date().getFullYear()} \xA9 Nextra.`
  },
  getNextSeoProps: () => ({ titleTemplate: "%s \u2013 Nextra" }),
  gitTimestamp({ timestamp }) {
    const { locale = DEFAULT_LOCALE } = useRouter8();
    return /* @__PURE__ */ React39.createElement(React39.Fragment, null, "Last updated on", " ", timestamp.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric"
    }));
  },
  head: /* @__PURE__ */ React39.createElement(React39.Fragment, null, /* @__PURE__ */ React39.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#fff"
  }), /* @__PURE__ */ React39.createElement("meta", {
    httpEquiv: "Content-Language",
    content: "en"
  }), /* @__PURE__ */ React39.createElement("meta", {
    name: "description",
    content: "Nextra: the next docs builder"
  }), /* @__PURE__ */ React39.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /* @__PURE__ */ React39.createElement("meta", {
    name: "twitter:site",
    content: "@shuding_"
  }), /* @__PURE__ */ React39.createElement("meta", {
    property: "og:title",
    content: "Nextra: the next docs builder"
  }), /* @__PURE__ */ React39.createElement("meta", {
    property: "og:description",
    content: "Nextra: the next docs builder"
  }), /* @__PURE__ */ React39.createElement("meta", {
    name: "apple-mobile-web-app-title",
    content: "Nextra"
  })),
  i18n: [],
  logo: /* @__PURE__ */ React39.createElement(React39.Fragment, null, /* @__PURE__ */ React39.createElement("span", {
    className: "nx-font-extrabold"
  }, "Nextra"), /* @__PURE__ */ React39.createElement("span", {
    className: "nx-ml-2 nx-hidden nx-font-normal nx-text-gray-600 md:nx-inline"
  }, "The Next Docs Builder")),
  logoLink: true,
  navbar: Navbar,
  navigation: {
    next: true,
    prev: true
  },
  nextThemes: {
    defaultTheme: "system",
    storageKey: "theme"
  },
  notFound: {
    content: "Submit an issue about broken link \u2192",
    labels: "bug"
  },
  primaryHue: {
    dark: 204,
    light: 212
  },
  project: {
    icon: /* @__PURE__ */ React39.createElement(React39.Fragment, null, /* @__PURE__ */ React39.createElement(GitHubIcon, null), /* @__PURE__ */ React39.createElement("span", {
      className: "nx-sr-only"
    }, "GitHub"))
  },
  search: {
    component({ className, directories }) {
      const config = useConfig();
      return config.unstable_flexsearch ? /* @__PURE__ */ React39.createElement(Flexsearch, {
        className
      }) : /* @__PURE__ */ React39.createElement(MatchSorterSearch, {
        className,
        directories
      });
    },
    emptyResult: /* @__PURE__ */ React39.createElement("span", {
      className: "nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400"
    }, "No results found."),
    placeholder() {
      const { locale } = useRouter8();
      if (locale === "zh-CN")
        return "\u641C\u7D22\u6587\u6863\u2026";
      if (locale === "ru-RU")
        return "\u041F\u043E\u0438\u0441\u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438\u2026";
      if (locale === "fr-FR")
        return "Rechercher de la documentation\u2026";
      return "Search documentation\u2026";
    }
  },
  serverSideError: {
    content: "Submit an issue about error in url \u2192",
    labels: "bug"
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    titleComponent: ({ title }) => /* @__PURE__ */ React39.createElement(React39.Fragment, null, title)
  },
  toc: {
    component: TOC,
    float: true,
    title: "On This Page"
  }
};
var DEEP_OBJECT_KEYS = Object.entries(DEFAULT_THEME).map(([key, value]) => {
  const isObject = value && typeof value === "object" && !Array.isArray(value) && !isValidElement(value);
  if (isObject) {
    return key;
  }
}).filter(Boolean);
var LEGACY_CONFIG_OPTIONS = {
  bannerKey: "banner.key",
  bodyExtraContent: "main",
  customSearch: "search.component",
  defaultMenuCollapsed: "sidebar.defaultMenuCollapseLevel",
  feedbackLabels: "feedback.labels",
  feedbackLink: "feedback.content",
  floatTOC: "toc.float",
  footerEditLink: "editLink.text",
  footerText: "footer.text",
  github: "project.link",
  nextLinks: "navigation.next",
  notFoundLabels: "notFound.labels",
  notFoundLink: "notFound.content",
  prevLinks: "navigation.prev",
  projectChat: "chat",
  projectChatLink: "chat.link",
  projectChatLinkIcon: "chat.icon",
  projectLink: "project.link",
  projectLinkIcon: "project.icon",
  searchPlaceholder: "search.placeholder",
  serverSideErrorLabels: "serverSideError.labels",
  serverSideErrorLink: "serverSideError.content",
  sidebarSubtitle: "sidebar.titleComponent",
  tocExtraContent: "toc.extraContent",
  unstable_searchResultEmpty: "search.emptyResult"
};
var DEFAULT_PAGE_THEME = {
  breadcrumb: true,
  collapsed: false,
  footer: true,
  layout: "default",
  navbar: true,
  pagination: true,
  sidebar: true,
  timestamp: true,
  toc: true,
  typesetting: "default"
};

// src/polyfill.ts
if (IS_BROWSER) {
  let resizeTimer;
  const addResizingClass = () => {
    document.body.classList.add("resizing");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resizing");
    }, 200);
  };
  window.addEventListener("resize", addResizingClass);
}

// src/mdx-components.tsx
import React41, {
  useEffect as useEffect7,
  useRef as useRef6,
  useState as useState9,
  cloneElement,
  Children
} from "react";
import "intersection-observer";
import cn16 from "clsx";

// ../nextra/dist/components/index.mjs
import React40 from "react";
import React210, {
  useCallback as useCallback4,
  useEffect as useEffect6,
  useState as useState8
} from "react";
import React310 from "react";
import React43, { useCallback as useCallback22 } from "react";
import React52 from "react";
import React62 from "react";
import React72 from "react";
import React82 from "react";
var Button = (_a) => {
  var _b = _a, {
    children,
    className = ""
  } = _b, props = __objRest2(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ React40.createElement("button", __spreadValues2({
    className: [
      "nextra-button nx-transition-colors",
      "nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-2",
      "dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",
      className
    ].join(" ")
  }, props), children);
};
var CopyToClipboard = (_a) => {
  var _b = _a, {
    value
  } = _b, props = __objRest2(_b, [
    "value"
  ]);
  const [isCopied, setCopied] = useState8(false);
  useEffect6(() => {
    if (!isCopied)
      return;
    const timerId = setTimeout(() => {
      setCopied(false);
    }, 2e3);
    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);
  const handleClick = useCallback4(() => __async2(void 0, null, function* () {
    setCopied(true);
    if (!(navigator == null ? void 0 : navigator.clipboard)) {
      console.error("Access to clipboard rejected!");
    }
    try {
      yield navigator.clipboard.writeText(JSON.parse(value));
    } catch (e) {
      console.error("Failed to copy!");
    }
  }), [value]);
  const IconToUse = isCopied ? CheckIcon : CopyIcon;
  return /* @__PURE__ */ React210.createElement(Button, __spreadValues2({
    onClick: handleClick,
    title: "Copy code"
  }, props), /* @__PURE__ */ React210.createElement(IconToUse, {
    className: "nx-pointer-events-none nx-h-4 nx-w-4"
  }));
};
var Code = (_a) => {
  var _b = _a, {
    children,
    className = ""
  } = _b, props = __objRest2(_b, [
    "children",
    "className"
  ]);
  const hasLineNumbers = "data-line-numbers" in props;
  return /* @__PURE__ */ React310.createElement("code", __spreadValues2({
    className: [
      "nx-border-black/5 nx-bg-black/5 nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em]",
      "dark:nx-border-white/10 dark:nx-bg-white/10",
      hasLineNumbers ? "[counter-reset:line]" : "",
      className
    ].join(" "),
    dir: "ltr"
  }, props), children);
};
var Pre = (_a) => {
  var _b = _a, {
    children,
    className = "",
    value,
    filename
  } = _b, props = __objRest2(_b, [
    "children",
    "className",
    "value",
    "filename"
  ]);
  const toggleWordWrap = useCallback22(() => {
    const htmlDataset = document.documentElement.dataset;
    const hasWordWrap = "nextraWordWrap" in htmlDataset;
    if (hasWordWrap) {
      delete htmlDataset.nextraWordWrap;
    } else {
      htmlDataset.nextraWordWrap = "";
    }
  }, []);
  return /* @__PURE__ */ React43.createElement(React43.Fragment, null, filename && /* @__PURE__ */ React43.createElement("div", {
    className: "nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200"
  }, filename), /* @__PURE__ */ React43.createElement("pre", __spreadValues2({
    className: [
      "nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-font-medium nx-subpixel-antialiased dark:nx-bg-primary-300/10",
      "contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",
      filename ? "nx-pt-12 nx-pb-4" : "nx-py-4",
      className
    ].join(" ")
  }, props), children), /* @__PURE__ */ React43.createElement("div", {
    className: [
      "nx-opacity-0 nx-transition-opacity [div:hover>&]:nx-opacity-100",
      "nx-flex nx-gap-1 nx-absolute nx-m-2 nx-right-0",
      filename ? "nx-top-8" : "nx-top-0"
    ].join(" ")
  }, /* @__PURE__ */ React43.createElement(Button, {
    tabIndex: -1,
    onClick: toggleWordWrap,
    className: "md:nx-hidden",
    title: "Toggle word wrap"
  }, /* @__PURE__ */ React43.createElement(WordWrapIcon, {
    className: "nx-pointer-events-none nx-h-4 nx-w-4"
  })), value && /* @__PURE__ */ React43.createElement(CopyToClipboard, {
    tabIndex: -1,
    value
  })));
};
var Td = (props) => /* @__PURE__ */ React52.createElement("td", __spreadValues2({
  className: "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600"
}, props));
var Table = (_a) => {
  var _b = _a, {
    className = ""
  } = _b, props = __objRest2(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React62.createElement("table", __spreadValues2({
    className: "nx-block nx-overflow-x-scroll " + className
  }, props));
};
var Th = (props) => /* @__PURE__ */ React72.createElement("th", __spreadValues2({
  className: "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600"
}, props));
var Tr = (props) => /* @__PURE__ */ React82.createElement("tr", __spreadValues2({
  className: "nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20"
}, props));

// src/mdx-components.tsx
var observer;
var setActiveAnchor;
var slugs = /* @__PURE__ */ new WeakMap();
if (IS_BROWSER) {
  observer || (observer = new IntersectionObserver(
    (entries) => {
      setActiveAnchor((f) => {
        const ret = __spreadValues({}, f);
        for (const entry of entries) {
          if ((entry == null ? void 0 : entry.rootBounds) && slugs.has(entry.target)) {
            const [slug, index] = slugs.get(entry.target);
            const aboveHalfViewport = entry.boundingClientRect.y + entry.boundingClientRect.height <= entry.rootBounds.y + entry.rootBounds.height;
            const insideHalfViewport = entry.intersectionRatio > 0;
            ret[slug] = {
              index,
              aboveHalfViewport,
              insideHalfViewport
            };
          }
        }
        let activeSlug = "";
        let smallestIndexInViewport = Infinity;
        let largestIndexAboveViewport = -1;
        for (let s in ret) {
          ret[s].isActive = false;
          if (ret[s].insideHalfViewport && ret[s].index < smallestIndexInViewport) {
            smallestIndexInViewport = ret[s].index;
            activeSlug = s;
          }
          if (smallestIndexInViewport === Infinity && ret[s].aboveHalfViewport && ret[s].index > largestIndexAboveViewport) {
            largestIndexAboveViewport = ret[s].index;
            activeSlug = s;
          }
        }
        if (ret[activeSlug])
          ret[activeSlug].isActive = true;
        return ret;
      });
    },
    {
      rootMargin: "0px 0px -50%",
      threshold: [0, 1]
    }
  ));
}
var createHeaderLink = (Tag, context) => function HeaderLink(_a) {
  var _b = _a, {
    children,
    id
  } = _b, props = __objRest(_b, [
    "children",
    "id"
  ]);
  setActiveAnchor != null ? setActiveAnchor : setActiveAnchor = useSetActiveAnchor();
  const obRef = useRef6(null);
  useEffect7(() => {
    const heading = obRef.current;
    if (!heading)
      return;
    slugs.set(heading, [id, context.index += 1]);
    observer.observe(heading);
    return () => {
      observer.disconnect();
      slugs.delete(heading);
      setActiveAnchor((f) => {
        const ret = __spreadValues({}, f);
        delete ret[id];
        return ret;
      });
    };
  }, []);
  return /* @__PURE__ */ React41.createElement(Tag, __spreadValues({
    className: cn16(
      "nx-font-semibold nx-tracking-tight",
      {
        h2: "nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400",
        h3: "nx-mt-8 nx-text-2xl",
        h4: "nx-mt-8 nx-text-xl",
        h5: "nx-mt-8 nx-text-lg",
        h6: "nx-mt-8 nx-text-base"
      }[Tag]
    )
  }, props), children, /* @__PURE__ */ React41.createElement("span", {
    className: "nx-absolute -nx-mt-20",
    id,
    ref: obRef
  }), /* @__PURE__ */ React41.createElement("a", {
    href: `#${id}`,
    className: "subheading-anchor"
  }));
};
var findSummary = (children) => {
  let summary = null;
  const restChildren = [];
  Children.forEach(children, (child, index) => {
    var _a;
    if (child && child.type === Summary) {
      summary || (summary = child);
      return;
    }
    let c = child;
    if (!summary && child && typeof child === "object" && child.type !== Details && "props" in child && child.props) {
      const result = findSummary(child.props.children);
      summary = result[0];
      c = cloneElement(child, __spreadProps(__spreadValues({}, child.props), {
        children: ((_a = result[1]) == null ? void 0 : _a.length) ? result[1] : void 0,
        key: index
      }));
    }
    restChildren.push(c);
  });
  return [summary, restChildren];
};
var Details = (_a) => {
  var _b = _a, {
    children,
    open
  } = _b, props = __objRest(_b, [
    "children",
    "open"
  ]);
  const [openState, setOpen] = useState9(!!open);
  const [summary, restChildren] = findSummary(children);
  const [delayedOpenState, setDelayedOpenState] = useState9(openState);
  useEffect7(() => {
    if (openState) {
      setDelayedOpenState(true);
    } else {
      const timeout = setTimeout(() => setDelayedOpenState(openState), 500);
      return () => clearTimeout(timeout);
    }
  }, [openState]);
  return /* @__PURE__ */ React41.createElement("details", __spreadValues(__spreadProps(__spreadValues({
    className: "nx-my-4 nx-rounded nx-border nx-border-gray-200 nx-bg-white nx-p-2 nx-shadow-sm first:nx-mt-0 dark:nx-border-neutral-800 dark:nx-bg-neutral-900"
  }, props), {
    open: delayedOpenState
  }), openState && { "data-expanded": true }), /* @__PURE__ */ React41.createElement(DetailsProvider, {
    value: setOpen
  }, summary), /* @__PURE__ */ React41.createElement(Collapse, {
    open: openState
  }, restChildren));
};
var Summary = (props) => {
  const setOpen = useDetails();
  return /* @__PURE__ */ React41.createElement("summary", __spreadProps(__spreadValues({
    className: cn16(
      "nx-cursor-pointer nx-list-none nx-p-1 nx-transition-colors hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800",
      "before:nx-mr-1 before:nx-inline-block before:nx-transition-transform before:nx-content-[''] dark:before:nx-invert",
      "rtl:before:nx-rotate-180 [[data-expanded]>&]:before:nx-rotate-90"
    )
  }, props), {
    onClick: (e) => {
      e.preventDefault();
      setOpen((v) => !v);
    }
  }));
};
var A = (_a) => {
  var _b = _a, { href = "" } = _b, props = __objRest(_b, ["href"]);
  return /* @__PURE__ */ React41.createElement(Anchor, __spreadValues({
    href,
    newWindow: href.startsWith("https://")
  }, props));
};
var getComponents = ({
  isRawLayout,
  components
}) => {
  if (isRawLayout) {
    return { a: A };
  }
  const context = { index: 0 };
  return __spreadValues({
    h1: (props) => /* @__PURE__ */ React41.createElement("h1", __spreadValues({
      className: "nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight"
    }, props)),
    h2: createHeaderLink("h2", context),
    h3: createHeaderLink("h3", context),
    h4: createHeaderLink("h4", context),
    h5: createHeaderLink("h5", context),
    h6: createHeaderLink("h6", context),
    ul: (props) => /* @__PURE__ */ React41.createElement("ul", __spreadValues({
      className: "nx-mt-6 nx-list-disc first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6"
    }, props)),
    ol: (props) => /* @__PURE__ */ React41.createElement("ol", __spreadValues({
      className: "nx-mt-6 nx-list-decimal first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6"
    }, props)),
    li: (props) => /* @__PURE__ */ React41.createElement("li", __spreadValues({
      className: "nx-my-2"
    }, props)),
    blockquote: (props) => /* @__PURE__ */ React41.createElement("blockquote", __spreadValues({
      className: cn16(
        "nx-mt-6 nx-border-gray-300 nx-italic nx-text-gray-700 dark:nx-border-gray-700 dark:nx-text-gray-400",
        "first:nx-mt-0 ltr:nx-border-l-2 ltr:nx-pl-6 rtl:nx-border-r-2 rtl:nx-pr-6"
      )
    }, props)),
    hr: (props) => /* @__PURE__ */ React41.createElement("hr", __spreadValues({
      className: "nx-my-8 dark:nx-border-gray-900"
    }, props)),
    a: (props) => /* @__PURE__ */ React41.createElement(A, __spreadProps(__spreadValues({}, props), {
      className: "nx-text-primary-500 nx-underline nx-decoration-from-font [text-underline-position:under]"
    })),
    table: (props) => /* @__PURE__ */ React41.createElement(Table, __spreadValues({
      className: "nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0"
    }, props)),
    p: (props) => /* @__PURE__ */ React41.createElement("p", __spreadValues({
      className: "nx-mt-6 nx-leading-7 first:nx-mt-0"
    }, props)),
    tr: Tr,
    th: Th,
    td: Td,
    details: Details,
    summary: Summary,
    pre: Pre,
    code: Code
  }, components);
};

// src/index.tsx
import { useMDXComponents } from "@mdx-js/react";
import { useTheme as useTheme3 } from "next-themes";
function useDirectoryInfo(pageMap) {
  const { locale = DEFAULT_LOCALE, defaultLocale, route } = useRouter9();
  return useMemo5(() => {
    const fsPath = getFSRoute(route, locale);
    return normalizePages({
      list: pageMap,
      locale,
      defaultLocale,
      route: fsPath
    });
  }, [pageMap, locale, defaultLocale, route]);
}
var Body = ({
  themeContext,
  breadcrumb,
  timestamp,
  navigation,
  children
}) => {
  var _a;
  const config = useConfig();
  if (themeContext.layout === "raw") {
    return /* @__PURE__ */ React44.createElement("div", {
      className: "nx-w-full nx-overflow-x-hidden"
    }, children);
  }
  const date = themeContext.timestamp && config.gitTimestamp && timestamp ? new Date(timestamp) : null;
  const gitTimestampEl = date ? /* @__PURE__ */ React44.createElement("div", {
    className: "nx-mt-12 nx-mb-8 nx-block nx-text-xs nx-text-gray-500 ltr:nx-text-right rtl:nx-text-left dark:nx-text-gray-400"
  }, renderComponent(config.gitTimestamp, { timestamp: date })) : /* @__PURE__ */ React44.createElement("div", {
    className: "nx-mt-16"
  });
  const content = /* @__PURE__ */ React44.createElement(React44.Fragment, null, children, gitTimestampEl, navigation);
  const body = ((_a = config.main) == null ? void 0 : _a.call(config, { children: content })) || content;
  if (themeContext.layout === "full") {
    return /* @__PURE__ */ React44.createElement("article", {
      className: "nx-min-h-[calc(100vh-4rem)] nx-w-full nx-overflow-x-hidden nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]"
    }, body);
  }
  return /* @__PURE__ */ React44.createElement("article", {
    className: cn17(
      "nx-flex nx-min-h-[calc(100vh-4rem)] nx-w-full nx-min-w-0 nx-max-w-full nx-justify-center nx-pb-8 nx-pr-[calc(env(safe-area-inset-right)-1.5rem)]",
      themeContext.typesetting === "article" && "nextra-body-typesetting-article"
    )
  }, /* @__PURE__ */ React44.createElement("main", {
    className: "nx-w-full nx-min-w-0 nx-max-w-4xl nx-px-6 nx-pt-4 md:nx-px-8"
  }, breadcrumb, body));
};
var InnerLayout = ({
  filePath,
  pageMap,
  frontMatter,
  headings,
  timestamp,
  children
}) => {
  const config = useConfig();
  const {
    activeType,
    activeIndex,
    activeThemeContext,
    activePath,
    topLevelNavbarItems,
    docsDirectories,
    flatDirectories,
    flatDocsDirectories,
    directories
  } = useDirectoryInfo(pageMap);
  const themeContext = __spreadValues(__spreadValues({}, activeThemeContext), frontMatter);
  const hideSidebar = !themeContext.sidebar || themeContext.layout === "raw" || activeType === "page";
  const tocClassName = "nextra-toc nx-order-last nx-hidden nx-w-64 nx-shrink-0 xl:nx-block";
  const tocEl = activeType === "page" || !themeContext.toc || themeContext.layout !== "default" ? themeContext.layout !== "full" && themeContext.layout !== "raw" && /* @__PURE__ */ React44.createElement("div", {
    className: tocClassName
  }) : /* @__PURE__ */ React44.createElement("div", {
    className: cn17(tocClassName, "nx-px-4")
  }, renderComponent(config.toc.component, {
    headings: config.toc.float ? headings : [],
    filePath
  }));
  const { locale = DEFAULT_LOCALE } = useRouter9();
  const localeConfig = config.i18n.find((l) => l.locale === locale);
  const isRTL = localeConfig ? localeConfig.direction === "rtl" : config.direction === "rtl";
  const direction = isRTL ? "rtl" : "ltr";
  return /* @__PURE__ */ React44.createElement("div", {
    dir: direction
  }, /* @__PURE__ */ React44.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `document.documentElement.setAttribute('dir','${direction}')`
    }
  }), /* @__PURE__ */ React44.createElement(Head, null), /* @__PURE__ */ React44.createElement(Banner, null), themeContext.navbar && renderComponent(config.navbar, {
    flatDirectories,
    items: topLevelNavbarItems
  }), /* @__PURE__ */ React44.createElement("div", {
    className: cn17(
      "nx-mx-auto nx-flex",
      themeContext.layout !== "raw" && "nx-max-w-[90rem]"
    )
  }, /* @__PURE__ */ React44.createElement(ActiveAnchorProvider, null, /* @__PURE__ */ React44.createElement(Sidebar, {
    docsDirectories,
    flatDirectories,
    fullDirectories: directories,
    headings,
    asPopover: hideSidebar,
    includePlaceholder: themeContext.layout === "default"
  }), tocEl, /* @__PURE__ */ React44.createElement(SkipNavContent, null), /* @__PURE__ */ React44.createElement(Body, {
    themeContext,
    breadcrumb: activeType !== "page" && themeContext.breadcrumb ? /* @__PURE__ */ React44.createElement(Breadcrumb, {
      activePath
    }) : null,
    timestamp,
    navigation: activeType !== "page" && themeContext.pagination ? /* @__PURE__ */ React44.createElement(NavLinks, {
      flatDirectories: flatDocsDirectories,
      currentIndex: activeIndex
    }) : null
  }, /* @__PURE__ */ React44.createElement(MDXProvider, {
    components: getComponents({
      isRawLayout: themeContext.layout === "raw",
      components: config.components
    })
  }, children)))), themeContext.footer && renderComponent(config.footer.component, { menu: hideSidebar }));
};
function Layout(props) {
  const { route } = useRouter9();
  const context = globalThis.__nextra_pageContext__[route];
  if (!context)
    throw new Error(`No content found for ${route}.`);
  const { pageOpts, Content } = context;
  return /* @__PURE__ */ React44.createElement(ConfigProvider, {
    value: context
  }, /* @__PURE__ */ React44.createElement(InnerLayout, __spreadValues({}, pageOpts), /* @__PURE__ */ React44.createElement(Content, __spreadValues({}, props))));
}
export {
  Bleed,
  Callout,
  Collapse,
  Navbar,
  NotFoundPage,
  ServerSideErrorPage,
  Tab,
  Tabs,
  ThemeSwitch,
  Layout as default,
  useConfig,
  useMDXComponents,
  useTheme3 as useTheme
};
