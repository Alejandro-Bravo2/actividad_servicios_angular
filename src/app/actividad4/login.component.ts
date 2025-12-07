import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  template: `<div *ngIf="!loggedIn"> <button (click)="login()">Entrar</button> </div> <div *ngIf="loggedIn"> <p>Bienvenido, usuario!</p> <button (click)="logout()">Salir</button> </div>`
})
export class LoginComponent {
  loggedIn = false;

  constructor(private auth: AuthService) {
    this.auth.isLoggedIn$.subscribe(x => this.loggedIn = x);
  }

  login() { this.auth.login(); }
  logout() { this.auth.logout(); }
}
