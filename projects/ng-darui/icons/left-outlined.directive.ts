import { ApplicationRef, Component, ComponentFactoryResolver, Directive, ElementRef, Injector } from '@angular/core';


@Component({
  selector: 'left-outlined',
  template: `
    <svg
      class="darui-icon"
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="left"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
      ></path>
    </svg>
    `,
  styles: [`:host {display: flex; font-size: 1em}`]
})
export class LeftOutlined { }

@Directive({
  selector: '[zLeftOutlined]'
})
export class LeftOutlinedDirective {
  constructor(
    private el: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private applicationRef: ApplicationRef,
  ) {
    let { nativeElement } = this.el
    const component = this.componentFactoryResolver.resolveComponentFactory(LeftOutlined)
    const node = nativeElement.appendChild(document.createElement(component.selector))
    const ref = component.create(this.injector, [], node)
    this.applicationRef.attachView(ref.hostView)
  }
}
