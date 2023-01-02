import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-new-acercade',
  templateUrl: './new-acercade.component.html',
  styleUrls: ['./new-acercade.component.css']
})
export class NewAcercadeComponent implements OnInit {

  nombre: string ="";
  apellido: string ="";
  imagen: string ="";
  descripcion: string ="";
  frase: string ="";

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const persona= new Persona(this.nombre, this.apellido, this.imagen, this.frase, this.descripcion);
    this.personaService.save(persona).subscribe(data =>{
      alert("Datos personales nuevos agregados");
      this.router.navigate(['']);
    }, err=> {
      alert("falló");
      this.router.navigate(['']);
    }
    )
      
      
  }
}
