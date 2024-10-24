import { Component, OnInit, ViewChild } from '@angular/core';
import { VideojuegoService } from '../../services/videojuego.service';
import { Videojuego } from '../../models/videojuego.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listado-videojuegos',
  templateUrl: './listado-videojuegos.component.html',
  styleUrls: ['./listado-videojuegos.component.css']
})
export class ListadoVideojuegosComponent implements OnInit {
  displayedColumns: string[] = ['titulo', 'plataforma', 'precio', 'stock', 'acciones'];
  dataSource!: MatTableDataSource<Videojuego>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private videojuegoService: VideojuegoService) { }

  ngOnInit(): void {
    this.obtenerVideojuegos();
  }

  obtenerVideojuegos(): void {
    this.videojuegoService.obtenerVideojuegos().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.error('Error al obtener los videojuegos', error);
      }
    );
  }

  eliminarVideojuego(id: number): void {
    if (confirm('¿Estás seguro de eliminar este videojuego?')) {
      this.videojuegoService.eliminarVideojuego(id).subscribe(
        () => {
          this.dataSource.data = this.dataSource.data.filter(v => v.id !== id);
        },
        (error) => {
          console.error('Error al eliminar el videojuego', error);
        }
      );
    }
  }

  // Filtro para la tabla
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
