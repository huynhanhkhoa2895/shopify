import { createSelector } from 'reselect';
export const selectStore = (state : any) =>
    state || {};
export const selectorCart = () =>
    createSelector(
        selectStore,
        state => ((state) ? state.cart : {}),
    );