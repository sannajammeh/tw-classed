import {
  CheckIcon,
  CopyIcon,
  WordWrapIcon
} from "../chunk-XXFR3PNG.mjs";
import {
  __async,
  __objRest,
  __spreadValues
} from "../chunk-HIDP27A7.mjs";

// src/components/button.tsx
import React from "react";
var Button = (_a) => {
  var _b = _a, {
    children,
    className = ""
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ React.createElement("button", __spreadValues({
    className: [
      "nextra-button nx-transition-colors",
      "nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-2",
      "dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",
      className
    ].join(" ")
  }, props), children);
};

// src/components/copy-to-clipboard.tsx
import React2, {
  useCallback,
  useEffect,
  useState
} from "react";
var CopyToClipboard = (_a) => {
  var _b = _a, {
    value
  } = _b, props = __objRest(_b, [
    "value"
  ]);
  const [isCopied, setCopied] = useState(false);
  useEffect(() => {
    if (!isCopied)
      return;
    const timerId = setTimeout(() => {
      setCopied(false);
    }, 2e3);
    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);
  const handleClick = useCallback(() => __async(void 0, null, function* () {
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
  return /* @__PURE__ */ React2.createElement(Button, __spreadValues({
    onClick: handleClick,
    title: "Copy code"
  }, props), /* @__PURE__ */ React2.createElement(IconToUse, {
    className: "nx-pointer-events-none nx-h-4 nx-w-4"
  }));
};

// src/components/code.tsx
import React3 from "react";
var Code = (_a) => {
  var _b = _a, {
    children,
    className = ""
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  const hasLineNumbers = "data-line-numbers" in props;
  return /* @__PURE__ */ React3.createElement("code", __spreadValues({
    className: [
      "nx-border-black/5 nx-bg-black/5 nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em]",
      "dark:nx-border-white/10 dark:nx-bg-white/10",
      hasLineNumbers ? "[counter-reset:line]" : "",
      className
    ].join(" "),
    dir: "ltr"
  }, props), children);
};

// src/components/pre.tsx
import React4, { useCallback as useCallback2 } from "react";
var Pre = (_a) => {
  var _b = _a, {
    children,
    className = "",
    value,
    filename
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "value",
    "filename"
  ]);
  const toggleWordWrap = useCallback2(() => {
    const htmlDataset = document.documentElement.dataset;
    const hasWordWrap = "nextraWordWrap" in htmlDataset;
    if (hasWordWrap) {
      delete htmlDataset.nextraWordWrap;
    } else {
      htmlDataset.nextraWordWrap = "";
    }
  }, []);
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, filename && /* @__PURE__ */ React4.createElement("div", {
    className: "nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200"
  }, filename), /* @__PURE__ */ React4.createElement("pre", __spreadValues({
    className: [
      "nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-font-medium nx-subpixel-antialiased dark:nx-bg-primary-300/10",
      "contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",
      filename ? "nx-pt-12 nx-pb-4" : "nx-py-4",
      className
    ].join(" ")
  }, props), children), /* @__PURE__ */ React4.createElement("div", {
    className: [
      "nx-opacity-0 nx-transition-opacity [div:hover>&]:nx-opacity-100",
      "nx-flex nx-gap-1 nx-absolute nx-m-2 nx-right-0",
      filename ? "nx-top-8" : "nx-top-0"
    ].join(" ")
  }, /* @__PURE__ */ React4.createElement(Button, {
    tabIndex: -1,
    onClick: toggleWordWrap,
    className: "md:nx-hidden",
    title: "Toggle word wrap"
  }, /* @__PURE__ */ React4.createElement(WordWrapIcon, {
    className: "nx-pointer-events-none nx-h-4 nx-w-4"
  })), value && /* @__PURE__ */ React4.createElement(CopyToClipboard, {
    tabIndex: -1,
    value
  })));
};

// src/components/td.tsx
import React5 from "react";
var Td = (props) => /* @__PURE__ */ React5.createElement("td", __spreadValues({
  className: "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600"
}, props));

// src/components/table.tsx
import React6 from "react";
var Table = (_a) => {
  var _b = _a, {
    className = ""
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React6.createElement("table", __spreadValues({
    className: "nx-block nx-overflow-x-scroll " + className
  }, props));
};

// src/components/th.tsx
import React7 from "react";
var Th = (props) => /* @__PURE__ */ React7.createElement("th", __spreadValues({
  className: "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600"
}, props));

// src/components/tr.tsx
import React8 from "react";
var Tr = (props) => /* @__PURE__ */ React8.createElement("tr", __spreadValues({
  className: "nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20"
}, props));
export {
  Button,
  Code,
  CopyToClipboard,
  Pre,
  Table,
  Td,
  Th,
  Tr
};
