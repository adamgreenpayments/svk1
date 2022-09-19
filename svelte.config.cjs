// const node = require('@sveltejs/adapter-node');
import st from '@sveltejs/adapter-static';
// import st from '@sveltejs/adapter-static';

import { resolveConfig } from 'vite';
import pkg from './package.json';
// import { resolve } from 'path';
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
			postcss: true
		})
	],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		// adapter: node(),
		adapter: st(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			/**
			 * a.s. uncomment below when building w/ npm run build
			 * comment when using: npm run dev
			 */
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			build: {
				rollupOptions: {
					output: {
						intro: 'if(exports === undefined){var exports ={}; var self = {}}'
					}
				}
			},
			resolve: {
				// alias: {
				// 	'./runtimeConfig': './runtimeConfig.browser',
				// 	$stores: resolve(__dirname, './src/stores'),
				// 	$components: resolve(__dirname, './src/components')
				// }
			}
		}
	}
};
