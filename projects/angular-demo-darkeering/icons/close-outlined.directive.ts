import { ApplicationRef, Component, ComponentFactoryResolver, Directive, ElementRef, Injector } from '@angular/core';


@Component({
  selector: 'close-outlined',
  template: `
    <svg
      class="darui-icon"
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="close"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
      ></path>
    </svg>
    `,
  styles: [`:host {display: flex; font-size: 1em}`]
})
export class CloseOutlined { }

@Directive({
  selector: '[zCloseOutlined]'
})
export class CloseOutlinedDirective {
  constructor(
    private el: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private applicationRef: ApplicationRef,
  ) {
    let { nativeElement } = this.el
    const component = this.componentFactoryResolver.resolveComponentFactory(CloseOutlined)
    const node = nativeElement.appendChild(document.createElement(component.selector))
    const ref = component.create(this.injector, [], node)
    this.applicationRef.attachView(ref.hostView)
  }
}
