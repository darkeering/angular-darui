import { NgModule } from "@angular/core";
import { DragDropService } from "./drag-drop.service";
import { DraggableDirective } from "./draggable.directive";
import { DroppableDirective } from "./droppable.directive";

@NgModule({
  declarations: [
    DraggableDirective,
    DroppableDirective
  ],
  imports: [
  ],
  exports: [
    DraggableDirective,
    DroppableDirective
  ],
  providers: [
    DragDropService
  ]
})
export class DragDropModule { }