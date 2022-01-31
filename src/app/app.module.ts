import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GalaryComponent } from './galary/galary.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { DevelopmentComponent } from './development/development.component';
import { TestingComponent } from './testing/testing.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { DirectivesdemoComponent } from './directivesdemo/directivesdemo.component';
import { ColorComponent } from './color/color.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { DepositCalculatorComponent } from './deposit-calculator/deposit-calculator.component';
import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrPipe } from './sqr.pipe';
import { CubPipe } from './cub.pipe';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { TDFComponent } from './tdf/tdf.component';
import { RDFComponent } from './rdf/rdf.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalaryComponent,
    RegisterComponent,
    HomeComponent,
    ServiceComponent,
    DevelopmentComponent,
    TestingComponent,
    DeploymentComponent,
    SignupComponent,
    DirectivesdemoComponent,
    ColorComponent,
    LoanCalculatorComponent,
    DepositCalculatorComponent,
    S1Component,
    S2Component,
    PipedemoComponent,
    SqrPipe,
    CubPipe,
    LifecyclehooksComponent,
    TDFComponent,
    RDFComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
