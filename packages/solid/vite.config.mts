/// <reference types="vitest" />
import { defineConfig } from "vite";
import path from "path";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

export default defineConfig({
	plugins: [
		dts({
			tsconfigPath: "./tsconfig.json",
			insertTypesEntry: true,
		}),
		solidPlugin(),
	],
	build: {
		minify: false,
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			formats: ["es", "cjs"],
			fileName: (format) => (format === "es" ? "index.mjs" : "index.js"),
		},
		rollupOptions: {
			external: [
				...Object.keys(pkg.dependencies || {}),
				...Object.keys(pkg.peerDependencies || {}),
				"solid-js",
				"solid-js/web",
				"solid-js/store",
			],
		},
	},
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: ["./test/setup.ts"],
	},
	resolve: {
		conditions: ["development", "browser"],
	},
});
