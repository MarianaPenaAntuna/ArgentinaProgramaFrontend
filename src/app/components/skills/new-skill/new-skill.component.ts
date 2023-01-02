import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
 
  nombre: string ="";
  porcentaje: number;

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skill= new Skill(this.nombre, this.porcentaje);
    this.skillService.save(skill).subscribe(data =>{
      alert("Habilidad Nueva Agregada");
      this.router.navigate(['']);
    }, err=> {
      alert("falló");
      this.router.navigate(['']);
    }
    )
      
      
  }
}
