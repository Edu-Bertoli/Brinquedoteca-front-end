import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';

@Component({
  selector: 'app-controle-usuario',
  templateUrl: './controle-usuario.component.html',
  styleUrls: ['./controle-usuario.component.css']
})
export class ControleUsuarioComponent implements OnInit{
  constructor(private authService: AuthService){}
  token: string = ""
  
  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok
  }
 

}
