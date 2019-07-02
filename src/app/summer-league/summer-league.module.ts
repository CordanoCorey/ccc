import { NgModule } from '@angular/core';

import { SummerLeagueRoutingModule } from './summer-league-routing.module';
import { SummerLeagueComponent } from './summer-league.component';
import { SharedModule } from '../shared/shared.module';
import { SummerLeagueSignupComponent } from './summer-league-signup/summer-league-signup.component';

@NgModule({
  imports: [SharedModule, SummerLeagueRoutingModule],
  declarations: [SummerLeagueComponent, SummerLeagueSignupComponent]
})
export class SummerLeagueModule {}
