import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculadoraService } from './calculadora.service';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  template: `<input type="number" [(ngModel)]="a"> <input type="number" [(ngModel)]="b"> <button (click)="sumar()">Sumar</button> <button (click)="restar()">Restar</button> <p>Resultado: {{ resultado }}</p>`
})
export class CalculadoraComponent {
  a = 0; b = 0; resultado = 0;

  constructor(private calc: CalculadoraService) {}

  sumar() { this.resultado = this.calc.sumar(this.a, this.b); }
  restar() { this.resultado = this.calc.restar(this.a, this.b); }
}
