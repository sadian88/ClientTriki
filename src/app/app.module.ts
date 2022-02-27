import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoardUsersComponent } from './components/board-user/board-users.component';
import { LoginComponent } from './components/login/login.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { AuthGuardService } from './helpers/auth-guard';
import { BoardTrikiComponent } from './components/board-triki/board-triki.component';
import { SquareTrikiComponent } from './components/square-triki/square-triki.component'

import { GameService } from './services/game/game-service';
import { TrikiGameComponent } from './components/triki-game/triki-game.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardUsersComponent,
    LoginComponent,
    BoardTrikiComponent,
    SquareTrikiComponent,
    TrikiGameComponent,
    RegisterComponent,
    AdminUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    authInterceptorProviders,
    AuthGuardService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
