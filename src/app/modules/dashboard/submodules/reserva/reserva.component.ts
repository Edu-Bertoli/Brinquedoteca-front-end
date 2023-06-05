import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';
import { DialogReservadosParte2Component } from 'src/app/modules/dialog/dialog-reservados-parte2/dialog-reservados-parte2.component';

type Reserva = {
  Nome: string;
  Descricao: string;
  RA: number;
  ref: string;
  idademin: number,
  idademax: number,
  cadastro_area: string,
  cadastro_desenvolvimento: string,
  Serie: string,
  id_Brinquedo: number
};

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})
export class ReservaComponent implements OnInit {
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
  onclick(event: any) {
    console.log(event);
    const teste = event;
    const prseInt = parseInt(teste);
    console.log(this.POSTS);
    this.dialog.open(DialogReservadosParte2Component, {
      hasBackdrop: true,

      data: {
        event: this.POSTS[prseInt],
      },
    });
  }
  reserva() {
    let params: any = {
      page: this.currentPage,
    };

    
    this.http
      .get('http://localhost:3000/reserva', {
       params: params
      })
      .subscribe((res: any) => {
        this.POSTS = [];
        res.forEach((element: any) => {
          console.log(element);
          const teste = element.Reserva_Brinquedo;
          const reserva: Reserva = {
            Descricao: element.Reserva_Brinquedo?.Descricao,
            Nome: element.Reserva_Aluno.Nome,
            RA: element.Reserva_Aluno.RA,
            ref: element.Reserva_Brinquedo?.Brinquedo_Estoque[0]?.Referencia,
            idademax: element.Reserva_Brinquedo.idade_max,
            idademin : element.Reserva_Brinquedo.idade_min,
            cadastro_area: element.Reserva_Brinquedo.Cadastro_area.descricao,
            cadastro_desenvolvimento: element.Reserva_Brinquedo.Cadastro_classificacao.Descricao,
            Serie: element.Reserva_Aluno.Serie,
            id_Brinquedo: element.Reserva_Brinquedo.id_brinquedo
          };
          console.log(element.Reserva_Brinquedo);
          this.POSTS.push(reserva);
          console.log(reserva);
        });
      });
  }

  onProximo() {
    this.currentPage += 1;

    this.reserva();
  }

  onAnterior() {
    this.currentPage -= 1;
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }

    this.reserva();
  }

  navigateTo(value: any) {
    if (value) {
      this.router.navigate([value]);
      console.log(value)
  }
}
}
