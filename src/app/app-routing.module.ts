import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'portal' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'portal', loadChildren: './portal/portal.module#PortalModule' },
  {
    path: 'summer-league',
    loadChildren: './summer-league/summer-league.module#SummerLeagueModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
