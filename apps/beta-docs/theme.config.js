import Link from "next/link";
import { TbBrandTailwind } from "react-icons/tb";

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  docsRepositoryBase:
    "https://github.com/sannajammeh/tw-classed/tree/master/apps/beta-docs", // base URL for the docs repository
  titleSuffix: " - TwClassed",
  darkMode: true,
  project: {
    link: "https://github.com/sannajammeh/tw-classed",
  },
  unstable_flexsearch: true,
  unstable_staticImage: true,
  navigation: {
    next: true,
    prev: true,
  },
  footer: {
    text: `MIT ${new Date().getFullYear()} © Sanna Jammeh.`,
  },
  toc: {
    float: true,
  },
  logo: (
    <div className="flex items-center gap-1">
      <TbBrandTailwind size="1.75rem" />
      <span>TwClassed</span>
    </div>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Create reusable Tailwind css components in React and vanilla js"
      />
      <meta name="og:title" content="TwClassed - Tailwind made reusable" />
    </>
  ),
  nextThemes: {
    defaultTheme: "dark",
  },
};
