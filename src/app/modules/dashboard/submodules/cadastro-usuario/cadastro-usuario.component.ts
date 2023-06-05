import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';
import { NotificationService } from '../../lib/notification-service';
import { error } from 'jquery';

type Cargo = {
  cargo: string;
};
const options = { positionClass: 'toast-custom' };
@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
})
export class CadastroUsuarioComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    public router: Router,
    public notifyService: NotificationService
  ) {}
  token: string = '';
  momentform!: FormGroup;
  @Input() btnText!: string

  CARGO: Cargo[] = [];

  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token');
    let tok = this.authService.getDecodedAccessToken(token);
    this.token = tok;
    this.momentform = new FormGroup({
      email: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required])
    });
  }


  showToasterSuccess() {
    this.notifyService.showSuccessUser('Criado com sucesso', 'Sucesso!');
  }

  showToasterFail() {
    this.notifyService.showFailUser('Criado com erro', 'teste');
  }
  get senha(){
    return this.momentform.get('senha')!
  }
  get email(){
    return this.momentform.get('email')!
  }
  
  get nome(){
    return this.momentform.get('nome')!
  }
  
  get cargo(){
    return this.momentform.get('cargo')!
  }

  signUser() {
    return this.http
      .post<any>('http://localhost:3000/cadastro', this.momentform.value)
      .subscribe({
        next: (res: any) => {
          this.showToasterSuccess();
          this.momentform.reset()
        },
        error: (error) => {
          this.showToasterFail();
        },
      });
  }
  onsubmit() {
    this.signUser();
  }
}
