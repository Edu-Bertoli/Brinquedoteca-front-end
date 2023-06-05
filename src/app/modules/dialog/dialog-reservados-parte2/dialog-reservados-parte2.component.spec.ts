import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReservadosParte2Component } from './dialog-reservados-parte2.component';

describe('DialogReservadosParte2Component', () => {
  let component: DialogReservadosParte2Component;
  let fixture: ComponentFixture<DialogReservadosParte2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReservadosParte2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogReservadosParte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
