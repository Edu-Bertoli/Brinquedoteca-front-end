import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClassificacaoComponent } from './cadastro-classificacao.component';

describe('CadastroClassificacaoComponent', () => {
  let component: CadastroClassificacaoComponent;
  let fixture: ComponentFixture<CadastroClassificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroClassificacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroClassificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
