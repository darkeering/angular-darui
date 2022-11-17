import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class FullScreenService {
  private isFullScreen = new Subject()
  _isFullScreen = this.isFullScreen.asObservable()

  setIsFullScreen(flag: boolean) {
    this.isFullScreen.next(flag)
  }
}