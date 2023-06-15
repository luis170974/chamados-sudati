import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PainelComponent } from './painel/painel.component';
import { LoginGuard } from './auth/services/login.guard';
import { AuthGuard } from './auth/services/auth.guard';


const routes: Routes =   [{ path: "", redirectTo: "login", pathMatch: "full" },
{ path: "login", component: LoginComponent, canActivate: [LoginGuard] },
{ path: "painel", component: PainelComponent, canActivate: [AuthGuard] },


{
  path: "chamados",
  loadChildren: () => import("./chamados/chamado.module")
    .then(m => m.ChamadoModule),
  canActivate: [AuthGuard]
},

{
  path: "departamentos",
  loadChildren: () => import("./departamentos/departamento.module")
    .then(m => m.DepartamentosModule),
  canActivate: [AuthGuard]
},

{
  path: "funcionarios",
  loadChildren: () => import("./funcionarios/funcionario.module")
    .then(m => m.FuncionariosModule),
  canActivate: [AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
