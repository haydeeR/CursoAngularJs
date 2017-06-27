import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grados'
})
export class GradosPipe implements PipeTransform {

  transform(value: number, args?: any): any 
  {
    if(value)
    {
      let temp = (value * 9/5);
      return temp+"°F";
    }
  }

}
