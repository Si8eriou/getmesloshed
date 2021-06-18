import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

import * as fromProfileActions from '../../store/actions/profile.actions';

@Component({
  selector: 'app-drink-view',
  templateUrl: './drink-view.component.html',
  styleUrls: ['./drink-view.component.scss']
})
export class DrinkViewComponent implements OnInit {
  @Input() drink;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  toggleUserDrinks(drink_id) {
    console.log(drink_id);
    this.store.dispatch(fromProfileActions.addDrinkUserRelation({drink_id: drink_id}));
  }
}
