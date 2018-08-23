import { Component, OnInit, Input } from '@angular/core';
import { Materia } from '../materia';

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit {

  @Input() materia: Materia;
  
constructor() { }
  
  ngOnInit() {
  }

}
