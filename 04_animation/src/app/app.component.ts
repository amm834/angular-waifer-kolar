import {Component} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    trigger('myanimation', [
      state('on', style({
        transform: 'translateX(200px) rotate(160deg)',
        background: 'red',
        borderRadius: '30%'
      })),
      state('off', style({
        transform: 'translateX(0px)'
      })),
      transition('on => off', animate('500ms ease-in')),
      transition('off => on', animate('500ms ease-out')),
    ]),
    trigger('moveAnimation', [
      state('small', style({
        transform: 'scale(0.8)'
      })),
      state('bigger', style({
        transform: 'scale(1.5)'
      })),
      transition('small => bigger', animate(500)),
      transition('bigger => *', animate(500)),
    ])
  ]
})
export class AppComponent {
  state = 'off';
  move = 'small'

  moveMe() {
    this.state = this.state === 'on' ? this.state = 'off' : this.state = 'on';
  }

  scaleMe() {
    this.move = this.move === 'small' ? this.move = 'bigger' : this.move = 'small';
  }

  animationStarted(event: any) {
    console.log('animation started')
  }

  animationDone(event: any) {
    console.log('animation was done')
  }
}

