import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'z-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() colsConfig: any;
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
