import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamado } from '../models/chamado.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent implements OnInit {

  public chamado: Chamado;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.chamado = this.route.snapshot.data['chamado'];
  }


}
