import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppFooterComponent } from './user-app-footer.component';

describe('UserAppFooterComponent', () => {
  let component: UserAppFooterComponent;
  let fixture: ComponentFixture<UserAppFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAppFooterComponent]
    });
    fixture = TestBed.createComponent(UserAppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
