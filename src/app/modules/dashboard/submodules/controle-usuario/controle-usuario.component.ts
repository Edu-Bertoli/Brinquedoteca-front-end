import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';
import { DialogUsuarioComponent } from 'src/app/modules/dialog/dialog-usuario/dialog-usuario.component';

type ControleUsuario = {
  id: number,
  Nome: string,
  Funcao: string,
  email: string
}

@Component({
  selector: 'app-controle-usuario',
  templateUrl: './controle-usuario.component.html',
  styleUrls: ['./controle-usuario.component.css']
})
export class ControleUsuarioComponent implements OnInit{
  constructor(private authService: AuthService, private http: HttpClient, private router: Router, private dialog: MatDialog){}
  token: string = ""
  POSTS: ControleUsuario[] = []
  searchText!: string
  currentPage: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok
    this.getFuncionarios()
  }
  navigateTo(value: any) {
    if (value) {
      this.router.navigate([value]);
      console.log(value)
  }
  return false;
  }
  getFuncionarios(): void {
     this.http.get('http://localhost:3000/funcionarios', {
      params:{
        'currentPage': this.currentPage 
      }
    }).subscribe((response: any) => {
        this.POSTS = []
        var size = response.length
        console.log(response)
        response.forEach((element: any) => {
          const paddingleft = element.id_usuario.toString().padStart(4, '0');
          const funcionarios : ControleUsuario = {
            id: paddingleft,
            Nome: element.Nome,
            Funcao: element.Nivel,
            email: element.Email
          }
          this.POSTS.push(funcionarios)
          console.log(this.POSTS)
        });
    })
  }
  onclick(event: any) {
    console.log(event);
    const teste = event;
    const prseInt = parseInt(teste);
    console.log(this.POSTS);
    this.dialog.open(DialogUsuarioComponent, {
      hasBackdrop: true,

      data: {
        event: this.POSTS[prseInt],
      },
    });
  }
  onProximo(){
    this.currentPage += 1
    
    this.getFuncionarios()
    
  }

  onAnterior(){
    this.currentPage -= 1
    if(this.currentPage < 1){
      this.currentPage = 1
    }

    this.getFuncionarios()

  
  }
}
