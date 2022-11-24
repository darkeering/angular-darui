import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'z-carousel-item',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
  ]
})
export class CarouselItemComponent implements OnInit {
  @HostBinding('class.dar-carousel-item') defult = true
  constructor() { }

  ngOnInit(): void {
  }

}
