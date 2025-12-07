import { Component } from '@angular/core';
import { ContadorService } from './contador.service';

@Component({
  selector: 'app-componente-x',
  imports: [],
  template: `<button (click)="incrementar()">+</button> <span>{{ valor }}</span> <button (click)="decrementar()">-</button>`
})
export class ComponenteX {
  valor = 0;

  constructor(private contador: ContadorService) {
    this.contador.valor$.subscribe(v => this.valor = v);
  }

  incrementar() { this.contador.incrementar(); }
  decrementar() { this.contador.decrementar(); }
}
