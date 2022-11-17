import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer.component';
import { DrawerService } from './drawer.service';



@NgModule({
  declarations: [
    DrawerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DrawerComponent
  ],
  providers: [
    DrawerService
  ]
})
export class DrawerModule { }
