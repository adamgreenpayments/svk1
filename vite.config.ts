import type { UserConfig } from 'vite';

import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import pkg from './package.json' assert {type: 'json'};

const config: UserConfig = {
// import pkg from './package.json' assert {type: 'json'};
// import { resolve } from 'path';
// /** @type {import('vite').UserConfig} */
// const config = {
        plugins: [sveltekit()],
        ssr: {
            noExternal: Object.keys(pkg.dependencies || {})
        },
        build: {
            // outDir: './builddist'
            // rollupOptions: {
            //     output: {
            //         intro: 'if(exports === undefined){var exports ={}; var self = {}}'
            //     }
            // }
        },
        resolve: {
            alias: {
            	'./runtimeConfig': './runtimeConfig.browser',
            	$stores: resolve(__dirname, './src/stores'),
            	$components: resolve(__dirname, './src/components')
            }
        }
// };

// export default config;


};

export default config;
