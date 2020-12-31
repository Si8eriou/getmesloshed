import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {MatDialog} from "@angular/material/dialog";

import * as fromRoot from '../../store/reducers/index';
import * as fromAuth from '../../store/actions/auth.actions';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CreateProfileAccountComponent} from "../create-profile-account/create-profile-account.component";

@Component({
  selector: 'app-login-profile',
  templateUrl: './login-profile.component.html',
  styleUrls: ['./login-profile.component.scss']
})
export class LoginProfileComponent implements OnInit {
  public username: any;
  public password: any;
  public loginForm: FormGroup;

  constructor(private store: Store,
              public formBuilder: FormBuilder,
              private router: Router,
              private dialog: MatDialog
  ) {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]))
    })
  }

  ngOnInit(): void {
  }

  authLogin($event) {
    this.store.dispatch(fromAuth.loginProfileAction({payload: {email: this.loginForm.controls['email'].value, password: this.loginForm.controls['password'].value}}));

    this.store.select(fromRoot.getAuthLoginSuccess).subscribe((success) => {
      if(success) {
        this.router.navigate(['/home']);
      }
    })
  }

  openCreateProfileModal() {
    this.dialog.open(CreateProfileAccountComponent);
  }

}
