import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummerLeagueComponent } from './summer-league.component';

const routes: Routes = [
  { path: '', component: SummerLeagueComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummerLeagueRoutingModule { }
