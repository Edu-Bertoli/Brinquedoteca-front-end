import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPendenciasParte2Component } from './dialog-pendencias-parte2.component';

describe('DialogPendenciasParte2Component', () => {
  let component: DialogPendenciasParte2Component;
  let fixture: ComponentFixture<DialogPendenciasParte2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPendenciasParte2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPendenciasParte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
