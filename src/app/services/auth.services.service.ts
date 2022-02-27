import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorageService } from './token-storage.service'

const AUTH_API = 'https://localhost:44350/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private TokenService: TokenStorageService) { }


  login(user: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'User', {
      user,
      password
    }, httpOptions);
  }

  public isAuthenticated(): boolean {
    let token = this.TokenService.getToken();

    if(token != null){
      return !this.jwtHelper.isTokenExpired(token);
    }
    
    return false;
    
  }
}
