import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMobileNavComponent } from './user-mobile-nav.component';

describe('UserMobileNavComponent', () => {
  let component: UserMobileNavComponent;
  let fixture: ComponentFixture<UserMobileNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMobileNavComponent]
    });
    fixture = TestBed.createComponent(UserMobileNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
