import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cms-box',
  templateUrl: './cms-box.component.html',
  styleUrls: ['./cms-box.component.scss'],
})
export class CmsBoxComponent implements OnInit {
  @HostListener('mouseover') onMouseOver() {
    this.editMode = true;
  }
  @HostListener('mouseout') onMouseOut() {
    this.editMode = false;
  }
  @HostBinding('class.editMode') editMode = true;

  constructor() {}

  ngOnInit(): void {}
}
