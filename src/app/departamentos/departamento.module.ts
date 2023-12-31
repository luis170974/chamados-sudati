import { LimitadorDigitos } from './models/limitarDigitos';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoComponent } from './departamento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DepartamentoComponent,
    LimitadorDigitos
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    DepartamentoRoutingModule
  ]
})
export class DepartamentosModule { }
