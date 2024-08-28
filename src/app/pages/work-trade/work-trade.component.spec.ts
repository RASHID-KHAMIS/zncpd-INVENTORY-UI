import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTradeComponent } from './work-trade.component';

describe('WorkTradeComponent', () => {
  let component: WorkTradeComponent;
  let fixture: ComponentFixture<WorkTradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkTradeComponent]
    });
    fixture = TestBed.createComponent(WorkTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
