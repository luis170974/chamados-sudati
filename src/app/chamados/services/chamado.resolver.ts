import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Chamado } from '../models/chamado.model';
import { ChamadoService } from './chamado.service';

@Injectable({
  providedIn: 'root'
})
export class ChamadoResolver implements Resolve<Chamado> {

  constructor(private chamadoService: ChamadoService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chamado> {
    return this.chamadoService.selecionarPorId(route.params['id']);
  }
}
