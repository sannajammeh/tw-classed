const { readFile, writeFile } = require("node:fs/promises");
const path = require("node:path");

async function appendUseClient(filePath) {
	const resolvedPath = path.join(__dirname, "../", filePath);
	const file = await readFile(resolvedPath, "utf8");
	const insert = Buffer.from('"use client"; \n');

	// Insert "use client" at the beginning of the file
	const final = insert.toString() + file;
	await writeFile(resolvedPath, final);
}

const run = async () => {
	await Promise.all([
		appendUseClient("dist/index.js"),
		appendUseClient("dist/index.cjs"),
	]);
};

run();
