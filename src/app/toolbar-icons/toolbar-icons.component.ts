import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-toolbar-icons',
  templateUrl: './toolbar-icons.component.html',
  styleUrls: ['./toolbar-icons.component.scss'],
})
export class ToolbarIconsComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
