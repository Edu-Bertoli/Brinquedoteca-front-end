import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';
import { DialogemprestadosComponent } from 'src/app/modules/dialog/dialogemprestados/dialogemprestados.component';

type Emprestimo = {
  id: number,
  RA: number,
  aluno: string,
  Descricao: string,
  Ref: string,
  cadastro_area: string,
  cadastro_classificacao: string,
  idademin: number,
  idademax:  number,
  id_brinquedo: number,
  serie: string,
  data_devolucao: string,
  data_entrada: string
}

@Component({
  selector: 'app-emprestimo-brinquedo',
  templateUrl: './emprestimo-brinquedo.component.html',
  styleUrls: ['./emprestimo-brinquedo.component.css']
})

export class EmprestimoBrinquedoComponent implements OnInit {
  constructor(private authService: AuthService, private http: HttpClient, private router: Router, private dialog: MatDialog){}
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

  emprestimos(){
    this.http.get('http://localhost:3000/alugados', {params: {'currentPage': this.currentPage} }).subscribe((res : any) => {
      this.POSTS = []
      
    res.forEach((element: any) => {
        const date = element.Data_devolucao
        const date2 = element.Data_Retirada
        const dateObject = new Date(date)
        const dateObject2 = new Date(date2)

        console.log(element)
        var a = dateObject.getTimezoneOffset()
        const formattedString = dateObject.toLocaleString('pt-br', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        })
        const formattedString2 = dateObject2.toLocaleString('pt-br', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        })
        const paddingleft = element.id_Emprestimo.toString().padStart(4, '0');
        
        const emprestimo: Emprestimo = {
          id: paddingleft,
          aluno: element.Reserva_Aluno.Nome,
          RA: element.Reserva_Aluno.RA,
          Descricao: element.Reserva_Brinquedo.Descricao,
          Ref: element.Reserva_Brinquedo.Brinquedo_Estoque[0].Referencia,
          cadastro_area: element.Reserva_Brinquedo.Cadastro_area.descricao,
          cadastro_classificacao: element.Reserva_Brinquedo.Cadastro_classificacao.Descricao,
          idademax: element.Reserva_Brinquedo.idade_max,
           idademin: element.Reserva_Brinquedo.idade_min,
           id_brinquedo: element.Reserva_Brinquedo.id_brinquedo,
           serie: element.Reserva_Aluno.Serie,
           data_devolucao: formattedString,
           data_entrada: formattedString2
        }
        this.POSTS.push(emprestimo)
        console.log(this.POSTS)
      });
    })
  }
  onclick(event: any) {
    console.log(event);
    const teste = event;
    const prseInt = parseInt(teste);
    console.log(this.POSTS);
    this.dialog.open(DialogemprestadosComponent, {
      hasBackdrop: true,

      data: {
        event: this.POSTS[prseInt],
      },
    });
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
