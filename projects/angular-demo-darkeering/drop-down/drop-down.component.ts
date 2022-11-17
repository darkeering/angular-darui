import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { dropDownToggle } from '../utils/animations';

@Component({
  selector: 'z-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
  animations: [dropDownToggle]
})
export class DropDownComponent implements OnInit {

  _source: any[] = []
  @Input()
  set source(value: any[]) {
    this._source = value.map((item: any) => {
      if (typeof item === 'string') {
        return { name: item }
      } else {
        return item
      }
    })
  }
  get source() {
    return this._source
  }

  @Output('selectItem') selectItemEmit = new EventEmitter()

  isOpen = false
  hoverIndex = -1

  constructor(
    private elememtRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  selectItem(item: any) {
    this.selectItemEmit.emit(item)
  }

  toggle() {
    this.isOpen = !this.isOpen
  }

  setHoverIndex($event: any, index: any) {
    if ($event) {
      this.hoverIndex = index
    } else {
      this.hoverIndex = -1
    }
  }

  @HostListener('document:click', ['$event.target']) onDocumentClick(target: any) {
    if(!this.isOpen) return
    if (!this.elememtRef.nativeElement.contains(target)) {
      this.isOpen = false
    }
  }

  @HostListener('window:keyup.arrowdown', ['$event']) onArrowDown(event: Event) {
    const { hoverIndex, _source } = this
    if (hoverIndex + 1 === _source.length) this.hoverIndex = 0
    else this.hoverIndex++
  }

  @HostListener('window:keyup.arrowup', ['$event']) onArrowUp(event: Event) {
    const { hoverIndex, _source } = this
    if (hoverIndex === 0) this.hoverIndex = _source.length - 1
    else this.hoverIndex--
  }

}
