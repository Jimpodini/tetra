import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cms-box',
  templateUrl: './cms-box.component.html',
  styleUrls: ['./cms-box.component.scss'],
})
export class CmsBoxComponent {
  @HostListener('click') onMouseOver() {
    this.editMode = true;
  }
  @HostBinding('class.editMode') editMode = false;

  constructor() {}
}
