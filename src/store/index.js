import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

// syncs store between background and interface
// see: https://github.com/Kocal/vue-web-extension/issues/438
// https://github.com/Kocal/vue-web-extension/issues/282
import VuexWebExtensions from 'vuex-webextensions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabs: {},
    activeTabs: 0,
  },
  getters,
  mutations,
  actions,
  plugins: [VuexWebExtensions()],
});
