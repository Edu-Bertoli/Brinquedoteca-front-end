import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';

type Cargo = {
  cargo: string
  };

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})

export class CadastroUsuarioComponent implements OnInit {
  

  constructor(private authService: AuthService, private http: HttpClient, public router: Router){}
  token: string = ""
  momentform!: FormGroup
 
 
  CARGO: Cargo[] = []
  

  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok
    this.momentform = new FormGroup({
      email: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required])
    })

    
  }

 

  signUser(){
     return this.http.post<any>('http://localhost:3000/cadastro', this.momentform.value).subscribe((res: any) =>{
     })
  }
  onsubmit(){
    this.signUser()
  }
}
