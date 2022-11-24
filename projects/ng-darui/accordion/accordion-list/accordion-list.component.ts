import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'z-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.css'],
  animations: [
    trigger('toggle', [
      state('hidden', style({
        'opacity': 0,
        'height': '0px',
      })),
      state('show', style({
        'opacity': 1,
      })),
      transition('hidden => show', animate(250)),
      transition('show => hidden', animate(250))
    ])
  ]
})
export class AccordionListComponent implements OnInit {

  @Input() data: any
  constructor() { }

  ngOnInit(): void {

  }

}
