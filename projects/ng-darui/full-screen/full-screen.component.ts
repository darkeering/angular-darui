import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FullScreenService } from './full-screen.service';

@Component({
  selector: 'z-fullscreen',
  templateUrl: './full-screen.component.html',
  providers: [FullScreenService]
})
export class FullScreenComponent implements OnInit {
  @Output() fullscreenLaunch = new EventEmitter()
  constructor(
    private fullScreenService: FullScreenService
  ) {
  }

  ngOnInit(): void {
  }

  @HostListener('document:fullscreenchange', ['$event']) onFullScreenChange(event: Event) {
    if (document.fullscreenElement) {
      if (this.fullScreenService.currentTarget === document.fullscreenElement) {
        this.fullscreenLaunch.emit(true)
      }
    } else {
      if (this.fullScreenService.currentTarget === this.fullScreenService.fullscreenElement) {
        this.fullscreenLaunch.emit(false)
      }
    }
  }


}