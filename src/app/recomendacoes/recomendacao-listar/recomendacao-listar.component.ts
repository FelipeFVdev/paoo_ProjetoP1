import { Component, Input, OnInit } from '@angular/core';
import { Recomendacao } from '../Recomendacao.model';

@Component({
  selector: 'recomendacao-listar',
  templateUrl: './recomendacao-listar.component.html',
  styleUrls: ['./recomendacao-listar.component.css']
})
export class RecomendacaoListarComponent implements OnInit {

  @Input() recomendacoes: Recomendacao[] = [ ]

  constructor() { }


  ngOnInit(): void {
  }

}

