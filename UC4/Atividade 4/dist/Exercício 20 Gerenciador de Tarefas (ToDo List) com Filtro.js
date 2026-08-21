"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let proximo_id = 0;
class Tarefa {
    _id;
    _descricao;
    _concluido;
    constructor(id, descricao, concluido) {
        this._id = id;
        this._descricao = descricao;
        this._concluido = concluido;
    }
    get id() {
        return this._id;
    }
    get concluido() {
        return this._concluido;
    }
    get descricao() {
        return this._descricao;
    }
    set concluido(estado) {
        this._concluido = estado;
    }
}
class GerenciadorTarefas {
    tarefas;
    constructor() {
        this.tarefas = [];
    }
    adicionarTarefa(descricao) {
        this.tarefas.push(new Tarefa(proximo_id, descricao, false));
        console.log("tarefa adicionada!");
        proximo_id += 1;
    }
    concluirTarefa(id) {
        for (const tarefa of this.tarefas) {
            if (tarefa.id == id) {
                tarefa.concluido = true;
                console.log(`tarefa "${tarefa.descricao}" concluida`);
            }
        }
    }
    listarPendentes() {
        const naoConcluido = this.tarefas.filter((tarefa) => tarefa.concluido == false);
        for (let i = 0; i <= naoConcluido.length - 1; i++) {
            console.log(naoConcluido[i].descricao);
        }
    }
}
let lista = new GerenciadorTarefas();
lista.adicionarTarefa("Concluir tarefas");
lista.adicionarTarefa("Estudar Typescript");
lista.concluirTarefa(1);
lista.listarPendentes();
