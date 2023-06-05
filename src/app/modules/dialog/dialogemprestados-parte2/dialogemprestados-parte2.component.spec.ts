import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogemprestadosParte2Component } from './dialogemprestados-parte2.component';

describe('DialogemprestadosParte2Component', () => {
  let component: DialogemprestadosParte2Component;
  let fixture: ComponentFixture<DialogemprestadosParte2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogemprestadosParte2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogemprestadosParte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
