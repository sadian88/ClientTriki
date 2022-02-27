import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private location: Location) { }

  ngOnInit(): void {

  }

  reloadPage(): void {
    window.location.reload();
  }

}
