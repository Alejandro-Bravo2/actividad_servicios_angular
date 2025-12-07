import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContadorService {
  private valorSubject = new BehaviorSubject<number>(0);
  valor$ = this.valorSubject.asObservable();

  incrementar() { this.valorSubject.next(this.valorSubject.value + 1); }
  decrementar() { this.valorSubject.next(this.valorSubject.value - 1); }
  obtenerValor() { return this.valorSubject.value; }
}
