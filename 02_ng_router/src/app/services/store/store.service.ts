import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private names: string[] = [];

  constructor() {

  }

  getNames(): string[] {
    return this.names;
  }

  addName(name: string): void {
    this.names.push(name);
  }

}
