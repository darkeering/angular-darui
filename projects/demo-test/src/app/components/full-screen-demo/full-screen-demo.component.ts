import { Component } from "@angular/core";

@Component({
  selector: 'lib-full-screen-demo',
  templateUrl: './full-screen-demo.component.html'
})
export class FullScreenDemoComponent {
  isFull1 = false
  isFull2 = false
  constructor() { }

  toggleFullScreen1(status: boolean) {
    this.isFull1 = status
    console.log('toggleFullScreen1', status);
    
  }
  toggleFullScreen2(status: boolean) {
    this.isFull2 = status
    console.log('toggleFullScreen2', status);
  }
}