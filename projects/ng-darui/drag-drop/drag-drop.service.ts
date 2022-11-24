import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class DragDropService {
  currentDrag: any;
  parentNode: any;

  dragEl(cur: any, par: any) {
    this.currentDrag = cur
    this.parentNode = par
  }

  getDragEl() {
    const { currentDrag, parentNode } = this
    return {
      currentDrag,
      parentNode
    }
  }
}