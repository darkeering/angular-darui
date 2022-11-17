import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'z-check-box-demo',
  templateUrl: './check-box-demo.component.html',
  styleUrls: ['./check-box-demo.component.less']
})
export class CheckBoxDemoComponent implements OnInit {

  aaa = true

  constructor() { }

  ngOnInit(): void {
  }
  onStatusChange(status: boolean) {
    console.log('status', status);
    console.log('aaa', this.aaa);
    
  }

}
