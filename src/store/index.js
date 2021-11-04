import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist';
import localForage from 'localforage';

const vuexLocal = new VuexPersistence({
  storage: localForage,
  asyncStorage: true
});

import userStore from './stores/userStore';

export default createStore({
  modules: {
    userStore
  },
  plugins: [vuexLocal.plugin]
})
