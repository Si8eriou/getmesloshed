import { Component, OnInit } from '@angular/core';
import * as fromRoot from "../../store/reducers";
import {skipWhile, take} from "rxjs/operators";
import {Store} from "@ngrx/store";

import * as fromSearchActions from '../../store/actions/search.actions';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public searchResults: any;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getSearchResults();
  }

  getSearchResults() {
    this.store.select(fromRoot.getSearchResults).pipe(
      skipWhile((result) => !result || result.length === 0),
      take(1)
    ).subscribe((result) => {
      console.log(result);
      this.searchResults = result;
    })
  }

  get nextPageUrl() {
    return this.searchResults.next_page_url;
  }

  get prevPageUrl() {
    return this.searchResults.prev_page_url;
  }

  get currentPage() {
    return this.searchResults.current_page;
  }



}
