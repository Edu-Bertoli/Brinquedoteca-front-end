import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm, FormBuilder, ControlValueAccessor } from '@angular/forms';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() btnText!: string

  momentform!: FormGroup

  constructor(  public router: Router, public authService: AuthService) {
      
  }
  ngOnInit(): void {
    this.momentform = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get form(){
    return this.momentform.get('email') && this.momentform.get('password')
  }
 
  get email(){
    return this.momentform.get('email')!
  }

  get password(){
    return this.momentform.get('password')!
  }

  onsubmit() {
    this.authService.signIn(this.momentform.value)
  }
}
