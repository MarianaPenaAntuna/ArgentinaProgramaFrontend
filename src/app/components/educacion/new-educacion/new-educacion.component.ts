import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  
    lugar: string ="";
    curso: string ="";
    imagen: string ="";
    fecha: string ="";
    descripcion: string ="";
  
    constructor(private educacionService: EducacionService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
    onCreate():void{
      const experiencia= new Educacion(this.lugar, this.curso, this.imagen, this.fecha, this.descripcion);
      this.educacionService.save(experiencia).subscribe(data =>{
        alert("Educacion Nueva Agregada");
        this.router.navigate(['']);
      }, err=> {
        alert("falló");
        this.router.navigate(['']);
      }
      )
        
        
    }
  
  }
  

