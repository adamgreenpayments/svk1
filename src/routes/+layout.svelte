<script lang="ts">
	/**
	 * `amp` is `true` or `false` depending on the corresponding
	 * value in your [project configuration](#configuration)
	 * `browser` is `true` or `false` depending on whether the app
	 * is running in the browser or on the server
	 * `dev` is `true` in development mode, `false` in production
	 */
	import 'carbon-components-svelte/css/all.css';
	import Theme from 'carbon-components-svelte/src/Theme/Theme.svelte';
	import SideNavMenuItem from 'carbon-components-svelte/src/UIShell/SideNavMenuItem.svelte';
	import '../app.css';
	import { onDestroy, onMount, setContext } from 'svelte';
	import type { Unsubscriber } from 'svelte/store';
	import { writable } from 'svelte/store';
	import Nav from '$lib/CarbonNav.svelte';
	import amplifyStore from '$stores/amplify';
	import type { CognitoUser } from '@aws-amplify/auth';
	import { Amplify, API, Auth, graphqlOperation, Storage } from 'aws-amplify';
	import { Content, Grid } from 'carbon-components-svelte';
    import awsconfig from '../aws-exports';
    Amplify.configure(awsconfig);
	const authStore = writable<CognitoUser | undefined>();

	setContext('authStore', authStore);

	let segment;
	let unsubscribe: Unsubscriber;
	let cognitoUser: CognitoUser;
    $: layoutLoaded = false;

	$: if (cognitoUser) {
		console.log('layout, cognito user:', {
			cognitoUser
		});
		console.log('email:', cognitoUser.getUsername());
	}

	onMount(async () => {
		// let theme = "white"; // "white" | "g10" | "g80" | "g90" | "g100"
		// document.documentElement.setAttribute("theme", theme);
		// unsubscribe = authUser.subscribe((user) => {
		//     if (user) {
		//         cognitoUser = user;
		//     }
		// });
		try {
			amplifyStore.setAwsAmplify(Amplify);
			amplifyStore.setAwsAPI(API);
			amplifyStore.setAwsAuth(Auth);
			amplifyStore.setAwsGraphqlOperation(graphqlOperation);
			amplifyStore.setAwsStorage(Storage);

			console.log('layout', {
				Amplify,
				API,
				graphqlOperation,
				Auth,
				Storage
			});

			if (!cognitoUser) {
				console.log('layout: !cognitoUser');
			}
		} catch (error) {
			console.log(error);
		}
        layoutLoaded = true;
	});

	onDestroy(() => {
		if (unsubscribe) unsubscribe();
	});
</script>

<Theme
	theme="g90"
	tokens={{
		'ui-background': 'hsl(var(--b1))'
	}}
/>
{#if layoutLoaded}
<Nav />
<Content>
	<Grid>
		<slot />
	</Grid>
</Content>
{/if}
