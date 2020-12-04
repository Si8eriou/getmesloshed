import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as profileActions from '../actions/auth.actions';
import { ProfileService } from "../../utilities/services/profile.service";
import {AuthService} from "../../utilities/services/auth.service";

@Injectable()
export class profileEffects {

  createProfile$ = createEffect(() => this.actions$.pipe(
    ofType(profileActions.createProfileAction.type),
    switchMap((profile: any) => this.authService.updateOrCreate(profile.payload)),
    map((response: any) => profileActions.createProfileSuccessfulAction({payload: response})),
    catchError((error: string) => of(profileActions.createProfileFailedAction({payload: error})))
  ));

  loadProfile$ = createEffect(() => this.actions$.pipe(
    ofType(profileActions.loginProfileAction.type),
    switchMap((profile: any) => this.authService.login(profile.payload)),
    map((response: any) => profileActions.loginProfileSuccessfulAction({payload: response})),
    catchError((error: string) => of(profileActions.loginProfileFailedAction({payload: error})))
  ));

  editProfile$ = createEffect(() => this.actions$.pipe(
    ofType(profileActions.editProfileAction.type),
    switchMap((profile: any) => this.authService.updateOrCreate(profile.payload)),
    map((response: any) => profileActions.editProfileSuccessfulAction({payload: response})),
    catchError((error: string) => of(profileActions.editProfileFailedAction({payload: error})))
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
}
