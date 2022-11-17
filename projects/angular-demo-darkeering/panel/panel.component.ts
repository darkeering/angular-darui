import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'z-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  animations: [
    trigger('toggle', [
      state('hidden', style({
        'opacity': 0,
        'height': '0px',
        overflow: 'hidden'
      })),
      state('show', style({
        'opacity': 1,
        height: '*',
        overflow: 'hidden'
      })),
      transition('hidden => show', animate(250)),
      transition('show => hidden', animate(250))
    ])
  ]
})
export class PanelComponent implements OnInit {

  open = true
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.open = !this.open
  }

}
