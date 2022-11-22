import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AccordionService } from '../accordion.service';

@Component({
  selector: 'z-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {

  @ViewChild('accordionItem') accordionItem!: ElementRef
  @Input() data: any
  constructor(
    private render: Renderer2,
    private accordionService: AccordionService
  ) { }

  ngOnInit(): void {
  }

  initStyle() {
    this.render.setStyle(this.accordionItem.nativeElement, 'padding', `0 20px 0 ${this.data.level * 20}px`)
  }

  itemClick() {
    this.data.active = true
    this.accordionService.itemClick(this.data)
  }


  ngAfterViewInit(): void {
    this.initStyle()
  }

}
