import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './drop-down.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { UtilsModule } from '../utils/utils.module';
import { IconsModule } from '../icons';



@NgModule({
  declarations: [
    DropDownComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    BrowserAnimationsModule,
    BrowserModule,
    UtilsModule,
    IconsModule
  ],
  exports: [
    DropDownComponent
  ]
})
export class DropDownModule { }
