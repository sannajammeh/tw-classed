import "./chunk-HIDP27A7.mjs";

// src/locales.ts
import { NextResponse } from "next/server";
function getCookie(cookies, key) {
  if (typeof cookies.get === "function") {
    return cookies.get(key);
  }
  return cookies[key];
}
function locales(request) {
  const { nextUrl } = request;
  const shouldHandleLocale = !/^\/(api|_next)\//.test(nextUrl.pathname) && !/\.(jpe?g|svg|png|webmanifest)$/.test(nextUrl.pathname) && nextUrl.locale !== "" && nextUrl.pathname !== "/500";
  if (!shouldHandleLocale)
    return;
  const fullUrl = nextUrl.toString();
  let localeInPath = fullUrl.slice(fullUrl.indexOf("//" + nextUrl.host) + nextUrl.host.length + 2);
  localeInPath = localeInPath.replace(nextUrl.pathname + nextUrl.search, "").replace("/", "");
  let finalLocale;
  if (localeInPath) {
    finalLocale = localeInPath;
  } else {
    const clientLocale = getCookie(request.cookies, "NEXT_LOCALE");
    if (clientLocale) {
      try {
        nextUrl.locale = clientLocale;
      } catch (err) {
      }
    }
    finalLocale = nextUrl.locale;
    if (finalLocale !== nextUrl.defaultLocale) {
      return NextResponse.redirect(
        new URL(
          "/" + finalLocale + nextUrl.pathname + nextUrl.search,
          request.url
        )
      );
    }
  }
  let pathname = nextUrl.pathname || "/";
  if (pathname === "/")
    pathname += "index";
  else if (pathname.endsWith("/"))
    pathname = pathname.slice(0, -1);
  if (!pathname.endsWith("." + finalLocale)) {
    return NextResponse.rewrite(
      new URL(
        "/" + finalLocale + pathname + "." + finalLocale + nextUrl.search,
        request.url
      )
    );
  }
}
function withLocales(middleware) {
  return (...args) => {
    return locales(args[0]) || middleware(...args);
  };
}
export {
  locales,
  withLocales
};
