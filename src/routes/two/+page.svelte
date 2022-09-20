<!-- <script context="module">
  export async function load({ page, fetch, session, context }) {
    const user = session.user;
    return { user };
  }
</script> -->

<script>
  import authUser from '$stores/auth';
  import { getStores, navigating, page } from '$app/stores';
  export let loggedInUser;
  authUser.subscribe((user) => {
				if (user) {
					loggedInUser = user.attributes;
				}
			});
  $: console.log('two:', { loggedInUser });
</script>
{#if loggedInUser}
logged in poop {loggedInUser.email}
{:else}
poop poop
{/if}

