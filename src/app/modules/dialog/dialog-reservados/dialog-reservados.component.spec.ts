import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReservadosComponent } from './dialog-reservados.component';

describe('DialogReservadosComponent', () => {
  let component: DialogReservadosComponent;
  let fixture: ComponentFixture<DialogReservadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReservadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogReservadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
