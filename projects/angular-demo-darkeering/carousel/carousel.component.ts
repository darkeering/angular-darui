import { Component, ContentChildren, ElementRef, OnInit, QueryList, Renderer2, ViewChild } from '@angular/core';
import { CarouselItemComponent } from './carousel-item.component';

@Component({
  selector: 'z-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;
  @ViewChild('wrapper') wrapper!: ElementRef

  activeIndex = 0
  count = 0


  constructor(
    private render: Renderer2
  ) { }
  ngAfterViewInit(): void {
    this.initWrapperWidth()
  }

  ngOnInit(): void {
  }

  initWrapperWidth() {
    this.count = this.items.length
    this.render.setStyle(this.wrapper.nativeElement, 'width', `${this.count * 100}%`)
    this.render.setStyle(this.wrapper.nativeElement, 'left', `0%`)
  }

  goTo(index: number) {
    this.render.setStyle(this.wrapper.nativeElement, 'transition', `left 0.5s ease-in-out`)
    if (index >= this.count) {
      this.activeIndex = 0
      const targetEl = this.wrapper.nativeElement.querySelectorAll('.dar-carousel-item')[this.activeIndex]
      this.transformFirstOrLast(targetEl)
      this.changeLeft(index)
      this.resetPosition(targetEl)
    } else if (index < 0) {
      this.activeIndex = this.count - 1
      const targetEl = this.wrapper.nativeElement.querySelectorAll('.dar-carousel-item')[this.activeIndex]
      this.transformFirstOrLast(targetEl)
      this.changeLeft(index)
      this.resetPosition(targetEl)
    } else {
      this.changeLeft(index)
      this.activeIndex = index
    }
  }

  transformFirstOrLast(targetEl: any) {
    const {width} = this.wrapper.nativeElement.getBoundingClientRect()
    const transformWidth = this.activeIndex === 0 ? width : -width
    this.render.setStyle(targetEl, 'transform', `translateX(${transformWidth}px)`);
  }

  resetPosition(targetEl: any) {
    setTimeout(() => {
      this.render.removeStyle(targetEl, 'transform')
      this.render.removeStyle(this.wrapper.nativeElement, 'transition');
      this.changeLeft(this.activeIndex)
    }, 500)
  }

  changeLeft(index: number) {
    this.render.setStyle(this.wrapper.nativeElement, 'left', `${-index * 100}%`)
  }

  pre() {
    this.goTo(this.activeIndex - 1)
  }

  next() {
    this.goTo(this.activeIndex + 1)
  }

  switchStep(index: number) {
    this.goTo(index)
  }
}
