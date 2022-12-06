//
// See: https://kentcdodds.com/blog/profile-a-react-app-for-performance#build-and-measure-the-production-app
// See: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
const { TerserPlugin } = require("next/dist/compiled/terser");

module.exports = {
  webpack: (config, options) => {
    //
    // Use profiler-enabled React builds
    //
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
    };

    //
    // Disable mangling for easier profiling
    // WARNING: This increases bundle size, DO NOT DO THIS in production!
    //
    const terser = config.optimization.minimizer.find(
      (plugin) =>
        typeof plugin.options !== "undefined" &&
        typeof plugin.options.terserOptions !== "undefined"
    );
    if (terser) {
      terser.options.terserOptions = {
        ...terser.options.terserOptions,
        keep_classnames: true,
        keep_fnames: true,
      };
    }

    return config;
  },
};
