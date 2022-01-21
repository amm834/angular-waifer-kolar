import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appRounded]'
})
export class RoundedDirective {

  constructor(
    public element: ElementRef
  ) {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}
