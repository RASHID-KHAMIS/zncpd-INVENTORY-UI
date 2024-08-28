import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalEntitiesComponent } from './functional-entities.component';

describe('FunctionalEntitiesComponent', () => {
  let component: FunctionalEntitiesComponent;
  let fixture: ComponentFixture<FunctionalEntitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionalEntitiesComponent]
    });
    fixture = TestBed.createComponent(FunctionalEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
