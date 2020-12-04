import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApi: string;

  constructor(private http: HttpClient,) {
    this.urlApi = environment.apiUrl + '/auth';
  }

  updateOrCreate(profile) {
    console.log(profile.controls.name.value);

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

}
