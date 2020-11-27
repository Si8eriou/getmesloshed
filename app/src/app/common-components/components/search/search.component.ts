import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {FormControl} from "@angular/forms";
import {Observable} from 'rxjs';
import {map, skipWhile, startWith, take} from 'rxjs/operators';
import {Store} from "@ngrx/store";
import * as fromSearchActions from '../../../store/actions/search.actions';
import {SearchService} from "../../../utilities/services/search.service";
import * as fromRoot from "../../../store/reducers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public searchCtrl = new FormControl();
  public searchList: string[] = [];
  public list: string[] = [];
  public removable: boolean = true;
  public selectable: boolean = true;
  public filteredThing: Observable<string[]>

  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  @ViewChild('searchAutoComplete') matAutocomplete: MatAutocomplete;

  constructor(private store: Store, private searchService: SearchService, private router: Router) {
    this.filteredThing = this.searchCtrl.valueChanges.pipe(
      startWith(null),
      map((param: string | null) => param ? this._filter(param) : this.list.slice()));
  }

  ngOnInit(): void {
    this.setUpSearch();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.searchList.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.searchCtrl.setValue(null);
  }

  remove(searchParam: string): void {
    const searchIndex = this.searchList.indexOf(searchParam);

    if (searchIndex >= 0) {
      this.searchList.splice(searchIndex, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.searchList.push(event.option.viewValue);
    this.searchInput.nativeElement.value = '';
    this.searchCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.list.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  setUpSearch() {
    this.store.dispatch(fromSearchActions.setupSearchInformation());

    this.store.select(fromRoot.getSearchInfo).pipe(
      skipWhile((info) => info.length === 0),
      take(1)
    ).subscribe((info) => {
      this.list = info
    })
  }

  search() {
    this.store.dispatch(fromSearchActions.searchSuccessful({payload: false}))
    this.store.dispatch(fromSearchActions.search({payload: this.searchList.join()}));

    this.router.navigate(['search-results'])
  }

}
