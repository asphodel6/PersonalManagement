import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[changeColorOnHover]'
})
export class ChangeColorOnHoverDirective {

  @HostBinding('style.color') private _color!: string;

  @HostListener('mouseenter') private onMouseEnter(): void {
    this._color = '#58B98A';
  }

  @HostListener('mouseleave') private onMouseLeave(): void {
    this._color = 'white';
  }
}
