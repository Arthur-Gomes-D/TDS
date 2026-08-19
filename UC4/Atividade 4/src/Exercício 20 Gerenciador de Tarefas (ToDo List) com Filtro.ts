let proximo_id = 0
class Tarefa {
    private _id: number
    private _descricao: string
    private _concluido: boolean
    constructor(id: number, descricao: string, concluido: boolean) {
        this._id = id
        this._descricao = descricao
        this._concluido = concluido
    }
    public get id(): number {
        return this._id
    }
    public get concluido(): boolean {
        return this._concluido
    }
    public get descricao():string {
        return this._descricao
    }
    public set concluido(estado: boolean) {
        this._concluido = estado
    }
}

class GerenciadorTarefas {
    private tarefas: Tarefa[]
    constructor() {
        this.tarefas = []
    }
    public adicionarTarefa(descricao: string):void {
        this.tarefas.push(new Tarefa(proximo_id, descricao, false))
        console.log("tarefa adicionada!");
        proximo_id += 1
        
    }
    public concluirTarefa(id: number):void {
        for (const tarefa of this.tarefas) {
            if (tarefa.id == id) {
                tarefa.concluido = true
                console.log(`tarefa "${tarefa.descricao}" concluida`)
            }
        }
    }
    public listarPendentes():void {
        const naoConcluido = this.tarefas.filter((tarefa) => tarefa.concluido == false)
        for (let i = 0; i <= naoConcluido.length-1; i++){
            console.log(naoConcluido[i].descricao);
            
        }
        
    }
}
let lista = new GerenciadorTarefas()
lista.adicionarTarefa("Concluir tarefas")
lista.adicionarTarefa("Estudar Typescript")
lista.concluirTarefa(1)
lista.listarPendentes()