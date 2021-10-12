import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLogueadoComponent } from './error-logueado.component';

describe('ErrorLogueadoComponent', () => {
  let component: ErrorLogueadoComponent;
  let fixture: ComponentFixture<ErrorLogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorLogueadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
