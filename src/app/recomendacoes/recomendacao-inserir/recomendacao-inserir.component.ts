import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Recomendacao } from "../Recomendacao.model";

@Component({
  selector: 'app-recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent{

  @Output() recomendacaoAdicionado = new EventEmitter();

  onAdicionarRecomendacao(form: NgForm){
    if (form.invalid) return
    console.log(form)
    const recomendacao: Recomendacao = {
      nome: form.value.nome,
      texto: form.value.texto
    }
    this.recomendacaoAdicionado.emit(recomendacao);
  }
}
