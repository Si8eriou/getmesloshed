import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drink-image',
  templateUrl: './drink-image.component.html',
  styleUrls: ['./drink-image.component.scss']
})
export class DrinkImageComponent implements OnInit {
  @Input() drink;

  constructor() { }

  ngOnInit(): void {
  }

}
