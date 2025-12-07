import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(mensaje: string) { console.log('[LOG]:', mensaje); }
}
