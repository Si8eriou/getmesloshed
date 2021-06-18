import {Action, createReducer, on} from "@ngrx/store";
import * as profileActions from '../actions/profile.actions';
import * as storage from '../storage';

export const profileFeatureKey = 'profile';

export interface State {
  userDrinks: any;

  addUserDrinkLoading: boolean;
  addUserDrinkSuccessful: boolean;
  addUserDrinkFailed: any;

  removeUserDrinkLoading: boolean;
  removeUserDrinkSuccessful: boolean;
  removeUserDrinkFailed: any;
}

export const initialState: State = {
  userDrinks: storage.getItem(profileFeatureKey).userDrinks || null,

  addUserDrinkLoading: storage.getItem(profileFeatureKey).addUserDrinkLoading || null,
  addUserDrinkSuccessful: storage.getItem(profileFeatureKey).addUserDrinkSuccessful,
  addUserDrinkFailed: storage.getItem(profileFeatureKey).addUserDrinkFailed || null,

  removeUserDrinkLoading: storage.getItem(profileFeatureKey).removeUserDrinkLoading,
  removeUserDrinkSuccessful: storage.getItem(profileFeatureKey).removeUserDrinkSuccessful || null,
  removeUserDrinkFailed: storage.getItem(profileFeatureKey).removeUserDrinkFailed || null
}

const profileReducer = createReducer(
  initialState,

  on(profileActions.addDrinkUserRelation, (state, action) => ({
    ...state,
    addUserDrinkLoading: true,
    addUserDrinkSuccessful: null,
    addUserDrinkFailed: null
  })),

  on(profileActions.addDrinkUserRelationSuccessful, (state, action) => ({
    ...state,
    addUserDrinkSuccessful: true,
    userDrinks: action.payload,
    addUserDrinkLoading: false
  })),

  on(profileActions.addDrinkUserRelationFailed, (state, action) => ({
    ...state,
    addUserDrinkFailed: action.error,
    addUserDrinkLoading: false
  })),

  on(profileActions.removeDrinkUserRelation, (state, action) => ({
    ...state,
    removeUserDrinkLoading: true,
    searchSuccessful: null,
  })),

  on(profileActions.removeDrinkUserRelationSuccessful, (state, action) => ({
    ...state,
    removeUserDrinkSuccessful: true,
    userDrinks: action.payload,
    removeUserDrinkLoading: false
  })),

  on(profileActions.removeDrinkUserRelationFailed, (state, action) => ({
    ...state,
    removeUserDrinkFailed: action.error,
    removeUserDrinkLoading: false
  }))
)


export function reducer(state: State | undefined, action: Action) {
  return profileReducer(state, action);
}

export const getAddUserDrink = (state: State) => [
  'userDrinks',
  'addUserDrinkLoading',
  'addUserDrinkSuccessful',
  'addUserDrinkFailed',
].reduce((carry, item) => {
  carry[item] = state[item];
  return carry;
}, {});

export const getRemoveUserDrink = (state: State) => [
  'userDrinks',
  'removeUserDrinkLoading',
  'removeUserDrinkSuccessful',
  'removeUserDrinkFailed',
].reduce((carry, item) => {
  carry[item] = state[item];
  return carry;
}, {});
