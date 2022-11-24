import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class FullScreenService {
  private toggle = new Subject<boolean>()
  _toggle = this.toggle.asObservable()
  private emitStatusSub = new Subject<boolean>()
  _emitStatusSub = this.toggle.asObservable()

  isFull = false
  currentTarget: any
  fullscreenElement: any
  toggleFullScreen(status: boolean) {
    this.toggle.next(status)
  }
  emitStatus(status: boolean) {
    this.emitStatusSub.next(status)
  }
}
