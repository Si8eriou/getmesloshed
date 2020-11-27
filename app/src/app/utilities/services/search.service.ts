import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, skipWhile, take} from 'rxjs/operators';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../store/reducers";

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

  search(searchParams) {
    console.log(searchParams);
    let url = `${this.urlApi}/search`;

    return this.http.get(url, {
      params: {
        searchParams
      }
    });
  }

}
