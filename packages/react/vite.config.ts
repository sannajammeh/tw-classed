/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: ["./src/index.tsx"],
			formats: ["es", "cjs"],
		},
		outDir: "dist",
		minify: false,
		rollupOptions: {
			external: ["react", "react-dom", "@tw-classed/core"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},

	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./test/setup.ts",
		typecheck: {
			include: ["./test/**/*.{ts,tsx}"],
			tsconfig: "./tsconfig.test.json",
		},
	},
});
