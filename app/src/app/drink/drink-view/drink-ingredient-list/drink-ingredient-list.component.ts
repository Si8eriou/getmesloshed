import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drink-ingredient-list',
  templateUrl: './drink-ingredient-list.component.html',
  styleUrls: ['./drink-ingredient-list.component.scss']
})
export class DrinkIngredientListComponent implements OnInit {
  @Input() drink;

  constructor() { }

  ngOnInit(): void {
  }

}
