import {Action, createReducer, on} from "@ngrx/store";
import * as searchActions from '../actions/search.actions';

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
  loading: false,
  searching: false,

  searchInfo: [],
  searchInfoSuccessful: false,
  searchInfoFailed: false,

  search: false,
  searchSuccessful: null,
  searchFailed: null,
  prevSearchCriteria: null
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
  searching: true, prevSearchCriteria: action.payload
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
].reduce((carry, item) =>
{
  carry[item] = state[item];
  return carry;
}, {});
