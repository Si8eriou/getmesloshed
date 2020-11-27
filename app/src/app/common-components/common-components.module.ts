import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsRoutingModule } from './common-components-routing.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { IconComponent } from './icons/icon/icon.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { ProfileMenuComponent } from './components/app-header/profile-menu/profile-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppLogoComponent } from './components/app-logo/app-logo.component';


@NgModule({
    declarations: [
      AppHeaderComponent,
      SideNavigationComponent,
      IconComponent,
      ProfileMenuComponent,
      SearchComponent,
      AppLogoComponent
    ],
  exports: [
    AppHeaderComponent,
    SideNavigationComponent,
    SearchComponent,
    AppLogoComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule
  ]
})
export class CommonComponentsModule { }
