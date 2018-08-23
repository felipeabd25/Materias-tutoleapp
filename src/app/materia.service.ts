import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Materia } from './materia';
import { MATERIAS } from './mock-materias'
import { MensajeService } from './mensaje.service';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private mensajeService: MensajeService) { }
  getMaterias(): Observable<Materia[]> {
    this.mensajeService.add('MateriaService: fetched materias');
    return of(MATERIAS);
    
}
}
