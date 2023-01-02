import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';



@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private baseUrl = "https://argentinaprogramabackend.onrender.com/educaciones/";

constructor(private httpClient:HttpClient) {}

public lista(): Observable<Educacion[]>{
  return this.httpClient.get<Educacion[]>(this.baseUrl+'lista');
}

public detail(id: number): Observable<Educacion>{
  return this.httpClient.get<Educacion>(this.baseUrl+ `detail/${id}`)
}


public save(educacion: Educacion): Observable<any>{
  return this.httpClient.post<any>(this.baseUrl+'create', educacion);
}

public update(id:number, educacion: Educacion): Observable<any>{
  return this.httpClient.put<any>(this.baseUrl + `update/${id}`, educacion);
}

delete(id:number):Observable<any>{
  return this.httpClient.delete<any>(this.baseUrl + `delete/${id}`);

 }

}