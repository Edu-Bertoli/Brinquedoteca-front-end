import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogmanutencaoParte22Component } from './dialogmanutencao-parte22.component';

describe('DialogmanutencaoParte22Component', () => {
  let component: DialogmanutencaoParte22Component;
  let fixture: ComponentFixture<DialogmanutencaoParte22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogmanutencaoParte22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogmanutencaoParte22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
