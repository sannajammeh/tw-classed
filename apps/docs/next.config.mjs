import Nextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: false,
  },
};

const withNextra = Nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_staticImage: true,
});

export default withNextra(nextConfig);
