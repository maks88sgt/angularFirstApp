import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRedBorder]'
})
export class RedBorderDirective implements OnInit {
  private elRef: ElementRef;
  @Input() options = false;

  constructor(el: ElementRef) {
    this.elRef = el;
  }

  ngOnInit(): void {
    if (this.options) {
      this.elRef.nativeElement.style.border = 'solid 4px red';
    }
  }
}
