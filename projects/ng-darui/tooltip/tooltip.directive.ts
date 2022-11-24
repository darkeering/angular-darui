import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[zTooltip]'
})
export class TooltipDirective {

  @Input() position: any

  tooltip: any

  constructor(
    private el: ElementRef,
    private render: Renderer2,
  ) {
  }

  createTooltip() {
    const { offsetHeight, offsetWidth } = this.el.nativeElement;
    const windowPos = this.el.nativeElement.getBoundingClientRect();
    const windowTop = windowPos.top + document.documentElement.scrollTop;
    const windowLeft = windowPos.left + document.documentElement.scrollLeft;
    const { position } = this;
    let top, left = 0;
    this.tooltip = this.render.createElement('div');
    const text = this.render.createText('this is error');
    this.render.addClass(this.tooltip, 'tooltiptext');
    this.render.addClass(this.tooltip, `tooltiptext-${position}`);
    this.render.addClass(this.tooltip, `tooltiptext-red`);
    this.render.appendChild(this.tooltip, text);
    this.render.appendChild(document.body, this.tooltip);
    const tooltip_offsetWidth = this.tooltip.offsetWidth
    const tooltip_offsetHeight = this.tooltip.offsetHeight
    if (position === 'right') {
      top = windowTop
      left = windowLeft + offsetWidth + 10
    } else if (position === 'bottom') {
      top = windowTop + offsetHeight + 10
      left = windowLeft
    } else if (position === 'top') {
      top = windowTop - tooltip_offsetHeight - 10
      left = windowLeft
    } else if (position === 'left') {
      top = windowTop
      left = windowLeft - tooltip_offsetWidth - 10
    }
    this.render.setStyle(this.tooltip, 'inset', `${top}px auto auto ${left}px`)

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.createTooltip()
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.render.removeChild(document.body, this.tooltip)
      this.tooltip = null
    }
  }

}
