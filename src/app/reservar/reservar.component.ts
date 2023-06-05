import { Component } from '@angular/core';
import { AuthService } from '../lib/login/auth.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../modules/dialog/dialog-example/dialog-example.component';
import { Router } from '@angular/router';
import { DialogReservaComponent } from '../modules/dialog/dialog-reserva/dialog-reserva.component';
enum FormaDeEntrada {
  Doacao = 'Doação',
  Compra = 'Compra'
}
type Estoque = {
  id: number;
  descricao: string;
  referencia: string;
  quantidade: number;
  cadastro_area: string;
  cadastro_classificacao: string;
  idademin: number;
  idademax: number;
  formaDeEntrada: string;
};
@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent {
  constructor(private authService: AuthService, private http: HttpClient, private dialog: MatDialog, private router: Router) {}
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
      .get('http://localhost:3000/estoque', {
       params: params
      })
      .subscribe((res: any) => {
        this.POSTS = [];
        res.forEach((element: any) => {
          console.log(element);
          let referencia: string = '';
          referencia += element.Brinquedo_Estoque[0].Referencia;
          const paddingleft = element.id_brinquedo.toString().padStart(4, '0');
          const a = element.Brinquedo_Estoque[0];
          let b: 'Doacao' | 'Compra' = a.FormaDeEntrada 
          let c: any = FormaDeEntrada[b]
          element.FormaDeEntrada = c

          const estoqueItem: Estoque = {
            id: paddingleft,
            descricao: element.Descricao,
            quantidade: element.quantidade,
            referencia: referencia,
            cadastro_area: element.Cadastro_area,
            cadastro_classificacao: element.Cadastro_classificacao,
            idademax: element.idade_max,
            idademin: element.idade_min,
            formaDeEntrada: c
          };
          this.POSTS.push(estoqueItem);
          console.log(this.POSTS);
        });
      });
  }
  onclick(event: any) {
    console.log(event);
    const teste = event;
    const prseInt = parseInt(teste);
    console.log(this.POSTS);
    this.dialog.open(DialogReservaComponent, {
      hasBackdrop: true,

      data: {
        event: this.POSTS[prseInt],
      },
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