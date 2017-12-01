import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../@theme/theme.module';
import { DashboardRoutingModule,routedComponents } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    ...routedComponents
  ]
})
export class DashboardModule { }
