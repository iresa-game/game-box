import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityBlockComponent } from './city-block.component';

const routes: Routes = [{ path: '', component: CityBlockComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityBlockRoutingModule { }
