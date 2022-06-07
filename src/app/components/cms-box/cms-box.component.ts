import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cms-box',
  templateUrl: './cms-box.component.html',
  styleUrls: ['./cms-box.component.scss'],
})
export class CmsBoxComponent implements OnDestroy {
  listenerFunction: () => void;
  @ViewChild('textArea')
  text: ElementRef | undefined;
  @HostListener('click') onClick() {
    this.editMode = true;
  }
  @HostBinding('class.editMode') editMode = false;

  constructor(private renderer: Renderer2) {
    this.listenerFunction = this.renderer.listen(
      'window',
      'click',
      (e: Event) => {
        if (e.target !== this.text?.nativeElement) {
          this.editMode = false;
        }
      }
    );
  }

  editText(event: MouseEvent) {
    event.stopPropagation();
    console.log(event);
  }

  ngOnDestroy(): void {
    this.listenerFunction();
  }
}
