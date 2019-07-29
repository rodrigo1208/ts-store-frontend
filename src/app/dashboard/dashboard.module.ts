import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {BreadcrumbsModule} from '../core/components/breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [DashboardComponent, SidenavComponent, WrapperComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    BreadcrumbsModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
