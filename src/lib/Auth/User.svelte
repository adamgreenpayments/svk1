<script lang="ts">
	import { goto } from '$app/navigation';
	import { getStores, navigating, page } from '$app/stores';
	// import * as api from '$lib/api.js';

	import { createEventDispatcher, onMount, onDestroy, getContext } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { Unsubscriber } from 'svelte/store';
	import type { CognitoUser } from '@aws-amplify/auth';
	import { Button, Loading } from 'carbon-components-svelte';
	import type { Writable } from 'svelte/store';
	const authStore: Writable<CognitoUser | undefined> = getContext('authStore');

	const dispatch = createEventDispatcher();
	let loaded = false;

	function butttonClicked() {
		dispatch('message', {
			text: 'closeDrawers'
		});
		return true;
	}

	onMount(() => {
		loaded = true;
		console.log('kaka');
	});

	async function signOut() {
		console.log('signOut Authenticate.svelte');

		authStore.set(undefined);
		// $session = {};

		// goto('/');
	}
</script>

{#if $authStore && loaded}
	<div class="mb-3">
		<h5>
			{$authStore.getUsername()}
		</h5>
	</div>
	<div class="pb-3">
		<!-- <button on:click={signOut} >Sign Out</button> -->
		<a class="btn btn-secondary h-8 px-4 text-sm" href="/#" on:click={signOut}>Logout</a>
		<!-- <button class="btn btn-ghost" on:click={signOut}>Logout</button> -->
	</div>
	<!-- <Button size='small' kind='tertiary' disabled={false}>Button</Button> -->
	<!-- <div transition:fade={{ duration: 1000 }}>
      </div> -->
{:else if loaded}
	<!-- <a class="btn btn-secondary" href="/#" on:click={() => butttonClicked() && goto('/signin?path='+window.location.pathname)} >Login</a>
        <a class="btn btn-secondary" href="/#"  on:click={() => butttonClicked() && goto('/signup')} >Signup</a> -->
	<button class="btn btn-secondary h-8 px-4 text-sm" on:click={() => goto('/signin')}
		>Sign In</button
	>
	<button class="btn btn-secondary h-8 px-4 text-sm" on:click={() => goto('/signup')}
		>Sign Up</button
	>
{:else}
	<Loading description="Active loading indicator" withOverlay={false} />
{/if}

<!-- {cognitoUser.attributes.email} -->

<!-- {#if loaded}
  <div transition:fade={{ duration: 2000 }}>
    {#if signedIn}
      <Button on:click={signOut}>Sign Out</Button>
    {:else}
      <Button on:click={() => goto('/signin')}>Sign In</Button>

      <Button on:click={() => goto('/signup')}>Sign Up</Button>
    {/if}
  </div>
{/if} -->
