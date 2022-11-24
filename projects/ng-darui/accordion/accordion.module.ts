import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { AccordionListComponent } from './accordion-list/accordion-list.component';
import { AccordionMenuComponent } from './accordion-menu/accordion-menu.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { IconsModule } from '../icons';



@NgModule({
  declarations: [
    AccordionComponent,
    AccordionListComponent,
    AccordionMenuComponent,
    AccordionItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    IconsModule
  ],
  exports: [
    AccordionComponent,
    AccordionListComponent,
    AccordionMenuComponent,
    AccordionItemComponent
  ]
})
export class AccordionModule { }
