import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBrinquedoCadastroComponent } from './dialog-brinquedo-cadastro.component';

describe('DialogBrinquedoCadastroComponent', () => {
  let component: DialogBrinquedoCadastroComponent;
  let fixture: ComponentFixture<DialogBrinquedoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBrinquedoCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBrinquedoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
