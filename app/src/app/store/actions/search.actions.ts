import {createAction, props} from "@ngrx/store";

export const setupSearchInformation = createAction(
  '[Search] set up search information',
);

export const setupSearchInformationSuccessful = createAction(
  '[Search] set up search information successful',
  props<{payload: any}>()
);

export const setupSearchInformationFailed = createAction(
  '[Search] set up search information failed',
  props<{error: any}>()
);

export const search = createAction(
  '[Search] search for params',
  props<{payload: any}>()
);

export const searchSuccessful = createAction(
  '[Search] search for params successful',
  props<{payload: any}>()
);

export const searchFailed = createAction(
  '[Search] search for params failed',
  props<{error: any}>()
);
