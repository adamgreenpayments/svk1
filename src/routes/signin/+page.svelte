<script lang="ts">
	import { onMount, onDestroy, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { goto, afterNavigate } from '$app/navigation';
	import { SignIn } from '$lib/Auth/aws';
	import { isEmpty, isValidEmail } from '../../helpers/validation.js';
	import { Button, FluidForm, TextInput, PasswordInput, Loading } from 'carbon-components-svelte';
	import type { CognitoUser } from '@aws-amplify/auth';
	import { base } from '$app/paths';

	let previousPage: string = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
		console.log('prev paghe2', previousPage);
	});
	const authStore: Writable<CognitoUser | undefined> = getContext('authStore');

	$: console.log('prev paghe', previousPage);

	let password: string;
	let invalid = false;
	$: invalid = !/^(?=.*[a-z])(?=.*d)[a-zA-Zd]{6,}$/.test(password);
	let email = '';
	let isLoggingIn = false;
	$: emailValid = isValidEmail(email);
	$: formIsValid = emailValid;

	function handleSignIn() {
		console.log('resssspooop king');
		isLoggingIn = true;
		const res = SignIn(email, password);
		console.log('resssspooop', res);
		res.then((value) => {
			console.log('resssspooop2', value);
			authStore.set(value);
			console.log('prev paghe3', previousPage);
			goto(previousPage);
			isLoggingIn = false;
		});
	}

	onMount(async () => {});

	onDestroy(() => {});
</script>

<svelte:head>
	<title>Sign In</title>
</svelte:head>

<main>
	{#if isLoggingIn}
		<div class="w-2/5 mx-auto">
			<Loading description="Active loading indicator" withOverlay={false} />
		</div>
	{:else if $authStore}
		{console.log('prev paghe4', previousPage)}
		{goto(previousPage)}
	{:else}
		<!-- <form on:submit|preventDefault={handleSignIn}> -->
		<FluidForm class="w-2/5 mx-auto">
			<!-- <TextInput labelText="User name" placeholder="Enter user name..." required />
      <PasswordInput
        bind:value={password}
        {invalid}
        invalidText="Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number."
        required
        type="password"
        labelText="Password"
        placeholder="Enter password..."
      /> -->

			<TextInput
				id="email"
				label="E-Mail"
				type="email"
				placeholder="Email"
				invalid={!emailValid}
				invalidText="Please enter a valid email address."
				value={email}
				on:input={(event) => {
					console.log('big poopy');
					console.log(event);
					email = event.detail;
				}}
			/>

			<TextInput
				id="Password"
				label="Password"
				type="password"
				placeholder="Password"
				value={password}
				on:input={(event) => {
					console.log('big poopy2');
					console.log(event);
					password = event.detail;
				}}
				autocomplete="on"
			/>
			<Button type="submit" on:click={handleSignIn} disabled={!formIsValid}>Sign In</Button>
		</FluidForm>

		<!-- </form> -->
	{/if}
</main>

<style>
</style>
