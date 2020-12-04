import {Component, OnDestroy, OnInit} from '@angular/core';
import * as fromRoot from "../../store/reducers";
import {skipWhile, take} from "rxjs/operators";
import {Store} from "@ngrx/store";

import {SearchService} from "../../utilities/services/search.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public searchResults: any;

  constructor(
    private store: Store,
              private servicee: SearchService
              ) { }

  ngOnInit(): void {
    this.getSearchResults();
  }

  getSearchResults() {
    this.store.select(fromRoot.getSearchResults).pipe(
      skipWhile((result) => !result || result.length === 0),
      take(1)
    ).subscribe((result) => {
      this.searchResults = result;
    })
  }

  nextPageUrl() {

  }

  get prevPageUrl() {
    return this.searchResults.prev_page_url;
  }

  get currentPage() {
    return this.searchResults.current_page;
  }

}
