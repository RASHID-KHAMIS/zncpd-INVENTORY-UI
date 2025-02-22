import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedAssetComponent } from './fixed-asset.component';

describe('FixedAssetComponent', () => {
  let component: FixedAssetComponent;
  let fixture: ComponentFixture<FixedAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedAssetComponent]
    });
    fixture = TestBed.createComponent(FixedAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
