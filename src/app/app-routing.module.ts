import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoVideojuegosComponent } from './components/listado-videojuegos/listado-videojuegos.component';
import { DetalleVideojuegoComponent } from './components/detalle-videojuego/detalle-videojuego.component';
import { FormularioVideojuegoComponent } from './components/formulario-videojuego/formulario-videojuego.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// import { LoginComponent } from './components/login/login.component';
// import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // Redirigir al Dashboard por defecto
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: ListadoVideojuegosComponent },
      { path: 'videojuegos/:id', component: DetalleVideojuegoComponent },
      { path: 'nuevo-videojuego', component: FormularioVideojuegoComponent },
      { path: 'editar-videojuego/:id', component: FormularioVideojuegoComponent }
    ]
  },

  // { path: 'login', component: LoginComponent },
  // { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: 'dashboard' }  // Cualquier ruta no encontrada redirige al Dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
