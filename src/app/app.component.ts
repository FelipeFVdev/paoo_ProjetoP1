import { Component } from '@angular/core';
import { Recomendacao } from './recomendacoes/Recomendacao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProvaP2';

  recomendacoes: Recomendacao [] = []

  onRecomendacaoInserida(recomendacao){
    this.recomendacoes = [...this.recomendacoes, recomendacao]
    console.log(this.recomendacoes)
  }

}
