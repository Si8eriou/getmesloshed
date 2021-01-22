import {Action, createReducer, on} from "@ngrx/store";
import * as searchActions from '../actions/search.actions';
import * as storage from '../storage';

export const searchFeatureKey = 'search';

export interface State {
  loading: boolean;
  searching: boolean;

  searchInfo: any;
  searchInfoSuccessful: boolean;
  searchInfoFailed: any;

  search: any;
  searchSuccessful: boolean;
  searchFailed: any;
  prevSearchCriteria: any;
}

export const initialState: State = {
  loading: storage.getItem(searchFeatureKey).loading,
  searching: storage.getItem(searchFeatureKey).searching,

  searchInfo:  storage.getItem(searchFeatureKey).searchInfo || null,
  searchInfoSuccessful: storage.getItem(searchFeatureKey).searchInfoSuccessful,
  searchInfoFailed: storage.getItem(searchFeatureKey).searchInfoFailed || null,

  search: storage.getItem(searchFeatureKey).search || null,
  searchSuccessful: storage.getItem(searchFeatureKey).searchSuccessful,
  searchFailed: storage.getItem(searchFeatureKey).searchFailed || null,
  prevSearchCriteria: storage.getItem(searchFeatureKey).prevSearchCriteria || null
}

const searchReducer = createReducer(
  initialState,

  on(searchActions.setupSearchInformation, (state, action) => ({
    ...state,
    loading: true,
  })),

  on(searchActions.setupSearchInformationSuccessful, (state, action) => ({
    ...state,
    loading: false,
    searchInfo: action.payload
  })),

  on(searchActions.setupSearchInformationFailed, (state, action) => ({
    ...state,
    loading: false,
    searchInfoFailed: action.error
  })),

  on(searchActions.search, (state, action) => ({
    ...state,
    searching: true,
    searchSuccessful: null,
    prevSearchCriteria: action.payload
  })),

  on(searchActions.searchSuccessful, (state, action) => ({
    ...state,
    search: action.payload,
    searching: false,
    searchSuccessful: true
  })),

  on(searchActions.searchFailed, (state, action) => ({
    ...state,
    searching: false,
    searchFailed: action.error,
    search: action.error
  }))
)

export function reducer(state: State | undefined, action: Action) {
  return searchReducer(state, action);
}

export const getSearchInfo = (state: State) => state.searchInfo;

export const getSearchResults = (state: State) => [
  'search',
  'searching',
  'searchSuccessful',
  'searchFailed',
  'prevSearchCriteria',
].reduce((carry, item) => {
  carry[item] = state[item];
  return carry;
}, {});
