// const node = require('@sveltejs/adapter-node');
// import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';
import { adapter } from 'sveltekit-adapter-aws';

import { resolveConfig } from 'vite';
import { optimizeImports } from "carbon-preprocess-svelte";

import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
export default {

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		// optimizeImports(),
		preprocess({
			postcss: true,
		  }),
	], 
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		// adapter: node(),
		adapter: adapter({
			autoDeploy: true,
			FQDN: "omniaccept.adambasloe.com"
		})
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',

	}
};
