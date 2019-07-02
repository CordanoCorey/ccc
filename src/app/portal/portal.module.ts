import { NgModule } from '@angular/core';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, PortalRoutingModule],
  declarations: [PortalComponent]
})
export class PortalModule {}
