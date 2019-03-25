import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bar'
})
export class BarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
