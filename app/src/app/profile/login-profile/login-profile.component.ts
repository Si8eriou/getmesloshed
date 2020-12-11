import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

import * as fromRoot from '../../store/reducers/index';
import * as fromAuth from '../../store/actions/auth.actions';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-profile',
  templateUrl: './login-profile.component.html',
  styleUrls: ['./login-profile.component.scss']
})
export class LoginProfileComponent implements OnInit {
  public username: any;
  public password: any;
  public loginForm: FormGroup;

  public error_messages = {
    'password': [
      {type: 'required', message: 'Password is required.'},
    ],
    'email': [
      {type: 'required', message: 'Email is required.'},
      {type: 'email', message: 'Please enter a valid email.'}
    ]
  }

  constructor(private store: Store,
              public formBuilder: FormBuilder,
              private router: Router
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

  authLogin() {
    this.store.dispatch(fromAuth.loginProfileAction({payload: {email: this.loginForm.controls['email'].value, password: this.loginForm.controls['password'].value}}));

    this.store.select(fromRoot.getAuthLoginSuccess).subscribe((success) => {
      if(success) {
        this.router.navigate(['/home']);
      }
    })
  }

}
