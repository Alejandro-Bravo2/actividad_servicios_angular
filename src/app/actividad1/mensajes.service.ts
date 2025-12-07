import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MensajesService {
  private mensajeSubject = new BehaviorSubject<string>('Mensaje inicial');
  mensaje$ = this.mensajeSubject.asObservable();

  setMensaje(msg: string) {
    this.mensajeSubject.next(msg);
  }
}
