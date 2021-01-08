import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private urlApi: string;

  constructor(private http: HttpClient,
              private router: Router,
              private store: Store
  ) {
    this.urlApi = environment.apiUrl + '/search';
  }

  setUpSearch() {
    let url = `${this.urlApi}/getSearchInfo`;

    return this.http.get(url);
  }

  search(searchParams, page = false) {
    let url = `${this.urlApi}/search`;

    if (page) {
      url = url + '?page=' + page ;
    }
    return this.http.get(url, {
      params: {
        searchParams
      }
    });
  }

  pagination(url) {
    return this.http.get(url);
  }

}
