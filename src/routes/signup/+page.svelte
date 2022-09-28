<script lang="ts">
	import { onMount, onDestroy, getContext } from 'svelte';
	import { SignUp, SignIn, ConfirmSignUp } from '$lib/Auth/aws';
	import { isEmpty, isValidEmail, isPasswordLongAndSame } from '../../helpers/validation.js';
	import { base } from '$app/paths';
	import type { Writable } from 'svelte/store';
	import { goto, afterNavigate } from '$app/navigation';
	import { Button, FluidForm, TextInput, PasswordInput, Loading } from 'carbon-components-svelte';
	import type { CognitoUser } from '@aws-amplify/auth';

	let previousPage: string = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
		console.log('prev paghe2', previousPage);
	});
	const authStore: Writable<CognitoUser | undefined> = getContext('authStore');

	$: console.log('prev paghe', previousPage);
	let email: String | undefined = '';
	let password: String | undefined = '';
	let confirmPassword: String | undefined = '';
	let isLoggingIn = false;
	let isSignup = true;
	let isConfirmation = false;
	let confirmationCode = '';

	$: emailValid = isValidEmail(email);
	$: passwordValid = isPasswordLongAndSame(password, confirmPassword);
	$: formIsValid = emailValid && passwordValid;

	function handleConfirmation() {
		isLoggingIn = true;

		ConfirmSignUp(email, confirmationCode).then((resCnf) => {
			if (resCnf === 'SUCCESS') {
				const resSgnIn = SignIn(email, password);
				resSgnIn.then((user) => {
					authStore.set(user);
					isLoggingIn = false;
				});
			} else {
				isLoggingIn = false;
				alert('Wrong confirmation code!');
			}
		});
	}

	async function handleSignUp() {
		isLoggingIn = true;
		const res = await SignUp(email, password);
		console.log({ res });
		isConfirmation = true;
		isSignup = false;
		isLoggingIn = false;
	}

	onMount(() => {});

	onDestroy(() => {});
</script>

<svelte:head>
	<title>MaRS Connected: Sign Up</title>
</svelte:head>

<main>
	{#if $authStore}
		{goto(previousPage)}
	{:else if isLoggingIn}
		<div class="w-2/5 mx-auto">
			<Loading description="Active loading indicator" withOverlay={false} />
		</div>
	{:else if isSignup}
		<FluidForm class="w-2/5 mx-auto">
			<TextInput
				id="email"
				label="E-Mail"
				type="email"
				invalid={!emailValid}
				invalidText="Please enter a valid email address."
				value={email}
				on:input={(event) => (email = event?.detail?.toString())}
			/>

			<TextInput
				id="Password"
				label="Password"
				type="password"
				value={password}
				on:input={(event) => (password = event?.detail?.toString())}
				autocomplete="on"
			/>

			<TextInput
				id="Password"
				label="Confirm Password"
				type="password"
				value={confirmPassword}
				on:input={(event) => (confirmPassword = event?.detail?.toString())}
				autocomplete="on"
			/>
			<Button type="submit" on:click={handleSignUp} disabled={!formIsValid}>Sign Up</Button>
		</FluidForm>
	{:else if isConfirmation}
		<h3>Please check your email for the code.</h3>
		<FluidForm class="w-2/5 mx-auto">
			<TextInput
				id="confirmationCode"
				label="Confirmation Code"
				type="text"
				value={confirmationCode}
				on:input={(event) => (confirmationCode = event.target.value)}
			/>
			<Button type="submit" on:click={handleConfirmation} disabled={!confirmationCode}
				>Confirm</Button
			>
		</FluidForm>
	{:else}
		<!-- else content here -->
	{/if}
</main>

<style>
</style>
