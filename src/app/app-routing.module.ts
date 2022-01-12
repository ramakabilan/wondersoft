import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentComponent } from './deployment/deployment.component';
import { DevelopmentComponent } from './development/development.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'galary',
    component:GalaryComponent
  },
  {
    path:'service',
    component:ServiceComponent,
    children:[
      {
        path:'dev',
        component:DevelopmentComponent
      },
      {
        path:'test',
        component:TestingComponent
      },
      {
        path:'dep',
        component:DeploymentComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
