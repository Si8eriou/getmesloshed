import {createAction, props} from "@ngrx/store";

export const createProfileAction = createAction(
  '[Profile] create profile account',
  props<{payload: any}>()
)

export const createProfileSuccessfulAction = createAction(
  '[Profile] create profile account successful',
  props<{payload: any}>()
)

export const createProfileFailedAction = createAction(
  '[Profile] create profile account failed',
  props<{payload: any}>()
)

export const loginProfileAction = createAction(
  '[Profile] login profile account',
  props<{payload: any}>()
)

export const loginProfileSuccessfulAction = createAction(
  '[Profile] login profile account successful',
  props<{payload: any}>()
)

export const loginProfileFailedAction = createAction(
  '[Profile] login profile account failed',
  props<{payload: any}>()
)

export const editProfileAction = createAction(
  '[Profile] edit profile account',
  props<{payload: any}>()
)

export const editProfileSuccessfulAction = createAction(
  '[Profile] edit profile account successful',
  props<{payload: any}>()
)

export const editProfileFailedAction = createAction(
  '[Profile] edit profile account failed',
  props<{payload: any}>()
)
