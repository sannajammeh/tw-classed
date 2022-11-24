import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    {
      builder: "mkdist",
      input: "./src",
      outDir: "./dist/cjs",
      format: "cjs",
    },
    {
      builder: "mkdist",
      input: "./src",
      outDir: "./dist/esm",
      format: "esm",
      ext: "mjs",
    },
  ],
  declaration: true,
});
