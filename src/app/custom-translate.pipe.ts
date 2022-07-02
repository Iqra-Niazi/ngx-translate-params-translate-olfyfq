import { Pipe, ChangeDetectorRef } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'customTranslate',
  pure: false
})
export class CustomTranslatePipe {

  constructor(private translate: TranslateService) {}

  transform(query: string, ...args: any[]): any {
    const result = this.translate.instant(query);
    return result.x ? result.x : result;
  }
}