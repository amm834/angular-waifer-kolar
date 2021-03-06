import {Component, OnInit} from '@angular/core';
import {StoreService} from "../services/store/store.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  names: string[] = []
  toggle: boolean = true

  constructor(
    private store: StoreService
  ) {
  }

  ngOnInit(): void {
    this.names = this.store.getNames();
  }

  addName(name: string): void {
    this.store.addName(name);
  }

  toggleMe() {
    this.toggle = !this.toggle;
  }


}
