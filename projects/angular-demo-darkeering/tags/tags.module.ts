import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { TagComponent } from './tag/tag.component';



@NgModule({
  declarations: [
    TagsComponent,
    TagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TagsComponent,
    TagComponent
  ]
})
export class TagsModule { }
