import Nextra from "nextra";

import fs from "fs";
import path from "path";
import process from "process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
  },
};

const currentDIR = process.cwd();
const reactChangelogPath = path.resolve(
  currentDIR,
  "../../packages/react",
  "CHANGELOG.md"
);

const coreChangelogPath = path.resolve(
  currentDIR,
  "../../packages/core",
  "CHANGELOG.md"
);

fs.copyFileSync(
  reactChangelogPath,
  path.resolve(currentDIR, "pages", "docs", "changelog.mdx")
);

fs.copyFileSync(
  coreChangelogPath,
  path.resolve(currentDIR, "pages", "core", "changelog.mdx")
);

const withNextra = Nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_staticImage: true,
});

export default withNextra(nextConfig);
