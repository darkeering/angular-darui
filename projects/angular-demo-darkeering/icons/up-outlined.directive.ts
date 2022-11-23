import { ApplicationRef, Component, ComponentFactoryResolver, Directive, ElementRef, Injector } from '@angular/core';


@Component({
  selector: 'up-outlined',
  template: `
    <svg
      class="darui-icon"
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="up"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"
      ></path>
    </svg>
    `,
  styles: [`:host {display: flex; font-size: 1em}`]
})
export class UpOutlined { }

@Directive({
  selector: '[zUpOutlined]'
})
export class UpOutlinedDirective {
  constructor(
    private el: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private applicationRef: ApplicationRef,
  ) {
    let { nativeElement } = this.el
    const component = this.componentFactoryResolver.resolveComponentFactory(UpOutlined)
    const node = nativeElement.appendChild(document.createElement(component.selector))
    const ref = component.create(this.injector, [], node)
    this.applicationRef.attachView(ref.hostView)
  }
}
