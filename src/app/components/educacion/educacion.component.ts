import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  edu: Educacion[]=[];
  
  constructor(private educacionService: EducacionService, private tokenService: TokenService, private router: Router) { }
  isLogged=false;
  
  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else {
      this.isLogged=false;
    }
  }

cargarEducacion():void{
this.educacionService.lista().subscribe(
  data => {this.edu = data;})
}

delete(id?: number){
  if(id != undefined){
    this.educacionService.delete(id).subscribe(data=>{
      this.cargarEducacion();
    }, err=>{
      alert("no se pudo borrar la educacion");
    })
  }
}

}
