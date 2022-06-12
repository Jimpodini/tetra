import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CmsBoxService } from './cms-box.service';

@Component({
  selector: 'app-cms-box',
  templateUrl: './cms-box.component.html',
  styleUrls: ['./cms-box.component.scss'],
})
export class CmsBoxComponent implements OnDestroy {
  listenerFunction: () => void;
  @HostListener('click') onClick() {
    this.editMode = true;
  }
  @HostBinding('class.editMode') editMode = false;

  constructor(
    private renderer: Renderer2,
    public dialog: MatDialog,
    public cmsBoxService: CmsBoxService,
    private elRef: ElementRef
  ) {
    // Disable edit mode when clicking outside component
    this.listenerFunction = this.renderer.listen(
      'window',
      'click',
      (e: Event) => {
        if (
          (this.elRef.nativeElement as HTMLElement).contains(
            e.target as HTMLElement
          ) === false
        ) {
          this.editMode = false;
        }
      }
    );
  }

  editText(event: MouseEvent) {
    event.stopPropagation();
    this.dialog.open(CmxBoxEditComponent);
  }

  openDialog() {}

  ngOnDestroy(): void {
    this.listenerFunction();
  }
}

@Component({
  selector: 'app-cms-box-edit',
  template: `
    <h1 mat-dialog-title>Edit text</h1>
    <div mat-dialog-content>
      <editor
        [formControl]="text"
        [init]="{ plugins: 'lists link image table code help wordcount' }"
      ></editor>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close (click)="submitText()">Submit</button>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
})
export class CmxBoxEditComponent {
  text = new FormControl('');

  constructor(private cmsBoxService: CmsBoxService) {}

  submitText(): void {
    console.log(this.text.value);
    this.cmsBoxService.text = this.text.value;
  }
}
