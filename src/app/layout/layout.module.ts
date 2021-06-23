import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SideNavComponent],
  imports: [SharedModule, LayoutRoutingModule],
})
export class LayoutModule {}
