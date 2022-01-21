import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRounded]'
})
export class RoundedDirective {

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer2
  ) {
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red')
  }

}
