import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  goToPost() {
    this.router.navigate(['post', 5], {
      queryParams: {
        name: 'John', age: 30
      },
      fragment: 'section2'
    })
  }

}
