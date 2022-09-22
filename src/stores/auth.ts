import {
  writable
} from 'svelte/store';
import type { CognitoUser } from '@aws-amplify/auth';

const authUser = writable<CognitoUser | undefined>();

const customAuthStore = {
  get: () => authUser,
  subscribe: authUser.subscribe,
  setauthUser: (item: CognitoUser) => {
    authUser.set(item);
  },
  removeauthUser: () => {
    authUser.set(undefined);
  },
};

export default customAuthStore;