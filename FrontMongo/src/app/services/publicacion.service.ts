import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicacion } from '../models/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  url= 'http://localhost:3001/publicacion/';


  constructor(private http: HttpClient) { }

  getPublicaciones(): Observable<any>{
    return this.http.get(this.url);
  }

  getPubNoValidas(): Observable<any>{
    return this.http.get(this.url + '/sinvalidar');
  }

  getCategorias(): Observable<any>{
    return this.http.get(this.url + 'categoria');
  }

  getPorCategoria(cat: string): Observable<any>{
    return this.http.get(this.url+'categoria/'+cat);
  }
}
