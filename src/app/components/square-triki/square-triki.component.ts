import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square-triki',
  templateUrl: './square-triki.component.html',
  styleUrls: ['./square-triki.component.css']
})
export class SquareTrikiComponent implements OnInit {

  @Input() value: string | undefined;
	@Input() id: number | undefined;
	@Output() play = new EventEmitter();

  constructor() {}

	ngOnInit() {
	}

}
