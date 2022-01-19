import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {

  }

  get getData(): string {
    return "I am a data";
  }

}
