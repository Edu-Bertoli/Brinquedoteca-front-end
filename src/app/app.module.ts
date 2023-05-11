import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatInputModule} from '@angular/material/input'
import {MatIconModule } from '@angular/material/icon'
import { ControleUsuarioComponent } from './modules/dashboard/submodules/controle-usuario/controle-usuario.component';
import { EstoqueComponent } from './modules/dashboard/submodules/estoque/estoque.component';
import { CadastroAlunoComponent } from './modules/dashboard/submodules/cadastro-aluno/cadastro-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ControleUsuarioComponent,
    EstoqueComponent,
    CadastroAlunoComponent
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
