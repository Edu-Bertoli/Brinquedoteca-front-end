import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAreaDesenvolvimentoComponent } from './cadastro-area-desenvolvimento.component';

describe('CadastroAreaDesenvolvimentoComponent', () => {
  let component: CadastroAreaDesenvolvimentoComponent;
  let fixture: ComponentFixture<CadastroAreaDesenvolvimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAreaDesenvolvimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAreaDesenvolvimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
