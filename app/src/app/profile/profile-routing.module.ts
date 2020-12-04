import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditProfileAccountComponent} from "./edit-profile-account/edit-profile-account.component";
import {CreateProfileAccountComponent} from "./create-profile-account/create-profile-account.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileSettingsComponent} from "./profile-settings/profile-settings.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full',
  },
  {
    path: ':id',
    redirectTo: 'acct',
  },
  {
    path: 'edit',
    component: EditProfileAccountComponent
  },
  {
    path: 'create',
    component: CreateProfileAccountComponent
  },
  {
    path: 'acct',
    component: ProfileComponent
  },
  {
    path: 'settings',
    component: ProfileSettingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
