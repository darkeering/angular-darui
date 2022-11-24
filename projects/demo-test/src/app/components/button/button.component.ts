import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

function subjectObservable(target: any, key: string): any {
  const _subject = new Subject()
  const descriptor: PropertyDescriptor = {
    value: _subject
  }
  return descriptor
}

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @subjectObservable
  aaaa: any

  constructor() { }

  ngOnInit(): void {
    this.aaaa.subscribe((res: any) => {
      console.log(res);
      console.log(5566);

    })
  }
  onClick(event: any) {
    this.aaaa.next('5566')
    console.log('AppComponent', event);
  }
}

