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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselDemoComponent } from './components/carousel-demo/carousel-demo.component';
import { TagsDemoComponent } from './components/tags-demo/tags-demo.component';
import {
  TableModule,
  IconsModule,
  DropDownModule,
  AccordionModule,
  ButtonModule,
  DragDropModule,
  FullScreenModule,
  TextInputModule,
  PanelModule,
  SearchModule,
  CheckBoxModule,
  CarouselModule,
  TagsModule,
  TooltipModule,
  AutoCompleteModule,
  DrawerModule,
  DrawerService
} from 'projects/ng-darui';
import { TagsInputDemoComponent } from './components/tags-input-demo/tags-input-demo.component';
import { TagsInputModule } from 'projects/ng-darui/tags-input/tags-input.module';
import { DropDownDemoComponent } from './components/drop-down-demo/drop-down-demo.component';
import { DrawerDemoComponent } from './components/drawer-demo/drawer-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { TemComponent } from './components/table-demo/tem/tem.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IconsDemoComponent } from './components/icons-demo/icons-demo.component';
import { FormComponent } from './components/form/form.component';
const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'autoComplete', component: AutoCompleteComponent },
  { path: 'carousel', component: CarouselDemoComponent },
  { path: 'checkbox', component: CheckBoxDemoComponent },
  { path: 'dragDrop', component: DragDropDemoComponent },
  { path: 'drawer', component: DrawerDemoComponent },
  { path: 'dropDown', component: DropDownDemoComponent },
  { path: 'fullScreen', component: FullScreenDemoComponent },
  { path: 'panel', component: PanelDemoComponent },
  { path: 'search', component: SearchDemoComponent },
  { path: 'tags', component: TagsDemoComponent },
  { path: 'tooltip', component: TooltipDemoComponent },
  { path: 'icons', component: IconsDemoComponent },
  { path: 'tagsInput', component: TagsInputDemoComponent },
  { path: 'form', component: FormComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
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
    DrawerDemoComponent,
    TableDemoComponent,
    TemComponent,
    HomeComponent,
    IconsDemoComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
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
    IconsModule,
    TableModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
