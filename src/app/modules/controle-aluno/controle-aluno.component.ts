import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/lib/login/auth.service';
import { DialogExampleComponent } from '../dialog/dialog-example/dialog-example.component';
import { Router } from '@angular/router';

type aluno = {
  Nome: string;
  RA: number;
  Serie: string;
};

@Component({
  selector: 'app-controle-aluno',
  templateUrl: './controle-aluno.component.html',
  styleUrls: ['./controle-aluno.component.css'],
})
export class ControleAlunoComponent {
  POSTS: aluno[] = [];
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
    this.dialog.open(DialogExampleComponent, {
      hasBackdrop: true,

      data: {
        event: this.POSTS[prseInt - 1],
      },
    });
  }
  navigateTo(value: any) {
    if (value) {
      this.router.navigate([value]);
      console.log(value)
  }
  return false;
  }
  postList(): void {
    let params: any = {
      currentPage: this.currentPage,
    };

    if (this.searchText) {
      params['descricao'] = this.searchText;
    }
    this.http
      .get('http://localhost:3000/alunos', {
        params: { currentPage: this.currentPage },
      })
      .subscribe((res: any) => {
        res.forEach((element: any) => {
          const aluno: aluno = {
            Nome: element.Nome,
            RA: element.RA,
            Serie: element.Serie,
          };

          this.POSTS.push(aluno);
        });
      });
  }

  onProximo() {
    this.currentPage += 1;

    this.postList();
  }

  onAnterior() {
    this.currentPage -= 1;
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }

    this.postList();
  }
}
