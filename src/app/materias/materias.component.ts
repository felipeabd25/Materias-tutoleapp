import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia';
//import { MATERIAS } from '../mock-materias';
import { MateriaService } from '../materia.service'

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
//export class MateriasComponent implements OnInit {
 
 // selectedMateria: Materia;

  //materias: Materia[];
  
 // constructor(private materiaService: MateriaService) { }

  //ngOnInit() {
    //.getMaterias();
  //}
 
 // onSelect(materia: Materia): void {
  //  this.selectedMateria = materia;
  //}
 // getMaterias(): void {
   // this.materiaService.getMaterias()
    //  .subscribe(materias => this.materias = materias);
 // }
//}
export class MateriasComponent implements OnInit {
  materias: Materia[];

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.getMaterias();
  }

  getMaterias(): void {
    this.materiaService.getMaterias()
    .subscribe(materias => this.materias = materias);
  }
}
