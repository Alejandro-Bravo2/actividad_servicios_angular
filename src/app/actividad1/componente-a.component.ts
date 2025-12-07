import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajesService } from './mensajes.service';

@Component({
  selector: 'app-componente-a',
  imports: [FormsModule],
  template: `<h3>Componente A</h3> <input [(ngModel)]="nuevoMensaje" placeholder="Escribe mensaje..." /> <button (click)="enviarMensaje()">Enviar</button>`
})
export class ComponenteA {
  nuevoMensaje = '';

  constructor(private mensajes: MensajesService) {}

  enviarMensaje() {
    this.mensajes.setMensaje(this.nuevoMensaje);
  }
}
