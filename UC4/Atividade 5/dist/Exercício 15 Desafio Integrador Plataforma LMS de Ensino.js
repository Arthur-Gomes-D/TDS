"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    _id;
    _nome;
    _email;
    constructor(id, nome, email) {
        this._id = id;
        this._nome = nome;
        this._email = email;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get email() {
        return this._email;
    }
    set nome(nomeNovo) {
        this._nome = nomeNovo;
    }
    set email(emailNovo) {
        this._email = emailNovo;
    }
    getDescricao() {
        return "Aluno";
    }
}
class Aluno extends Usuario {
    _matricula;
    _cursosInscritos;
    constructor(id, nome, email, matricula) {
        super(id, nome, email);
        this._matricula = matricula;
        this._cursosInscritos = [];
    }
    inscreverCurso(nomeCurso) {
        this._cursosInscritos.push(nomeCurso);
    }
}
class Instrutor extends Usuario {
    _valorHora;
    _horasMinistradas;
    constructor(id, nome, email, valorHora, horasMinistradas) {
        super(id, nome, email);
        this._valorHora = valorHora;
        this._horasMinistradas = horasMinistradas;
    }
    calcularRemuneracao() {
        return this._valorHora * this._horasMinistradas;
    }
}
class Curso {
    _codigo;
    _titulo;
    _instrutor;
    _turma;
    constructor(codigo, titulo, instrutor) {
        this._codigo = codigo;
        this._titulo = titulo;
        this._instrutor = instrutor;
        this._turma = [];
    }
    matricularAluno(aluno) {
        if (this._turma.find((alu) => alu.id == aluno.id)) {
            throw new Error("Aluno já matriculado");
        }
        else {
            console.log("Aluno, matriculado");
            this._turma.push(aluno);
        }
    }
}
let prof = new Instrutor(1, "AAA", "AAA@EMAIL.COM", 100, 10);
let aluno = new Aluno(1, "BBB", "BBB@email.com", "2ioji412");
let cur = new Curso(213, "taaa", prof);
cur.matricularAluno(aluno);
try {
    cur.matricularAluno(aluno);
}
catch (error) {
    console.log("Aluno já matriculado!");
}
