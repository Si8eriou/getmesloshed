import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as authActions from '../actions/auth.actions';
import {AuthService} from "../../utilities/services/auth.service";

@Injectable()
export class profileEffects {

  createProfile$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.createProfileAction.type),
    switchMap((profile: any) => this.authService.create(profile.payload)),
    map((response: any) => authActions.createProfileSuccessfulAction({payload: response})),
    catchError((error: string) => of(authActions.createProfileFailedAction({payload: error})))
  ));

  loadProfile$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.loginProfileAction.type),
    switchMap((profile: any) => this.authService.login(profile.payload)),
    map((response: any) => authActions.loginProfileSuccessfulAction({payload: response})),
    catchError((error: string) => of(authActions.loginProfileFailedAction({payload: error})))
  ));

  editProfile$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.editProfileAction.type),
    switchMap((profile: any) => this.authService.update(profile.payload)),
    map((response: any) => authActions.editProfileSuccessfulAction({payload: response})),
    catchError((error: string) => of(authActions.editProfileFailedAction({payload: error})))
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
}
