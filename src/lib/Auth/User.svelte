<script lang="ts">
  import { goto } from '$app/navigation';
  import { getStores, navigating, page } from '$app/stores';
  // import * as api from '$lib/api.js';

  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import authUser from '../../stores/auth';
	import type { Unsubscriber } from 'svelte/store';
  import type { CognitoUser } from '@aws-amplify/auth';
	import { Button } from 'carbon-components-svelte';

  const dispatch = createEventDispatcher();
  let unsubscribe:Unsubscriber;
  let loaded = false;
  let cognitoUser:OrNull<CognitoUser>;


  
  $: signedIn = cognitoUser;
  $: {
    console.log("big poop");
    dispatch(cognitoUser ? cognitoUser.getUsername() : "logout");
  }

  function butttonClicked() {
    dispatch("message",{
			text: "closeDrawers"
		});
    return true;
  }


  onMount(() => {
    unsubscribe = authUser.subscribe((user) => {
      if (user) {
        cognitoUser = user;
      }
      loaded = true;
      console.log("kaka");

    });
  });

  onDestroy(() => {
    if (unsubscribe) unsubscribe();
  });

  async function signOut() {
    console.log('signOut Authenticate.svelte');

    authUser.removeauthUser();
    // $session = {};
    

    goto('/');
  }
</script>


{#await cognitoUser}
  <!-- promise is pending -->
  <!-- <LoadingSpinner /> -->
  <!-- <button disabled on:click={() => goto('/signin?path='+window.location.pathname)}>Sign In</button>
  <button disabled on:click={() => goto('/signup')}>Sign Up</button> -->
{:then value}
    <!-- promise was fulfilled -->
    {#if cognitoUser && typeof value !== 'undefined' && value !== null && loaded}
    <div class="mb-3">
      <h5>
      {cognitoUser.getUsername()}
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
    {:else if loaded && (typeof value === 'undefined' || value === null)}
   
        <a class="btn btn-secondary" href="/#" on:click={() => butttonClicked() && goto('/signin?path='+window.location.pathname)} >Login</a>
        <a class="btn btn-secondary" href="/#"  on:click={() => butttonClicked() && goto('/signup')} >Signup</a>
      <!-- <button on:click={() => goto('/signin?path='+window.location.pathname)}>Sign In</button>
      <button on:click={() => goto('/signup')}>Sign Up</button> -->
    {/if}
  <!-- <div transition:fade={{ duration: 2000 }}>
  </div> -->
{/await}

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
