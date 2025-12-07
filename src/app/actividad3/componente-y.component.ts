import { Component } from '@angular/core';
import { ContadorService } from './contador.service';

@Component({
  selector: 'app-componente-y',
  imports: [],
  template: `<h4>Valor global: {{ valor }}</h4>`
})
export class ComponenteY {
  valor = 0;

  constructor(private contador: ContadorService) {
    this.contador.valor$.subscribe(v => this.valor = v);
  }
}
