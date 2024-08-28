import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineItemsComponent } from './define-items.component';

describe('DefineItemsComponent', () => {
  let component: DefineItemsComponent;
  let fixture: ComponentFixture<DefineItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefineItemsComponent]
    });
    fixture = TestBed.createComponent(DefineItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
