import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


import { ServWSService } from './servicios/serv-ws.service'
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { ListarProductosBodegaComponent } from './listar-productos-bodega/listar-productos-bodega.component';

import { ComponentsModule } from '../app/components/components.module'

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent, AuthLayoutComponent,
    LoginComponent,
    IndexComponent,
    ListarProductosBodegaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()

  ],
  providers: [ServWSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
