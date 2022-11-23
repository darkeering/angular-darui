import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutlined } from './check-outlined/check-outlined.component';
import { LeftOutlined } from './left-outlined/left-outlined.component';
import { RightOutlined } from './right-outlined/right-outlined.component';
import { CloseOutlined } from './close-outlined/close-outlined.component';
import { DownOutlined } from './down-outlined/down-outlined.component';
import { SearchOutlined } from './search-outlined/search-outlined.component';
import { CloseCircleFilled } from './close-circle-filled/close-circle-filled.component';
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
  CheckOutlined,
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
  DownOutlined,
  SearchOutlined,
  CloseCircleFilled,
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
