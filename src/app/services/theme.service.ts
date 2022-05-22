import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>('primary');
  themeObservable$ = this.themeSubject.asObservable();

  constructor() {}

  switchTheme(theme: Theme) {
    this.themeSubject.next(theme);
  }
}

export type Theme = 'primary' | 'light' | 'dark';
