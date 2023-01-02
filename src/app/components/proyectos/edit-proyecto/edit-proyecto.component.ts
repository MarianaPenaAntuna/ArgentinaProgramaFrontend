import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

 
  proyEdit: Proyecto = null;

  constructor(private proyectoService: ProyectoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data =>{
        this.proyEdit=data;
      }, err=>{
        alert("error al modificar el proyecto");
      this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id=this.activatedRoute.snapshot.params['id'];
    this.proyectoService.update(id, this.proyEdit).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("error al modificar el proyecto");
      this.router.navigate(['']);
    }
    )
  }

}
