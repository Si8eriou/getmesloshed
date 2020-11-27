import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import {DrinkModule} from "../drink/drink.module";


@NgModule({
  declarations: [SearchResultsComponent],
    imports: [
        CommonModule,
        SearchResultsRoutingModule,
        DrinkModule
    ]
})
export class SearchResultsModule { }
