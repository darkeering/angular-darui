import { Directive, ElementRef } from '@angular/core';
import { FullScreenService } from './full-screen.service';

@Directive({
  selector: '[zFullscreenTarget]'
})
export class FullscreenTargetDirective  {

  constructor(
    private el: ElementRef,
    private fullScreenService: FullScreenService
  ) {
    this.fullScreenService._isFullScreen.subscribe((isFullScreen: any) => {
      if(isFullScreen) {
        this.launchFullscreen(this.el.nativeElement)
      } else {
        this.exitFullscreen()
      }
    })
  }

  launchFullscreen(el: any) {
    const requestFullscreen = el.requestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen || el.webkitRequestFullscreen
    requestFullscreen.call(el)
  }

  exitFullscreen() {
    const doc: any = document
    const exitScreen = doc.exitFullscreen || doc.msExitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen
    exitScreen.call(doc)
  }


}