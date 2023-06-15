import { Component, Input, OnInit } from '@angular/core';
import { Chamado } from '../../models/chamado.model';

@Component({
  selector: 'app-chamado-detalhes',
  templateUrl: './chamado-detalhes.component.html',
})
export class ChamadoDetalhesComponent{
  @Input() chamado: Chamado;

}
