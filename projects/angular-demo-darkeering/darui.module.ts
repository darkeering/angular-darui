import {  NgModule } from "@angular/core";
import { AccordionModule } from "./accordion";
import { AutoCompleteModule } from "./auto-complete";
import { ButtonModule } from "./button";
import { CarouselModule } from "./carousel";
import { CheckBoxModule } from "./check-box";
import { DragDropModule } from "./drag-drop";
import { DrawerModule } from "./drawer";
import { DropDownModule } from "./drop-down";
import { FullScreenModule } from "./full-screen";
import { PanelModule } from "./panel";
import { SearchModule } from "./search";
import { TagsModule } from "./tags";
import { TextInputModule } from "./text-input";
import { TooltipModule } from "./tooltip";
import { IconsModule } from "./icons";
export * from './accordion'
export * from './auto-complete'
export * from './button'
export * from './drag-drop'
export * from './full-screen'
export * from './text-input'
export * from './tooltip'
export * from './panel'
export * from './search'
export * from './check-box'
export * from './carousel'
export * from './tags'
export * from './drop-down'
export * from './drawer'
export * from './icons'


@NgModule({
  exports: [
    ButtonModule,
    TooltipModule,
    DragDropModule,
    FullScreenModule,
    AccordionModule,
    TextInputModule,
    AutoCompleteModule,
    PanelModule,
    SearchModule,
    CheckBoxModule,
    CarouselModule,
    TagsModule,
    DropDownModule,
    DrawerModule,
    IconsModule
  ],
  declarations: [
  ]
})
export class DarUIModule {
}