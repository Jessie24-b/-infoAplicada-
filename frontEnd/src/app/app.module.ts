//Generales
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule }from '@angular/material/button'



//Componentes
import { LoginComponent } from './shared/components/login/login.component';
import { MainComponent } from './shared/components/main/main.component';

//Angular Material
import { MatCardModule } from '@angular/material/card';
import { EmployeeComponent } from './pages/employee/employee.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { AddEmployeComponent } from './shared/components/employee/add-employe/add-employe.component';
import { EditEmployeeComponent } from './shared/components/employee/edit-employee/edit-employee.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { AddRequestComponent } from './shared/components/request/add-request/add-request.component';
import { AddAdvanceComponent } from './shared/components/avance/add-advance/add-advance.component';
import { AdvanceComponent } from './pages/advance/advance.component';
import { EditRequestComponent } from './shared/components/request/edit-request/edit-request.component';
import { EditAdvanceComponent } from './shared/components/avance/edit-advance/edit-advance.component';



const appRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    data: { title: 'Main' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    EmployeeComponent,
    NavComponent,
    AddEmployeComponent,
    EditEmployeeComponent,
    SolicitudComponent,
    AddRequestComponent,
    AddAdvanceComponent,
    AdvanceComponent,
    EditRequestComponent,
    EditAdvanceComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  entryComponents:[EditEmployeeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
