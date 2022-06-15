import { createFeatureSelector, createSelector } from '@ngrx/store';
import { typeStore } from '../Store/index.store'

export const featureItem = createFeatureSelector<typeStore>('item');

export const listStatus = createSelector(featureItem, (state) => {
    return state.listStatus
})
// console.log(listStatus, 'listStatus');

export const listUser = createSelector(featureItem, (state:typeStore) => state.listStatus)
export const isLoading = createSelector(featureItem, (state) => {
    return state.isLoading
})