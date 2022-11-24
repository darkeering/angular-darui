import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'z-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() disabled = false

  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    this.btnClick.emit('event')
  }


}
