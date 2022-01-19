import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Home Page';
  isClicked = false

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isClicked = !this.isClicked;
  }

}
