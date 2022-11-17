import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-auto-complete-demo',
  templateUrl: './auto-complete-demo.component.html',
  styleUrls: ['./auto-complete-demo.component.less']
})
export class AutoCompleteComponent implements OnInit {

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

  selectValue(event: any) {
    console.log('selectValue', event);
    
  }

}
