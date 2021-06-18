import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as profileActions from "../actions/profile.actions";
import {ProfileService} from "../../utilities/services/profile.service";

@Injectable()
export class profileEffects {

  addUserDrink$ = createEffect(() => this.actions$.pipe(
    ofType(profileActions.addDrinkUserRelation.type),
    switchMap((action: any) => this.profileService.addProfileDrink(action.drink_id)),
    map((response: any) => profileActions.addDrinkUserRelationSuccessful({payload: response})),
    catchError((error: string) => of(profileActions.addDrinkUserRelationFailed({error})))
  ));

  removeUserDrink$ = createEffect(() => this.actions$.pipe(
    ofType(profileActions.removeDrinkUserRelation.type),
    switchMap((params: any) => this.profileService.removeProfileDrink(params.drink_id)),
    map((response: any) => profileActions.removeDrinkUserRelationSuccessful({payload: response})),
    catchError((error: string) => of(profileActions.removeDrinkUserRelationFailed({error})))
  ));

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {
  }
}
