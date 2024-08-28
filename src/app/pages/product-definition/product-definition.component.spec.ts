import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDefinitionComponent } from './product-definition.component';

describe('ProductDefinitionComponent', () => {
  let component: ProductDefinitionComponent;
  let fixture: ComponentFixture<ProductDefinitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDefinitionComponent]
    });
    fixture = TestBed.createComponent(ProductDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
