import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarOutlinedDirective } from './calendar-outlined.directive';
import { UpOutlinedDirective } from './up-outlined.directive';
import { SearchOutlinedDirective } from './search-outlined.directive';
import { RightOutlinedDirective } from './right-outlined.directive';
import { LeftOutlinedDirective } from './left-outlined.directive';
import { DownOutlinedDirective } from './down-outlined.directive';
import { CloseCircleFilledDirective } from './close-circle-filled.directive';
import { CloseOutlinedDirective } from './close-outlined.directive';
import { CheckOutlinedDirective } from './check-outlined.directive';

const components = [
  CalendarOutlinedDirective,
  UpOutlinedDirective,
  SearchOutlinedDirective,
  RightOutlinedDirective,
  LeftOutlinedDirective,
  DownOutlinedDirective,
  CloseCircleFilledDirective,
  CloseOutlinedDirective,
  CheckOutlinedDirective
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class IconsModule { }
