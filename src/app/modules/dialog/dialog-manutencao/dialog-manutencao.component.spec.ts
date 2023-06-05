import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManutencaoComponent } from './dialog-manutencao.component';

describe('DialogManutencaoComponent', () => {
  let component: DialogManutencaoComponent;
  let fixture: ComponentFixture<DialogManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManutencaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
