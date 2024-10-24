import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVideojuegosComponent } from './listado-videojuegos.component';

describe('ListadoVideojuegosComponent', () => {
  let component: ListadoVideojuegosComponent;
  let fixture: ComponentFixture<ListadoVideojuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoVideojuegosComponent]
    });
    fixture = TestBed.createComponent(ListadoVideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
