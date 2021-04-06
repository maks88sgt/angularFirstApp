import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRedBorder]'
})
export class RedBorderDirective {
  private elRef: ElementRef;
  @Input() options = false;

  constructor(el: ElementRef) {
    this.elRef = el;
  }

  OnInit(renderer: Renderer2): void {
    if (this.options) {
      this.elRef.nativeElement.style.border = 'red';
    }
  }

}
