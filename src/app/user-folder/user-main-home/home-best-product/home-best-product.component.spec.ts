import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBestProductComponent } from './home-best-product.component';

describe('HomeBestProductComponent', () => {
  let component: HomeBestProductComponent;
  let fixture: ComponentFixture<HomeBestProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBestProductComponent]
    });
    fixture = TestBed.createComponent(HomeBestProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
