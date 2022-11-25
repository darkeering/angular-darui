import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TemComponent } from './tem/tem.component';

@Component({
  selector: 'z-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.less']
})
export class TableDemoComponent implements OnInit, AfterViewInit {
  @ViewChild('action') action: any
  colsConfig: any = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'age',
      title: 'Age',
    },
    {
      key: 'address',
      title: 'Address',
    },
    {
      key: 'tags',
      title: 'Tags',
    },
    {
      key: 'action',
      title: 'Action',
      // component: TemComponent
    },
  ]
  data: any = [
    {
      name: 'Eason',
      age: '18',
      address: '辽宁，大连',
      tags: 'NICE',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
  ]
  constructor() { }

  ngOnInit(): void {
    //  this.colsConfig = [
    //   {
    //     key: 'name',
    //     title: 'Name',
    //   },
    //   {
    //     key: 'age',
    //     title: 'Age',
    //   },
    //   {
    //     key: 'address',
    //     title: 'Address',
    //   },
    //   {
    //     key: 'tags',
    //     title: 'Tags',
    //   },
    //   {
    //     key: 'action',
    //     title: 'Action',
    //     render: this.action
    //   },
    // ]
  }
  ngAfterViewInit(): void {
    this.colsConfig = [
      {
        key: 'name',
        title: 'Name',
      },
      {
        key: 'age',
        title: 'Age',
      },
      {
        key: 'address',
        title: 'Address',
      },
      {
        key: 'tags',
        title: 'Tags',
      },
      {
        key: 'action',
        title: 'Action',
        render: this.action
      },
    ]
  }



}
