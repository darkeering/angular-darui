import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselItemComponent } from './carousel-item.component';
import { IconsModule } from '../icons';



@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    CarouselComponent,
    CarouselItemComponent
  ]
})
export class CarouselModule { }
