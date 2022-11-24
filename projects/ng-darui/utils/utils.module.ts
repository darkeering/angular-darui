import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverIndexDirective } from './hover-index.directive';



@NgModule({
  declarations: [
    HoverIndexDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HoverIndexDirective
  ]
})
export class UtilsModule { }
