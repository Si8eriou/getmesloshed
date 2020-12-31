import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import * as fromRoot from "../../store/reducers";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {take} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {LoginProfileComponent} from "../../profile/login-profile/login-profile.component";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApi: string;

  constructor(private http: HttpClient,
              private router: Router,
              private store: Store,
              private dialog: MatDialog
  ) {
    this.urlApi = environment.apiUrl + '/auth';
  }

  updateOrCreate(profile) {
    let name = profile.controls.name.value;
    let email = profile.controls.email.value;
    let password = profile.controls.password.value;

    let url = `${this.urlApi}/updateOrCreate`;

    return this.http.get(url, {
      params: {
        name, email, password
      }
    });
  }

  login(credentials) {
    let url = `${this.urlApi}/login`;

    return this.http.get(url, {
      params: credentials
    });
  }

  public canActivate() {
    this.store.select(fromRoot.getAuthUser).pipe(take(1)).subscribe(profile => {
      if (profile) {
        return true;
      } else {
        this.dialog.open(LoginProfileComponent);
        return false;
      }
    });
  }

}
