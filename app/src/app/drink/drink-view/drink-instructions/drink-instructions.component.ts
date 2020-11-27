import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drink-instructions',
  templateUrl: './drink-instructions.component.html',
  styleUrls: ['./drink-instructions.component.scss']
})
export class DrinkInstructionsComponent implements OnInit {
  @Input() drink;

  constructor() { }

  ngOnInit(): void {
  }

}
