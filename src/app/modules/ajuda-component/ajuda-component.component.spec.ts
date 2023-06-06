import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudaComponentComponent } from './ajuda-component.component';

describe('AjudaComponentComponent', () => {
  let component: AjudaComponentComponent;
  let fixture: ComponentFixture<AjudaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjudaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjudaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
