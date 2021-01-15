import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditProfileAccountComponent} from "./edit-profile-account/edit-profile-account.component";
import {CreateProfileAccountComponent} from "./create-profile-account/create-profile-account.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileSettingsComponent} from "./profile-settings/profile-settings.component";
import {DrinksProfileComponent} from "./drinks-profile/drinks-profile.component";
import { AuthService } from "../utilities/services/auth.service";
import {LoginProfileComponent} from "./login-profile/login-profile.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'edit',
    component: EditProfileAccountComponent,
    canActivate:[AuthService]
  },
  {
    path: 'create',
    component: CreateProfileAccountComponent
  },
  {
    path: 'acct',
    component: ProfileComponent,
    canActivate:[AuthService]
  },
  {
    path: 'settings',
    component: ProfileSettingsComponent,
    canActivate:[AuthService]
  },
  {
    path: 'drinks-profile',
    component: DrinksProfileComponent,
    canActivate:[AuthService]
  },
  {
    path: 'login',
    component: LoginProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
