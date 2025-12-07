import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponenteA } from './actividad1/componente-a.component';
import { ComponenteB } from './actividad1/componente-b.component';
import { PostsComponent } from './actividad2/posts.component';
import { ComponenteX } from './actividad3/componente-x.component';
import { ComponenteY } from './actividad3/componente-y.component';
import { LoginComponent } from './actividad4/login.component';
import { CalculadoraComponent } from './actividad5/calculadora.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    ComponenteA,
    ComponenteB,
    PostsComponent,
    ComponenteX,
    ComponenteY,
    LoginComponent,
    CalculadoraComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
