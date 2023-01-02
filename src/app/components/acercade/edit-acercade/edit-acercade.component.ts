import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {


  persoEdit: Persona = null;

  constructor(private personaService: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persoEdit=data;
      }, err=>{
        alert("error al modificar los datos personales");
      this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id=this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id, this.persoEdit).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("error al modificar los datos personales");
      this.router.navigate(['']);
    }
    )
  }
}
