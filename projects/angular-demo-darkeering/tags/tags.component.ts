import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'z-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input() tags!: any[]
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(index: number) {
    this.tags.splice(index, 1)
  }
}
