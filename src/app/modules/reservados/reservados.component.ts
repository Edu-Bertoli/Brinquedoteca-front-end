import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';
import { DialogReservadosComponent } from '../dialog/dialog-reservados/dialog-reservados.component';
import { MatDialog } from '@angular/material/dialog';

type Reserva = {
  id?: number;
  Nome?: string;
  Descricao?: string;
  RA?: number;
  serie?: string
  ref?: string;
  nome?: string
  tempoLimite?: string,
  cadastro_area?: string,
  idademin?: number,
  idademax?: number
  cadastro_classificacao?: string,
  id_brinquedo: number,
  id_estoque: number,
};

@Component({
  selector: 'app-reservados',
  templateUrl: './reservados.component.html',
  styleUrls: ['./reservados.component.css']
})
export class ReservadosComponent {
  constructor(private authService: AuthService, private http: HttpClient, private router: Router, private dialog: MatDialog) {}
  token: string = '';
  POSTS: any[] = [];
  searchText!: string;
  currentPage: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  
  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token');
    let tok = this.authService.getDecodedAccessToken(token);
    this.token = tok;

    this.reserva();
  }
 
  reserva() {
    let params: any = {
      currentPage: this.currentPage,
    };

    
    this.http
      .get('http://localhost:3000/reservados', {
       params: params
      })
      .subscribe((res: any) => {
        this.POSTS = [];
        console.log(res)
        res.forEach((element: any) => {
          const paddingleft = element.id_reserva.toString().padStart(4, '0')
          const tempo = element.TempoLimite
          const date = new Date(tempo)
          const tempinhu = date.toLocaleString('pt-br', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
          })
          const reserva: Reserva = {
            id: paddingleft,
            Nome: element.Reserva_Aluno.Nome,
            Descricao: element.Reserva_Brinquedo.Descricao,
            ref: element.Reserva_Brinquedo?.Brinquedo_Estoque[0]?.Referencia,
            RA: element.Reserva_Aluno.RA,
            serie: element.Reserva_Aluno.Serie,
            nome: element.Reserva_Aluno.Nome,
            idademax: element.Reserva_Brinquedo.idade_max,
            idademin: element.Reserva_Brinquedo.idade_min,
            cadastro_area: element.Reserva_Brinquedo.Cadastro_area.descricao,
            cadastro_classificacao: element.Reserva_Brinquedo.Cadastro_classificacao.Descricao,
             id_brinquedo: element.Reserva_Brinquedo.id_brinquedo,
            id_estoque: element.Reserva_Brinquedo?.Brinquedo_Estoque[0]?.id_estoque ,
            tempoLimite: tempinhu
         }
          this.POSTS.push(reserva)
         console.log(this.POSTS)
        });
       
      });
  }

  onProximo() {
    this.currentPage += 1;
    this.POSTS = []
    this.reserva();
  }

  onAnterior() {
    this.currentPage -= 1;
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    this.POSTS = []

    this.reserva();
  }
  onclick(event: any) {
    console.log(event);
    const teste = event;
    const prseInt = parseInt(teste);
    console.log(this.POSTS);
    this.dialog.open(DialogReservadosComponent, {
      hasBackdrop: true,

      data: {
        event: this.POSTS[prseInt],
      },
    });
  }
  navigateTo(value: any) {
    if (value) {
      this.router.navigate([value]);
      console.log(value)
  }
}
}
