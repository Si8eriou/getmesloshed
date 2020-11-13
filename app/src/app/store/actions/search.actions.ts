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


