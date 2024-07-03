import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactComponent } from './user-contact.component';

describe('UserContactComponent', () => {
  let component: UserContactComponent;
  let fixture: ComponentFixture<UserContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserContactComponent]
    });
    fixture = TestBed.createComponent(UserContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
