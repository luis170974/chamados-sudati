import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, AbstractControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { Departamento } from 'src/app/departamentos/models/departamento.model';
import { DepartamentoService } from 'src/app/departamentos/services/departamento.service';
import { Funcionario } from 'src/app/funcionarios/models/funcionario.model';
import { FuncionarioService } from 'src/app/funcionarios/services/funcionario.service';
import { Chamado } from '../models/chamado.model';
import { ChamadoService } from '../services/chamado.service';

@Component({
  selector: 'app-chamados-funcionario',
  templateUrl: './chamados-funcionario.component.html'
})
export class ChamadosFuncionarioComponent implements OnInit, OnDestroy {
  public requisicoes$: Observable<Chamado[]>;
  public departamentos$: Observable<Departamento[]>;
  private processoAutenticado$: Subscription;

  public funcionarioLogado: Funcionario;
  public form: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private chamadoService: ChamadoService,
    private departamentoService: DepartamentoService,
    private funcionarioService: FuncionarioService,
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: new FormControl(""),
      descricao: new FormControl("", [Validators.required, Validators.minLength(6)]),
      dataAbertura: new FormControl(""),

      funcionarioId: new FormControl(""),
      funcionario: new FormControl(""),

      departamentoId: new FormControl("", [Validators.required]),
      departamento: new FormControl(""),


    });

    this.departamentos$ = this.departamentoService.selecionarTodos();
    this.requisicoes$ = this.chamadoService.selecionarTodos();

    this.processoAutenticado$ = this.authService.usuarioLogado.subscribe(usuario => {
      const email: string = usuario?.email!;

      this.funcionarioService.selecionarFuncionarioLogado(email)
        .subscribe(funcionario => this.funcionarioLogado = funcionario);



    });
  }

  ngOnDestroy(): void {
    this.processoAutenticado$.unsubscribe();
  }

  get tituloModal(): string {
    return this.id?.value ? "Atualização" : "Cadastro";
  }

  get id(): AbstractControl | null {
    return this.form.get("id");
  }

  get departamentoId() {
    return this.form.get("departamentoId");
  }

  get descricao() {
    return this.form.get("descricao");
  }

  public async gravar(modal: TemplateRef<any>, chamado?: Chamado) {
    this.form.reset();
    this.configurarValoresPadrao();

    if (chamado) {
      const departamento = chamado.departamento ? chamado.departamento : null;
      const funcionario = chamado.funcionario ? chamado.funcionario : null;

      const requisicaoCompleta = {
        ...chamado,
        departamento,
        funcionario
      }

      this.form.setValue(requisicaoCompleta);
    }

    try {
      await this.modalService.open(modal).result;

      if (this.form.dirty && this.form.valid) {
        if (!chamado)
          await this.chamadoService.inserir(this.form.value);
        else
          await this.chamadoService.editar(this.form.value);

        this.toastrService.success(`A requisição foi salva com sucesso!`, "Cadastro de Requisições");
      }
      else
        this.toastrService.error("Verifique o preenchimento do formulário e tente novamente.", "Cadastro de Requisições")

    } catch (error) {
      if (error != "fechar" && error != "0" && error != "1")
        this.toastrService.error("Houve um erro ao salvar a requisição. Tente novamente.", "Cadastro de Requisições")
    }

  }

  public async excluir(requisicao: Chamado) {
    try {
      await this.chamadoService.excluir(requisicao);

      this.toastrService.success(`A requisição foi excluída com sucesso!`, "Cadastro de Requisições");
    } catch (error) {
      this.toastrService.error("Houve um erro ao excluir a requisição. Tente novamente.", "Cadastro de Requisições")
    }
  }

  private configurarValoresPadrao(): void {
    this.form.get("dataAbertura")?.setValue(new Date());
    this.form.get("funcionarioId")?.setValue(this.funcionarioLogado.id);
  }

}
