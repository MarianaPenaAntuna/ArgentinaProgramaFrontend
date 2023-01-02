import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = "https://argentinaprogramabackend.onrender.com/skills/";

  constructor(private httpClient:HttpClient) {}
  
  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.baseUrl+'lista');
  }
  
  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.baseUrl+ `detail/${id}`)
  }
  
  
  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+'create', skill);
  }
  
  public update(id:number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.baseUrl + `update/${id}`, skill);
  }
  
  delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.baseUrl + `delete/${id}`);
  
   }
}