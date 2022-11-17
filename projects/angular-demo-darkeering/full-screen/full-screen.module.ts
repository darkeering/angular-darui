import { NgModule } from "@angular/core";
import { FullscreenLaunchDirective } from "./full-screen-launch.directive";
import { FullscreenTargetDirective } from "./full-screen-target.directive";
import { FullScreenComponent } from "./full-screen.component";

@NgModule({
  declarations: [
    FullScreenComponent,
    FullscreenLaunchDirective,
    FullscreenTargetDirective
  ],
  exports: [
    FullScreenComponent,
    FullscreenLaunchDirective,
    FullscreenTargetDirective
  ],
  providers: [
  ]
})
export class FullScreenModule {}