import { promises } from 'fs';
import { g as getWorkerState, a as resetModules } from './chunk-typecheck-constants.4891f22f.js';
import { v as vi } from './chunk-runtime-test-state.3cbc4575.js';
import { a as envs } from './chunk-env-node.67948209.js';
import { a as setupGlobalEnv, s as startTests, w as withEnv } from './chunk-runtime-setup.419ccdd8.js';
import 'path';
import './chunk-utils-env.03f840f2.js';
import 'tty';
import 'url';
import 'local-pkg';
import './chunk-runtime-chain.a0b441dc.js';
import 'util';
import 'chai';
import './vendor-_commonjsHelpers.addc3445.js';
import './chunk-runtime-rpc.1e7530d3.js';
import './chunk-utils-timers.06f993db.js';
import './chunk-utils-source-map.c6dfbbc1.js';
import './spy.js';
import 'tinyspy';
import 'console';
import 'perf_hooks';
import './chunk-integrations-coverage.befed097.js';
import './chunk-runtime-error.6287172c.js';
import 'source-map';

function groupBy(collection, iteratee) {
  return collection.reduce((acc, item) => {
    const key = iteratee(item);
    acc[key] || (acc[key] = []);
    acc[key].push(item);
    return acc;
  }, {});
}
async function run(files, config) {
  await setupGlobalEnv(config);
  const workerState = getWorkerState();
  if (config.browser) {
    workerState.mockMap.clear();
    await startTests(files, config);
    return;
  }
  const filesWithEnv = await Promise.all(files.map(async (file) => {
    var _a, _b;
    const code = await promises.readFile(file, "utf-8");
    const env = ((_a = code.match(/@(?:vitest|jest)-environment\s+?([\w-]+)\b/)) == null ? void 0 : _a[1]) || config.environment || "node";
    const envOptions = JSON.parse(((_b = code.match(/@(?:vitest|jest)-environment-options\s+?(.+)/)) == null ? void 0 : _b[1]) || "null");
    return {
      file,
      env,
      envOptions: envOptions ? { [env]: envOptions } : null
    };
  }));
  const filesByEnv = groupBy(filesWithEnv, ({ env }) => env);
  const orderedEnvs = envs.concat(
    Object.keys(filesByEnv).filter((env) => !envs.includes(env))
  );
  for (const env of orderedEnvs) {
    const environment = env;
    const files2 = filesByEnv[environment];
    if (!files2 || !files2.length)
      continue;
    const filesByOptions = groupBy(files2, ({ envOptions }) => JSON.stringify(envOptions));
    for (const options of Object.keys(filesByOptions)) {
      const files3 = filesByOptions[options];
      if (!files3 || !files3.length)
        continue;
      await withEnv(environment, files3[0].envOptions || config.environmentOptions || {}, async () => {
        for (const { file } of files3) {
          if (config.isolate) {
            workerState.mockMap.clear();
            resetModules(workerState.moduleCache, true);
          }
          workerState.filepath = file;
          await startTests([file], config);
          workerState.filepath = void 0;
          vi.resetConfig();
        }
      });
    }
  }
}

export { run };
