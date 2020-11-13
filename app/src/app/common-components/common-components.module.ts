import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsRoutingModule } from './common-components-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { IconComponent } from './icons/icon/icon.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
    declarations: [NavigationComponent, AppHeaderComponent, SideNavigationComponent, IconComponent],
  exports: [
    AppHeaderComponent,
    SideNavigationComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ]
})
export class CommonComponentsModule { }
