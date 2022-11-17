import { Directive, HostListener, OnInit } from '@angular/core';
import { FullScreenService } from './full-screen.service';

@Directive({
  selector: '[zFullscreenLaunch]'
})
export class FullscreenLaunchDirective implements OnInit {

  fullScreen = false

  constructor(
    private fullScreenService: FullScreenService
  ) { }
  ngOnInit(): void {

  }

  @HostListener('click') onClick() {
    this.fullScreen = !this.fullScreen
    this.fullScreenService.setIsFullScreen(this.fullScreen)
  }

}