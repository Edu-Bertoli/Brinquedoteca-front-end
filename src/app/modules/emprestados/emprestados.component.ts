import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/lib/login/auth.service';
import { DialogBrinquedoCadastroComponent } from '../dialog/dialog-brinquedo-cadastro/dialog-brinquedo-cadastro.component';
import { NotificationService } from '../dashboard/lib/notification-service';
import { Router } from '@angular/router';

type Emprestimo  = {
  id_estoque: number  
  descricao: string
  id_brinquedo: number
  referencia: string
  area_classificacao: string
  area_desenvolvimento: string,
  idademin: number,
  idademax: number
}

@Component({
  selector: 'app-emprestados',
  templateUrl: './emprestados.component.html',
  styleUrls: ['./emprestados.component.css']
})
export class EmprestadosComponent {
  constructor(private authService: AuthService,  private router: Router, private http: HttpClient, private dialog: MatDialog, private notifyService: NotificationService
    ){}
  token: string = ""
  POSTS: Emprestimo[] = []
  currentPage: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  searchText!: string


  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok

    this.emprestimos()
  }

  onclick(event: any) {
    console.log(event);
    const teste = event;
    const prseInt = parseInt(teste);
    console.log(this.POSTS);
    this.dialog.open(DialogBrinquedoCadastroComponent, {
      hasBackdrop: true,

      data: {
        event: this.POSTS[prseInt],
      },
    });
  }
  emprestimos(){
    this.http.get('http://localhost:3000/disponivel', {params: {'currentPage': this.currentPage} }).subscribe((res : any) => {
      this.POSTS = []
      res.forEach((element: any) => {
        console.log(element)
        const paddingleft = element.id_estoque.toString().padStart(4, '0');

        const fazerEmprestimo: Emprestimo =  {
          descricao: element.Cadastro_Estoque?.Descricao,
          id_brinquedo: element.id_brinquedo,
          id_estoque:paddingleft,
          referencia: element.Referencia,
          area_classificacao: element.Cadastro_Estoque?.Cadastro_area.descricao,
          area_desenvolvimento: element.Cadastro_Estoque?.Cadastro_classificacao.Descricao,
          idademax: element.Cadastro_Estoque?.idade_max,
          idademin: element.Cadastro_Estoque?.idade_min
        }
        this.POSTS.push(fazerEmprestimo)

      });  

    })
  }

  onProximo(){
    this.currentPage += 1
    
    this.emprestimos()
  }
  navigateTo(value: any) {
    if (value) {
      this.router.navigate([value]);
      console.log(value)
  }
  return false;
  }
  onAnterior(){
    this.currentPage -= 1
    if(this.currentPage < 1){
      this.currentPage = 1
    }

    this.emprestimos()

  
  }
}


