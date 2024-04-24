import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: MainDashboardComponent,
    loadChildren: () =>
      import('./main-dashboard/dash.route').then((c) => c.dashboard),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
