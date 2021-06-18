import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateProfileAccountComponent } from './create-profile-account/create-profile-account.component';
import { EditProfileAccountComponent } from './edit-profile-account/edit-profile-account.component';
import {CommonComponentsModule} from "../common-components/common-components.module";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DrinksProfileComponent } from './drinks-profile/drinks-profile.component';
import { LoginProfileComponent } from './login-profile/login-profile.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [ProfileSettingsComponent, ProfileComponent, CreateProfileAccountComponent, EditProfileAccountComponent, DrinksProfileComponent, LoginProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CommonComponentsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ProfileModule { }
