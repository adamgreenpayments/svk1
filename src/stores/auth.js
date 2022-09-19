import {
  writable
} from 'svelte/store';

const authUser = writable(null);

const customAuthStore = {
  getValue: authUser.item,
  subscribe: authUser.subscribe,
  setauthUser: (item) => {
    authUser.set(item);
  },
  removeauthUser: () => {
    authUser.set(null);
  },
};

export default customAuthStore;