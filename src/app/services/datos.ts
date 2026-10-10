import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'

})

export class DatosService {
  nombre = signal('');
  contador = signal(0);
  direccion = signal('');
  telefono = signal('');
  enviado = signal(false);

  guardar(nombre: string, contador: number, direccion: string, telefono: string): void {
    this.nombre.set(nombre);
    this.contador.set(contador);
    this.direccion.set(direccion);
    this.telefono.set(telefono);
    this.enviado.set(true);
  }

}