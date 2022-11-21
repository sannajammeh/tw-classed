import MagicString from 'magic-string';

/**
 * A rollup plugin that preserves shebang/hashbang prefixes in your entry modules.
 * @param {object} [options]
 * @param {string} [options.shebang] A custom shebang/hashbang to use in place of the detected one.
 * @returns {import('rollup').Plugin}
 */
export default function shebangPlugin(options = {}) {
	const shebangs = new Map();

	return {
		name: 'preserve-shebang',
		transform(code, mod) {
			let shebang;
			code = code.replace(/^#![^\n]*/, match => ((shebang = match), ''));
			if (!shebang) return null;
			shebangs.set(mod, shebang);
			return { code, map: null };
		},
		renderChunk(code, chunk, { sourcemap }) {
			let shebang = shebangs.get(chunk.facadeModuleId);
			if (!shebang) return null;
			const s = new MagicString(code);
			s.prepend(`${options.shebang || shebang}\n`);
			return {
				code: s.toString(),
				map: sourcemap ? s.generateMap({ hires: true }) : null
			};
		}
	};
}
