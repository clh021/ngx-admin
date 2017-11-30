import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
// import { MenusComponent } from './menus.component';

const routes: Routes = [{
  path: '',
  // component: MainComponent,
  children: [
    {
      path: 'main',
      component: MainComponent,
    },
    {
      path: 'test',
      component: TestComponent,
      // loadChildren: MainComponent,
    },
    {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full',
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
export const routedComponents=[
  MainComponent
];