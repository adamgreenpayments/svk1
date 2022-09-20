// const node = require('@sveltejs/adapter-node');
// import st from '@sveltejs/adapter-static';
// import st from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-auto';

import { resolveConfig } from 'vite';

import sveltePreprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
export default {

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: 'postcss'
			},
			postcss: false
		})
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		// adapter: node(),
		adapter: adapter(),
		outDir: './builddist'
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',

	}
};
