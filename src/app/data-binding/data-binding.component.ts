import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://github.com/rafaelsous';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature';

  getValor() {
    return 1;
  }

  curtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
