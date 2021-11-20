import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AddAdvanceComponent } from './shared/components/avance/add-advance/add-advance.component';
import { AddEmployeComponent } from './shared/components/employee/add-employe/add-employe.component';
import { AddRequestComponent } from './shared/components/request/add-request/add-request.component';
import { AdvanceComponent } from './pages/advance/advance.component';
import { LoginComponent } from './shared/components/login/login.component';
import { MainComponent } from './shared/components/main/main.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { VigilanteGuard } from './vigilante.guard';
import { ReportesComponent } from './pages/reportes/reportes.component';

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
  },
  {
    path:'advance',
    component: AdvanceComponent,
    canActivate:[VigilanteGuard]
  },
  {
    path:'reportes',
    component: ReportesComponent,
    canActivate:[VigilanteGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
