class Usuario {
    protected readonly _id: number
    protected _nome: string
    protected _email: string
    constructor(id: number, nome: string, email: string) {
        this._id = id
        this._nome = nome
        this._email = email
    }
    public get id(): number {
        return this._id
    }
    public get nome(): string {
        return this._nome
    }
    public get email(): string {
        return this._email
    }
    public set nome(nomeNovo: string) {
        this._nome = nomeNovo
    }
    public set email(emailNovo: string) {
        this._email = emailNovo
    }
    getDescricao(): string {
        return "Aluno"
    }
}
class Aluno extends Usuario {
    private _matricula: string
    private _cursosInscritos: string[]
    constructor(id: number, nome: string, email: string, matricula: string) {
        super(id, nome, email)
        this._matricula = matricula
        this._cursosInscritos = []
    }
    inscreverCurso(nomeCurso: string): void {
        this._cursosInscritos.push(nomeCurso)
    }
}
class Instrutor extends Usuario {
    private _valorHora: number
    private _horasMinistradas: number
    constructor(id: number, nome: string, email: string, valorHora: number, horasMinistradas: number) {
        super(id, nome, email)
        this._valorHora = valorHora
        this._horasMinistradas = horasMinistradas
    }
    calcularRemuneracao(): number {
        return this._valorHora * this._horasMinistradas
    }
}
class Curso {
    private _codigo: number
    private _titulo: string
    private _instrutor: Instrutor
    private _turma: Aluno[]
    constructor(codigo: number, titulo: string, instrutor: Instrutor) {
        this._codigo = codigo
        this._titulo = titulo
        this._instrutor = instrutor
        this._turma = []
    }
    matricularAluno(aluno: Aluno): void {
        if (this._turma.find((alu) => alu.id == aluno.id)) {
            throw new Error("Aluno já matriculado");
        } else {
            console.log("Aluno, matriculado");
            this._turma.push(aluno)
        }
    }
}
let prof = new Instrutor(1, "AAA", "AAA@EMAIL.COM", 100, 10)
let aluno = new Aluno(1, "BBB", "BBB@email.com", "2ioji412")
let cur = new Curso(213, "taaa", prof)
cur.matricularAluno(aluno)
try {
    cur.matricularAluno(aluno)
} catch (error) {
    console.log("Aluno já matriculado!");
    
}