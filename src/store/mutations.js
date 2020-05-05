import * as types from './mutation-types';

export default {
  // add tab
  [types.ADD_TAB](state, tab) {
    // create a new tab entry
    const tabEntry = {
      tab: tab,
      other: 'bruh',
    };
    // insert
    state.tabs[tab.id] = tabEntry;
    // update acount
    state.activeTabs += 1;
  },
  // update tab
  [types.UPDATE_TAB](state, tab) {
    if (!(tab.id in state.tabs)) return; // invalid tab?
    // update reference
    state.tabs[tab.id].tab = tab;
  },
  // remove tab
  [types.REMOVE_TAB](state, tabId) {
    // update count
    state.activeTabs -= 1;
    // delete state.tabs[tabId];
  },
};
