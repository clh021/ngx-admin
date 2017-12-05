import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrejudicationComponent} from "./prejudication/prejudication.component";
import {TransferComponent} from "./transfer/transfer.component";

const routes: Routes = [
  {
    path:'prejudication',
    component:PrejudicationComponent
  },
  {
    path:'transfer',
    component:TransferComponent
  },
  {
    path:'',
    redirectTo:'prejudication'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BussinessRoutingModule { }
