import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInStoreComponent } from './asset-in-store.component';

describe('AssetInStoreComponent', () => {
  let component: AssetInStoreComponent;
  let fixture: ComponentFixture<AssetInStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetInStoreComponent]
    });
    fixture = TestBed.createComponent(AssetInStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
