<script lang="ts">
/**
 * `amp` is `true` or `false` depending on the corresponding
 * value in your [project configuration](#configuration)
 * `browser` is `true` or `false` depending on whether the app
 * is running in the browser or on the server
 * `dev` is `true` in development mode, `false` in production
 */
import Theme from "carbon-components-svelte/src/Theme/Theme.svelte";
import "carbon-components-svelte/css/all.css";
import "../app.css";

import '../app.css'
import {
    browser,
    dev
} from '$app/environment';
import {
    goto
} from '$app/navigation';
import {
    getStores,
    navigating,
    page
} from '$app/stores';
import {
    onMount,
    onDestroy,
    setContext
} from 'svelte';
import {
    writable
} from 'svelte/store';
import type {
    Unsubscriber
} from 'svelte/store';

import Nav from '$lib/CarbonNav.svelte';
import awsconfig from '../aws-exports';
import amplifyStore from '$stores/amplify';
import {checkUser} from '$lib/Auth/aws';
import authUser from '$stores/auth';
import {
    Amplify,
    API,
    Auth,
    graphqlOperation,
    Storage
} from 'aws-amplify';
import {
    Content,
    Grid
} from "carbon-components-svelte";
Amplify.configure(awsconfig);
import type {
    CognitoUser
} from '@aws-amplify/auth';

let segment;
let unsubscribe: Unsubscriber;
let cognitoUser: CognitoUser;

$: if (cognitoUser) {
    console.log('layout, cognito user:', {
        cognitoUser
    });
    console.log('email:', cognitoUser.getUsername());
    console.log($authUser);
}

onMount(async () => {
    // let theme = "white"; // "white" | "g10" | "g80" | "g90" | "g100"
    // document.documentElement.setAttribute("theme", theme);
    unsubscribe = authUser.subscribe((user) => {
        if (user) {
            cognitoUser = user;
        }
    });
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

            const res = await checkUser();
            console.log(res);
            authUser.setauthUser(res);
        }
    } catch (error) {
        console.log(error);
    }
});

onDestroy(() => {
    if (unsubscribe) unsubscribe();
});
</script>

<Theme
    theme="g90"
    tokens={{
	"ui-background": 'hsl(var(--b1))',
    "ui-01": 'white',
    "ui-02": 'white',
    "ui-03": 'white',
    "ui-04": 'white',
    "ui-05": 'white',
    "text-01": 'white',
    "text-02": 'white',
    "text-03": 'white',
    "inverse-02": 'white',
    "icon-01": 'white'
}} />


            <Nav />
            <Content>
                <Grid>
                    <slot  />
                </Grid>
            </Content>
