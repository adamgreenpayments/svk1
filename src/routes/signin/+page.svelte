<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  import { SignIn } from '$lib/Auth/aws';
  import authUser from '../../stores/auth';
  import { isEmpty, isValidEmail } from '../../helpers/validation.js';
  import { createEventDispatcher } from 'svelte';
	import { Button, FluidForm, TextInput,PasswordInput } from 'carbon-components-svelte';



  if($authUser) goto("/");
    
      let password:String;
      let invalid = false;
    
      $: invalid = !/^(?=.*[a-z])(?=.*d)[a-zA-Zd]{6,}$/.test(password);
  let email = '';
  let isLoggingIn = false;
  let unsubscribe;
  let cognitoUser;
  let dispatch = createEventDispatcher();
  $: emailValid = isValidEmail(email);
  $: formIsValid = emailValid;

  // import { base } from '$app/paths'

  // let previousPage = base ;

  // afterNavigate(({from}) => {
  //   previousPage = from?.url.pathname || previousPage
  // }) 

  async function handleSignIn() {
    isLoggingIn = true;
    const urlParams = new URLSearchParams(window.location.search);
    const path = urlParams.get("path") == null  ?  '/' : urlParams.get("path").toString() ;
    console.log("urlParams: ", path)
    const res = await SignIn(email, password);
    authUser.setauthUser(res);
    dispatch('login');
    isLoggingIn = false;
    goto(path);
  }

  onMount(() => {
    unsubscribe = authUser.subscribe((user) => {
      cognitoUser = user;
      console.log('signIn', { cognitoUser });
    });
  });

  onDestroy(() => {
    if (unsubscribe) unsubscribe();
  });
</script>

<svelte:head>
  <title>Sign In</title>
</svelte:head>

<main>
  {#if isLoggingIn}
  {/if}

  <form on:submit|preventDefault={handleSignIn}>
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
          console.log("big poopy");
          console.log(event);
          (email = event.detail)}
        }
      />

      <TextInput
        id="Password"
        label="Password"
        type="password"
        placeholder="Password"
        value={password}
        on:input={(event) => {
          console.log("big poopy2");
          console.log(event);
          (password = event.detail)}
        }
        autocomplete="on"
      />
      <Button type="submit" disabled={!formIsValid}>Sign In</Button> 

    </FluidForm>

  </form>
</main>

<style>
</style>
