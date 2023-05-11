import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoaComponent } from './manutencaoa.component';

describe('ManutencaoaComponent', () => {
  let component: ManutencaoaComponent;
  let fixture: ComponentFixture<ManutencaoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutencaoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutencaoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
