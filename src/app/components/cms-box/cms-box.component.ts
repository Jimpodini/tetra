import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private renderer: Renderer2, public dialog: MatDialog) {
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
    this.dialog.open(DialogElementsExampleDialogComponent);
    console.log(event);
  }

  openDialog() {}

  ngOnDestroy(): void {
    this.listenerFunction();
  }
}

@Component({
  selector: 'app-dialog-elements-example-dialog',
  template: `
    <h1 mat-dialog-title>Dialog with elements</h1>
    <div mat-dialog-content>
      This dialog showcases the title, close, content and actions elements.
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
})
export class DialogElementsExampleDialogComponent {}
