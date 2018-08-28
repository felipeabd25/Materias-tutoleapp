import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MateriasComponent }      from './materias/materias.component';
import { DetalleMateriaComponent }  from './detalle-materia/detalle-materia.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  { path: 'materias', component: MateriasComponent },
  { path: 'detail/:id', component: DetalleMateriaComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
//