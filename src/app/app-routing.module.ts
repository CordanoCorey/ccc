import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'summer-league' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'portal', loadChildren: './portal/portal.module#PortalModule' },
  {
    path: 'summer-league',
    loadChildren: () => import('./summer-league/summer-league.module').then(m => m.SummerLeagueModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
