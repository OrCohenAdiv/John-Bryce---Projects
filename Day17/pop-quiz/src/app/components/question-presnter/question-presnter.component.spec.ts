import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPresnterComponent } from './question-presnter.component';

describe('QuestionPresnterComponent', () => {
  let component: QuestionPresnterComponent;
  let fixture: ComponentFixture<QuestionPresnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionPresnterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPresnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
