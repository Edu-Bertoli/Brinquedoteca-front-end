import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';

@Component({
  selector: 'app-ajuda-component',
  templateUrl: './ajuda-component.component.html',
  styleUrls: ['./ajuda-component.component.css']
})
export class AjudaComponentComponent {
 
  constructor(private authService: AuthService, private router: Router){
  }

  token: string = ""
  
  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok
  }
  navigateTo(value: any) {
    if (value) {
      this.router.navigate([value]);
      console.log(value)
  }
}
}
