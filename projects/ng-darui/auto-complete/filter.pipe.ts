import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    return value.filter(item => {
      const name = item.name.toLowerCase()
      const filterCode = args[0].toLowerCase()
      return name.indexOf(filterCode) > -1
    })
  }

}
