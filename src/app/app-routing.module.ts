
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ListarProductosBodegaComponent } from './listar-productos-bodega/listar-productos-bodega.component'; 
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component'

const routes: Routes = [
{ path:'', pathMatch:'full', redirectTo:'login' },
{ path:'login', component: LoginComponent},
{ path:'register', component:RegistroComponent },
{ path:'prodBod', component:ListarProductosBodegaComponent},
{ path: "dash",  component:DashboardComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
