import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-logo',
  templateUrl: './app-logo.component.html',
  styleUrls: ['./app-logo.component.scss']
})
export class AppLogoComponent implements OnInit {
  @Input() width;
  @Input() height;

  constructor() { }

  ngOnInit(): void {
  }

}
