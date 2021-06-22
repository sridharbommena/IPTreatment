import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './auth/admin-guard.guard';
import { UserGuardGuard } from './auth/user-guard.guard';
import { AdminWelcomeComponent } from './components/admin/admin-welcome/admin-welcome.component';
import { SpecialistListComponent } from './components/specialist-list/specialist-list.component';
import { Error404Component } from './error/error404/error404.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ActivePatientsComponent } from './components/active-patients/active-patients.component';
import { InactivePatientsComponent } from './components/inactive-patients/inactive-patients.component';
import { IptreatmentPackagesComponent } from './components/iptreatment-packages/iptreatment-packages.component';
import { InsurerNamesComponent } from './components/insurer-names/insurer-names.component';
import { ViewInsurersComponent } from './components/view-insurers/view-insurers.component';
import { UserWelcomeComponent } from './components/user/user-welcome/user-welcome.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { TreatmentPlanComponent } from './components/treatment-plan/treatment-plan.component';
const routes: Routes = [
  { 
    path:"" , 
    redirectTo: "/login" ,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginPageComponent,    
  },
  { 
    path:"admin",
    component : AdminPageComponent,
    // pathMatch:"full",
    canActivate : [AdminGuardGuard],
    canActivateChild : [AdminGuardGuard],
    children : 
    [
      {
        path : "",
        redirectTo : "/admin/welcome",
        pathMatch : "full"
      },
      {
        path: "welcome",
        component: AdminWelcomeComponent,
        pathMatch: "full"
      },
      {
        path:"specialists",
        component : SpecialistListComponent,
        pathMatch : "full"
      },
      {
        path:"insurers",
        component : ViewInsurersComponent,
        pathMatch : "full"
      },
      {
        path : "register-patient",
        component : RegisterPatientComponent,
        pathMatch : "full"
      },
      {
        path:"active-patients",
        component : ActivePatientsComponent,
        pathMatch : "full"
      },
      {
        path: "inactive-patients",
        component : InactivePatientsComponent,
        pathMatch : "full"
      },
      {
        path: "treatment-packages",
        component : IptreatmentPackagesComponent,
        pathMatch : "full"
      },
      {
        path:"treatment-plan",
        component : TreatmentPlanComponent,
        pathMatch : "full"
      },
      {
        path:"insurers-names/:name/:ailment",
        component : InsurerNamesComponent,
        // pathMatch : "full"
      }
    ]
  },
  { 
    path: "user",
    component : UserPageComponent,
    canActivate : [UserGuardGuard],
    canActivateChild : [UserGuardGuard],
    children : 
    [
      {
        path : "",
        redirectTo : "/user/welcome",
        pathMatch : "full"
      },
      {
        path: "welcome",
        component: UserWelcomeComponent,
        pathMatch: "full"
      },
      {
        path:"specialists",
        component : SpecialistListComponent,
        pathMatch : "full"
      },
      {
        path: "treatment-packages",
        component : IptreatmentPackagesComponent,
        pathMatch : "full"
      }
    ]
  },
  {
    path:"401",
    component : UnauthorizedComponent,
    pathMatch : "full"
  },
  {
    path:"**",
    pathMatch:"full",
    component:Error404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
