import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'z-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.css']
})
export class TagsInputComponent implements OnInit {

  @ViewChild('tagsInput') tagsInputEl!: ElementRef

  hasSelectTags: any[] = []
  @Input() source: any[] = []

  inputCode = ''

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    const { source } = changes
    if (source) {
      this.formatSource(source.currentValue)
    }
  }

  ngOnInit(): void {
  }

  formatSource(source: any) {
    this.source = source.map((item: any) => {
      if (typeof item === 'string') {
        return { name: item }
      } else {
        return item
      }
    })
  }
  selectValue(event: any) {
    this.hasSelectTags.push(event)
    this.source = this.source.filter(item => item.name !== event.name)

  }

  deleteItem(index: number) {
    this.source = [...this.source, this.hasSelectTags[index]]
    this.hasSelectTags.splice(index, 1)
  }

  addTag(event: any) {
    this.hasSelectTags.push({ name: event.target.value })
    this.inputCode = ''
  }
}
