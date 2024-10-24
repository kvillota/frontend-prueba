import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVideojuegoComponent } from './detalle-videojuego.component';

describe('DetalleVideojuegoComponent', () => {
  let component: DetalleVideojuegoComponent;
  let fixture: ComponentFixture<DetalleVideojuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleVideojuegoComponent]
    });
    fixture = TestBed.createComponent(DetalleVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
