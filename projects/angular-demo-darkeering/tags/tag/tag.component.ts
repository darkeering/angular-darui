import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'z-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() tag!: any
  @Output() deleteTag = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.deleteTag.emit(this.tag)
  }
}
