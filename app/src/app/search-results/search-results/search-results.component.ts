import {Component, OnDestroy, OnInit} from '@angular/core';
import * as fromRoot from "../../store/reducers";
import {skipWhile, take} from "rxjs/operators";
import {Store} from "@ngrx/store";

import * as fromSearchAction from '../../store/actions/search.actions';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    public searchResults: any;
    public loading: boolean = true;

    constructor(
        private store: Store,
    ) {
    }

    ngOnInit(): void {
        this.getSearchResults();
    }

    getSearchPaginationPage(page) {
      this.loading = true;
      this.store.dispatch(fromSearchAction.search({payload: this.searchResults.prevSearchCriteria, page: page}));

      this.getSearchResults();
    }

    getSearchResults() {
        this.store.select(fromRoot.getSearchResults).pipe(
            skipWhile((state: any) => state.searching === true),
            skipWhile((state: any) => state.searchSuccessful !== true),
            take(1)
        ).subscribe((result) => {
            this.loading = false;
            this.searchResults = result;
        })
    }

    get currentPage() {
        return this.searchResults.search.current_page;
    }

}
