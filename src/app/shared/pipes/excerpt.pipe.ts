import { Pipe, PipeTransform } from '@angular/core';
import { CodeValue } from 'src/app/core/http/response/codevalue.response';
import { DirectionService } from 'src/app/core/services/direction.service';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, numOfWords?: Number): string {
    return value + "| Excerpt";
  }
}
