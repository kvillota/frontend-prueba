import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideojuegoService } from '../../services/videojuego.service';
import { Videojuego } from '../../models/videojuego.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css']
})
export class DetalleVideojuegoComponent implements OnInit {
  videojuego: Videojuego | undefined;

  constructor(
    private route: ActivatedRoute,  // Para obtener el ID desde la URL
    private videojuegoService: VideojuegoService,  // El servicio para obtener el videojuego
    private router: Router  // Para la navegación
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.obtenerDetallesVideojuego(id);
  }

  obtenerDetallesVideojuego(id: number): void {
    this.videojuegoService.obtenerVideojuegoPorId(id).subscribe(
      (data) => {
        this.videojuego = data;
      },
      (error) => {
        console.error('Error al obtener los detalles del videojuego', error);
      }
    );
  }

  // Método para volver al listado de videojuegos
  volver(): void {
    this.router.navigate(['/dashboard']);
  }
}
