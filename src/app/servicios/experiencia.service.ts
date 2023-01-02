import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

private baseUrl = "https://argentinaprogramabackend.onrender.com/experiencias/";

constructor(private httpClient:HttpClient) {}

public lista(): Observable<Experiencia[]>{
  return this.httpClient.get<Experiencia[]>(this.baseUrl+'lista');
}

public detail(id: number): Observable<Experiencia>{
  return this.httpClient.get<Experiencia>(this.baseUrl+ `detail/${id}`)
}

public save(experiencia: Experiencia): Observable<any>{
  return this.httpClient.post<any>(this.baseUrl+'create', experiencia);
}

public update(id:number, experiencia: Experiencia): Observable<any>{
  return this.httpClient.put<any>(this.baseUrl + `update/${id}`, experiencia);
}

delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.baseUrl + `delete/${id}`);

 }

} 
