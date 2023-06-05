import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogemprestadosComponent } from './dialogemprestados.component';

describe('DialogemprestadosComponent', () => {
  let component: DialogemprestadosComponent;
  let fixture: ComponentFixture<DialogemprestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogemprestadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogemprestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
