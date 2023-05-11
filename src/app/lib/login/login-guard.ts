import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { api } from './axios';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthLogin {
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token: any = localStorage.getItem('access_token')
    if (this.authService.getDecodedAccessToken2(token) !== true) {
      this.router.navigate(['/dashboard/home'])
      alert('Nao tem permissão')
    }
    return true;
  }
 
}