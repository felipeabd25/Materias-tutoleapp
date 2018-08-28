import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Materia }         from '../materia';
import { MateriaService }  from '../materia.service';
 
@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: [ './detalle-materia.component.css' ]
})
export class DetalleMateriaComponent implements OnInit {
  
  materia: Materia;
 
  constructor(
    private route: ActivatedRoute,
    private materiaService: MateriaService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.getMateria();
  }
 
  getMateria(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.materiaService.getMateria(id)
      .subscribe(materia => this.materia = materia);
  }
 
  goBack(): void {
    this.location.back();
  }
}