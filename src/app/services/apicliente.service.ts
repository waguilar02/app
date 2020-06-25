import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { Cliente } from '../models/cliente';
import { Alumnos } from '../models/alumnos';


const httpOption = {
  headers: new HttpHeaders({
    'contend-Type': 'application/json'
  })

};

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string = 'https://localhost:44334/api/cliente'; // Url del recurso a acceder
  urlAlumnos: string = 'https://localhost:44334/api/alumnos'; 

  constructor(
    private _http: HttpClient

  ) { }
  getClientes(): Observable<Response> {
    return this._http.get<Response>(this.url);
  }
  add(cliente: Cliente): Observable<Response> {
    return this._http.post<Response>(this.url, cliente, httpOption)//
  }
  
  addA(alumnos: Alumnos): Observable<Response> {
    return this._http.post<Response>(this.urlAlumnos, alumnos, httpOption)//
  }
  
  editA(alumnos: Alumnos): Observable<Response> {
    return this._http.put<Response>(this.urlAlumnos, alumnos, httpOption)//
  }

  borrarA(alumnos: Alumnos): Observable<Response> {
    return this._http.put<Response>(this.urlAlumnos, alumnos, httpOption)//
  }
  


  getAlmnos(): Observable<Response> {
    return this._http.get<Response>(this.urlAlumnos);//
  }

 /* deleteA(alumnos: Alumnos): Observable<Response> {
    return this._http.delete<Response>(this.urlAlumnos, alumnos.codigoAlumno, httpOption)//
  }
*/

}
