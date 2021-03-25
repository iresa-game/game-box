import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityBlockRoutingModule } from './city-block-routing.module';
import { CityBlockComponent } from './city-block.component';


@NgModule({
  declarations: [CityBlockComponent],
  imports: [
    CommonModule,
    CityBlockRoutingModule
  ]
})
export class CityBlockModule { }
