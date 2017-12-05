import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import {routedComponents, TestRoutingModule} from './test-routing.module';
import {ThemeModule} from "../../@theme/theme.module";
import {TableService} from "./table/table.service";
import {RecordModel, TableDefaultModel} from "./table/table.model";

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
    TableService,
    TableDefaultModel,
    RecordModel,
  ],
})
export class TestModule { }
