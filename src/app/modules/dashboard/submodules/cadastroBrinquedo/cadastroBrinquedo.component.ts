import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './cadastroBrinquedo.component.html',
  styleUrls: ['./cadastroBrinquedo.component.css'],
})
export class cadastroBrinquedoComponent implements OnInit {
  constructor(private authService: AuthService, private route: Router){}
  token: string = ""
  
  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok

    
  }
}
