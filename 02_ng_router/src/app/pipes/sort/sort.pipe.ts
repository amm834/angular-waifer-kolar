import {Pipe, PipeTransform} from '@angular/core';

type accapableTypes = string | number | string[] | number[] | undefined;

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, type: accapableTypes): accapableTypes {
    if (type === 'asce')
      return value.sort();
    else if (type === 'desc')
      return value.sort().reverse();
    else
      return undefined;
  }

}
