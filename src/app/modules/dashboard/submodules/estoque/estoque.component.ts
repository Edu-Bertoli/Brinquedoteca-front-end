import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  DialogPosition,
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/lib/login/auth.service';
import { DialogExampleComponent } from 'src/app/modules/dialog/dialog-example/dialog-example.component';

enum StatusBrinquedo {
  Analise = 'Análise',
  Manutencao = 'Manutenção',
  Disponivel = 'Disponível',
  Alugado = 'Alugado',
  Reservado = 'Reservado',
  Atrasado = 'Atrasado',
  Descartado = 'Descartado'
}
enum FormaDeEntrada {
  Doacao = 'Doação'
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
  brinquedo_estoque: string;
  formaDeEntrada: string;
};

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
})
export class EstoqueComponent implements OnInit {
  POSTS: Estoque[] = [];
  currentPage: number = 1;
  POST: any[] = [];
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  id_estoque: number = 1;
  searchText!: string;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private dialog: MatDialog,
    private router: Router
  ) {}
  token: string = '';

  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token');
    let tok = this.authService.getDecodedAccessToken(token);
    this.token = tok;
    this.postList();
  }
  onclick(event: any) {
    console.log(event);
    const teste = event;
    const prseInt = parseInt(teste);
    console.log(this.POSTS);
    this.dialog.open(DialogExampleComponent, {
      hasBackdrop: true,

      data: {
        event: this.POSTS[prseInt],
      },
    });
  }
 
  postList() {
    let params: any = {
      currentPage: this.currentPage,
    };

    if (this.searchText) {
      params['descricao'] = this.searchText;
    }

    this.http
      .get('http://localhost:3000/estoque', {
        params: params,
      })
      .subscribe((response: any) => {
        this.count = this.POSTS.length;
        console.log(this.currentPage);
        this.POSTS = [];
        response.forEach((element: any) => {
          console.log(element);
          let referencia: string = '';
          let teste = element.id_brinquedo
          referencia += element.Brinquedo_Estoque[0].Referencia;
          const paddingleft = element.id_brinquedo.toString().padStart(4, '0');
          const a = element.Brinquedo_Estoque;
          a.forEach((element: any) => {
            let t: 'Analise' | 'Manutencao' | 'Disponivel' = element.Estoque_Status.status;
            let teste: any = StatusBrinquedo[t];
            element.Estoque_Status.status = teste


            let b: 'Doacao' = element.FormaDeEntrada 
            let c: any = FormaDeEntrada[b]
            element.FormaDeEntrada = c
          });

          const estoqueItem: Estoque = {
            id: paddingleft,
            descricao: element.Descricao,
            quantidade: element.quantidade,
            referencia: referencia,
            cadastro_area: element.Cadastro_area,
            cadastro_classificacao: element.Cadastro_classificacao,
            idademax: element.idade_max,
            idademin: element.idade_min,
            brinquedo_estoque: element.Brinquedo_Estoque,
            formaDeEntrada: element.Brinquedo_Estoque[0].FormaDeEntrada,
          };
          this.POSTS.push(estoqueItem);
          console.log(this.POSTS);

        
        });
      
      });
  }
  
  onProximo() {
    this.currentPage += 1;
    this.POSTS = [];
    this.postList();
  }

  onAnterior() {
    this.currentPage -= 1;
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    this.POSTS = [];

    this.postList();
  }

  navigateTo(value: any) {
    if (value) {
      this.router.navigate([value]);
      console.log(value)
  }
}
}
