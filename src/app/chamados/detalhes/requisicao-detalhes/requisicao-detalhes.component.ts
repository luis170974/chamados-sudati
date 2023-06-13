import { Component, Input, OnInit } from '@angular/core';
import { Chamado } from '../../models/chamado.model';

@Component({
  selector: 'app-requisicao-detalhes',
  templateUrl: './requisicao-detalhes.component.html',
})
export class RequisicaoDetalhesComponent{
  @Input() requisicao: Chamado;

}
