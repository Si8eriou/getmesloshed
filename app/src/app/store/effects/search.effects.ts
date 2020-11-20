import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as searchActions from '../actions/search.actions';
import {SearchService} from "../../utilities/services/search.service";

@Injectable()
export class searchEffects {

  getSearchInfo$ = createEffect(() => this.actions$.pipe(
    ofType(searchActions.setupSearchInformation.type),
    switchMap((action: any) => this.searchService.setUpSearch()),
    map((response: any) => searchActions.setupSearchInformationSuccessful({payload: response})),
    catchError((error: string) => of(searchActions.setupSearchInformationFailed({error})))
  ));

  search$ = createEffect(() => this.actions$.pipe(
    ofType(searchActions.search.type),
    switchMap((params: any) => this.searchService.search(params)),
    map((response: any) => searchActions.searchSuccessful({payload: response})),
    catchError((error: string) => of(searchActions.searchFailed({error})))
  ));

  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {
  }
}


