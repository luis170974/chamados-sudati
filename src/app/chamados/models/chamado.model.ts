import { Departamento } from "src/app/departamentos/models/departamento.model";
import { Funcionario } from "src/app/funcionarios/models/funcionario.model";

export class Chamado {
  id: string;
  descricao: string;
  dataAbertura: Date | any;

  funcionarioId: string;
  funcionario?: Funcionario;

  departamentoId: string;
  departamento?: Departamento;




}
