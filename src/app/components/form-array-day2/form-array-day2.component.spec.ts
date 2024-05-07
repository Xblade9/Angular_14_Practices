import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayDay2Component } from './form-array-day2.component';

describe('FormArrayDay2Component', () => {
  let component: FormArrayDay2Component;
  let fixture: ComponentFixture<FormArrayDay2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayDay2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayDay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
