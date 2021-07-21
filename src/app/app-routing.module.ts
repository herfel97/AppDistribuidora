
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component'

const routes: Routes = [
{ path:'', pathMatch:'full', redirectTo:'login' },
{ path:'login', component: LoginComponent},
{ path:'register', component:RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
