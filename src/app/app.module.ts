import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { ThemeIconComponent } from './svgs/theme-icon/theme-icon.component';
import { ToolbarIconsComponent } from './toolbar-icons/toolbar-icons.component';
import { ThemeService } from './services/theme.service';
import { CmsBoxModule } from './components/cms-box/cms-box.module';

@NgModule({
  declarations: [AppComponent, ThemeIconComponent, ToolbarIconsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    CmsBoxModule,
  ],
  providers: [
    ThemeService,
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
