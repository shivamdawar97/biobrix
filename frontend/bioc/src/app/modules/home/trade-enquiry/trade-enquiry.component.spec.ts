import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeEnquiryComponent } from './trade-enquiry.component';

describe('TradeEnquiryComponent', () => {
  let component: TradeEnquiryComponent;
  let fixture: ComponentFixture<TradeEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
