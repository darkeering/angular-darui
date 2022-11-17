import { Component, OnInit, Renderer2 } from '@angular/core';
import { DragDropService } from 'projects/angular-demo-darkeering/drag-drop';

@Component({
  selector: 'lib-drag-drop-demo',
  templateUrl: './drag-drop-demo.component.html',
  styleUrls: ['./drag-drop-demo.component.css']
})
export class DragDropDemoComponent implements OnInit {


  constructor(
    private dragDropService: DragDropService,
    private render: Renderer2
  ) { }

  list1: any = [
    'c++',
    'jave',
    'js',
    'python',
  ]
  list2: any[] = []

  ngOnInit(): void {
  }

  drop(event: any) {
    const {parentNode, currentDrag} = event
    this.render.removeChild(parentNode, currentDrag)
    this.list2.push(currentDrag.textContent)
  }

}
