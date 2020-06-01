import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSlideshowAddComponent } from './admin-slideshow-add.component';

describe('AdminSlideshowAddComponent', () => {
  let component: AdminSlideshowAddComponent;
  let fixture: ComponentFixture<AdminSlideshowAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSlideshowAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSlideshowAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
