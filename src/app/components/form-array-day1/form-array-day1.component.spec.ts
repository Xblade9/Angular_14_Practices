import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayDay1Component } from './form-array-day1.component';

describe('FormArrayDay1Component', () => {
  let component: FormArrayDay1Component;
  let fixture: ComponentFixture<FormArrayDay1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayDay1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayDay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
