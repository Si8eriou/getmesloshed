import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkFormComponent } from './drink-form/drink-form.component';
import { DrinkCreateComponent } from './drink-create/drink-create.component';
import { DrinkViewComponent } from './drink-view/drink-view.component';
import { DrinkEditComponent } from './drink-edit/drink-edit.component';
import { DrinkIngredientListComponent } from './drink-view/drink-ingredient-list/drink-ingredient-list.component';
import { DrinkImageComponent } from './drink-view/drink-image/drink-image.component';
import { DrinkInstructionsComponent } from './drink-view/drink-instructions/drink-instructions.component';
import { DrinkGlassComponent } from './drink-view/drink-glass/drink-glass.component';
import { DrinkNameComponent } from './drink-view/drink-name/drink-name.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [DrinkFormComponent, DrinkCreateComponent, DrinkViewComponent, DrinkEditComponent, DrinkIngredientListComponent, DrinkImageComponent, DrinkInstructionsComponent, DrinkGlassComponent, DrinkNameComponent],
    exports: [
        DrinkViewComponent
    ],
    imports: [
        CommonModule,
        DrinkRoutingModule,
        MatIconModule
    ]
})
export class DrinkModule { }
