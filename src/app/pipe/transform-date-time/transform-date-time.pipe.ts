import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { APP_SETTING, LOCAL_MASTER_DATA } from 'src/app/constants/app-repo.constants';


@Pipe({
  name: 'transformDateTime'
})
export class TransformDateTimePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {
  }

  transform(datetime: Date | string): string {
    if (datetime) {
      datetime = new Date(datetime);
      let dateTimeformat:any =  APP_SETTING.DATE_TIME_FORMAT;
      return this.datePipe.transform(datetime, dateTimeformat)
    }
    return null;
  }

}