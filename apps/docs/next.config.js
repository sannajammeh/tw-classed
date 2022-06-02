/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "/docs/installation",
      },
    ];
  },
};
