import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './modules/login/login.module';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/dashboard/submodules/home/home.component';
import { EstoqueComponent } from './modules/dashboard/submodules/estoque/estoque.component';
import { AuthService } from './lib/login/auth.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './lib/login/auth-guard';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { cadastroBrinquedoComponent } from './modules/dashboard/submodules/cadastroBrinquedo/cadastroBrinquedo.component';
import { CadastroAlunoComponent } from './modules/dashboard/submodules/cadastro-aluno/cadastro-aluno.component';
import { CadastroUsuarioComponent } from './modules/dashboard/submodules/cadastro-usuario/cadastro-usuario.component';
import { ControleUsuarioComponent } from './modules/dashboard/submodules/controle-usuario/controle-usuario.component';
import { cadastroUsuarioModule } from './modules/dashboard/submodules/cadastro-usuario/cadastro-usuario.component.module';
import { ManutencaoaComponent } from './modules/dashboard/submodules/manutencaoa/manutencaoa.component';
import { EmprestimoBrinquedoComponent } from './modules/dashboard/submodules/emprestimo-brinquedo/emprestimo-brinquedo.component';
import { ReservaComponent } from './modules/dashboard/submodules/reserva/reserva.component';
import { AuthLogin } from './lib/login/login-guard';


const routes: Routes = [
  {path: '', redirectTo: 'login',  pathMatch: 'full'},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canActivateChild:[],
    children: [
      {
        // /dashboard/
        path: 'home',
        component: HomeComponent,
      },
      {
        // /dashboard/estoque
        path: 'estoque',
        component: EstoqueComponent,
      },
      {
        path:'cadastroBrinquedo',
        component: cadastroBrinquedoComponent
      },
      {
        path: 'cadastroAluno',
        component: CadastroAlunoComponent
      },
      {
        path: 'controleUsuario',
        component: ControleUsuarioComponent,
        canActivate:[AuthLogin]
      },
      {
        path: 'cadastroUsuario',
        component: CadastroUsuarioComponent,
        canActivate:[AuthLogin]
      },
      {
        path: 'manutencao',
        component: ManutencaoaComponent
      },
      {
        path:'emprestimo',
        component: EmprestimoBrinquedoComponent
      },{
        path: 'reserva',
        component: ReservaComponent
      }
    
    ],
  },
  { path: 'login', component: LoginComponent },
  
];
export function tokenGetter() {
  return localStorage.getItem("access_token");
}
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    RouterModule,
    HttpClientModule,
    MatIconModule

  ],
  providers: [AuthService],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {}
