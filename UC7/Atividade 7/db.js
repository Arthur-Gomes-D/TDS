const path = require('path');
const { createHash } = require('crypto');
const mysql = require('mysql2/promise');

require('dotenv').config({
    path: path.join(__dirname, '.env'),
    quiet: true
})

const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'escola_app',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'escola_electron_simples',
    charset: 'utf8mb4',
    connectionLimit: 3,
    connectTimeout: 5000
})

function erroValidacao(mensagem) {
    const erro = new Error(mensagem);
    erro.code = 'VALIDACAO';
    throw erro
}

function texto(valor) {
    return typeof valor === 'string' ? valor.trim() : '';
}

function numero(valor) {
    return typeof valor === 'number' ? valor : Number(texto(valor));
}

function validarId(id, mensagem = 'Identificador inválido') {
    if (!Number.isInteger(id) || id < 1 || id > 4294967295) {
        erroValidacao(mensagem);
    }
    return id;
}

function validarCurso(dados) {
    const nome = texto(dados?.nome);
    const cargaHoraria = numero(dados?.cargaHoraria);
    const descricao = texto(dados?.descricao);

    if (!nome || nome.length > 100) {
        erroValidacao('informe um nome de curso válido até 100 caracteres');
    }
    
    if (!Number.isInteger(cargaHoraria) || cargaHoraria <= 1 || cargaHoraria > 10000) {
        erroValidacao('informe uma carga horária válida entre 1 e 10.000 horas');
    }
    if (descricao.length > 200) {
        erroValidacao('use até 200 caracteres na descrição.');
    }
    return [nome, cargaHoraria, descricao];
}

function confirmarRegistro(resultado, id, mensagem) {
    if (!resultado.affectedRows) {
        erroValidacao(mensagem);
    }
    return {id}
}

async function autenticar(dados) {
    const usuario = texto(dados?.usuario);
    const senha = dados?.senha;
    if (!usuario || usuario.length > 100 || typeof senha !== 'string' || !senha || senha.length > 128) {
        erroValidacao('Informe usuário e senha válidos');
    }

    const hash = createHash('md5').update(senha, 'utf8').digest('hex');
    const [usuarios] = await pool.execute(
        'SELECT id, usuario  FROM usuarios WHERE usuario = ? AND senha = ? LIMIT 1', [usuario, hash]
    );
    if (usuarios.length === 0) {
        erroValidacao('Usuário ou senha inválidos');
    }

    return usuarios[0]
}

function validarAluno(dados) {
    const nome = texto(dados?.nome)
    const email = texto(dados?.email)
    const telefone = texto(dados?.telefone)

    if (!nome || nome.length > 100) {
        erroValidacao('Infome um nome de até 100 caracteres.')
    }
    if (!email.length > 150 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        erroValidacao('Infome um e-mail válido de até 150 caracteres.')
    }
    if (!telefone || telefone.length > 20) {
        erroValidacao('Infome um telefone de até 20 caracteres.')
    }
    return [nome, email, telefone]
}

const alunos = {
    async listar () {
        const [linhas] = await pool.execute(
            'SELECT id, nome, email, telefone FROM alunos ORDER BY id DESC'
        );
        return linhas;
    },

    async criar(dados) {
        const [resultado] = await pool.execute(
            'INSERT INTO alunos (nome, email, telefone) VALUES (?, ?, ?)', validarAluno(dados)
        );
        return {id: resultado.insertId}
    },

    async atualizar(dados) {
        const id = validarId(dados?.id);
        const [resultado] = await pool.execute(
            'UPDATE alunos SET nome = ?, email = ?, telefone = ? WHERE id = ?', [...validarAluno(dados), id]
        );
        return confirmarRegistro(resultado, id, 'Aluno não encontrado. atualize a lista')
    },
    
    async excluir(id) {
        const [resultado] = await pool.execute(
            'DELETE FROM alunos WHERE id = ?', [validarId(id)]
        );
        return confirmarRegistro(resultado, id, 'Aluno não encontrado. atualize a lista')
    }
}

const cursos = {
    async listar () {
        const [linhas] = await pool.execute(
            'SELECT id, nome, carga_horaria, descricao FROM cursos ORDER BY id DESC'
        );
        return linhas;
    },
    async criar(dados) {
        const [resultado] = await pool.execute(
            'INSERT INTO cursos (nome, carga_horaria, descricao) VALUES (?, ?, ?)', validarCurso(dados)
        );
        return {id: resultado.insertId}
    },
    async atualizar(dados) {
        const id = validarId(dados?.id);
        const [resultado] = await pool.execute(
            'UPDATE cursos SET nome = ?, carga_horaria = ?, descricao = ? WHERE id = ?', [...validarCurso(dados), id]
        );
        return confirmarRegistro(resultado, id, 'Curso não encontrado. atualize a lista')
    },
    async excluir(id) {
        const [resultado] = await pool.execute(
            'DELETE FROM cursos WHERE id = ?', [validarId(id)]
        );
        return confirmarRegistro(resultado, id, 'Curso não encontrado. atualize a lista')
    }
}

module.exports = {
    autenticar,
    alunos,
    cursos,
    fechar: () => pool.end()
};