import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'direction'
})
export class DirectionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value) {
      case "NAM": return "Hướng nam";
      case "DONG": return "Hướng đông";
      case "TAY": return "Hướng tây";
      case "BAC": return "Hướng bắc";
      case "DONGBAC": return "Hướng đông bắc";
      case "DONGNAM": return "Hướng đông nam";
      case "TAYBAC": return "Hướng tây bắc";
      case "TAYNAM": return "Hướng tây nam";
      
      default: return "";
    }
  }

}
