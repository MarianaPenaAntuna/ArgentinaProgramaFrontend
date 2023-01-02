import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe
  : Experiencia[]=[];
  
  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService, private router: Router) { }
  isLogged=false;
  
  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else {
      this.isLogged=false;
    }
  }

cargarExperiencia():void{
this.experienciaService.lista().subscribe(
  data => {this.expe = data;})
}

delete(id?: number){
  if(id != undefined){
    this.experienciaService.delete(id).subscribe(data=>{
      this.cargarExperiencia();
    }, err=>{
      alert("no se pudo borrar la experiencia");
    })
  }
}

}
