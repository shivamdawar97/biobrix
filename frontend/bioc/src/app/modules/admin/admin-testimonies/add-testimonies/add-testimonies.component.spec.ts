import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestimoniesComponent } from './add-testimonies.component';

describe('AddTestimoniesComponent', () => {
  let component: AddTestimoniesComponent;
  let fixture: ComponentFixture<AddTestimoniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestimoniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestimoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
