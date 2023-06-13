import { Departamento } from "src/app/departamentos/models/departamento.model";
import { Funcionario } from "src/app/funcionarios/models/funcionario.model";
import { Movimentacao } from "./movimentacao.model";

export class Chamado {
    id: string;
    descricao: string;
    dataAbertura: Date | any;
    dataAtualizacao: Date | any;

    status: string;
    movimentacoes: Movimentacao[];


    departamentoId: string;
    departamento?: Departamento;

    funcionarioId: string;
    funcionario?: Funcionario;

}
