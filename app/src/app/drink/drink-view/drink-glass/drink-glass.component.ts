import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drink-glass',
  templateUrl: './drink-glass.component.html',
  styleUrls: ['./drink-glass.component.scss']
})
export class DrinkGlassComponent implements OnInit {
  @Input() drink;

  constructor() { }

  ngOnInit(): void {
  }

}
