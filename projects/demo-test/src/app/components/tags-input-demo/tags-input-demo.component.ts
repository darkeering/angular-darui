import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'z-tags-input-demo',
  templateUrl: './tags-input-demo.component.html',
  styleUrls: ['./tags-input-demo.component.less']
})
export class TagsInputDemoComponent implements OnInit {

  source = [
    'c++',
    'jave',
    'javascript'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
