import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia';
import { MateriaService }  from '../materia.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  materias: Materia[] = [];

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.getMaterias();
  }

  getMaterias(): void {
    this.materiaService.getMaterias()
      .subscribe(materias => this.materias = materias.slice(1, 5));
  }
}