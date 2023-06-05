import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReservaComponent } from './dialog-reserva.component';

describe('DialogReservaComponent', () => {
  let component: DialogReservaComponent;
  let fixture: ComponentFixture<DialogReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
