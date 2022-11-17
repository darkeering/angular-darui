import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelBodyComponent } from './panel-body/panel-body.component';



@NgModule({
  declarations: [
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent
  ]
})
export class PanelModule { }
