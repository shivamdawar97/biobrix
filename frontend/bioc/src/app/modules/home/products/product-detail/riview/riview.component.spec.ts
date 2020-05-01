import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiviewComponent } from './riview.component';

describe('RiviewComponent', () => {
  let component: RiviewComponent;
  let fixture: ComponentFixture<RiviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
