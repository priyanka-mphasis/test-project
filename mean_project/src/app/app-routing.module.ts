import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { OrganizationComponent } from './organization/organization.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path:'edit/:id' , component:EmployeeComponent},
  { path : 'edit/:id' , component:EmployeeComponent},
  { path:'displayemployee' , component:DisplayEmployeeComponent , canActivate: [AuthGuard]},
   { path:'orgnization' , component:OrganizationComponent},
   { path:'login' , component:LoginComponent},
   { path:'**' , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
