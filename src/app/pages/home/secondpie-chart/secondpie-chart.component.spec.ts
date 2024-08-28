import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondpieChartComponent } from './secondpie-chart.component';

describe('SecondpieChartComponent', () => {
  let component: SecondpieChartComponent;
  let fixture: ComponentFixture<SecondpieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondpieChartComponent]
    });
    fixture = TestBed.createComponent(SecondpieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
