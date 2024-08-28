import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalEntitiesComponent } from './organizational-entities.component';

describe('OrganizationalEntitiesComponent', () => {
  let component: OrganizationalEntitiesComponent;
  let fixture: ComponentFixture<OrganizationalEntitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationalEntitiesComponent]
    });
    fixture = TestBed.createComponent(OrganizationalEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
