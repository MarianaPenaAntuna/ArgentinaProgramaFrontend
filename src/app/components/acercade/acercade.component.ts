import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  perso: Persona[]=[];
  
  constructor(private personaService: PersonaService, private tokenService: TokenService, private router: Router) { }
  isLogged=false;
  
  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else {
      this.isLogged=false;
    }
  }

cargarPersona():void{
this.personaService.lista().subscribe(
  data => {this.perso = data;})
}

delete(id?: number){
  if(id != undefined){
    this.personaService.delete(id).subscribe(data=>{
      this.cargarPersona();
    }, err=>{
      alert("no se pudieron borrar los datos personales");
    })
  }
}

}
