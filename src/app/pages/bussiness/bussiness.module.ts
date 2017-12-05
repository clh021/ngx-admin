import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BussinessRoutingModule } from './bussiness-routing.module';
import { PrejudicationComponent } from './prejudication/prejudication.component';
import { TransferComponent } from './transfer/transfer.component';
import {ThemeModule} from "../../@theme/theme.module";

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    BussinessRoutingModule
  ],
  declarations: [PrejudicationComponent, TransferComponent]
})
export class BussinessModule { }
