import {Injectable} from '@angular/core';
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
    this.urlApi = environment.apiUrl + '/profile';
  }

  removeProfileDrink(drink_id) {
    console.log(drink_id);
    let url = `${this.urlApi}/profile-drink/${drink_id}`;

    return this.http.delete(url);
  }

  addProfileDrink(drink_id) {
    console.log(drink_id);
    console.log('this isa test');
    let url = `${this.urlApi}/profile-drink/${drink_id}`;

    return this.http.post(url, {});
  }

}
