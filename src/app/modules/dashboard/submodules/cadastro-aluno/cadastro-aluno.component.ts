import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  constructor(private authService: AuthService , private http: HttpClient, public router: Router){}
  token: string = ""
  momentform!: FormGroup
  


  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok


    this.momentform = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      RA: new FormControl('', [Validators.required]),
      serie : new FormControl('', [Validators.required])
    })
  }

  signAluno(){
    return this.http.post<any>('http://localhost:3000/aluno', this.momentform.value)
  }

  onsubmit(){
    this.signAluno()
  }
}
