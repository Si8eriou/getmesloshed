import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../../store/reducers/index';
import {skipWhile, take} from "rxjs/operators";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profile;

  constructor(
    private store: Store

  ) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.store.select(fromRoot.getAuthUser).pipe(
      skipWhile((user) => !user),
      take(1)).subscribe((profile) => {
        this.profile = profile;
      }
    )
  }

}
