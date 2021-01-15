import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromRoot from '../../store/reducers/index';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private urlApi: string;
  private profile: any;

  constructor(private http: HttpClient,
              private router: Router,
              private store: Store
              ) {
  }

}
