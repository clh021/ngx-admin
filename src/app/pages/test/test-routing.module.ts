import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from "./test.component";
import {FormComponent} from "./form/form.component";
import {TableComponent} from "./table/table.component";

const routes: Routes = [{
  path: '',
  component: TestComponent,
  children: [{
    path: 'form',
    component: FormComponent,
  }, {
    path: 'table',
    component: TableComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TestRoutingModule { }

export const routedComponents = [
  TestComponent,
  FormComponent,
  TableComponent,
];
