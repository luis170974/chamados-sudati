import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable, take } from 'rxjs';
import { Departamento } from 'src/app/departamentos/models/departamento.model';
import { Funcionario } from 'src/app/funcionarios/models/funcionario.model';
import { Chamado } from '../models/chamado.model';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {
  private registros: AngularFirestoreCollection<Chamado>;

  constructor(private firestore: AngularFirestore) {
    this.registros =
      this.firestore.collection<Chamado>("requisicoes");
  }

  public async inserir(registro: Chamado): Promise<any> {
    if (!registro)
      return Promise.reject("Item inválido");

    const res = await this.registros.add(registro);

    registro.id = res.id;

    this.registros.doc(res.id).set(registro);
  }

  public editar(registro: Chamado): Promise<void> {
    return this.registros.doc(registro.id).set(registro);
  }

  public excluir(registro: Chamado): Promise<void> {
    return this.registros.doc(registro.id).delete();
  }

  public selecionarTodos(): Observable<Chamado[]> {
    return this.registros.valueChanges()
      .pipe(
        map((requisicoes: Chamado[]) => {
          requisicoes.forEach(requisicao => {
            this.firestore
              .collection<Departamento>("departamentos")
              .doc(requisicao.departamentoId)
              .valueChanges()
              .subscribe(d => requisicao.departamento = d);

              this.firestore.
              collection<Funcionario>("funcionarios")
              .doc(requisicao.funcionarioId)
              .valueChanges()
              .subscribe(f => requisicao.funcionario = f);


          });

          return requisicoes;
        })
      );
  }



 public selecionarPorId(id: string): Observable<Chamado>{
  return this.selecionarTodos()
  .pipe(
    take(1),
    map(requisicoes => {
      return requisicoes.filter(requisicoes => requisicoes.id === id)[0];
    })
  );

 }
}
