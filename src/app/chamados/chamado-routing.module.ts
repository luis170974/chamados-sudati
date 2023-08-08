import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ChamadoComponent } from './chamado.component';
import { ChamadoResolver } from './services/chamado.resolver';
import { ChamadosFuncionarioComponent } from './chamados-funcionario/chamados-funcionario.component';

const routes: Routes = [
  { path: "",
  component: ChamadoComponent,
  children: [
    { path: "", redirectTo: "funcionario", pathMatch:"full"},
    { path: "funcionario", component: ChamadosFuncionarioComponent}

    ]
  },
    { path: ":id", component: DetalhesComponent, resolve: { chamado: ChamadoResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadoRoutingModule { }
