import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../../../store/reducers/index';
import {skipWhile, take} from "rxjs/operators";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  public authenticated: any;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.store.select(fromRoot.getAuthUser).pipe(
      take(1)
    ).subscribe((authenticated) => {
      this.authenticated = authenticated;
    })
  }

}
