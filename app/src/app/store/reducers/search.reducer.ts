import {Action, createReducer, on} from "@ngrx/store";
import * as searchActions from '../actions/search.actions';

export const searchFeatureKey = 'search';

export interface State {
  loading: boolean;

  searchInfo: any;
  searchInfoSuccessful: boolean;
  searchInfoFailed: any;
}

export const initialState: State = {
  loading: false,

  searchInfo: ['test', 'this', 'is'],
  searchInfoSuccessful: false,
  searchInfoFailed: false,
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
  }))
)

export function reducer(state: State | undefined, action: Action) {
  return searchReducer(state, action);
}

export const getSearchInfo = (state: State) => state.searchInfo;
