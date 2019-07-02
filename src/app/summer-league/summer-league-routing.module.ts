import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummerLeagueComponent } from './summer-league.component';

const routes: Routes = [
  {
    path: '',
    component: SummerLeagueComponent,
    data: { routeName: 'summer-league', routeLabel: 'Summer League' },
    children: [
      {
        path: ':leagueName',
        loadChildren: () =>
          import('./league/league.module').then(m => m.LeagueModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummerLeagueRoutingModule {}
