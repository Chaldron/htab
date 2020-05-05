import * as types from './mutation-types';

export const addTab = ({ commit }, tab) => commit(types.ADD_TAB, tab);
export const updateTab = ({ commit }, tab) => commit(types.UPDATE_TAB, tab);
export const removeTab = ({ commit }, tabId) => commit(types.REMOVE_TAB, tabId);
