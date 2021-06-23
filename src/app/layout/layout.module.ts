import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, LayoutRoutingModule],
})
export class LayoutModule {}
