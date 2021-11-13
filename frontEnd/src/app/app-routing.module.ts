import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AddAdvanceComponent } from './shared/components/add-advance/add-advance.component';
import { AddEmployeComponent } from './shared/components/add-employe/add-employe.component';
import { AddRequestComponent } from './shared/components/add-request/add-request.component';
import { LoginComponent } from './shared/components/login/login.component';
import { MainComponent } from './shared/components/main/main.component';
import { SolicitudComponent } from './shared/components/solicitud/solicitud.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:'employee', 
    component: EmployeeComponent,
    canActivate:[VigilanteGuard]
  },
  {
    path:'main',
    component: MainComponent,
    canActivate:[VigilanteGuard]
  },
  {
    path:'add',
    component: AddEmployeComponent,
    canActivate:[VigilanteGuard]
  },
  {
    path:'request',
    component: SolicitudComponent,
    canActivate:[VigilanteGuard]
  },
  {
    path:'addRequest',
    component: AddRequestComponent,
    canActivate:[VigilanteGuard]
  },
  {
    path:'addAdvance',
    component: AddAdvanceComponent,
    canActivate:[VigilanteGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
