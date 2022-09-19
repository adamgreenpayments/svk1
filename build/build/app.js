import { ssr } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import * as user_hooks from "../../src/hooks/index.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<link rel=\"stylesheet\" href=\"global.css\" />\n\n\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t" + head + "\n</head>\n\n<body>\n\t<div id=\"svelte\">" + body + "</div>\n</body>\n\n</html>\n<!-- https://github.com/aws/aws-amplify/issues/678 fix: -->\n<script>\n\n\tconst isBrowser = () => typeof window !== 'undefined';\n\tconst isGlobal = () => typeof global !== 'undefined';\n\n\t// https://github.com/aws-amplify/amplify-js/issues/7499#issuecomment-804386820\n\tvar exports = {};\n\n\tif (!isGlobal() && isBrowser()) {\n\t\tvar global = window;\n\t}\n\n</script>\n<!-- https://github.com/aws/aws-amplify/issues/678 fix end-->";

set_paths({"base":"","assets":"/."});

// allow paths to be overridden in svelte-kit start
export function init({ paths }) {
	set_paths(paths);
}

const d = decodeURIComponent;
const empty = () => ({});

const components = [
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/signin.svelte"),
	() => import("../../src/routes/signup.svelte"),
	() => import("../../src/routes/about/index.svelte"),
	() => import("../../src/routes/three.svelte"),
	() => import("../../src/routes/two.svelte")
];



const client_component_lookup = {".svelte/build/runtime/internal/start.js":"start-7200f40d.js","src/routes/index.svelte":"pages/index.svelte-171e4366.js","src/routes/signin.svelte":"pages/signin.svelte-b582f060.js","src/routes/signup.svelte":"pages/signup.svelte-fc034a4f.js","src/routes/about/index.svelte":"pages/about/index.svelte-7ceeb6fa.js","src/routes/three.svelte":"pages/three.svelte-7804f6f1.js","src/routes/two.svelte":"pages/two.svelte-24edcece.js"};

const manifest = {
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"global.css","size":2282,"type":"text/css"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: () => import("../../src/routes/$layout.svelte"),
	error: () => import("../../src/routes/$error.svelte"),
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						parts: [{ id: "src/routes/index.svelte", load: components[0] }],
						css: ["assets/start-f4790350.css", "assets/aws-d93494e5.css", "assets/pages/index.svelte-226ff78d.css"],
						js: ["start-7200f40d.js", "chunks/index-2b079c53.js", "chunks/aws-add3e71f.js", "chunks/auth-d2666f70.js", "pages/index.svelte-171e4366.js"]
					},
		{
						type: 'endpoint',
						pattern: /^\/localStore\/?$/,
						params: empty,
						load: () => import("../../src/routes/localStore.ts")
					},
		{
						type: 'page',
						pattern: /^\/signin\/?$/,
						params: empty,
						parts: [{ id: "src/routes/signin.svelte", load: components[1] }],
						css: ["assets/start-f4790350.css", "assets/aws-d93494e5.css", "assets/validation-fe291d94.css"],
						js: ["start-7200f40d.js", "chunks/index-2b079c53.js", "chunks/aws-add3e71f.js", "chunks/auth-d2666f70.js", "pages/signin.svelte-b582f060.js", "chunks/validation-4fe040bf.js"]
					},
		{
						type: 'page',
						pattern: /^\/signup\/?$/,
						params: empty,
						parts: [{ id: "src/routes/signup.svelte", load: components[2] }],
						css: ["assets/start-f4790350.css", "assets/aws-d93494e5.css", "assets/validation-fe291d94.css"],
						js: ["start-7200f40d.js", "chunks/index-2b079c53.js", "chunks/aws-add3e71f.js", "chunks/auth-d2666f70.js", "pages/signup.svelte-fc034a4f.js", "chunks/validation-4fe040bf.js"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						parts: [{ id: "src/routes/about/index.svelte", load: components[3] }],
						css: ["assets/start-f4790350.css", "assets/aws-d93494e5.css"],
						js: ["start-7200f40d.js", "chunks/index-2b079c53.js", "chunks/aws-add3e71f.js", "chunks/auth-d2666f70.js", "pages/about/index.svelte-7ceeb6fa.js"]
					},
		{
						type: 'endpoint',
						pattern: /^\/store\/?$/,
						params: empty,
						load: () => import("../../src/routes/store.ts")
					},
		{
						type: 'page',
						pattern: /^\/three\/?$/,
						params: empty,
						parts: [{ id: "src/routes/three.svelte", load: components[4] }],
						css: ["assets/start-f4790350.css", "assets/aws-d93494e5.css"],
						js: ["start-7200f40d.js", "chunks/index-2b079c53.js", "chunks/aws-add3e71f.js", "chunks/auth-d2666f70.js", "pages/three.svelte-7804f6f1.js"]
					},
		{
						type: 'page',
						pattern: /^\/two\/?$/,
						params: empty,
						parts: [{ id: "src/routes/two.svelte", load: components[5] }],
						css: ["assets/start-f4790350.css", "assets/aws-d93494e5.css"],
						js: ["start-7200f40d.js", "chunks/index-2b079c53.js", "chunks/aws-add3e71f.js", "chunks/auth-d2666f70.js", "pages/two.svelte-24edcece.js"]
					}
	]
};

const get_hooks = hooks => ({
	getContext: hooks.getContext || (() => ({})),
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || ((request, render) => render(request))
});

const hooks = get_hooks(user_hooks);

export function render(request, {
	paths = {"base":"","assets":"/."},
	local = false,
	only_render_prerenderable_pages = false,
	get_static_file
} = {}) {
	return ssr({
		...request,
		host: request.headers["host"]
	}, {
		paths,
		local,
		template,
		manifest,
		target: "#svelte",
		entry: "/./_app/start-7200f40d.js",
		root,
		hooks,
		dev: false,
		amp: false,
		only_render_prerenderable_pages,
		app_dir: "_app",
		get_component_path: id => "/./_app/" + client_component_lookup[id],
		get_stack: error => error.stack,
		get_static_file,
		get_amp_css: dep => amp_css_lookup[dep]
	});
}