<!-- <script context="module">
  export async function load({ page, fetch, session, context }) {
    const user = session.user;
    return { user };
  }
</script> -->
<script lang="ts">
	import { getContext } from 'svelte';
	import { getStores, navigating, page } from '$app/stores';
	import { Datepicker } from 'svelte-calendar';
	import type { CognitoUser } from '@aws-amplify/auth';
	import type { Writable } from 'svelte/store';
	const authStore: Writable<CognitoUser | undefined> = getContext('authStore');

	$: console.log('two:', { $authStore });
</script>

{#if $authStore}
	logged in poop {$authStore.getUsername()}
	<Datepicker />
{:else}
	poop poop
{/if}
