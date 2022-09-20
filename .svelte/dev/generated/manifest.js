import * as layout from "../../../src/routes/$layout.svelte";

const components = [
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/signin.svelte"),
	() => import("../../../src/routes/signup.svelte"),
	() => import("../../../src/routes/about/index.svelte"),
	() => import("../../../src/routes/three.svelte"),
	() => import("../../../src/routes/two.svelte")
];

const d = decodeURIComponent;
const empty = () => ({});

export const routes = [
	// src/routes/index.svelte
[/^\/$/, [components[0]]],

// src/routes/localStore.ts
[/^\/localStore\/?$/],

// src/routes/signin.svelte
[/^\/signin\/?$/, [components[1]]],

// src/routes/signup.svelte
[/^\/signup\/?$/, [components[2]]],

// src/routes/about/index.svelte
[/^\/about\/?$/, [components[3]]],

// src/routes/store.ts
[/^\/store\/?$/],

// src/routes/three.svelte
[/^\/three\/?$/, [components[4]]],

// src/routes/two.svelte
[/^\/two\/?$/, [components[5]]]
];

export { layout };