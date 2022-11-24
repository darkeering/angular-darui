import { ApplicationRef, Component, ComponentFactoryResolver, Directive, ElementRef, Injector } from '@angular/core';


@Component({
  selector: 'check-outlined',
  template: `
    <svg
      class="darui-icon"
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="check"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
      ></path>
    </svg>
    `,
  styles: [`:host {display: flex; font-size: 1em}`]
})
export class CheckOutlined { }

@Directive({
  selector: '[zCheckOutlined]'
})
export class CheckOutlinedDirective {
  constructor(
    private el: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private applicationRef: ApplicationRef,
  ) {
    let { nativeElement } = this.el
    const component = this.componentFactoryResolver.resolveComponentFactory(CheckOutlined)
    const node = nativeElement.appendChild(document.createElement(component.selector))
    const ref = component.create(this.injector, [], node)
    this.applicationRef.attachView(ref.hostView)
  }
}
