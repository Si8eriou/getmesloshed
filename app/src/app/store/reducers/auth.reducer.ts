import {Action, createReducer, on} from "@ngrx/store";
import * as profileActions from '../actions/auth.actions';
import * as storage from '../storage';

export const authFeatureKey = 'auth';

export interface State {
  loading: boolean;

  createProfileSuccessful: any;
  createProfileFailed: any;

  loginProfileSuccessful: any;
  loginProfileFailed: any;

  loadProfileSuccessful: any;
  loadProfileFailed: any;

  editProfileSuccessful: any;
  editProfileFailed: any;

  profile: any;
}

export const initialState: State = {
  loading: false,

  createProfileSuccessful: null,
  createProfileFailed: null,
  loginProfileSuccessful: null,
  loginProfileFailed: null,

  loadProfileSuccessful: null,
  loadProfileFailed: null,

  editProfileSuccessful: null,
  editProfileFailed: null,

  profile: storage.getItem(authFeatureKey).profile ?? null,
}

const searchReducer = createReducer(
  initialState,

  on(profileActions.createProfileAction, (state, action) => ({
    ...state,
    loading: true
  })),

  on(profileActions.createProfileSuccessfulAction, (state, action) => ({
    ...state,
    loading: false,
    createProfileSuccessful: true,
    profile: action.payload
  })),

  on(profileActions.createProfileFailedAction, (state, action) => ({
    ...state,
    loading: false,
    createProfileSuccessful: false,
    createProfileFailed: action.payload
  })),

  on(profileActions.loginProfileAction, (state, action) => ({
    ...state,
    loading: true
  })),

  on(profileActions.loginProfileSuccessfulAction, (state, action) => ({
    ...state,
    loading: false,
    loginProfileSuccessful: true,
    profile: action.payload
  })),

  on(profileActions.loginProfileFailedAction, (state, action) => ({
    ...state,
    loading: false,
    loginProfileSuccessful: false,
    loginProfileFailed: action.payload
  })),

  on(profileActions.editProfileAction, (state, action) => ({
    ...state,
    loading: true
  })),

  on(profileActions.editProfileSuccessfulAction, (state, action) => ({
    ...state,
    loading: false,
    editProfileSuccessful: true,
    profile: action.payload
  })),

  on(profileActions.editProfileFailedAction, (state, action) => ({
    ...state,
    loading: false,
    editProfileSuccessful: false,
    editProfileFailed: action.payload
  })),
)

export function reducer(state: State | undefined, action: Action) {
  return searchReducer(state, action);
}

export const getAuthUser = (state: State) => state.profile;

export const getAuthLoginSuccess = (state: State) => state.loginProfileSuccessful;
