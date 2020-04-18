import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingFormComponent } from './editing-form.component';

describe('EditingFormComponent', () => {
  let component: EditingFormComponent;
  let fixture: ComponentFixture<EditingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
