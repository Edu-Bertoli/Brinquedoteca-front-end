import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PENDENCIASComponent } from './pendencias.component';

describe('PENDENCIASComponent', () => {
  let component: PENDENCIASComponent;
  let fixture: ComponentFixture<PENDENCIASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PENDENCIASComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PENDENCIASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
