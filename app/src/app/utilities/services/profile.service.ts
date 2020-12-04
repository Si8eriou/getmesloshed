import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private urlApi: string;

  constructor(private http: HttpClient,) {
    this.urlApi = environment.apiUrl + '/search';
  }


}
