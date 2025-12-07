import { Component } from '@angular/core';
import { MensajesService } from './mensajes.service';

@Component({
  selector: 'app-componente-b',
  imports: [],
  template: `<h3>Componente B</h3> <p>Mensaje recibido: {{ mensaje }}</p>`
})
export class ComponenteB {
  mensaje: string = '';

  constructor(private mensajes: MensajesService) {
    this.mensajes.mensaje$.subscribe(msg => this.mensaje = msg);
  }
}
