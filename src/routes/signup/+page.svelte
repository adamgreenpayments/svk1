<script>
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  import { SignUp, SignIn, ConfirmSignUp } from '$lib/Auth/aws';
  import authUser from '../../stores/auth';
  import {
    isEmpty,
    isValidEmail,
    isPasswordLongAndSame,
  } from '../../helpers/validation.js';

  let email = '';
  let password = '';
  let confirmPassword = '';
  let isLoggingIn = false;
  let unsubscribe;
  let cognitoUser;
  let isSignup = true;
  let isConfirmation = false;
  let confirmationCode = '';

  $: emailValid = isValidEmail(email);
  $: passwordValid = isPasswordLongAndSame(password, confirmPassword);
  $: formIsValid = emailValid && passwordValid;

  async function handleConfirmation() {
    try {
      isLoggingIn = true;

      const resCnf = await ConfirmSignUp(email, confirmationCode);
      console.log({ resCnf });

      if (resCnf === 'SUCCESS') {
        const resSgnIn = await SignIn(email, password);
        authUser.setauthUser(resSgnIn);
        console.log({ resSgnIn });
        isLoggingIn = false;
        goto('/');
      } else {
        isLoggingIn = false;
        alert('Wrong confirmation code!');
      }
    } catch (e) {
      alert(e.message);
      isLoggingIn = true;
    }
  }

  async function handleSignUp() {
    isLoggingIn = true;
    const res = await SignUp(email, password);
    console.log({ res });

    isConfirmation = true;
    isSignup = false;
    // authUser.setauthUser(res);
    isLoggingIn = false;
    // goto("/");
  }

  onMount(() => {
    unsubscribe = authUser.subscribe((user) => {
      cognitoUser = user;
    });
  });

  onDestroy(() => {
    if (unsubscribe) unsubscribe();
  });
</script>

<svelte:head>
  <title>MaRS Connected: Sign Up</title>
</svelte:head>

<main>
  {#if isLoggingIn}
  {/if}

  {#if isSignup}
    <form on:submit|preventDefault={handleSignUp}>
      <input
        id="email"
        label="E-Mail"
        type="email"
        valid={emailValid}
        validityMessage="Please enter a valid email address."
        value={email}
        on:input={(event) => (email = event.target.value)}
      />

      <input
        id="Password"
        label="Password"
        type="password"
        value={password}
        on:input={(event) => (password = event.target.value)}
        autocomplete="on"
      />

      <input
        id="Password"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        on:input={(event) => (confirmPassword = event.target.value)}
        autocomplete="on"
      />

      <button type="submit" disabled={!formIsValid}>Sign Up</button>
    </form>
  {:else if isConfirmation}
    <h3>Please check your email for the code.</h3>
    <form on:submit|preventDefault={handleConfirmation}>
      <input
        id="confirmationCode"
        label="Confirmation Code"
        type="text"
        value={confirmationCode}
        on:input={(event) => (confirmationCode = event.target.value)}
      />

      <button type="submit" disabled={!confirmationCode}>Confirm</button>
    </form>
  {:else}
    <!-- else content here -->
  {/if}
</main>

<style>
</style>
