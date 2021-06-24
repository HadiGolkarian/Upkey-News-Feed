import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SideNavComponent, NavItemComponent],
  imports: [SharedModule, LayoutRoutingModule],
})
export class LayoutModule {}
