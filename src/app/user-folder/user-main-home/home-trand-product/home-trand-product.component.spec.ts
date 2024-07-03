import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrandProductComponent } from './home-trand-product.component';

describe('HomeTrandProductComponent', () => {
  let component: HomeTrandProductComponent;
  let fixture: ComponentFixture<HomeTrandProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTrandProductComponent]
    });
    fixture = TestBed.createComponent(HomeTrandProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
