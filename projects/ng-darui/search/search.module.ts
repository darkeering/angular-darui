import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { IconsModule } from '../icons';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
