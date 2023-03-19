import { Comentario } from './../../models/comentario';
import { Publicacion } from './../../models/publicacion';
import { ComentarioService } from './../../services/comentario.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-pantalla5',
  templateUrl: './pantalla5.component.html',
  styleUrls: ['./pantalla5.component.css']
})
export class Pantalla5Component implements OnInit{
  verCodigo: Publicacion[]=[];
  listaComentario: Comentario[]=[];
  comentarioForm :FormGroup;
  private _comentarioService: ComentarioService;

  constructor(private cfb: FormBuilder, _comentarioService: ComentarioService){
    this.comentarioForm = this.cfb.group({
      contenidoC: ['', Validators.required]
    })
    this._comentarioService = _comentarioService;
  }

  ngOnInit(): void {
    this.obtenerCodigo();
    
  }

  obtenerCodigo(){
    this._comentarioService.getPublicacion().subscribe(data =>{
      console.log(data);
      this.verCodigo=data;
    }, error =>{
      console.log(error);
    })
  }

  addComentario(){
    console.log(this.comentarioForm)
  }

}
