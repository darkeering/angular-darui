import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'z-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('search') searchElement!: ElementRef
  @Input() autofocus = false
  @Output() searchEvent = new EventEmitter()
  searchText = ''
  constructor(
    private render: Renderer2
  ) { }

  ngOnInit(): void {
  }

  searchClick() {
    this.searchEvent.emit(this.searchText)
  }

  cancle() {
    this.render.setProperty(this.searchElement.nativeElement, 'value', '')
    this.searchEvent.emit('')
    this.searchText = ''
    this.searchElement.nativeElement.focus()
  }

  inputChange(value: any) {
    this.render.setProperty(this.searchElement.nativeElement, 'value', value)
    this.searchText = value
  }

}
