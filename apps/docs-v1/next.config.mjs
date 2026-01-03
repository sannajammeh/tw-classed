import Nextra from "nextra";

import fsp from "fs/promises";
import path from "path";
import process from "process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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

const solidChangelogPath = path.resolve(
  currentDIR,
  "../../packages/solid",
  "CHANGELOG.md"
);

const withNextra = Nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_staticImage: true,
});

export default async (phase, {}) => {
  if (phase === "phase-production-build") {
    console.info("info  - Generating changelog pages...");
    await Promise.all([
      fsp.copyFile(
        reactChangelogPath,
        path.resolve(currentDIR, "pages", "docs", "changelog.mdx")
      ),
      fsp.copyFile(
        coreChangelogPath,
        path.resolve(currentDIR, "pages", "core", "changelog.mdx")
      ),
      fsp.copyFile(
        solidChangelogPath,
        path.resolve(currentDIR, "pages", "solid", "changelog.mdx")
      ),
    ]);
  }

  const config = withNextra(nextConfig);
  return config;
};
