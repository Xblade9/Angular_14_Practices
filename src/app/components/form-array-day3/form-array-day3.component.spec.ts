import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayDay3Component } from './form-array-day3.component';

describe('FormArrayDay3Component', () => {
  let component: FormArrayDay3Component;
  let fixture: ComponentFixture<FormArrayDay3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayDay3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayDay3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
