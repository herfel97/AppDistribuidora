import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServWSService } from 'src/app/servicios/serv-ws.service'

@Component({
  selector: 'app-listar-productos-bodega',
  templateUrl: './listar-productos-bodega.component.html',
  styleUrls: ['./listar-productos-bodega.component.css']
})
export class ListarProductosBodegaComponent implements OnInit {

  public productos:any = [];

  loginForm = new FormGroup({
    id: new FormControl('',Validators.required)
  })

  constructor(private service:ServWSService) { }

  ngOnInit(): void {
    this.service.getProductos(1).
    subscribe((response:any) =>{
      this.productos = response
    }, (error: any) => {
      console.log(error)
    });

  }


  buscar(id:number){
    console.log("valor"+id)
    this.service.getProductos(id).
    subscribe((response:any) =>{
      this.productos = response
    }, (error: any) => {
      console.log(error)
    });
  }

}
