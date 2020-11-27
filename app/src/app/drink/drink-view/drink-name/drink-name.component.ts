import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drink-name',
  templateUrl: './drink-name.component.html',
  styleUrls: ['./drink-name.component.scss']
})
export class DrinkNameComponent implements OnInit {
  @Input() drink;

  constructor() { }

  ngOnInit(): void {
  }

}
