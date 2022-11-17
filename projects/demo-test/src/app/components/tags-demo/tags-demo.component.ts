import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'z-tags-demo',
  templateUrl: './tags-demo.component.html',
  styleUrls: ['./tags-demo.component.less']
})
export class TagsDemoComponent implements OnInit {
  tagList = [
    {
      name: 'label1'
    },
    {
      name: 'label2'
    },
    {
      name: 'label3'
    },
    {
      name: 'label4'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
