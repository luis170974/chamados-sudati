import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadoRoutingModule } from './chamado-routing.module';
import { ChamadoComponent } from './chamado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ChamadosFuncionarioComponent } from './chamados-funcionario/chamados-funcionario.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ChamadoDetalhesComponent } from './detalhes/requisicao-detalhes/chamado-detalhes.component';



@NgModule({
  declarations: [
    ChamadoComponent,
    ChamadosFuncionarioComponent,
    DetalhesComponent,
    ChamadoDetalhesComponent,

  ],
  imports: [
    CommonModule,
    ChamadoRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class ChamadoModule { }
