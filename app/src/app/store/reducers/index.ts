import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromSearch from './search.reducer';
import * as fromAuth from './auth.reducer';

export interface State {
  [fromSearch.searchFeatureKey]: fromSearch.State;
  [fromAuth.searchFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromSearch.searchFeatureKey]: fromSearch.reducer,
  [fromAuth.searchFeatureKey]: fromAuth.reducer
};


export const search = createFeatureSelector<State, fromSearch.State>(fromSearch.searchFeatureKey);
export const getSearchInfo = createSelector(search, fromSearch.getSearchInfo);
export const getSearchResults = createSelector(search, fromSearch.getSearchResults);

export const auth = createFeatureSelector<State, fromAuth.State>(fromAuth.searchFeatureKey);
export const getAuthUser = createSelector(auth, fromAuth.getAuthUser);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
