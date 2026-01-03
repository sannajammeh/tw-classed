const currentDir = process.cwd();
import path from "path";
import fs from "fs/promises";

export const getGuides = async () => {
  const guidesJson = await fs.readFile(
    path.join(currentDir, "pages", "docs", "guide", "_meta.json")
  );
};
