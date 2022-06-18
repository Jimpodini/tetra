import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CmsBoxService {
  private contentSubject = new BehaviorSubject<string>('Starting text');
  $content = this.contentSubject.asObservable();

  set text(text: string) {
    this.contentSubject.next(text);
  }

  constructor() {}
}
