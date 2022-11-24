import { ApplicationRef, ComponentFactoryResolver, ElementRef, Injector } from "@angular/core"

export class IconTemplete {
  templeteComponent: any
  constructor(
    private el: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private applicationRef: ApplicationRef,
  ) {
    const component = this.componentFactoryResolver.resolveComponentFactory(this.templeteComponent)
    let { nativeElement } = this.el
    const ref = component.create(this.injector, [], nativeElement)
    this.applicationRef.attachView(ref.hostView)
  }
}