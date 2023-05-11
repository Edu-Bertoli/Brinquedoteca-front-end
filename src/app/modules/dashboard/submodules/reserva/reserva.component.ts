import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/lib/login/auth.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  constructor (private authService: AuthService){

  }
  token: string = ""
  
  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok
  }

}
