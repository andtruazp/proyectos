import { Comentario } from './../../models/comentario';
import { Publicacion } from './../../models/publicacion';
import { ComentarioService } from './../../services/comentario.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PublicacionService } from 'src/app/services/publicacion.service';


@Component({
  selector: 'app-pantalla5',
  templateUrl: './pantalla5.component.html',
  styleUrls: ['./pantalla5.component.css']
})
export class Pantalla5Component implements OnInit{
  listComentarios: Comentario[]=[];
  publicacion?: any;
  comentarios: Comentario[]=[];
  comentarioForm :FormGroup;
  //publicacionForm: FormGroup;
  id: string;
  //private _comentarioService: ComentarioService;

  constructor(private cfb: FormBuilder, 
    private _comentarioService: ComentarioService,
    //private _publicacionService: PublicacionService,
    private aRoute: ActivatedRoute,
    private router: Router,
    private pfb: FormBuilder
    ){
    this.comentarioForm = this.cfb.group({
      contenidoC: ['', Validators.required]
    })
    /*this.publicacionForm = this.pfb.group({
      usuario: ['', Validators.required],
      contenido: ['', Validators.required],
      categoria: ['', Validators.required]
    })*/
    this.id = this.aRoute.snapshot.paramMap.get('id')!;
    //this._comentarioService = _comentarioService;
  }

  ngOnInit(): void {
    
    this.verComentarios();
    this.verCodigo();
    
  }

  verCodigo(){
    this._comentarioService.getPublicacion(this.id).subscribe(data => {
      console.log(data);
      this.publicacion=data;
    }, error =>{
      console.log(error);
    })
  }

  verComentarios(){
    this._comentarioService.getComentarios(this.id).subscribe(data =>{
      console.log(data);
      this.listComentarios=Object.values(data);
    }, error =>{
      console.log(error);
    })
  }

  addComentario(){
    const COMENTARIO: Comentario ={
      contenidoC: this.comentarioForm.get('contenidoC')?.value
    }
    //this.router.navigate(['pantalla5/' + this.id]);
    this._comentarioService.addComentario(this.id,COMENTARIO).subscribe(
      (comentarios: Comentario[]) => {
        this.comentarios = comentarios;
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );console.log(this.comentarioForm)
  }

  eliminarComen(idC: any){
    this._comentarioService.eliminarComent(this.id, idC).subscribe(data =>{
      this.verComentarios();
    }, error => {
      console.log(error);
    })
  }

}
