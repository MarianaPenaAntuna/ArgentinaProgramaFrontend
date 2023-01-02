import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private baseUrl = "https://argentinaprogramabackend.onrender.com/proyectos/";

constructor(private httpClient:HttpClient) {}

public lista(): Observable<Proyecto[]>{
  return this.httpClient.get<Proyecto[]>(this.baseUrl+'lista');
}

public detail(id: number): Observable<Proyecto>{
  return this.httpClient.get<Proyecto>(this.baseUrl+ `detail/${id}`)
}


public save(proyecto: Proyecto): Observable<any>{
  return this.httpClient.post<any>(this.baseUrl+'create', proyecto);
}

public update(id:number, proyecto: Proyecto): Observable<any>{
  return this.httpClient.put<any>(this.baseUrl + `update/${id}`, proyecto);
}

delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.baseUrl + `delete/${id}`);

 }
}