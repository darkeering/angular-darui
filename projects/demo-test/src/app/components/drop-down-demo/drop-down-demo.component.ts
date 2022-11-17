import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'z-drop-down-demo',
  templateUrl: './drop-down-demo.component.html',
  styleUrls: ['./drop-down-demo.component.less']
})
export class DropDownDemoComponent implements OnInit {

  source = [
    'C++',
    'Java',
    'Javascript',
    'PHP',
    'Python',
    'Go',
  ]

  constructor() { }
  

  ngOnInit(): void {
  }

  selectItem($event: any) {
    console.log($event);
    
  }

}
