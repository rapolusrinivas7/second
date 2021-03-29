import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  @Input() correctanswer: boolean = false;
  constructor(private eleref: ElementRef, private render: Renderer2) { }
  @HostListener('click') onanswer() {
    if (this.correctanswer) {
      this.render.setStyle(this.eleref.nativeElement, "background-color", "green")
    }
    else {
      this.render.setStyle(this.eleref.nativeElement, "background-color", "red")
    }
  }
}
