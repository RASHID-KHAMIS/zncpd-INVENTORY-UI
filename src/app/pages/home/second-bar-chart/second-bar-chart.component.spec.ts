import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBarChartComponent } from './second-bar-chart.component';

describe('SecondBarChartComponent', () => {
  let component: SecondBarChartComponent;
  let fixture: ComponentFixture<SecondBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondBarChartComponent]
    });
    fixture = TestBed.createComponent(SecondBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
