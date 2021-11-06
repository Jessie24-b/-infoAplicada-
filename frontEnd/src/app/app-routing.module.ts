import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AddEmployeComponent } from './shared/components/add-employe/add-employe.component';
import { LoginComponent } from './shared/components/login/login.component';
import { MainComponent } from './shared/components/main/main.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:'employee', 
    component: EmployeeComponent,
    
  },
  {
    path:'main',
    component: MainComponent,
    
  },
  {
    path:'add',
    component: AddEmployeComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
