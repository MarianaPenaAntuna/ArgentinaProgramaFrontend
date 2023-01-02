import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './components/acercade/edit-acercade/edit-acercade.component';
import { NewAcercadeComponent } from './components/acercade/new-acercade/new-acercade.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { FormIngresoComponent } from './components/form-ingreso/form-ingreso.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';


const routes: Routes =[
  { path: 'Portfolio', component: PortfolioComponent},
  { path: 'iniciarSesion', component: FormIngresoComponent},
  { path: '' , redirectTo: 'Portfolio', pathMatch: 'full'},
  { path: 'nuevaExperiencia', component: NewExperienciaComponent },
  { path: 'editarExperiencia/:id', component: EditExperienciaComponent },
  { path: 'nuevaEducacion', component: NewEducacionComponent },
  { path: 'editarEducacion/:id', component: EditEducacionComponent },
  { path: 'nuevoProyecto', component: NewProyectoComponent},
  { path: 'editarProyecto/:id', component: EditProyectoComponent},
  { path: 'nuevoAcercade', component: NewAcercadeComponent },
  { path: 'editarAcercade/:id', component: EditAcercadeComponent},
  { path: 'nuevaSkill', component: NewSkillComponent },
  { path: 'editarSkill/:id', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
