import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { pipe, takeLast } from 'rxjs';
import { CmsBoxService } from './cms-box.service';
import { CMS_BOX_HISTORY_DATA } from './CMS_BOX_HISTORY_DATA';

@Component({
  selector: 'app-cms-box',
  templateUrl: './cms-box.component.html',
  styleUrls: ['./cms-box.component.scss'],
})
export class CmsBoxComponent implements AfterContentInit, OnDestroy {
  listenerFunction: () => void;
  @HostListener('click') onClick() {
    this.editMode = true;
  }
  @HostBinding('class.editMode') editMode = false;
  @ContentChild('cmsContent', { read: ElementRef }) ref!: ElementRef;
  // TODO unsubsribe

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

  ngAfterContentInit(): void {
    this.cmsBoxService.$content.subscribe((text) => {
      this.ref.nativeElement.innerHTML = text;
    });
  }

  editText(event: MouseEvent) {
    event.stopPropagation();
    this.dialog.open(CmxBoxEditComponent, {
      width: '652px',
    });
  }

  showHistory(event: MouseEvent) {
    event.stopPropagation();
    this.dialog.open(CmxBoxHistoryComponent);
  }

  ngOnDestroy(): void {
    this.listenerFunction();
  }
}

@Component({
  selector: 'app-cms-box-edit',
  template: `
    <h1 mat-dialog-title>Edit text</h1>
    <div
      mat-dialog-content
      [ngStyle]="{ overflow: loading ? 'hidden' : 'auto' }"
    >
      <div *ngIf="loading" class="loadingPlaceholder"></div>
      <editor
        [formControl]="text"
        [init]="{ plugins: 'lists link image table code help wordcount' }"
        (onInit)="loading = false"
        [ngStyle]="{ height: loading ? '0px' : '100%' }"
      ></editor>
    </div>
    <div mat-dialog-actions>
      <button
        color="primary"
        mat-button
        mat-dialog-close
        (click)="submitText()"
      >
        Submit
      </button>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
  styles: [
    `
      .loadingPlaceholder {
        width: 604px;
        height: 400px;
        background-color: lightgray;
        border-radius: 10px;
        animation: pulse 1s infinite ease-in-out;
      }

      @keyframes pulse {
        0% {
          opacity: 50%;
        }
        50% {
          opacity: 100%;
        }
        100% {
          opacity: 50%;
        }
      }
    `,
  ],
})
export class CmxBoxEditComponent implements OnInit {
  text = new FormControl('');
  loading = true;

  constructor(private cmsBoxService: CmsBoxService) {}

  // TODO
  ngOnInit(): void {
    this.cmsBoxService.$content.subscribe((text) => {
      this.text.setValue(text);
    });
  }

  submitText(): void {
    this.cmsBoxService.text = this.text.value;
  }
}

@Component({
  selector: 'app-cms-box-history',
  template: `
    <h1 mat-dialog-title>History</h1>
    <div mat-dialog-content>
      <ng-container *ngFor="let data of cmsBoxService.historyData">
        <span>{{ data.author }}</span
        ><br />
        <span
          ><i>{{ data.date }}</i></span
        >
        <div class="mt-2" [innerHTML]="data.data"></div>
        <hr class="mb-3 last:invisible" />
      </ng-container>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
})
export class CmxBoxHistoryComponent {
  constructor(public cmsBoxService: CmsBoxService) {}
}
