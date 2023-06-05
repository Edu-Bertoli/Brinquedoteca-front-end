import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogControleUsuarioEditComponent } from './dialog-controle-usuario-edit.component';

describe('DialogControleUsuarioEditComponent', () => {
  let component: DialogControleUsuarioEditComponent;
  let fixture: ComponentFixture<DialogControleUsuarioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogControleUsuarioEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogControleUsuarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
