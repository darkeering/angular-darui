import { Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';
import { DragDropService } from './drag-drop.service';

@Directive({
  selector: '[zDroppable]'
})
export class DroppableDirective {

  @Output() dropEvent = new EventEmitter()

  constructor(
    private el: ElementRef,
    private render: Renderer2,
    private dragDropService: DragDropService
  ) { }

  @HostListener('drop', ['$event']) drop(event: any) {
    // console.log('event', event);
    this.dropEvent.emit(this.dragDropService.getDragEl())
  }
  @HostListener('dragover', ['$event']) dropOver(event: any) {
    // console.log('event', event);
    event.preventDefault()
  }
}
