import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBarChartComponent } from './first-bar-chart.component';

describe('FirstBarChartComponent', () => {
  let component: FirstBarChartComponent;
  let fixture: ComponentFixture<FirstBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstBarChartComponent]
    });
    fixture = TestBed.createComponent(FirstBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
