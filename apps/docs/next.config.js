/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "/docs/introduction",
      },
    ];
  },
};
