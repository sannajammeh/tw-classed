import { useConfig } from "nextra-theme-docs";
import { TbBrandTailwind } from "react-icons/tb";

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  docsRepositoryBase:
    "https://github.com/sannajammeh/tw-classed/tree/master/apps/beta-docs", // base URL for the docs repository
  useNextSeoProps: () => {
    const { frontMatter } = useConfig();

    let section = "TwClassed";

    const defaultTitle = frontMatter.overrideTitle || section;

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `%s - ${section}`,
    };
  },

  darkMode: true,
  project: {
    link: "https://github.com/sannajammeh/tw-classed",
  },
  sidebar: {
    titleComponent: ({ title, type }) => {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 0,
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
      <meta
        name="google-site-verification"
        content="aTSMCVyGalldJrWOIOo7ns7W-TWm5O4EXBEC173f1qE"
      />
    </>
  ),
  nextThemes: {
    defaultTheme: "dark",
  },

  components: {
    code: ({ children }) => {
      return (
        <code className="text-radix-blue11 bg-radix-blue3 px-[2px] rounded">
          {children}
        </code>
      );
    },
  },
};
