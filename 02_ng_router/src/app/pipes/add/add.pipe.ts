import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {

  transform(value: number[]): number {
    return value.reduce((prev: number, next: number) => prev += next);
  }

}
