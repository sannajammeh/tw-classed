import { getTsconfig, parseTsconfig, type TsConfigJson } from 'get-tsconfig';
import path from 'path';

const cache = new Map<string, TsConfigJson.CompilerOptions>();

export const getOptions = (
  cwd: string,
  tsconfig?: string
) => {
  const cacheKey = `${cwd}:${tsconfig ?? 'undefined'}`;

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey) ?? {};
  }

  if (tsconfig && path.isAbsolute(tsconfig)) {
    const compilerOptions = parseTsconfig(tsconfig).compilerOptions ?? {};
    cache.set(cacheKey, compilerOptions);
    return compilerOptions;
  }

  let result = getTsconfig(cwd, tsconfig || 'tsconfig.json');
  // Only fallback to `jsconfig.json` when tsconfig can not be resolved AND custom tsconfig filename is not provided
  if (!result && !tsconfig) {
    result = getTsconfig(cwd, 'jsconfig.json');
  }

  const compilerOptions = result?.config.compilerOptions ?? {};
  cache.set(cacheKey, compilerOptions);
  return compilerOptions;
};
