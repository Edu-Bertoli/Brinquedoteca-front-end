import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/lib/login/auth.service';

@Component({
  selector: 'app-emprestimo-brinquedo',
  templateUrl: './emprestimo-brinquedo.component.html',
  styleUrls: ['./emprestimo-brinquedo.component.css']
})
export class EmprestimoBrinquedoComponent implements OnInit {
  constructor(private authService: AuthService){}
  token: string = ""
  
  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok
  }

}
