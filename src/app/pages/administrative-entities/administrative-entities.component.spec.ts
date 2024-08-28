import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeEntitiesComponent } from './administrative-entities.component';

describe('AdministrativeEntitiesComponent', () => {
  let component: AdministrativeEntitiesComponent;
  let fixture: ComponentFixture<AdministrativeEntitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrativeEntitiesComponent]
    });
    fixture = TestBed.createComponent(AdministrativeEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
