<script lang="ts">
	import {
		Header,
		HeaderUtilities,
		HeaderAction,
		HeaderGlobalAction,
		HeaderPanelLinks,
		HeaderPanelDivider,
		HeaderPanelLink,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SkipToContent
	} from 'carbon-components-svelte';
	import SettingsAdjust from 'carbon-icons-svelte/lib/SettingsAdjust.svelte';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
	import User from '$lib/Auth/User.svelte';
	import { checkUser, signOut } from './Auth/aws';
	import { onMount, onDestroy, getContext } from 'svelte';
	import type { CognitoUser } from '@aws-amplify/auth';
	import { Theme } from 'carbon-components-svelte';
	import type { Writable } from 'svelte/store';
	const authStore: Writable<CognitoUser | undefined> = getContext('authStore');

	let unsubscribe: Unsubscriber;
	let isSideNavOpen = false;
	let isOpen1 = false;
	let isOpen2 = false;
	let isAdmin = false;
	let isSuperAdmin = false;
	import { createEventDispatcher } from 'svelte';
	import type { Unsubscriber } from 'svelte/store';
	import IbmPowerVs from 'carbon-icons-svelte/lib/IbmPowerVs.svelte';

	$: {
		if ($authStore == null) {
			isOpen1 = false;
			isOpen2 = false;
		}
	}

	// function handleMessage(event: CustomEvent) {

	//     console.log("mondo poop");
	//     console.log(event);
	//     let action = event.detail.text;
	//     if(action === "closeDrawers") {
	//         isOpen1 = false;
	//         isOpen2 = false;
	//     }
	// }

	onMount(async () => {});

	onDestroy(() => {
		if (unsubscribe) unsubscribe();
	});
</script>

	<Header 
		persistentHamburgerMenu={true}
		company="OmniAccept"
		platformName="Payment Gateway"
		bind:isSideNavOpen
	>
		<svelte:fragment slot="skip-to-content">
			<SkipToContent />
		</svelte:fragment>
		<HeaderUtilities>
			<HeaderGlobalAction>
				<!-- <Theme persist={true} render="toggle"   toggle={{
			themes: ["g10", "g80"],
			labelA: "",
			labelB: "",
			hideLabel: true,
			size: "sm",
					}} /> -->
			</HeaderGlobalAction>
			<HeaderGlobalAction aria-label="Settings" icon={SettingsAdjust} />
			<HeaderAction
				bind:isOpen={isOpen1}
				on:open={(event) => (isOpen2 = false)}
				icon={UserAvatarFilledAlt}
				closeIcon={UserAvatarFilledAlt}
			>
				<HeaderPanelLinks>
					<!-- <HeaderPanelDivider>{cognitoUser != null ? cognitoUser.username : "login"}</HeaderPanelDivider> -->
					<div class="text-center">
						<HeaderPanelDivider><User class="w-full h-full text-center" /></HeaderPanelDivider>
					</div>
					<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
					<HeaderPanelLink>Switcher item 2</HeaderPanelLink>
					<HeaderPanelLink>Switcher item 3</HeaderPanelLink>
					<HeaderPanelLink>Switcher item 4</HeaderPanelLink>
					<HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
					<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
					<HeaderPanelLink>Switcher item 2</HeaderPanelLink>
					<HeaderPanelDivider>Switcher subject 3</HeaderPanelDivider>
					<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
				</HeaderPanelLinks>
			</HeaderAction>
			<HeaderAction bind:isOpen={isOpen2} on:open={(event) => (isOpen1 = false)}>
				<HeaderPanelLinks>
					<HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
					<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
					<HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
					<HeaderPanelLink>Switcher item 1</HeaderPanelLink>
					<HeaderPanelLink>Switcher item 2</HeaderPanelLink>
					<HeaderPanelLink>Switcher item 3</HeaderPanelLink>
					<HeaderPanelLink>Switcher item 4</HeaderPanelLink>
					<HeaderPanelLink>Switcher item 5</HeaderPanelLink>
				</HeaderPanelLinks>
			</HeaderAction>
		</HeaderUtilities>
	</Header>
<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavLink text="home" href="/" />
		<SideNavLink icon={IbmPowerVs} text="two" href="/two" />
		<SideNavLink icon={IbmPowerVs} text="three" href="/three" />
		<SideNavLink icon={IbmPowerVs} text="four" href="/four" />
		<SideNavMenu icon={IbmPowerVs} text="Menu" class="menusublist">
            <SideNavLink text="home" href="/" />
            <SideNavLink icon={IbmPowerVs} text="two" href="/two" />
            <SideNavLink icon={IbmPowerVs} text="three" href="/three" />
		</SideNavMenu>
		<SideNavMenu icon={IbmPowerVs} text="Category title">
			<SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
			<SideNavMenuItem aria-current="page" href="javascript:void(0)">
			  Link
			</SideNavMenuItem>
			<SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
		  </SideNavMenu>
	</SideNavItems>

</SideNav>

