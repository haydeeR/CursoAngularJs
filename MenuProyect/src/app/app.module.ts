import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './app.inicio.component';
import { NosotrosComponent } from './app.nosotros.component';
import { TiendaComponent } from './app.tienda.component';

import { routing } from './app.routing';
import { EmpleadoService } from './empleado.service';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GradosPipe } from './grados.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    TiendaComponent,
    EmpleadoComponent,
    ContactoComponent,
    GradosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
