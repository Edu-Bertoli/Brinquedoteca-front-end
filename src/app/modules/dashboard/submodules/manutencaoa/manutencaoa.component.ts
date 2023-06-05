import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/lib/login/auth.service';
import { DialogManutencaoComponent } from 'src/app/modules/dialog/dialog-manutencao/dialog-manutencao.component';
 
type manutencao = {
    data_entrada: string
    Descricao: string
    id: number
    data_saida: string,
    referencia: string,
    descricao: string
    id_estoque: number,
    id_brinquedo: number    
}

@Component({
  selector: 'app-manutencaoa',
  templateUrl: './manutencaoa.component.html',
  styleUrls: ['./manutencaoa.component.css']
})
export class ManutencaoaComponent implements OnInit {
  constructor(private authService: AuthService, private http: HttpClient, private dialog: MatDialog){}
  token: string = ""
  POSTS: manutencao[] = []
  searchText!: string

  currentPage: number = 1
  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok


    this.manutencao()
  }
  onclick(event: any) {
    console.log(event);
    const teste = event;
    const prseInt = parseInt(teste);
    console.log(this.POSTS);
    this.dialog.open(DialogManutencaoComponent, {
      hasBackdrop: true,

      data: {
        event: this.POSTS[prseInt],
      },
    });
  }

  manutencao(){
    this.http.get('http://localhost:3000/manutencao', {
      params:{
        currentPage: this.currentPage
      }
    }).subscribe((res: any) => {
      this.POSTS = []
      



      res.forEach((element: any) => {
        console.log(element)
        const date = element.Data_Entrada
        const dateObject = new Date(date)

        const date2 = element?.Data_Saida
        
        const dateObject2 = new Date(date2)
      
        const formattedString = dateObject.toLocaleString('pt-br', {
         day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      })

      var formattedString2 = dateObject2.toLocaleString('pt-br', {
        day: '2-digit',
       month: '2-digit',
       year: '2-digit',
     })
     if(date2 == null){
      dateObject2 == null
      console.log(date2)
      formattedString2 = ''
    }
        const paddingLeft = element.id_manutencao.toString().padStart(4, '0')

        const manutencao : manutencao = {
          data_entrada: formattedString,
          Descricao: element.Descricao,
          id: paddingLeft,
          data_saida: formattedString2,
          descricao: element.Brinquedo_Manutencao?.Cadastro_Estoque?.Descricao,
          id_brinquedo: element.Brinquedo_Manutencao?.Cadastro_Estoque?.id_brinquedo,
          id_estoque: element.Brinquedo_Manutencao?.id_estoque,
          referencia: element.Brinquedo_Manutencao?.Referencia,
        }

        this.POSTS.push(manutencao)
        console.log(this.POSTS)
      });

    })
  }

  onProximo(){

    this.currentPage += 1
    this.POSTS = [];
    this.manutencao()
  }

  onAnterior(){
    this.POSTS = [];

    this.currentPage -= 1
    if(this.currentPage < 1){
      this.currentPage = 1
    }
    this.manutencao()

  }
}
