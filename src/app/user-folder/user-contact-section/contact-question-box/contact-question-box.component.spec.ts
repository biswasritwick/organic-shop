import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactQuestionBoxComponent } from './contact-question-box.component';

describe('ContactQuestionBoxComponent', () => {
  let component: ContactQuestionBoxComponent;
  let fixture: ComponentFixture<ContactQuestionBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactQuestionBoxComponent]
    });
    fixture = TestBed.createComponent(ContactQuestionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
