import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  
  eduEdit: Educacion = null;

  constructor(private educacionService: EducacionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      data =>{
        this.eduEdit=data;
      }, err=>{
        alert("error al modificar educación");
      this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id=this.activatedRoute.snapshot.params['id'];
    this.educacionService.update(id, this.eduEdit).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("error al modificar educación");
      this.router.navigate(['']);
    }
    )
  }

}
