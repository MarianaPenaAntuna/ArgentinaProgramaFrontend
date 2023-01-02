import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLab: Experiencia = null;

  constructor(private experienciaService: ExperienciaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data =>{
        this.expLab=data;
      }, err=>{
        alert("error al modificar experiencia");
      this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id=this.activatedRoute.snapshot.params['id'];
    this.experienciaService.update(id, this.expLab).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("error al modificar experiencia");
      this.router.navigate(['']);
    }
    )
  }
   
}
