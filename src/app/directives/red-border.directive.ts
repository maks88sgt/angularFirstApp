import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

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
    if (true) {
      this.elRef.nativeElement.style.border = 'solid 4px red';
    }
  }
}
