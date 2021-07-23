import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {producto } from '../modelos/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ServWSService {

  constructor(private http:HttpClient) { }

getLoginData(){
  return this.http.get('http://localhost:8080/Practica_de_laboratorio02_ERP/rest/cliente/list-users')
}

getProductos(id:number) {
  return this.http.get(
    'http://localhost:8080/Practica_de_laboratorio02_ERP/rest/producto/list/'+id);
}

registrarUsuario(cedula:string){
  let params = new HttpParams();
  params = params.set('cedula',cedula);

  return this.http.post('http://localhost:8080/Practica_de_laboratorio02_ERP/rest/cliente/registro',{params});
}


}
