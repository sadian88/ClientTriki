import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  AuthGuardService as AuthGuard } from '../app/helpers/auth-guard';

import { HomeComponent } from './home/home.component';
import { BoardUsersComponent } from './components/board-user/board-users.component';
import { TrikiGameComponent } from './components/triki-game/triki-game.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'board-users',
    component: BoardUsersComponent, pathMatch: 'full',
    canActivate: [AuthGuard] 
  },
  { 
    path: 'triki',
    component: TrikiGameComponent, pathMatch: 'full',
    canActivate: [AuthGuard] 
  },
  { 
    path: 'admin-user',
    component: AdminUserComponent, pathMatch: 'full',
    canActivate: [AuthGuard] 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
