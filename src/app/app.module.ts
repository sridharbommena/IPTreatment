import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { Error404Component } from './error/error404/error404.component';
import { ViewInsurersComponent } from './components/view-insurers/view-insurers.component';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { InsurerNamesComponent } from './components/insurer-names/insurer-names.component';
import { SpecialistListComponent } from './components/specialist-list/specialist-list.component';
import { AdminNavBarComponent } from './components/admin/admin-nav-bar/admin-nav-bar.component';
import { AdminWelcomeComponent } from './components/admin/admin-welcome/admin-welcome.component';
import { IptreatmentPackagesComponent } from './components/iptreatment-packages/iptreatment-packages.component';
import { ActivePatientsComponent } from './components/active-patients/active-patients.component';
import { InactivePatientsComponent } from './components/inactive-patients/inactive-patients.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserNavBarComponent } from './components/user/user-nav-bar/user-nav-bar.component';
import { UserWelcomeComponent } from './components/user/user-welcome/user-welcome.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { TreatmentPlanComponent } from './components/treatment-plan/treatment-plan.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminPageComponent,
    UserPageComponent,
    UnauthorizedComponent,
    Error404Component,
    ViewInsurersComponent,
    InsurerNamesComponent,
    SpecialistListComponent,
    AdminNavBarComponent,
    AdminWelcomeComponent,
    IptreatmentPackagesComponent,
    ActivePatientsComponent,
    InactivePatientsComponent,
    FooterComponent,
    UserNavBarComponent,
    UserWelcomeComponent,
    RegisterPatientComponent,
    TreatmentPlanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
