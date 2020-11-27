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


@NgModule({
  declarations: [DrinkFormComponent, DrinkCreateComponent, DrinkViewComponent, DrinkEditComponent, DrinkIngredientListComponent, DrinkImageComponent, DrinkInstructionsComponent],
  imports: [
    CommonModule,
    DrinkRoutingModule
  ]
})
export class DrinkModule { }
