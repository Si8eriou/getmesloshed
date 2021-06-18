import {createAction, props} from "@ngrx/store";

export const addDrinkUserRelation = createAction(
  '[Profile] add drink profile relationship',
  props<{drink_id: any}>()
);

export const addDrinkUserRelationSuccessful = createAction(
  '[Profile] add drink profile relationship successful',
  props<{ payload: any }>()
);

export const addDrinkUserRelationFailed = createAction(
  '[Profile] add drink profile relationship failed',
  props<{ error: any }>()
);

export const removeDrinkUserRelation = createAction(
  '[Profile] remove drink profile relationship',
  props<{ drink_id: number }>()
);

export const removeDrinkUserRelationSuccessful = createAction(
  '[Profile] remove drink profile relationship successful',
  props<{ payload: any }>()
);

export const removeDrinkUserRelationFailed = createAction(
  '[Profile] remove drink profile relationship failed',
  props<{ error: any }>()
);


