import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, numOfWords?: Number): string {
    return value + "| Excerpt";
  }

}
