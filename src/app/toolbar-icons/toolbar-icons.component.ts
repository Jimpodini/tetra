import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-toolbar-icons',
  templateUrl: './toolbar-icons.component.html',
  styleUrls: ['./toolbar-icons.component.scss'],
})
export class ToolbarIconsComponent {
  constructor(public themeService: ThemeService) {}
}
