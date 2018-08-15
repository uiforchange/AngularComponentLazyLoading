import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';
const routes: Routes = [{
  path: '',
  component: DashboardComponent
},
{
  path: ':user',
  component: DashboardviewComponent, data : {some_data : 'some value'}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
