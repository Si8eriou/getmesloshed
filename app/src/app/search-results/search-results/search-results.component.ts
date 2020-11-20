import { Component, OnInit } from '@angular/core';
import * as fromRoot from "../../store/reducers";
import {skipWhile, take} from "rxjs/operators";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

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
    })
  }

}
