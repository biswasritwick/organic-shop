import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatagorySectiionComponent } from './product-catagory-sectiion.component';

describe('ProductCatagorySectiionComponent', () => {
  let component: ProductCatagorySectiionComponent;
  let fixture: ComponentFixture<ProductCatagorySectiionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCatagorySectiionComponent]
    });
    fixture = TestBed.createComponent(ProductCatagorySectiionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
