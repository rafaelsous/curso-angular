import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private cursoService: CursosService) {
    this.nomePortal = 'https://github.com/rafaelsous';
    this.cursos = this.cursoService.getCursos();
  }

  ngOnInit(): void {
  }

}
