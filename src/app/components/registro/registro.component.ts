import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegistro(): void {
    if (this.registroForm.valid) {
      const { nombre, email, password } = this.registroForm.value;
      this.authService.registro(nombre, email, password).subscribe(
        response => {
          console.log('Registro exitoso', response);

          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    }
  }
}
