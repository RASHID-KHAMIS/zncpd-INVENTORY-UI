import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFixedAssetComponent } from './non-fixed-asset.component';

describe('NonFixedAssetComponent', () => {
  let component: NonFixedAssetComponent;
  let fixture: ComponentFixture<NonFixedAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonFixedAssetComponent]
    });
    fixture = TestBed.createComponent(NonFixedAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
