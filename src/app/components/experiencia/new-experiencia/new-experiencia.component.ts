import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  lugar: string ="";
  puesto: string ="";
  imagen: string ="";
  fecha: string ="";
  descripcion: string ="";

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const experiencia= new Experiencia(this.lugar, this.puesto, this.imagen, this.fecha, this.descripcion);
    this.experienciaService.save(experiencia).subscribe(data =>{
      alert("Experiencia Nueva Agregada");
      this.router.navigate(['']);
    }, err=> {
      alert("falló");
      this.router.navigate(['']);
    }
    )
      
      
  }

}
