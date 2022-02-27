import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game/game-service';

@Component({
  selector: 'app-board-triki',
  templateUrl: './board-triki.component.html',
  styleUrls: ['./board-triki.component.css']
})
export class BoardTrikiComponent implements OnInit {

  boardSize: number = 9;
  xTurn: boolean = true;

  values: string[] = [];
  moves: number = 0;
  temp: string | undefined;
  winner: string | undefined;
  status: string | undefined;

  constructor() {}

  ngOnInit() {
    this.initBoard();
  }

  initBoard() {
    for (let i = 0; i < this.boardSize; i++) {
      this.values.push(" ");
    }
    this.temp = "X";
    this.winner = "";
    this.status = "Siguiente en jugar es: " + this.temp;
    this.moves = 0;
  }

  onPlay(id: number) {
    if (this.winner !== "") return;

    if (this.values[id] !== " ") return;

    this.values[id] = this.xTurn ? "X" : "O";
    this.xTurn = !this.xTurn;

    this.caclulateWinner();
    this.calculateStatus();
  }

  caclulateWinner() {
    
    const states: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < 8; i++) {
      let a = states[i][0];
      let b = states[i][1];
      let c = states[i][2];
      if (
        this.values[a] !== " " &&
        this.values[a] === this.values[b] &&
        this.values[a] === this.values[c]
      ) {
        this.winner = this.values[a];
      }
    }
  } 

  calculateStatus() {
    this.moves += 1;

    if (this.winner !== "") {
      this.status = this.winner + " es el ganador !";
      return;
    } else if (this.moves === this.boardSize) {
      this.status = "El jugeo terminó!";
      return;
    }

    this.temp = this.xTurn ? "X" : "O";
    this.status = "el siguiente es: " + this.temp;
  }

  onReset() {
    this.values = [];
    this.initBoard();
  }

}
