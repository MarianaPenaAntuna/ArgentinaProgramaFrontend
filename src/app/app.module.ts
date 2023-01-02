import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress'
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LoginComponent } from './components/login/login.component';
import { FormIngresoComponent } from './components/form-ingreso/form-ingreso.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component'
import { AuthService } from './servicios/auth.service';
import { PersonaService } from './servicios/persona.service';
import { TokenService } from './servicios/token.service';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewAcercadeComponent } from './components/acercade/new-acercade/new-acercade.component';
import { EditAcercadeComponent } from './components/acercade/edit-acercade/edit-acercade.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { interceptorProvider } from './servicios/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercadeComponent,
    EducacionComponent,
    SkillsComponent,
    LoginComponent,
    FormIngresoComponent,
    PortfolioComponent,
    ProyectosComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewAcercadeComponent,
    EditAcercadeComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    NewSkillComponent,
    EditSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
  ],
  providers: [AuthService, PersonaService, TokenService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
