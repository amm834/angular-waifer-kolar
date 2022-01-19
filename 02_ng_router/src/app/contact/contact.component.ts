import {Component, OnInit} from "@angular/core";
import {StoreService} from "../services/store.service";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit{
  names:string[] = [];
  constructor(private store:StoreService) {
  }


  ngOnInit(): void {
    this.names = this.store.getNames();
  }



}
