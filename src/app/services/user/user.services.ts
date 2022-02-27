import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorageService } from './../token-storage.service'
import { User } from '../../models/user'

const TRIKI_API = 'https://localhost:44350/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private TokenService: TokenStorageService) { }


  register(user:User): Observable<any> {
    console.log(user);
    return this.http.post(TRIKI_API + 'User/Register', user, httpOptions);
  }

  update(user:object): Observable<any> {
    console.log(user);
    return this.http.put(TRIKI_API + 'User/Update', user, httpOptions);
  }

  delete(user:number): Observable<any> {
    console.log(user);
    return this.http.delete(TRIKI_API + 'User/' + user);
  }

  search(email:string): Observable<any> {
    return this.http.post(TRIKI_API + 'User/Search', {'email':email}, httpOptions);
  }

  tipoDoc(): Observable<any> {
    return this.http.get(TRIKI_API + 'Doc/GetAll', httpOptions);
  }

}
