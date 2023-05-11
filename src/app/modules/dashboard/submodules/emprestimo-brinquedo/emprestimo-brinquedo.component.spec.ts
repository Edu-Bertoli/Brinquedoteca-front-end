import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoBrinquedoComponent } from './emprestimo-brinquedo.component';

describe('EmprestimoBrinquedoComponent', () => {
  let component: EmprestimoBrinquedoComponent;
  let fixture: ComponentFixture<EmprestimoBrinquedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimoBrinquedoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimoBrinquedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
