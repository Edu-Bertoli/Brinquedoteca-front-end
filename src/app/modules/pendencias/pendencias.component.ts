import { Component } from '@angular/core';
import { DialogExampleComponent } from '../dialog/dialog-example/dialog-example.component';
import { AuthService } from 'src/app/lib/login/auth.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogPendenciasComponent } from '../dialog/dialog-pendencias/dialog-pendencias.component';

type Estoque = {
  id?: number;
  descricao?: string;
  referencia?: string;
  status?: string;
  cadastro_area?: string;
  cadastro_classificacao?: string;
  idademin?: number;
  idademax?: number;
  brinquedo_estoque?: string;
  id_brinquedo?: number;
};

@Component({
  selector: 'app-pendencias',
  templateUrl: './pendencias.component.html',
  styleUrls: ['./pendencias.component.css']
})
export class PENDENCIASComponent {
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
    this.dialog.open(DialogPendenciasComponent, {
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
      .get('http://localhost:3000/controle', {
        params: params,
      })
      .subscribe((response: any) => {
        console.log(response)
        response.forEach((element: any) => {
          const paddingleft = element.id_estoque.toString().padStart(4 , '0')
          console.log(element)
          const controle: Estoque = {
            id: paddingleft,
            referencia: element.Referencia,
            descricao: element.Cadastro_Estoque.Descricao,
            status: element.Estoque_Status.status,
            id_brinquedo: element.id_brinquedo,
            idademax: element.Cadastro_Estoque.idade_max,
            idademin: element.Cadastro_Estoque.idade_min,
            cadastro_area: element.Cadastro_Estoque.Cadastro_area.descricao,
            cadastro_classificacao: element.Cadastro_Estoque.Cadastro_classificacao.Descricao

          }
          this.POSTS.push(controle)
          console.log(this.POSTS)
        
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
