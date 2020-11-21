export default {
	input: 'index.js',
	output: [
		{ file: 'index.cjs.js', format: 'cjs', sourcemap: true },
		{ file: 'index.es.mjs', format: 'es', sourcemap: true }
	],
	plugins: []
};
