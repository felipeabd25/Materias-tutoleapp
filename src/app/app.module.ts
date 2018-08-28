import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MateriasComponent } from './materias/materias.component';
import { DetalleMateriaComponent } from './detalle-materia/detalle-materia.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    DetalleMateriaComponent,
    MensajesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
