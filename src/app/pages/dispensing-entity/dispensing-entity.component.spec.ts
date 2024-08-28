import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensingEntityComponent } from './dispensing-entity.component';

describe('DispensingEntityComponent', () => {
  let component: DispensingEntityComponent;
  let fixture: ComponentFixture<DispensingEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispensingEntityComponent]
    });
    fixture = TestBed.createComponent(DispensingEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
