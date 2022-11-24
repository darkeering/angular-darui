import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'z-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.css']
})
export class AccordionMenuComponent implements OnInit {

  @ViewChild('accordionMenu') accordionMenu!: ElementRef
  @Input() data: any
  constructor(
    private render: Renderer2
  ) { }

  ngOnInit(): void {
  }

  initStyle() {
    this.render.setStyle(this.accordionMenu.nativeElement, 'padding', `0 20px 0 ${this.data.level * 20}px`)
  }

  ngAfterViewInit(): void {
    this.initStyle()
  }

  toggle() {
    this.data.open = !this.data.open
  }

}
