import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFacilityComponent } from './sub-facility.component';

describe('SubFacilityComponent', () => {
  let component: SubFacilityComponent;
  let fixture: ComponentFixture<SubFacilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubFacilityComponent]
    });
    fixture = TestBed.createComponent(SubFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
