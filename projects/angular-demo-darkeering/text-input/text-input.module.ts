import { NgModule } from "@angular/core";
import { TextInputDirective } from "./text-input.directive";

@NgModule({
  declarations: [
    TextInputDirective
  ],
  exports: [
    TextInputDirective
  ]
})
export class TextInputModule {}