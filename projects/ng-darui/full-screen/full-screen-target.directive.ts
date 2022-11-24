import { Directive, ElementRef, HostListener } from '@angular/core';
import { FullScreenService } from './full-screen.service';

@Directive({
  selector: '[zFullscreenTarget]'
})
export class FullscreenTargetDirective {

  constructor(
    private el: ElementRef,
    private fullScreenService: FullScreenService
  ) {
    this.fullScreenService.currentTarget = this.el.nativeElement
    this.fullScreenService._toggle.subscribe((status: boolean) => {
      if (status) {
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

  @HostListener('document:fullscreenchange', ['$event']) onFullScreenChange(event: Event) {
    if (document.fullscreenElement) {
      if (this.fullScreenService.currentTarget === document.fullscreenElement) {
        this.fullScreenService.fullscreenElement = document.fullscreenElement
        this.fullScreenService.isFull = true
      }
    } else {
      if (this.fullScreenService.currentTarget === this.fullScreenService.fullscreenElement) {
        this.fullScreenService.isFull = false
      }
    }
  }

}