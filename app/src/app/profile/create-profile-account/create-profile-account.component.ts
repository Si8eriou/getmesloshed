import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {Store} from "@ngrx/store";

import * as fromAuthActions from '../../store/actions/auth.actions';


@Component({
  selector: 'app-create-profile-account',
  templateUrl: './create-profile-account.component.html',
  styleUrls: ['./create-profile-account.component.scss']
})
export class CreateProfileAccountComponent implements OnInit {
  public createProfileForm: FormGroup;

  error_messages = {
    'name': [
      { type: 'required', message: 'First/Last Name is required.' },
    ],

    'lname': [
      { type: 'required', message: 'Last Name is required.' }
    ],

    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'email', message: 'please enter a valid email address.'},
    ],

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
  }

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.createProfileForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, {
      validators: this.password.bind(this)
    });
  }

  password(formGroup: FormGroup) {
    const {value: password} = formGroup.get('password');
    const {value: confirmPassword} = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : {passwordNotMatch: true};
  }

  submitRegistration() {
    this.store.dispatch(fromAuthActions.createProfileAction({payload: this.createProfileForm}));

    this.getProfile();
  }

  getProfile() {
  }

}
