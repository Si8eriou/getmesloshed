import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drink-view',
  templateUrl: './drink-view.component.html',
  styleUrls: ['./drink-view.component.scss']
})
export class DrinkViewComponent implements OnInit {
  @Input() drink;

  constructor() { }

  ngOnInit(): void {
  }

}
