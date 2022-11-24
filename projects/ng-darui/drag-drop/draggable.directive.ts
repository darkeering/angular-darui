import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2 } from '@angular/core';
import { DragDropService } from './drag-drop.service';

@Directive({
  selector: '[zDraggable]'
})
export class DraggableDirective implements OnInit {

  @Output() dragstartEvent = new EventEmitter()

  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private dragDropService: DragDropService
  ) { }
  ngOnInit(): void {
    this.render.setAttribute(this.el.nativeElement, 'draggable', 'true')
  }

  @HostListener('dragstart', ['$event']) dragstart(event: any) {
    // event.preventDefault()
    // console.log('dragstart', event);
    this.dragDropService.dragEl(event.target, event.target.parentNode)
    this.dragstartEvent.emit(event)
  }
  
}
