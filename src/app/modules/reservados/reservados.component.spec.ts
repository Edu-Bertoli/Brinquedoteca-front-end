import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservadosComponent } from './reservados.component';

describe('ReservadosComponent', () => {
  let component: ReservadosComponent;
  let fixture: ComponentFixture<ReservadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
