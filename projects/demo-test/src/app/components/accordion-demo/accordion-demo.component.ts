import { Component } from "@angular/core";

@Component({
  selector: 'lib-accordion-demo',
  templateUrl: './accordion-demo.component.html',
  styleUrls: ['./accordion-demo.component.css']
})
export class AccordionDemoComponent {
  data = [
    {
      title: 'Title 1',
      children: [
        {
          title: 'Title 1.1',
          children: [
            {
              title: 'Title 1.1.1'
            }
          ]
        },
        {
          title: 'Title 1.2'
        },
      ]
    },
    {
      title: 'Title 2'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}