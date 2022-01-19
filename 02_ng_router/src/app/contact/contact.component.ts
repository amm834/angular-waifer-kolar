import {Component} from "@angular/core";
import {StoreService} from "../services/store.service";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html'
})
export class ContactComponent {
  data: string;

  constructor(private store: StoreService) {
    this.data = this.store.getData;
  }
}
