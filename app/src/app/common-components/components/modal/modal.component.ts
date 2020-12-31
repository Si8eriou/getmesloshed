import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() showSaveButton: boolean;
  @Input() showCloseButton: boolean;
  @Input() showCancelButton: boolean;
  @Input() wildCardButtonOne: any;
  @Input() wildCardButtonTwo: any;

  @Input() name: any;
  @Input() class: string;

  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() wildCardButtonTwoEvent = new EventEmitter();
  @Output() wildCardButtonOneEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.showSaveButton = this.showSaveButton || false;
    this.showCloseButton = this.showCloseButton || false;
    this.showCancelButton = this.showCancelButton || false;
    this.wildCardButtonOne = this.wildCardButtonOne || false;
    this.wildCardButtonTwo = this.wildCardButtonTwo || false;
    this.class = this.class || 'auto';
  }

}
