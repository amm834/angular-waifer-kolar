import {Component, OnInit} from '@angular/core';
import {StoreService} from "../services/store.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: string;

  constructor(private store: StoreService) {
    this.data = this.store.getData
  }

  ngOnInit(): void {

  }


}
