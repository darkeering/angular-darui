import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from '../auto-complete';
import { TagsInputComponent } from './tags-input.component';
import { FormsModule } from '@angular/forms';
import { TagsModule } from '../tags';
import { TextInputModule } from '../text-input';



@NgModule({
  declarations: [
    TagsInputComponent
  ],
  imports: [
    CommonModule,
    AutoCompleteModule,
    FormsModule,
    TagsModule,
    TextInputModule
  ],
  exports: [
    TagsInputComponent
  ]
})
export class TagsInputModule { }
