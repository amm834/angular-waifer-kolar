import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-piping',
  templateUrl: './piping.component.html',
  styleUrls: ['./piping.component.css']
})
export class PipingComponent implements OnInit {

  name: string = 'Aung Myat Moe';
  now: Date = new Date();
  numbers: number[] = [1, 2, 3, 4, 5];

  constructor() {
  }

  ngOnInit(): void {
  }

}
