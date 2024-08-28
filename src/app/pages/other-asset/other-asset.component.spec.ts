import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAssetComponent } from './other-asset.component';

describe('OtherAssetComponent', () => {
  let component: OtherAssetComponent;
  let fixture: ComponentFixture<OtherAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherAssetComponent]
    });
    fixture = TestBed.createComponent(OtherAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
