import { Directive, ElementRef, Renderer2, AfterContentInit, Input } from '@angular/core';

@Directive({
  selector: '[damage-border]'
})

export class DamageBorderDirective implements AfterContentInit {
  @Input ('damage-border') damage: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  public ngAfterContentInit(): void {
    if (this.damage > 50) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid red');
    }
  }
}
