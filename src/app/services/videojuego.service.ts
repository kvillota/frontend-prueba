import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Videojuego } from '../models/videojuego.model';
import { getApiUrl } from '../helpers/env.helper';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {
  private apiUrl = getApiUrl();

  constructor(private http: HttpClient) { }

  // Obtener todos los videojuegos
  obtenerVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(`${this.apiUrl}/videojuegos`);
  }

  // Obtener un videojuego por ID
  obtenerVideojuegoPorId(id: number): Observable<Videojuego> {
    return this.http.get<Videojuego>(`${this.apiUrl}/videojuegos/${id}`);
  }

  // Crear un nuevo videojuego
  crearVideojuego(videojuego: Videojuego): Observable<Videojuego> {
    return this.http.post<Videojuego>(`${this.apiUrl}/videojuegos`, videojuego);
  }

  // Actualizar un videojuego existente
  actualizarVideojuego(id: number, videojuego: Videojuego): Observable<Videojuego> {
    return this.http.put<Videojuego>(`${this.apiUrl}/videojuegos/${id}`, videojuego);
  }

  // Eliminar un videojuego
  eliminarVideojuego(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/videojuegos/${id}`);
  }
}
