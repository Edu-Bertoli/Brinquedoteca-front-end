import { CUSTOM_ELEMENTS_SCHEMA, NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ControleUsuarioComponent } from './modules/dashboard/submodules/controle-usuario/controle-usuario.component';
import { EstoqueComponent } from './modules/dashboard/submodules/estoque/estoque.component';
import { CadastroAlunoComponent } from './modules/dashboard/submodules/cadastro-aluno/cadastro-aluno.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './modules/dashboard/lib/notification-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroUsuarioComponent } from './modules/dashboard/submodules/cadastro-usuario/cadastro-usuario.component';
import { NgToastModule } from 'ng-angular-popup';
import { EmprestimoBrinquedoComponent } from './modules/dashboard/submodules/emprestimo-brinquedo/emprestimo-brinquedo.component';
import { ReservaComponent } from './modules/dashboard/submodules/reserva/reserva.component';
import { ManutencaoaComponent } from './modules/dashboard/submodules/manutencaoa/manutencaoa.component';
import { cadastroBrinquedoComponent } from './modules/dashboard/submodules/cadastroBrinquedo/cadastroBrinquedo.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogExampleComponent } from './modules/dialog/dialog-example/dialog-example.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ControleAlunoComponent } from './modules/controle-aluno/controle-aluno.component';
import { EmprestadosComponent } from './modules/emprestados/emprestados.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { MatTableModule } from '@angular/material/table';
import { DialogBrinquedoCadastroComponent } from './modules/dialog/dialog-brinquedo-cadastro/dialog-brinquedo-cadastro.component';
import { CadastroClassificacaoComponent } from './modules/cadastro-classificacao/cadastro-classificacao.component';
import { CadastroAreaDesenvolvimentoComponent } from './modules/cadastro-area-desenvolvimento/cadastro-area-desenvolvimento.component';
import { DialogemprestadosComponent } from './modules/dialog/dialogemprestados/dialogemprestados.component';
import { DialogemprestadosParte2Component } from './modules/dialog/dialogemprestados-parte2/dialogemprestados-parte2.component';
import { DialogReservaComponent } from './modules/dialog/dialog-reserva/dialog-reserva.component';
import { ReservarComponent } from './reservar/reservar.component';
import { DialogUsuarioComponent } from './modules/dialog/dialog-usuario/dialog-usuario.component';
import { DialogControleUsuarioEditComponent } from './modules/dialog/dialog-controle-usuario-edit/dialog-controle-usuario-edit.component';
import { DialogManutencaoComponent } from './modules/dialog/dialog-manutencao/dialog-manutencao.component';
import { DialogmanutencaoParte22Component } from './modules/dialog/dialogmanutencao-parte22/dialogmanutencao-parte22.component';
import { DiallogReservaParte2Component } from './modules/dialog/diallog-reserva-parte2/diallog-reserva-parte2.component';
import { ReservadosComponent } from './modules/reservados/reservados.component';
import { DialogReservadosComponent } from './modules/dialog/dialog-reservados/dialog-reservados.component';
import { DialogReservadosParte2Component } from './modules/dialog/dialog-reservados-parte2/dialog-reservados-parte2.component';
import { PENDENCIASComponent } from './modules/pendencias/pendencias.component';
import { DialogPendenciasComponent } from './modules/dialog/dialog-pendencias/dialog-pendencias.component';
import { DialogPendenciasParte2Component } from './modules/dialog/dialog-pendencias-parte2/dialog-pendencias-parte2.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ControleUsuarioComponent,
    EstoqueComponent,
    CadastroAlunoComponent,
    CadastroUsuarioComponent,
    EmprestimoBrinquedoComponent,
    ReservaComponent,
    ManutencaoaComponent,
    cadastroBrinquedoComponent,
    DialogExampleComponent,
    ControleAlunoComponent,
    EmprestadosComponent,
    DialogBrinquedoCadastroComponent,
    EmprestadosComponent,
    CadastroClassificacaoComponent,
    CadastroAreaDesenvolvimentoComponent,
    DialogemprestadosComponent,
    DialogemprestadosParte2Component,
    DialogReservaComponent,
    ReservarComponent,
    DialogUsuarioComponent,
    DialogControleUsuarioEditComponent,
    DialogManutencaoComponent,
    DialogmanutencaoParte22Component,
    DiallogReservaParte2Component,  
    ReservadosComponent, DialogReservadosComponent, DialogReservadosParte2Component, PENDENCIASComponent, DialogPendenciasComponent, DialogPendenciasParte2Component
  ],
  imports: [
    MatFormFieldModule,
    TableVirtualScrollModule,
    MatTableModule,
    BrowserModule,
    NgToastModule,
    Ng2SearchPipeModule,
    ScrollingModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      enableHtml: true,
      closeButton: true,
    }),
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CadastroUsuarioComponent),
    },
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CadastroAlunoComponent),
    },
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => cadastroBrinquedoComponent),
    },
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DialogExampleComponent, MatDialogModule],
})
export class AppModule {}
