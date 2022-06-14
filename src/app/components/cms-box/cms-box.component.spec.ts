import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsBoxComponent } from './cms-box.component';

describe('CmsBoxComponent', () => {
  let component: CmsBoxComponent;
  let fixture: ComponentFixture<CmsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CmsBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
