import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import {routedComponents, TestRoutingModule} from './test-routing.module';
import {ThemeModule} from "../../@theme/theme.module";
import {SmartTableService} from "../../@core/data/smart-table.service";

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    TestRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})
export class TestModule { }
