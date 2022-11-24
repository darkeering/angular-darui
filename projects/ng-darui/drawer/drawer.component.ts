import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { backbgFadeInOut, flyInOut } from '../utils/animations';

@Component({
  selector: 'z-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  animations: [
    flyInOut,
    backbgFadeInOut
  ]
})
export class DrawerComponent implements OnInit {

  isOpen = true
  constructor(
  ) { }

  ngOnInit(): void {
  }

  onHide() {}


  hide() {
    this.isOpen = false
  }
  aimationDone() {
    if(!this.isOpen) {
      this.onHide()
    }
  }

}
