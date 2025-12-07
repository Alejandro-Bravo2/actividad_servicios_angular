import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({ providedIn: 'root' })
export class CalculadoraService {
  constructor(private logger: LoggerService) {}

  sumar(a: number, b: number): number {
    const resultado = a + b;
    this.logger.log(`Sumar: ${a} + ${b} = ${resultado}`);
    return resultado;
  }

  restar(a: number, b: number): number {
    const resultado = a - b;
    this.logger.log(`Restar: ${a} - ${b} = ${resultado}`);
    return resultado;
  }
}
