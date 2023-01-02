import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  
  skEdit: Skill = null;

  constructor(private skillService: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      data =>{
        this.skEdit=data;
      }, err=>{
        alert("error al modificar la habilidad");
      this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id=this.activatedRoute.snapshot.params['id'];
    this.skillService.update(id, this.skEdit).subscribe(data=>{
      this.router.navigate(['']);
    }, err =>{
      alert("error al modificar la habilidad");
      this.router.navigate(['']);
    }
    )
  }

}
