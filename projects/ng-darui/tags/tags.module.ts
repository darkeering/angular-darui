import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { TagComponent } from './tag/tag.component';
import { IconsModule } from '../icons';



@NgModule({
  declarations: [
    TagsComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    TagsComponent,
    TagComponent
  ]
})
export class TagsModule { }
