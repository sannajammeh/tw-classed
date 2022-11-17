const arg = require("arg");
const path = require("path");
const fs = require("fs-extra");
const Kleur = require("kleur");
const shell = require("shelljs");
require("dotenv/config");
const CURRENT_DIR = path.resolve(__dirname, "./");
const Logger = console;

/**
 * Login to npm
 */

const args = arg({
  "--packages": String,
  "--tag": String,
});

const tag = args["--tag"] || "latest";

const packages = args["--packages"]?.split(",");
Logger.log(Kleur.blue(`Starting turbo build for ${packages.join(", ")}`));

shell.exec(
  `yarn run build --filter=${packages.length < 1 ? "/packages/*" : packages[0]}`
);

const coreConfig = {
  packageName: "@tw-classed/core",
  "package.json": path.join(__dirname, "../packages/core", "package.json"),
  dependsOn: [],
};

const reactConfig = {
  packageName: "@tw-classed/react",
  "package.json": path.join(__dirname, "../packages/react", "package.json"),
  dependsOn: [coreConfig],
};

const configs = {
  core: coreConfig,
  react: reactConfig,
};

async function start() {
  shell.exec(`npm config set _authToken ${process.env.NPM_TOKEN}`);

  Logger.log(Kleur.blue(`Starting publish task for ${packages.join(", ")}`));

  Logger.log(Kleur.blue(`Cleaning dist folder`));
  await fs.remove(path.join(CURRENT_DIR, "dist"));

  let error = null;
  try {
    await Promise.allSettled(packages.map((package) => runTask(package)));
  } catch (error) {
    Logger.error(error);
    error = error;
  } finally {
    // Remove dist folder

    Logger.log(
      error
        ? Kleur.yellow("Task completed with errors, see above.")
        : Kleur.green(`Task Completed`)
    );
  }
}

async function runTask(package) {
  Logger.log(Kleur.yellow(`Running task for ${package}`));
  const packagePath = path.join(__dirname, "../packages", package);
  const outPath = path.join(CURRENT_DIR, "dist", package);

  const packageJson = require(path.join(packagePath, "package.json"));
  const config = configs[package];
  if (!packageJson) return console.error(`Package ${package} not found`);
  if (!config) return console.error(`Package ${package} not found in configs`);

  const { packageName, dependsOn } = config;

  // Copy all files to release folder
  await fs.copy(packagePath, outPath, {
    filter: (n) => {
      return !n.includes("node_modules");
    },
  });

  // Populate package.json with correct version from dependsOn
  dependsOn.forEach((dep) => {
    const depPackageJson = require(dep["package.json"]);
    if (!depPackageJson)
      return console.error(`Package ${dep.packageName} not found`);
    if (!packageJson.dependencies) packageJson.dependencies = {};

    packageJson.dependencies[dep.packageName] = depPackageJson.version;

    // Remove dev and peer dependencies of dependsOn
    delete packageJson.devDependencies?.[dep.packageName];
    delete packageJson.peerDependencies?.[dep.packageName];
  });

  // Write package.json to release folder
  await fs.writeFile(
    path.join(outPath, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );

  Logger.log(Kleur.yellow(`Publishing ${packageName}`));
  shell.cd(outPath);
  shell.exec(`npm publish --access public --tag ${tag} --dry-run`);

  if (result.stderr) throw new Error(result.stderr);

  console.log(result.stdout);

  console.log(Kleur.yellow(`Package ${packageName} published`));
}

start();
