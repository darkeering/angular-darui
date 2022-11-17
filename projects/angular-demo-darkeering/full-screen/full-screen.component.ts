import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    this.fullScreenService._isFullScreen.subscribe((isFullScreen: any) => {
      this.fullscreenLaunch.emit(isFullScreen)
    })
  }

  ngOnInit(): void {
  }

}