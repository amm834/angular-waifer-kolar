import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() title: string = '';
  @Output() emitClick = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitData(): void {
    this.emitClick.emit('Nav button had been clicked')
  }

}
