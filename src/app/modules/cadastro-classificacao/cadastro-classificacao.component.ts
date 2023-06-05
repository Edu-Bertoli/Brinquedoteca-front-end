import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';
import { NotificationService } from '../dashboard/lib/notification-service';

@Component({
  selector: 'app-cadastro-classificacao',
  templateUrl: './cadastro-classificacao.component.html',
  styleUrls: ['./cadastro-classificacao.component.css']
})
export class CadastroClassificacaoComponent implements OnInit {
  token: string = ""
  momentform!: FormGroup
  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private notifyService: NotificationService){
    
  }
  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok

    this.momentform = new FormGroup({
      classificacao: new FormControl('', [Validators.required])
    })
  }

  onsubmit(){
    this.http.post('http://localhost:3000/criar/classificacao', this.momentform.value).subscribe({next: (res: any) => {
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
