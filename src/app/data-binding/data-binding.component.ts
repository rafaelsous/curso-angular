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
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  curtirCurso() {
    return true;
  }

  informarQueOBotaoFoiClicado() {
    alert('Ooopa! Você me clicou?!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valorInformado: string) {
    this.valorSalvo = valorInformado;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
