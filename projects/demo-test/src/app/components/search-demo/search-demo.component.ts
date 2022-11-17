import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'z-search-demo',
  templateUrl: './search-demo.component.html',
  styleUrls: ['./search-demo.component.less']
})
export class SearchDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event: any) {
    console.log(event);
    
  }

}
