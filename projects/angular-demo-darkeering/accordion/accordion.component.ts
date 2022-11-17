import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionService } from './accordion.service';

@Component({
  selector: 'z-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [AccordionService]
})
export class AccordionComponent implements OnInit {

  @Input() data: any

  @Output() itemClickEvent = new EventEmitter()
  constructor(
    private accordionService: AccordionService
  ) {
    this.accordionService._itemData.subscribe((item: any) => {
      console.log('item', item);
      
      this.itemClickEvent.emit(item)
    })
  }

  ngOnInit(): void {
    this.initData(this.data, 1)
  }

  initData(data: any, level: number) {
    data.forEach((item: any) => {
      item['level'] = level
      if(item.children) {
        this.initData(item.children, level + 1)
      }
    })
  }
}
