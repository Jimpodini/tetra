import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  ViewChild,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ThemeService } from './services/theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class.darkMode') darkMode: boolean = false;
  mobileQuery: MediaQueryList;
  themeSubscription: Subscription;

  @ViewChild(MatSidenav, { read: ElementRef }) matSidenav:
    | ElementRef
    | undefined;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public themeService: ThemeService,
    overlayContainer: OverlayContainer
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.themeSubscription = themeService.themeObservable$.subscribe(
      (theme) => {
        if (theme === 'dark') {
          this.darkMode = true;
          console.log(theme);
          overlayContainer.getContainerElement().classList.add('darkMode');
          this.matSidenav?.nativeElement.classList.remove('primary');
        } else {
          if (theme === 'primary') {
            this.matSidenav?.nativeElement.classList.add('primary');
          } else {
            this.matSidenav?.nativeElement.classList.remove('primary');
          }
          this.darkMode = false;
          overlayContainer.getContainerElement().classList.remove('darkMode');
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.themeSubscription.unsubscribe();
  }
}
