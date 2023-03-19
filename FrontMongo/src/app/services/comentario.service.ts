import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  url='http://localhost:3001/comentario/';

  constructor(private http: HttpClient) { }

  getPublicacion(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
}
