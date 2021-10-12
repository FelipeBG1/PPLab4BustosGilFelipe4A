import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRepartidorComponent } from './detalles-repartidor.component';

describe('DetallesRepartidorComponent', () => {
  let component: DetallesRepartidorComponent;
  let fixture: ComponentFixture<DetallesRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
