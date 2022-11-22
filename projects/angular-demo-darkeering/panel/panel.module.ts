import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelBodyComponent } from './panel-body/panel-body.component';
import { IconsModule } from '../icons';



@NgModule({
  declarations: [
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent
  ]
})
export class PanelModule { }
