import store from './store';
import * as types from './store/action-types';

global.browser = require('webextension-polyfill');

// hook tab creation
browser.tabs.onCreated.addListener(tab => {
  store.dispatch(types.addTab, tab);
});

// hook tab updated
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  store.dispatch(types.updateTab, tab);
});

// hook tab removal
browser.tabs.onRemoved.addListener(tabId => {
  store.dispatch(types.removeTab, tabId);
});

// watch active tab count to update badge
store.watch(
  () => store.getters.activeTabs,
  count => browser.browserAction.setBadgeText({ text: `${count}` })
);

// on startup, add all tabs
const query = browser.tabs.query({});
query.then(tabs => tabs.map(tab => store.dispatch(types.addTab, tab)));
