import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPieChartComponent } from './third-pie-chart.component';

describe('ThirdPieChartComponent', () => {
  let component: ThirdPieChartComponent;
  let fixture: ComponentFixture<ThirdPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdPieChartComponent]
    });
    fixture = TestBed.createComponent(ThirdPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
