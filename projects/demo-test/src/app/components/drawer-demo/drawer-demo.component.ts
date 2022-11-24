import { Component, OnInit } from '@angular/core';
import { DrawerService } from 'projects/ng-darui';

@Component({
  selector: 'z-drawer-demo',
  templateUrl: './drawer-demo.component.html',
  styleUrls: ['./drawer-demo.component.less']
})
export class DrawerDemoComponent implements OnInit {

  constructor(
    private drawerService: DrawerService
  ) { }

  ngOnInit(): void {
  }
  onClick(event: any) {
    this.drawerService.open()
  }
  show() {
    this.drawerService.show()
  }
  hide() {
    this.drawerService.hide()
  }
}
