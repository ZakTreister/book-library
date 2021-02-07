import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',

})
export class TitlePipe implements PipeTransform {

  constructor(private titleCase: TitleCasePipe) { }

  transform(title: string): string {
    if(!title || typeof title != 'string'){
      return '';
    }
     
    return this.titleCase.transform(title.replace(/[^A-Za-z ]/gi, ''));
  }

}
