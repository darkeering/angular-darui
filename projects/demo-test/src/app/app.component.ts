import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-child';
  menu: any = [
    { title: 'Home', key: '' },
    { title: 'Button', key: 'button' },
    { title: 'Auto Complete', key: 'autoComplete' },
    { title: 'Carousel', key: 'carousel' },
    { title: 'Checkbox', key: 'checkbox' },
    { title: 'Drag Drop', key: 'dragDrop' },
    { title: 'Drawer', key: 'drawer' },
    { title: 'Dropdown', key: 'dropDown' },
    { title: 'Full Screen', key: 'fullScreen' },
    { title: 'Panel', key: 'panel' },
    { title: 'Search', key: 'search' },
    { title: 'Tags', key: 'tags' },
    // { title: 'Tags Input', key: 'tagsInput' },
    { title: 'Tooltip', key: 'tooltip' },
    { title: 'Tags Input', key: 'tagsInput' },
    { title: 'Icons', key: 'icons' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.url.subscribe(() => {
      console.log(111);
      console.log('location.pathname', location.pathname);
      const ac = location.pathname.split('/')[1]
      console.log(ac);
      if (ac) {
        this.menu.forEach((i: any) => {
          i['active'] = i.key === ac
        })
      } else {
        this.menu[0]['active'] = true
      }
    })

  }


  itemClick(event: any) {
    this.router.navigate([event.key])
  }
}
