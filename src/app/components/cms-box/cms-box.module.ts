import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CmsBoxComponent,
  DialogElementsExampleDialogComponent,
} from './cms-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatIconModule } from '@angular/material/icon';
import { CmsBoxService } from './cms-box.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [CmsBoxComponent, DialogElementsExampleDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [CmsBoxService],
  exports: [CmsBoxComponent],
})
export class CmsBoxModule {}
