import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccordionDemoComponent } from './components/accordion-demo/accordion-demo.component';
import { AutoCompleteComponent } from './components/auto-complete-demo/auto-complete-demo.component';
import { ButtonComponent } from './components/button/button.component';
import { DragDropDemoComponent } from './components/drag-drop-demo/drag-drop-demo.component';
import { FullScreenDemoComponent } from './components/full-screen-demo/full-screen-demo.component';
import { TooltipDemoComponent } from './components/tooltip-demo/tooltip-demo.component';
import { PanelDemoComponent } from './components/panel-demo/panel-demo.component';
import { SearchDemoComponent } from './components/search-demo/search-demo.component';
import { CheckBoxDemoComponent } from './components/check-box-demo/check-box-demo.component';
import { FormsModule } from '@angular/forms';
import { CarouselDemoComponent } from './components/carousel-demo/carousel-demo.component';
import { TagsDemoComponent } from './components/tags-demo/tags-demo.component';
import { IconsModule, DropDownModule, AccordionModule, ButtonModule, DragDropModule, FullScreenModule, TextInputModule, PanelModule, SearchModule, CheckBoxModule, CarouselModule, TagsModule, TooltipModule, AutoCompleteModule, DrawerModule, DrawerService } from 'projects/ng-darui';
import { TagsInputDemoComponent } from './components/tags-input-demo/tags-input-demo.component';
import { TagsInputModule } from 'projects/ng-darui/tags-input/tags-input.module';
import { DropDownDemoComponent } from './components/drop-down-demo/drop-down-demo.component';
import { DrawerDemoComponent } from './components/drawer-demo/drawer-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TooltipDemoComponent,
    DragDropDemoComponent,
    FullScreenDemoComponent,
    AccordionDemoComponent,
    AutoCompleteComponent,
    PanelDemoComponent,
    SearchDemoComponent,
    CheckBoxDemoComponent,
    CarouselDemoComponent,
    TagsDemoComponent,
    TagsInputDemoComponent,
    DropDownDemoComponent,
    DrawerDemoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
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
    TagsInputModule,
    DropDownModule,
    DrawerModule,
    IconsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
