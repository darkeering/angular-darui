import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, ViewContainerRef } from '@angular/core';
import { DrawerComponent } from './drawer.component';

@Injectable()
export class DrawerService {
  ref!: ComponentRef<DrawerComponent>

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private applicationRef: ApplicationRef,
  ) { }

  open() {
    const component = this.componentFactoryResolver.resolveComponentFactory(DrawerComponent)
    const node = document.body.appendChild(document.createElement(component.selector))
    this.ref = component.create(this.injector, [], node)

    // this.doc.body.appendChild((componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0])
    this.applicationRef.attachView(this.ref.hostView)
    this.ref.instance.onHide = () => {
      setTimeout(() => {
        this.ref.hostView.destroy()
      })
    }
    return this.ref
  }

  show() {
    this.ref.instance.isOpen = true
  }
  hide() {
    this.ref.instance.isOpen = false
  }

}
