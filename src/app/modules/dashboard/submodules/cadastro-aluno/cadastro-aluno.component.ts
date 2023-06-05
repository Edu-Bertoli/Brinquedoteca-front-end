import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotificationService } from '../../lib/notification-service';


@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
    
  constructor(private authService: AuthService , private http: HttpClient, public router: Router,private notifyService: NotificationService ){}
  token: string = ""
  momentform!: FormGroup
  
  @Input() btnText!: string


  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok  
    this.momentform = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      RA: new FormControl('', [Validators.required]),
      serie: new FormControl('', [Validators.required])
    });


    console.log(this.momentform)
  }
  
  signAluno(){
    return this.http.post<any>('http://localhost:3000/aluno', this.momentform.value).subscribe({next:(res: any) => {
      this.showToasterSuccess()
      this.momentform.reset()
    }, error:(res: any) => {
      this.showToasterFail()
    } }, )
  }
  showToasterSuccess() {
    this.notifyService.showSuccess('Criado com sucesso', 'Sucesso!');
  }
  navigateTo(value: any) {
    if (value) {
      this.router.navigate([value]);
      console.log(value)
  }
  return false;
  }
  showToasterFail() {
    this.notifyService.showFail('Criado com erro', 'teste');
  }
 
  get serie(){
    return this.momentform.get('serie')!
  }
  
  get nome(){
    return this.momentform.get('nome')!
  }
   
  get ra(){
    return this.momentform.get('RA')!
  }
  
 

  onsubmit(){
    this.signAluno()
  }
}
