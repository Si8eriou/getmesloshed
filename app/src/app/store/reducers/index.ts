import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromSearch from './search.reducer';

export interface State {
  [fromSearch.searchFeatureKey]: fromSearch.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromSearch.searchFeatureKey]: fromSearch.reducer
};


export const search = createFeatureSelector<State, fromSearch.State>(fromSearch.searchFeatureKey);
export const getSearchInfo = createSelector(search, fromSearch.getSearchInfo);
export const getSearchResults = createSelector(search, fromSearch.getSearchResults);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
