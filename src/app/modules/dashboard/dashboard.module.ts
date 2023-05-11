import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueComponent } from './submodules/estoque/estoque.component';
import { HomeComponent } from './submodules/home/home.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from 'src/app/app.component';
import { ReservaComponent } from './submodules/reserva/reserva.component';
import { ManutencaoaComponent } from './submodules/manutencaoa/manutencaoa.component';
import { EmprestimoBrinquedoComponent } from './submodules/emprestimo-brinquedo/emprestimo-brinquedo.component';
import { CadastroUsuarioComponent } from './submodules/cadastro-usuario/cadastro-usuario.component';
import { ControleUsuarioComponent } from './submodules/controle-usuario/controle-usuario.component';

@NgModule({
  declarations: [HomeComponent],

  imports: [CommonModule, RouterModule],
  bootstrap: [AppComponent],
})
export class DashboardModule {}
