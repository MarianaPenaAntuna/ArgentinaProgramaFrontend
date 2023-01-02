import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombre: string ="";
  fecha: string ="";
  descripcion: string ="";
  link: string ="";

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyecto= new Proyecto(this.nombre, this.fecha, this.descripcion, this.link);
    this.proyectoService.save(proyecto).subscribe(data =>{
      alert("Proyecto Nuevo Agregado");
      this.router.navigate(['']);
    }, err=> {
      alert("falló");
      this.router.navigate(['']);
    }
    )
      
      
  }

}
