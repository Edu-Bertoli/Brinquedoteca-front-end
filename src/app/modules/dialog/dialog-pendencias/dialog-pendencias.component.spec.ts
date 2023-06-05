import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPendenciasComponent } from './dialog-pendencias.component';

describe('DialogPendenciasComponent', () => {
  let component: DialogPendenciasComponent;
  let fixture: ComponentFixture<DialogPendenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPendenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPendenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
