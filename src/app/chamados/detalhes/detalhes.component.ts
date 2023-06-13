import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chamado } from '../models/chamado.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  public chamado: Chamado;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.chamado = this.route.snapshot.data['chamado'];
  }

}
