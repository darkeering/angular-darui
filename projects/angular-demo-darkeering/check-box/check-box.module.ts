import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import { IconsModule } from '../icons';



@NgModule({
  declarations: [
    CheckBoxComponent
  ],
  imports: [
  CommonModule,
  IconsModule
  ],
  exports: [
    CheckBoxComponent
  ]
})
export class CheckBoxModule { }
