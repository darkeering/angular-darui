import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutlined } from './check-outlined/check-outlined.component';
import { LeftOutlined } from './left-outlined/left-outlined.component';
import { RightOutlined } from './right-outlined/right-outlined.component';
import { CloseOutlined } from './close-outlined/close-outlined.component';
import { DownOutlined } from './down-outlined/down-outlined.component';
import { UpOutlined } from './up-outlined/up-outlined.component';
import { SearchOutlined } from './search-outlined/search-outlined.component';
import { CloseCircleFilled } from './close-circle-filled/close-circle-filled.component';

const components = [
  CheckOutlined,
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
  DownOutlined,
  UpOutlined,
  SearchOutlined,
  CloseCircleFilled
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class IconsModule { }
