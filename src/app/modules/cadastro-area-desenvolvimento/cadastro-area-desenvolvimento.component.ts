import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event, NavigationEnd, Router } from '@angular/router';

import { AuthService } from 'src/app/lib/login/auth.service';
import { NotificationService } from '../dashboard/lib/notification-service';
@Component({
  selector: 'app-cadastro-area-desenvolvimento',
  templateUrl: './cadastro-area-desenvolvimento.component.html',
  styleUrls: ['./cadastro-area-desenvolvimento.component.css']
})
export class CadastroAreaDesenvolvimentoComponent implements OnInit {
  token: string = ""
  momentform!: FormGroup
  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private notifyService: NotificationService){
    
  }
  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok

    this.momentform = new FormGroup({
      desenvolvimento: new FormControl('', [Validators.required])
    })
  }

  onsubmit(){
    this.http.post('http://localhost:3000/criar/desenvolvimento', this.momentform.value).subscribe({next: (res: any) => {
      this.notifyService.showSuccess('Sucesso','Sucesso')
      this.momentform.reset()
    }, error:(res: any) => {
      this.notifyService.showFail('Erro', 'Erro')
      console.log(res)
    }})
  }

  navigateTo(value: any) {
    if (value) {
      this.router.navigate([value]);
      console.log(value)
  }
  return false;
  }
}
