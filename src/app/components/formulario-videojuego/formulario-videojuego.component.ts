import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideojuegoService } from '../../services/videojuego.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Videojuego } from '../../models/videojuego.model';

@Component({
  selector: 'app-formulario-videojuego',
  templateUrl: './formulario-videojuego.component.html',
  styleUrls: ['./formulario-videojuego.component.css']
})
export class FormularioVideojuegoComponent implements OnInit {
  videojuegoForm: FormGroup;
  esModoEdicion: boolean = false;
  idVideojuego: number | null = null;

  constructor(
    private fb: FormBuilder,
    private videojuegoService: VideojuegoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.videojuegoForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      fecha_lanzamiento: ['', Validators.required],
      plataforma: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.idVideojuego = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idVideojuego) {
      this.esModoEdicion = true;
      this.cargarDatosVideojuego(this.idVideojuego);
    }
  }

  cargarDatosVideojuego(id: number): void {
    this.videojuegoService.obtenerVideojuegoPorId(id).subscribe(
      (data) => {
        this.videojuegoForm.patchValue(data);
      },
      (error) => {
        console.error('Error al cargar los datos del videojuego', error);
      }
    );
  }

  agregarOEditarVideojuego(): void {
    if (this.videojuegoForm.valid) {
      if (this.esModoEdicion && this.idVideojuego !== null) {
        this.videojuegoService.actualizarVideojuego(this.idVideojuego, this.videojuegoForm.value).subscribe(
          () => {
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Error al editar el videojuego', error);
          }
        );
      } else {
        this.videojuegoService.crearVideojuego(this.videojuegoForm.value).subscribe(
          () => {
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Error al agregar el videojuego', error);
          }
        );
      }
    }
  }
}
