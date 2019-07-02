import { NgModule } from '@angular/core';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [GameComponent],
  imports: [SharedModule, GameRoutingModule]
})
export class GameModule {}
