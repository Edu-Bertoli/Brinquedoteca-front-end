import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwtDecode from 'jwt-decode';
import { User } from './user-login';
import { Observable } from 'rxjs';
@Injectable({

  providedIn:'root'
})
export class AuthService {
  constructor(private http: HttpClient, public router: Router) {}


  signIn(user: User){
    return this.http
      .post<any>('http://localhost:3000/login', user)
      .subscribe((res: any) => {
        console.log(res.access_token)
        localStorage.setItem('access_token', res.access_token);
        this.router.navigate(['/dashboard/home'])
  })
 }
 getToken() {
  return localStorage.getItem('access_token');
}
get isLoggedIn(): boolean {
  let authToken = localStorage.getItem('access_token');
  return authToken !== null ? true : false;
}
doLogout() {
  let removeToken = localStorage.removeItem('access_token');
  if (removeToken == null) {
    this.router.navigate(['/login']);
  }
}
getDecodedAccessToken(token: string): any {
  try {
    const decode: any = jwtDecode(token);
    return decode.Nome
  } catch(Error) {
    return null;
  }
}
getDecodedAccessToken2(token: string): any {
  try {
    const decode: any = jwtDecode(token);
    return decode.Nivel == 'Diretor' ? true : false
  } catch(Error) {
    return null;
  }
} 
getAllEstoque(): Observable<any>{
      return this.http.get('http://localhost:3000/estoque') 
}

}

