import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';

import * as fromSearch from './search.reducer';
import * as fromAuth from './auth.reducer';
import * as fromProfile from './profile.reducer';

export interface State {
  [fromSearch.searchFeatureKey]: fromSearch.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromProfile.profileFeatureKey]: fromProfile.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromSearch.searchFeatureKey]: fromSearch.reducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromProfile.profileFeatureKey]: fromProfile.reducer
};

const reducerKeys = [fromSearch.searchFeatureKey, fromAuth.authFeatureKey];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}

export const search = createFeatureSelector<State, fromSearch.State>(fromSearch.searchFeatureKey);
export const getSearchInfo = createSelector(search, fromSearch.getSearchInfo);
export const getSearchResults = createSelector(search, fromSearch.getSearchResults);

export const auth = createFeatureSelector<State, fromAuth.State>(fromAuth.authFeatureKey);
export const getAuthUser = createSelector(auth, fromAuth.getAuthUser);
export const getAuthLoginSuccess = createSelector(auth, fromAuth.getAuthLoginSuccess);

export const profile = createFeatureSelector<State, fromProfile.State>(fromProfile.profileFeatureKey);
export const getAddProfileDrink = createSelector(profile, fromProfile.getAddUserDrink);
export const getRemoveProfileDrink = createSelector(profile, fromProfile.getRemoveUserDrink);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];
