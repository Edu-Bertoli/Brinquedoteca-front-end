import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiallogReservaParte2Component } from './diallog-reserva-parte2.component';

describe('DiallogReservaParte2Component', () => {
  let component: DiallogReservaParte2Component;
  let fixture: ComponentFixture<DiallogReservaParte2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiallogReservaParte2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiallogReservaParte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
