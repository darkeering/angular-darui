import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AccordionService {
  private itemData = new Subject()
  _itemData = this.itemData.asObservable()

  itemClick(item: any) {
    this.itemData.next(item)
  }
}
