
import { Pipe, PipeTransform } from '@angular/core';



@Pipe({

  name: 'filtroMayuscula'

})

export class FiltroMayusculaPipe implements PipeTransform {



  transform(value:string): string {

    return value.substr(0,1).toUpperCase() + value.substr(1);

  }



}
