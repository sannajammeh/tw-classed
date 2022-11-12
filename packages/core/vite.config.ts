/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: [resolve(__dirname, "src/index.ts")],
      formats: ["es", "cjs"],
    },
    outDir: "dist",
    minify: false,
  },

  test: {
    globals: true,
  },
});
