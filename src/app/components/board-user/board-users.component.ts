import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.services.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { GameService } from "../../services/game/game-service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-board-users',
  templateUrl: './board-users.component.html',
  styleUrls: ['./board-users.component.css']
})
export class BoardUsersComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  user?: string;

  constructor(private tokenStorageService: TokenStorageService, public gameService: GameService, private location: Location) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.user = user.user;
    }
  }

  resetGame(){
    this.gameService.newGame()
  }


  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  reloadPage(): void {
    window.location.reload();
  }

}
