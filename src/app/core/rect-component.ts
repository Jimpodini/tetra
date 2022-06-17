import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-skeleton-rect',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'pulse',
  },
  template: ``,
  styles: [
    `
      :host {
        display: block;
        width: var(--skeleton-rect-width);
        height: var(--skeleton-rect-height);
        background: rgb(239, 241, 246) no-repeat;
      }
    `,
  ],
})
export class RectComponent implements OnInit {
  width: string | undefined;
  height: string | undefined;
  className: string | undefined;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const host = this.host.nativeElement;

    if (this.className) {
      host.classList.add(this.className);
    }

    host.style.setProperty('--skeleton-rect-width', this.width ?? '100%');
    host.style.setProperty('--skeleton-rect-height', this.height ?? '20px');
  }
}
