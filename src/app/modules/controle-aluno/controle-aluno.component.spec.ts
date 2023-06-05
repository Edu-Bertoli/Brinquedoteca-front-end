import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleAlunoComponent } from './controle-aluno.component';

describe('ControleAlunoComponent', () => {
  let component: ControleAlunoComponent;
  let fixture: ComponentFixture<ControleAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
