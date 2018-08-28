import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Materia } from './materia';
import { MATERIAS } from './mock-materias'
import { MensajeService } from './mensaje.service';

@Injectable({providedIn: 'root'})

export class MateriaService {

  constructor(private mensajeService: MensajeService) { }
  
  getMaterias(): Observable<Materia[]> {
    this.mensajeService.add('MateriaService: fetched materias');
    return of(MATERIAS);
    }
    getMateria(id: number): Observable<Materia> {
      // TODO: send the message _after_ fetching the hero
      this.mensajeService.add(`materiaService: fetched materia id=${id}`);
      return of(MATERIAS.find(materia => materia.id === id));
    }
}
