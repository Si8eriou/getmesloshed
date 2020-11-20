import {Action, createReducer, on} from "@ngrx/store";
import * as searchActions from '../actions/search.actions';

export const searchFeatureKey = 'search';

export interface State {
  loading: boolean;
  searching: boolean

  searchInfo: any;
  searchInfoSuccessful: boolean;
  searchInfoFailed: any;

  search: any;
}

export const initialState: State = {
  loading: false,
  searching: false,

  searchInfo: [],
  searchInfoSuccessful: false,
  searchInfoFailed: false,

  search: false,
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
})),

  on(searchActions.searchSuccessful, (state, action) => ({
    ...state,
    searching: false,
    search: action.payload
  })),

  on(searchActions.searchFailed, (state, action) => ({
    ...state,
    searching: false,
    search: action.error
  }))
)

export function reducer(state: State | undefined, action: Action) {
  return searchReducer(state, action);
}

export const getSearchInfo = (state: State) => state.searchInfo;

export const getSearchResults = (state: State) => state.search;
