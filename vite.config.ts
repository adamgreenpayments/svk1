import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react'
import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import pkg from './package.json' assert {type: 'json'};
import { optimizeCss, optimizeImports } from "carbon-preprocess-svelte";

const config: UserConfig = {
// import pkg from './package.json' assert {type: 'json'};
// import { resolve } from 'path';
// /** @type {import('vite').UserConfig} */
// const config = {
        server: {
            fs: {
                allow: ['..']
            }
        },
        optimizeDeps: {
            include: ['just-throttle', 'dayjs','carbon-components-svelte','carbon-icons-svelte','@carbon/themes']
        },
        
        appType: "custom",
        plugins: [sveltekit(),optimizeCss()],
        ssr: {
            noExternal: Object.keys(pkg.dependencies || {})
        },
        build: {
            commonjsOptions: {
              transformMixedEsModules: true,
            }
        },
        resolve: {
            alias: 
                {
                './runtimeConfig': './runtimeConfig.browser',
            	$stores: resolve(__dirname, './src/stores'),
            	$components: resolve(__dirname, './src/components'),
                }
            }

          
// };

// export default config;


};

export default config;
