import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CMS_BOX_HISTORY_DATA } from './CMS_BOX_HISTORY_DATA';

@Injectable()
export class CmsBoxService {
  historyData = CMS_BOX_HISTORY_DATA;

  private contentSubject = new BehaviorSubject<string>('Starting text');
  $content = this.contentSubject.asObservable();

  set text(text: string) {
    this.historyData = [
      ...this.historyData,
      {
        date: '2022-06-15',
        author: 'Jim Lindberg',
        data: text,
      },
    ];
    this.contentSubject.next(text);
  }

  constructor() {}
}
