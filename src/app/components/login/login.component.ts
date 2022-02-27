import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.services.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private location: Location) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.location.go('/board-users');
      this.reloadPage();
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        if(data.sucess){
          this.tokenStorage.saveToken(data.data.token);
          this.tokenStorage.saveUser(data);
          this.isLoggedIn = data.sucess;
          this.location.go('/board-users');
          this.reloadPage();
        }else{
          this.isLoginFailed = true;
          this.errorMessage = data.message;
        }

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
