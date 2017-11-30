import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule,routedComponents } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    ...routedComponents,
    TestComponent
  ]
})
export class DashboardModule { }
