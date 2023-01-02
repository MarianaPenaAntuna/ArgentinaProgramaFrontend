import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  
  private baseUrl = "https://argentinaprogramabackend.onrender.com/personas/";

constructor(private httpClient:HttpClient) {}

public lista(): Observable<Persona[]>{
  return this.httpClient.get<Persona[]>(this.baseUrl+'lista');
}

public detail(id: number): Observable<Persona>{
  return this.httpClient.get<Persona>(this.baseUrl+ `detail/${id}`)
}


public save(persona: Persona): Observable<any>{
  return this.httpClient.post<any>(this.baseUrl+'create', persona);
}

public update(id:number, persona: Persona): Observable<any>{
  return this.httpClient.put<any>(this.baseUrl + `update/${id}`, persona);
}

delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.baseUrl + `delete/${id}`);

 }


}

