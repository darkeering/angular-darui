import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EventEmitter, HostListener, Injector, Input, OnInit, Output, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { AutoCompletePopupComponent } from './auto-complete-popup.component';

@Directive({
  selector: '[zAutoComplete]'
})
export class AutoCompleteDirective implements OnInit {
  @Input() source!: any[]
  @Input() origin!: ElementRef
  @Input() needSetProperty = true
  @Output() selectValue = new EventEmitter()
  templete = AutoCompletePopupComponent
  popupRef!: ComponentRef<AutoCompletePopupComponent>
  focus = false
  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    const { source } = changes
    if (source && this.popupRef) {
      this.formatSource(source.currentValue)
    }
  }

  ngOnInit(): void {
    this.popupRef = this.viewContainerRef.createComponent(AutoCompletePopupComponent, {
      injector: this.injector
    });
    this.popupRef.instance.registerOnChange(
      (item: any) => {
        this.selectValue.emit(item.value)
        this.hidePop()
        if (this.needSetProperty) {
          this.render.setProperty(this.el.nativeElement, 'value', item.value.name)
        }
      }
    );
    this.initData()
  }
  initData() {
    let { source, origin } = this
    this.formatSource(source)
    origin || (origin = this.el)
    this.popupRef.instance.origin = new CdkOverlayOrigin(origin)
  }

  formatSource(source: any) {
    this.popupRef.instance.source = source.map((item: any) => {
      if (typeof item === 'string') {
        return { name: item }
      } else {
        return item
      }
    })
  }

  hidePop() {
    const pop = this.popupRef.instance
    pop.isOpen = false
  }

  patchInputCodeToPopup() {
    this.popupRef.instance.inputCode = this.el.nativeElement.value
  }

  @HostListener('focus', ['$event']) onFocus(event: Event) {
    this.patchInputCodeToPopup()
    let { origin } = this
    const pop = this.popupRef.instance
    origin || (origin = this.el)
    const { offsetWidth } = origin.nativeElement
    pop.width = offsetWidth
    pop.isOpen = true
  }
  @HostListener('document:click', ['$event']) onDocumentClick(event: Event) {
    const flag = event.target === this.el.nativeElement
    if (!flag) {
      const pop = this.popupRef.instance
      pop.isOpen = false
    }
  }

  @HostListener('keyup', ['$event']) onKeyUp(event: Event) {
    this.patchInputCodeToPopup()
  }
}
