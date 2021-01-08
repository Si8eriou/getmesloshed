import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import {DrinkModule} from "../drink/drink.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CommonComponentsModule} from "../common-components/common-components.module";


@NgModule({
  declarations: [SearchResultsComponent],
    imports: [
        CommonModule,
        SearchResultsRoutingModule,
        DrinkModule,
        MatIconModule,
        MatButtonModule,
        CommonComponentsModule
    ]
})
export class SearchResultsModule { }
