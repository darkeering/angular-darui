import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[zHoverIndex]'
})
export class HoverIndexDirective {

  @Output() zHoverIndex = new EventEmitter()

  constructor(

  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.zHoverIndex.emit(true)
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.zHoverIndex.emit(false)
  }

}
