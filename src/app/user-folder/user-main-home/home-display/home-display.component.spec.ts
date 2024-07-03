import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDisplayComponent } from './home-display.component';

describe('HomeDisplayComponent', () => {
  let component: HomeDisplayComponent;
  let fixture: ComponentFixture<HomeDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDisplayComponent]
    });
    fixture = TestBed.createComponent(HomeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
