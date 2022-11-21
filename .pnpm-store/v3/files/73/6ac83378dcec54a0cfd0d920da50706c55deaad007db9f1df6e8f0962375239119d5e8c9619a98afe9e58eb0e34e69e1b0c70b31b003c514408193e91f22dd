import {
  normalizeMeta
} from "./chunk-NIIBOJPU.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HIDP27A7.mjs";

// src/context.ts
function getContext(name) {
  const context = globalThis.__nextra_internal__;
  if (!context) {
    throw new Error(
      `Nextra context not found. Please make sure you are using "${name}" of "nextra/context" on a Nextra page.`
    );
  }
  return context;
}
function filter(pageMap, activeLevel) {
  let activeLevelPages = [];
  const items = [];
  const meta = pageMap.find(
    (item) => item.kind === "Meta"
  ).data;
  for (const item of pageMap) {
    if (item.kind === "Meta")
      continue;
    const page = __spreadProps(__spreadValues({}, item), {
      meta: normalizeMeta(meta[item.name])
    });
    if (page.kind === "Folder") {
      const filtered = filter(page.children, activeLevel);
      page.children = filtered.items;
      if (filtered.activeLevelPages.length) {
        activeLevelPages = filtered.activeLevelPages;
      } else if (page.route === activeLevel) {
        if (!activeLevelPages.length) {
          activeLevelPages = page.children;
        }
      }
    }
    items.push(page);
  }
  const metaKeys = Object.keys(meta);
  items.sort((a, b) => {
    const indexA = metaKeys.indexOf(a.name);
    const indexB = metaKeys.indexOf(b.name);
    if (indexA === -1 && indexB === -1)
      return a.name < b.name ? -1 : 1;
    if (indexA === -1)
      return 1;
    if (indexB === -1)
      return -1;
    return indexA - indexB;
  });
  return { items, activeLevelPages };
}
function getAllPages() {
  const { pageMap } = getContext("getAllPages");
  return filter(pageMap).items;
}
function getCurrentLevelPages() {
  const { pageMap, route } = getContext("getCurrentLevelPages");
  return filter(pageMap, route).activeLevelPages;
}
function getPagesUnderRoute(route) {
  const { pageMap } = getContext("getPagesUnderRoute");
  return filter(pageMap, route).activeLevelPages;
}
export {
  getAllPages,
  getCurrentLevelPages,
  getPagesUnderRoute
};
