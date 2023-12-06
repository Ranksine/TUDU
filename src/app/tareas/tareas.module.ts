import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { ListaComponent } from './pages/lista/lista.component';
import { AppComponent } from './pages/app/app.component';


@NgModule({
  declarations: [
    ListaComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
