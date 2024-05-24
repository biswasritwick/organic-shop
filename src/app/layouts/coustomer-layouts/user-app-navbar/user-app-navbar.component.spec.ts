import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppNavbarComponent } from './user-app-navbar.component';

describe('UserAppNavbarComponent', () => {
  let component: UserAppNavbarComponent;
  let fixture: ComponentFixture<UserAppNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAppNavbarComponent]
    });
    fixture = TestBed.createComponent(UserAppNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
