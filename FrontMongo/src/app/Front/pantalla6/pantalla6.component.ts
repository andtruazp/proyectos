import { PublicacionService } from 'src/app/services/publicacion.service';
import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';

@Component({
  selector: 'app-pantalla6',
  templateUrl: './pantalla6.component.html',
  styleUrls: ['./pantalla6.component.css']
})
export class Pantalla6Component implements OnInit{
  listPublicacion: Publicacion[]=[];

  constructor(private _publicacionService: PublicacionService){}

  ngOnInit(): void {
    this.getPublicaciones();
  }

  getPublicaciones(){
    this._publicacionService.getPubNoValidas().subscribe(data=>{
      console.log(data);
      this.listPublicacion=Object.values(data);
    }, error =>{
      console.log(error);
    })
  }

}
