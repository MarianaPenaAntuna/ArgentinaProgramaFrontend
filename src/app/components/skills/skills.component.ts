import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/servicios/skill.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  sk: Skill[]=[];
  
  constructor(private skillService: SkillService, private tokenService: TokenService, private router: Router) { }
  isLogged=false;
  
  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else {
      this.isLogged=false;
    }
  }

cargarSkill():void{
this.skillService.lista().subscribe(
  data => {this.sk = data;})
}

delete(id?: number){
  if(id != undefined){
    this.skillService.delete(id).subscribe(data=>{
      this.cargarSkill();
    }, err=>{
      alert("no se puedo borrar la habilidad solicitada");
    })
  }
}


}
